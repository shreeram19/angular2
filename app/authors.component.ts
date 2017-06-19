import {Component} from 'angular2/core';
import {AuthorService} from './author.service'
@Component({
    selector:'author',
    template:`
        <h2> This is ur {{componentName}}</h2>
        <ul>
            <li *ngFor= "#author of authors" >{{author}}</li>
        </ul>
    `,
    providers:[AuthorService]  
})


export class AuthorsComponent {
    componentName : String = `Author`;
    authors;
    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthor();
    }
}