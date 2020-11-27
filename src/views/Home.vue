<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-6 col-lg-4 col-xl-3 p-2" v-for="(movie, index) in $store.state.movies" :key="index">
        <Cover :movie="movie"></Cover>
      </div>
    </div>
  </div>
</template>

<script>
  import Cover from '@/components/Cover.vue'
  export default {
    components: {
      Cover
    },
    mounted() {
      this.$store.dispatch('fetchMovies')
    },
  }
</script>