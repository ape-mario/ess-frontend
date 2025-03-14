<script setup lang="ts">
import Banner from './components/Banner.vue';
import Table from './components/Table.vue';
import ListTable from './components/ListTable.vue';
</script>

<template>
  <v-row>
    <!-- -------------------------------------------------------------------- -->
    <!-- Banner Header -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="12">
      <Banner />
    </v-col>
    <!-- -------------------------------------------------------------------- -->
    <!-- Table assignment -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="12">
      <Table />
    </v-col>
    <!-- -------------------------------------------------------------------- -->
    <!-- List assignment -->
    <!-- -------------------------------------------------------------------- -->
    <v-col>
      <ListTable />
    </v-col>
  </v-row>
</template>
