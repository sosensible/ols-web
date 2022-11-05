<script setup lang="ts">
import { defineComponent } from "vue";
import Layout from "./components/DefaultLayout.vue";
</script>

<template>
  <Layout>
    <RouterView></RouterView>
  </Layout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
