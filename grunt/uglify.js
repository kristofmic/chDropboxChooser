module.exports = {
  dist: {
    options: {
      compress: {
        drop_console: false
      }
    },
    files: {
      '<%= distPath %>/chDropbox.min.js': [
        '<%= distPath %>/chDropbox.js'
      ],
      '<%= distPath %>/dropbox_module.min.js': [
        '<%= distPath %>/dropbox_module.js'
      ]
    }
  }
};