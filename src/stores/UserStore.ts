import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => {
    return {
      id: 0,
      name: "",
    };
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
