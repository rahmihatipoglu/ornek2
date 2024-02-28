<script setup>
import { ref } from 'vue'


const inputText = ref('')
const titleCasedText = defineModel()

const titleCase = (str) => {
  const splitStr = str.toLowerCase().split(' ')

  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = capitalizeFirstLetter(splitStr[i])
  }

  return splitStr.join(' ')
}

const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const convertToTitleCase = () => {
  titleCasedText.value = titleCase(inputText.value)
}
</script>

<template>
  <div>
    <label>Metin:</label>
    <input v-model="titleCasedText" type="text" />
    <button @click="convertToTitleCase">Başlık Harf Dönüştür</button>

    <div v-if="titleCasedText !== ''">
      <p>Çıktı:</p>
      <p>{{ titleCasedText }}</p>
    </div>
  </div>
</template>

<style scoped></style>
