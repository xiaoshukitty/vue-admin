<template>
  <div class="el-map">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ $t('headerList.ElMap') }}</span>
      </div>
      <el-button type="primary" @click="dialogVisible = true;">
        地图</el-button>
      <el-dialog @close="closeDialog" :visible.sync="dialogVisible" width="70%" height="60%" top="10vh">
        <div class="amap-page-container" style="width: 100%; height: 550px; margin: 0px">
          <!-- 输入框搜索 -->
          <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult">
          </el-amap-search-box>
          <!--  地图 -->
          <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin"
            :events="events" class="amap-demo">
            <!-- 自定义当前定位 -->
            <!-- <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker"></el-amap-marker> -->
            <el-amap-marker v-for="(item, index) in markers" :key="index" :position="item.position" :label="item.label"
              :icon="item.icon" />
          </el-amap>
          <div style="display: flex; position: relative">
            <div class="adress">
              <p>{{ address }}</p>
              <p>{{ center }}</p>
            </div>
            <div class="confirm" @click="comfirmLngLat(center, address)">确定</div>
          </div>
        </div>
      </el-dialog>
    </el-card>

  </div>
</template>

<script>
import { getDistances } from '@/utils'
import { AMapManager } from "vue-amap";
let amapManager = new AMapManager(); //地图管理对象
export default {
  data() {
    const that = this;
    return {
      dialogVisible: false,
      zoom: 15,// 地图缩放
      address: "",//获取的位置
      center: [114.302444, 30.544673],// 初始中心
      markers: [],// 初始化标点坐标
      searchOption: { // 搜索
        city: "",//搜索范围
        citylimit: false, // 不限制搜索范围搜索，比如想全国搜索
      },
      amapManager,
      plugin: [
        { //地图左上角的选择插件
          pName: "ToolBar",
          defaultType: 0,
          events: {
          },
        },
        { //地图右上角选择插件
          pName: "MapType",
          defaultType: 0,
          events: {
          },
        },
        {//  自动定位到当前位置 插件
          pName: "Geolocation",
          events: {
            init(geolocation) {
              // o 是高德地图定位插件实例
              geolocation.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  that.lng = result.position.lng;
                  that.lat = result.position.lat;
                  that.address = result.formattedAddress;
                  that.center = [that.lng, that.lat];
                  //   console.log(that.center, 99666);
                  let o = amapManager.getMap();
                  if (!that.marker) {
                    that.marker = new AMap.Marker({
                      position: that.center,
                    });
                    that.marker.setMap(o);
                  }
                  that.marker.setPosition(that.center);
                }
              });
            },
          },
        },
        { //地图线路绘画
          pName: "Driving",
          events: {
            init(driving) {
              driving.search(
                new AMap.LngLat(114.302444, 30.544673),
                new AMap.LngLat(114.365281, 30.519037),
                function (status, result) {
                  if (status === 'complete') {
                    console.log('绘制驾车路线完成', result)
                  } else {
                    console.log('获取驾车数据失败：' + result)
                  }
                }
              )
            }
          }
        },
      ],
      // 点击地图获取当前位置并显示标记
      events: {
        init: (o) => {
          o.getCity((result) => {
          });
        },
        moveend: () => { },
        zoomchange: () => { },
        click: (e) => {
          console.log('点击地图选择的位置+', e);
          that.lng = e.lnglat.lng;
          that.lat = e.lnglat.lat;
          that.center = [that.lng, that.lat];
          let o = amapManager.getMap();
          if (!that.marker) {
            that.marker = new AMap.Marker({
              position: e.lnglat,
            });
            that.marker.setMap(o);
          }
          that.marker.setPosition(e.lnglat);
          let geocoder = new AMap.Geocoder({});

          geocoder.getAddress(e.lnglat, function (status, result) {
            if (status === "complete" && result.regeocode) {
              that.address = result.regeocode.formattedAddress;
            } else {
              log.error("根据经纬度查询地址失败");
            }
          });
        },
      },
      //地图新增蒙层
      markers: [{
        position: [114.302444, 30.544673],
        label: { content: '黄鹤楼', offset: [-75, -30] },
        icon: 'https://img2.baidu.com/it/u=2052441636,3597345036&fm=253&fmt=auto&app=120&f=PNG?w=304&h=304'
      }, {
        position: [114.365281, 30.519037],
        label: { content: '晴川阁', offset: [-15, -30], },
        icon: 'https://img2.baidu.com/it/u=2052441636,3597345036&fm=253&fmt=auto&app=120&f=PNG?w=304&h=304'
      }],
      distance: null,
    }
  },
  created() {
    this.getLongitudeLatitude()
    this.markers.push(this.center)
    this.distance = (getDistances(30.544673, 114.302444, 30.519037, 114.365281).distance).toFixed(2);
    this.markers[0].label.content = `黄鹤楼距离晴川阁${this.distance}km`;
  },
  methods: {
    //关闭弹窗
    closeDialog() {
      this.dialogVisible = false;
    },
    //地图搜索
    onSearchResult(pois) {
      console.log('触发了pois', pois);
      if (pois.length > 0) {
        let { lng, lat, name, location } = pois[0];
        let center = [lng, lat];
        this.lng = lng;
        this.lat = lat;
        this.center = [lng, lat];
        let o = amapManager.getMap();
        if (!this.marker) {
          this.marker = new AMap.Marker({
            position: center,
          });
          this.marker.setMap(o);
        }
        this.marker.setPosition(center);
        // 近来补充  根据经纬度查询地址
        let geocoder = new AMap.Geocoder({});
        let that = this;
        geocoder.getAddress(location, function (status, result) {
          console.log(status, result);
          if (status === "complete" && result.regeocode) {
            that.address = result.regeocode.formattedAddress;
          } else {
            console.log("根据经纬度查询地址失败");
          }
        });
      }
    },
    // 点击确定
    comfirmLngLat(lngLat, address) {
      this.dialogVisible = false;
      // console.log('经纬度', lngLat);
      // console.log('选择的地址', address);
    },

    //是否打开共享位置
    getLongitudeLatitude() {
      //如果该对象存在，那么地理位置服务可用。
      if ('geolocation' in navigator) {
        /* 地理位置服务可用 */
        var options = {
          enableHighAccuracy: true, //布尔值，表示系统是否使用最高精度来表示结果，注意，这会导致较慢的响应时间或者增加电量消耗（比如对于支持gps的移动设备来说）。如果值为false ，设备会通过更快响应以及/或者使用更少的电量等方法来尽可能的节约资源。默认值fasle
          timeout: 5000, //它表明的是设备必须在多长时间（单位毫秒）内返回一个位置。默认直到获取到位置才会返回值。
          maximumAge: 0 //表明可以返回多长时间（即最长年龄，单位毫秒）内的可获取的缓存位置。如果设置为 0, 说明设备不能使用一个缓存位置，而且必须去获取一个真实的当前位置。默认0
        }

        function success(position) {
          console.log('position', position);
          //position.coords (只读) 返回一个定义了当前位置的Coordinates对象。
          //position.timestamp (只读) 返回一个时间戳DOMTimeStamp， 这个时间戳表示获取到的位置的时间。
          var lat = position.coords.latitude //当前位置的纬度
          var lng = position.coords.longitude //当前位置精度
        }
        function error(err) {
          console.log('err', err);
          var errorType = ['您拒绝共享位置信息', '获取不到位置信息', '获取位置信息超时']
          console.log(errorType[err.code - 1])
        }
        navigator.geolocation.getCurrentPosition(success, error, options)
      } else {
        /* 地理位置服务不可用 */
        console.log('无法获取您的位置，请检查定位是否开启或刷新重试')
      }
    },
  },
}
</script>

<style lang="less" scoped>
.el-map {
  padding: 20px;

  .box-card {
    width: 100%;
    height: calc(100vh - 210px);

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both
    }

    .amap-page-container {
      position: relative;

      .search-box {
        position: absolute;
        top: 25px;
        left: 62px;
      }

      .confirm {
        width: 70px;
        color: #fff;
        height: 30px;
        position: absolute;
        left: 46%;
        top: 10px;
        text-align: center;
        background-color: #5a81ff;
        line-height: 30px;
        border-radius: 5px;
      }
    }


    /deep/ .el-dialog__body {
      padding: 50px 20px !important;
    }

    /deep/ .amap-icon img {
      width: 50px;
    }

    /deep/ .amap-marker-label {
      border: none !important;
      font-size: 14px !important;
      padding: 5px 20px !important;
      border-radius: 10px;
    }
  }
}
</style>