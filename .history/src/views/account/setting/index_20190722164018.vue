<template>
  <div style="padding: 20px;">
    <el-tabs :tab-position="'left'">
      <el-tab-pane>
        <span slot="label">{{ $t('account.pageSetup') }}</span>
        <admin />
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">{{ $t('account.securitySettings') }}</span>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">{{ $t('account.accountBinding') }}</span>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">{{ $t('account.messageNotification') }}</span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import admin from './components/PageSetup'
export default {
  components: { admin },
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
