import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(e: any) {
    console.log('changed', e.detail.name, e.detail.value);
  }
}
