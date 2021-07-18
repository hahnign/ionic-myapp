import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form"

describe('LoginPageForm', () => {

  let loginPageForm: LoginPageForm;
  let form: FormGroup;

  beforeEach(() => {
    loginPageForm = new LoginPageForm(new FormBuilder);
    form = loginPageForm.createForm();
  })

  it('should create login form empty', () => {
    expect(form).not.toBeNull();
    expect(form.get('email')).not.toBeNull();
    expect(form.get('email').value).toEqual("");
    expect(form.get('email').valid).toBeFalsy();
    expect(form.get('password')).not.toBeNull();
    expect(form.get('password').value).toEqual("");
    expect(form.get('password').valid).toBeFalsy();
  })
  
  it('should have an invalid email when email is not valid', () => {
    form.get('email').setValue('Invalid Email');
    expect(form.get('email').valid).toBeFalsy();
  });
  
  it('should have a valid email when email is valid', () => {
    form.get('email').setValue('email@mail.com');
    expect(form.get('email').valid).toBeTruthy();
  });
  
  it('should have a valid form', () => {
    form.get('email').setValue('email@mail.com');
    form.get('password').setValue('1234');
    expect(form.valid).toBeTruthy();
  });
})