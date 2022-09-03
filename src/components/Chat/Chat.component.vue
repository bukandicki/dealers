<script setup>
import { ref } from "vue";

import CloseIcon from "@/assets/icons/Close.vue";

import "./Chat.modules.sass";

const hideChat = ref(false);

const handleHideChat = () => {
    hideChat.value = true;
};
</script>

<template lang="pug">
.chat(v-if="!hideChat")
    CloseIcon.chat__icon(@click="handleHideChat")
    span.chat__name Ask MIRA
</template>
