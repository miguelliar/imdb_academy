<template>
  <div class="checkbox-button-container">
    <input
      class="checkbox-button"
      type="checkbox"
      :id="attributeName"
      :name="attributeName"
      @change="$emit('selected-property', attributeName)"
    />
    <label :for="attributeName">{{ attributeName }}</label>
  </div>
</template>

<script>
export default {
  name: "CheckboxButton",
  props: {
    attributeName: String,
  },
};
</script>

<style scoped>
label {
  height: fit-content;
  padding: 5px;
  float: left;
  border-radius: 10px;
  background-color: var(--mid-dark);
  color: var(--dark-color);
}

.checkbox-button-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  transition: 0.5s ease;
}

.checkbox-button {
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  opacity: 0;
  cursor: pointer;
}

input[type="checkbox"]:checked ~ label {
  background-color: var(--bright-color);
}
</style>
