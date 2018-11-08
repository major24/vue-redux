<template>
  <div>
    <button-counter
        :incrementBy=2
        @countUpdated="onChildButtonCountUpdated">
    </button-counter>
    <br />
    <p>capturing child click event via emit...</p>
    <p>Curr Value: {{ updatedValue }}</p>
  </div>
</template>

<script>
import ButtonCounter from '@/components/button-counter/ButtonCounter'

export default {
  methods: {
    onChildButtonCountUpdated (value) {
      // console.log('child button clicked. ' + value)
      this.updatedValue = value
    }
  },
  data () {
    return {
      updatedValue: 0
    }
  },
  components: {
    ButtonCounter
  }
}
</script>
