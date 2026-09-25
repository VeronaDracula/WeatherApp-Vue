<script setup>
import { useForecastStore } from '@/stores/forecast';

const forecastStore = useForecastStore();

function getTemp(data) {
    if (data !== undefined) {
        return data.avgtemp_c
    }
}

function getIcon(data) {
    if (data !== undefined) {
        return data.condition.icon
    }
}

function getDate(data) {
    if (data !== undefined) {
        return data.slice(5)
    }
}
</script>

<template>
    <section class="forecast">
        <ul class="forecast__days">
            <li class="forecast__day">
                <h2 class="forecast__day-title">{{ getDate(forecastStore.forecastTomorrow.date) }}</h2>

                <div class="forecast__day-box">
                    <div class="forecast__day-icon-box">
                        <img class="forecast__day-icon" :src='getIcon(forecastStore.forecastTomorrow.day)' alt="" />
                    </div>
                    <span class="forecast__day-temp">{{ getTemp(forecastStore.forecastTomorrow.day) }}&#176;</span>
                </div>
            </li>

            <li class="forecast__day">
                <h2 class="forecast__day-title">{{ getDate(forecastStore.forecastAfterTomorrow.date) }}</h2>

                <div class="forecast__day-box">
                    <div class="forecast__day-icon-box">
                        <img class="forecast__day-icon" :src='getIcon(forecastStore.forecastAfterTomorrow.day)'
                            alt="" />
                    </div>
                    <span class="forecast__day-temp">{{ getTemp(forecastStore.forecastAfterTomorrow.day) }}&#176;</span>
                </div>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
.forecast {
    display: flex;
    justify-content: center;
}

.forecast__days {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
}

.forecast__day {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 150px;
    margin: 0;
}



.forecast__day-title {
    font-weight: 400;
    font-size: 28px;
    line-height: 30px;
    margin: 0 0 10px 0;
}

.forecast__day-box {
    display: flex;
    align-items: center;
}

.forecast__day-icon-box {
    height: 60px;
    width: 60px;
}

.forecast__day-icon {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.forecast__day-temp {
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    margin: 0;
}


@media screen and (max-width: 767px) {
    .forecast {
        display: block;
        width: 100%;
    }

    .forecast__days {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
}

@media screen and (max-width: 420px) {
    .forecast__day-title {
        font-size: 24px;
        line-height: 26px;
    }

    .forecast__day-icon-box {
        height: 56px;
        width: 56px;
    }

    .forecast__day-temp {
        font-size: 22px;
        line-height: 24px;
    }
}
</style>