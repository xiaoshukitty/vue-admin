<template>
    <div class="btn-auth">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.BtnAuth') }}</span>
            </div>
            <div class="auth-select">
                <span><span style="font-weight: 600; color:#000">当前角色：</span><span class="role">{{ authValue
                        }}</span></span>
                <div style="margin: 20px 0;">
                    <el-button type="primary" v-for="(item, index) in options" :key="item.value"
                        @click="authIndexClick(item, index)"
                        :class="['auth-btn', authIndex == index ? 'auth-index' : '']">{{
                            item.label }}</el-button>
                </div>
            </div>
            <div style="display: flex;">
                <el-button type="primary" v-btn-auth="'btnAuth:user'">用户可查看按钮</el-button>
                <el-button type="primary" v-btn-auth="'btnAuth:admin'">管理员可查看按钮</el-button>
                <el-button type="primary" v-btn-auth="'btnAuth:del'">删除按钮(超级管理员可查看按钮)</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            options: [{
                value: '1',
                label: 'Admin',
            }, {
                value: '2',
                label: 'User'
            }, {
                value: '3',
                label: 'SuperAdmin'
            }],
            authValue: 'User',
            authIndex: 1
        }
    },
    computed: {
    },
    methods: {
        ...mapMutations(['updateAuthBtn']),
        authIndexClick(item, index) {
            this.authIndex = index;
            this.authValue = item.label;
            const authList = (val) => {
                let auth = new Map([
                    ['1', ['btnAuth:user', 'btnAuth:admin']],
                    ['2', ['btnAuth:user']],
                    ['3', ['btnAuth:user', 'btnAuth:admin', 'btnAuth:del']],
                    ['default', []]
                ])
                return auth.get(val) || auth.get('default')
            }
            this.updateAuthBtn(authList(item.value));
        }
    }
}
</script>

<style lang="less" scoped>
.btn-auth {
    padding: 20px;

    .box-card {
        width: 100%;
        height: calc(100vh - 140px);

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }

        .clearfix:after {
            clear: both
        }

        .auth-select {
            .role {
                color: var(--theme);
            }

            .auth-btn {
                background: var(--white);
                border-color: var(--theme-bg);
                color: var(--black);

                &:hover {
                    background-color: var(--theme);
                    border-color: var(--theme);
                    color: var(--white);
                }
            }

            .auth-index {
                background: var(--theme);
                border-color: var(--theme);
                color: var(--white);
            }
        }
    }
}



::v-deep.el-select-dropdown__item {
    padding: 0 20px !important;
}
</style>