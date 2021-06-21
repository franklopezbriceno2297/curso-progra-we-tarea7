<template>
  <div class="container">
    <div class="row">
      <h1 class="my-4">{{title}}</h1>
      <div class="d-flex flex-row my-3">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">De</span>
          </div>
          <input v-model="baseNumber" type="number" class="form-control" />
          <select v-model="baseUnit" class="custom-select">
            <option disabled value="">Seleccione Unidad</option>
            <template v-for="conversionUnit in conversionUnits" :key="conversionUnit.key">
              <option :disabled="conversionUnit.disabled" :value="conversionUnit.key">{{conversionUnit.name}}</option>
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
            <template v-for="unit in unitsToConvert" :key="unit.key">
              <option :disabled="unit.disabled" :value="unit.key">{{unit.name}}</option>
            </template>
          </select>
        </div>
        <div class="d-flex align-items-center">
          <button class="btn btn-primary btn-sm mx-2" @click="convert">Convertir</button>
          <button class="btn btn-danger btn-sm" @click="reset">Limpiar</button>
        </div>
      </div>
      <div v-if="(errorMessage !== '')" class="alert alert-danger errorMessage mx-3" role="alert">{{errorMessage}}</div>
    </div>
  </div>
</template>

<script>
const converter = require('convert-units')

const addDisabledField = (conversionUnit) => ({ ...conversionUnit, disabled: false })

export default {
  name: 'Converter',
  props: {
    conversionData: Array,
    title: String
  },
  data: () => ({
    baseUnit: '',
    unitToConvert: '',
    baseNumber: 0,
    numberToConvert: '0',
    errorMessage: ''
  }),
  computed: {
    conversionUnits () {
      return ((this.unitToConvert === '') ? this.conversionData.map(unit => addDisabledField(unit)) : this.conversionData.map(unit => ({ ...unit, disabled: (this.unitToConvert === unit.key) })))
    },
    unitsToConvert () {
      return ((this.baseUnit === '') ? this.conversionData.map(unit => addDisabledField(unit)) : this.conversionData.map(unit => ({ ...unit, disabled: (this.baseUnit === unit.key) })))
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
    convert () {
      if (!isNaN(parseInt(this.baseNumber)) && this.baseUnit.trim() && this.unitToConvert.trim()) {
        this.numberToConvert = converter(parseInt(this.baseNumber)).from(this.baseUnit).to(this.unitToConvert)
        this.errorMessage = ''
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
