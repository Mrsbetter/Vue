<template>
  <div style="padding: 20px;">
    <el-tabs :tab-position="'left'">
      <el-tab-pane>
        <span slot="label">{{ $t('account.pageSetup') }}</span>
        <admin/>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">{{ $t('account.securitySettings') }}</span>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">{{ $t('account.accountBinding') }}</span>
      </el-tab-pane>
      <el-tab-pane label="新消息通知">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import admin from './components/PageSetup'
export default {
  name: 'setting',
  components: { admin }
}
</script>
