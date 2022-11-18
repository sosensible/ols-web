<script setup lang="ts">
import { useCourseStore } from "@/stores/CourseStore";
import { useUnitStore } from "@/stores/UnitStore";
import { useLessonStore } from "@/stores/LessonStore";
import { storeToRefs } from "pinia";

const props = defineProps({ course_id: String, unit_id: String, lesson_id: String });
const courseStore = useCourseStore();
courseStore.setActiveCourse(props.course_id);
const unitStore = useUnitStore();
const lessonStore = useLessonStore();
unitStore.setActiveUnit(props.unit_id);

const { activeCourse } = storeToRefs(courseStore);
const { activeUnit } = storeToRefs(unitStore);
const { activeLesson } = storeToRefs(lessonStore);
</script>

<template>
  <RouterLink :to="{name: 'course', params: {id: course_id}}">(Course Home)</RouterLink>
  &gt;
  <RouterLink :to="{name: 'course_unit', params: {course_id: props.course_id, unit_id: props.unit_id}}">(Unit)</RouterLink>
  <h1>Course: {{ activeCourse.title }}</h1>
  <h2>Unit: {{ activeUnit.title }}</h2>
  <h3>Lesson: {{ activeLesson.title }}</h3>
  <p>{{ activeLesson.details }}</p>
  {{activeLesson}}
</template>
