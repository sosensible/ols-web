<script setup lang="ts">
import { useCourseStore } from "@/stores/CourseStore";
import { storeToRefs } from "pinia";

const props = defineProps({ id: String });
const courseStore = useCourseStore();
courseStore.active_id = props.id;

const { activeCourse } = storeToRefs(courseStore);
</script>

<template>
  <h1>Course: {{ activeCourse.title }}</h1>
  <p>{{ activeCourse.details }}</p>
</template>
