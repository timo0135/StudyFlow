<template>
    <div class="w-full h-full p-6 rounded-2xl border border-gray-300 bg-white flex flex-col">
      <h3 class="text-xl font-medium mb-6 text-gray-700">Graphique de progression</h3>
      <div ref="chart" class="flex-grow w-full" ></div>
    </div>
  </template>
  
  <script setup>
  import * as echarts from 'echarts';
  import { onMounted, ref, onBeforeUnmount } from 'vue';
  
  const chart = ref(null);
  let chartInstance = null;
  
  onMounted(() => {
    chartInstance = echarts.init(chart.value);
  
    const options = {
      xAxis: {
        type: 'category',
        boundaryGap: false, // évite l'espacement gauche/droite
        data: ['', '', '', ''],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false },
      },
      yAxis: {
        type: 'value',
        min: 0,         // commence à 0
        max: 40,        // dépasse légèrement la valeur max (35)
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e0e0e0',
            type: 'solid',
          },
        },
      },
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        containLabel: false,
      },
      series: [
        {
          name: 'Progression',
          type: 'line',
          smooth: true,
          showSymbol: false,
          data: [10, 20, 15, 30, 20, 50],
          areaStyle: {
            color: '#FFCCC2',
          },
          lineStyle: {
            color: '#FF5733',
            width: 3,
          },
          itemStyle: {
            color: '#FF5733',
          },
          symbolSize: 8,
        },
      ],
    };
  
    chartInstance.setOption(options);
    window.addEventListener('resize', chartInstance.resize);
  });
  
  onBeforeUnmount(() => {
    if (chartInstance) {
      window.removeEventListener('resize', chartInstance.resize);
      chartInstance.dispose();
    }
  });
  </script>
  