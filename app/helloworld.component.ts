import { Component } from 'angular2/core'
import {CourcesComponent} from './cources.component'
import {AuthorsComponent} from './authors.component'
@Component({
   selector:'hello',
   template:`
   <div> 
   Hello there is a {{author}} from my angualr 2
   <cources>Cources has not loaded</cources>
   <author>Athors are not loaded</author>
   </div>
   ` ,
   directives:[CourcesComponent,AuthorsComponent]
})

export class HelloComp {
    author: String ;

    constructor(){
        this.author = "something";
    }
}

