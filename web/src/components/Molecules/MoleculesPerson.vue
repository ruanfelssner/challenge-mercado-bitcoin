<template>
    <div>
        <Input label="Nome" v-model="name" :validator="isValidName" @inputError="handleInputError" />
        <Input label="CPF" v-model="cpf" :validator="isValidCpf" @inputError="handleInputError" />
        <Input label="Data de nascimento" v-model="birthDate" :validator="isValidDate" @inputError="handleInputError" />
        <Input label="Telefone" v-model="phone" :validator="isValidPhone" @inputError="handleInputError" />
    </div>
</template>
<script setup>
import Input from '@/components/Atoms/AtomsInput.vue'
import { isValidName, isValidCpf, isValidDate, isValidPhone } from '@/utils/helpers'
import { useSteps } from '@/components/Organisms/Steps/composable';
const { name, cpf, birthDate, phone, handleInputError } = useSteps();
</script>