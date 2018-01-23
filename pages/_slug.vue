<template>
 <main class="solution-single">
    <jumbotron styleClass="page" />
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-10">
          <h1>{{ solution.title }}</h1>
          <small>By {{ solution.author.firstName }} {{ solution.author.lastName }}</small>
          <div class="byline">
            <em>{{ solution.byLine }}</em>
          </div>

          <h2>The Problem</h2>
          <div class="body" v-html="solution.problemBody"></div>
          <h2>The Solution</h2>
          <div class="body" v-html="solution.solutionBody"></div>
        </div>
        <div class="col-12 col-md-2 sidebar">
          <div class="rate">
            <i class="fa fa-thumbs-up" title="I found this useful"><span>Like</span></i>
            <i class="fa fa-thumbs-down" title="I didn't find this useful"><span>Dislike</span></i>
          </div>
          <div class="profile">
            <img class="profile-picture" :src="solution.author.profilePictureUrl" width="150">          
            <img class="uni-logo" :src="'/uni_logo/' + solution.author.affiliation.thumbnail" :alt="solution.author.affiliation.name" width="50">
          </div>
          <div class="author">
            <router-link :to="'/researchers/' + solution.authorSlug">{{ solution.author.firstName }} {{ solution.author.lastName }}</router-link>
          </div>
        </div>
      </div>
    </div>
 </main>
</template>

<script>
import axios from 'axios'
import Jumbotron from '~/components/Jumbotron.vue'
export default {

  asyncData ({ params, error }) {
    return axios.get(`http://localhost:5000/Solutions/${params.slug}`)
      .then((res) => {
        return { solution: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Not found' })
      })
  },

  head () {
    return {
      title: this.solution.tags.find(x => x.key === 'title').value + ' | Alfrek The Research Market',
      meta: [
        { hid: 'description', name: 'description', content: this.solution.tags.find(x => x.key === 'description').value }
      ]
    }
  },

  components: {
    Jumbotron
  }
}
</script>
