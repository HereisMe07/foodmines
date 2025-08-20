import { Food } from "./app/shared/models/food";
import { Tag } from "./app/shared/models/Tag";

export const sample_foods: Food[] = [
    {
        id: "1",
        name: "Pizza",
        price: "10.99",
        tags: ["FastFood", "Pizza", "Lunch"],
        favorite: false,
        stars: 4.5,
        imageUrl: "assets/food-1.jpg",
        origins: ["india", "asia"],
        cookTime: "20-30 minutes"
    },
    {
        id: "2",
        name: "Meat Ball",
        price: "8.99",
        tags: ["FastFood", "Burger", "Lunch"],
        favorite: true,
        stars: 4.0,
        imageUrl: "assets/food-2.jpg",
        origins: ["india", "asia"],
        cookTime: "15-20 minutes"
    },
    {
        id: "3",
        name: "Burger",
        price: "12.99",
        tags: ["Japanese", "Sushi", "Dinner"],
        favorite: false,
        stars: 4.8,
        imageUrl: "assets/food-3.jpg",
        origins: ["india", "asia"],
        cookTime: "30-40 minutes"
    },
    {
        id: "4",
        name: "Potato",
        price: "9.99",
        tags: ["Italian", "Pasta", "Dinner"],
        favorite: true,
        stars: 4.2,
        imageUrl: "assets/food-4.jpg",
        origins: ["india", "asia"],
        cookTime: "25-35 minutes"
    },
    {
        id: "5",
        name: "Chicker Soup",
        price: "7.99",
        tags: ["Healthy", "Salad", "Lunch"],
        favorite: false,
        stars: 4.1,
        imageUrl: "assets/food-5.jpg",
        origins: ["india", "asia"],
        cookTime: "10-15 minutes"
    },
    {
        id: "6",
        name: "Vegetables Pizza",
        price: "11.99",
        tags: ["FastFood", "Pizza", "Lunch"],
        favorite: false,
        stars: 4.0,
        imageUrl: "assets/food-6.jpg",
        origins: ['italy'],
        cookTime: "20-25 minutes"
    }
]

export const sample_tags: Tag[] = [
    { name: "All", count: 6 },
    { name: "FastFood", count: 4 },
    { name: "Pizza", count: 2 },
    { name: "Lunch", count: 3 },
    { name: "SlowFood", count: 2 },
    { name: "Hamburger", count: 1 },
    { name: "Fry", count: 1 },
    { name: "Soup", count: 1 }
]