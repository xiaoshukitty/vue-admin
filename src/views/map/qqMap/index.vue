<template>
    <div class="qq_map">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.QQMap') }}</span>
            </div>
            <el-button @click="tomap" type="primary" size="small">地 图</el-button>
        </el-card>

    </div>
</template>

<script>
export default {
    data() {
        return {
            BrLatlng: { lat: '', lng: '' },
            latlng: { lat: '', lng: '' },
            demo1: '1',
        }
    },
    created() {
        let slet = this;
        window.addEventListener(
            'message',
            function (event) {
                // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
                var loc = event.data;
                if (loc && loc.module == 'locationPicker') {
                    //防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
                    // poiname展示这个
                    // this.latlng = loc.latlng
                    slet.$set(slet.BrLatlng, 'lat', loc.latlng.lat);
                    slet.$set(slet.BrLatlng, 'lng', loc.latlng.lng);

                    slet.$set(slet.latlng, 'lat', loc.latlng.lat);
                    slet.$set(slet.latlng, 'lng', loc.latlng.lng);

                    slet.demo1 = loc.latlng.lat;

                    //   this.EditStoresTheLatitude = loc.latlng.lat;
                    //   this.BranchOfLongitude = loc.latlng.lng;
                    // this.StoresTheLatitude = loc.latlng.lat;
                    // this.BranchOfLongitude = loc.latlng.lng;
                }
            },
            false
        );
    },
    methods: {
        tomap() {
            this.$alert(
                // https://lbs.qq.com/dev/console/application/mine 获取自己申请的 key
                // https://lbs.qq.com/webApi/component/componentGuide/componentGeolocation 参数配置
                "<iframe id='mapPage' width='400' height='700' frameborder=0 src='https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=XYBBZ-HC4CX-KBC4J-TMCM3-OZLX2-SVFGX&referer=myapp'></iframe>",
                '地图选点',
                {
                    dangerouslyUseHTMLString: true
                }
            );
        }
    }
}
</script>

<style lang="less" scoped>
.qq_map {
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

    }
}
</style>