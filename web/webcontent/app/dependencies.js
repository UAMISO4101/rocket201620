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

/**
 * common Directives
 **/
require('../app/commons/directives/commonDirectivesModule.js');
require('../app/commons/directives/ripple/rippleDirective.js');
require('../app/commons/directives/ripple/ripple.less');


/**
 * mainComponent Module
 **/

require('../app/main/mainModule.js');
require('../app/main/mainComponent.js');
require('../app/main/main.less');

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

require('../app/userRegister/userRegisterModule.js');
require('../app/userRegister/userRegisterComponent.js');
require('../app/userRegister/userRegister.less');
require('../app/userRegister/userRegisterService.js');
