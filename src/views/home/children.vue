<template>
  <div class="home">
    <el-card class="box-card card-hoem">
      <div class="home-top">
        <div class="avatar">
          <img src="@/assets/images/avatar1.jpg" alt="">
          <div class="avatar-box">
            <h1 class="avatar-txt">早安, Vue-Admin, 开始您一天的工作吧！</h1>
            <div class="weather">今日晴，20℃ - 32℃！</div>
          </div>
        </div>
        <div class="name">
          <div>
            <div style="color: #00000073; font-size: 14px;">待办</div>
            <div class="text-2xl ">8/10</div>
          </div>
          <div>
            <div style="color: #00000073;font-size: 14px;">项目</div>
            <div class="text-2xl ">5</div>
          </div>
          <div>
            <div style="color: #00000073;font-size: 14px;">团队</div>
            <div class="text-2xl ">1</div>
          </div>
        </div>
      </div>
    </el-card>

    <div class="conter">
      <div class="conter-block">
        <div class="w-70 mr16 enter-y">
          <div class="template">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>项目</span>
                <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
              </div>
              <div class="web-item">
                <div class="web-block block-hover" v-for="(item, index) in webItems" :key="item.id" @click="link(item)">
                  <div class="web-block-top">
                    <div>
                      <svg-icon :iconClass="item.icon" />
                    </div>
                    <div>{{ item.title }}</div>
                  </div>
                  <div class="web-block-conter">
                    {{ item.introduce }}
                  </div>
                  <div class="web-block-bottom">
                    <span>{{ item.type }}</span>
                    <span>{{ item.webDate }}</span>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="mt-block">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>最新动态</span>
                <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
              </div>
              <div class="dynamic">
                <ul class="dynamic-list">
                  <li v-for="(item, index) in dynamicData" :key="item.id">
                    <div class="li-img">
                      <svg-icon :iconClass="item.icon" />
                    </div>
                    <div class="li-center">
                      <div class="li-top">{{ item.name }}{{ item.info }}</div>
                      <div class="li-bottom">{{ item.date }}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </el-card>
          </div>
        </div>
        <div class="w-30 enter-y">
          <div class="w-30-tempelate">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>快捷导航</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div class="navigation">
                <div class="navigation-item block-hover" v-for="(item, index) in navigationList" :key="item.id"
                  @click="linkRouter(item)">
                  <div class="navigation-img">
                    <i :class="item.iconCopy" :style="{ color: item.color }"></i>
                  </div>
                  <div class="navigation-text">{{ item.title }}</div>
                </div>
              </div>
            </el-card>
          </div>
          <div>
            <el-card class="box-card right-magrin">
              <img class="right-img" src="https://vben.vvbin.cn/assets/illustration-jTCqTCdW.svg" alt="">
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { webItems, navigationList, dynamicData } from './homeData.js'
export default {
  data() {
    return {
      webItems,
      navigationList,
      dynamicData
    }
  },
  methods: {
    link(item) {
      window.open(item.link, '_blank')
    },
    linkRouter(item) {
      if(item.id == '0') return this.$message.warning('已经在首页了！！！')
      this.$eventBus.$emit('linkServer', item);
    }
  }
}
</script>

<style lang="less" scoped>
.home {

  .card-hoem {
    /deep/ .el-card__body {
      padding: 0 !important;
      width: 100% !important;
    }
  }

  .home-top {
    box-sizing: border-box;
    margin: 0;
    padding: 20px 24px;
    color: rgba(0, 0, 0, 0.88);
    background-color: #fff;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;


    .avatar {
      display: flex;
      align-items: center;

      .avatar-box {
        margin-left: 1.5rem;

        .avatar-txt {
          font-size: 1.125rem;
          line-height: 1.75rem;
        }

        .weather {
          font-size: 12px;
          color: #00000073;
        }


      }

      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        overflow: hidden;
      }
    }

    .name {
      display: flex;

      align-items: center;

      div {
        margin-right: 2rem;
        font-size: 1.125rem;
        line-height: 1.75rem;
        color: rgba(0, 0, 0, 0.88);
      }

      .text-2xl {
        font-size: 20px;
        line-height: 2rem;
      }
    }
  }

  .conter {
    margin: 16px;
    background-color: #fff;

    .conter-block {
      display: flex;

      .w-70 {
        width: 70%;

        .template {
          /deep/ .el-card__body {
            padding: 0 !important;
            width: 100% !important;
          }
        }


      }

      .w-30 {
        width: 30%;

        .w-30-tempelate {
          /deep/ .el-card__body {
            padding: 0 !important;
            width: 100% !important;
          }
        }

        .right-magrin {
          margin-top: 1rem !important;
          height: 12.5rem;
          margin-bottom: 1rem !important;

          .right-img {
            width: 100%;
          }
        }

        .navigation {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 0;

          .navigation-item {
            padding: 24px;
            border: 0;
            border-radius: 0;
            box-shadow: 1px 0 0 0 #f0f0f0, 0 1px 0 0 #f0f0f0, 1px 1px 0 0 #f0f0f0, 1px 0 0 0 #f0f0f0 inset, 0 1px 0 0 #f0f0f0 inset;
            transition: all 0.2s;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .navigation-img {
              width: 20px;
              height: 20px;

              i {
                font-size: 20px;
              }
            }

            .navigation-text {
              margin-top: .5rem;
            }
          }

          .block-hover:hover {
            position: relative;
            z-index: 1;
            box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
          }
        }
      }

      .mr16 {
        margin-right: 16px;
      }

      .enter-y {
        z-index: 9;
        animation: enter-y-animation .4s ease-in-out .3s;
        animation-fill-mode: forwards;
        animation-delay: .1s;
      }

      /deep/ .box-card {
        border-radius: 8px !important;
      }

      .web-item {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0;

        .web-block {
          padding: 24px;
          border: 0;
          border-radius: 0;
          box-shadow: 1px 0 0 0 #f0f0f0, 0 1px 0 0 #f0f0f0, 1px 1px 0 0 #f0f0f0, 1px 0 0 0 #f0f0f0 inset, 0 1px 0 0 #f0f0f0 inset;
          transition: all 0.2s;

          .web-block-top {
            font-size: 1.125rem;
            line-height: 1.75rem;
            display: flex;

            & div:nth-child(2) {
              margin-left: 1rem;
            }
          }

          .web-block-conter {
            height: 2.5rem;
            margin-top: .5rem;
            color: #00000073;
            font-size: 14px;
          }

          .web-block-bottom {
            display: flex;
            justify-content: space-between;
            color: #00000073;
            font-size: 14px;
          }
        }
      }

      .block-hover:hover {
        position: relative;
        z-index: 1;
        box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
      }

      .mt-block {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;

        .dynamic {
          .dynamic-list {
            color: rgba(0, 0, 0, 0.88);

            li {
              width: 100%;
              display: flex;
              border-block-end: 1px solid rgba(5, 5, 5, 0.06);
              padding: 12px 24px;

              .li-img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: pink;
              }

              .li-center {
                flex: 1 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 1rem;

                .li-top {
                  margin-bottom: 4px;
                  color: rgba(0, 0, 0, 0.88);
                  font-size: 14px;
                  line-height: 1.5714285714285714;
                }

                .li-bottom {
                  color: rgba(0, 0, 0, 0.45);
                  font-size: 14px;
                  line-height: 1.5714285714285714;
                }
              }
            }

            li:last-child {
              border-block-end: none;
            }
          }
        }
      }
    }
  }
}
</style>