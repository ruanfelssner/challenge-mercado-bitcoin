import { ref, watchEffect } from 'vue'
const currentStep = ref(1);
const totalSteps = ref(4);
const email = ref('')
const personType = ref(null)
const name = ref('')
const cpf = ref('')
const birthDate = ref('')
const phone = ref('')
const companyName = ref('')
const cnpj = ref('')
const openingDate = ref('')
const password = ref('')
const isNextStepDisabled = ref(false);
const errors = ref([]);

const checkNextStepDisabled = () => {
    switch (currentStep.value) {
        case 1:
            isNextStepDisabled.value = !email.value || !personType.value || errors.value.length > 0;
            break;
        case 2:
            if (personType.value === 1) {
                isNextStepDisabled.value = !name.value || !cpf.value || !birthDate.value || !phone.value || errors.value.length > 0;
            } else {
                isNextStepDisabled.value = !companyName.value || !cnpj.value || !openingDate.value || !phone.value || errors.value.length > 0;
            }
            break;
        case 3:
            isNextStepDisabled.value = !password.value || errors.value.length > 0;
            break;
        default:
            isNextStepDisabled.value = false;
    }
};

watchEffect(() => {
    checkNextStepDisabled();
});

export function useSteps() {

    const resetData = () => {
        email.value = '';
        personType.value = null;
        name.value = '';
        cpf.value = '';
        birthDate.value = '';
        phone.value = '';
        companyName.value = '';
        cnpj.value = '';
        openingDate.value = '';
        password.value = '';
        currentStep.value = 1;
        errors.value = [];
    }

    const nextStep = async () => {
        if (currentStep.value === totalSteps.value) {
            await actionStep()
            return;
        }
        currentStep.value += 1;
    }
    const prevStep = () => {
        currentStep.value -= 1;
    }
    const handleInputError = (errorLabel, isValid) => {
        if (!isValid && !errors.value.includes(errorLabel)) {
            errors.value.push(errorLabel);
        } else if (isValid && errors.value.includes(errorLabel)) {
            errors.value = errors.value.filter(error => error !== errorLabel);
        }
    };

    const actionStep = async () => {
        try{
            const data = await fetch('/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email.value,
                    personType: personType.value,
                    ...(personType.value === 1 && {
                        name: name.value,
                        cpf: cpf.value,
                        birthDate: birthDate.value
                      }), 
                      ...(personType.value === 2 && {
                        companyName: companyName.value,
                        cnpj: cnpj.value,
                        openingDate: openingDate.value,
                      }),               
                    phone: phone.value,
                    password: password.value,
                }),
            });
            const response = await data.json()
            alert(response.message)
            resetData()
        }catch(error){
            alert(error.message)
        }
    }
    return {
        email,
        personType,
        name,
        cpf,
        birthDate,
        phone,
        companyName,
        cnpj,
        openingDate,
        password,
        currentStep,
        totalSteps,
        nextStep,
        prevStep,
        isNextStepDisabled,
        handleInputError
    }
}