module.exports = {
  dropboxJs: {
    expand: true,
    src: [
      '<%= jsPath %>/vendor/dropbox_module.js',
    ],
    dest: '<%= distPath %>',
    flatten: true
  }
};