<template>
  <div>
    <div class="img">
      <img src="../assets/pw.shanghai.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "front",
  data() {
    return {
      user: {
        name: "front",
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/home");
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
.img {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
    box-shadow: 0 0 10px 10px rgba(#ccffff, 0.3);
    animation-name: img;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    @keyframes img {
      from {
        opacity: 0.6;
      }
      50% {
        opacity: 1;
      }
      to {
        opacity: 0.6;
      }
    }
  }
}
</style>
