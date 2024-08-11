<template>
  <div class="home">
    <el-skeleton style="width: 100%" :loading="loading" animated>
      <!-- 骨架屏 -->
      <template slot="template">
        <el-card class="box-card card-hoem">
          <div class="home-top">
            <div class="avatar">
              <el-skeleton-item variant="image"
                style="width: 70px;height: 70px; border-radius: 50%; overflow: hidden;" />
              <div class="avatar-box">
                <el-skeleton-item class="avatar-txt ske-avatar-txt" variant="div"></el-skeleton-item>
                <div>
                  <el-skeleton-item class="weather ske-weather" variant="div"></el-skeleton-item>
                </div>
              </div>
            </div>
            <div class="name">
              <div>
                <el-skeleton-item style="color: #00000073; font-size: 14px;" variant="div">待办</el-skeleton-item>
                <el-skeleton-item class="text-2xl " variant="div">8/10</el-skeleton-item>
              </div>
              <div>
                <el-skeleton-item style="color: #00000073;font-size: 14px;" variant="div">项目</el-skeleton-item>
                <el-skeleton-item class="text-2xl " variant="div">5</el-skeleton-item>
              </div>
              <div>
                <el-skeleton-item style="color: #00000073;font-size: 14px;" variant="div">团队</el-skeleton-item>
                <el-skeleton-item class="text-2xl " variant="div">1</el-skeleton-item>
              </div>
            </div>
          </div>
        </el-card>
      </template>
      <template>
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
      </template>
    </el-skeleton>

    <div class="conter">
      <div class="conter-block">
        <div class="w-70 mr16 enter-y">
          <div class="template">
            <el-skeleton style="width: 100%" :loading="loading" animated>
              <!-- 骨架屏 -->
              <template slot="template">
                <el-card class="box-card">
                  <div slot="header" class="clearfix ske-clearfix">
                    <el-skeleton-item variant="text" class="ske-clearfix-div1"></el-skeleton-item>
                    <el-skeleton-item variant="text" class="ske-clearfix-div2" style="float: right; padding: 3px 0"
                      type="text"></el-skeleton-item>
                  </div>
                  <div class="web-item">
                    <div class="web-block block-hover" v-for="(item, index) in webItems" :key="item.id"
                      @click="link(item)">
                      <div class="web-block-top">
                        <div>
                          <el-skeleton-item variant="image"
                            style="width: 40px;height: 40px; border-radius: 50%; overflow: hidden;" />
                        </div>
                        <el-skeleton-item variant="text" class="ske-web-block-title">{{ item.title }}</el-skeleton-item>
                      </div>
                      <el-skeleton-item variant="text" class="web-block-conter ske-web-block-conter">
                      </el-skeleton-item>
                      <div class="web-block-bottom">
                        <el-skeleton-item variant="text" class="ske-web-block-bottom1">{{ item.type
                          }}</el-skeleton-item>
                        <el-skeleton-item variant="text" class="ske-web-block-bottom2">{{ item.webDate
                          }}</el-skeleton-item>
                      </div>
                    </div>
                  </div>
                </el-card>
              </template>
              <template>
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>项目</span>
                    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                  </div>
                  <div class="web-item">
                    <div class="web-block block-hover" v-for="(item, index) in webItems" :key="item.id"
                      @click="link(item)">
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
              </template>
            </el-skeleton>
          </div>
          <div class="mt-block">
            <el-skeleton style="width: 100%" :loading="loading" animated>
              <!-- 骨架屏 -->
              <template slot="template">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <el-skeleton-item variant="text" class="ske-clearfix-div1"></el-skeleton-item>
                    <el-skeleton-item variant="text" class="ske-clearfix-div2" style="float: right; padding: 3px 0"
                      type="text"></el-skeleton-item>
                  </div>
                  <div class="dynamic">
                    <ul class="dynamic-list">
                      <li v-for="(item, index) in dynamicData" :key="item.id">
                        <div class="li-img">
                          <el-skeleton-item variant="image"
                            style="width: 40px;height: 40px; border-radius: 50%; overflow: hidden;" />
                        </div>
                        <div class="li-center">
                          <el-skeleton-item variant="text" class="ske-li-center1"></el-skeleton-item>
                          <el-skeleton-item variant="text" class="ske-li-center2"></el-skeleton-item>
                        </div>
                      </li>
                    </ul>
                  </div>
                </el-card>
              </template>
              <template>
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
              </template>
            </el-skeleton>
          </div>
        </div>
        <div class="w-30 enter-y">
          <div class="w-30-tempelate">
            <el-skeleton style="width: 100%" :loading="loading" animated>
              <!-- 骨架屏 -->
              <template slot="template">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <el-skeleton-item variant="text" class="ske-clearfix-div1"></el-skeleton-item>
                    <el-skeleton-item variant="text" class="ske-clearfix-div2" style="float: right; padding: 3px 0"
                      type="text"></el-skeleton-item>
                  </div>
                  <div class="navigation">
                    <div class="navigation-item block-hover" v-for="(item, index) in navigationList" :key="item.id"
                      @click="linkRouter(item)">
                      <div class="navigation-img">
                        <el-skeleton-item variant="image"
                          style="width: 20px;height: 20px; border-radius: 50%; overflow: hidden;" />
                      </div>
                      <el-skeleton-item variant="text" class="ske-navigation-text"></el-skeleton-item>
                    </div>
                  </div>
                </el-card>
              </template>
              <template>
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
              </template>
            </el-skeleton>
          </div>
          <div>
            <el-skeleton style="width: 100%" :loading="loading" animated>
              <!-- 骨架屏 -->
              <template slot="template">
                <el-card class="box-card right-magrin">
                  <el-skeleton-item variant="image" style="height: 12.5rem;width: 100%; overflow: hidden;" />
                </el-card>
              </template>
              <template>
                <el-card class="box-card right-magrin">
                  <img class="right-img" src="https://raw.githubusercontent.com/xiaoshukitty/img-folder/main/azelh-3lo6p.jpg" alt="">
                </el-card>
              </template>
            </el-skeleton>
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
      dynamicData,
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  },
  methods: {
    link(item) {
      window.open(item.link, '_blank')
    },
    linkRouter(item) {
      if (item.id == '0') return this.$message.warning('已经在首页了！！！')
      this.$eventBus.$emit('linkServer', item);
    }
  },
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
          // height: 12.5rem;
          margin-bottom: 1rem !important;

          /deep/ .el-card__body {
            height: 12.5rem !important;
          }

          .right-img {
            width: 100%;
            height: 100%;
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

// 骨架频样式

.ske-avatar-txt {
  width: 320px;
  height: 25px;
  margin-bottom: 10px;
}

.ske-weather {
  width: 130px;
}

.ske-clearfix {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ske-clearfix-div1,
.ske-clearfix-div2 {
  width: 4rem;
  height: 16px;
  padding: 0 !important;
}

.ske-web-block-title {
  width: 50px;
  height: 16px;
  margin-top: 5px;
}

.ske-web-block-conter {
  height: 16px !important;
  margin-bottom: 24px;
}

.ske-web-block-bottom1 {
  width: 42px;
}

.ske-web-block-bottom2 {
  width: 83px;
}

.ske-li-center1,
.ske-li-center2 {
  width: 95%
}

.ske-navigation-text {
  width: 32px;
  margin-top: .5rem;
}
</style>