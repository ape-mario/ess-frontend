<template>
  <v-card class="pa-2 rounded-lg">
    <v-container style="color: #2c3e50; width: 100%; min-width: 100%">
      <v-row class="align-center justify-space-between mb-4">
        <!-- Judul -->
        <v-col cols="6" class="d-flex align-center">
          <span class="text-h3 font-weight-semibold">Employee Logging Non AJ</span>
        </v-col>

        <!-- Filter Bulan -->
        <v-col cols="6" class="d-flex justify-end align-center">
          <v-select
            v-model="selectedMonth"
            :items="months"
            item-title="title"
            item-value="value"
            label="Filter by Month"
            variant="outlined"
            class="mr-4"
            dense
            @update:modelValue="filterLogs"
            style="max-width: 200px; height: 52px"
          ></v-select>

          <!-- Add Employee -->
          <v-btn color="primary" height="50px" @click="openDialog()"> Add Employee Log <v-icon left>mdi-plus</v-icon> </v-btn>
        </v-col>
      </v-row>

      <!-- Tabel -->
      <v-card>
        <v-data-table
          :headers="headers"
          :items="filteredLogs"
          class="custom-table"
          style="color: #2c3e50"
          items-per-page="10"
          show-items-per-page
        >
          <!-- Pesan jika tidak ada data -->
          <template v-slot:no-data>
            <v-container class="text-center py-4">
              <v-icon size="40" style="color: #2c3e50">mdi-alert-circle-outline</v-icon>
              <p class="text-body-1 mt-2" style="color: #2c3e50">No logs available for this month</p>
            </v-container>
          </template>

          <!-- Aksi (hanya tampil jika ada data) -->
          <template v-slot:item.actions="{ item }">
            <template v-if="item.id">
              <v-icon color="blue" class="mr-2" @click="openDialog(item)">mdi-pencil</v-icon>
              <v-icon color="red" @click="deleteLog(item.id)">mdi-delete</v-icon>
            </template>
          </template>
        </v-data-table>
      </v-card>

      <!-- Add Form -->
      <v-dialog v-model="dialog" max-width="500px">
        <v-card class="rounded-lg" style="font-family: 'Poppins', sans-serif">
          <!-- Header -->
          <v-card-title class="d-flex justify-space-between align-center mt-2 ml-2 mr-2" style="color: #2c3e50">
            <span class="text-h4 font-weight-bold">{{ form.id ? 'Edit Log' : 'Add Log' }}</span>
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <!-- Date -->
                <v-col cols="12">
                  <v-text-field v-model="form.date" label="Date" type="date" variant="solo-filled" dense bg-color="#F8FAFB"></v-text-field>
                </v-col>

                <!-- Project & Sub Project -->
                <v-col cols="6">
                  <v-text-field v-model="form.project" label="Project" variant="solo-filled" dense bg-color="#F8FAFB"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="form.subproject" label="Sub Project" variant="solo-filled" dense bg-color="#F8FAFB"></v-text-field>
                </v-col>

                <!-- Activity Detail -->
                <v-col cols="12">
                  <v-textarea
                    v-model="form.activity"
                    label="Activity Detail"
                    variant="solo-filled"
                    dense
                    bg-color="#F8FAFB"
                    rows="4"
                  ></v-textarea>
                </v-col>

                <!-- Working Mode -->
                <v-col cols="12">
                  <v-select
                    v-model="form.mode"
                    label="Working Mode"
                    :items="['WFH', 'WFO']"
                    variant="solo-filled"
                    dense
                    bg-color="#F8FAFB"
                  ></v-select>
                </v-col>

                <!-- Duration & Overtime -->
                <v-col cols="6">
                  <v-text-field
                    v-model="form.duration"
                    label="Duration (Hours)"
                    type="number"
                    variant="solo-filled"
                    dense
                    bg-color="#F8FAFB"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="form.overtime"
                    label="Overtime (Hours)"
                    type="number"
                    variant="solo-filled"
                    dense
                    bg-color="#F8FAFB"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <!-- Actions -->
          <v-card-actions class="justify-end px-4 pb-4">
            <v-btn color="grey" @click="dialog = false">Cancel</v-btn>
            <v-btn color="primary" @click="saveLog">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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

/* Padding Table */
.v-data-table tbody tr td {
  padding: 14px 16px !important;
}
</style>

<script setup>
import { ref, computed } from 'vue';

// Simpan data langsung dalam komponen
const logs = ref([
  {
    id: 1,
    date: '2025-03-10',
    project: 'Self Development',
    subproject: '',
    activity: 'implementasi design ke kodingan menggunakan vuetify',
    mode: 'WFO',
    duration: '8',
    overtime: '0'
  },
  {
    id: 2,
    date: '2025-03-11',
    project: 'Employee Self Service (ESS)',
    subproject: '',
    activity: 'implementasi design ke kodingan menggunakan vuetify',
    mode: 'WFO',
    duration: '8',
    overtime: '0'
  }
]);

const headers = [
  { title: 'Date', key: 'date' },
  { title: 'Project', key: 'project' },
  { title: 'Sub Project', key: 'subproject' },
  { title: 'Activity Detail', key: 'activity' },
  { title: 'Working Mode', key: 'mode' },
  { title: 'Duration', key: 'duration' },
  { title: 'Overtime', key: 'overtime' },
  { title: 'Actions', key: 'actions', sortable: false }
];

// Data Bulan untuk Filter
const months = [
  { title: 'January', value: '01' },
  { title: 'February', value: '02' },
  { title: 'March', value: '03' },
  { title: 'April', value: '04' },
  { title: 'May', value: '05' },
  { title: 'June', value: '06' },
  { title: 'July', value: '07' },
  { title: 'August', value: '08' },
  { title: 'September', value: '09' },
  { title: 'October', value: '10' },
  { title: 'November', value: '11' },
  { title: 'December', value: '12' }
];

// Ambil bulan saat ini sebagai default filter
const selectedMonth = ref(new Date().toISOString().slice(5, 7));

const filteredLogs = computed(() => {
  return logs.value.filter((log) => log.date.slice(5, 7) === selectedMonth.value);
});

const filterLogs = () => {
  console.log('Filtering logs for month:', selectedMonth.value);
};

const dialog = ref(false);
const form = ref({ id: null, date: '', project: '', time: '' });

const openDialog = (log = null) => {
  form.value = log ? { ...log } : { id: null, date: '', project: '', time: '' };
  dialog.value = true;
};

const saveLog = () => {
  if (form.value.id) {
    const index = logs.value.findIndex((log) => log.id === form.value.id);
    logs.value[index] = { ...form.value };
  } else {
    form.value.id = logs.value.length + 1;
    logs.value.push({ ...form.value });
  }
  dialog.value = false;
};

const deleteLog = (id) => {
  logs.value = logs.value.filter((log) => log.id !== id);
};
</script>
