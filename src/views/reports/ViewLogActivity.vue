<template>
  <div>
    <!-- Form Section -->
    <v-card class="pa-6 rounded-lg" elevation="2">
      <h2 class="text-h3 font-weight-semibold mb-4" style="color: #2C3E50;">
        View Log Activity
      </h2>

      <v-container>
        <v-row class="align-center justify-space-between">
          <v-col cols="3">
            <v-select 
              v-model="filters.project" 
              :items="projects" 
              label="Project*"
              required
              variant="outlined"
              dense
              class="custom-input"
              :error-messages="v$?.project?.$errors?.map(e => e.$message) || []"
              @blur="v$?.project?.$touch"
              @change="v$?.project?.$touch"
            ></v-select>
          </v-col>
          <v-col cols="3">
            <v-select 
              v-model="filters.subProject" 
              :items="subProjects" 
              label="Sub Project"
              variant="outlined"
              dense
              class="custom-input"
            ></v-select>
          </v-col>
          <v-col cols="2">
            <v-text-field 
              v-model="filters.startDate" 
              label="Start Date*" 
              type="date" 
              required
              variant="outlined"
              dense
              class="custom-input"
              :error-messages="v$?.startDate?.$errors?.map(e => e.$message) || []"
              @blur="v$?.startDate?.$touch"
              @change="v$?.startDate?.$touch"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field 
              v-model="filters.endDate" 
              label="End Date*" 
              type="date" 
              required
              variant="outlined"
              dense
              class="custom-input"
              :error-messages="v$?.endDate?.$errors?.map(e => e.$message) || []"
              @blur="v$?.endDate?.$touch"
              @change="v$?.endDate?.$touch"
            ></v-text-field>
          </v-col>

          <!-- Tombol Search -->
          <v-col cols="2" class="d-flex align-center justify-end mb-6">
            <v-btn color="primary" height="50px" @click="fetchLogs">
              <v-icon left>mdi-magnify</v-icon> Search
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <!-- Data Table Section -->
    <v-card class="mt-4 pa-4">
      <v-data-table 
        :key="logs.length"
        :headers="headers" 
        :items="logs" 
        class="custom-table" 
        items-per-page="10" 
        show-items-per-page
      >
        <template v-slot:no-data>
          <v-container class="text-center py-4">
            <v-icon size="40" style="color: #2C3E50;">mdi-alert-circle-outline</v-icon>
            <p class="text-body-1 mt-2" style="color: #2C3E50;">No Data Available</p>
          </v-container>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
  setup() {
    const filters = reactive({
      project: '',
      subProject: '',
      startDate: '',
      endDate: ''
    });

    const rules = computed(() => ({
      project: { required },
      startDate: { required },
      endDate: { required }
    }));

    const v$ = useVuelidate(rules, filters);

    return { v$, filters };
  },
    data() {
      return {
        projects: ["Employee Self Service (ESS)", "Project A", "Project B"],
        subProjects: ["Sub Project 1", "Sub Project 2", "Sub Project 3"],
        logs: [],
        headers: [
          { title: 'Date', key: 'date', align: 'start' },
          { title: 'Employee Name', key: 'employee', align: 'start' },
          { title: 'Activity', key: 'activity', align: 'start' }
        ]
      };
    },
    methods: {
      fetchLogs() {
        this.v$.$touch();
        if (this.v$.$invalid) return;

        // Simulasi data contoh
        this.logs = [
          { date: "2024-03-12", employee: "John Doe", activity: "Login" },
          { date: "2024-03-12", employee: "Jane Smith", activity: "Updated Profile" }
        ];
        
        console.log("Headers:", this.headers);
        console.log("Logs:", this.logs); // Debugging untuk memastikan data masuk
      }
    }
};
</script>

<style>
/* Styling untuk memperbaiki form agar lebih rapi */
.custom-input {
  background-color: white;
}

/* Styling tabel */
.custom-table .v-table__wrapper thead {
  background-color: #118DFB !important;
}

.custom-table .v-table__wrapper thead th {
  color: white !important;
  font-weight: bold;
  padding: 12px;
}

.custom-table .v-table__wrapper tbody tr:hover {
  background-color: #F8FAFB !important; 
  cursor: default;
}
</style>