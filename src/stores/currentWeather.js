import { defineStore } from 'pinia'
import { ref } from 'vue'

import { API_URL, KEY, getOptions } from "../utils/conf";

export const useCurrenWeatherStore = defineStore('currenWeather', () => {
    const cityName = ref('');
    const country = ref('');
    const localtime = ref('');
    const temperatureNow = ref('');
    const condition = ref('');
    const conditionIcon = ref('');
    const feelslike = ref('');
    const windKph = ref('');
    const windDir = ref('');
    const humidity = ref('');
    const isValidRequest = ref(true);
    const errorText = ref('');

    function validationSearch(value, text) {
        isValidRequest.value = value;
        errorText.value = text;
    }

    async function getCurrentWeather(city) {

        try {
            const url = `${API_URL}/current.json?key=${KEY}&q=${city}`;

            const response = await fetch(url, getOptions);

            const data = await response.json();

            if (!response.ok) {
                isValidRequest.value = false;
                errorText.value = 'We do not know this city';
                throw new Error('Ошибка');

            } else {
                cityName.value = data.location.name;
                country.value = data.location.country;
                localtime.value = data.location.localtime;
                temperatureNow.value = data.current.temp_c;
                condition.value = data.current.condition.text;
                conditionIcon.value = data.current.condition.icon;
                feelslike.value = data.current.feelslike_c;
                windKph.value = data.current.wind_kph;
                windDir.value = data.current.wind_dir;
                humidity.value = data.current.humidity;
            }
        }
        catch (e) {
            console.log(e);
            isValidRequest.value = false;
            errorText.value = 'We do not know this city';
        }
    }

    return {
        cityName,
        country,
        localtime,
        temperatureNow,
        condition,
        conditionIcon,
        feelslike,
        windKph,
        windDir,
        humidity,
        isValidRequest,
        errorText,
        getCurrentWeather,
        validationSearch
    }
})