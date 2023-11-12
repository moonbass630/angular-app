import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  clickMessage1 = '';
  onClickExec1() {
    this.clickMessage1 = 'You clicked Exec1!'
  }

  clickMessage2 = '';
  onClickExec2() {
    this.clickMessage2 = 'You clicked Exec2!'
  }
}
