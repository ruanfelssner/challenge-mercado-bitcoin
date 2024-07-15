<template>
  <main>
    <Steps />
  </main>
</template>

<script setup>
import Steps from '@/components/Organisms/Steps/OrganismsStepsIndex.vue'
</script>

<style lang="scss">
*{
  border:0;
  margin:0;
  padding:0;
  transition: all .3s;
}
main{
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  height: 100vh;
}
</style>
