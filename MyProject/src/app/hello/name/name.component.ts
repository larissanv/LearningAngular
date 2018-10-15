import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  name: string;

  constructor() { }

  onEnter(value: string){
    this.name = value;
  }

  ngOnInit() {
  }

}
