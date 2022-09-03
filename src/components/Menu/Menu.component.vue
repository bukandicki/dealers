<script setup>
import { ref } from "vue";
import { menuLinks } from "@/lib/constant";

import Chat from "@/components/Chat/Chat.component.vue";

import CloseIcon from "@/assets/icons/Close.vue";

import "./Menu.modules.sass";

const hideMenu = ref(false);

const handleHideMenu = () => {
    hideMenu.value = true;
};
</script>

<template lang="pug">
.menu
    Chat
    .menu__wrapper(v-if="!hideMenu")
        .menu__links
            .menu__link(v-for="menu in menuLinks" :key="menu.id")
                component(:is="menu.icon")
                span {{ menu.title }}
        .menu__close(@click="handleHideMenu")
            CloseIcon
</template>
