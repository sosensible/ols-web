<script setup lang="ts">
import { ref } from "vue";
import YTPlayer from "@/components/ols/olsYTPlayer.vue";
import VimeoPlayer from "@/components/ols/olsVimeoPlayer.vue";

const resource = ref({
  source: "ytube",
  id: "iqZlPtl_b-I",
});
resource.value = { source: "vimeo", id: "19231868" };
</script>

<template>
  <main>
    <h1>About Page</h1>
    <YTPlayer :videoid="resource.id" v-if="resource.source === 'ytube'" />
    <hr />
    <VimeoPlayer videoid="19231868" v-if="resource.source === 'vimeo'" />
  </main>
</template>
