<template>
  <div class="layout">
    <span>Machine Learning</span>
  </div>
</template>

<script>
export default {
  name: "front",
  data() {
    return {
      user: {
        name: "Landing",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  margin: auto;
  // max-width: 1440px;
  width: 100%;
  min-height: 100vh;
  // height: 100vh;
  background-color: #ccffff;
}
</style>
