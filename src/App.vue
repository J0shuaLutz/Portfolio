<template>
  <!-- Alles, was auf jeder Seite erscheinen soll, kann hier rein -->
  <!-- z. B. globale Header, Footer oder Hintergrund-Shader, falls überall nötig -->

  <!-- Router-Outlet: Hier wird Home.vue oder Profile.vue geladen -->
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>