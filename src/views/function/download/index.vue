<template>
    <div class="download">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.DownLoad') }}</span>
            </div>
            <div class="download-file">
                <img class="download-img" :src="downloadURL" alt="">

                <div class="download-btn">
                    <div class="a-btn" @click="downloadFile">普通下载</div>
                    <a class="a-btn" data-thunder
                        href="http://localhost:8080/assets/images/lockScreenWallpaper/75.jpeg">迅雷下载</a>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import { downloadIamgeFun } from '@/utils'
export default {
    data() {
        return {
            downloadURL: require('@/assets/images/lockScreenWallpaper/75.jpeg')
        }
    },
    mounted() {
        this.downloadThunderFile()
    },

    methods: {
        downloadFile() {
            var fileName = new Date().getTime() + ".png";
            downloadIamgeFun(this.downloadURL, fileName);
        },
        //迅雷下载
        downloadThunderFile() {
            const links = document.querySelectorAll('a[data-thunder]');
            for (const link of links) {
                const base64 = btoa(`AA${link.href}ZZ`);
                link.href = `thunder://${base64}`;
            }
        }
    }
}
</script>

<style lang="less" scoped>
.download {
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

        .download-file {
            .download-img {
                width: 300px;
            }

            .download-btn {
                margin-top: 20px;

                .a-btn {
                    display: inline-block;
                    line-height: 1;
                    white-space: nowrap;
                    cursor: pointer;
                    background:var(--white);
                    border: 1px solid #DCDFE6;
                    color: #606266;
                    -webkit-appearance: none;
                    text-align: center;
                    box-sizing: border-box;
                    outline: 0;
                    margin: 0;
                    transition: .1s;
                    font-weight: 500;
                    padding: 12px 20px;
                    font-size: 14px;
                    border-radius: 4px;
                    color: var(--white);
                    background-color: var(--theme);
                    border-color: var(--theme);
                    text-decoration: none;
                    margin-right: 20px;
                }

                .a-btn:hover {
                    background: var(--theme-border-hover);
                    border-color: var(--theme-border-hover);
                    color:var(--white);
                }
            }

        }
    }
}
</style>