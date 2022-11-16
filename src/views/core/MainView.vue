<script setup lang="ts">
import { useCourseStore } from "@/stores/CourseStore";

const courseStore = useCourseStore();
</script>

<template>
  <h3>Postively Disrupting Online Education</h3>
  <img alt="Vue logo" src="@/assets/OLS-Logo-200.png" />
  <h1>OLS</h1>
  <h3>Open Learning Server</h3>
  <p>{{ courseStore.id }}</p>
</template>

<style>
img {
  border-color: aliceblue;
  border-width: 3px;
}
h1 {
  color: #286291;
}
h3 {
  color: #54afe6;
}
</style>
