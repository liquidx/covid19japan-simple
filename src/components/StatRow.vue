<template>
  <div class="row">
    <div class="place">{{place}}</div>
    <div class="metric">{{metric}}</div>
  </div>
</template>

<script>
export default {
  name: 'StatRow',
  props: {
    place: String,
    metric: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  font-size: 3em;
  font-weight: bold;
  overflow-x: hidden;

  .place {
    width: 50%;
  }
  .metric {
    width: 50%;
  }
}
</style>
