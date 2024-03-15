import inquirer from 'inquirer';
async function BMIcalculator(){
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'weight',
            message: "Enter your weight in Kilograms",
        },
        {
            type: 'number',
            name: 'height',
            message: "Enter your height in meters",
        },
    ]);

const weight = answers.weight;
const height = answers.height;

const bmi = weight / (height * height);
console.log(`Your BMI is: ${bmi.toFixed(2)}`);
}
BMIcalculator();