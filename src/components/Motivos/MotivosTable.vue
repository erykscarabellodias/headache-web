<template>
  <div class="mt-3">
    <el-table :data="motivos" stripe>
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="descricao" label="Descrição" />
    </el-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      motivos: []
    }
  },

  async created() {
    const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/motivos`);

    this.motivos = data
  }
}
</script>
