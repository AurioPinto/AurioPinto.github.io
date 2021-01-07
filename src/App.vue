<template>
  <v-app id="inspire">
    <v-app-bar flat max-height="65" fixed>
      <Header />
    </v-app-bar>

    <router-view></router-view>

    <v-footer fixed>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./views//Header";
import Footer from "./views/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },

  data: () => ({}),
};
</script>

<style>
html,
body {
  background-color: white;
  max-width: 100%;
  min-height: 100vh;
}
body::-webkit-scrollbar {
  display: none !important;
}
</style>
