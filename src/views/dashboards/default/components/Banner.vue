<script setup lang="ts">
import { ref } from 'vue';

// Import gambar dengan new URL agar terbaca di Vite
const illustration = new URL('@/assets/images/illustrator.svg', import.meta.url).href;

const userEmail = ref('bimo@pusilkom.com');
const userRole = ref('Employee');

const viewReport = () => {
  console.log('View Report clicked');
};

const changePassword = () => {
  console.log('Change Password clicked');
};
</script>

<template>
  <v-card class="pa-5 rounded-lg" elevation="2">
    <v-row align="center" no-gutters>
      <!-- Teks di Kiri -->
      <v-col cols="12" sm="4" class="d-flex flex-column justify-start mb-4 mb-sm-0">
        <v-card-text class="pa-0">
          <h3 class="text-h3 font-weight-bold" style="color: #2c3e50">
            Welcome back, <span class="text-h3 font-weight-bold" style="color: #2c3e50">{{ userEmail }}</span>
          </h3>
          <p class="text-body-3 text-grey-darken-1" style="color: #2c3e50">You are login as {{ userRole }}</p>
        </v-card-text>
      </v-col>

      <!-- Ilustrasi di Tengah -->
      <v-col cols="12" sm="4" class="d-flex justify-center mb-4 mb-sm-0">
        <v-img :src="illustration" max-height="150" contain />
      </v-col>

      <!-- Tombol di Kanan -->
      <v-col cols="12" sm="4" class="d-flex flex-column flex-sm-row align-center justify-center justify-sm-end gap-4 mt-4">
        <v-btn variant="outlined" color="secondary" class="mr-2" @click="viewReport"> View Report </v-btn>
        <v-btn color="primary" @click="changePassword"> Change Password </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
