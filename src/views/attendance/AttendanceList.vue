<template>
  <v-container>
    <v-card>
      <!-- Judul & Filter Bulanan -->
      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-h6">Attendance List</span>
        <v-select v-model="selectedMonth" :items="months" label="Select Month" density="compact" class="w-25"></v-select>
      </v-card-title>

      <!-- Summary Section -->
      <v-row class="pa-4">
        <v-col cols="4">
          <v-card class="pa-3">
            <v-card-title class="text-subtitle-1">Total Attendance</v-card-title>
            <v-card-text class="text-h5">{{ totalAttendance }}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-3">
            <v-card-title class="text-subtitle-1">Avg. Weekly Hours</v-card-title>
            <v-card-text class="text-h5">{{ averageWeeklyHours }} hrs</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-3">
            <v-card-title class="text-subtitle-1">Total Working Hours</v-card-title>
            <v-card-text class="text-h5">{{ totalWorkingHours }} hrs</v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Tabel Kehadiran -->
      <v-data-table :headers="headers" :items="filteredAttendances" class="elevation-1">
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.name }}</td>
            <td>{{ item.position }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.checkIn }}</td>
            <td>{{ item.checkOut }}</td>
            <td>{{ item.hoursWorked }} hrs</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import dayjs from 'dayjs';

// Data Dummy Attendance
const attendances = ref([
  { name: 'John Doe', position: 'Software Engineer', date: '2024-03-04', checkIn: '08:30', checkOut: '17:30', hoursWorked: 9 },
  { name: 'John Doe', position: 'Software Engineer', date: '2024-03-05', checkIn: '08:45', checkOut: '17:45', hoursWorked: 9 },
  { name: 'Jane Smith', position: 'HR Manager', date: '2024-03-06', checkIn: '09:00', checkOut: '18:00', hoursWorked: 9 },
  { name: 'Mike Johnson', position: 'Marketing Lead', date: '2024-03-07', checkIn: '08:45', checkOut: '17:30', hoursWorked: 8.75 }
]);

const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Position', key: 'position' },
  { title: 'Date', key: 'date' },
  { title: 'Check-In', key: 'checkIn' },
  { title: 'Check-Out', key: 'checkOut' },
  { title: 'Hours Worked', key: 'hoursWorked' }
];

// Filter Bulanan
const selectedMonth = ref(dayjs().format('YYYY-MM')); // Default: Bulan Sekarang
const months = ref([
  '2024-01',
  '2024-02',
  '2024-03',
  '2024-04',
  '2024-05',
  '2024-06',
  '2024-07',
  '2024-08',
  '2024-09',
  '2024-10',
  '2024-11',
  '2024-12'
]);

const filteredAttendances = computed(() => {
  return attendances.value.filter((item) => dayjs(item.date).format('YYYY-MM') === selectedMonth.value);
});

// Summary Data
const totalAttendance = computed(() => filteredAttendances.value.length);
const totalWorkingHours = computed(() => filteredAttendances.value.reduce((sum, item) => sum + item.hoursWorked, 0));
const averageWeeklyHours = computed(() => (totalWorkingHours.value / 4).toFixed(2)); // Anggap 4 minggu dalam sebulan
</script>
