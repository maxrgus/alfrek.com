<template>
  <aside class="sidebar">
    <div class="profile">
        <img class="profile-picture" :src="author.profilePictureUrl" width="150">          
        <img class="uni-logo" :src="'/uni_logo/' + author.affiliation.thumbnail" :alt="author.affiliation.name" width="50">
    </div>
    <div class="author">
        <em>{{ author.firstName }} {{ author.lastName }}</em>
    </div>
  </aside>
</template>
<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>
