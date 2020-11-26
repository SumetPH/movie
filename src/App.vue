<template>
  <div id="app">
    <Navbar></Navbar>

    <router-view />

    <!-- cartModal -->
    <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="cartModal">{{$store.state.movie.title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="addCart">
            <div class="modal-body">
              <div class="form-group">
                <label for="price">ใส่ราคา</label>
                <input class="form-control" type="number" v-model="$store.state.price" min="0" required>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">เพิ่มลงตะกร้า</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" ref="closeModal">ยกเลิก</button>
            </div>
          </form>
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
    mounted() {
      this.$store.dispatch('fetchCart')
    },
    methods: {
      addCart() {
        this.$refs.closeModal.click()
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
    },
  }
</script>