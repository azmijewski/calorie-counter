import {Meal} from './meal';
import {UserProduct} from './user-product';

export interface MealWithProducts {
  mealDto: Meal;
  products: Array<UserProduct>;
}
