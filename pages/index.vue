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
    <div class="container">
      <h2>Latest</h2>
      <solution-list :solutions="solutions" />
    </div>
  </main>
</template>

<script>
  import axios from 'axios'
  import Jumbotron from '@/components/Jumbotron.vue'
  import Search from '@/components/Search.vue'
  import SolutionList from '@/components/SolutionList.vue'
  export default {
    asyncData () {
      return axios.get('http://localhost:5000/solutions/latest')
        .then((res) => {
          return { solutions: res.data }
        })
    },
    components: {
      Jumbotron,
      Search,
      SolutionList
    }
  }
</script>
