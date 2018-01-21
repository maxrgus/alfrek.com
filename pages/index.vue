<template>
  <main>
    <jumbotron styleClass="home">
      <div class="value-prop">
        <div class="headlines">
          <h1>Cutting edge research</h1>
          <h1>Packaged for real challenges</h1>
        </div>
        <search />        
      </div>
    </jumbotron>
  </main>
</template>

<script>
  import Jumbotron from '@/components/Jumbotron.vue'
  import Search from '@/components/Search.vue'
  export default {
    components: {
      Jumbotron,
      Search
    }
  }
</script>

<style scoped>

</style>