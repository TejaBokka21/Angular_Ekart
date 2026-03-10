import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters-bot',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  @Input()
  All: number = 0;
  @Input()
  Instocks: number = 0;
  @Input()
  Outofstocks: number = 0;
  @Output()
  changedSlectedFilterButton: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterButton: string = 'all';
  onChangedTheSelectedRadioButton() {
    console.log('mg');
    this.changedSlectedFilterButton.emit(this.selectedFilterButton);
  }
}
