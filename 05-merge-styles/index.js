const path = require('path');
const fs = require('fs');

const addFile = () => {
    fs.open(path.resolve(__dirname, 'project-dist/bundle.css'), 'w', (err) => {
        if(err) throw err;
    });
}

const myFunc = () => {
    fs.readdir(path.join(__dirname, './styles'), (err, files) => {
        files.forEach(file => {
            if (path.extname(file).slice(1) == 'css') {
                fs.readFile(path.join(__dirname, `./styles/${file}`), 'utf8', (err, data) => {
                    if(err) throw err;
                    fs.appendFile(path.join(__dirname, './project-dist/bundle.css'), data, (err) => {
                        if(err) throw err;
                    });
                });
            }
        });
    })
}
addFile();
myFunc();