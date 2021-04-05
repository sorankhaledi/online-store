<template>
  <div class="main">
    <div class="section1"></div>
    <div class="section2"></div>
    <div class="section3"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false
    };
  },
  methods: {
    scroll() {
      const header = document.querySelector("header").firstElementChild;
      const section1 = document.getElementsByClassName("section1")[0];

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entery) => {
            if (!entery.isIntersecting) {
              header.classList.add("dark");
            } else {
              header.classList.remove("dark");
            }
          });
        },
        {
          rootMargin: "-120px 0px 0px 0px",
        }
      );
      observer.observe(section1);

      const observer2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entery) => {
            if (!entery.isIntersecting) {
              header.classList.add("scrolled");
            } else {
              if(header.scrollHeight < 100) {
                header.classList.remove("scrolled");
              }
            }
          });
        },
        {
          threshold: 1,
        }
      );

      observer2.observe(section1);
    },
  },
  mounted() {
    this.scroll();
  },
};
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