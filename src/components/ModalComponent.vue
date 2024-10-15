<template>
  <div class="modal-overlay" v-if="showModal">

    <!-- J'ai ajouté quelques modifications au style du modal -->
    <div class="modal" :style="color">
      <div>
        <slot></slot>

        <div v-if="$slots.header">
          <slot name="header"></slot>
        </div>

        <div v-if="$slots.body">
          <slot name="body"></slot>
        </div>

        <div v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
    color: String,
  },
  methods: {},
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
