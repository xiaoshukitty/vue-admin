<template>
    <div class="requestText"></div>
</template>

<script>
import url from '@/server/url'
import { postRequest } from '@/server/api'
export default {
    data() {
        return {

        }
    },
    created() {
        this.getPost()
    },
    methods: {
        async getPost() {
            let data = {
                user: '嘻嘻',
                passWord: '123456'
            }
            postRequest(url.login, data).then(res => {
                console.log('res---', res);
            }, error => {
                console.log('res---', error);
            })
        }
    }

}
</script>

<style></style>