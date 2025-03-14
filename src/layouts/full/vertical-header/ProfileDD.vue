<script setup lang="ts">
import { ref } from 'vue';
import { KeyIcon, LogoutIcon, DeviceMobileIcon } from 'vue-tabler-icons';
import { useAuthStore } from '@/stores/auth';

const swt1 = ref(true);
const swt2 = ref(false);
const authStore = useAuthStore();
</script>

<template>
  <div class="pa-4 d-flex flex-column fill-height">
    <!-- Avatar Profile & Nama -->
    <div class="d-flex align-center">
      <v-avatar size="50" class="mr-1">
        <img src="@/assets/images/profile/user-profile.svg" alt="User" />
      </v-avatar>
      <div>
        <h4 class="mb-n1 darkText">Hello, <span class="font-weight-regular darkText">bimo@pusilkom.com</span></h4>
        <span class="text-subtitle-2 text-medium-emphasis">UI/UX</span>
      </div>
    </div>

    <!-- Divider -->
    <v-divider class="mt-3"></v-divider>

    <!-- Menu List-->
    <perfect-scrollbar style="flex-grow: 1; max-height: 100%">
      <v-list class="mt-3" density="comfortable">
        <!-- Change Password -->
        <v-list-item @click="" class="darkText" rounded="md" align-center>
          <template v-slot:prepend>
            <KeyIcon size="22" class="darkText mr-3" />
          </template>
          <v-list-item-title class="text-subtitle-2">Change Password</v-list-item-title>
        </v-list-item>

        <!-- Mobile App -->
        <v-list-item @click="" class="darkText" rounded="md" align-center>
          <template v-slot:prepend>
            <DeviceMobileIcon size="22" class="darkText mr-3" />
          </template>
          <v-list-item-title class="text-subtitle-2">Mobile App</v-list-item-title>
        </v-list-item>

        <v-divider class="mt-3 mb-3"></v-divider>
        <!-- Logout -->
        <v-list-item @click="authStore.logout()" class="text-error" rounded="md">
          <template v-slot:prepend>
            <LogoutIcon size="22" class="text-error mr-3" />
          </template>
          <v-list-item-title class="text-subtitle-2">Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </perfect-scrollbar>
  </div>
</template>
