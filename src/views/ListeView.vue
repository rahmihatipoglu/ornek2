<script setup>
import userListele from '@/components/userListele.vue'
</script>

<template>
  <userListele>
    <div class="default-slot">
      <slot>Kullanıcı Listesi</slot>
    </div>
    <div class="yedek-slot">
      <slot name="yedek-Slot"> </slot>
    </div>
  </userListele>
</template>
