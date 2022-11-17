<script setup lang="ts">
import { useCourseStore } from "@/stores/CourseStore";
import { storeToRefs } from "pinia";

const courseStore = useCourseStore();
const { creators } = storeToRefs(courseStore);

function addCourse() {
  courseStore.importCourse();
}
</script>

<template>
  <h1>Creator List</h1>
  <ul>
    <li v-for="creator in courseStore.creators" key="uuid">
      {{ creator.fullname }}
    </li>
  </ul>
</template>
