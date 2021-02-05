import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  // contactusForm = new FormGroup({
  //   person: new FormGroup({
  //     firstname: new FormControl(''),
  //     lastname: new FormControl('')
  //   }),
  //   email: new FormControl(''),
  //   gender: new FormControl('')
  // });

  contactusForm = this.fb.group({
    person: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    }),
    email: ['', Validators.required],
    gender: ['']
  });

  constructor(private fb: FormBuilder) { }

  updateValues(){
    this.contactusForm.patchValue({
      person: {
        firstname: "César",
        lastname: "Alcántara"
      },
      email: "cesaralcantara@gmail.com",
      gender: "M"
    })
  }

  cleanValues(){
    this.contactusForm.reset();
  }

  onSubmit(){
    console.log(this.contactusForm.value)
  }

  ngOnInit(): void {
  }

}
