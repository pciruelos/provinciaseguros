<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  sucursales: {
    type: Array,
    required: true,
  },
  selected: {
    type: Array,
    required: true,
  },
})

const filteredSucursales = computed(() => {
  return props.sucursales.filter((sucursal) => props.selected.includes(sucursal.nombre))
})
</script>

<template>
  <div>
    <h2>Provincias:</h2>
    <ul>
      <li v-for="(sucursal, index) in filteredSucursales" :key="index">
        {{ sucursal.nombre }}
      </li>
    </ul>
  </div>
</template>
