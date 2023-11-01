<template>
    <div>
        <div class="language header_hover">
            <el-popover placement="bottom" width="167" trigger="click" v-model="visiblePopover">
                <div class="language_select">
                    <div v-for="(item, index) in languageList" :key="index" @click="changeLangUage(item.langCode)"
                        :class="langColor == item.langCode ? 'paint' : ''">{{ item.langName
                        }}</div>
                </div>
                <img class="header_img" src="@/assets/images/Translate.png" alt="" slot="reference">
            </el-popover>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            languageList: [
                {
                    langCode: 'zh-CN',
                    langName: '简体中文'
                },
                {
                    langCode: 'en-US',
                    langName: 'English',
                }
            ],
            langName: '简体中文',
            visiblePopover: false,
            langColor: 'zh-CN',
        }
    },
    methods: {
        changeLangUage(lang) {
            console.log(lang);
            if (lang == 'zh-CN') {
                this.$i18n.locale = 'zh-CN';
                this.langName = '简体中文';
            } else {
                this.$i18n.locale = 'en-US';
                this.langName = 'English';
            }
            this.visiblePopover = false;
            this.langColor = lang;
        },
    }
}
</script>

<style lang="less" scoped>
.header_hover:hover {
    background-color: #f6f6f6 !important;
}
.paint {
  color: #1677ff;
  background-color: #e6f4ff;
}

.paint:hover {
  background-color: #bae0ff !important;
}

.header_img {
      width: 30px;
      height: 30px;
      margin-top: 10px;
    }
</style>