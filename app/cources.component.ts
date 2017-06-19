import {Component} from 'angular2/core'
import {CourceService} from './cource.service'
import {AutoGrowDirective} from './auto-grow.directive'
@Component({
    selector:'cources',
    template:`
    <input type="text" my-autoGrow />
    <h2> {{title}} </h2>
    <ul>
    <li *ngFor="#cource of cources"> {{cource}}</li>
    </ul>
    `,
    providers:[CourceService],
    directives:[AutoGrowDirective]

})
export class CourcesComponent {
    title: String = `This is the title of this cource`;
    cources: Array<any>;

    constructor (courceService: CourceService){
        this.cources = courceService.getCourse();
    }
}