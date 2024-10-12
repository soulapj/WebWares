<template>
  <div>
    <router-link v-if="to" :to="to" class="button" :style="{ backgroundColor: color, color: textColor }">
      {{ label }}
    </router-link>
    
    <button v-else class="button" :style="{ backgroundColor: color, color: textColor }">
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'var(--color-primary)', // Default if no color is provided
    },
    textColor: {
      type: String,
      default: 'var(--color-background)', 
    },
    to: {
      type: String, // This is the path to navigate to, if provided
      default: null,
    },
  },
};
</script>

<style scoped>
.button {
  border: none;
  padding: 1rem 2rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.button:hover {
  opacity: 0.9;
}
</style>
