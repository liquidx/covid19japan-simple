<template>
  <div class="header">
    <div v-on:click="titleDidClick" class="title">{{title}} <img src="disclosure.png" width="20" height="20"></div>
    <div v-on:click="metricDidClick" class="metric">{{metric}} <img src="disclosure.png" width="20" height="20"></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderRow',
  props: {
    title: String,
    metric: String
  },
  methods: {
    titleDidClick() {
      this.$emit('toggleMetric')
    },
    metricDidClick() {
      this.$emit('togglePeriod')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  font-size: 1.5em;
  font-weight: bold;
  color: rgb(128, 128, 128);

  .title {
    width: 60%;
    word-wrap: nowrap;
    cursor: pointer;
  }
  .metric {
    width: 40%;
    cursor: pointer;
    text-align: right;
  }
}
</style>
