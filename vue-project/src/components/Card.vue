<template>
  <router-link class="card" :to="to" :style="{ backgroundColor: bg || '#ffffff' }">
    <div class="card-content">
      <div class="card-text">
        <h2 class="card-title">{{ title }}</h2>
        <p class="card-subtitle">{{ subtitle }}</p>
        <button class="button" type="button">{{ buttonText || 'read' }}</button>
      </div>

      <div class="image-container">
        <img :alt="title || 'Card image'" :src="imgSrc" />
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps([
  'title', 
  'subtitle', 
  'buttonText', 
  'to', 
  'bg',  
  'imgSrc'
])
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  display: block;
  width: 300px;
  height: 150px;
}

.card-content {
  display: block;
  padding: 20px;
  position: relative;
}

.card-text {
  margin-right: 0;
  padding-right: 80px;
}

.card-title {
  margin: 0 0 8px 0;
  font-size: 1.2em;
}

.card-subtitle {
  margin: 0 0 15px 0;
  color: #666;
  font-size: 0.9em;
}

.button {
  background: #87CEEB;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
}

.image-container {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container img {
  max-width: 40px;
  max-height: 40px;
}
</style>