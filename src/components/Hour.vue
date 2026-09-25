<script setup>

const props = defineProps({
    hour: {
        type: Object,
        required: true,
    },
})

function separationTime(value) {
    if (value !== undefined) {
        const data = value.split(' ');
        return data[1]
    }
}

</script>

<template>
    <li class="hour">
        <p class="hour__time">{{ separationTime(props.hour.time) }}</p>
        <div class="hour__icon-box">
            <img class="hour__icon" :src="props.hour.condition.icon" alt="" />
        </div>
        <p class="hour__temp"><span class="hour__temp-number">{{ props.hour.temp_c }}&#176;</span></p>
    </li>
</template>

<style lang="scss" scoped>
.hour {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;

    width: 54px;

    &:last-child {
        margin-right: 0;
    }
}

.hour__time {
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    margin: 0 0 5px 0;
}

.hour__icon-box {
    height: 54px;
    width: 54px;
    margin: 0 0 5px 0;
}

.hour__icon {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.hour__temp {
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    margin: 0;
}

@media screen and (max-width: 420px) {
    .hour__icon-box {
        height: 50px;
        width: 50px;
    }
}
</style>