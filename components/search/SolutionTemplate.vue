<template>
  <div>
    <span>{{ item.title }}</span>
    <span>{{ item.author.name }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>