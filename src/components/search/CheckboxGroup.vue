<template>
  <p>{{ name }}</p>
  <div class="filter-container">
    <CheckboxButton
      v-for="attribute in filters"
      :key="attribute"
      :attributeName="attribute"
      @selected-property="updateProperty"
      @="$emit('filter-change', selectedFilters)"
    ></CheckboxButton>
  </div>
</template>

<script>
import CheckboxButton from "@/components/search/CheckboxButton";
export default {
  name: "CheckboxGroup",
  components: { CheckboxButton },
  data() {
    return {
      selectedFilters: [],
    };
  },
  props: {
    name: String,
    filters: [],
  },
  methods: {
    updateProperty(name) {
      const indexOfName = this.selectedFilters.indexOf(name);
      indexOfName === -1
        ? this.selectedFilters.push(name)
        : this.selectedFilters.splice(indexOfName, 1);
    },
  },
};
</script>

<style scoped>
p {
  font-weight: bolder;
  text-align: left;
}
.filter-container {
  display: grid;
  border: 2px solid var(--mid-brigth);
  border-radius: 20px;
  padding: 10px;
  margin-top: -10px;
}
</style>
