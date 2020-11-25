<template>
    <div class="container">
        <div class="row my-5" v-if="movie">
            <div class="col-sm-12 col-md-6">
                <img class="img-thumbnail" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="">
            </div>
            <div class="col-sm-12 col-md-6">
                <h2>Title : {{movie.title}}</h2>
                <p></p>
                <p>{{movie.overview}}</p>
                <p></p>
                <p>Release : {{movie.release_date}}</p>
                <p></p>
                <p>Runtime : {{movie.runtime}} Minutes</p>
                <p></p>
                <button class="btn btn-warning ml-1" data-toggle="modal" data-target="#cartModal"
                    @click="cartModal">ใส่ตะกร้า</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                movie: false
            }
        },
        mounted() {
            axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=151f1c9fb18680ccc406b5ea32fd3f24&language=en-US`).then(res => {
                this.movie = res.data
            })
        },
        methods: {
            cartModal() {
                this.$store.state.movie = this.movie
            }
        },
    }
</script>