<script setup>
import { reactive, ref, onMounted } from "vue";
import { getProvinces, getDealers } from "@/lib/api";
import { socialMedia, responseDealers, responseProvince } from "@/lib/constant";

import Navbar from "@/components/Navbar/Navbar.component.vue";
import Dropdown from "@/components/Dropdown/Dropdown.component.vue";
import Card from "@/components/Card/Card.component.vue";
import Button from "@/components/Button/Button.component.vue";
import Banner from "@/components/Banner/Banner.component.vue";
import Modal from "@/components/Modal/Modal.component.vue";
import Menu from "@/components/Menu/Menu.component.vue";

import "./assets/sass/app.sass";

const provinces = ref([]);
const dealers = ref([]);
const selectedDealer = ref({});
const showModal = ref(false);
const isLoading = ref(false);

const query = reactive({
    latlong: null,
    keyword: null,
    page: 1,
    limit: 9
});

const customFetchMethod = async (action, ...arg) => {
    try {
        isLoading.value = true;
        const response = await action.apply(null, ...arg);
        return Promise.resolve(response);
    } catch (err) {
        return Promise.reject(err);
    } finally {
        isLoading.value = false;
    }
};

const fetchProvinces = async () => {
    // const data = await customFetchMethod(getProvinces);
    // provinces.value = data;
};

const handleLoadMore = async () => {
    query.page += 1;

    // const { data } = await customFetchMethod(getDealers, query);
    // dealers.value = [...dealers.value, ...data];
};

const handleSelectedProvince = async (province) => {
    query.latlong = null;
    query.keyword = province;

    // const { data } = await customFetchMethod(getDealers, query);
    // dealers.value = data;
};

const handleCurrentLocation = async ({ latitude, longitude }) => {
    query.keyword = null;
    query.latlong = `${latitude}, ${longitude}`;

    // const { data } = await customFetchMethod(getDealers, query);
    // dealers.value = data;
};

const handleSelectedDealer = (dealer) => {
    showModal.value = true;
    selectedDealer.value = dealer;
};

const handleModalOnCLose = () => {
    showModal.value = false;
};

onMounted(async () => {
    await fetchProvinces();
});
</script>

<template lang="pug">
header
    Navbar
main
    Modal(:show="showModal" :dealer="selectedDealer" @onClose="handleModalOnCLose")
    section.app__hero-section
    section.app__search-section
        .search-section
            .search-section__desc
                h1 Find dealer
                span
                    | Cari dan kunjungi dealer resmi Mitsubishi terdekat
                    | di kota Anda untuk mendapatkan pelayanan terbaik terkait
                    | dengan kendaraan dari Mitsubishi Motors Indonesia.

            Dropdown.search-section__dropdown(
                :provinces="responseProvince"
                @onSelected="handleSelectedProvince"
                @onCurrentLocation="handleCurrentLocation"
            )
    section.app__dealer-section
        .dealer-section__dealers
            h1(v-if="!dealers.length") No dealers founded!
            template(v-else)
                Card.dealer-section__dealer(
                    v-for="dealer in dealers"
                    :key="dealer.id"
                    :dealer="dealer"
                    @click="handleSelectedDealer(dealer)"
                )

        Button.dealer-section__button(
            title="LOAD MORE"
            :disabled="!dealers.length"
            @click="handleLoadMore"
            :loading="isLoading"
        )

    section.app__banner-section
        Banner

    section.app__contact-section
        .contact-section
            p.contact-section__title STAY CONNECTED WITH US
            .contact-section__socials
                component.contact-section__social(
                    v-for="social in socialMedia"
                    :key="social.id"
                    :is="social.icon"
                )
            p.contact-section__subtitle Contact Us
            .contact-section__copyright
                p Copyright © 2021.
                p PT Mitsubishi Motors Krama Yudha Sales Indonesia
    Menu
</template>
