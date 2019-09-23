import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users';

  firstName: string="Foo";
  lastName: string= "Bar";
  email: string="foobar@test.com"
  currentYear: number = 2019;
  
  //Button
  addUser: boolean=false;
  newUserAdded: boolean = false;

  //newUser: string = '';
  users: Array<object> = [];


  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.addUser = false;
   // this.newUserAdded = true;
  }

  // executed when Add Mountain is clicked
  onAddUser(): void {
    //this.users.push(`${this.firstName} - ${this.lastName}'. ${this.email}`);
    this.users.push({"firstName": this.firstName, "lastName": this.lastName, "email": this.email});
    this.newUserAdded = true;
  }

  // declare a method
  getCurrentYear(): number {
    return this.currentYear;
  }

  getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
  }

 

}

