<script setup>
import { computed } from 'vue'

const tckn = defineModel()

let hata = false

if (tckn.value === undefined) {
  hata = true
}


const isValidTCKN = computed(() => {
  if (tckn.value == '0') return "TCKN 0 İle başlayamaz!"
  if (tckn.value.length != 11) return 'TCKN 11 karakter olmalıdır!'
  if (!TCNOKontrol(tckn.value)) return 'TCKN Hatalıdır!'

  return true
})

function TCNOKontrol(TCNO) {
  var tek = 0,
    cift = 0,
    sonuc = 0,
    TCToplam = 0,
    hatali = [
      33333333330, 44444444440, 55555555550, 66666666660, 7777777770,
      88888888880, 99999999990
    ]

  if (TCNO.length != 11) return false
  if (isNaN(TCNO)) return false
  if (TCNO[0] == 0) return false

  tek =
    parseInt(TCNO[0]) +
    parseInt(TCNO[2]) +
    parseInt(TCNO[4]) +
    parseInt(TCNO[6]) +
    parseInt(TCNO[8])
  cift = parseInt(TCNO[1]) + parseInt(TCNO[3]) + parseInt(TCNO[5]) + parseInt(TCNO[7])

  tek = tek * 7
  sonuc = tek - cift
  if (sonuc % 10 != TCNO[9]) return false

  for (var j = 0; j < 10; j++) {
    TCToplam += parseInt(TCNO[j])
  }

  if (TCToplam % 10 != TCNO[10]) return false

  if (hatali.toString().indexOf(TCNO) != -1) return false

  return true
}
</script>

<template>
  <!-- <div v-if="hata">
    <h1>Hata yapma kardeşim...</h1>
  </div> -->
  <div v-if="!hata">
    <label>TC Kimlik Numarası:
      <input v-model="tckn" type="text" maxlength="11" pattern="\d{11}" required autocomplete="off" />
    </label>

    <div v-if="isValidTCKN !== true" style="color: red">
      {{ isValidTCKN }}
    </div>
    <div v-if="isValidTCKN === true" style="color: green">TCKN Doğru!</div>
  </div>
</template>

<style scoped>
/* Bileşenin özel stil kuralları buraya gelebilir */
</style>
