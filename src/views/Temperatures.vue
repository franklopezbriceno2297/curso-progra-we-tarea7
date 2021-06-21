<template>
   <Converter :conversionData="temperatures" title="Convertir Temperatura" />
</template>

<script>
import Converter from '@/components/Converter.vue'

import temperatures from '../data/temperatures'

export default {
  name: 'Temperatures',
  components: {
    Converter
  },
  data: () => ({
    temperatures
  })
}
</script>

<style>
</style>
