<template>
  <div id="app">
    <Navbar></Navbar>

    <router-view />

    <!-- Modal -->
    <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{$store.state.movie.title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="price">ใส่ราคา</label>
              <input class="form-control" type="number" v-model="$store.state.price" min="0" required>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="addCart" data-dismiss="modal">เพิ่มลงตะกร้า</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    components: {
      Navbar
    },
    data() {
      return {
        time: 5
      }
    },
    mounted() {
      this.$store.dispatch('fetchCart')
      this.timeCount()
    },
    methods: {
      addCart() {
        this.$store.dispatch('addCart').then(res => {
          if (res) {
            this.$swal(
              'เพิ่มสินค้าลงตะกร้าสำเร็จ',
              '',
              'success'
            );
          } else {
            this.$swal(
              'เพิ่มสินค้าลงตะกร้าไม่สำเร็จ',
              '',
              'error'
            );
          }
        })
      },
      timeCount() {
        if (this.time > 0) {
          setTimeout(() => {
            this.time -= 1
            this.timeCount()
          }, 1000);
        }
      }
    },
  }
</script>