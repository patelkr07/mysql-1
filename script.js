var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log("\n")
    queryBamazon();
    start();
    
})

function queryBamazon() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + "  | " + res[i].product_name + " | " + res[i].department_name + " | " + "$"+res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("\n")
        console.log("---------------------------------------------")
    });
}

function start() {
    inquirer
    .prompt({
        name: "askID",
        type: "input",
        message: "What is the ID of the product you'd like to purchase?"
    })
    .then(function(answer) {
        if(answer.askID === "1")
        { 
            console.log("How much Car Wash Soap would you like to buy?")
        }
        else if(answer.askID === "2")
        {
            console.log("How many Wristwatches would you like to buy?")
        }
        else if(answer.askID === "3")
        {
            console.log("How many Televisions would you like to buy?")
        }
        else if(answer.askID === "4")
        {
            console.log("How many Swimsuits would you like to buy?")
        }
        else if(answer.askID === "5")
        {
            console.log("How many Lipsticks would you like to buy?")
        }
        else if(answer.askID === "6")
        {
            console.log("How many Shoes would you like to buy?")
        }
        else if(answer.askID === "7")
        {
            console.log("How many Laptops would you like to buy?")
        }
        else if(answer.askID === "8")
        {
            console.log("How many Bicycles would you like to buy?")
        }
        else if(answer.askID === "9")
        {
            console.log("How many Pianos would you like to buy?")
        }
        else if(answer.askID === "10")
        {
            console.log("How many Spark Plugs would you like to buy?")
        }

    })
}

//function for inquirer prompt 2 should be after first prompt, also need drier code to not repeat 10 timess

//console.log ("You've bought _____________")

    //then function for subtracting 1 from the quantity





