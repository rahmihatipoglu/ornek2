<script setup>
import { ref, reactive, onMounted } from 'vue'
//import { useUserStore } from '@/stores/userStore'

const seciliDersler = ""
//  = computed(() => { return myEdit.user.dersler.split(', ') })
const CEVAP = reactive({ iller: [], dersler: [] })
const refFormlar = ref(null)
//const global = useUserStore()
const myEdit = reactive({
  user: {
    id: 0,
    dersler: []
  }
})

onMounted(() => {
  getDataFormlar('get.formlar')
  getDataIller()
  getDataDersler()
})

function getDataFormlar(method) {
  fetch('http://localhost/vue_dersleri/api.php?method=' + method)
    .then((response) => response.json())
    .then((data) => {
      refFormlar.value = data
    })
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
  const data = myEdit.user
  myEdit.user.dersler =
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        myEdit.user = {}
        myEdit.user.id = 0
        myEdit.user.dersler = []
        alert(data.mesaj)
        getDataFormlar('get.formlar')
      })
}
function silFormuGonder(method) {
  formuGonder(method)
  getDataFormlar('get.formlar')
}

/* function deneme() {
  alert('BEMEMM')
} */
</script>

<template>
  <pre>{{ seciliDersler }}<br/>{{ myEdit.user.dersler }} <br/>
  </pre>
  <div class="container">
    <form @submit.prevent="formuGonder('update.form')" v-if="myEdit.user.id > 0">
      <article data-theme="light">
        <h1>Kayıt Güncelle</h1>

        <div class="grid">
          <div>
            <label>
              Ad Soyad
              <input type="text" v-model="myEdit.user.adsoyad" />
            </label>
          </div>
          <div>
            <TCKNValidation v-model="myEdit.user.tc" />
          </div>
        </div>
        <div class="grid">
          <div>
            <label>E-posta Adresi
              <input type="email" v-model="myEdit.user.eposta" />
              <small>Doğru bir e-posta adresi giriniz ve kimseyla paylaşmayınız.</small>
            </label>
          </div>
          <div>
            <label>Yaş <input type="number" v-model="myEdit.user.yas" /></label>
          </div>
          <div>
            <p>
              Şehir
              <select v-model="myEdit.user.il_id">
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
            <pre>{{ myEdit.user.dersler.split('| ') }}</pre>
            <pre>{{ myEdit.user.dersler.split('| ').includes("PHP") }}</pre>
            <details role="list">
              <summary aria-haspopup="listbox">Dersler</summary>
              <ul role="listbox">
                <li v-for="ders in CEVAP.dersler" :key="ders.id">
                  <label>
                    <input type="checkbox" :value="ders.adi" v-model="seciliDersler"
                      :checked="myEdit.user.dersler.split('| ').includes(ders.adi)" />
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
        <form @submit.prevent="silFormuGonder('delete.form')">
          <div>
            <button type="submit">Sil</button>
          </div>
        </form>
        <form @submit.prevent="silFormuGonder('inactive.form')">
          <div>
            <button type="submit">Pasif</button>
          </div>
        </form>
      </div>
    </form>

    <article data-theme="light" v-if="myEdit.user.id == 0">
      <h2>
        <slot></slot>
      </h2>

      <figure>
        <figure @submit.prevent="getDataFormlar('get.formlar&aktif=1')">
          <div class="grid">
            <div></div>
            <div></div>
            <div>
              <fieldset>
                <label for="switch">
                  <input type="checkbox" role="switch" @change="getDataFormlar('get.formlar&aktif=1')" />
                  Pasifleri Gösterme
                </label>
              </fieldset>
            </div>
            <div>
              <button href="#" type="submit" role="button" class="contrast">
                <small>Pasifleri Gösterme</small>
              </button>
            </div>
          </div>

          <table role="grid">
            <thead>
              <tr>
                <th nowrap>ID</th>
                <th nowrap>Ad Soyad</th>
                <th nowrap>TC Kimlik</th>
                <th nowrap>E-posta</th>
                <th nowrap>Adres</th>
                <th nowrap>Yaş</th>
                <th nowrap>Dersler</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in refFormlar" :key="i.id">
                <td nowrap>
                  <button @click="myEdit.user = i" v-if="i.durum == 1">{{ i.id }}</button>
                </td>
                <td nowrap>{{ i.adsoyad }}</td>
                <td nowrap>{{ i.tc }}</td>
                <td nowrap>{{ i.eposta }}</td>
                <td nowrap>{{ i.il_adi }}</td>
                <td nowrap>{{ i.yas }}</td>
                <td nowrap>{{ i.dersler.replaceAll('|', ',') }}</td>
              </tr>
            </tbody>
          </table>
          <small style="color: red" v-if="myEdit.user.id == 0">
            Değiştirmek istediğiniz kaydın numarasına tıklayınız.</small>
        </figure>
      </figure>
    </article>
  </div>
</template>
<style scoped>
TH {
  font-weight: bold;
}

H2 {
  text-align: center;
}
</style>
