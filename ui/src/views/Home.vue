<template>
  <div class="home">
    <Background />
    <HomeGrid />
  </div>
</template>

<script>
import Background from '@/components/Background.vue'
import HomeGrid from '@/components/HomeGrid.vue'

export default {
  name: 'home',
  components: {
    Background,
    HomeGrid
  }
}
</script>
