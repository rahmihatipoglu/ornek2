<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <ul>
      <li><strong>Örnek 2</strong></li>
    </ul>
    <ul>
      <li>
        <RouterLink to="/">Anasayfa</RouterLink>
      </li>
      <li>
        <RouterLink to="/yeni">Yeni</RouterLink>
      </li>
      <li>
        <RouterLink to="/liste">Liste</RouterLink>
      </li>
      <li>
        <RouterLink to="/edit">Düzeltme</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Hakkında</RouterLink>
      </li>
      <li>
      <RouterLink to="/test">Test</RouterLink>
    </li>
    <li>
      <RouterLink to="/test2">Test2</RouterLink>
    </li>

  </ul>
</nav>
<RouterView></RouterView></template>

<style scoped></style>
