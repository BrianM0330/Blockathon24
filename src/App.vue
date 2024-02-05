<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Article from './components/Article.vue'
import Ecosystem from './components/Ecosystem.vue'
</script>

<template>
  <div id="app">
    <Article />
    <Ecosystem />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

#app {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}
</style>
