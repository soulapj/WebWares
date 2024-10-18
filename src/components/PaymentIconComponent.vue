<template>
    <div class="payment-icons">
      <img :src="require('@/assets/payment icons/mastercard.1024x793.png')" alt="Mastercard">
      <img :src="require('@/assets/payment icons/visa.1024x314.png')" alt="Visa">
      <img :src="require('@/assets/payment icons/paypal.1024x273.png')" alt="PayPal">
      <img :src="require('@/assets/payment icons/maestro.1024x794.png')" alt="Maestro">
      <img :src="require('@/assets/payment icons/discover.1024x165.png')" alt="Discover">
    </div>
  </template>
  
  <style scoped>
  .payment-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  img {
    width: 2.5rem;
    object-fit: contain;
    background-color: var(--color-background);
    padding: 0.5rem;
    border-radius: 2px;
    border: 0;
  }
  </style>
  