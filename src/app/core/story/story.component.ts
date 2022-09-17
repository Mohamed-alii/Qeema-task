import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  @Input() story:any;
  @Input() index:number = 0;


  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {}

}
