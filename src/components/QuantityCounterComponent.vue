<template>
  <div class="quantity-counter">
    <button
      class="counter-button"
      @click="decreaseQty"
      :disabled="quantity <= detailProd.moq"
    >
      -
    </button>
    <div class="quantity-display">
      <p>QTY: {{ quantity }}</p>
    </div>
    <button class="counter-button" @click="increaseQty">+</button>
  </div>
</template>

<script>
export default {
  props: {
    moq: {
      type: Number,
      required: true,
    },
    detailProd: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: this.detailProd.moq || 1,
    };
  },
  methods: {
    increaseQty() {
      this.quantity++;
    },

  };
  </script>
  
  <style scoped>
  .quantity-counter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 1px solid var(--color-secondary);
    border-radius: 5px;
    padding: 0.5rem 0;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
  
  .counter-button {
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    width: 4rem;
    height: 2rem;
    /* text-align: center; */
    
  }
  
  .counter-button:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
  
  .quantity-display {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }
  
  .quantity-display p {
    margin: 0;
  }

  @media (max-width: 768px) {
    .counter-button {
      justify-content: center;
      
    }
  }
  </style>
  

