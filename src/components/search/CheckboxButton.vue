<template>
  <div>
    <input
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

<style scoped></style>
