import { Author } from "./author";
import { Genre } from "./genre";

export class Book {
    i: number;
    title: string;
    description: string;
    publisher: string;
    genre: Genre;
    author: Author;
    imgPath: any
}
