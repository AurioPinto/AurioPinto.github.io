import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../components/Gallery.vue";
import Hero from "../components/Hero.vue";
// import LatestPost from "../components/LatestPost.vue";
import Header from "../views/Header.vue";
import History from "../components/History.vue";
import Footer from "../views/Footer.vue";
import Landing from "../components/Landing.vue";
import Navbar from "../components/Navbar.vue";
// import Contact from "../views/Contact";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/Gallery",
    name: "Gallery",
    component: Gallery
  },
  // {
  //   path: "/Contact",
  //   name: "Contact",
  //   component: Contact
  // },
  {
    path: "/History",
    name: "History",
    component: History
  },
  {
    path: "/Navbar",
    name: "Navbar",
    component: Navbar
  },
  {
    path: "/",
    name: "Hero",
    component: Hero
  },
  // {
  //   path: "/LatestPost",
  //   name: "LatestPost",
  //   component: LatestPost
  // },
  {
    path: "/Landing",
    name: "Landing",
    component: Landing,
    children: [
      // {
      //   path: "/Hero",
      //   name: "Hero",
      //   component: Hero
      // }
    ]
  },
  {
    path: "/Header",
    name: "Header",
    component: Header
  },
  {
    path: "/Footer",
    name: "Footer",
    component: Footer
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
