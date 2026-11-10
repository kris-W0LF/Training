import{Component,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'app-child',
    standalone:true,
    templateUrl:'./OutputChild.html'
})

export class ChildComponent{
    @Output() sendData=new EventEmitter<string>();

    sendMessage():void{
        this.sendData.emit("Hello Parent");
    }


}