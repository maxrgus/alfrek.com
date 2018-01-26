<template>
    <div class="row solutions justify-content-between">
        <article 
            class="col-12 col-md-4 solution"
            v-for="solution in solutions"
            :key="solution.id"
        >
            <div class="row solution-inner-wrap">
                <div 
                    class="col-12 solution-thumbnail"
                    style="background-image: url(/header_home.jpg); background-position: center; background-size: cover;">

                </div>
                <div class="col-12 solution-content">
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
            </div>

        </article>
    </div>  
</template>
<script>
export default {
  props: {
    solutions: {
      type: Array,
      required: true
    }
  }
}
</script>
