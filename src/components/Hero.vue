<template>
  <div class="heroBlock">
    <div class="text">
      <h3>Our Website is under construction</h3>
    </div>
    <!-- <v-carousel cycle hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-container class="title" align="left" justify="left">{{
          item.title
        }}</v-container>
      </v-carousel-item>
    </v-carousel> -->
    <v-content align="center">
      <h1>{{ title }}</h1>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
      <!-- <ul v-for="(icon, i) in icons" :key="i" :src="icon.src">
        <li><i class="fas fa-code"></i></li>
      </ul> -->
    </v-content>
    <!-- <v-container>
      <v-row justify="space-around">
        <v-card width="400">
          <v-img
            height="200px"
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          >
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

              <v-toolbar-title class="title white--text pl-0">
                Messages
              </v-toolbar-title>

              <v-spacer></v-spacer>

              <v-btn color="white" icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-app-bar>

            <v-card-title class="white--text mt-8">
              <v-avatar size="56">
                <img
                  alt="user"
                  src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                />
              </v-avatar>
              <p class="ml-3">Aurio Pinto</p>
            </v-card-title>
          </v-img>

          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">Today</div>

            <v-timeline align-top dense>
              <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :color="message.color"
                small
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container> -->
    <!-- <LatestPost /> -->
    <!-- <History></History> -->
  </div>
</template>

<script>
// import LatestPost from "./LatestPost";
// import History from "./History";

export default {
  components: {
    // LatestPost,
    // History,
  },
  name: "Hero",
  data() {
    return {
      // title: "What are You Designing Today?",
      // icons: [
      //   "fas fa-code",
      //   "fab fa-facebook",
      //   "fab fa-twitter",
      //   "fab fa-google-plus",
      //   "fab fa-linkedin",
      //   "fab fa-instagram",
      // ],
      // items: [
      //   {
      //     src: require("../assets/Neural.png"),
      //     // title: "We build Networks Solutions for all your needs",
      //   },
      //   {
      //     src: require("../assets/userheader.png"),
      //     title: "We build Network Solutions for all your needs....",
      //   },
      //   {
      //     src: require("../assets/metro.jpg"),
      //     title: "We build Network Solutions for all your needs....",
      //   },
      // ],
      // messages: [
      //   {
      //     from: "You",
      //     message: `Sure, I'll see you later.`,
      //     time: "10:42am",
      //     color: "deep-purple lighten-1",
      //   },
      //   {
      //     from: "Aurio Pinto",
      //     message: "Yeah, sure. Does 1:00pm work?",
      //     time: "10:37am",
      //     color: "green",
      //   },
      //   {
      //     from: "You",
      //     message: "Did you still want to grab lunch today?",
      //     time: "9:47am",
      //     color: "deep-purple lighten-1",
      //   },
      // ],
      // icon: [
      //   {
      //     title: "Development",
      //     src: "fas fa-code",
      //   },
      // ],
    };
  },
};
</script>

<style lang="scss" scoped>
.heroBlock {
  margin: auto;
  width: 100%;
  min-height: 100vh;
  margin-top: 66px;
  .normal {
    font-size: 60px;
  }
  v-row {
    font-size: 40px;
  }
  .text {
    text-align: center;
    h3 {
      font-size: 50px;
      position: fixed;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.title {
  font-size: 40px;
}
</style>