<script setup>
import { ref } from "vue";
import { navLinks } from "@/lib/constant";

import Logo from "@/assets/icons/Logo.vue";
import ChevronDown from "@/assets/icons/ChevronDown.vue";

import Euro from "@/assets/images/euro.png";

import "./Navbar.modules.sass";

const showNav = ref(false);

const handleShowNav = () => {
    showNav.value = !showNav.value;
};
</script>

<template lang="pug">
.navbar
    Logo.navbar__logo
    .navbar__wrapper
        ul.navbar__links(:class="{ 'navbar__links--show': showNav }")
            li.navbar__link
                img.navbar__euro-link(:src="Euro")
            li.navbar__link(v-for="link in navLinks" :key="link.id")
                span {{ link.title }}
                ChevronDown(v-if="link.hasDropdown")
        .navbar__hamburger(role="button" @click="handleShowNav")
</template>
