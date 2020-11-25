<template>
    <div class="container">
        <h3 class="mt-3">Search: {{$route.query.query}}</h3>
        <div class="row mt-3">
            <div class="col-12 col-md-3 p-2" v-for="(movie, index) in $store.state.movies" :key="index">
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
            this.$store.dispatch('searchMovies', this.$route.query.query)
        },
    }
</script>