'use strict';

const path = require('path');
const fs = require('fs');
const express = require('express');

const basePath = process.env.BASE_PATH || '/';
const rootPath = path.resolve(__dirname, './dist');
const disableCache = process.env.DISABLE_CACHE || false;

const app = express();
if (disableCache) {
  app.disable('view cache');
}

app.set('port', process.env.PORT || 8000);

app.get(basePath + '*', function(req, res) {
  var filePath = path.resolve(rootPath, req.params[0]);
  if (fs.existsSync(filePath)) {
    var stats = fs.lstatSync(filePath);
    if (stats.isFile()) {
      return res.sendFile(filePath);
    }
  }
  return res.sendFile(path.resolve(rootPath, 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Listening port ' + app.get('port'));
});
