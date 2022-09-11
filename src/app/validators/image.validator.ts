import { AbstractControl } from "@angular/forms";

export function imageValidate(control: AbstractControl) {
    if (control.value.endsWith('.jpeg') || control.value.endsWith('.jpg') || control.value.endsWith('.png') || control.value.endsWith('.gif')) {
        return null;
    }
    else {
        return { invalidImage: true }
    }
}
