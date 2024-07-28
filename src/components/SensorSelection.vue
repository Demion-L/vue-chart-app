<template>
  <v-card>
    <v-card-title>Select Sensors</v-card-title>
    <v-card-text>
      <v-checkbox
        v-for="sensor in sensors"
        :key="sensor.id"
        v-model="selectedSensors"
        :label="sensor.name"
        :value="sensor"
      ></v-checkbox>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="applySelection">Apply</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SensorSelection",
  data() {
    return {
      sensors: [
        { id: 1, name: "Temperature Sensor 1", type: "temperature" },
        { id: 2, name: "Temperature Sensor 2", type: "temperature" },
        { id: 3, name: "Humidity Sensor", type: "humidity" },
        { id: 4, name: "Light Sensor", type: "light" },
      ],
      selectedSensors: [],
    };
  },
  methods: {
    applySelection() {
      this.$emit("sensors-selected", this.selectedSensors);
    },
  },
};
</script>
