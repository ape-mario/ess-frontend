<script setup>
import { ref } from 'vue';

const headers = [
  { title: 'Date', key: 'date' },
  { title: 'Project', key: 'project' },
  { title: 'Role', key: 'role' },
  { title: 'Load', key: 'load' }
];
const employees = ref([
  { date: '10/03/2025', project: 'Self Development', role: 'UI/UX', load: '80%' },
  { date: '11/03/2025', project: 'PENGEMBANGAN SISTEM DIGITAL TERPADU MINERBA', role: 'UI/UX', load: '20%' }
]);
</script>

<template>
  <v-card class="pa-2 rounded-lg" elevation="2">
    <v-container style="color: #2c3e50; width: 100%; min-width: 100%">
      <!-- Text -->
      <v-row class="align-center mb-2">
        <v-col cols="6">
          <h3 class="text-h5 font-weight-medium">This is your current assignment:</h3>
        </v-col>
      </v-row>

      <!-- Table -->
      <v-data-table
        :headers="headers"
        :items="employees"
        class="custom-table elevation-1"
        hide-default-footer
        no-data-text=""
        style="color: #2c3e50"
      ></v-data-table>
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

/* Hilangkan margin bawah tabel */
.custom-table .v-data-table__wrapper {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}

/* Sembunyikan div footer yang masih muncul */
.custom-table .v-data-table-footer {
  display: none !important;
}
</style>
