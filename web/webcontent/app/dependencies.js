require('./../home.jade');
require('./vendors.js');

require('../app/appConfig.js');

/**
 * Global styles
 * styles of controls should be in each module
 **/
require('../app/styles/css/bootstrap.less');
require('../app/styles/css/bootstrap-theme.less');
require('../app/styles/css/app.less');

/**
 * Internationalization = i18n
 **/
require('../app/i18n/i18nModule.js');
require('../app/i18n/i18nDirective.js');
require('../app/i18n/i18nService.js');

require('./notifications/notifierModule.js');
require('./notifications/notifierInterceptorFactory.js');
require('./notifications/notifierService.js');
require('./notifications/growl.less');
require('./notifications/notifier.less');

/**
 * common Directives
 **/
require('../app/commons/directives/commonDirectivesModule.js');
require('../app/commons/directives/ripple/rippleDirective.js');
require('../app/commons/directives/ripple/ripple.less');
require('../app/commons/directives/masonry/masonry.js');
require('../app/commons/directives/infiniteScroll/infiniteScrollDirective.js');


/**
 * mainComponent Module
 **/

require('../app/main/mainModule.js');
require('../app/main/mainComponent.js');
require('../app/main/main.less');
require('../app/main/mainService.js');

/**
 * REST API
 */
require('../app/restAPI/restAPIModule.js');
require('../app/restAPI/tracksAPIService.js');
require('../app/restAPI/userAPIService.js');

/**
 * Registro de componentes nuevos
 */

require('../app/commons/directives/modal/modalService.js');

require('../app/trackList/trackListModule.js');
require('../app/trackList/trackListComponent.js');
require('../app/trackList/trackListService.js');
require('../app/trackList/trackList.less');

require('../app/userPanel/userPanelModule.js');
require('../app/userPanel/userPanelComponent.js');
require('../app/userPanel/userPanel.less');

require('../app/userMenu/userMenuModule.js');
require('../app/userMenu/userMenuComponent.js');
require('../app/userMenu/userMenu.less');
require('../app/userMenu/userMenuService.js');


require('../app/search/searchModule.js');
require('../app/search/searchComponent.js');
require('../app/search/search.less');

require('../app/player/playerModule.js');
require('../app/player/playerComponent.js');
require('../app/player/playerService.js');
require('../app/player/player.less');

require('../app/login/loginModule.js');
require('../app/login/loginComponent.js');
require('../app/login/login.less');
require('../app/login/loginService.js');

require('../app/userRegister/userRegisterModule.js');
require('../app/userRegister/userRegisterComponent.js');
require('../app/userRegister/userRegister.less');
require('../app/userRegister/userRegisterService.js');

require('../app/splash/splashModule.js');
require('../app/splash/splashComponent.js');
require('../app/splash/splash.less');

require('../app/playerPicture/playerPictureModule.js');
require('../app/playerPicture/playerPictureComponent.js');
require('../app/playerPicture/playerPicture.less');

require('../app/track/trackModule.js');
require('../app/track/trackComponent.js');
require('../app/track/track.less');

 require('../app/userEdit/userEditModule.js');
 require('../app/userEdit/userEditComponent.js');
 require('../app/userEdit/userEdit.less');
require('../app/userEdit/userEditService.js');

require('../app/userPassword/userPasswordModule.js');
require('../app/userPassword/userPasswordComponent.js');
require('../app/userPassword/userPassword.less');
require('../app/userPassword/userPasswordService.js');
