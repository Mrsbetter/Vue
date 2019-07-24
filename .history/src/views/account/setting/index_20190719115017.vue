<template>
  <div style="padding: 20px;">
    <div> {{ $t('el.colorpicker') }}</div>
    <el-tabs :tab-position="'left'" type="border-card">
      <el-tab-pane>
        <span slot="label">{{ $t('account.webSetting') }}</span>
        用户管理 {{ $t('account.webSetting') }} {{ $t('el.colorpicker') }}
      </el-tab-pane>
      <el-tab-pane label="安全设置">配置管理</el-tab-pane>
      <el-tab-pane label="账号绑定">角色管理</el-tab-pane>
      <el-tab-pane label="新消息通知">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
