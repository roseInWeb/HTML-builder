const path = require('path');
const fs = require('fs');

fs.readdir(path.resolve(__dirname, './secret-folder'), (err, arr) => {
    arr.forEach(el => {
        fs.stat(path.resolve(__dirname, `./secret-folder/${el}`), (err, stats) => {
            if (stats.isFile(el)) {
                console.log(path.basename(el, path.extname(el)) + ' - ' + path.extname(el).slice(1) + ' - ' + stats.size + ' байт');
            }
        });
    });
});