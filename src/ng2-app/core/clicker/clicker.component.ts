import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng2-clicker',
  template: `
    <div class="bg-info">
      <p>Name: {{name}}</p>
      <button (click)="onClick()">Click me!</button>
    </div>
  `,
  styles: [
    'div { padding: 25px; }'
  ]
})
export class ClickerComponent {
  @Input() name: string;
  @Output() clicked = new EventEmitter<string>();

  onClick () {
    this.clicked.emit(this.name);
  }
}