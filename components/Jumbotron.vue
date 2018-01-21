<template>
  <div class="jumbotron jumbotron-fluid"
       :class="styleClass" >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      styleClass: {
        type: String,
        required: true
      }
    }
  }
</script>
