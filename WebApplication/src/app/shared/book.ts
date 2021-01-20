import { Author } from "./author";
import { Genre } from "./genre";

export class Book {
    id: number;
    title: string;
    description: string;
    publisher: string;
    genreId: Genre;
    authorId: Author;
    imgPath: any;
    price: number;
}
