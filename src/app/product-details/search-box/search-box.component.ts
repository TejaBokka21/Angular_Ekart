import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @Output()
  onSerachTextChanged: EventEmitter<String> = new EventEmitter<string>();
  searchtext: string = '';
  @ViewChild('serachInput') serachTextEl: ElementRef;

  changeSearchtext() {
    this.searchtext = this.serachTextEl.nativeElement.value;
    this.onSerachTextChanged.emit(this.searchtext);
  }
  serachTextChanged() {}
}
