import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selsect',
  templateUrl: './selsect.component.html',
  styleUrls: ['./selsect.component.css'],
})
export class SelsectComponent {
  @Input() title: string = '';
  @Input() data: any[] = [];
  @Output() selectedValue = new EventEmitter()

  det(event: any) {
    this.selectedValue.emit(event)
  }
}
