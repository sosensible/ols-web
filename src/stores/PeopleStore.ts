import { defineStore, acceptHMRUpdate } from "pinia";

type People = {
  fullname: string;
  id: string;
  image: string;
  uuid: string;
};

export const usePeopleStore = defineStore("PeopleStore", {
  state: () => {
    return {
      id: 0,
      uuid: 0,
      fullname: "",
      people: [],
    };
  },
  actions: {
    addPerson(newPerson) {
      const matchPerson = this.people.find((iPerson) => {
        return iPerson.uuid === newPerson.uuid;
      });
      if (!matchPerson) {
        const _Person: People = {
          id: newPerson.id,
          fullname: newPerson.attributes.fullname,
          image: newPerson.attributes.image,
          uuid: newPerson.attributes.uuid,
        };
        this.people.push(_Person);
      }
    },
  },
  getters: {
    peopleList(state) {
      return state.people;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePeopleStore, import.meta.hot));
}
