const fs = require("fs");

const data = fs.readFileSync(`${__dirname}\\test.in`, "utf8");
const array = data.split("\n");

if (array[0] < 0 && array[0] > 50) throw new Error('Error #1');
for (const quant of array.slice(1).filter(i => i.length <= 2)) {
    if (parseInt(quant) < 0 && parseInt(quant) > 20) throw new Error('Error #2');
}

const dataNums = array.filter(i => i.length > 2).map(j => j.split(' ').map(k => parseInt(k)));

const out = dataNums.map(i => {
    let check = 'no';

    for (let j = 0; j <= i.length; j++) {
        let sum = 0;

        for (const num of i.slice(j)) {
            sum = sum + num;
            if (num === 0 || sum === 0) check = 'yes';
        }
    }

    return check;
})

fs.writeFile(`${__dirname}\\out.out`, out.join('\n') + '\n', function(error){
    if(error) throw error;
});