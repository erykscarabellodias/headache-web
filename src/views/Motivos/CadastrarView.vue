<template>
  <div class="container mt-3">
    <h1>Cadastrar novo motivo</h1>

    <MotivosForm />
  </div>
</template>

<script>
import MotivosForm from '@/components/Motivos/MotivosForm.vue'
export default {
  components: {
    MotivosForm
  }
}
</script>