(function() {
  'use strict';

  angular
    .module('nutritionProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
