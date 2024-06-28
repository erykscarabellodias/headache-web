<template>
  <div class="container mt-3">
    <MotivosHeader title="Cadastrar novo motivo" />

    <br>

    <MotivosForm />
  </div>
</template>

<script>
import MotivosForm from '@/components/Motivos/MotivosForm.vue'
import MotivosHeader from '@/components/Motivos/MotivosHeader.vue'

export default {
  components: {
    MotivosForm,
    MotivosHeader
  }
}
</script>