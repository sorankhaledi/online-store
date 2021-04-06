<template>
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="400000"
      controls
      indicators
    >
      <b-carousel-slide v-for="(img, index) in images" :key="index">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="img.src"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      images: [
        {
          src:
            "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHNob3BwaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          src:
            "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNob3BwaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          src:
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
    max-height: 300px;
    min-height: 300px;
    max-width: 480px;
    border: 1px solid rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    .carousel-inner {
        .carousel-item {
            img {
                max-height: 300px;
                min-height: 300px;
                max-width: 480px;
                border-radius: 10px;
            }
        }
    }
}
</style>