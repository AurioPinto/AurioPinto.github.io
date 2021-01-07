<template>
  <v-app id="inspire">
    <v-app-bar color="white" app fixed>
      <v-img
        max-height="140"
        max-width="200"
        src="../assets/Neural.png"
      ></v-img>
      <v-spacer></v-spacer>
      <v-app-bar-items class="hidden-xs-only color ml-n9">
        <v-btn text><router-link to="/">Home</router-link></v-btn>
        <v-btn text
          ><router-link to="/Contact">Services & Solutions</router-link></v-btn
        >
        <v-btn text><router-link to="/">About Kwdima</router-link></v-btn>
        <v-btn text><router-link to="/">Contact us</router-link></v-btn>
      </v-app-bar-items>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu color">
            <v-list-item>
              <v-list-item-title
                ><router-link to="/">Home</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/"
                  >Services & Solutions</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/"
                  >About Kwdima</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/">Contact us</router-link></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "Header",
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
body {
  background-color: white;
}
.color {
  a {
    color: black;
    text-decoration: none;
    // &:hover {
    //   border-bottom: 5px solid #00263c;
    //   padding: 10px 0;
    // }
  }
}
// #inspire {
//   text-align: center;
// }
</style>