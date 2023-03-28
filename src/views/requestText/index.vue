<template>
    <div class="requestText"></div>
</template>

<script>
import url from '@/server/url'
import { getJurisdiction } from '@/server/common'
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
            // let data = {
            //     user: '嘻嘻',
            //     passWord: '123456'
            // }
            // getJurisdiction(url.jurisdiction).then(res => {
            //     console.log('res---', res);
            // }, error => {
            //     console.log('res---', error);
            // })
            const res = await getJurisdiction(url.jurisdiction).then(response => response)
            console.log('res---', res);
        }
    }

}
</script>

<style></style>