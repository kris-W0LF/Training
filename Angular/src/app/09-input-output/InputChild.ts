import{Component,Input} from '@angular/core';

@Component({
    selector:'app-child',
    standalone:true,
    templateUrl:'./InputChild.html'
})

export class ChildComponent{
    @Input() name:string="";
    @Input() age:number=0;
} 