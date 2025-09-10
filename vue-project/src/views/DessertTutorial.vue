<template>

    
    <h1 class="page-title">DessertTutorial</h1>

    <div class="tiles-grid">

<Card 
  title="Chocolate Mousse"
  subtitle="Delicious and healthy cake" 
  buttonText="Read"
  to="/DessertTutorial/Cake"
  bg="#f8c5b8"
   :img-src="cake" />
   
    </div>
</template>

<script setup>
import Card from '@/components/Card.vue';
import cake from '@/components/icons/cake.png';




</script>
