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
                <el-form-item label="规格：" prop="attr">
                    <div class="attr">
                        <div class="attr-conter" v-for="(item, index) in attrList" :key="index">
                            <el-input class="w105" v-model="item.attrName" placeholder="规格描述"></el-input>
                            <i class="el-icon-circle-close fs30" @click="closeAttr(index)"></i>
                        </div>
                        <div class="icon-add">
                            <i class="el-icon-circle-plus-outline " @click="addAttr"></i>
                        </div>

                    </div>
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
                id: '',
                attr: '',
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
            },
            attrList: [{ attrName: '' }],
            attributeCopy: []
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
    },
    watch: {
        foodInfo(newValue, oldValue) {
            const { name, food_img, price, inventory, uid, id, attribute } = newValue;
            this.form = {
                name: name,
                pic: food_img,
                price: price,
                inventory: inventory,
                uid: uid == 1 ? '炒菜' : uid == 2 ? '主食' : uid == 3 ? '汤' :
                    uid == 4 ? '饮料' : uid == 5 ? '火锅' : '零食'
            }
            if (attribute && attribute != null) {
                this.attrList = attribute;
            } else {
                this.attrList = [{ attrName: '' }]
            }

            this.attributeCopy = attribute;
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
            if (this.attributeCopy && this.attributeCopy != null) {
                const flag = this.attrList.every(item => {
                    return item.attrName != ''
                })
                if (!flag) {
                    this.$message({
                        message: '请把规格输入框都输入或者删除！',
                        type: 'warning'
                    });
                }
            }

            let params = {
                name: this.form.name,
                food_img: this.form.pic,
                price: this.form.price,
                inventory: this.form.inventory,
                uid: this.form.uid,
                id: this.id,
                attribute: JSON.stringify(this.attrList)
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
            // Promise.all(this.attrList).then(item=>{
            //     console.log('item---',item);
            // })
            const flag = this.attrList.every(item => {
                return item.attrName != ''
            })
            if (!flag) {
                this.$message({
                    message: '请把规格输入框都输入或者删除！',
                    type: 'warning'
                });
            }
            console.log('flag---', flag);
            let params = {
                name: this.form.name,
                food_img: this.form.pic,
                price: this.form.price,
                inventory: this.form.inventory,
                uid: this.form.uid,
                attribute: JSON.stringify(this.attrList)
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
        //增加输入框
        addAttr() {
            // attrList: [{ attrName: '' }]
            this.attrList.push({ attrName: '' })
        },
        //删除输入框
        closeAttr(i) {
            this.attrList.splice(i, 1)
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

    .attr {
        width: 300px;
        display: flex;
        flex-wrap: wrap;

        .attr-conter {
            display: flex;
            align-items: center;
            margin-bottom: 15px;

        }

        .icon-add {
            display: flex;
            align-items: center;
            font-size: 30px;
            height: 40px;
        }
    }

    .attr>div:nth-child(2n-1) {
        margin-right: 30px;

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

.w105 {
    width: 105px;
}

.fs30 {
    font-size: 30px;
}
</style>