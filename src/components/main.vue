<template>
  <div class="main">
    <div class="section1"></div>
    <div class="section2"></div>
    <div class="section3"></div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.main {
  .section1 {
    background-image: url("../assets/back-shop4.jpg");
    background-position: center;
    background-size: cover;
    min-height: 100vh;

    svg {
      margin-top: 100px;
      fill: white;
      background-color: red;
      border: 1px solid white;
    }
  }

  .section2 {
    height: 100vh;
    width: 100%;
    background-color: #f1f1f1;
  }

  .section3 {
    height: 100vh;
    width: 100%;
    background-color: gold;
  }
}
</style>