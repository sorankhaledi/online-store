<template>
  <div class="main">
    <div class="section1">
      <div class="buttons">
        <div class="my-btn">Men</div>
        <div class="my-btn">Women</div>
      </div>
      <div class="links">
        <div class="my-link link1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
            />
          </svg>
        </div>
        <div class="my-link link2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            class="bi bi-cart2"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
            />
          </svg>
        </div>
      </div>
    </div>
    <b-row class="section2" no-gutters>
      <b-col class="p-1" sm="12" md="6" lg="6">
        <app-carousel></app-carousel>
      </b-col>
      <b-col class="p-1" sm="12" md="6" lg="6">
        <b-card no-body class="overflow-hidden" style="max-width: 540px">
          <b-row no-gutters>
            <b-col md="6" class="p-3"> 
              <b-card-img
                src="https://picsum.photos/400/400/?image=20"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in
                  to additional content. This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <div class="section3"></div>
  </div>
</template>

<script>
import CarouselVue from "./carousel/Carousel.vue";
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  components: {
    appCarousel: CarouselVue,
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
              if (header.scrollHeight < 100) {
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
    background-attachment: fixed;
    padding: 20px;
    padding-top: 120px;

    .buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      color: black;
      font-family: "Courier New", Courier, monospace;
      font-size: 20px;
      width: 370px;
      margin: 300px auto;
      padding: 0;

      .my-btn {
        padding: 20px 45px;
        margin: 0 20px;
        background-color: #f4f4f4;
        border-radius: none;
        cursor: pointer;
        width: 145px;
        max-width: 145px;
        min-width: 145px;

        &:hover,
        &:focus,
        &:active {
          background-color: #c4c2c2;
          color: #333;
        }
      }
    }

    .links {
      height: 169px;
      width: 100%;
      position: relative;

      .my-link {
        position: absolute;
        top: 20px;
        bottom: 20px;
        width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #f4f4f4;
        border-radius: 10px;
        transition: all 0.8s cubic-bezier(0, 0.5, 0, 1);

        &:hover,
        &:focus,
        &:active  {
          background-color: rgb(88, 86, 86);
          box-shadow: 0px 1px 5px rgba(255, 255, 255, 0.8);
          border-radius: 5em;
        }

        &.link1 {
          left: 20px;
        }

        &.link2 {
          right: 20px;
        }

        svg {
          fill: #f4f4f4;
        }
      }
    }
  }

  .section2 {
    background-color: rgb(205, 223, 205);
    .col-sm-12 {
      margin: 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      app-carousel {
        width: 100%;
        max-height: 300px;
      }

      .card {
        max-width: 435.433px;
        min-height: 300px;
        border-radius: 10px;

        .row {
          max-width: 435.433px;
          min-height: 300px;
          .col-md-6 {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }

  .section3 {
    height: 100vh;
    width: 100%;
    background-color: gold;
  }
}
</style>