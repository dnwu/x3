<template>
    <div class="storage">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>存储</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                key: "value"
            }
        },
    }
</script>

<style lang='less' scoped>
.storage{
    width: 100%;
    height: 100%;
    background-color: #fff;
    .bread-crumb{
        padding-left: 20px;
        height: 40px;
        background-color: #FAFAFA;
        display: flex;
        align-items: center;
    }
}
</style>