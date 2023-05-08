const readlineNew = require('readline');

const rlNew = readlineNew.createInterface({
  input: process.stdin,
  output: process.stdout
});

rlNew.question('Введите число: ', (originalNumber: number) => {
    rlNew.question('Сколько отнять: ', (deduction: number) => {
        rlNew.question('Сколько прибавить: ', (addition: number) => {
            rlNew.question('Сколько умножить: ', (multiplication: number) => {
                rlNew.question('Сколько разделить: ', (division: number) => {
                    rlNew.close();
                    let finalNumber = (Number(originalNumber)-Number(deduction) + Number(addition))*Number(multiplication)/Number(division)
                    console.log(`${originalNumber} - ${deduction} + ${addition} * ${multiplication} / ${division} = ${finalNumber}`)
                    });
            });
        });
    });
});

/*const prompt = require('prompt-sync')();
const originalNumber = prompt('Введите число:');
const deduction = prompt('Сколько отнять:');
const addition = prompt('Сколько прибавить:');
const multiplication = prompt('Сколько умножить:');
const division = prompt('Сколько разделить:');
let finalNumber = (Number(originalNumber)-Number(deduction) + Number(addition))*Number(multiplication)/Number(division)
console.log(`${originalNumber} - ${deduction} + ${addition} * ${multiplication} / ${division} = ${finalNumber}`);
*/

