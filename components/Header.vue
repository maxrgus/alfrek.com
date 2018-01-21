<template>
  <header>
    <nav class="navigation">
      <router-link to="/" class="navbar-brand">
        alfrek
      </router-link>
      <ul>
        <router-link v-for="item in minimalMenu" v-bind:key="item.url" :to="item.url" tag="li" activeClass="active">
          <a class="nav-link">{{ item.name }}</a>
        </router-link>
      </ul>
      <div class="slideout-opener" @click="isOpen = !isOpen">
        Menu
      </div>
    </nav>
    <div class="slideout" :class="{ isOpen: isOpen }">
      <div class="slideout-close" @click="isOpen = !isOpen">
        <a>&times;</a>
      </div>
      <nav>
        <ul class="slideout-menu">
          <router-link v-for="item in fullMenu" v-bind:key="item.url" tag="li" :to="item.url" class="menu-item" activeClass="active" @click.native="isOpen = !isOpen">
            <a class="nav-link">{{ item.name }}</a>
          </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
  export default {
    data () {
      return {
        isOpen: false
      }
    },

    props: {
      menuItems: {
        type: Array,
        required: true
      }
    },

    computed: {
      minimalMenu () {
        return this.menuItems.slice(0, 3)
      },
      fullMenu () {
        return this.menuItems
      }
    }

  }
</script>
