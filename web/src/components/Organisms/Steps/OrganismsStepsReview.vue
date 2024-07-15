<template>
    <div>
        <Email />
        <Person v-if="personType === 1" />
        <Business v-else />
        <Password />
    </div>
</template>
<script setup>
import Email from '@/components/Molecules/MoleculesEmail.vue'
import Person from '@/components/Molecules/MoleculesPerson.vue'
import Business from '@/components/Molecules/MoleculesBusiness.vue'
import Password from '@/components/Molecules/MoleculesPassword.vue'

import { useSteps } from './composable';
const { personType } = useSteps();
</script>