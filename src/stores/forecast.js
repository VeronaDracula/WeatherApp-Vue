import { defineStore } from 'pinia'
import { ref } from 'vue'

import { API_URL, KEY, getOptions } from "../utils/conf";

export const useForecastStore = defineStore('forecast', () => {
    const todayHours = ref([]);
    const todayAstro = ref([]);
    const forecastTomorrow = ref([]);
    const forecastAfterTomorrow = ref([]);

    async function getForecastWeather(city) {

        try {
            const url = `${API_URL}/forecast.json?key=${KEY}&q=${city}&days=3`;

            const response = await fetch(url, getOptions);

            const data = await response.json();

            if (!response.ok) {
                throw new Error('Ошибка');
            } else {
               todayHours.value = data.forecast.forecastday[0].hour;
               todayAstro.value = data.forecast.forecastday[0].astro;
               forecastTomorrow.value = data.forecast.forecastday[1];
               forecastAfterTomorrow.value = data.forecast.forecastday[2];
            }
        }
        catch (e) {
            console.log(e);
            // return ThunkApi.rejectWithValue('Произошла непредвиденная ошибка');
        }

    }

    return { getForecastWeather, todayHours, todayAstro, forecastTomorrow, forecastAfterTomorrow }
})