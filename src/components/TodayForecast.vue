<script setup>
import { ref } from 'vue';
import Hour from './Hour.vue';
import { useForecastStore } from '@/stores/forecast';

const forecastStore = useForecastStore();

const sliderRef = ref(null);

function handleClickPrev() {
    sliderRef.value.scrollLeft -= 74;
}

function handleClickNext() {
    sliderRef.value.scrollLeft += 74;
}

</script>

<template>
    <section class="today-forecast">
        <button class="forecast__btn forecast__btn-prev" @click="handleClickPrev()"></button>
        <ul class="hours" ref="sliderRef">
            <Hour v-for="hour in forecastStore.todayHours" :key="hour.time_epoch" :hour="hour" />
        </ul>
        <button class="forecast__btn forecast__btn-next" @click="handleClickNext()"></button>
    </section>
</template>

<style lang="scss" scoped>
.today-forecast {
    box-sizing: border-box;
    width: 100%;

    display: flex;
    align-items: center;
}

.forecast__btn {
    height: 40px;
    width: 20px;
    border: none;
    box-sizing: border-box;
    opacity: 0.3;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
}

.forecast__btn-prev {
    margin-right: 10px;
    background: transparent center no-repeat url(../assets/images/arrow.png);
    background-size: contain;
}

.forecast__btn-next {
    margin-left: 10px;
    background: transparent center no-repeat url(../assets/images/arrow.png);
    background-size: contain;
    transform: rotate(180deg);
}

.hours {
    display: flex;
    list-style: none;
    padding: 20px 0 0 0;
    margin: 0;

    overflow-x: scroll;
    scroll-behavior: smooth;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0 !important;
        display: none;
    }
}

@media screen and (max-width: 767px) {
    .forecast__btn {
        display: none;
    }
}
</style>