<template>
    <div class="container">
        <div class="row my-4">
            <div class="col-12">
                <h3>ตะกร้าสินค้า</h3>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-lg-8">
                <div class="card mb-3" v-for="(c, index) in $store.state.cart" :key="index">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-3">
                                <img :src="`https://image.tmdb.org/t/p/w200${c.movie.poster_path}`" alt=""
                                    class="img-fluid">
                            </div>
                            <div class="col-7">
                                <b>{{index+1}}. {{c.movie.title}}</b>
                                <p></p>
                                <p>ราคา : {{c.price}} บาท</p>
                                <p></p>
                                <p>จำนวน : 1</p>
                            </div>
                            <div class="col-2">
                                <button class="btn btn-danger" @click="deleteBtn(index)">ลบ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card p-3">
                    <div class="card-body">
                        <h4 class="mb-4">จำนวน : {{$store.state.cart.length}} เรื่อง</h4>
                        <div class="d-flex justify-content-between">
                            <span>ราคา</span>
                            <span>{{sum}} บาท</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span v-if="this.$store.state.cart.length > 5">ส่วนลด 20%</span>
                            <span v-else-if="this.$store.state.cart.length > 3">ส่วนลด 10%</span>
                            <span v-else>ส่วนลด 0%</span>
                            <span>{{discount}} บาท</span>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                            <b>รวม</b>
                            <b>{{sum - discount}} บาท</b>
                        </div>
                        <div class="mt-4">
                            <button class="btn btn-success btn-block" data-toggle="modal" data-target="#payModal"
                                @click="openPayModal">ชำระเงิน</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- payModal -->
            <div class="modal fade" id="payModal" data-backdrop="static" data-keyboard="false" tabindex="-1"
                aria-labelledby="payModal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="col-12 text-center">
                                <h5 class="mt-3" id="payModal">ชำระเงิน</h5>
                                <button ref="closePayModal" type="button" class="close" data-dismiss="modal"
                                    aria-label="Close" style="display: none;">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div class="px-4">
                                <p>ธนาคาร : กสิกรไทย</p>
                                <p>เลขที่บัญชี : 000-0-00000-0</p>
                                <p>ชื่อบัญชี : นาย สุเมธ ผงพิลา</p>
                                <b>จำนวน : {{sum - discount}} บาท</b>
                            </div>
                        </div>
                        <div class="modal-footer d-block">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <span>ภายในเวลา</span>
                                    <h4>{{countdown}}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                countdown: 60
            }
        },
        methods: {
            deleteBtn(index) {
                this.$store.dispatch('deleteCart', index)
            },
            openPayModal() {
                this.countdown = 60
                this.startCountdown()
            },
            startCountdown() {
                if (this.countdown > 0) {
                    setTimeout(() => {
                        this.countdown -= 1
                        this.startCountdown()
                    }, 1000);
                } else {
                    this.$refs.closePayModal.click()
                }
            }
        },
        computed: {
            sum() {
                const sum = this.$store.state.cart.reduce((a, c) => a + parseInt(c.price), 0)
                return sum
            },
            discount() {
                const cart = this.$store.state.cart
                if (cart.length > 5) {
                    return (this.sum * 20) / 100
                } else if (cart.length > 3) {
                    return (this.sum * 10) / 100
                } else {
                    return 0
                }
            }
        },
    }
</script>