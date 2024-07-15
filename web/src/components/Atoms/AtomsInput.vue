<template>
    <div class="input">
        <label :for="inputId" v-if="label">{{ label }}</label>
        <input :type="type" :id="inputId" :value="modelValue" @input="handleInput($event.target.value)" />
        <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { generateUniqueId } from '@/utils/helpers';

const emits = defineEmits(['update:modelValue', 'inputError']);

const props = defineProps({
    label: {
        type: String
    },
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: String,
        required: true
    },
    validator: {
        type: Function,
        default: null
    }
});

const inputId = 'input-' + generateUniqueId();
const errorMessage = ref('');

const validateInput = async () => {
    if (props.validator) {
        const isValid = await props.validator(props.modelValue);
        errorMessage.value = isValid ? '' : 'Formato inválido';
        emits('inputError', props.label, isValid);
    }
};

watch(() => props.modelValue, validateInput);

const handleInput = (value) => {
    emits('update:modelValue', value);
    errorMessage.value = '';
};

</script>

<style lang="scss" scoped>
.input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    label {
        margin-bottom: 0.5rem;
    }
    input {
        border-radius: 8px;
        max-width: 100%;
        border: 1px solid #000;
        padding: 0.5rem 1rem;
    }
    .error {
        color: red;
        font-size: 0.875rem;
        margin-top: 0.5rem;
    }
}
</style>
