<template>
  <el-form ref="form" :model="form" label-width="180px">
    <h3>{{ $t('account.pageSetup') }}</h3>
    <el-form-item label="主题色">
      <el-color-picker v-model="form.name"></el-color-picker>
    </el-form-item>
    <el-form-item label="内容区域宽度">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="固定Header">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="下滑时隐藏Header">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="固定侧边菜单">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="开启Tags-View">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="侧边栏Logo">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="色弱模式">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="切换语言">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>