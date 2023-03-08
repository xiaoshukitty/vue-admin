<template>
    <div class="about">
        <h1>高德地图</h1>
        <div class="mapWrap page">
            <baidu-map class="bm-view" ak="YOUR_APP_KEY" style="width: 100%; height: 100%" :center="{ lng, lat }" :zoom="15"
                :scroll-wheel-zoom="true">
                <bm-marker @click="show = true" :position="{ lng, lat }" animation="BMAP_ANIMATION_BOUNCE">
                    <bm-label :content="baseName" :labelStyle="{
                        color: 'red',
                        fontSize: '12px',
                        borderRadius: '4px',
                    }" :offset="{ width: -35, height: 30 }" />
                </bm-marker>

                <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"
                    :locationIcon="icon"></bm-geolocation>
            </baidu-map>

            <!-- mask自行写样式 -->
            <div class="content">
                <ul>
                    <!-- 这里可根据需求添加其他导航方式 -->
                    <li>
                        <a :href="autoNaviUrl">高德地图</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
  
<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmMarker from 'vue-baidu-map/components/overlays/Marker'
import BmLabel from 'vue-baidu-map/components/overlays/Label'
import BmGeolocation from 'vue-baidu-map/components/controls/Geolocation'
export default {
    data() {
        return {
            lng: 116.404,
            lat: 39.915,
            baseName: '北京天安门',
            icon: {
                // url: require('../../assets/images/icon/location_3.png'),
                size: { width: 40, height: 40 },
                opts: { anchor: { width: 27, height: 13 } }
            },
            show: false,
            autoNaviUrl: ''
        };
    },
    components: {
        BaiduMap,
        BmMarker,
        BmGeolocation,
        BmLabel
    },

    created() {

        // 高德地图
        this.autoNaviUrl = `https://uri.amap.com/marker?position=${this.lng},${this.lat}&name=${this.baseName}`;

    },

};
</script>
<style scoped>
.box {
    width: 300px;
    height: 300px;
    background-color: pink;
}

.son {
    width: 200px;
    height: 200px;
    background-color: green;
}
</style>
  