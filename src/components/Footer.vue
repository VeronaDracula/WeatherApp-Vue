<script setup>

</script>

<template>
    <footer class="footer">
        <div class="footer__container container">
            <a class="footer__link" target="_blank" href="https://www.flaticon.com/ru/authors/freepik"
                title="капля иконки"> Иконки параметров погоды от Freepik - Flaticon
            </a>

            <a target="_blank" href="https://www.weatherapi.com/" title="Free Weather API">
                <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" />
            </a>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.3);
    min-height: 74px;
    margin-top: auto;
}

.footer__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 70px;
}


.footer__link {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    margin: 0 10px 0 0;
    text-decoration: none;
}


@media screen and (max-width: 475px) {
    .footer__link {
        max-width: 200px;
    }
}
</style>