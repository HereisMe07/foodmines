import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() { }

  @Input()
  title!: string;

  @Input()
    // 1rem from top, 0 from the right, 1rem from the bottom, 0 from the left 
  margin?= '1rem 0 1rem 0.2rem';
  
  @Input()
  fontSize?= '1.7rem';

  ngOnInit(): void {
  }

}
