<template>
    <div>
        <Step v-if="currentStep === 1" title="Seja bem vindo(a)">
            <Welcome />
        </Step>
        <Step v-if="currentStep === 2 && personType === 1" title="Pessoa Física">
            <Person />
        </Step>
        <Step v-else-if="currentStep === 2 && personType !== 1" title="Pessoa Jurídica">
            <Business />
        </Step>
        <Step v-if="currentStep === 3" title="Senha de acesso">
            <Password />
        </Step>
        <Step v-if="currentStep === 4" title="Revise suas informações">
            <Review />
        </Step>
    </div>
</template>

<script setup>
import Person from '@/components/Molecules/MoleculesPerson.vue';
import Business from '@/components/Molecules/MoleculesBusiness.vue';
import Password from '@/components/Molecules/MoleculesPassword.vue';
import Step from '@/components/Molecules/MoleculesStep.vue'
import Review from './OrganismsStepsReview.vue';
import Welcome from './OrganismsStepsWelcome.vue';

import { useSteps } from './composable';
const { currentStep, personType } = useSteps();
</script>