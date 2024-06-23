import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-insert-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './insert-users.component.html',
  styleUrls: ['./insert-users.component.scss'],
})
export class InsertUsersComponent {}
