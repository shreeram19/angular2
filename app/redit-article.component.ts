import {Component} from 'angular2/core';
import {Article} from './article.class'



@Component({
selector : 'r-article',
inputs: ['article'],
template: `
<div class="article-wrapper">
<span class="title-article">  TITLE: {{article.title}} </span>
<span class="link-article"> Link :{{article.link}} </span>
<span class="votes"> Votes: {{article.votes}}</span>
<button type="button" (click) = "voteUP()"> Up vote </button>
<button type="button" (click) = "voteDown()"> Down vote </button>

</div>
`
})



export class ReditArticleComponent {
article : Article;

// constructor(){
//     this.article = new Article('www.google.com', 10 , 'Google home page');
// }

voteUP() {
    this.article.upvote();
    return false;
}
   voteDown(){
       this.article.downvote();
       return false;
   }

}