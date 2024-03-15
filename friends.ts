import inquirer from "inquirer";
let isFriend = await inquirer.prompt([{
    name: "name",
    type: "string",
    message: "Enter your Friend name: "
}]);
if (isFriend.name === "Shakoor" || isFriend.name === "Firaun"){
    console.log(`${isFriend.name} is your friend.`);
}else {
    console.log(`${isFriend.name} is not your friend`);
}