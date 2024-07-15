<template>
    <div>
        <Input label="Razão Social" v-model="companyName" @inputError="handleInputError" />
        <Input label="CNPJ" v-model="cnpj" :validator="isValidCnpj" @inputError="handleInputError" />
        <Input label="Data de abertura" v-model="openingDate" :validator="isValidDate" @inputError="handleInputError" />
        <Input label="Telefone" v-model="phone" :validator="isValidPhone" @inputError="handleInputError" />
    </div>
</template>
<script setup>
import Input from '@/components/Atoms/AtomsInput.vue'
import { isValidCnpj, isValidDate, isValidPhone } from '@/utils/helpers'
import { useSteps } from '@/components/Organisms/Steps/composable';
const { phone, companyName, cnpj, openingDate, handleInputError } = useSteps();
</script>