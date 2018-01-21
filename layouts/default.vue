<template>
  <div>
    <v-header :menuItems="menu" />
    <nuxt/>
  </div>
</template>

<script>
import vHeader from '~/components/Header.vue'
export default {
  data () {
    return {
      menu: [
        {
          name: 'browse',
          url: '/browse'
        },
        {
          name: 'about',
          url: '/about'
        },
        {
          name: 'log in',
          url: '/login'
        }
      ]
    }
  },
  components: {
    vHeader
  }
}
</script>
