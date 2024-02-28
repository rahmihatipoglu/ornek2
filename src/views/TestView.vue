<script setup>
import { ref } from 'vue'
//import TCKNValidation from '@/components/TCKNValidation.vue'
const myTC = ref('')
</script>
<template>
  <div class="container">
    <h1>Test1</h1>
    <div class="grid">
      <div>
        <TCKNValidation v-model="myTC" />
      </div>
      <div></div>
    </div>
  </div>
</template>
