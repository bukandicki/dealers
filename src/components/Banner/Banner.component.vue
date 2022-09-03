<script setup>
import GoogleImage from "@/assets/images/google.png";
import AppleImage from "@/assets/images/apple.png";

import "./Banner.modules.sass";
</script>

<template lang="pug">
.banner
    h1.banner__title Live simple with MY Mitsubishi
    .banner__desc
        p
            | Nikmati semua fasilitas berkendara Mitsubishi,
            | dari book test drive hingga service berkala langsung
            | dari tangan Anda dengan My Mitsubishi ID.

        p Download aplikasinya sekarang di App Store dan Play Store.
    .banner__cta
        img.banner__cta-logo(:src="AppleImage" role="button")
        img.banner__cta-logo(:src="GoogleImage" role="button")
</template>
