<script setup>
import { ref } from 'vue';

const search = ref('');
const headers = [
  { title: 'Date', key: 'date' },
  { title: 'Project', key: 'project' },
  { title: 'Role', key: 'role' },
  { title: 'Load', key: 'load' }
];
const employees = ref([
  { date: '10/03/2025', project: 'Self Development', role: 'UI/UX', load: '80%' },
  { date: '11/03/2025', project: 'PENGEMBANGAN SISTEM DIGITAL TERPADU MINERBA', role: 'UI/UX', load: '20%' },
  { date: '12/03/2025', project: 'Employee Self System (ESS)', role: 'UI/UX', load: '90%' },
  { date: '14/03/2025', project: 'Self Development', role: 'UI/UX', load: '10%' }
]);
</script>

<template>
  <v-card class="pa-2 rounded-lg" elevation="2">
    <v-container style="color: #2c3e50; width: 100%; min-width: 100%">
      <!-- Row untuk teks kiri dan search kanan -->
      <v-row class="align-center mb-2">
        <v-col cols="6">
          <h3 class="text-h5 font-weight-medium" style="color: #2c3e50">List of past assignment:</h3>
        </v-col>
        <v-col cols="6" class="d-flex justify-end">
          <v-text-field
            v-model="search"
            label="Cari"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            density="compact"
            hide-details
            style="max-width: 400px"
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- Table -->
      <v-data-table
        v-model:search="search"
        :headers="headers"
        :items="employees"
        class="custom-table elevation-1"
        items-per-page="10"
        style="color: #2c3e50"
      >
      </v-data-table>
    </v-container>
  </v-card>
</template>

<style>
/* Styling Header Table */
.custom-table .v-table__wrapper thead {
  background-color: #118dfb !important;
}

.custom-table .v-table__wrapper thead th {
  color: white !important;
  font-weight: bold;
  padding: 12px;
}

/* Hover Effect untuk Baris Tabel */
.custom-table .v-table__wrapper tbody tr:hover {
  background-color: #f8fafb !important;
  cursor: default;
}

/* Memberikan Border Radius pada Tabel */
.custom-table {
  border-radius: 12px !important;
  overflow: hidden;
}
</style>
