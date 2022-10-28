<!--
//<script setup lang="ts">
//import PPT from "./PPT.vue";
//import { LazyPPT } from '#components'
//const show = ref(false)
//</script>
-->

<template>
    <div class="publish-container">
        <!-- Suspense component  to show users  -->
        <Suspense>
            <template #default>
                <PPT/>
            </template>
            <template #fallback>
                <div>Loading...</div>
            </template>
        </Suspense>
    </div>
</template>

<style scoped>
.publish-container {
    background: white;
    outline: 0.15rem solid rgb(149, 87, 89);
    border: none;
    padding: 0.75rem;
    width: 12rem;
    font-size: 1rem;
    color: rgb(5, 5, 38);
    cursor: pointer;
    font-weight: 200;
}
</style>