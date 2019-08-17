import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static validateOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== '12345') {
                    resolve({invalidOldPassword: true} );
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

    static passwordShouldMatch(control: AbstractControl): ValidationErrors | null {
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value) {
            return {passwordsShouldMatch: true};
        } else {
            return null;
        }
    }
}
