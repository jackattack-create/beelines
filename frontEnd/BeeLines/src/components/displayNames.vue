<script setup>
        const Names = ['Jack', 'James', 'Frank', 'Brandon', "Charles"]

</script>

  
<template>
    <div v-for="name in Names">
        <h1>{{name}}</h1>
    </div>
</template>