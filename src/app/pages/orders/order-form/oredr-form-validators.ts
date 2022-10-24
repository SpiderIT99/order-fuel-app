import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';

export function validateAllFormFields(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl || (control instanceof FormArray
            && !(control.controls.length > 0))) {
            control.markAsTouched({ onlySelf: true });
            control.updateValueAndValidity({ onlySelf: true });
        } else if ((control instanceof FormGroup) || (control instanceof
            FormArray)) {
            validateAllFormFields(control);
        }
    });
    formGroup.updateValueAndValidity();
}

export function validateSingleFormField(fieldForm: FormControl) {
    fieldForm.markAsTouched({ onlySelf: true });
    fieldForm.updateValueAndValidity({ onlySelf: true });
};

//validation email
export function validatorEmail(AC: AbstractControl) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (AC.value === null) {
        return null;
    }
    return AC.value.indexOf('@') > 64 || AC.value.length > 255 || !regex.
        test(AC.value) ? { 'email': true } : null;
}

// validation variant "xxx-xxx-xxx" for phone numbers
export function validatorPhone(AC: AbstractControl) {
    const regex = /^([0-9]{3}[\-]{1}[0-9]{3}[\-]{1}[0-9]{3})$/;
    if (AC.value === null) {
        return null;
    }
    return !regex.test(AC.value) ? { 'phone': true } : null;
}

// validation variant "xxxxxxxxx" for phone numbers
// export function validatorPhone(AC: AbstractControl) { 
//     const regex = /^([0-9]{9})$/;
//     if (AC.value === null) {
//         return null;
//     }
//     return !regex.test(AC.value) ? { 'phone': true } : null;
// }

// validation variant "xxx-xxx-xxx" or "xxxxxxxxx" for phone numbers
// export function validatorPhone(AC: AbstractControl) {
//     const regex = /^(([0-9]{3}[\-]{1}[0-9]{3}[\-]{1}[0-9]{3})|([0-9]{9}))$/;
//     if (AC.value === null) {
//         return null;
//     }
//     return !regex.test(AC.value) ? { 'phone': true } : null;
// }

// validation negative and positive numbers
export function validatorOnlyNumbers(AC: AbstractControl) {
    const regex = /^([\-]{0,1}[0-9]{1,})$/;
    if (AC.value === null) {
        return null;
    }
    return !regex.test(AC.value) ? { 'onlyNumbers': true } : null;
}

// validation variant "xx-xxx" for the Polish postal code
export function validatorPostalCode(AC: AbstractControl) {
    const regex = /^([0-9]{2}[\-]{1}[0-9]{3})$/;
    if (AC.value === null) {
        return null;
    }
    return !regex.test(AC.value) ? { 'postalCode': true } : null;
}

// validation variant from 1 to 3 numbers with or without a letter for houses
export function validatorBuildingNumber(AC: AbstractControl) {
    const regex = /^([0-9]{1,3}[a-zA-Z]{0,1})$/;
    if (AC.value === null) {
        return null;
    }
    return !regex.test(AC.value) ? { 'buildingNumber': true } : null;
}

// validation variant from 1 to 3 numbers + "/" + from 1 to 3 numbers for flats
// export function validatorBuildingNumber(AC: AbstractControl) {
//     const regex = /^([0-9]{1,3}[\/]{1}[0-9]{1,3})$/;
//     if (AC.value === null) {
//         return null;
//     }
//     return !regex.test(AC.value) ? { 'buildingNumber': true } : null;
// }

// variant for houses and flats
// export function validatorBuildingNumber(AC: AbstractControl) {
//     const regex = /^(([0-9]{1,3}[a-zA-Z]{0,1})|([0-9]{1,3}[\/]{1}[0-9]{1,3}))$/;
//     if (AC.value === null) {
//         return null;
//     }
//     return !regex.test(AC.value) ? { 'buildingNumber': true } : null;
// }

export interface IMessage {
    required: string;
    email: string;
    minlength: string;
    maxlength: string,
    min: string,
    max: string,
    phone: string,
    onlyNumbers: string,
    postalCode: string,
    buildingNumber: string
}

export function getValidationMessage(validator: string,
    validatorValue?: any): string {
    const messages: IMessage = {
        required: 'Pole jest wymagane',
        email: 'Email jest nieprawidowy',
        minlength: 'Minimalna długość to ' + validatorValue.requiredLength + ' znaków',
        maxlength: 'Maksymalna długość to ' + validatorValue.requiredLength + ' znaków',
        min: 'Minimalna wartość to: ' + validatorValue.min,
        max: 'Maksymalna wartość to: ' + validatorValue.max,
        phone: 'Podaj nr tel. w formaci xxx-xxx-xxx',
        onlyNumbers: 'Użyj tylko liczb',
        postalCode: 'Wprowadź Polski kod pocztowy',
        buildingNumber: 'Podaj od 1 do 3 cyfr z lub bez litery'
    };

    return messages[validator as keyof IMessage];
}