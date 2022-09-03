<script setup>
import PinIcon from "@/assets/icons/Pin.vue";

import "./Card.modules.sass";

const props = defineProps({ dealer: Object });
</script>

<template lang="pug">
.card
    .card__details
        PinIcon.card__pin
        p.card__name {{ props.dealer.title }}
        p.card__address {{ props.dealer.address }}
    .card__services
        .card__service(v-for="(service, idx) in props.dealer.services" :key="idx") {{ service }}
</template>
