<template>
    <div class="userManagement">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.UserManagement') }}</span>
            </div>
            <div class="user-table">
                <div class="user-table-heder">
                    <el-button type="primary">新建用户</el-button>
                </div>
                <el-table :data="tableData" style="width: 100%"
                    :header-cell-style="{ fontSize: '14px', backgroundColor: '#f8f8f8', color: '#333' }">
                    <el-table-column prop="name" label="用户名">
                    </el-table-column>
                    <el-table-column prop="username" label="账号">
                    </el-table-column>
                    <el-table-column prop="phone" label="手机号">
                    </el-table-column>
                    <el-table-column prop="characters" label="角色">
                    </el-table-column>
                    <el-table-column prop="status" label="状态">
                        <template>
                            <div class="status">
                                <div class="online-round"></div>
                                <!-- <div class="offline-round"></div> -->
                                <div class="online">在线</div>
                                 <!-- <div class="offline">离线</div> -->
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="180">
                        <template>
                            <el-link type="primary">操作</el-link>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                name: 'xiaoshu',
                username: '小舒',
                phone: '13255554444',
                characters: '管理员',
                status: '在线',
            },]
        }
    }
}
</script>


<style lang="less" scoped>
.userManagement {
    padding: 20px;

    .box-card {
        width: 100%;
        height: calc(100vh - 210px);

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }

        .clearfix:after {
            clear: both
        }

        .user-table {
            .user-table-heder {
                width: 100%;
                padding: 20px;
                box-sizing: border-box;
                display: flex;
                justify-content: end;


            }
        }
    }

    .status {
        align-items: center;
        display: flex;

        .online-round {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #67c23a;
            margin-right: 10px;
        }

        .offline-round {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: red;
            margin-right: 10px;
        }

        .online {
            color: #67c23a;
        }

        .offline {
            color: red;
        }

    }

}
</style>