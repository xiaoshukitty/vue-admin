<template>
    <el-dialog :title="titlePopUp" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <div class="conter">
            <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="菜品名称：" prop="name">
                    <el-input class="w300" v-model="form.name" placeholder="请输入菜品名称"></el-input>
                </el-form-item>
                <el-form-item label="菜品图片：" prop="pic">
                    <el-input class="w300" v-model="form.pic" placeholder="请输入菜品图片地址"></el-input>
                </el-form-item>
                <el-form-item label="菜品价格：" prop="price">
                    <el-input class="w300" v-model="form.price" placeholder="请输入菜品价格" type="number"></el-input>
                </el-form-item>
                <el-form-item label="库存：" prop="inventory">
                    <el-input class="w300" v-model="form.inventory" placeholder="请输入菜品库存" type="number"></el-input>
                </el-form-item>
                <el-form-item label="所属分类：" prop="uid">
                    <el-select v-model="form.uid" placeholder="请选择商品所属分类" class="w300">
                        <el-option v-for="item in foodClassify" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancelAddFoods">取 消</el-button>
            <el-button type="primary" @click="confirmAddFoods('ruleForm')">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { foodClassify } from '../menu';
import { addDishes, updataDishes } from '@/server/common';
export default {
    props: {
        dialogPopUp: {
            type: Boolean,
            default: false
        },
        titlePopUp: {
            type: String,
            default: ''
        },
        foodInfo: {
            type: Object,
            default: ''
        }
    },
    data() {
        return {
            form: {
                name: "",
                pic: '',
                price: '',
                inventory: '',
                uid: '',
                id: ''
            },
            foodClassify,
            rules: {
                name: [
                    { required: true, message: '请输入菜品名称', trigger: 'blur' },
                ],
                pic: [
                    { required: true, message: '请输入有效能打开的菜品图片地址', trigger: 'blur' }
                ],
                price: [
                    { required: true, message: '请输入合理菜品价格', trigger: 'blur' }
                ],
                inventory: [
                    { required: true, message: '请输入菜品库存', trigger: 'blur' }
                ],
                uid: [
                    { required: true, message: '请选择商品所属分类', trigger: 'change' }
                ],
            }
        }
    },
    computed: {
        dialogVisible: {
            get() {
                return this.dialogPopUp;
            },
            set(val) {
                this.$emit('update:visible', val);
            }
        },
    },
    created() {
        console.log('foodClassify--', foodClassify);
    },
    watch: {
        foodInfo(newValue, oldValue) {
            const { name, food_img, price, inventory, uid, id } = newValue;
            this.form = {
                name: name,
                pic: food_img,
                price: price,
                inventory: inventory,
                uid: uid
            },
                this.id = id;
        },
        titlePopUp(newValue, oldValue) {
            newValue == '商品编辑' ? '' : this.init();
        }
    },
    methods: {
        cancelAddFoods() {
            this.$emit('update:visible', false);
        },
        confirmAddFoods(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.titlePopUp);
                    if (this.titlePopUp == '商品编辑') {
                        console.log(this.form);
                        this.updataDishes();
                    } else {
                        this.submitFood();
                    }

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });

        },

        async updataDishes() {
            let params = {
                name: this.form.name,
                food_img: this.form.pic,
                price: this.form.price,
                inventory: this.form.inventory,
                uid: this.form.uid,
                id: this.id
            }
            console.log('params--', params);
            const result = await updataDishes(params);
            if (result.code == 200) {
                this.$message({
                    message: '编辑成功',
                    type: 'success'
                });
                this.init();
                this.$emit('update:visible', false);
                this.$emit('update:page',);
            }
        },

        async submitFood() {

            let params = {
                name: this.form.name,
                food_img: this.form.pic,
                price: this.form.price,
                inventory: this.form.inventory,
                uid: this.form.uid,
            }
            const result = await addDishes(params);
            if (result.code == 200) {
                this.$message({
                    message: '添加成功',
                    type: 'success'
                });
                this.init();
                this.$emit('update:visible', false);
                this.$emit('update:page',);
            }
        },
        init() {
            this.form = {
                name: "",
                pic: '',
                price: '',
                inventory: '',
                uid: ''
            }
        },
        handleClose() {
            this.$emit('update:visible', false);
        }
    },
    deactivated() {

    }
}
</script>

<style lang="less" scoped>
.conter {
    margin-left: 40px;

    .conter-item {
        display: flex;
        align-items: center;
    }
}

.w70 {
    width: 70px;
    text-align: right;
}


.mb20 {
    margin-bottom: 20px;
}

.mr10 {
    margin-right: 10px;
}

.ml30 {
    margin-left: 30px;
}

.w300 {
    width: 300px;
}
</style>