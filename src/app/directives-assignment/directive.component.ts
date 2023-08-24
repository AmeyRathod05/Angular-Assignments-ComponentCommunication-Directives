import { Component } from "@angular/core";


@Component({
    selector : 'directive-component',
    templateUrl : './directive.component.html',
    styleUrls : ['./directive.component.css']

})
export class DirectiveComponent {

    showParagraph = false;
    log: any[] = [];

    onToggleDetails (){
        this.showParagraph = !this.showParagraph;
        // this.log.push(this.log.length + 1);
        this.log.push(new Date());
    }

    oddNumbers = [1,3,5];
evenNumbers = [2,4];
onlyOdd = false;
}