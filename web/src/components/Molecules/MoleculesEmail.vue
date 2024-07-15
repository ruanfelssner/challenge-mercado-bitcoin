<template>
    <Input label="Endereço de e-mail" v-model="email" :validator="isValidEmail" @inputError="handleInputError" />
</template>
<script setup>
import Input from '@/components/Atoms/AtomsInput.vue'
import { isValidEmail } from '@/utils/helpers'
import { useSteps } from '@/components/Organisms/Steps/composable';
const { email, handleInputError } = useSteps();

</script>