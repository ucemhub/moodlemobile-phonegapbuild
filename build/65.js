webpackJsonp([65],{1778:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"AddonModQuizAttemptPageModule",function(){return c});var n=i(0),a=i(3),o=i(2),r=i(16),d=i(15),u=i(1894),s=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(a=t[d])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},c=function(){function t(){}return t=s([Object(n.I)({declarations:[u.a],imports:[r.a,d.a,a.l.forChild(u.a),o.b.forChild()]})],t)}()},1894:function(t,e,i){"use strict";i.d(e,"a",function(){return c});var n=i(0),a=i(3),o=i(9),r=i(88),d=i(239),u=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(a=t[d])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e,i,n){this.domUtils=e,this.quizProvider=i,this.quizHelper=n,this.component=r.a.COMPONENT,this.attemptId=t.get("attemptId"),this.quizId=t.get("quizId"),this.courseId=t.get("courseId")}return t.prototype.ngOnInit=function(){var t=this;this.fetchQuizData().finally(function(){t.loaded=!0})},t.prototype.doRefresh=function(t){this.refreshData().finally(function(){t.complete()})},t.prototype.fetchQuizData=function(){var t=this;return this.quizProvider.getQuizById(this.courseId,this.quizId).then(function(e){return t.quiz=e,t.componentId=t.quiz.coursemodule,t.fetchAttempt()}).catch(function(e){t.domUtils.showErrorModalDefault(e,"addon.mod_quiz.errorgetattempt",!0)})},t.prototype.fetchAttempt=function(){var t,e,i=this,n=[];return n.push(this.quizProvider.getUserAttempts(this.quizId).then(function(t){for(var e=0;e<t.length;e++){var n=t[e];if(n.id==i.attemptId){i.attempt=n;break}}return i.attempt?i.quizProvider.loadFinishedOfflineData([i.attempt]):Promise.reject(null)})),n.push(this.quizProvider.getCombinedReviewOptions(this.quiz.id).then(function(e){t=e})),n.push(this.quizProvider.getQuizAccessInformation(this.quiz.id).then(function(t){if((e=t).canreviewmyattempts)return i.quizProvider.getAttemptReview(i.attemptId,-1).catch(function(){e.canreviewmyattempts=!1})})),Promise.all(n).then(function(){i.quizHelper.setQuizCalculatedData(i.quiz,t),i.quiz.showReviewColumn=e.canreviewmyattempts,i.quizHelper.setAttemptCalculatedData(i.quiz,i.attempt,!1);var n=Number(i.attempt.rescaledGrade);if(i.quiz.showFeedbackColumn&&i.quizProvider.isAttemptFinished(i.attempt.state)&&t.someoptions.overallfeedback&&!isNaN(n))return i.quizProvider.getFeedbackForGrade(i.quiz.id,n).then(function(t){i.attempt.feedback=t.feedbacktext});delete i.attempt.feedback})},t.prototype.refreshData=function(){var t=this,e=[];return e.push(this.quizProvider.invalidateQuizData(this.courseId)),e.push(this.quizProvider.invalidateUserAttemptsForUser(this.quizId)),e.push(this.quizProvider.invalidateQuizAccessInformation(this.quizId)),e.push(this.quizProvider.invalidateCombinedReviewOptionsForUser(this.quizId)),e.push(this.quizProvider.invalidateAttemptReview(this.attemptId)),this.attempt&&void 0!==this.attempt.feedback&&e.push(this.quizProvider.invalidateFeedback(this.quizId)),Promise.all(e).catch(function(){}).then(function(){return t.fetchQuizData()})},t=u([Object(n.m)({selector:"page-addon-mod-quiz-attempt",template:'<ion-header>\n    <ion-navbar>\n        <ion-title><core-format-text *ngIf="quiz" [text]="quiz.name"></core-format-text></ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="loaded" (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]="loaded">\n        <ion-list *ngIf="attempt">\n            <ion-item text-wrap>\n                <p class="item-heading">{{ \'addon.mod_quiz.attemptnumber\' | translate }}</p>\n                <p *ngIf="attempt.preview">{{ \'addon.mod_quiz.preview\' | translate }}</p>\n                <p *ngIf="!attempt.preview">{{ attempt.attempt }}</p>\n            </ion-item>\n            <ion-item text-wrap>\n                <p class="item-heading">{{ \'addon.mod_quiz.attemptstate\' | translate }}</p>\n                <p *ngFor="let sentence of attempt.readableState">{{ sentence }}</p>\n            </ion-item>\n            <ion-item text-wrap *ngIf="quiz.showMarkColumn && attempt.readableMark !== \'\'">\n                <p class="item-heading">{{ \'addon.mod_quiz.marks\' | translate }} / {{ quiz.sumGradesFormatted }}</p>\n                <p>{{ attempt.readableMark }}</p>\n            </ion-item>\n            <ion-item text-wrap *ngIf="quiz.showGradeColumn && attempt.readableGrade !== \'\'">\n                <p class="item-heading">{{ \'addon.mod_quiz.grade\' | translate }} / {{ quiz.gradeFormatted }}</p>\n                <p>{{ attempt.readableGrade }}</p>\n            </ion-item>\n            <ion-item text-wrap *ngIf="quiz.showFeedbackColumn && attempt.feedback">\n                <p class="item-heading">{{ \'addon.mod_quiz.feedback\' | translate }}</p>\n                <p><core-format-text [component]="component" [componentId]="componentId" [text]="attempt.feedback"></core-format-text></p>\n            </ion-item>\n            <ion-item *ngIf="quiz.showReviewColumn && attempt.finished">\n                <button ion-button block icon-start [navPush]="\'AddonModQuizReviewPage\'" [navParams]="{courseId: courseId, quizId: quiz.id, attemptId: attempt.id}">\n                    <ion-icon name="search"></ion-icon>\n                    {{ \'addon.mod_quiz.review\' | translate }}\n                </button>\n            </ion-item>\n            <ion-item text-wrap class="core-danger-item" *ngIf="!quiz.showReviewColumn">\n                <p>{{ \'addon.mod_quiz.noreviewattempt\' | translate }}</p>\n            </ion-item>\n        </ion-list>\n    </core-loading>\n</ion-content>\n'}),s("design:paramtypes",[a.r,o.a,r.a,d.a])],t)}()}});