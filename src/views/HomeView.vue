<script setup>
import cityListele from '@/components/cityList.vue'
import courseListele from '@/components/courseList.vue'
import titleCase from '@/components/titleCase.vue'
import { useUserStore } from '@/stores/userStore'

const global = useUserStore()

</script>

<template>
  <div class="container">
    <article data-theme="light">
      <h1>Ana Sayfa</h1>
      <p>Örnek 2 denemesi 15.01.2024 Pazartesi</p>
      <div class="grid">
        <div>
          <cityListele>Şehir</cityListele>
        </div>
        <div>
          <course-listele>Ders</course-listele>
        </div>
        <div>
          <TCKNValidation v-model="global.user.tc"></TCKNValidation>
        </div>
        <div><title-case></title-case></div>
      </div>
    </article>
    <details>
      <summary>Yapılanlar</summary>
      <p>…</p>
    </details>

    <details open>
      <summary>Yapılacaklar</summary>
      <ul>
        <li>…</li>
        <li>…</li>
      </ul>
    </details>
  </div>
</template>
