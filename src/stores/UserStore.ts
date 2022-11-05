import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => {
    return {
      id: 0,
      name: "visitor",
    };
  },
});
