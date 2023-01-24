import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable }    from 'rxjs';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) { 
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.loginForm = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'name': [null, Validators.required],
      'password': [null, [Validators.required, this.checkPassword]],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'validate': ''
    });
  }

  ngOnInit() {
   
}

get name() {
  return this.loginForm.get('name') as FormControl
}

checkPassword(control: any) {
  let enteredPassword = control.value
  let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
}

checkInUseEmail(control: any) {
  // mimic http database access
  let db = ['tony@gmail.com'];
  return new Observable(observer => {
    setTimeout(() => {
      let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
      observer.next(result);
      observer.complete();
    }, 4000)
  })
}

getErrorEmail() {
  return this.loginForm.get('email')?.hasError('required') ? 'Field is required' :
    this.loginForm.get('email')?.hasError('pattern') ? 'Not a valid emailaddress' :
      this.loginForm.get('email')?.hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
}

getErrorPassword() {
  return this.loginForm.get('password')?.hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
    this.loginForm.get('password')?.hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
}

onSubmit(post: any) {
  this.post = post;
}

}
