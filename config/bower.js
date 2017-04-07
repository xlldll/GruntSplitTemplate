module.exports = {
  install: {
    options: {
      targetDir: './<%=paths.src.bower%>',
      copy: true,
      layout: 'byType',
      install: true,
      verbose: true,
      cleanTargetDir: true,
      cleanBowerDir: false,
      bowerOptions: {}
    }
  }
};