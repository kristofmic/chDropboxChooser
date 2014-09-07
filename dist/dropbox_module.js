(function(angular) {

  var
    dependencies = [],
    factoryDefinition;

  factoryDefinition = [
    '$window',
    Dropbox
  ];

  angular.module('ch.Vendor.Dropbox', dependencies)
    .factory('Dropbox', factoryDefinition);

  function Dropbox($window) { return $window.Dropbox; }

})(angular);