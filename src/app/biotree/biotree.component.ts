import { Component, OnInit } from '@angular/core';
import {BiotreeLink} from '../models/biotree-link';

@Component({
  selector: 'app-biotree',
  templateUrl: './biotree.component.html',
  styleUrls: ['./biotree.component.css']
})
export class BiotreeComponent implements OnInit {
  biotreeLinks: BiotreeLink[] = [];

  constructor() { }

  ngOnInit() {
  }

}
