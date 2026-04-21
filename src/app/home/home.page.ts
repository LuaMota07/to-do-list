import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ⭐ IMPORTANTE

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule], // ⭐ AQUI
})
export class HomePage implements OnInit {

  // 📌 tarefas
  tasks: any[] = [];

  // ✏️ edição
  editingIndex: number | null = null;
  editedTitle: string = '';

  // 🌤️ clima
  weather: any;

  // 💬 frase
  quote: string = '';

  ngOnInit() {
    this.loadTasks();
    this.getWeather();
    this.getQuote();
  }

  // 🌤️ API clima
  async getWeather() {
    try {
      const res = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=Sao Paulo&appid=e9549c32d60e8d077dd621f30be16bb2&units=metric&lang=pt_br'
      );
      const data = await res.json();
      this.weather = data;
    } catch (error) {
      console.error('Erro ao buscar clima:', error);
    }
  }

  // 💬 API frase
  async getQuote() {
    try {
      const res = await fetch('https://zenquotes.io/api/random');
      const data = await res.json();
      this.quote = data[0].q;
    } catch (error) {
      console.error('Erro ao buscar frase:', error);
    }
  }

  // ✅ marcar tarefa
  toggleTask(task: any) {
    task.done = !task.done;
    this.saveTasks();
  }

  // 🗑️ deletar tarefa
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  // ✏️ iniciar edição
  startEdit(task: any, index: number) {
    this.editingIndex = index;
    this.editedTitle = task.title;
  }

  // 💾 salvar edição
  saveEdit(index: number) {
    if (!this.editedTitle) return;

    this.tasks[index].title = this.editedTitle;
    this.editingIndex = null;
    this.saveTasks();
  }

  // 💾 salvar no LocalStorage
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  // 📥 carregar tarefas
  loadTasks() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  }
}