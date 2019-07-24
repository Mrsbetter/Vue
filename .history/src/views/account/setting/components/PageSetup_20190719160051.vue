<template>
  <el-form ref="form" :model="form" label-width="180px">
    <el-form-item label="整体风格设置">
      <el-color-picker v-model="form.name" show-alpha size="mini"></el-color-picker>
    </el-form-item>
    <el-form-item :error="主题色">
      <el-color-picker v-model="form.name" show-alpha size="mini"  @change="themeChange"></el-color-picker>
    </el-form-item>
    <el-form-item label="导航模式">
      <el-color-picker v-model="form.name" show-alpha size="mini"></el-color-picker>
    </el-form-item>
    <el-form-item label="内容区域">
      <el-col :span="6">
        <el-select v-model="form.region" placeholder="切换语言" size="mini">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-select v-model="form.region" placeholder="请选择活动区域" size="mini">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-col>
    </el-form-item>
    <el-form-item label="Header状态">
      <el-checkbox label="固定Header" name="type"></el-checkbox>
      <el-checkbox label="下滑时隐藏Header" name="type"></el-checkbox>
    </el-form-item>
    <el-form-item label="侧边栏">
      <el-checkbox label="固定侧边菜单" name="type"></el-checkbox>
      <el-checkbox label="侧边栏Logo" name="type"></el-checkbox>
    </el-form-item>
    <el-form-item label="其他">
      <el-checkbox label="开启Tags-View" name="type" v-model="form.delivery"></el-checkbox>
      <el-checkbox label="色弱模式" name="type" v-model="form.type"></el-checkbox>
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
