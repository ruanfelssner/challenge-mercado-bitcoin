<template>
    <div class="welcome">
        <Email />
        <div class="personType">
            <div>
                <input type="radio" id="fisica" :value="1" v-model="personType" /> 
                <label for="fisica">Pessoa Física</label>
            </div>
            <div>
                <input type="radio" id="juridica" :value="2" v-model="personType" />
                <label for="juridica">Pessoa Jurídica</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import Email from '@/components/Molecules/MoleculesEmail.vue'
import { useSteps } from './composable';
const { personType } = useSteps();
</script>

<style lang="scss" scoped>
.welcome{
    display:flex;
    flex-direction:column;
}
.personType{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2;
    margin-bottom:1rem;
    label{
        margin-left:.5rem;
    }
    input{
        accent-color: #000;
    }
}
</style>