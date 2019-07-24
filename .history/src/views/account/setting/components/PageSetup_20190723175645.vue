<template>
  <el-form ref="form" :model="form" label-width="180px">
    <el-form-item :label="$t('account.pageSetupContent.styleSettings')">
      <el-color-picker v-model="styleSettings" show-alpha size="mini" />
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.theme')">
      <theme-picker @change="themeChange" />
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.navigationMode')">
      <el-radio-group v-model="navigationMode" size="small">
        <el-radio label="lt" border>左上</el-radio>
        <el-radio label="rt" border>右上</el-radio>
        <el-radio label="l" border>左</el-radio>
        <el-radio label="t" border>上</el-radio>
        <el-radio label="r" border>右</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.contentArea')">
      <el-col :span="6">
        <el-select v-model="language" :placeholder="$t('account.pageSetupContent.language')" size="mini" clearable>
          <el-option label="中文" value="zh" />
          <el-option label="English" value="en" />
        </el-select>
      </el-col>
      <!-- <el-col :span="6">
        <el-select v-model="areaWith" :placeholder="$t('account.pageSetupContent.areaWith')" size="mini" clearable>
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-col> -->
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.headerStatus')">
      <el-checkbox v-model="fixedHeader" :label="$t('account.pageSetupContent.fixedHeader')" name="fixedHeader" />
      <el-checkbox v-model="hideSlide" :label="$t('account.pageSetupContent.hideSlide')" name="hideSlide" />>
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.sidebar')">
      <el-checkbox v-model="fixedSidebar" :label="$t('account.pageSetupContent.fixedSidebar')" name="fixedSidebar" />
      <el-checkbox v-model="sidebarLogo" :label="$t('account.pageSetupContent.sidebarLogo')" name="sidebarLogo" />
    </el-form-item>
    <el-form-item :label="$t('account.pageSetupContent.other')">
      <el-checkbox v-model="tagsView" :label="$t('account.pageSetupContent.tagsView')" name="tagsView" />
      <el-checkbox v-model="colorBlindness" :label="$t('account.pageSetupContent.colorBlindness')" name="colorBlindness" />
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
    styleSettings() {
      return this.$store.getters.styleSettings
    },
    navigationMode: {
      get() {
        return this.$store.state.settings.navigationMode
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'navigationMode',
          value: val
        })
      }
    },
    language: {
      get() {
        return this.$store.getters.language
      },
      set(val) {
        this.$i18n.locale = val
        this.$store.dispatch('app/setLanguage', val)
        this.$message({
          message: 'Switch Language Success',
          type: 'success'
        })
      }
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
    hideSlide: {
      get() {
        return this.$store.state.settings.hideSlide
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'hideSlide',
          value: val
        })
      }
    },
    fixedSidebar: {
      get() {
        return this.$store.state.settings.fixedSidebar
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'fixedSidebar',
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
    colorBlindness: {
      get() {
        return this.$store.state.settings.colorBlindness
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'colorBlindness',
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
    }
  }
}
</script>
