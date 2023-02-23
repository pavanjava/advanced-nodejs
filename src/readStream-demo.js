const fs = require("fs");

const readStreamMain = async () => {
    const readStream = fs.createReadStream('../data/mock-data.csv', {highWaterMark: 100});

    readStream.on('data', (data) => {
        console.log(data.toString());
    });

    readStream.on('error', () => {
        console.error('Error in file reading');
    });

    readStream.on('end', () => {
        console.log('stream ended with success');
    });
}

readStreamMain();