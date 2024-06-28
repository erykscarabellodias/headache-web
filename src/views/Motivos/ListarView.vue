<template>
  <div class="container mt-3">
    <MotivosHeader title="Motivos cadastrados" extraButtonTitle="Novo motivo" extraButtonUrl="/motivos/cadastrar" />

    <MotivosTable />
  </div>
</template>

<script>
import MotivosTable from '@/components/Motivos/MotivosTable.vue';
import MotivosHeader from '@/components/Motivos/MotivosHeader.vue';

export default {
  components: {
    MotivosTable,
    MotivosHeader,
  }
}
</script>