<template>
  <div class="container mt-4">
    <BackButton />
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h4>{{ title }}</h4>
        <button v-if="!isEditing && userRole === 'admin'" @click="startEdit">Edit</button>
        <button v-else-if="userRole === 'admin'" @click="saveEdit">Save</button>
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


<div class="card mt-3">
  <div class="card-header">
    <h5>Rating</h5>
  </div>
  <div class="card-body">
    <p>averageRating: {{ averageRating }} </p>
    

    <div class="mb-3">
      <label class="form-label">Please select a rating.:</label>
      <select v-model="userRating" class="form-select" style="width: 100px;">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    
    <button @click="submitRating" class="btn btn-primary">submit rating</button>
  </div>
</div>



    </div>
  </div>
</template>

<script setup>
import BackButton from '@/components/BackButton.vue';
import { ref, onMounted } from 'vue';
import db from '../Firebase/init';
import { collection, query, where, getDocs ,addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const userRole = ref('');
const auth = getAuth();


const averageRating = ref(0);
const userRating = ref(1);


const fetchUserRole = async () => {
  const user = auth.currentUser; 
  if (user) {
    const q = query(collection(db, 'users'), where('email', '==', user.email));
    const querySnapshot = await getDocs(q);
    const userData = querySnapshot.docs[0].data();
    userRole.value = userData.role;
  }
};


const fetchAverageRating = async () => {
  //get average rating
  const q = query(collection(db, 'ratings'), where('tutorialId', '==', "1"));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    let totalScore = 0;
querySnapshot.forEach((doc) => {
  totalScore += parseInt(doc.data().rating);  
});
    averageRating.value = (totalScore / querySnapshot.size).toFixed(1);
  }
};


const submitRating = async () => {
  await addDoc(collection(db, 'ratings'), {
    tutorialId: "1",
    rating: userRating.value
  });
  fetchAverageRating();//update avg rating
};

onMounted(() => {
  fetchUserRole();
  fetchAverageRating();
});

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