<template>
    <div class="note" ref="scrollview">
        <div id="start"></div>
        <div class="item-content" style="height:200px" v-for="child in rightIdList" :key="child" :id="child">
            <h3>{{ child | check }}</h3>
        </div>
        <el-backtop target=".note" :bottom="100" :visibility-height="500">
            <div class="top_box">
                <div class="top">
                    <img src="../../../assets/images/top.png" alt="">
                </div>
            </div>
        </el-backtop>
    </div>
</template>
  
<script>
import { leftTitileList, rightIdList } from '../utils'
export default {
    props: {
        activeIndex: {
            type: String,
            default: function () {
                return {
                    activeIndex: '1'
                }
            }
        },
        judge: {
            type: Boolean
        }
    },
    data() {
        return {
            leftTitileList,
            rightIdList,
            arrDom: [],
            active: null,
        }
    },
    created() {
    },
    components: {
    },
    watch: {
        activeIndex(newValue, oldValue) {
            this.skip(newValue)
        },

    },
    filters: {
        check(item) {
            let discounts = new Map([
                ['1.1', '防抖'],
                ['1.2', '节流'],
                ['default', item]
            ])
            return discounts.get(item) || discounts.get('default')
        }
    },
    computed: {
        scrollview() {
            return this.$refs.scrollview;
        },
    },
    mounted() {
        this.arrDom = document.getElementsByClassName("item-content");
        this.$nextTick(() => {
            //监听这个dom的scroll事件
            this.scrollview.addEventListener("scroll", this.handleScroll);
        });
    },
    methods: {
        handleScroll() {
            // const scrollTop = this.scrollview.scrollTop;
            // const offsetHeight = this.scrollview.offsetHeight;
            // const scrollHeight = this.scrollview.scrollHeight;
            // console.log('获取dom滚动距离', scrollTop);
            // console.log('获取可视区高度', offsetHeight);
            // console.log('获取滚动条总高度', scrollHeight);
            let scrollTop = this.scrollview.scrollTop || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (this.judge) {
                setTimeout(() => {
                    this.judge = false
                }, 1000)
            } else {
                for (let i = 0; i < this.arrDom.length; i++) {
                    //因为下面使用到了i+1，所以需要把最后一个分离出来判断
                    if (this.arrDom[this.arrDom.length - 1].offsetTop - scrollTop > 1) {
                        if (this.arrDom[i].offsetTop - scrollTop <= 1 && this.arrDom[i + 1].offsetTop - scrollTop > 1) {
                            this.active = i + 1
                        }
                    } else {
                        this.active = this.arrDom.length;
                    }
                }
                this.$emit('activeIndexFun', this.rightIdList[this.active - 1])
            }
        },
        skip(newValue) {
            console.log('newValue', newValue);
            document.getElementById(newValue).scrollIntoView({ behavior: 'smooth' })
        },
        flattTree(data) {
            let res = []
            data.forEach(el => {
                if (el.children) {
                    res.push(el, ...this.flattTree(el.children)) //递归
                    delete el['children']
                } else {
                    res.push(el)
                }
            })
            return res
        },

    }
}
</script>
  
<style lang="less" scoped> .note {
     position: absolute;
     top: 68px;
     left: 200px;
     bottom: 0;
     width: calc(100% - 208px);
     overflow-y: auto;

     .top_box {
         height: 100%;
         width: 100%;

         .top {
             position: -webkit-sticky;
             position: sticky;
             bottom: 40px;
             text-align: right;
             margin: 2px 40px 0 0;

             img {
                 width: 40px;
                 height: 40px;
             }
         }
     }

 }
</style>