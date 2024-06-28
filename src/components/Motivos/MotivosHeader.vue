<template>
  <el-page-header style="color: #ccc" title="Voltar" @back="onBack">
    <template #content>
      <span class="text-large font-600 mr-3">{{ this.title }}</span>
    </template>

    <template v-if="extraButtonTitle && extraButtonUrl" #extra>
      <router-link :to="this.extraButtonUrl">
        <el-button type="primary">{{ this.extraButtonTitle }}</el-button>
      </router-link>
    </template>
  </el-page-header>
</template>

<script>
export default {
  props: [
    'title',
    'extraButtonTitle',
    'extraButtonUrl'
  ],

  methods: {
    onBack() {
      this.$router.back()
    }
  }
}
</script>