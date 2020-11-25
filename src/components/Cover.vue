<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="mb-2" style="height: 20px; overflow: hidden;">
                <h5 class="card-title">{{movie.title}}</h5>
            </div>
            <div class="mb-3" style="height: 70px; overflow: hidden;">
                <p class="card-text">{{movie.overview}}</p>
            </div>
            <router-link :to="`/detail/${movie.id}`" class="btn btn-info">รายละเอียด</router-link>
            <button class="btn btn-warning ml-1" data-toggle="modal" data-target="#cartModal"
                @click="cartModal">ใส่ตะกร้า</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['movie'],
        methods: {
            cartModal() {
                this.$store.state.movie = this.movie
            }
        },
    }
</script>