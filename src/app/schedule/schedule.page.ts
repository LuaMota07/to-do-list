import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class SchedulePage {

  days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];

  times = [
    '08:00',
    '10:00',
    '12:00',
    '14:00',
    '16:00'
  ];

  schedule: any = {
    Seg: { '08:00': 'Estudo', '10:00': 'Trabalho' },
    Ter: { '12:00': 'Academia' },
  };

}