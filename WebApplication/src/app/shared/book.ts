import { Author } from "./author";
import { Genre } from "./genre";

export class Book {
    Id: number;
    Title: string;
    Description: string;
    Publisher: string;
    Genre: Genre;
    Author: Author;
    ImgPath: any
}
