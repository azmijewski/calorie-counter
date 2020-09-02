import {UserProduct} from './user-product';

export interface UserProductList {
  products: Array<UserProduct>;
  totalCalories: number;
  calorieGoal: number;
  difference: number;
}
