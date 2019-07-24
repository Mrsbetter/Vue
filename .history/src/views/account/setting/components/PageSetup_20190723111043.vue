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
        <el-select v-model="language" :placeholder="$t('account.pageSetupContent.language')" size="mini"  @change="handleSetLanguage" clearable>
          <el-option label="中文" value="zh"></el-option>
          <el-option label="English" value="en"></el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-select v-model="areaWith" :placeholder="$t('account.pageSetupContent.areaWith')" size="mini" clearable>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-col>
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.headerStatus')">
      <el-checkbox v-model="fixedHeader" :label="$t('account.pageSetupContent.fixedHeader')" name="fixedHeader"></el-checkbox>
      <el-checkbox v-model="hideSlide" :label="$t('account.pageSetupContent.hideSlide')" name="hideSlide"></el-checkbox>
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.sidebar')">
      <el-checkbox v-model="fixedSidebar" :label="$t('account.pageSetupContent.fixedSidebar')" name="fixedSidebar"></el-checkbox>
      <el-checkbox v-model="sidebarLogo" :label="$t('account.pageSetupContent.sidebarLogo')" name="sidebarLogo"></el-checkbox>
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.other')">
      <el-checkbox v-model="tagsView" :label="$t('account.pageSetupContent.tagsView')" name="tagsView"></el-checkbox>
      <el-checkbox v-model="colorBlindness" :label="$t('account.pageSetupContent.colorBlindness')" name="colorBlindness"></el-checkbox>
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
  computed: {
    language() {
      return this.$store.getters.language
    },
    areaWith() {
      return this.$store.getters.areaWith
    },
    fixedHeader: {
      get() {
        return this.$store.state.settings.fixedHeader
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'fixedHeader',
          value: val
        })
      }
    },
    tagsView: {
      get() {
        return this.$store.state.settings.tagsView
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'tagsView',
          value: val
        })
      }
    },
    sidebarLogo: {
      get() {
        return this.$store.state.settings.sidebarLogo
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'sidebarLogo',
          value: val
        })
      }
    },
    colorBlindness: {
      get() {
        return this.$store.state.settings.sidebarLogo
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'sidebarLogo',
          value: val
        })
      }
    }
  },
  methods: {
    themeChange(val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
    },
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLanguage', lang)
      this.$message({
        message: 'Switch Language Success',
        type: 'success'
      })
    }
  }
}
</script>
