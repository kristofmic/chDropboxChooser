(function(angular) {

  var
    definitions;

  definitions = [
    '$q',
    'Dropbox',
    dropboxChooser
  ];

  angular.module('ch.DropboxChooser')
    .factory('dropboxChooser', definitions);

  function dropboxChooser($q, Dropbox) {

    return init;

    function init() {
      var
        deferred = $q.defer();

      Dropbox.choose({
        success: chooseSuccess,
        iframe: false,
        linkType: 'direct',
        multiselect: false,
        extensions: ['.docx', '.doc', '.rtf', '.txt', '.pdf']
      });

      return deferred.promise;

      function chooseSuccess(files) {
        if (files[0]) {
          deferred.resolve(files[0]);
        }
        else {
          deferred.reject('No file received.');
        }
      }
    }

  }

})(angular);