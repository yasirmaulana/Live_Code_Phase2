<template>
    <v-carousel class="elevation-12">
      <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
</template>

<script>

  export default {
    data () {
      return {
        items: [
          {
            src: 'https://storage.googleapis.com/happygram/knight-gundam2.jpg'
          },
          {
            src: 'https://storage.googleapis.com/happygram/animals-project.jpg'
          },
          {
            src: 'https://storage.googleapis.com/happygram/knight-gundam.jpg'
          }
        ]
      }
    },
    components: {
    }
  }
</script>

<style scoped>
  #inspire {
    height: 100vh;
  }
</style>
