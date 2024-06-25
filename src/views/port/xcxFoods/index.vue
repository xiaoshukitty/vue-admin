<template>
    <div class="xcx-menu">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>菜单管理</span>
            </div>
            <div class="form">
                <div class="search">
                    <div class="mr10">菜品名称：</div>
                    <el-input class="w200" v-model="cuisineIpt" placeholder="请输入菜品名称" clearable   @clear="search"></el-input>
                </div>
                <div class="search-btn">
                    <el-button type="primary" icon="el-icon-search" plain class="ml30"  @click="search"
                       >搜索</el-button>
                </div>
                <div class="search-btn">
                    <el-button type="primary" plain class="ml30" @click="addFoods">添加商品</el-button>
                </div>
            </div>
            <div class="food-table" v-loading="loading">
                <el-table :data="dishesList" stripe style="width: 100%">
                    <el-table-column prop="id" label="id" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="商品名称" align="center">
                    </el-table-column>
                    <el-table-column prop="food_img" label="商品图片" align="center">
                        <template slot-scope="scope">
                            <img class="food-img" :src="scope.row.food_img" alt="">
                        </template>
                    </el-table-column>
                    <el-table-column prop="price" label="商品价格" align="center">
                        <template slot-scope="scope">
                            <span>{{ (scope.row.price).toFixed(2) }}</span>
                            <span>元</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="inventory" label="库存" align="center">
                    </el-table-column>
                    <el-table-column prop="uid" label="所属分类" align="center">
                        <template slot-scope="scope">
                            <span>{{
                                scope.row.uid == 1 ? '炒菜' : scope.row.uid == 2 ? '主食' : scope.row.uid == 3 ? '汤' :
                                    scope.row.uid == 4 ? '饮料' : scope.row.uid == 5 ? '火锅' : '零食'
                            }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>

        <!-- 添加编辑弹框 -->
        <FoodsPopUp :dialogPopUp="dialogPopUp" :titlePopUp="titlePopUp" :foodInfo="foodInfo"
            @update:visible="updateVisible" @update:page="updatePage"></FoodsPopUp>

    </div>
</template>
<script>
import { getDishesList, deleteDishes } from '@/server/common';
import FoodsPopUp from './components/FoodsPopUp.vue';
export default {
    data() {
        return {
            cuisineIpt: '',
            loading: true,
            dishesList: [],
            dialogPopUp: false,
            titlePopUp: '',
            foodInfo: {}
        }
    },
    components: {
        FoodsPopUp
    },
    created() {
        this.getDishesList()
    },
    methods: {
        //搜索
        search() {
            this.getDishesList();
        },
        //获取菜单
        async getDishesList() {
            let params = {
                name: this.cuisineIpt
            }
            const { data } = await getDishesList(params);
            try {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].price == '') {
                        data.splice(i, 1)
                        i--;
                    }
                }
                this.dishesList = data;
            } catch (err) {
                throw new Error('No Data')
            } finally {
                setTimeout(() => {
                    this.loading = false;
                }, 1000)
            }
        },
        addFoods() {
            this.dialogPopUp = true;
            this.titlePopUp = '商品添加'
        },
        updateVisible(val) {
            this.dialogPopUp = val;
        },
        updatePage() {
            this.loading = true;
            this.getDishesList();
        },
        handleEdit(e) {
            console.log('e', e);
            this.foodInfo = e;
            this.dialogPopUp = true;
            this.titlePopUp = '商品编辑'
        },
        handleDelete(e) {
            // console.log('e', e);
            const { id } = e;
            this.$confirm('此操作将永久删除该菜品, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.delFoods(id);

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },

        async delFoods(id) {
            this.loading = true;
            let params = {
                id,
            }
            const result = await deleteDishes(params);
            if (result.code == 200) {
                this.getDishesList();
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }

        }
    },
    mounted() {

    },
}
</script>

<style lang="less" scoped>
.xcx-menu {
    padding: 20px;

    .box-card {
        width: 100%;
        // height: calc(100vh - 140px);

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }

        .clearfix:after {
            clear: both
        }

        .form {
            display: flex;
            align-items: center;

            .search {
                display: flex;
                align-items: center;
            }
        }

        .food-table {
            width: calc(100vw - 300px);
            margin-top: 20px;

            .food-img {
                width: 50px;
                height: 50px;
            }
        }

        .mr10 {
            margin-right: 10px;
        }

        .ml30 {
            margin-left: 30px;
        }

        .w200 {
            width: 200px;
        }

    }
}

::v-deep .el-loading-spinner {
    top: calc((100vh - 240px)/2);
}
</style>