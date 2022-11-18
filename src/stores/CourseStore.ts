import { defineStore, acceptHMRUpdate } from "pinia";
import { usePeopleStore } from "./PeopleStore";
import { useUnitStore } from "./UnitStore";
import coursePull from "../data/basic_whole_wheat_bread.json";

type Course = {
  id: string;
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
  instructor_index: string[];
  unit_index: string[];
  other?: string;
};

export const useCourseStore = defineStore("CourseStore", {
  state: () => {
    return {
      active_id: 0,
      courses: [],
      creator_index: [],
      unitStore: useUnitStore(),
    };
  },
  actions: {
    addCourse(newCourses) {
      let rel_units = [];
      let rel_instructors = [];
      const unitStore = useUnitStore();
      const peopleStore = usePeopleStore();

      newCourses.data.forEach((newCourse) => {
        const matchCourse = this.courses.find((iCourse) => {
          return iCourse.id === newCourse.id;
        });
        if (!matchCourse) {
          const _course: Course = {
            id: newCourse.id,
            uuid: newCourse.attributes.uuid,
            title: newCourse.attributes.title,
            details: newCourse.attributes.details,
            image: newCourse.attributes.image,
            created_Date: newCourse.attributes.created_Date,
            updated_Date: newCourse.attributes.updated_Date,
            version: newCourse.attributes.version,
            iteration: newCourse.attributes.iteration,
            previous: newCourse.attributes.previous,
            state: newCourse.attributes.state,
            instructor_index: [],
            unit_index: [],
          };
          rel_units = newCourse.relationships.data.filter((data) => {
            return data.type === "ols-unit";
          });
          rel_instructors = newCourse.relationships.data.filter((data) => {
            return data.type === "people";
          });
          rel_units.forEach((u_item) => {
            const _unit = newCourses.included.find((incl) => {
              return incl.type === "ols-unit" && incl.id === u_item.id;
            });
            _unit.lesson_index = [];
            if (_unit) {
              _course.unit_index.push(_unit.id);
              _unit.relationships.data.forEach((l_item) => {
                const _lesson = newCourses.included.find((incl) => {
                  return incl.type === "ols-lesson" && incl.id === l_item.id;
                });
                if (_lesson) {
                  _unit.lesson_index.push(_lesson.id);
                  unitStore.lessonStore.addLesson(_lesson);
                }
              });
              unitStore.addUnit(_unit, newCourse.include);
            }
          });
          rel_instructors.forEach((i_item) => {
            const _instructor = newCourses.included.find((incl) => {
              return incl.type === "people" && incl.id === i_item.id;
              i_source;
            });
            if (_instructor) {
              _course.instructor_index.push(_instructor.id);
              if (!this.creator_index.includes(_instructor.id)) {
                peopleStore.addPerson(_instructor);
                this.creator_index.push(_instructor.id);
              }
            }
          });
          this.courses.push(_course);
        }
      });
      console.log({load:this.active_id});
      if( this.active_id === 0 ) {
        this.setActiveCourse(this.courses[0].id);
      } else {
        console.log('course already set')
      }
    },
    importCourse() {
      const newCourses = coursePull;
      this.addCourse(newCourses);
    },
    setActiveCourse(course_id) {
      const unitStore = useUnitStore();
      const targetCourse = this.courses.find((course) => course.id === course_id);
      if(targetCourse){
        unitStore.setActiveUnit(targetCourse.unit_index[0]);
        this.active_id = course_id;
      }
    },
  },
  getters: {
    courseList(state) {
      return state.courses;
    },
    activeCourse(state) {
      return state.courses.find((course) => {
        return course.id === state.active_id;
      });
    },
    units(state) {
      const unitStore = useUnitStore();
      const matchedUnits = unitStore.units.filter((unit) => {
        return state.activeCourse.unit_index.includes(unit.id);
      });
      return matchedUnits;
    },
    instructors(state) {
      const peopleStore = usePeopleStore();
      const matchedInstructors = peopleStore.people.filter((person) => {
        return state.activeCourse.instructor_index.includes(person.id);
      });
      return matchedInstructors;
    },
    creators(state) {
      const peopleStore = usePeopleStore();
      return peopleStore.people.filter((person) =>
        state.creator_index.includes(person.id)
      );
    },
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCourseStore, import.meta.hot));
}
