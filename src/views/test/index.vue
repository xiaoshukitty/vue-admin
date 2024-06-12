<template>

</template>

<script>
import { getDishesList } from '@/server/common'
export default {
    data() {
        return {
            list: [
                { id: 1, pid: 0, address: "北京分公司" },
                { id: 2, pid: 0, address: "上海分公司" },
                { id: 3, pid: 0, address: "郑州分公司" },
                { id: 4, pid: 0, address: "杭州分公司" },
                { id: 5, pid: 1, address: "怀柔分部" },
                { id: 6, pid: 2, address: "萧山分部" },
                { id: 7, pid: 1, address: "临平分部" },
                { id: 8, pid: 2, address: "临安分部" },
                { id: 9, pid: 3, address: "管城自治区分部" },
                { id: 10, pid: 2, address: "昌平分部" },
                { id: 11, pid: 1, address: "宝山分部" },
            ]
        }
    },
    created() {
        this.getFoods();
        // console.log(this.FlattenTree(this.list, 0));

    },
    methods: {
        async getFoods() {
            let res = await getDishesList()
            console.log(this.FlattenTree(res.data, 0));
        },
        FlattenTree(data, rootValue) {
            let arr = []
            // data就是要转化的列表数据,rootValue列表数据的第一条，遍历数据就从rootValue开始遍历
            // 遍历原则 =>要有领导，根，就是要知道从哪里开始遍历，
            data.forEach(item => {
                // item就是列表中的每条数据
                if (item.uid === rootValue) {
                    //走进这里说明找到了根，开始遍历的数据下标，然后去找根下面的数据
                    arr.push(item)
                    // 子集的pid应该跟父集的id相同，将子追加到父集之中，所以第二个参数应该是id，而不是rootValue数据下标
                    const children = this.FlattenTree(data, item.id)
                    children.length && (item.child = children)
                }
            })
            return arr  // 这里返回一个新数据，来接收转化之后的树结构数据。
        }
    }
}
</script>

<style></style>