var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "H01046641",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log("\n")
    queryBamazon();
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