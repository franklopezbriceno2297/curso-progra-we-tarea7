<template>
   <Converter :conversionData="weights" title="Convertir Peso" />
</template>

<script>
import Converter from '@/components/Converter.vue'

import weights from '../data/weights'

export default {
  name: 'Weights',
  components: {
    Converter
  },
  data: () => ({
    weights
  })
}
</script>

<style>
</style>
