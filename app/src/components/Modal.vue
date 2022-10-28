<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    close(){
      this.$emit('close');
    },
    showAlert() {
      // Use sweetalert2
      this.$swal.fire(
          'รายงานเสร็จสิ้น',
          'กดปุ่มออกจากรายงาน',
          'success'
      )
    },
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
           role="dialog"
           aria-labelledby="modalTitle"
           aria-describedby="modalDescription"
      >
        <header
            class="modal-header"
            id="modalTitle"
        >
          <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
          >
            x
          </button>
          <slot name="header">
            รายงานสินค้านี้
          </slot>
        </header>
        <section
            class="modal-body"
            id="modalDescription"
        >
          <slot name="body">
            <div class="relative">
              <!-- Dropdown toggle button -->
              <button
                  @click="show = !show"
                  class="flex items-center p-2 text-indigo-100 bg-indigo-600 rounded-md"
              >
                <span class="mr-4">Dropdown Menu</span>
                <svg
                    class="w-5 h-5 text-indigo-100 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                  <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                  />
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div
                  v-show="show"
                  class="
          absolute
          right-0
          py-2
          mt-2
          bg-indigo-500
          rounded-md
          shadow-xl
          w-44
        "
              >
                <router-link
                    to="/"
                    class="
            block
            px-4
            py-2
            text-sm text-indigo-100
            hover:bg-indigo-400 hover:text-indigo-100
          "
                >
                  Dropdown List 1
                </router-link>
                <router-link
                    to="/"
                    class="
            block
            px-4
            py-2
            text-sm text-indigo-100
            hover:bg-indigo-400 hover:text-indigo-100
          "
                >
                  Dropdown List 2
                </router-link>
                <router-link
                    to="/"
                    class="
            block
            px-4
            py-2
            text-sm text-indigo-100
            hover:bg-indigo-400 hover:text-indigo-100
          "
                >
                  Dropdown List 3
                </router-link>
              </div>
            </div>
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            This is the default footer!
          </slot>
          <button
              type="button"
              class="bg-[#1da1f2]"
              @click="showAlert"
          >
            รายงาน
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 90px 50px;
}

.btn-close {
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}
</style>