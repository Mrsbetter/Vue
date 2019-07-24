<template>
  <el-form ref="form" :model="form" label-width="180px">
    <el-form-item :label="$t('account.pageSetupContent.styleSettings')">
      <el-color-picker v-model="form.name" show-alpha size="mini"></el-color-picker>
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.theme')">
      <theme-picker @change="themeChange" />
      <!-- <el-color-picker v-model="form.name" show-alpha size="mini" @change="themeChange"></el-color-picker> -->
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.navigationMode')">
      <el-color-picker v-model="form.name" show-alpha size="mini"></el-color-picker>
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.contentArea')">
      <el-col :span="6">
        <el-select v-model="form.region" :placeholder="$t('account.pageSetupContent.language')" size="mini"  @change="themeChange" clearable>
          <el-option label="中文" value="zh"></el-option>
          <el-option label="English" value="en"></el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-select v-model="form.region" :placeholder="$t('account.pageSetupContent.areaWith')" size="mini" clearable>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-col>
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.headerStatus')">
      <el-checkbox :label="$t('account.pageSetupContent.fixedHeader')" name="fixedHeader"></el-checkbox>
      <el-checkbox :label="$t('account.pageSetupContent.hideSlide')" name="hideSlide"></el-checkbox>
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.sidebar')">
      <el-checkbox :label="$t('account.pageSetupContent.fixedSidebar')" name="fixedSidebar"></el-checkbox>
      <el-checkbox :label="$t('account.pageSetupContent.sidebarLogo')" name="sidebarLogo"></el-checkbox>
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.other')">
      <el-checkbox :label="$t('account.pageSetupContent.tagsView')" name="tagsView" v-model="form.delivery"></el-checkbox>
      <el-checkbox :label="$t('account.pageSetupContent.colorBlindness')" name="type" v-model="form.type"></el-checkbox>
    </el-form-item>
  </el-form>
</template>

<script>
import ThemePicker from '@/components/ThemePicker'

export default {
  components: { ThemePicker },
  data() {
    return {
      form: {
        name: '',
        delivery: false,
        type: false
      }
    }
  },
  methods: {
    themeChange(val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
    }
  }
}
</script>
