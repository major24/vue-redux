<template>
  <div class="">
    <button v-on:click="increment">++</button>
    {{ count }}
    <button v-on:click="decrement">--</button>
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
  computed: {
    increment2() {
        console.log('aaa')
        //return this.$store.state.users.filter(user => {
          //  return !user.registered
        //})
    }
  },
  methods: {
    increment: function (event) {
      console.log(this.incrementBy)
      console.log(this.$store)
      //this.$store.dispatch({ type: 'INCREMENT' })
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
