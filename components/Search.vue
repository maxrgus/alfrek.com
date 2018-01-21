<template>
  <div class="search">
    <v-autocomplete 
      :items="items" 
      :get-label="getLabel" 
      :component-item="template"
      :input-attrs="{ 'placeholder': 'Search' }">
    </v-autocomplete>
    <i class="fa fa-search"></i>    
  </div>
</template>

<script>
  import vAutocomplete from 'v-autocomplete'
  import SolutionTemplate from './search/SolutionTemplate.vue'
  export default {
    data () {
      return {
        item: {},
        items: [
          {
            title: 'ERP Scorecard',
            author: 'Johan Magnusson'
          },
          {
            title: 'Another Solution',
            author: 'Johan Magnusson'
          }
        ],
        template: SolutionTemplate
      }
    },
    methods: {
      getLabel (item) {
        return item.title
      }
    },
    components: {
      vAutocomplete
    }
  }
</script>