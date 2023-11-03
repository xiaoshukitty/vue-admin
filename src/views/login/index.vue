<template>
    <div class="login">
        <div class="login_panel">
            <div class="flex">
                <div class='box'>
                    <div class="i18n">
                        <I18nComponents :status="'noHover'" :isAccountNumber="isAccountNumber" />
                    </div>
                    <!-- <h2>{{ isAccountNumber ? $t('signInI18n.SigIn') : $t('loginI18n.LogIn') }}</h2> -->
                    <div class="title">{{ isAccountNumber ? $t('signInI18n.SigIn') : $t('loginI18n.LogIn') }}</div>
                    <Login :isAccountNumber="isAccountNumber" @updateAccountNumber="updateAccountNumber"
                        v-if="!isAccountNumber" />
                    <SigIn @updateSigIn="updateSigIn" v-else />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import I18nComponents from '@/components/i18nComponents'
import Login from './components/Login.vue'
import SigIn from './components/SignIn.vue'
export default {
    components: {
        I18nComponents,
        Login,
        SigIn
    },
    data() {
        return {
            isAccountNumber: false,
        }
    },
    methods: {
        updateAccountNumber(val) {
            this.isAccountNumber = val;
        },
        updateSigIn(val) {
            this.isAccountNumber = val;
        },
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-image: url('@/assets/images/bg.jpg');
    background-repeat: no-repeat;
    background-position: center;


    .login_panel {


        .i18n {
            display: flex;
            justify-content: flex-end;
        }

        .flex {
            display: flex;
            justify-content: flex-end;

            .box {
                background-color: rgba(255, 255, 255, 0.5);
                margin: 100px 200px;
                padding: 20px;

                .title {
                    font-size: 32px;
                    font-weight: 700;
                    padding:5px 20px 20px;
                }
            }
        }

    }
}
</style>