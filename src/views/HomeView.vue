<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <BingoBingo></BingoBingo>
    
    
  </div>
</template>

<script>
// @ is an alias to /src

import BingoBingo from '@/components/BingoBingo.vue'

export default {
  name: 'HomeView',
  components: {
    BingoBingo,
  }
}
</script>
