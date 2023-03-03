const path = require('path');
const fs = require('fs');


const createDir = () => {
    fs.mkdir(path.resolve(__dirname, './files-copy'), err => {
        if(err) throw err;
    });
}

const removeDir = () => {
    fs.readdir(path.resolve(__dirname, './files-copy'), (err, arr) => {
        arr.forEach(el => {
            fs.unlink(path.resolve(__dirname, `./files-copy/${el}`), err => {
                if(err) throw err;
            });
        })
    })
}

const copyDir = () => {
    fs.readdir(path.resolve(__dirname, './files'), (err, arr) => {
        arr.forEach(el => {
            fs.copyFile(path.resolve(__dirname, `./files/${el}`), path.resolve(__dirname, `./files-copy/${el}`), err => {
                if(err) throw err;
            });
        });
    });
}

fs.access(path.resolve(__dirname, './files-copy'), (err) => {
    if (err) {
        createDir();
        copyDir();
    } else {
        removeDir();
        copyDir();
    }
});