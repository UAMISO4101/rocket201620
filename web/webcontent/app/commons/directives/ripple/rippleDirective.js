var commonDirectivesModule = angular.module('commonDirectivesModule');
commonDirectivesModule.controller('RippleController', [function () {
}]);

commonDirectivesModule.directive('ripple', ['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var color;
      var x, y, size, offsets,
        func = function (e) {
          var ripple = this.querySelector('.ripple');
          var eventType = e.type;
          // Ripple
          if (ripple === null) {
            // Create ripple
            ripple = document.createElement('span');
            ripple.className += ' ripple-effect';

            // Prepend ripple to element
            this.insertBefore(ripple, this.firstChild);

            // Set ripple size
            size = Math.min(element[0].offsetWidth, element[0].offsetHeight);
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';

          }

          // Remove animation effect
          ripple.className = ripple.className.replace(/ ?(animate)/g, '');

          // get click coordinates by event type
          if (eventType === 'click') {
            x = e.pageX;
            y = e.pageY;
          } else if (eventType === 'mouseup') {
            x = e.pageX;
            y = e.pageY;
          } else if (eventType === 'touchend') {
            try {
              var origEvent;

              if (typeof e.changedTouches !== 'undefined') {
                origEvent = e.changedTouches[0];
              } else {
                origEvent = e.originalEvent;
              }

              x = origEvent.pageX;
              y = origEvent.pageY;
            } catch (e) {
              // fall back to center of el
              x = ripple.offsetWidth / 2;
              y = ripple.offsetHeight / 2;
            }
          }

          // set new ripple position by click or touch position
          function getPos(element) {
            var de = document.documentElement;
            var box = element.getBoundingClientRect();
            var top = box.top + window.pageYOffset - de.clientTop;
            var left = box.left + window.pageXOffset - de.clientLeft;
            return {top: top, left: left};
          }

          var offsets = getPos(element[0]);
          /*console.log('\n\nx: ', x);
          console.log('y: ', y);
          console.log('offset left: ', offsets.left);
          console.log('offset top: ', offsets.top);
          console.log('size: ', size);*/
          ripple.style.left = ((x - offsets.left) - (size / 2)) + 'px';
          ripple.style.top = ((y - offsets.top) - (size / 2)) + 'px';


          // Add animation effect
          ripple.className += ' animate';
          ripple.style.background = color || "#fffff";

          $timeout(function () {
            ripple.remove();
          }, 2000);
        }
      color = attrs.ripple;

      element.on('click', func);
      element.on('mouseup', func);
      element.on('touchend', func);

      //remove the event listener on scope destroy
      scope.$on('$destroy', function () {
        element.off('touchend mouseup', func);
      });
    }
  };
}]);

