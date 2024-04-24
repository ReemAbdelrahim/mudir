<template>
  <div class="dounght">
    <div class=" flex justify-content-between">
      <div class="chart-container" style="width: 350px; height: 300px;">
      
        <Chart type="doughnut" :data="chartData" :options="chartOptions" class="h-100" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from 'primevue/chart';

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref(null);

const setChartData = () => {
  return {
    labels: ['الوحدات الشاغرة', 'الوحدات المباعة', 'الوحدات المؤجرة'],
    datasets: [
      {
        data: [540, 325, 702],
        backgroundColor: ['#27AE60', '#E88931', '#2E637F'], // Specify the desired colors here
        hoverBackgroundColor: ['#30c970', '#e49c59', '#3b7c9f'], // Specify the desired hover colors here
      }
    ]
  };
};

const setChartOptions = () => {
  return {
    plugins: {
      legend: {
        labels: {
          cutout: '30%',
        }
      }
    },
  };
};
</script>

<style>
/* .dounght {
  height: 300px;
} */


</style>