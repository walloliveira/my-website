import { reactive } from "vue";

const store = reactive({
  activeTab: "",
});

const handleIntersect = (isIntersecting: boolean, id: string) => {
  if (isIntersecting) {
    store.activeTab = id;
  }
};

export default {
  store,
  handleIntersect,
};
