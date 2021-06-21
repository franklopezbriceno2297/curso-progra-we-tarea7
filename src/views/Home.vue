<template>
  <div class="container">
    <div class="row">
      <div class="d-flex flex-column align-items-center mt-4">
        <HelloWorld msg="Bienvenido a la práctica #7" />
        <img class="mt-3" alt="Vue logo" src="../assets/logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
</style>
