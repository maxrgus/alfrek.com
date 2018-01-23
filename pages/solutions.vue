<template>
  <main>
    <jumbotron styleClass="page" />
    <div class="container">
      <div class="row">
        <header class="col-12 browse-header">
          <input type="text"  placeholder="Search...">
        </header>
        <aside class="col-12 browse-filter">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <multiselect
                :value="sortBy" 
                :options="sortOptions"
                :searchable="false"
                label="name"
                placeholder="Sort by"
                :selectLabel="''"
              />
            </div>
          </div>
        </aside>
        <div class="col-12">
          <div class="row solutions justify-content-between">
            <article 
              class="col-12 col-md-6 solution"
              v-for="solution in solutions"
              :key="solution.id"
            >
                <div class="row solution-inner-wrap">
                  <div class="col-8 solution-content">
                  <header class="solution-header">
                    <router-link :to="'/' + solution.slug" tag="a">{{ solution.title }}</router-link>
                    <small>by {{ solution.author.firstName }}  {{ solution.author.lastName }}</small>
                  </header>

                  <div class="solution-body">
                    <p>{{ solution.byLine }}</p>
                  </div>

                  <footer class="solution-footer">
                    <img :src="'/uni_logo/' + solution.author.affiliation.thumbnail" :alt="solution.author.affiliation.name" width="50">                    
                    <div class="roles">
                      <span 
                        class="role"
                        v-for="role in solution.roles"
                        :key="role.id"
                      >
                        {{ role.name }}
                      </span>
                    </div>
                  </footer>
                </div>
                <div 
                  class="col-4"
                  style="background-image: url(/header_home.jpg); background-position: center; background-size: cover;">

                </div>
                </div>

            </article>
          </div>
        </div>
      </div>
      
    </div>
  </main>
</template>

<script>
  import axios from 'axios'
  import Jumbotron from '@/components/Jumbotron.vue'
  import Multiselect from 'vue-multiselect'
  import 'vue-multiselect/dist/vue-multiselect.min.css'
  export default {
    asyncData () {
      return axios.get('http://localhost:5000/solutions')
        .then((res) => {
          return { solutions: res.data }
        })
    },
    data () {
      return {
        sortBy: { name: 'Date added' },
        sortOptions: [
          {
            name: 'Date added'
          },
          {
            name: 'Rating'
          }
        ]
      }
    },
    head () {
      return {
        title: 'Browse Solutions | Alfrek The Research Market'
      }
    },
    components: {
      Jumbotron,
      Multiselect
    }
  }
</script>