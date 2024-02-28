<template>
  <div>
    <label>Metni Girin:</label>
    <input v-model="inputText" />
    <p>Sentence Case: {{ sentenceCasedText }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const inputText = ref('');

watch(inputText, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    inputText.value = toSentenceCase(newValue);
  }
})

const toSentenceCase = (text) => {
  // Tümü büyük harfse, sadece ilk harfi büyük yaparak geri döndür
  if (text === text.toUpperCase()) {
    return text.charAt(0) + text.slice(1).toLowerCase();
  }
  // Diğer durumlar için kelimenin baş harflerini büyük yap
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

const sentenceCasedText = toSentenceCase(inputText);
</script>
