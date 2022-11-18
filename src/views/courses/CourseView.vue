<script setup lang="ts">
import { useCourseStore } from "@/stores/CourseStore";
import { useUnitStore } from "@/stores/UnitStore";
import { storeToRefs } from "pinia";

const props = defineProps({ id: String });
const courseStore = useCourseStore();
const unitStore = useUnitStore();
courseStore.setActiveCourse(props.id);

const { activeCourse, instructors } = storeToRefs(courseStore);
const { lessons } = storeToRefs(unitStore);
</script>

<template>
  <h1>Course: {{ activeCourse.title }}</h1>
  <p>{{ activeCourse.details }}</p>
  <ul>
    <li v-for="unit in courseStore.units" key="uuid">
      <RouterLink :to="{name: 'course_unit', params: {course_id: activeCourse.id, unit_id: unit.id }}">{{unit.title}}</RouterLink>
    </li>
  </ul>
  <h3>Instructor(s)</h3>
  <ul>
    <li v-for="instructor in instructors" key="id">
      <RouterLink :to="{name: 'creator', params: {id: instructor.id}}">{{ instructor.fullname }}</RouterLink>
    </li>
  </ul>
</template>
