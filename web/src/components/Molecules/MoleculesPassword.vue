<template>
    <Input label="Sua senha" v-model="password" @inputError="handleInputError" />
</template>
<script setup>
import Input from '@/components/Atoms/AtomsInput.vue'
import { useSteps } from '@/components/Organisms/Steps/composable';
const { password, handleInputError } = useSteps();
</script>