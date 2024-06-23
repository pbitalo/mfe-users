import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.scss'],
})
export class UpdateUsersComponent {}
