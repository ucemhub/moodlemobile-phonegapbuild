webpackJsonp([103],{1734:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"AddonCompetencyCompetencyPageModule",function(){return d});var o=t(0),c=t(3),r=t(2),i=t(16),a=t(15),s=t(75),p=t(1850),m=this&&this.__decorate||function(e,n,t,o){var c,r=arguments.length,i=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,o);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(i=(r<3?c(i):r>3?c(n,t,i):c(n,t))||i);return r>3&&i&&Object.defineProperty(n,t,i),i},d=function(){function e(){}return e=m([Object(o.I)({declarations:[p.a],imports:[i.a,a.a,s.a,c.l.forChild(p.a),r.b.forChild()]})],e)}()},1850:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var o=t(0),c=t(3),r=t(2),i=t(4),a=t(9),s=t(127),p=t(153),m=this&&this.__decorate||function(e,n,t,o){var c,r=arguments.length,i=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,o);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(i=(r<3?c(i):r>3?c(n,t,i):c(n,t))||i);return r>3&&i&&Object.defineProperty(n,t,i),i},d=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},l=this&&this.__param||function(e,n){return function(t,o){n(t,o,e)}},u=function(){function e(e,n,t,o,c,r,i){this.navCtrl=e,this.translate=t,this.sitesProvider=o,this.domUtils=c,this.svComponent=r,this.competencyProvider=i,this.competencyLoaded=!1,this.competencyId=n.get("competencyId"),this.planId=n.get("planId"),this.courseId=n.get("courseId"),this.userId=n.get("userId")}return e.prototype.ionViewDidLoad=function(){var e=this;this.fetchCompetency().then(function(){e.planId?e.competencyProvider.logCompetencyInPlanView(e.planId,e.competencyId,e.planStatus,e.userId):e.competencyProvider.logCompetencyInCourseView(e.courseId,e.competencyId,e.userId)}).finally(function(){e.competencyLoaded=!0})},e.prototype.fetchCompetency=function(){var e,n=this;return this.planId?(this.planStatus=null,e=this.competencyProvider.getCompetencyInPlan(this.planId,this.competencyId)):e=this.courseId?this.competencyProvider.getCompetencyInCourse(this.courseId,this.competencyId,this.userId):Promise.reject(null),e.then(function(e){n.competency=e.usercompetencysummary,n.planId?(n.planStatus=e.plan.status,n.competency.usercompetency.statusname=n.getStatusName(n.competency.usercompetency.status)):(n.competency.usercompetency=n.competency.usercompetencycourse,n.coursemodules=e.coursemodules),n.competency.user.id!=n.sitesProvider.getCurrentSiteUserId()&&(n.competency.user.profileimageurl=n.competency.user.profileimageurl||!0,n.user=n.competency.user),n.competency.evidence.forEach(function(e){if(e.descidentifier){e.description=n.translate.instant("addon.competency."+e.descidentifier,{$a:e.desca})}})}).catch(function(e){n.domUtils.showErrorModalDefault(e,"Error getting competency data.")})},e.prototype.getStatusName=function(e){var n;switch(e){case p.a.REVIEW_STATUS_IDLE:n="idle";break;case p.a.REVIEW_STATUS_IN_REVIEW:n="inreview";break;case p.a.REVIEW_STATUS_WAITING_FOR_REVIEW:n="waitingforreview";break;default:return String(e)}return this.translate.instant("addon.competency.usercompetencystatus_"+n)},e.prototype.refreshCompetency=function(e){var n=this;return(this.planId?this.competencyProvider.invalidateCompetencyInPlan(this.planId,this.competencyId):this.competencyProvider.invalidateCompetencyInCourse(this.courseId,this.competencyId)).finally(function(){n.fetchCompetency().finally(function(){e.complete()})})},e.prototype.openCompetencySummary=function(e){(this.svComponent?this.svComponent.getMasterNav():this.navCtrl).push("AddonCompetencyCompetencySummaryPage",{competencyId:e})},e.prototype.openUserProfile=function(e){(this.svComponent?this.svComponent.getMasterNav():this.navCtrl).push("CoreUserProfilePage",{userId:e,courseId:this.courseId})},e=m([Object(o.m)({selector:"page-addon-competency-competency",template:'<ion-header>\n    <ion-navbar>\n        <ion-title *ngIf="competency">{{ competency.competency.competency.shortname }} <small>{{ competency.competency.competency.idnumber }}</small></ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="competencyLoaded" (ionRefresh)="refreshCompetency($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]="competencyLoaded">\n        <ion-card *ngIf="user">\n            <ion-item text-wrap>\n                <ion-avatar *ngIf="user.profileimageurl && user.profileimageurl !== true" item-start>\n                    <img  [src]="user.profileimageurl" [alt]="\'core.pictureof\' | translate:{$a: user.fullname}" core-external-content>\n                </ion-avatar>\n                <span *ngIf="user.profileimageurl === true" item-start>\n                    <ion-icon name="person"></ion-icon>\n                </span>\n                <h2><core-format-text [text]="user.fullname"></core-format-text></h2>\n            </ion-item>\n        </ion-card>\n\n        <ion-card *ngIf="competency">\n            <ion-item text-wrap *ngIf="competency.competency.competency.description">\n                <core-format-text [text]="competency.competency.competency.description"></core-format-text>\n            </ion-item>\n            <ion-item text-wrap>\n                <strong>{{ \'addon.competency.path\' | translate }}</strong>:\n                {{ competency.competency.comppath.framework.name }}\n                <span *ngFor="let ancestor of competency.competency.comppath.ancestors">\n                    &nbsp;/&nbsp;<a (click)="openCompetencySummary(ancestor.id)">{{ ancestor.name }}</a>\n                </span>\n            </ion-item>\n            <ion-item text-wrap>\n                <strong>{{ \'addon.competency.crossreferencedcompetencies\' | translate }}</strong>:\n                <div *ngIf="!competency.competency.hasrelatedcompetencies">{{ \'addon.competency.nocrossreferencedcompetencies\' | translate }}</div>\n                <div *ngIf="competency.competency.hasrelatedcompetencies">\n                    <p *ngFor="let relatedcomp of competency.competency.relatedcompetencies">\n                        <a (click)="openCompetencySummary(relatedcomp.id)">\n                            {{ relatedcomp.shortname }} - {{ relatedcomp.idnumber }}\n                        </a>\n                    </p>\n                </div>\n            </ion-item>\n            <ion-item text-wrap *ngIf="coursemodules">\n                <strong>{{ \'addon.competency.activities\' | translate }}</strong>:\n                <span *ngIf="coursemodules.length == 0">\n                    {{ \'addon.competency.noactivities\' | translate }}\n                </span>\n                <a ion-item text-wrap *ngFor="let activity of coursemodules" [href]="activity.url" [title]="activity.name">\n                    <img item-start core-external-content [src]="activity.iconurl" alt="" role="presentation" *ngIf="activity.iconurl" class="core-module-icon">\n                    <core-format-text [text]="activity.name"></core-format-text>\n                </a>\n            </ion-item>\n            <ion-item text-wrap *ngIf="competency.usercompetency.status">\n                <strong>{{ \'addon.competency.reviewstatus\' | translate }}</strong>:\n                {{ competency.usercompetency.statusname }}\n            </ion-item>\n            <ion-item text-wrap>\n                <strong>{{ \'addon.competency.proficient\' | translate }}</strong>:\n                <ion-badge color="success" *ngIf="competency.usercompetency.proficiency">\n                    {{ \'core.yes\' | translate }}\n                </ion-badge>\n                <ion-badge color="danger" *ngIf="!competency.usercompetency.proficiency">\n                    {{ \'core.no\' | translate }}\n                </ion-badge>\n            </ion-item>\n            <ion-item text-wrap>\n                <strong>{{ \'addon.competency.rating\' | translate }}</strong>:\n                <ion-badge color="dark">{{ competency.usercompetency.gradename }}</ion-badge>\n            </ion-item>\n        </ion-card>\n\n        <div *ngIf="competency">\n            <h3 margin-horizontal>{{ \'addon.competency.evidence\' | translate }}</h3>\n            <p margin-horizontal *ngIf="competency.evidence.length == 0">\n                {{ \'addon.competency.noevidence\' | translate }}\n            </p>\n            <ion-card *ngFor="let evidence of competency.evidence">\n                <a ion-item text-wrap *ngIf="evidence.actionuser" (click)="openUserProfile(evidence.actionuser.id)">\n                    <ion-avatar item-start>\n                        <img core-external-content [src]="evidence.actionuser.profileimageurlsmall" [alt]="\'core.pictureof\' | translate:{$a: evidence.actionuser.fullname}" role="presentation">\n                    </ion-avatar>\n                    <h2>{{ evidence.actionuser.fullname }}</h2>\n                    <p>{{ evidence.timemodified | coreToLocaleString }}</p>\n                </a>\n                <ion-item text-wrap>\n                    <p><ion-badge color="dark">{{ evidence.gradename }}</ion-badge></p>\n                    <p margin-top *ngIf="evidence.description">{{ evidence.description }}</p>\n                    <blockquote *ngIf="evidence.note"><core-format-text [text]="evidence.note"></core-format-text></blockquote>\n                </ion-item>\n            </ion-card>\n        </div>\n    </core-loading>\n</ion-content>\n'}),l(5,Object(o.N)()),d("design:paramtypes",[c.q,c.r,r.c,i.a,a.a,s.a,p.a])],e)}()}});