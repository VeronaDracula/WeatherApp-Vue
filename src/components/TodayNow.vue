<script setup>
import { useCurrenWeatherStore } from '@/stores/currentWeather';
import { useForecastStore } from '@/stores/forecast';

const currenWeatherStore = useCurrenWeatherStore();
const forecastStore = useForecastStore();

function separationDate(value) {
    if (value !== undefined) {
        const data = value.split(' ');
        return data[0]
    }
}

function separationTime(value) {
    if (value !== undefined) {
        const data = value.split(' ');
        return data[1]
    }
}

</script>

<template>
    <section class="today-now">
        <div class="location">
            <h1 class="location__city">{{ currenWeatherStore.cityName }},</h1>
            <p class="location__country">{{ currenWeatherStore.country }}</p>
        </div>

        <div class="now-date">
            <p class="now-date__time">Now <span class="now-date__time-number">{{ separationTime(currenWeatherStore.localtime) }}</span></p>
            <p class="now-date__date"><span class="now-date__date-number">{{ separationDate(currenWeatherStore.localtime) }}</span></p>
        </div>

        <div class="now-weather">
            <div class="now-weather__box">
                <img class="now-weather__icon" :src="currenWeatherStore.conditionIcon" alt="" />
                <p class="now-weather__description">{{ currenWeatherStore.condition }}</p>
            </div>

            <div class="now-weather__box-temp">
                <p class="now-weather__temp">
                    <span class="now-weather__temp-number">{{ currenWeatherStore.temperatureNow }}&#176;</span>
                    C
                </p>

                <p class="now-weather__feelslike">Feels like <span class="now-weather__feelslike-temp">
                        {{ currenWeatherStore.feelslike }} &#176;</span>
                </p>
            </div>
        </div>

        <ul class="other-info">
            <li class="other-info__box">
                <div class="other-info__icon other-info__icon--type--wind"></div>
                <p class="other-info__text">
                    <span class="other-info__wind-speed">{{ currenWeatherStore.windKph }}</span>kph,
                    <span class="other-info__wind-direction">{{ currenWeatherStore.windDir }}</span>
                </p>
            </li>

            <li class="other-info__box">
                <div class="other-info__icon other-info__icon--type--humidity"></div>
                <p class="other-info__text">
                    <span class="other-info__humidity">{{ currenWeatherStore.humidity }}</span>%
                </p>
            </li>

            <li class="other-info__box">
                <div class="other-info__icon other-info__icon--type--dawn"></div>
                <p class="other-info__text">
                    <span class="other-info__dawn">{{ forecastStore.todayAstro.sunrise }}</span>
                </p>
            </li>

            <li class="other-info__box">
                <div class="other-info__icon other-info__icon--type--sunset"></div>
                <p class="other-info__text">
                    <span class="other-info__sunset">{{ forecastStore.todayAstro.sunset }}</span>
                </p>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
.today-now {
    box-shadow: 0 6px 4px -4px rgba(0, 0, 0, 0.2);
    padding-bottom: 20px;
}

.location {
    margin: 0 0 10px 0;
}

.location__city {
    font-weight: 400;
    font-size: 30px;
    line-height: 34px;
    margin: 0;
}

.location__country {
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    margin: 0;
}

.now-date {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}

.now-date__time {
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    margin: 0 10px 0 0;
}

.now-date__date {
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    margin: 0;
}

/* now */
.now-weather {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    margin-bottom: 50px;
}

.now-weather__box {
    max-width: 150px;
    width: max-content;
}

.now-weather__icon {
    height: 64px;
    width: 64px;
}

.now-weather__description {
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    margin: 0;
}

.now-weather__temp {
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    margin: 0;
}

.now-weather__temp-deg {
    font-weight: 400;
    font-size: 80px;
    line-height: 88px;
}

.now-weather__temp-number {
    font-weight: 400;
    font-size: 80px;
    line-height: 88px;
}

.now-weather__feelslike {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
}

.now-weather__feelslike-temp {
    font-weight: 500;
}


/* другие параметры */
.other-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;
}

.other-info__box {
    display: flex;
    align-items: center;
    margin: 0 10px 0 0;
}

.other-info__icon {
    height: 20px;
    width: 20px;
    margin-right: 5px;
}

.other-info__icon--type--wind {
    background: transparent center no-repeat url(../assets/images/wind.png);
    background-size: contain;
}

.other-info__icon--type--humidity {
    background: transparent center no-repeat url(../assets/images/waterdrop.png);
    background-size: contain;
}

.other-info__icon--type--dawn {
    background: transparent center no-repeat url(../assets/images/sun.png);
    background-size: contain;
}

.other-info__icon--type--sunset {
    background: transparent center no-repeat url(../assets/images/sun.png);
    background-size: contain;
    transform: rotate(180deg);
}

.other-info__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    margin: 0;
}

@media screen and (max-width: 475px) {
    .now-weather {
        margin-bottom: 30px;
    }

    .other-info {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr 2fr;
        grid-gap: 10px;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        margin: 0;
        list-style: none;
    }
}

@media screen and (max-width: 420px) {
    .now-date {
        margin-bottom: 30px;
    }

    .location {
        font-size: 25px;
        line-height: 29px;
    }

    .now-date__time {
        font-size: 15px;
        line-height: 18px;
        margin: 0 10px 0 0;
    }

    .now-date__date {
        font-size: 15px;
        line-height: 18px;
    }

    .now-weather {
        margin-bottom: 30px;
    }

    .now-weather__description {
        font-size: 16px;
        line-height: 18px;
    }

    .now-weather__temp {
        font-size: 40px;
        line-height: 48px;
    }

    .now-weather__temp-deg {
        font-size: 70px;
        line-height: 78px;
    }

    .now-weather__temp-number {
        font-size: 70px;
        line-height: 78px;
    }

    .now-weather__feelslike {
        font-size: 14px;
        line-height: 16px;
    }

    .other-info__text {
        font-size: 14px;
        line-height: 16px;
    }
}

@media screen and (max-width: 374px) {
    .other-info {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
}
</style>