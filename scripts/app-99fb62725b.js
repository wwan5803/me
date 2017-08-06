/******/!function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}// webpackBootstrap
/******/
var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var i=n(1),a=n(2),o=n(3),r=n(4),s=n(5),l=n(6),c=n(7),d=n(8),u=n(9),p=n(10),g=n(11),v=n(12);angular.module("me",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr","angular-timeline","ngDraggable"]).constant("malarkey",malarkey).constant("moment",moment).config(i.config).config(a.routerConfig).run(r.runBlock).service("githubContributor",c.GithubContributorService).service("webDevTec",d.WebDevTecService).service("mainService",o.MainService).controller("MainController",s.MainController).controller("LandingController",l.LandingController).directive("acmeNavbar",u.NavbarDirective).directive("acmeProjects",p.ProjectsDirective).directive("acmeContact",g.ContactDirective).directive("acmeMalarkey",v.MalarkeyDirective)},function(e,t){"use strict";function n(e,t){"ngInject";e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}n.$inject=["$logProvider","toastrConfig"],Object.defineProperty(t,"__esModule",{value:!0}),t.config=n},function(e,t){"use strict";function n(e,t,n){"ngInject";e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/"),n.html5Mode(!0)}n.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});t.MainService=["$log","$http",function i(e,t){"ngInject";n(this,i),this.scrollTo=function(e){function t(){return self.pageYOffset?self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}function n(e){for(var t=document.getElementById(e),n=t.offsetTop,i=t;i.offsetParent&&i.offsetParent!=document.body;)i=i.offsetParent,n+=i.offsetTop;return n}var i=t(),a=n(e),o=a>i?a-i:i-a;if(100>o)return void scrollTo(0,a);var r=Math.round(o/100);r>=20&&(r=20);var s=Math.round(o/25),l=a>i?i+s:i-s,c=0;if(a>i)for(var d=i;a>d;d+=s)setTimeout("window.scrollTo(0, "+l+")",c*r),l+=s,l>a&&(l=a),c++;else for(var d=i;d>a;d-=s)setTimeout("window.scrollTo(0, "+l+")",c*r),l-=s,a>l&&(l=a),c++}}]},function(e,t){"use strict";function n(e){"ngInject";e.debug("runBlock end")}n.$inject=["$log"],Object.defineProperty(t,"__esModule",{value:!0}),t.runBlock=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.MainController=function(){function e(t,i,a,o){"ngInject";n(this,e),o.rain=!1,o.sunny=!1,o.snow=!1,this.awesomeThings=[],this.classAnimation="",this.creationDate=1492215601713,this.toastr=a,this.windowHeight=window.innerHeight,this.events=[{badgeClass:"success",badgeIconClass:"glyphicon-check",time:"1991",title:"Birth",content:"Start my trip"},{time:"2013",title:"Graduate from SCU",content:"Bachelor of information technology"},{badgeClass:"warning",badgeIconClass:"glyphicon-credit-card",time:"2014",title:"Graduate from USYD",content:"Master of software engineering"}],this.workEvents=[{badgeClass:"info",time:"12.10-13.1",title:"China grid",content:"IT help desk intern"},{badgeClass:"warning",badgeIconClass:"glyphicon-check",time:"14.12-15.2",title:"Posmil Software",content:"Sales consultant"},{badgeClass:"info",time:"15.1-15.6",title:"Sincere Real Estate",content:"Sales consultant"},{badgeClass:"warning",badgeIconClass:"glyphicon-credit-card",time:"15.6-now",title:"Sk8Tech",content:"Full-Stack developer"}],this.activate(t,i)}return e.$inject=["$timeout","webDevTec","toastr","$rootScope"],i(e,[{key:"activate",value:function(e,t){var n=this;this.getWebDevTec(t),e(function(){n.classAnimation="rubberBand"},4e3)}},{key:"getWebDevTec",value:function(e){this.awesomeThings=e.getTec(),angular.forEach(this.awesomeThings,function(e){e.rank=Math.random()})}},{key:"showToastr",value:function(){this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),this.classAnimation=""}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.LandingController=function(){function e(t,i,a,o){"ngInject";n(this,e)}return e.$inject=["$scope","webDevTec","toastr","$state"],i(e,[{key:"uniKeyCode",value:function(e){var t=e.which||e.keyCode;console.log(t)}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.GithubContributorService=function(){function e(t,i){"ngInject";n(this,e),this.$log=t,this.$http=i,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"}return e.$inject=["$log","$http"],i(e,[{key:"getContributors",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30;return this.$http.get(this.apiHost+"/contributors?per_page="+t).then(function(e){return e.data})["catch"](function(t){e.$log.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))})}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.WebDevTecService=function(){function e(){"ngInject";n(this,e),this.data=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"},{title:"ES6 (Babel formerly 6to5)",url:"https://babeljs.io/",description:"Turns ES6+ code into vanilla ES5, so you can use next generation features today.",logo:"babel.png"}]}return i(e,[{key:"getTec",value:function(){return this.data}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){"ngInject";var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:o,controllerAs:"vm",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.NavbarDirective=i;var o=function(){function e(t,i,a,o,r,s,l){"ngInject";n(this,e),this.relativeDate=t(this.creationDate).fromNow(),this.isNavCollapsed=!0,this.width=window.innerWidth,this.location=i,this.mainService=a,s.itemArray=[{image:"./assets/images/cloud2.png",isRain:!0,isSunny:!1,isSnow:!1},{image:"./assets/images/cloud3.png",isRain:!1,isSunny:!1,isSnow:!0},{image:"./assets/images/sun.png",isRain:!1,isSunny:!0,isSnow:!1}],s.selectItem=s.itemArray[0],l(function(){var e;e=Math.floor(4*Math.random()),s.selectItem=s.itemArray[e],s.selectItem.isRain?(r.rain=!0,r.snow=!1,r.sunny=!1):s.selectItem.isSnow?(r.snow=!0,r.rain=!1,r.sunny=!1):(r.sunny=!0,r.rain=!1,r.snow=!1),console.log(s.rain)},5e3)}return e.$inject=["moment","$location","mainService","$timeout","$rootScope","$scope","$interval"],a(e,[{key:"gotoSection",value:function(e){this.location.hash("bottom"),this.mainService.scrollTo(e)}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){"ngInject";var e={restrict:"E",templateUrl:"app/components/projects/projects.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0}),t.ProjectsDirective=i;var a=function o(e){"ngInject";n(this,o),this.width=window.innerWidth};a.$inject=["moment"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){"ngInject";var e={restrict:"E",templateUrl:"app/components/contact/contact.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0}),t.ContactDirective=i;var a=function o(e){"ngInject";n(this,o),this.width=window.innerWidth};a.$inject=["moment"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){"ngInject";function t(t,n,i,a){var o=void 0,r=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){r.type(e).pause()["delete"]()}),o=t.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(e){r.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){o()})}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:o,controllerAs:"vm"};return n}i.$inject=["malarkey"],Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.MalarkeyDirective=i;var o=function(){function e(t,i){"ngInject";n(this,e),this.$log=t,this.contributors=[],this.activate(i)}return e.$inject=["$log","githubContributor"],a(e,[{key:"activate",value:function(e){var t=this;return this.getContributors(e).then(function(){t.$log.info("Activated Contributors View")})}},{key:"getContributors",value:function(e){var t=this;return e.getContributors(10).then(function(e){return t.contributors=e,t.contributors})}}]),e}()}]),angular.module("me").run(["$templateCache",function(e){e.put("app/landing/landing.html",'<div class=container style="font-family: Comic Sans MS"><h2 class=text-center>Welcome</h2><div style="text-align: center; padding: 150px 0"><object><embed ng-src=assets/images/logo.svg width=50% height=50%></object></div></div>'),e.put("app/main/main.html",'<div class=container ng-class="{rain: rain, sunny: sunny, snow: snow}" style="font-family: Comic Sans MS" ng-style="{ minHeight: main.windowHeight}"><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><div class=row style="margin: 10px 30px"><div class="col-md-6 text-center" style="padding: 20px"><h3>Education</h3><timeline><timeline-event ng-repeat="event in main.events" side=alternate><timeline-badge class={{event.badgeClass}}>{{event.time}}</timeline-badge><timeline-panel class={{event.badgeClass}} ng-mouseover="myCssVar=\'css-class\'" ng-mouseleave="myCssVar=\'\'" ng-class=myCssVar><timeline-heading><h4>{{event.title}}</h4></timeline-heading><p>{{event.content}}</p></timeline-panel></timeline-event></timeline></div><div class="col-md-6 text-center" style="padding: 20px"><h3>Work Experience</h3><timeline><timeline-event ng-repeat="event in main.workEvents" side=alternate><timeline-badge class={{event.badgeClass}} style="width: 60px; border-radius: 0; margin-left: -30px; font-size: 12px">{{event.time}}</timeline-badge><timeline-panel class={{event.badgeClass}} ng-mouseover="myCssVar=\'css-class\'" ng-mouseleave="myCssVar=\'\'" ng-class=myCssVar><timeline-heading><h4>{{event.title}}</h4></timeline-heading><p>{{event.content}}</p></timeline-panel></timeline-event></timeline></div></div><!--<div style="display: flex; margin: 10px 30px;">--><!--<div style="flex:1; padding: 20px">Analyse the requirement of projects; set up project and establish database. Using angularJS to fulfill front end job in most time and also using nodeJS sometimes. Using restapi and also have written some restapi.</div>--><!--<div style="flex:1; padding: 20px">Develop mobile App using React Native; Using Redux to manipulate data storing and updating.  </div>--><!--</div>--><!--<div style="display: flex; margin: 10px 30px;">--><!--<div style="flex:1; padding: 20px">Analyse the requirement of projects; set up project and establish database. Using angularJS to fulfill front end job in most time and also using nodeJS sometimes. Using restapi and also have written some restapi.</div>--><!--<div style="flex:1; padding: 20px">Develop mobile App using React Native; Using Redux to manipulate data storing and updating.  </div>--><!--</div>--><!--<div style="display: flex; margin: 10px 30px;">--><!--<div style="flex:1; padding: 20px">Analyse the requirement of projects; set up project and establish database. Using angularJS to fulfill front end job in most time and also using nodeJS sometimes. Using restapi and also have written some restapi.</div>--><!--<div style="flex:1; padding: 20px">Develop mobile App using React Native; Using Redux to manipulate data storing and updating.  </div>--><!--</div>--><div id=projects><h3 class=text-center>Projects</h3><acme-projects creation-date=main.creationDate></acme-projects></div><div id=contact><h3 class=text-center>GET IN TOUCH</h3><acme-contact creation-date=main.creationDate></acme-contact></div><div class=row><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><!--<div class="thumbnail">--><!--<img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}">--><!--</div>--></div></div></div>'),e.put("app/components/contact/contact.html",'<section id=contact class="contact-area section"><div class=container><div class=row><div class="col-md-12 text-center"><div class=section-title><p>Coderspoint has everything you need to get your new website up and running in no time all of the templates and themes.</p></div></div></div><div class="row contact-row"><div class=col-md-6><!-- Contact form starts --><div class=contact-form><!-- Submition status --><div id=form-messages></div><form id=ajax-contact action=assets/mailer.php method=post><div class="form-group in_name"><input type=text name=name class=form-control id=name placeholder=NAME required></div><div class="form-group in_email"><input type=email name=email class=form-control id=email placeholder=EMAIL required></div><div class="form-group in_message"><textarea rows=5 name=message class=form-control id=message placeholder=MESSAGE required></textarea></div><div class=actions><input type=submit value="Send Now" name=submit id=submitButton class="btn dark" title="Submit Your Message!"></div></form></div><!-- Contact form ends--></div><div class=col-md-6><ul class=contact-info><li><i class="fa fa-map-marker"></i><p>Parramatta NSW 2150</p></li><li><i class="fa fa-phone"></i><p>0431053080</p></li><li><i class="fa fa-send"></i><p>wesleywang5803@gmail.com</p></li></ul></div></div></div></section>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top" style="padding-bottom: 20px; border-bottom: 0; margin-bottom: 0"><div class=container-fluid style="display: flex; flex-direction: column; justify-content: center"><!--<div class="navbar-header" style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 200px; height: 200px; margin:auto; border-radius: 50%; background-color: grey">--><!--<div class="navbar-brand" style="font-size: 32px;">--><!--Wesley <span style="color: brown">W</span>ang--><!--</div>--><!--<div style=" background-color: white; width: 400px; text-align: center; margin-top: 20px; font-size: 18px; padding: 10px">--><!--The portfolio of a front end developer--><!--</div>--><!--</div>--><!--<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">--><!--<div style="display: flex; justify-content: space-around; width: 70%; margin:auto;">--><!--<div class="active"><a ng-href="#" style="color: grey">About</a></div>--><!--<div><a ng-href="#" style="color: grey">Projects</a></div>--><!--<div><a ng-href="#" style="color: grey">Blog</a></div>--><!--<div><a ng-href="#" style="color: grey">Contact</a></div>--><!--</div>--><!--</div>--><div class=cloud-move style="position: absolute"><img ng-src={{selectItem.image}} alt=image width=200></div><div class=navbar-header style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 220px; height: 220px; margin:auto; border-radius: 50%; background-color: #eee"><button type=button class=navbar-toggle style="position: absolute; top: 0; right: 0" ng-click="vm.isNavCollapsed = !vm.isNavCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button><div class=move-in style="font-size: 30px">Wesley <span style="color: brown">W</span>ang</div><!--<div ng-style="{width: vm.width > 500 ? \'400px\': \'300px\'}"--><!--style="font-family: Comic Sans MS; background-color: #f8f8f8; text-align: center; margin-top: 20px; font-size: 15px; padding: 10px">--><!--Welcome to my personal page--><!--</div>--></div><div class="collapse navbar-collapse" uib-collapse=vm.isNavCollapsed><div style="display: flex; justify-content: space-around; width: 70%; margin:auto; font-family: Comic Sans MS; background-color: #ffffff; box-shadow: 0 5px 5px #888888; margin-top: 15px; padding: 10px"><div class=active><a ng-href=# style="color: grey">About</a></div><div><a ng-href=# style="color: grey" ng-click="vm.gotoSection(\'projects\')">Projects</a></div><div><a ng-href=# style="color: grey">Skills</a></div><div><a ng-href=# style="color: grey" ng-click="vm.gotoSection(\'contact\')">Contact</a></div></div></div></div></nav>'),e.put("app/components/projects/projects.html",'<div style="display: flex; justify-content: space-between; margin: 10px 30px"><div class="section text-center" style="flex: 1; padding: 20px"><p>OZII<img ng-src=assets/images/ozii.png style="margin-left: 20px; border-radius: 10px" alt=image width=60></p><div class=overlay><div class=text><p>real estate</p></div></div></div><div class="section text-center" style="flex: 1; padding: 20px"><p>LTT_WEB <img ng-src=assets/images/ltt.jpg style="margin-left: 20px; border-radius: 10px" alt=image width=50></p><div class=overlay><div class=text><p>travelling</p></div></div></div><div class="section text-center" style="flex: 1; padding: 20px"><p>LeaseRent <img ng-src=assets/images/leaserent.png style="margin-left: 20px; border-radius: 10px" alt=image width=60></p><div class=overlay><div class=text><p>Agency</p></div></div></div></div><div style="display: flex; justify-content: space-between; margin: 10px 30px"><div class="section text-center" style="flex: 1; padding: 20px"><p>TMB<img ng-src=assets/images/trade.png style="margin-left: 20px; border-radius: 10px" alt=image width=60></p><div class=overlay><div class=text><p>business trading</p></div></div></div><div class="section text-center" style="flex: 1; padding: 20px"><p>Unichi <img ng-src=assets/images/unichi.png style="margin-left: 20px; border-radius: 10px" alt=image width=50></p><div class=overlay><div class=text><p>Nutrition</p></div></div></div><div class="section text-center" style="flex: 1; padding: 20px"><p>NoodleZero <img ng-src=assets/images/noodle.png style="margin-left: 20px; border-radius: 10px" alt=image width=50></p><div class=overlay><div class=text><p>Food</p></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-99fb62725b.js.map