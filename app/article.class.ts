export class Article {
 link: String;
    votes: number;
    title: String;

    constructor(link: String , votes : number, title : String) {
this.link = link;
this.votes =  votes || 0;
this.title =  title;
    }
upvote() {
    this.votes += 1;
    return false;
}

downvote() {
    this.votes -= 1;
    return false;
}
}
