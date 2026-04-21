import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AddTaskPage {

  title: string = '';

  constructor(private router: Router) {}

  saveTask() {
    if (!this.title) return;

    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    tasks.push({ title: this.title, done: false });

    localStorage.setItem('tasks', JSON.stringify(tasks));

    this.router.navigate(['/home']);
  }
}