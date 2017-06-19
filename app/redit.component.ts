import {Component} from 'angular2/core';
import {ReditArticleComponent} from './redit-article.component'
import {Article} from './article.class'



@Component({
    selector: 'redit',
    template:  `
    <form id="mainForm" class="" (submit)="submitForm(newTitle,newLink)">
    <label for="title-input" >Title:</label>
    <input required id="title-input" type="text" class="title-input input" #newTitle/>
     <label for="link-input" >LINK:</label>
    <input required id="link-input" type="text" class="link-input input" #newLink/>
    <button type="submit" class="submit-button" >Submit </button>

    <r-article *ngFor= "#article of sortArticle()"  [article]="article">Loading article....</r-article>

    </form>
    `,
    directives: [ReditArticleComponent]
})

export class ReditComponent {
    articles: Article[];
   
    constructor(){
        this.articles = [
new Article("www.facebook.com", 30, "Facebook social Media"),
new Article("www.google.com", 33, "Google Home Page ")
        ];

    }
    submitForm(title: HTMLInputElement , link: HTMLInputElement){
        console.log(`This is coming from form : title: ${title.value} link : ${link.value}`);
        this.articles.push(new Article(link.value, 0, title.value));
    }

    sortArticle () : Article[] {
return this.articles.sort(function(a,b) { return b.votes - a.votes});
    }
    
}