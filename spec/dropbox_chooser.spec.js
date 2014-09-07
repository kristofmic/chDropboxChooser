describe('dropboxChooser', function() {
  var
    service,
    scope,
    mockDropbox,
    mockFile,
    mockFiles,
    q;

  beforeEach(module('ch.DropboxChooser'));

  beforeEach(module(function($provide){
    mockFile = {
      bytes: 512,
      name: 'foo',
      link: 'www.dropbox.com/foo'
    };

    mockFiles = [mockFile];

    mockDropbox = {
      choose: function(options) {
        options.success(files);
      }
    };

    $provide.value('Dropbox', mockDropbox);
  }));

  beforeEach(inject(function($injector, $rootScope) {
    scope = $rootScope.$new();

    q = $injector.get('$q');

    service = $injector.get('dropboxChooser');
  }));

  it('should exist', function() {
    expect(service).toBeDefined();
  });

  describe('init()', function() {
    beforeEach(function() {
      spyOn(mockDropbox, 'choose');
    });

    it('should call Dropbox.choose()', function() {
      service();
      expect(mockDropbox.choose).toHaveBeenCalled();
    });

    it('should return a promise', function() {
      var
        p = service();

      expect(p.then).toBeDefined();
    });
  });

});
