<template>
  <div class="sos-page">
    <h1>Work in Progress</h1>
    <p>The Portfolio is not finished. Please visit other Projects.</p>
    <!-- Du kannst hier beliebige Inhalte einfügen -->
     <BackButton/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BackButton from '../components/BackButton.vue'

export default defineComponent({
  name: 'WorkInProgress',
  components: {
      BackButton
    },
  setup() {
    // Hier kannst du reaktive Variablen, Methoden, computed properties etc. definieren
    return {};
  }
});
</script>

<style scoped>
.sos-page {
  padding: 20px;
  text-align: center;
  color: #fff;
  background-color: #102040; /* optional, Hintergrundfarbe */
}
</style>