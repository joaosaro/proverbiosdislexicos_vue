<template>
  <div class="home">
    <Background />
    <HomeGrid />
    <Canvas />
  </div>
</template>

<script>
import Background from '@/components/Background.vue'
import HomeGrid from '@/components/HomeGrid.vue'
import Canvas from '@/components/Canvas.vue'

export default {
  name: 'home',
  components: {
    Background,
    HomeGrid,
    Canvas
  }
}
</script>
