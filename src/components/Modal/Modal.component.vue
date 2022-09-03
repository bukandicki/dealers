<script setup>
import Button from "@/components/Button/Button.component.vue";

import CloseIcon from "@/assets/icons/Close.vue";
import MapIcon from "@/assets/icons/Map.vue";
import PinIcon from "@/assets/icons/Pin.vue";
import PhoneIcon from "@/assets/icons/Phone.vue";
import EmailIcon from "@/assets/icons/Email.vue";

import "./Modal.modules.sass";

const props = defineProps({ show: Boolean, dealer: Object });
const emits = defineEmits(["onClose"]);

const handleCloseModal = () => {
    emits("onClose");
};
</script>

<template lang="pug">
teleport(to="#modal")
    .modal(:class="{ 'modal--show': show }")
        .modal__wrapper
            .modal__header
                CloseIcon.modal__close(@click="handleCloseModal")
                PinIcon.modal__pin
                .modal__services
                    .modal__service(
                        v-for="(service, idx) in dealer.services"
                        :key="idx"
                    ) {{ service }}
                h1.modal__title {{ dealer.title }}
                .modal__address
                    span {{ dealer.address }}
                    span {{ dealer.distance_km }} km
                a.modal__direction(
                    :href="`https://www.google.com/maps/dir/Current+Location/${dealer.latitude},${dealer.longitude}`"
                    target="_blank"
                    rel="noopener noreferrer"
                )
                    MapIcon.modal__map-icon
                    span view direction
                .modal__cta
                    Button(title="REQUEST TEST DRIVE")
                    Button(title="BOOK SERVICE" outlined)
            .modal__body
                .modal__operationals
                    template(v-if="dealer.showroom_operational_hours?.length")
                        .modal__operational
                            h2.modal__operational-name Showroom
                            .modal__operational-schedule(
                                v-for="(operational, idx) in dealer.showroom_operational_hours"
                                :key="idx"
                            )
                                .modal__operational-detail
                                    span {{ operational.days }}
                                    span {{ operational.hours }}

                    template(v-if="dealer.bengkel_operational_hours?.length")
                        .modal__operational
                            h2.modal__operational-name Bengkel
                            .modal__operational-schedule(
                                v-for="(operational, idx) in dealer.bengkel_operational_hours"
                                :key="idx"
                            )
                                .modal__operational-detail
                                    span {{ operational.days }}
                                    span {{ operational.hours }}

                .modal__contact
                    h2.modal__contact-title Contact
                    .modal__contact-details
                        .modal__contact-phone
                            PhoneIcon
                            ul
                                li(v-for="(phone, idx) in dealer?.phone?.split(',')" :key="idx") {{ phone }}
</template>
