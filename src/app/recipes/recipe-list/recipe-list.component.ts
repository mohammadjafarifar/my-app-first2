import { Component, OnInit } from '@angular/core';
import {recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes:recipe[]=[
   new recipe('Recipe Name','this is Recipe test'
     ,'https://cf.thereciperebel.com/wp-content/uploads/2018/04/creamy-italian-instant-pot-chicken-breasts-www.thereciperebel.com-600-12.jpg'),
   new recipe('Recipe Name','this is Recipe test'
     ,'https://cf.thereciperebel.com/wp-content/uploads/2018/04/creamy-italian-instant-pot-chicken-breasts-www.thereciperebel.com-600-12.jpg')

 ];
  constructor() { }

  ngOnInit() {
  }

}
