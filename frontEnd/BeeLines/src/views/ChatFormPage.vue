<script setup>
import Form from '../components/chatForm.vue'
</script>

<template>
    <main>
        <div id="chatRecord"></div>
        <Form>Ask me anything!</Form>

    </main>
</template>

<style>
    main {
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
   
</style>