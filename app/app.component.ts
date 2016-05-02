import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home.component';
import {JoinComponent} from './join.component';
import {MembersComponent} from './members.component';
import {MemberDetailsComponent} from './memberdetails.component';
import {ExperienceComponent} from './experience.component';

@RouteConfig([
  {path: '/home', name:'Home', component: HomeComponent, useAsDefault: true},
  {path: '/join', name:'Join', component: JoinComponent},
  {path: '/members', name:'Members', component: MembersComponent},
  {path: '/memberdetails/:id', name:'MemberDetails', component: MemberDetailsComponent},
  {path: '/experience', name:'Experience', component: ExperienceComponent},  
  {path: '/*other', name:'Other', redirectTo: ['Home']}  
])

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
