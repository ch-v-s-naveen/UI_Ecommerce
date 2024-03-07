import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css'],
})
export class AdminsignupComponent implements OnInit {
  constructor(private service: AdminService) {}

  j: String = '';
  adminUserType: String = '100001';

  ngOnInit(): void {}
  saveAdmin(admin: any) {
    alert('Admin SignUp');
    admin.control.patchValue({ userDTO: { userType: '100001' } });
    console.log(admin.value);
    console.log(admin.value.userDTO.firstName);
    console.log(admin.value.userDTO.userType);
    console.log(JSON.stringify(admin.value));
    console.log(JSON.stringify(admin.value.userDTO));
    this.service.registerUser(JSON.stringify(admin.value.userDTO));
  }
}
