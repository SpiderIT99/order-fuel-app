import { FormGroup, FormArray, FormControl } from '@angular/forms';

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

export function getValidationMessage(validator: string,
    validatorValue?: any): string {
    // const messages = {
    //     required: 'Wymagane',
    //     email: 'Email jest nieprawidowy',
    //     minlength: 'Min dugo: ' + validatorValue.requiredLength,
    //     maxlength: 'Max dugo: ' + validatorValue.requiredLength,
    //     min: 'Min warto: ' + validatorValue.min,
    //     max: 'Max warto ' + validatorValue.max,
    // };
    return validator;
}
