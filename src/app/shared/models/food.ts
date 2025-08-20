export class Food{
  id!: string;
  name!: string;
  price!: string;
  tags?: string[];
  favorite!:boolean;
  stars!:number;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;
  describtion?: string;
  intergredients?: string[];
  quantity?: number;
  category?: string;
}
