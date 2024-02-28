<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { useUserStore } from '@/stores/userStore'

const global = useUserStore()
const CEVAP = reactive({ iller: [], dersler: [] })
const inputText = ref('');

onMounted(() => {
  getDataIller()
  getDataDersler()
})

watch(inputText, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    inputText.value = toSentenceCase(newValue);
  }
})

const toSentenceCase = (text) => {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

function getDataIller() {
  fetch('http://localhost/vue_dersleri/api.php?method=get.iller')
    .then((response) => response.json())
    .then((data) => (CEVAP.iller = data))
}

function getDataDersler() {
  fetch('http://localhost/vue_dersleri/api.php?method=get.dersler')
    .then((response) => response.json())
    .then((data) => (CEVAP.dersler = data))
}

function formuGonder(method) {
  const url = 'http://localhost/vue_dersleri/formlar.api.php?method=' + method

  const data = global.user
  global.user.dersler = global.user.dersler.join('| ')
  //global.user.adsoyad = titleCase(global.user.adsoyad)
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      global.user = {}
      global.user.il_id = 0
      global.user.dersler = []

      alert(data.mesaj)
    })
}
</script>
<template>
  <pre>{{ global.user }}</pre>
  <div class="container">
    <form @submit.prevent="formuGonder('create.form')">
      <article data-theme="light">
        <h1>Yeni Kayıt</h1>
        <div class="grid">
          <div>
            <label>
              Ad Soyad
              <input type="text" v-model="global.user.adsoyad" />
            </label>
          </div>
          <div>
            <label>Metni Girin:</label>
            <input v-model="inputText" />
            <p>Sentence Case: {{ inputText }}</p>
          </div>
          <div>
            <TCKNValidation v-model="global.user.tc" />
          </div>
        </div>
        <div class="grid">
          <div>
            <label>E-posta Adresi
              <input type="email" v-model="global.user.eposta" />
              <small>Doğru bir e-posta adresi giriniz ve kimseyla paylaşmayınız.</small>
            </label>
          </div>
          <div>
            <label>Yaş <input type="number" v-model="global.user.yas" /></label>
          </div>
          <div>
            <p>
              Şehir
              <select v-model="global.user.il_id">
                <option value="0">** Seçiniz **</option>
                <option v-for="il in CEVAP.iller" :value="il.id" :key="il.id">
                  {{ il.il_adi }}
                </option>
              </select>
            </p>
          </div>
        </div>
        <div class="grid">
          <div>
            <details role="list">
              <summary aria-haspopup="listbox">Dersler</summary>
              <ul role="listbox">
                <li v-for="ders in CEVAP.dersler" :key="ders.id">
                  <label>
                    <input type="checkbox" :value="ders.adi" v-model="global.user.dersler" />
                    {{ ders.adi }}
                  </label>
                </li>
              </ul>
            </details>
          </div>
          <div></div>
        </div>
      </article>
      <div class="grid">
        <div>
          <button type="submit">Kaydet</button>
        </div>
      </div>
    </form>
  </div>
</template>
