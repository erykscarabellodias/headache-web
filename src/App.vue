<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">
      <template #title><router-link to="/">Home</router-link></template>
    </el-menu-item>

    <el-sub-menu index="2">
      <template #title>Motivos</template>

      <el-menu-item>
        <router-link to="/motivos/cadastrar">Cadastrar</router-link>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@import '~bootstrap/dist/css/bootstrap.css';

@import '~element-plus/dist/index.css'
</style>
