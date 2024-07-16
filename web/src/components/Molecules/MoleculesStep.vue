<template>
    <div class="step">
        <p>Etapa <span>{{ currentStep }}</span> de {{ totalSteps }}</p>
        <h1>{{ title }}</h1>
        <div class="container">
            <slot />
            <div class="footer">
                <button class="outline" @click="prevStep" v-if="currentStep > 1">Voltar</button>
                <button class="primary" @click="nextStep" :disabled="isNextStepDisabled">{{ currentStep === totalSteps ? 'Cadastrar' : 'Continuar' }}</button>
            </div>
        </div>
    </div>
</template>
<script setup>

import { useSteps } from '@/components/Organisms/Steps/composable';
const { currentStep, totalSteps, prevStep, nextStep, isNextStepDisabled } = useSteps();

defineProps({
    title: String
})

</script>
<style lang="scss">
$primary: #ff9900;
.step{
    padding-top:150px;
    p{
        font-size:1rem;
        margin-bottom:.5rem;
        span{
            color:$primary;
        }
    }
    h1{
        font-size:1.75rem;
        margin-bottom:1.25rem;
    }
    .container{
        max-width:270px;
    }
    .footer{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        button{
            flex: 1;
            white-space: nowrap;
            padding:.5rem 1rem;
            border-radius:8px;
            border: 1px solid transparent;
            background:transparent;
            font-size:1rem;
            &.outline{
                border-color:$primary;
                color:$primary;
            }
            &.primary{
                background-color:$primary;
                color:#fff;
            }
            &:disabled{
                opacity:.5;
            }
            &:hover{
                cursor:pointer;
                opacity:.8;
            }
        }
    }
}
</style>