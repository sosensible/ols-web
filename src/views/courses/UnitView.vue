<script setup lang="ts">
import { useCourseStore } from "@/stores/CourseStore";
import { useUnitStore } from "@/stores/UnitStore";
import { storeToRefs } from "pinia";

const props = defineProps({ course_id: String, unit_id: String });
const courseStore = useCourseStore();
courseStore.setActiveCourse(props.course_id);
const unitStore = useUnitStore();
unitStore.setActiveUnit(props.unit_id);

const { activeCourse } = storeToRefs(courseStore);
const { activeUnit, lessons } = storeToRefs(unitStore);
</script>

<template>
  <RouterLink :to="{name: 'course', params: {id: course_id}}">(Course Home)</RouterLink>
  <h1>Course: {{ activeCourse.title }}</h1>
  <h2>Unit: {{ activeUnit.title }}</h2>
  <p>{{ activeUnit.content }}</p>
  <h3>Lessons</h3>
  <ul>
    <li v-for="lesson in lessons" key="id">
      <RouterLink :to="{name: 'course_unit', params: {id: lesson.id}}">{{ lesson.title }}</RouterLink>
    </li>
  </ul>
</template>
