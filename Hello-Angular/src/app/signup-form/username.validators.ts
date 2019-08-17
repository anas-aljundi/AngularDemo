import { AbstractControl, ValidationErrors } from '@angular/forms';

// Custom Validation
export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    // Async Validator
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'anas') {
                    resolve({shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
