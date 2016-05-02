System.register(['angular2/core', 'angular2/router', './home.component', './join.component', './members.component', './memberdetails.component', './experience.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, join_component_1, members_component_1, memberdetails_component_1, experience_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (join_component_1_1) {
                join_component_1 = join_component_1_1;
            },
            function (members_component_1_1) {
                members_component_1 = members_component_1_1;
            },
            function (memberdetails_component_1_1) {
                memberdetails_component_1 = memberdetails_component_1_1;
            },
            function (experience_component_1_1) {
                experience_component_1 = experience_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/join', name: 'Join', component: join_component_1.JoinComponent },
                        { path: '/members', name: 'Members', component: members_component_1.MembersComponent },
                        { path: '/memberdetails/:id', name: 'MemberDetails', component: memberdetails_component_1.MemberDetailsComponent },
                        { path: '/experience', name: 'Experience', component: experience_component_1.ExperienceComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map