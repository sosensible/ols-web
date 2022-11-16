import { defineStore, acceptHMRUpdate } from "pinia";
import { usePeopleStore } from "./PeopleStore";
import { useUnitStore } from "./UnitStore";
import coursePull from "../data/basic_whole_wheat_bread.json";

type Course = {
  uuid: string;
  title: string;
  details: string;
  image: string;
  created_Date: string;
  updated_Date: string;
  version: string;
  iteration: string;
  previous: string;
  state: string;
  other?: string;
};

export const useCourseStore = defineStore("CourseStore", {
  state: () => {
    return {
      id: 0,
      title: "",
      courses: [],
      instructor_index: [],
      unit_index: [],
    };
  },
  actions: {
    addCourse(newCourse) {
      let rel_units = [];
      let rel_instructors = [];
      const unitStore = useUnitStore();
      const peopleStore = usePeopleStore();
      const matchCourse = this.courses.find((iCourse) => {
        return iCourse.id === newCourse.id;
      });
      if (!matchCourse) {
        const _course: Course = {
          uuid: newCourse.data.attributes.uuid,
          title: newCourse.data.attributes.title,
          details: newCourse.data.attributes.details,
          image: newCourse.data.attributes.image,
          created_Date: newCourse.data.attributes.created_Date,
          updated_Date: newCourse.data.attributes.updated_Date,
          version: newCourse.data.attributes.version,
          iteration: newCourse.data.attributes.iteration,
          previous: newCourse.data.attributes.previous,
          state: newCourse.data.attributes.state,
        };
        rel_units = newCourse.data.relationships.data.filter((data) => {
          return data.type === "ols-unit";
        });
        rel_instructors = newCourse.data.relationships.data.filter((data) => {
          return data.type === "people";
        });
        this.courses.push(_course);
        rel_units.forEach((u_item, u_index, u_source) => {
          const _unit = newCourse.included.find((incl) => {
            return incl.type === "ols-unit" && incl.id === u_item.id;
          });
          if (_unit) {
            unitStore.addUnit(_unit, newCourse.inc);
            this.unit_index.push(_unit.id);
            _unit.relationships.data.forEach((l_item, l_index, l_source) => {
              const _lesson = newCourse.included.find((incl) => {
                return incl.type === "ols-lesson" && incl.id === l_item.id;
              });
              if (_lesson) {
                // store lesson
                console.log({ unit: _unit, lesson: _lesson });
                unitStore.lessonStore.addLesson(_lesson);
                unitStore.lesson_index.push(_lesson.id);
              }
            });
          }
        });
        rel_instructors.forEach((i_item, i_index, i_source) => {
          const _instructor = newCourse.included.find((incl) => {
            return incl.type === "people" && incl.id === i_item.id;
            i_source;
          });
          if (_instructor) {
            peopleStore.addPerson(_instructor);
            this.instructor_index.push(_instructor.id);
          }
        });
      }
    },
    importCourse() {
      const newCourse = coursePull;
      this.addCourse(newCourse);
    },
  },
  getters: {
    courseList(state) {
      return state.courses;
    },
    courseUnits(state) {
      // return state.units.
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCourseStore, import.meta.hot));
}
