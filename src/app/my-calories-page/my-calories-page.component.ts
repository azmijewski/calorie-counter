import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-my-calories-page',
  templateUrl: './my-calories-page.component.html',
  styleUrls: ['./my-calories-page.component.css']
})
export class MyCaloriesPageComponent implements OnInit {


  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }


  click(): void {
    console.log('Wybrana data: ' + this.date);
  }

}
