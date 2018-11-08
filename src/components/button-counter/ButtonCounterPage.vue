<template>
  <div>
    <button-counter
        :incrementBy=2
        @countUpdated="onChildButtonCountUpdated">
    </button-counter>
    <p>capturing child click event via emit.... {{ updatedValue }}</p>
    <hr />
    
    <p>trying with redux</p>
    <button-counter-redux></button-counter-redux>

  </div>
</template>

<script>
import ButtonCounter from '@/components/button-counter/ButtonCounter'
import ButtonCounterRedux from '@/components/button-counter/ButtonCounterRedux'

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
    ButtonCounter, ButtonCounterRedux
  }
}
</script>
