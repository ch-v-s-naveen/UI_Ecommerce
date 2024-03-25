import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css'],
})
export class AdminsignupComponent implements OnInit {
  constructor(private service: AdminService, private route: Router) {}

  j: String = '';
  adminUserType: String = '100001';
  bootbox: any;

  ngOnInit(): void {}
  saveAdmin(admin: any) {
    alert('Admin SignUp');
    admin.control.patchValue({ userDTO: { userType: '100001' } });

    this.service.registerUser(JSON.stringify(admin.value.userDTO));
    this.route.navigate(['/admin/login']);
  }
}
