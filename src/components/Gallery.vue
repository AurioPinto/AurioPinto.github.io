<template>
  <div class="container">
    <div class="block galleryBlock">
      <v-container>
        <h2 class="text-center">Gallery</h2>
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.id"
            class="d-flex child-flex"
            cols="6"
            sm="4"
          >
            <v-card flat tile class="d-flex">
              <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="cycle">
        <v-switch v-model="reverse" label="Toggle reverse"></v-switch>
        <v-timeline :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item v-for="n in 2" :key="n">
            <span slot="opposite">Tus eu perfecto</span>
            <v-card class="elevation-2">
              <v-card-title class="headline"> Lorem ipsum </v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
        <v-timeline :reverse="reverse" dense>
          <v-timeline-item v-for="n in 2" :key="n">
            <span slot="opposite">Tus eu perfecto</span>
            <v-card class="elevation-2">
              <v-card-title class="headline"> Lorem ipsum </v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      reverse: true,
      items: [
        {
          id: 1,
          src: require("../assets/images/img1.jpg"),
        },
        {
          id: 2,
          src: require("../assets/images/img2.jpg"),
        },
        {
          id: 3,
          src: require("../assets/images/img3.jpg"),
        },
        {
          id: 4,
          src: require("../assets/images/img4.jpg"),
        },
        {
          id: 5,
          src: require("../assets/images/img5.jpg"),
        },
        {
          id: 6,
          src: require("../assets/images/img6.jpg"),
        },
        {
          id: 7,
          src: require("../assets/images/img7.jpg"),
        },
        {
          id: 8,
          src: require("../assets/images/img8.jpg"),
        },
        {
          id: 9,
          src: require("../assets/images/img9.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 90px;
  // max-width: 1440px;
  // margin: auto;
  // height: 100vh;
  // width: 100%;
  min-height: 100vh;
  .cycle {
    height: 100vh;
  }
}
</style>