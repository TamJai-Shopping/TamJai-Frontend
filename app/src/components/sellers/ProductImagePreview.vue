<template>
    <div>
      <div
        class=""
        :style="{ 'background-image': `url(${previewImage})` }"
        @click="selectImage">
      </div>
   
      <input
        ref="fileInput"
        type="file"
        @input="pickFile">
    </div>
  </template>
   
  <script>
  export default {
    data() {
        return {
          previewImage: null
        };
      },
    methods: {
        selectImage () {
            this.$refs.fileInput.click()
        },
        pickFile () {
          let input = this.$refs.fileInput
          let file = input.files
          if (file && file[0]) {
            let reader = new FileReader
            reader.onload = e => {
              this.previewImage = e.target.result
            }
            reader.readAsDataURL(file[0])
            this.$emit('input', file[0])
          }
        }
    }
  }
  </script>