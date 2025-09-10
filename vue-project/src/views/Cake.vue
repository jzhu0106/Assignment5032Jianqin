<template>
  <div class="container mt-4">
    <BackButton />
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h4>{{ title }}</h4>
        <button v-if="!isEditing" @click="startEdit">Edit</button>
        <button v-else @click="saveEdit">Save</button>
      </div>
      <div class="card-body">
        <div v-if="!isEditing">
          <p>{{ description }}</p>
          <h5>Ingredients:</h5>
          <ul>
            <li v-for="ingredient in ingredients" :key="ingredient">
              {{ ingredient }}
            </li>
          </ul>
          <h5>Instructions:</h5>
          <ol>
            <li v-for="instruction in instructions" :key="instruction">
              {{ instruction }}
            </li>
          </ol>
          <div class="alert alert-info mt-3">
            {{ tip }}
          </div>
        </div>
        <div v-else>
          <div class="mb-3">
            <label class="form-label">Description:</label>
            <textarea v-model="editDescription" class="form-control" rows="2"></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">Ingredients:</label>
            <textarea v-model="editIngredientsText" class="form-control" rows="5"></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">Instructions:</label>
            <textarea v-model="editInstructionsText" class="form-control" rows="5"></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">Tip:</label>
            <input v-model="editTip" class="form-control" type="text">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackButton from '@/components/BackButton.vue';
import { ref } from 'vue';

const isEditing = ref(false);
const title = ref('Chocolate Cake Tutorial');
const description = ref('Easy-to-learn chocolate cake, perfect for baking beginners.');
const ingredients = ref([
  'All-purpose flour 200g',
  'Eggs 3 pieces',
  'Milk 150ml',
  'Cocoa powder 30g',
  'Sugar 100g'
]);
const instructions = ref([
  'Beat the eggs and add milk and sugar',
  'Sift in flour and cocoa powder',
  'Mix until smooth batter forms',
  'Pour into mold, bake at 180°C for 30 minutes',
  'Cool completely before serving'
]);
const tip = ref('Tip: Mix gently to avoid overmixing the batter!');

const editDescription = ref('');
const editIngredientsText = ref('');
const editInstructionsText = ref('');
const editTip = ref('');

function startEdit() {
  isEditing.value = true;
  editDescription.value = description.value;
  editIngredientsText.value = ingredients.value.join('\n');
  editInstructionsText.value = instructions.value.join('\n');
  editTip.value = tip.value;
}

function saveEdit() {
  description.value = editDescription.value;
  ingredients.value = editIngredientsText.value.split('\n');
  instructions.value = editInstructionsText.value.split('\n');
  tip.value = editTip.value;
  isEditing.value = false;
}
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>