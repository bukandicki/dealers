<script setup>
import { navLinks } from "@/lib/constant";

import Logo from "@/assets/icons/Logo.vue";
import ChevronDown from "@/assets/icons/ChevronDown.vue";

import Euro from "@/assets/images/euro.png";

import "./Navbar.modules.sass";
</script>

<template lang="pug">
.navbar
    Logo.navbar__logo
    ul.navbar__links
        li
            img.navbar__euro-link(:src="Euro")
        li.navbar__link(v-for="link in navLinks" :key="link.id")
            span {{ link.title }}
            ChevronDown(v-if="link.hasDropdown")
        li.navbar__hamburger(role="button")
</template>
