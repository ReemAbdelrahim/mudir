<template>
    <div class="card mt-2">
        <div class="d-flex justify-content-between p-3">
            <h5>الإيرادات <span class="text-primary fs-6">(80,547,140)</span></h5>
            <div class="d-flex gap-2">
                <ul class="nav nav-pills mb-3 bg-light p-1" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">2022</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">2023</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">2024</button>
                    </li>
                </ul>

                <div>
                    <button class="print-btn btn mt-1">
                        <span>طباعة</span>
                        <span class="pe-2 "><svg width="21" height="22" viewBox="0 0 21 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.34375 6.625H14.6562V4.875C14.6562 3.125 14 2.25 12.0312 2.25H8.96875C7 2.25 6.34375 3.125 6.34375 4.875V6.625Z"
                                    stroke="white" stroke-width="1.3125" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M14 13.625V17.125C14 18.875 13.125 19.75 11.375 19.75H9.625C7.875 19.75 7 18.875 7 17.125V13.625H14Z"
                                    stroke="white" stroke-width="1.3125" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M18.375 9.25V13.625C18.375 15.375 17.5 16.25 15.75 16.25H14V13.625H7V16.25H5.25C3.5 16.25 2.625 15.375 2.625 13.625V9.25C2.625 7.5 3.5 6.625 5.25 6.625H15.75C17.5 6.625 18.375 7.5 18.375 9.25Z"
                                    stroke="white" stroke-width="1.3125" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M14.875 13.625H13.8162H6.125" stroke="white" stroke-width="1.3125"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.125 10.125H8.75" stroke="white" stroke-width="1.3125" stroke-miterlimit="10"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-100" />
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
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليه', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#00BCD4',
                borderColor: '#00BCD4',
                data: [65, 59, 80, 81, 56, 55, 40, 66, 77, 88, 99, 100],
                barPercentage: '0.2'
            },
        ],
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    color: textColor,

                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                },
                barPercentage: 0.3, // Adjust the barPercentage value to change the width of the columns
                categoryPercentage: 0.4, // Adjust the categoryPercentage value to change the width of the columns
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
}
</script>
<style>

.card {
    height: 400px;
}
.print-btn{
    background-color: #2E637F;
    color: white;
}
</style>