<template>
  <div class="container">
    <div class="row">
      <h1 class="my-4">Convertir Distancias</h1>
      <div class="d-flex flex-row my-3">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">De</span>
          </div>
          <input v-model="baseNumber" type="number" class="form-control" />
          <select v-model="baseUnit" class="custom-select">
            <option disabled value="">Seleccione Unidad</option>
            <template v-for="distance in baseDistances" :key="distance.key">
              <option :disabled="distance.disabled" :value="distance.key">{{distance.name}}</option>
            </template>
          </select>
        </div>
        <div class="input-group mx-2">
          <div class="input-group-prepend">
            <span class="input-group-text">A</span>
          </div>
          <input v-model="numberToConvert" disabled type="text" class="form-control" />
          <select v-model="unitToConvert" class="custom-select">
            <option disabled value="">Seleccione Unidad</option>
            <template v-for="distance in distancesToConvert" :key="distance.key">
              <option :disabled="distance.disabled" :value="distance.key">{{distance.name}}</option>
            </template>
          </select>
        </div>
        <div class="d-flex align-items-center">
          <button class="btn btn-primary btn-sm mx-2" @click="convertDistances">Convertir</button>
          <button class="btn btn-danger btn-sm" @click="reset">Limpiar</button>
        </div>
      </div>
      <div v-if="(errorMessage !== '')" class="alert alert-danger errorMessage mx-3" role="alert">{{errorMessage}}</div>
    </div>
  </div>
</template>

<script>
import distances from '@/data/distances'
const convert = require('convert-units')

export default {
  name: 'Distances',
  data: () => ({
    distances,
    baseUnit: '',
    unitToConvert: '',
    baseNumber: 0,
    numberToConvert: '0',
    errorMessage: ''
  }),
  computed: {
    baseDistances () {
      return ((this.unitToConvert === '') ? this.distances.map(distance => ({ ...distance, disabled: false })) : this.distances.map(distance => ({ ...distance, disabled: (this.unitToConvert === distance.key) })))
    },
    distancesToConvert () {
      return ((this.baseUnit === '') ? this.distances.map(distance => ({ ...distance, disabled: false })) : this.distances.map(distance => ({ ...distance, disabled: (this.baseUnit === distance.key) })))
    }
  },
  methods: {
    reset () {
      this.baseUnit = ''
      this.unitToConvert = ''
      this.baseNumber = 0
      this.numberToConvert = '0'
      this.errorMessage = ''
    },
    convertDistances () {
      if (!isNaN(parseInt(this.baseNumber)) && this.baseUnit.trim() && this.unitToConvert.trim()) {
        this.numberToConvert = convert(parseInt(this.baseNumber)).from(this.baseUnit).to(this.unitToConvert)
      } else {
        this.errorMessage = '¡No se pudo hacer la conversión!'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.errorMessage {
 max-width: 25%;
}
</style>
