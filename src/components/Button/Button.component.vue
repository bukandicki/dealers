<script setup>
import { computed } from "vue";

import "./Button.modules.sass";

const props = defineProps({
    block: Boolean,
    loading: Boolean,
    outlined: Boolean,
    title: String
});
const emits = defineEmits(["click"]);

const classes = computed(() => {
    return {
        "button--block": props.block,
        "button--loading": props.loading,
        "button--outlined": props.outlined
    };
});

const handleButtonClick = (event) => {
    emits("click", event);
};
</script>

<template lang="pug">
button.button(
    @click="handleButtonClick"
    :class="classes"
) {{ loading ? "Loading..." : title }}
</template>
