import { defineStore, acceptHMRUpdate } from "pinia";
import { useLessonStore } from "./LessonStore";
import unitPull from "../data/basic_whole_wheat_bread.json";

type Unit = {
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

export const useUnitStore = defineStore("UnitStore", {
  state: () => {
    return {
      id: 0,
      title: "",
      lessonStore: useLessonStore(),
      units: [],
      lesson_index: [],
    };
  },
  actions: {
    addUnit(newUnit) {
      const matchUnit = this.units.find((iUnit) => {
        console.log({ iUnit: iUnit });
        return iUnit.id === newUnit.id;
      });
      if (!matchUnit) {
        const _unit: Unit = {
          created_Date: newUnit.attributes.created_Date,
          details: newUnit.attributes.details,
          id: newUnit.id,
          image: newUnit.attributes.image,
          iteration: newUnit.attributes.iteration,
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
  },
  getters: {
    unitList(state) {
      return state.units;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUnitStore, import.meta.hot));
}
