<template>
 <main class="solution-single">
    <jumbotron styleClass="page" />
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-10">
                <h1>Solutions</h1>
                <solution-list :solutions="researcher.solutions" />
            </div>
            <div class="col-12 col-md-2">
                <sidebar :author="researcher"/>
            </div>
        </div>
    </div>
 </main>
</template>
<script>
import axios from 'axios'
import Jumbotron from '~/components/Jumbotron.vue'
import Sidebar from '~/components/Sidebar.vue'
import SolutionList from '~/components/SolutionList.vue'
export default {

  asyncData ({ params, error }) {
    return axios.get(`http://localhost:5000/researchers/${params.slug}`)
      .then((res) => {
        return { researcher: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Not found' })
      })
  },

  head () {
    return {
      title: this.researcher.firstName + ' ' + this.researcher.lastName + ' | Alfrek The Research Market'
    }
  },

  components: {
    Jumbotron,
    Sidebar,
    SolutionList
  }
}
</script>
