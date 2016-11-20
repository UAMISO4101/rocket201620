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
require('../app/restAPI/artistAPIService.js');
require('../app/restAPI/donationAPIService.js');
require('../app/restAPI/genderAPIService.js');
require('../app/restAPI/competitionAPIService.js');
require('../app/restAPI/userProfileAPIService.js');

/**
 * Registro de componentes nuevos
 */

require('../app/commons/directives/modal/modalService.js');
require('../app/icons/iconsModule.js');
require('../app/icons/iconsComponent.js');
require('../app/icons/icons.less');

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

require('../app/help/helpModule.js');
require('../app/help/helpComponent.js');
require('../app/help/helpService.js');
require('../app/help/help.less');
require('../app/help/helpItem/helpItemComponent.js');
require('../app/help/helpItem/helpItem.less');

require('../app/artist/artistModule.js');
require('../app/artist/artistComponent.js');
require('../app/artist/artist.less');
require('../app/artist/artistService.js');

require('../app/topTrackList/topTrackListModule.js');
require('../app/topTrackList/topTrackListComponent.js');
require('../app/topTrackList/topTrackList.less');

require('../app/trackCreator/trackCreatorModule.js');
require('../app/trackCreator/trackCreatorComponent.js');
require('../app/trackCreator/trackCreator.less');

require('../app/artist/artistModule.js');
require('../app/artist/artistComponent.js');
require('../app/artist/artist.less');
require('../app/artist/artistService.js');

require('../app/donation/donationModule.js');
require('../app/donation/donationComponent.js');
require('../app/donation/donation.less');
require('../app/donation/donationService.js');

require('../app/forgotPassword/forgotPasswordModule.js');
require('../app/forgotPassword/forgotPasswordComponent.js');
require('../app/forgotPassword/forgotPasswordService.js');
require('../app/forgotPassword/forgotPassword.less');


require('../app/scoreEditor/scoreEditorModule.js');
require('../app/scoreEditor/scoreEditorComponent.js');
require('../app/scoreEditor/scoreEditorService.js');
require('../app/scoreEditor/scoreEditor.less');

require('../app/restorePassword/restorePasswordModule.js');
require('../app/restorePassword/restorePasswordComponent.js');
require('../app/restorePassword/restorePassword.less');
require('../app/restorePassword/restorePasswordService.js');

require('../app/donationCreator/donationCreatorModule.js');
require('../app/donationCreator/donationCreatorComponent.js');
require('../app/donationCreator/donationCreatorService.js');
require('../app/donationCreator/donationCreator.less');

require('../app/bounce/bounceModule.js');
require('../app/bounce/bounceComponent.js');
require('../app/bounce/bounce.less');

require('../app/postCreator/postCreatorModule.js');
require('../app/postCreator/postCreatorComponent.js');
require('../app/postCreator/postCreatorService.js');
require('../app/postCreator/postCreator.less');

require('../app/eventList/eventListModule.js');
require('../app/eventList/eventListService.js');
require('../app/eventList/eventListComponent.js');
require('../app/eventList/eventList.less');

require('../app/competitionList/competitionListModule.js');
require('../app/competitionList/competitionListComponent.js');
require('../app/competitionList/competitionListService.js');
require('../app/competitionList/competitionList.less');

require('../app/competitionParticipate/competitionParticipateModule.js');
require('../app/competitionParticipate/competitionParticipateComponent.js');
require('../app/competitionParticipate/competitionParticipate.less');

require('../app/announcementCreator/announcementCreatorModule.js');
require('../app/announcementCreator/announcementCreatorComponent.js');
require('../app/announcementCreator/announcementCreatorService.js');
require('../app/announcementCreator/announcementCreator.less');

require('../app/competitionDetail/competitionDetailModule.js');
require('../app/competitionDetail/competitionDetailComponent.js');
require('../app/competitionDetail/competitionDetail.less');

require('../app/userProfile/userProfileModule.js');
require('../app/userProfile/userProfileComponent.js');
require('../app/userProfile/userProfileService.js');
require('../app/userProfile/userProfile.less');

require('../app/listCreator/listCreatorModule.js');
require('../app/listCreator/listCreatorComponent.js');
require('../app/listCreator/listCreatorService.js');
require('../app/listCreator/listCreator.less');