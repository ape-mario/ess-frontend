<script setup lang="ts">
import { ref } from 'vue';
import { useCustomizerStore } from '../../../stores/customizer';
// Icon Imports
import { BellIcon, ChevronDownIcon, SearchIcon, Menu2Icon } from 'vue-tabler-icons';

// dropdown imports
import NotificationDD from './NotificationDD.vue';
import ProfileDD from './ProfileDD.vue';
import Searchbar from './SearchBarPanel.vue';

const customizer = useCustomizerStore();
const showSearch = ref(false);
function searchbox() {
  showSearch.value = !showSearch.value;
}
</script>

<template>
  <v-app-bar elevation="0" height="80">
    <!--<v-btn
      class="hidden-md-and-down text-secondary"
      icon
      rounded="sm"
      variant="flat"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
      style="color: #2C3E50;"
      size="small"
    >
      <Menu2Icon size="20" stroke-width="1.5" /> 
    </v-btn> -->

    <!-- menu samping search -->
    <v-btn
      class="hidden-md-and-down"
      icon
      rounded="sm"
      variant="flat"
      size="small"
      style="color: #2c3e50"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
    >
      <Menu2Icon size="20" stroke-width="1.5" />
    </v-btn>
    <!-- menu mobile-->
    <v-btn
      class="hidden-lg-and-up ms-4"
      icon
      rounded="sm"
      variant="flat"
      size="small"
      style="color: #2c3e50"
      @click.stop="customizer.SET_SIDEBAR_DRAWER"
    >
      <Menu2Icon size="20" stroke-width="1.5" />
    </v-btn>
    <!--<v-btn
      class="hidden-lg-and-up text-secondary ms-3"
      color="lightsecondary"
      icon
      rounded="sm"
      variant="flat"
      @click.stop="customizer.SET_SIDEBAR_DRAWER"
      size="small"
    >
      <Menu2Icon size="20" stroke-width="1.5" />
    </v-btn>-->

    <!--Header Dashboard-->
    <h2 class="text-h7 font-weight-bold ml-4" style="color: #2c3e50">Dashboard</h2>

    <v-spacer />

    <!-- Notification -->
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn icon class="mx-3" rounded="sm" size="small" variant="flat" v-bind="props" style="color: #2c3e50">
          <BellIcon stroke-width="1.5" size="22" />
        </v-btn>
      </template>
      <v-sheet rounded="md" width="330" elevation="12">
        <NotificationDD />
      </v-sheet>
    </v-menu>

    <!-- User Profile -->
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn class="profileBtn text-primary" color="lightprimary" variant="flat" rounded="pill" v-bind="props" @click="isOpen = !isOpen">
          <v-avatar size="30" class="mr-1 py-2">
            <img src="@/assets/images/profile/user-profile.svg" alt="User" width="30" height="30" />
          </v-avatar>
          <!-- Icon Arrow dengan Animasi Rotate -->
          <ChevronDownIcon
            stroke-width="1.5"
            size="20"
            style="color: #2c3e50"
            :style="{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }"
          />
        </v-btn>
      </template>
      <v-sheet rounded="md" width="330" elevation="12">
        <ProfileDD />
      </v-sheet>
    </v-menu>
  </v-app-bar>
</template>
