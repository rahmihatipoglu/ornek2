<script setup>
import { reactive, onMounted } from 'vue'
const CEVAP = reactive({ iller: [] })

function getDataDersler() {
  fetch('http://localhost/vue_dersleri/api.php?method=get.dersler')
    .then((response) => response.json())
    .then((data) => (CEVAP.dersler = data))
}
onMounted(() => {
  getDataDersler()
})
</script>

<template>
  <div class="grid">
    <div>
      <details role="list">
        <summary aria-haspopup="listbox"><slot></slot></summary>
        <ul role="listbox">
          <li v-for="ders in CEVAP.dersler" :key="ders.id">
            <label>
              <input type="checkbox" :value="ders.adi" />
              {{ ders.adi }}
            </label>
          </li>
        </ul>
      </details>
    </div>
    <div></div>
  </div>
</template>
