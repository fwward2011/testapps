import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'member-details',
    templateUrl : 'app/memberdetails.html',
    directives: [ROUTER_DIRECTIVES]	
})

export class MemberDetailsComponent {
    
    constructor(private _router: Router){
        
    }
    
    movetopage(){
        this._router.navigate(['Members']);
    }
    
}