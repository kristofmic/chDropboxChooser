module.exports = {
  dev: {
    options: {
      process: function(src, filepath) {
        return '\n// ' + filepath + '\n' + src;
      }
    },
    src: [
      '<%= jsPath %>/dropbox_chooser_module.js',
      '<%= jsPath %>/**/*.js'
    ],
    dest: '<%= distPath %>/chDropbox.js'
  }
};
