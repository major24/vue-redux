<template>
  <div class="">
    <button v-on:click="increment">+</button>
    {{ count }}
    <button v-on:click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonCounter',
  props: {
    incrementBy: {
      type: Number,
      required: false,
      default: 1
    }
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment: function (event) {
      // console.log(this.incrementBy)
      this.count = this.count + this.incrementBy
      this.$emit('countUpdated', this.count)
    },

    decrement: function (event) {
      // console.log(this.incrementBy)
      this.count = this.count - this.incrementBy
      this.$emit('countUpdated', this.count)
    }

  }
}
</script>
