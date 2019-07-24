<template>
  <el-form ref="form" :inline="true" :model="form" label-width="180px">
    <el-form-item label="主题色">
      <el-color-picker v-model="form.name"></el-color-picker>
    </el-form-item>
    <el-form-item label="内容区域宽度">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Header">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
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
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        delivery: false
      }
    }
  }
}
</script>
