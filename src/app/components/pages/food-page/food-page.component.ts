import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  // ActivatedRoute to read Food ID from the route Bar
  constructor(activatedRoute:ActivatedRoute,foodService:FoodService) { }

  ngOnInit(): void {
  }

}
