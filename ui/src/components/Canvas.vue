<template>
  <canvas id="canvas" ref="canvas" :class="debugCanvas"></canvas>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Canvas',

  data () {
    return {
      debugCanvasMode: false
    }
  },

  mounted () {
    this.createCanvas('canvas', this.activeColor, this.proverbioDislexico)
  },

  watch: {
    proverbioDislexico (prevState, newState) {
      this.createCanvas('canvas', this.activeColor, this.proverbioDislexico)
    },

    activeColor (prevState, newState) {
      this.createCanvas('canvas', this.activeColor, this.proverbioDislexico)
    }
  },

  computed: {
    ...mapGetters({
      proverbioDislexico: 'proverbioDislexico',
      activeColor: 'activeColor'
    }),

    debugCanvas: function () {
      return this.debugCanvasMode && 'debug'
    }
  },

  methods: {
    createCanvas: function (id, color, proverbioDislexico, size = 600) {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      let { part1, part2 } = proverbioDislexico

      canvas.width = size
      canvas.height = size

      ctx.fillStyle = color
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // set key points
      var middleStart = 0.56 * size
      var middleFinal = 0.48 * size

      // Linear Background
      const angle = middleStart - middleFinal
      const myGradient = ctx.createLinearGradient(0, 0, angle, size)
      myGradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
      myGradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)')
      ctx.fillStyle = myGradient
      ctx.fillRect(0, 0, size, size)

      // stripes
      const stripeWidth = 5
      const stripeColor = '#FFFFFF'
      const stripeMoveA = -stripeWidth / 2 - 9

      ctx.beginPath()
      ctx.moveTo(0, middleStart + stripeMoveA)
      ctx.lineTo(size, middleFinal + stripeMoveA)
      ctx.lineWidth = stripeWidth
      ctx.strokeStyle = stripeColor
      ctx.stroke()

      // Logo
      ctx.fillStyle = '#FFFFFF'
      ctx.font = '900 30px "Raleway", sans-serif'
      ctx.fillText('P/D', 30, 50)
      ctx.font = '300 15px "Raleway", sans-serif'
      ctx.fillText('Provérbios Disléxicos', 30, 70)

      // Footer
      ctx.fillText('www.proverbiosdislexicos.com', size - 240, size - 30)

      // Proverbio
      part1 = this.breakSentence(part1)
      part2 = this.breakSentence(part2)

      ctx.font = '900 36px "Raleway", sans-serif'

      this.writeText(ctx, part1, 240, false)
      this.writeText(ctx, part2, 390, true)
    },

    writeText: function (ctx, text, posY, isDown) {
      if (Array.isArray(text)) {
        ctx.fillText(text[0], 80, posY)
        isDown ? posY += 50 : posY -= 50
        ctx.fillText(text[1], 80, posY)
      } else {
        ctx.fillText(text, 80, posY)
      }
    },

    breakSentence: function (sentence) {
      if (sentence.length < 21) return sentence.toUpperCase()

      let middle = Math.floor(sentence.length / 2)
      const before = sentence.lastIndexOf(' ', middle)
      const after = sentence.indexOf(' ', middle + 1)

      if (before === -1 || (after !== -1 && middle - before >= after - middle)) {
        middle = after
      } else {
        middle = before
      }

      const firstHalf = sentence.substr(0, middle).toUpperCase()
      const secondHalf = sentence.substr(middle + 1).toUpperCase()

      return [firstHalf, secondHalf]
    }
  }
}
</script>

<style scoped lang="sass">
@import '~@/styles/main.scss'

#canvas
  position: absolute
  left: -5000px
  top: -5000px

  &.debug
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

</style>
