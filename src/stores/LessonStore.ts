import { defineStore, acceptHMRUpdate } from "pinia";
import lessonPull from "../data/basic_whole_wheat_bread.json";

type Lesson = {
  created_Date: string;
  details: string;
  id: string;
  image: string;
  iteration: string;
  previous: string;
  state: string;
  title: string;
  updated_Date: string;
  uuid: string;
  version: string;
};

export const useLessonStore = defineStore("LessonStore", {
  state: () => {
    return {
      active_id: 0,
      title: "",
      lessons: [],
    };
  },
  actions: {
    addLesson(newLesson) {
      const matchLesson = this.lessons.find((iLesson) => {
        return iLesson.id === newLesson.id;
      });
      if (!matchLesson) {
        const _lesson: Lesson = {
          created_Date: newLesson.attributes.created_Date,
          details: newLesson.attributes.details,
          id: newLesson.id,
          image: newLesson.attributes.image,
          iteration: newLesson.attributes.iteration,
          previous: newLesson.attributes.previous,
          state: newLesson.attributes.state,
          title: newLesson.attributes.title,
          updated_Date: newLesson.attributes.updated_Date,
          uuid: newLesson.attributes.uuid,
          version: newLesson.attributes.version,
        };
        this.lessons.push(_lesson);
      }
    },
    importLesson() {
      const newLesson = lessonPull.data.attributes;
      this.addLesson(newLesson);
    },
  },
  getters: {
    lessonList(state) {
      return state.lessons;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLessonStore, import.meta.hot));
}
