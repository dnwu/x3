<template>
    <div class="camera-manage">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>入网配置</el-breadcrumb-item>
                <el-breadcrumb-item>摄像头管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contain">
            <div class="top">
                <el-button size='mini' @click="addCarmera" type="primary">添加摄像头</el-button>
                <span>支持最大的摄像头路数:12</span>
            </div>
            <div class="table">
                <!-- 测试链接框 -->
                <div class="test-dialog">
                    <el-dialog
                        :visible.sync="testBox"
                        width="300px">
                        <div class="body">
                            <div class="icon el-icon-success"></div>
                            <p>视频连接：<span class='success'>正常</span></p>
                            <p>解码：<span class="error">正常</span></p>
                            <p></p>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button type='primary' size="mini" @click="testBox = false">我知道了</el-button>
                        </span>
                    </el-dialog>
                </div>
                <!-- 删除框 -->
                <div class="delete-dialog">
                    <el-dialog
                        :visible.sync="deleteBox"
                        width="300px">
                        <div class="body">
                            <div class="icon el-icon-warning"></div>
                            <p>删除警告</p>
                            <p>是否删除该摄像头设备?</p>
                            <p></p>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button plain type='primary' size="mini" @click="deleteBox = false">取消</el-button>
                            <el-button plain type='danger' size="mini" @click="deleteBox = false">删除</el-button>
                        </span>
                    </el-dialog>
                </div>
                <!-- 修改和添加框 -->
                <div class="add-dialog">
                    <el-dialog :title="addDialogTitle" :visible.sync="addDialog" width="560px" :close-on-click-modal=false>
                        <div class="body">
                            <el-form size='mini' :model="addCarmeraData" ref="addCarmeraData" label-width="100px" class="demo-ruleForm">
                                <el-form-item
                                    label="摄像头名称"
                                    prop="name"
                                    :rules="[
                                        { required: true, message: '摄像头名称 不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.name" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="摄像头厂商"
                                    prop="maker"
                                    :rules="[
                                        { required: true, message: '摄像头厂商 不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.maker" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="摄像头序列号"
                                    prop="id"
                                    :rules="[
                                        { required: true, message: '摄像头序列号 不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.id" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="摄像头IP"
                                    prop="ip"
                                    :rules="[
                                        { required: true, message: '摄像头IP 不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.ip" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="端口号"
                                    prop="port"
                                    :rules="[
                                        { required: true, message: '端口号 不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.port" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="用户名"
                                    prop="username"
                                    :rules="[
                                        { required: true, message: '用户名 不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.username" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="密码"
                                    prop="pass"
                                    :rules="[
                                        { required: true, message: '密码 不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.pass" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="勾流方式"
                                    prop="protocol"
                                    :rules="[
                                        { required: true, message: '请选择一种勾流方式'}
                                    ]"
                                >
                                    <el-radio-group @change='protocolChange' v-model="addCarmeraData.protocol">
                                        <el-radio label="RTSP"></el-radio>
                                        <el-radio label="厂商SDK"></el-radio>
                                    </el-radio-group>
                                </el-form-item>


                                <el-form-item
                                    v-if="addCarmeraData.protocol == 'RTSP'"
                                    label="RTSP地址"
                                    prop="RTSP"
                                    :rules="[
                                        { required: true, message: 'RTSP地址 不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.RTSP" auto-complete="off"></el-input>
                                </el-form-item>


                                <el-form-item
                                    v-if="addCarmeraData.protocol == '厂商SDK'"
                                    label="摄像头型号"
                                    prop="cameraType"
                                    :rules="[
                                        { required: true, message: '摄像头型号 不能为空'}
                                    ]"
                                >
                                    <el-input v-model="addCarmeraData.cameraType" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item
                                    v-if="addCarmeraData.protocol == '厂商SDK'"
                                    label="标准类型"
                                    prop="standard"
                                    :rules="[
                                        { required: true, message: '标准类型 不能为空'}
                                    ]"
                                >
                                    <el-select v-model="addCarmeraData.standard" placeholder="请选择标准类型">
                                        <el-option label="国际" value="1"></el-option>
                                        <el-option label="ONVIF" value="2"></el-option>
                                    </el-select>
                                </el-form-item>


                                <el-form-item class='button'>
                                    <el-button size="mini" @click="addDialog = false">取消</el-button>
                                    <el-button type='primary' size="mini" @click="submitForm('addCarmeraData')">确定</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-dialog>
                </div>
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                        prop="index"
                        label="序号"
                        width="46">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="摄像头名称"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="maker"
                        label="摄像头厂商"
                        width="120">                                     
                    </el-table-column>
                    <el-table-column
                        prop="id"
                        label="摄像头序列号"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="ip"
                        label="摄像头ip"
                        width="130">
                    </el-table-column>
                    <el-table-column
                        prop="port"
                        label="端口号"
                        width="70">
                    </el-table-column>
                    <el-table-column
                        prop="protocol"
                        label="勾流方式"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="linkState"
                        label="视频连接状态"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="decodeState"
                        label="解码状态"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        fixed="right"
                        label="连接测试"
                        width="100">
                        <template slot-scope="scope">
                            <el-button @click="test(scope.row)" type="text" size="small">测试</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                        <template slot-scope="scope">
                            <el-button @click="resetCarmera(scope.row)" type="text" size="small">修改</el-button>
                            <el-button @click="deleteItem(scope.row)" type="text" style="color:#F5222D" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="page">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      testBox: false,
      deleteBox: false,
      addDialog: false,
      addDialogTitle: "添加摄像头",
      addCarmeraData: {
        name: "",
        maker: "",
        id: "",
        ip: "",
        port: "",
        username: "",
        pass: "",
        protocol: "",
        RTSP: "",
        cameraType: "",
        standard: ""
      },
      tableData: [
        {
          index: 1,
          name: "王小虎",
          maker: "上海",
          id: "234MFHS435K",
          ip: "192.168.011.122",
          port: 8080,
          protocol: "RTSP地址:1923.43.4",
          linkState: "正常",
          decodeState: "正常"
        },
        {
          index: 1,
          name: "王小虎",
          maker: "上海",
          id: "234MFHS435K",
          ip: "192.168.011.122",
          port: 8080,
          protocol: "",
          state: ""
        },
        {
          index: 1,
          name: "王小虎",
          maker: "上海",
          id: "234MFHS435K",
          ip: "192.168.011.122",
          port: 8080,
          protocol: "",
          state: ""
        },
        {
          index: 1,
          name: "王小虎",
          maker: "上海",
          id: "234MFHS435K",
          ip: "192.168.011.122",
          port: 8080,
          protocol: "",
          state: ""
        }
      ]
    };
  },
  methods: {
    addCarmera() {
      this.addDialogTitle = "添加摄像头";
      this.addDialog = true;
    },
    resetCarmera() {
      this.addDialogTitle = "修改摄像头";
      this.addDialog = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.licenseControl = true;
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    protocolChange(val) {
      console.log(val);
    },
    test(row) {
      console.log(row);
      this.testBox = true;
    },
    deleteItem(row) {
      console.log(row);
      this.deleteBox = true;
    },
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>

<style lang='less' scoped>
.camera-manage {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .bread-crumb {
    padding-left: 20px;
    height: 40px;
    background-color: #fafafa;
    display: flex;
    align-items: center;
  }
  .contain {
    flex: 1;
    display: flex;
    flex-direction: column;
    .top {
      margin-left: 30px;
      margin-top: 10px;
      height: 28px;
      span {
        margin-left: 20px;
        font-size: 12px;
        color: #666666;
      }
    }

    .table {
      flex: 1;
      padding: 20px 30px;
      text-align: center;
    }
    .page {
      text-align: center;
      height: 34px;
    }
  }
}
</style>
<style lang="less">
// 设置表格样式
.camera-manage {
  .table {
    .el-table__header-wrapper {
      font-size: 12px;
      background-color: #fafafa;
    }
    .el-table__fixed-right{
      .el-table__fixed-header-wrapper{
        font-size: 12px;
      }
    }
    .el-table__body {
      font-size: 12px;
    }
  }
  //   测试弹出框样式
  .test-dialog {
    .el-dialog__body {
      font-size: 12px;
      color: #666666;
      .icon {
        font-size: 40px;
        color: #52c41a;
      }
      .success {
        color: #1890ff;
      }
      .error {
        color: #f5222d;
      }
    }
    .el-dialog__footer {
      text-align: center;
    }
  }
  //   删除弹出框
  .delete-dialog {
    .el-dialog__body {
      .body {
        .icon {
          font-size: 40px;
          color: #f5222d;
        }
        p:nth-of-type(1) {
          font-size: 16px;
          font-weight: 700;
        }
        p:nth-of-type(2) {
          font-size: 12px;
          color: #666666;
        }
      }
    }
  }
  //   添加摄像头和修改摄像头样式
  .add-dialog {
    .el-dialog__header {
      text-align: left;
      color: #333333;
      padding: 10px;
      .el-dialog__title {
        font-size: 14px;
      }
    }
    .el-dialog__body {
      padding: 30px 140px;
      .el-form-item__label {
        font-size: 12px;
      }
    }
  }
}
</style>
