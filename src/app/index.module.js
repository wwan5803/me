/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { MainService } from './index.service';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { LandingController } from'./landing/landing.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { ProjectsDirective } from '../app/components/projects/projects.directive';
import { ContactDirective } from '../app/components/contact/contact.directive';

import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('me', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria',
  'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'angular-timeline', 'ngDraggable'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('mainService', MainService)
  .controller('MainController', MainController)
  .controller('LandingController', LandingController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeProjects', ProjectsDirective)
  .directive('acmeContact', ContactDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
