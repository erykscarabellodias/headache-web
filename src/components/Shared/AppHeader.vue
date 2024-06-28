<template>
  <el-menu class="el-menu-demo mb-3" mode="horizontal">
    <el-menu-item index="1">
      <template #title><router-link class="no-style-link" to="/">Home</router-link></template>
    </el-menu-item>

    <el-sub-menu index="2">
      <template #title>Motivos</template>

      <el-menu-item>
        <router-link class="no-style-link" to="/motivos">Listar</router-link>
      </el-menu-item>

      <el-menu-item>
        <router-link class="no-style-link" to="/motivos/cadastrar">Cadastrar</router-link>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.no-style-link {
  text-decoration: none
}
</style>