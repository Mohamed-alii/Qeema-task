import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faBell, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faBell = faBell;
  faCloudArrowUp = faCloudArrowUp;

  constructor() { }

  ngOnInit(): void {
  }

}
