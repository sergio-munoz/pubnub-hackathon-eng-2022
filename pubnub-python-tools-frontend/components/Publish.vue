<script lang="ts">

import PPT from "./PPT.vue";

</script>

<template>
    <div>
        <!-- Suspense component  to show users  -->
        <Suspense>
            <template #fallback>
                <div>loading</div>
            </template>
            <h1> PPT </h1>
            <PPT></PPT>
        </Suspense>
    </div>
</template>