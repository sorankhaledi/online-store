<template>
  <div id="app">
    <app-header></app-header>
    <app-main class="main"></app-main>
  </div>
</template>

<script>
import HeaderVue from "./components/Header.vue";
import mainVue from "./components/main.vue";

export default {
  components: {
    appHeader: HeaderVue,
    appMain: mainVue,
  },
  methods: {
    scroll() {
      const header = document.querySelector("header");
      const section1 = document.getElementsByClassName("section1")[0];

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entery => {
          if(!entery.isIntersecting) {
            header.classList.add('dark');
          } else {
            header.classList.remove('dark');
          }
        })
      }, {
        rootMargin: "-120px 0px 0px 0px"
      });
      observer.observe(section1);


      const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entery => {
          if(!entery.isIntersecting) {
            header.classList.add('scrolled');
          } else{
            header.classList.remove('scrolled');
          }
        })
      }, {
        threshold: 1
      });

      observer2.observe(section1);

    },
  },
  mounted() {
    this.scroll();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .main {
  }
}
</style>
