<script setup>
import { reactive, onMounted } from 'vue'
const CEVAP = reactive({ iller: [] })

function getDataIller() {
  fetch('http://localhost/vue_dersleri/api.php?method=get.iller')
    .then((response) => response.json())
    .then((data) => (CEVAP.iller = data))
}
onMounted(() => {
  getDataIller()
})
</script>

<template>
  <div>
    <div>
      <p>
        <slot></slot>
        <select>
          <!-- <select v-model="myEdit.user.sehir_id"> -->
          <option value="0">** Seçiniz **</option>
          <option v-for="il in CEVAP.iller" :value="il.id" :key="il.id">
            {{ il.il_adi }}
          </option>
        </select>
      </p>
    </div>
  </div>
</template>
