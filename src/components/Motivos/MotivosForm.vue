<template>
  <el-form>
    <div class="row d-flex justify-content-center">
      <div class="col-9">
        <el-form-item label="Motivo" required>
          <el-input v-model="motivo" placeholder="Descreva o motivo que você suspeita que iniciou uma enxaqueca" />
        </el-form-item>
      </div>

      <div class="col-3">
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">Salvar</el-button>
        </el-form-item>
      </div>
    </div>
  </el-form>
</template>

<script>

import axios from 'axios';
import { ElMessage } from 'element-plus';

export default {
  data() {
    return {
      motivo: ''
    }
  },

  methods: {
    async handleSubmit() {
      if (!this.motivo) {
        ElMessage({
          showClose: true,
          message: 'O motivo não pode ser vazio',
          type: 'error'
        });

        return;
      }

      await axios.post(`${process.env.VUE_APP_API_URL}/motivos`, {
        descricao: this.motivo
      })

      this.$router.push('/motivos')
    }
  }
}
</script>
