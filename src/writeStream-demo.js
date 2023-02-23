const fs = require("fs");

const writeStreamMain = async () => {
    const readStream = fs.createReadStream('../data/mock-data.csv');
    const writeStream = fs.createWriteStream('../data/exported.csv');

    readStream.on('data', (data) => {
        console.log(data.toString());
        writeStream.write(data);
    });

    readStream.on('error', () => {
        console.error('Error in file reading');
    });

    readStream.on('end', () => {
        console.log('stream ended with success');
        writeStream.close();
    });
}

// this will handle backpressure
const writeStreamPipe = async () => {
    const readStream = fs.createReadStream('../data/mock-data.csv');
    const writeStream = fs.createWriteStream('../data/exported.csv');
    
    readStream.pipe(writeStream);
}


// writeStreamMain();
writeStreamPipe();