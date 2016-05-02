import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'members',
    templateUrl: 'app/members.html',
    directives: [ROUTER_DIRECTIVES]	
})

export class MembersComponent {
    teammembers: String[];
    
    constructor() {
        
    }
    
    ngOnInit() {
        this.teammembers = ['raja', 'steve', 'trevor'];
    }
    
}