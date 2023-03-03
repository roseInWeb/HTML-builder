const path = require('path');
const fs = require('fs');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

fs.access(path.resolve(__dirname, './text.txt'), (err) => {
    if (err) {
        enterText();
    } else {
        fs.unlink(path.resolve(__dirname, './text.txt'), err => {
            if(err) throw err;
        });
        enterText();
    }
});


const enterText = () => {
    fs.open(path.resolve(__dirname, 'text.txt'), 'a', () => {
        console.log('Hello! Enter text please... \n');
    });
    
    rl.on('line', (input) => {
        if (input === 'exit') {
            console.log('Thank you! You can check the text.txt file!');
            rl.close();
        } else {
            fs.appendFile(path.resolve(__dirname, 'text.txt'), `${input} \n`, (err) => {
                if(err) throw err;
            });
        }
    });
    
    rl.on('SIGINT', () => {
        console.log('\n Thank you! You can check the text.txt file!');
        rl.close();
    });
}