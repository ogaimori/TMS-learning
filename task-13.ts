const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите сторону света: ', (sideOfTheWorld: string) => {
    switch (sideOfTheWorld){
        case "север":
            console.log(`На север пойдёшь много денег найдешь!`);
            break;
        case "юг":
            console.log(`На юг пойдёшь счастье найдешь!`);
            break;
        case "запад":
            console.log(`На запад пойдёшь верного друга найдешь!`);
            break;
        case "восток":
            console.log(`На восток пойдёшь разработчиком станешь!`);  
            break;    
        default:
            console.log("Ошибка. Попробуйте еще раз!");
    }
  rl.close();
});