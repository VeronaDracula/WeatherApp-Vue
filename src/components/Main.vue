<script setup>
import { ref } from 'vue';
import { useCurrenWeatherStore } from '@/stores/currentWeather';
import { useForecastStore } from '@/stores/forecast';
import TodayNow from './TodayNow.vue';
import TodayForecast from './TodayForecast.vue';
import Forecast from './Forecast.vue';

const currenWeatherStore = useCurrenWeatherStore();
const forecastStore = useForecastStore();

const city = ref('london');

currenWeatherStore.getCurrentWeather(city.value);
forecastStore.getForecastWeather(city.value);

</script>

<template>
    <main className="content">
        <div className="content__box container">
            <section className="today">
                <TodayNow />
                <TodayForecast />
            </section>
            <Forecast />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.container {
    max-width: 788px;
    margin: 0 auto;
    padding: 0 20px;
}

.content {
    flex: 1;
}

.content__box {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 2fr 1fr;
    padding-top: 30px;
    padding-bottom: 30px;
    box-sizing: border-box;
}

.today {
    width: 100%;
    overflow-x: hidden;
}


@media screen and (max-width: 767px) {
    .content__box {
        display: flex;
        flex-direction: column;
        grid-gap: 0;
    }

    .today {
        margin-bottom: 30px;
    }
}

@media screen and (max-width: 420px) {
    .content__box {
        padding-top: 20px;
        padding-bottom: 20px;
    }
}
</style>