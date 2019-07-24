<template>
  <el-form ref="form" :model="form" label-width="180px">
    <el-form-item label="主题色">
      <el-color-picker v-model="form.name"></el-color-picker>
    </el-form-item>
    <el-form-item label="内容区域宽度">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Header状态">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="固定" name="type"></el-checkbox>
        <el-checkbox label="下滑时隐藏" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="侧边栏">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="固定侧边菜单" name="type"></el-checkbox>
        <el-checkbox label="侧边栏Logo" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="其他">
      <el-checkbox-group>
        <el-checkbox label="开启Tags-View" name="type" v-model="form.type"></el-checkbox>
        <el-checkbox label="色弱模式" name="type" v-model="form.type"></el-checkbox>
      </el-checkbox-group>
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
        delivery: false,
        type: false
      }
    }
  }
}
</script>
