import { defineStore } from "pinia";

export const useSideBarStore = defineStore({
  id: "sideBar",
  state: () => ({
    isOpen: false,
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});
