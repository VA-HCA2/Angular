import { Component, OnInit } from '@angular/core';
import { UserService } from '../providers/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<string> = [];

  private sub: any;
  private userName: string = '';

  // propName: type = defaultValue
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  newUser: string = '';
  currentYear: number = 2019;

  // Just to display not on click
  newUserAdded = true;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // get username from Query Params
    // Subscribe to Observable
    // pass anonymoue callback function to subscribe method
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.userName = params['username'];
      });

    // call getMountains() method in MoutnainService
    this.userService.getUsers().subscribe((data) => {
      this.users = data.users;
    });
  }
  // declare a method
  getCurrentYear(): number {
    return this.currentYear;
  }

  getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
  }

  // when the Reset button is clicked
  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    //this.newUserAdded = false;
  }

  // when Add User is clicked
  onAddUser(): void {
    this.users = this.userService.addUser(this.firstName, this.lastName, this.email);
    this.newUserAdded = true;

  }

  onLogout() {
    this.router.navigate(['/']);
  }

}
