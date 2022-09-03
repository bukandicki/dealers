<script setup>
import { ref, computed, watch, onMounted } from "vue";

import ChevronDownIcon from "@/assets/icons/ChevronDown.vue";
import SearchIcon from "@/assets/icons/Search.vue";
import TargetIcon from "@/assets/icons/Target.vue";

import "./Dropdown.modules.sass";

const props = defineProps({ provinces: Array });
const emits = defineEmits(["onSelected", "onCurrentLocation"]);

const inputQuery = ref("");
const hideDropdown = ref(false);

watch(
    () => inputQuery.value,
    (val, oldVal) => {
        if (val) hideDropdown.value = false;
    }
);

const filteredProvinces = computed(() => {
    return props.provinces?.filter((province) => province.name.toLocaleLowerCase().includes(inputQuery.value.toLocaleLowerCase()));
});

const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) console.error("Upss, Geolocation API not supported by this browser.");
    else {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            emits("onCurrentLocation", { latitude, longitude });
        });
    }
};

const handleSelectedProvince = (name) => {
    const computeInput = typeof name === "string" ? name : name.target.value;

    inputQuery.value = computeInput;
    hideDropdown.value = true;
    emits("onSelected", computeInput);
};

const handleHideDropdown = () => {
    hideDropdown.value = true;
};

onMounted(() => {
    handleGetCurrentLocation();
});
</script>

<template lang="pug">
.dropdown(v-click-outside="handleHideDropdown")
    .dropdown__wrapper
        .dropdown__label Discover the nearest dealership in your area
        .dropdown__input-container
            SearchIcon.dropdown__search-icon
            input.dropdown__input(
                v-model="inputQuery"
                placeholder="Pilih Lokasi Terdekat"
                @keyup.enter="handleSelectedProvince"
            )
            ChevronDownIcon.dropdown__chevron-icon
        .dropdown__current-location(@click="handleGetCurrentLocation")
            TargetIcon
            span Gunakan lokasi saya saat ini
    ul.dropdown__results(v-show="inputQuery && !hideDropdown")
        li.dropdown__result(
            v-for="province in filteredProvinces"
            :key="province.id"
            role="button"
            @click="handleSelectedProvince(province.name)"
        )
            | {{ province.name }}
</template>
