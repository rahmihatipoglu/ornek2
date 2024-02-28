<script setup>
function anaSayfayaGit() {
  window.location.href = 'http://localhost:8000/'
}
</script>

<template>
  <div class="container">
    <form @submit.prevent="anaSayfayaGit">
      <article data-theme="light">
        <h3>Bu sayfa hakkında sayfasıdır.</h3>
        <p>Bu projeye 15.01.2024 Pazartesi başlandı.</p>
        <div>
          <button type="submit">Anasayfa</button>
        </div>
      </article>
    </form>
  </div>
</template>
