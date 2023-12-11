<template>
    <div :class="status == 'noHover' ? '' : 'header_hover'">
        <el-popover placement="bottom" width="167" trigger="click" v-model="visiblePopover">
            <div class="language_select">
                <div v-for="(item, index) in languageList" :key="index" @click="changeLangUage(item.langCode)"
                    :class="langColor == item.langCode ? 'paint' : ''">{{ item.langName
                    }}</div>
            </div>
            <!-- <img :class="status == 'noHover' ? 'header_img pointer' : 'header_img'" src="@/assets/images/Translate.png"
                alt="" slot="reference"> -->

            <el-button class="header_img" v-if="status == 'hover'" icon="el-icon-connection" size="small" circle slot="reference"></el-button>
            <img v-else class="header_img pointer" src="@/assets/images/Translate.png" alt="" slot="reference">
        </el-popover>
    </div>
</template>

<script>
export default {
    props: {
        status: {
            type: String,
        }
    },
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
            langColor: localStorage.getItem('lang')
        }
    },
    watch: {
        langColor(newValue) {
            console.log('newValue', this.$store.state.langColor);
            this.langColor = newValue;
        }
    },
    methods: {
        changeLangUage(lang) {
            if (lang == 'zh-CN') {
                this.$i18n.locale = 'zh-CN';
                localStorage.setItem('lang', 'zh-CN')
                this.langName = '简体中文';
            } else {
                this.$i18n.locale = 'en-US';
                localStorage.setItem('lang', 'en-US')
                this.langName = 'English';
            }
            this.visiblePopover = false;
            this.langColor = lang;
            this.$store.commit('setLang', {
                newLang: lang
            })

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

.pointer {
    cursor: pointer;
}


.language_select {
    div {
        height: 32px;
        line-height: 32px;
        padding-left: 10px;
        border-radius: 4px;
        cursor: pointer;
    }

    div:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }

    color: rgba(0, 0, 0, 0.88);
}
</style>