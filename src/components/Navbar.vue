<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Movie</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">ตะกร้าสินค้า {{$store.state.cart.length}} ชิ้น</a>
                </li>
            </ul>
            <form @submit.prevent="search" class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="ชื่อหนัง" aria-label="Search"
                    v-model="movie" required>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">ค้นหา</button>
            </form>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                movie: ''
            }
        },
        methods: {
            search() {
                window.location.href = `/search?query=${this.movie}`
            }
        },
    }
</script>