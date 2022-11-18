import { defineStore, acceptHMRUpdate } from "pinia";
import { useCourseStore } from "./CourseStore";
import { useLessonStore } from "./LessonStore";
import { storeToRefs } from "pinia";
import unitPull from "../data/basic_whole_wheat_bread.json";

type Unit = {
  content: string;
  created_Date: string;
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

export const useUnitStore = defineStore("UnitStore", {
  state: () => {
    return {
      active_id: 0,
      lessonStore: useLessonStore(),
      units: [],
    };
  },
  actions: {
    addUnit(newUnit) {
      const matchUnit = this.units.find((iUnit) => {
        return iUnit.id === newUnit.id;
      });
      if (!matchUnit) {
        const _unit: Unit = {
          content: newUnit.attributes.content,
          created_Date: newUnit.attributes.created_Date,
          id: newUnit.id,
          image: newUnit.attributes.image,
          iteration: newUnit.attributes.iteration,
          lesson_index: newUnit.lesson_index,
          previous: newUnit.attributes.previous,
          state: newUnit.attributes.state,
          title: newUnit.attributes.title,
          updated_Date: newUnit.attributes.updated_Date,
          uuid: newUnit.attributes.uuid,
          version: newUnit.attributes.version,
        };
        this.units.push(_unit);
      }
    },
    importUnit() {
      const newUnit = unitPull.data.attributes;
      this.addUnit(newUnit);
    },
    setActiveUnit(unit_id) {
      const targetUnit = this.units.find((unit) => unit.id === unit_id);
      if( targetUnit ) {
        this.lessonStore.setActiveLesson(targetUnit.lesson_index[0]);
        this.active_id = unit_id;
      }
    }
  },
  getters: {
    unitList(state) {
      return state.units;
    },
    activeUnit(state) {
      return state.units.find((unit) => {
        return unit.id === this.active_id
      });
    },
    lessons(state) {
      if( state.activeUnit ) {
        return state.lessonStore.lessons.filter((lesson) => state.activeUnit.lesson_index.includes(lesson.id));
      } else {
        return [];
      }
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUnitStore, import.meta.hot));
}
