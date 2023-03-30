const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Sarath",
    database: "digital"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM customers";
    db.query(sqlGet, (error, result) => {
        if(error) console.log(error); 
        res.send(result);
    });
});

app.post("/api/post", (req, res) =>{
    const {cus_name, cus_email, gender, cus_contact, cus_address, cus_password, cus_cpassword} = req.body;
    const sqlInsert = 
    "INSERT INTO customers (cus_name, cus_email, gender, cus_contact, cus_address, cus_password, cus_cpassword) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [cus_name, cus_email, gender, cus_contact, cus_address, cus_password, cus_cpassword], (error, result) =>{
        if(error){
            console.log(error);
        }
    });
});

app.delete("/api/remove/:cus_id",(req,res) =>{
    const {cus_id} = req.params;
    const sqlRemove = "DELETE FROM customers WHERE cus_id=?";
    db.query(sqlRemove,cus_id,(error,result)=>{
        if(error)
            console.log(error);
    })
})

app.get("/api/get/:cus_id",(req,res) =>{
    const {cus_id} = req.params;
    const sqlGet = "SELECT * from customers WHERE cus_id = ?";
    db.query(sqlGet,cus_id,(err,result) => {
        if(err)
            console.log(err);
        res.send(result)
    })
})

app.put("/api/update/:cus_id",(req,res) =>{
    const {cus_id} = req.params;
    const {cus_name,cus_email,gender,cus_contact,cus_address, cus_password, cus_cpassword} = req.body;
    const sqlUpdate = "UPDATE customers SET cus_name= ?, cus_email= ?, gender=?, cus_contact= ?, cus_address=?, cus_password=?, cus_cpassword=? WHERE cus_id=?";
    db.query(sqlUpdate,[cus_name, cus_email, gender,cus_contact, cus_address, cus_password, cus_cpassword, cus_id],(err,result) => {
        if(err)
            console.log(err);
        res.send(result)
    })
})






app.get("/products/get", (req, res) => {
    const sqlGet = "SELECT * FROM products";
    db.query(sqlGet, (error, result) => {
        if(error) console.log(error); 
        res.send(result);
    });
});

app.post("/products/post", (req, res) =>{
    const {P_name, P_description, P_quantity, P_price, sales_price, picture} = req.body;
    const sqlInsert = 
    "INSERT INTO products (P_name, P_description, P_quantity, P_price, P_image, sales_price) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [P_name, P_description, P_quantity, P_price, picture.images, sales_price], (error, result) =>{
        if(error){
            console.log(error);
        }
    });
});

app.delete("/products/remove/:Product_id",(req,res) =>{
    const {Product_id} = req.params;
    const sqlRemove = "DELETE FROM products WHERE Product_id=?";
    db.query(sqlRemove,Product_id,(error,result)=>{
        if(error)
            console.log(error);
    })
})

app.get("/products/get/:Product_id",(req,res) =>{
    const {Product_id} = req.params;
    const sqlGet = "SELECT * from products WHERE Product_id = ?";
    db.query(sqlGet,Product_id,(err,result) => {
        if(err)
            console.log(err);
        res.send(result[0])
    })
})

app.put("/products/productupdate/:Product_id",(req,res) =>{
    const {Product_id} = req.params;
    const {P_name, P_description, P_quantity, P_price, picture, sales_price} = req.body;
    const sqlUpdate = "UPDATE products SET P_name= ?, P_description= ?, P_quantity= ?, P_price=?, P_image=?, sales_price=? WHERE Product_id=?";
    db.query(sqlUpdate,[P_name, P_description, P_quantity, P_price,picture.images, sales_price, Product_id],(err,result) => {
        if(err)
            console.log(err);
        res.send(result)
    })
})








app.get("/art/get", (req, res) => {
    const sqlGet = "SELECT * FROM art";
    db.query(sqlGet, (error, result) => {
        if(error) console.log(error); 
        res.send(result);
    });
});

app.post("/art/post", (req, res) =>{
    const {picture} = req.body;
    const sqlInsert = 
    "INSERT INTO art (art_image) VALUES (?)";
    db.query(sqlInsert, [picture.images], (error, result) =>{
        if(error){
            console.log(error);
        }
    });
});

app.delete("/art/remove/:art_id",(req,res) =>{
    const {art_id} = req.params;
    const sqlRemove = "DELETE FROM art WHERE art_id=?";
    db.query(sqlRemove,art_id,(error,result)=>{
        if(error)
            console.log(error);
    })
})

app.get("/art/get/:art_id",(req,res) =>{
    const {art_id} = req.params;
    const sqlGet = "SELECT * from art WHERE art_id = ?";
    db.query(sqlGet,art_id,(err,result) => {
        if(err)
            console.log(err);
        res.send(result[0])
    })
})

app.put("/art/artupdate/:art_id",(req,res) =>{
    const {art_id} = req.params;
    const {picture} = req.body;
    const sqlUpdate = "UPDATE art SET  art_image=? WHERE art_id=?";
    db.query(sqlUpdate,[picture.images, art_id],(err,result) => {
        if(err)
            console.log(err);
        res.send(result)
    })
})










app.get("/classes/get", (req, res) => {
    const sqlGet = "SELECT * FROM classes";
    db.query(sqlGet, (error, result) => {
        if(error) console.log(error); 
        res.send(result);
    });
});

app.post("/classes/post", (req, res) =>{
    const {cls_name, cls_email, cls_contact, cls_address} = req.body;
    const sqlInsert = 
    "INSERT INTO classes (cls_name, cls_email, cls_contact, cls_address) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [cls_name, cls_email, cls_contact, cls_address], (error, result) =>{
        if(error){
            console.log(error);
        }
    });
});

app.delete("/classes/remove/:cls_id",(req,res) =>{
    const {cls_id} = req.params;
    const sqlRemove = "DELETE FROM classes WHERE cls_id=?";
    db.query(sqlRemove,cls_id,(error,result)=>{
        if(error)
            console.log(error);
    })
})

app.get("/classes/get/:cls_id",(req,res) =>{
    const {cls_id} = req.params;
    const sqlGet = "SELECT * from classes WHERE cls_id = ?";
    db.query(sqlGet,cls_id,(err,result) => {
        if(err)
            console.log(err);
        res.send(result)
    })
})

app.put("/classes/update/:cls_id",(req,res) =>{
    const {cls_id} = req.params;
    const {cls_name,cls_email,cls_contact,cls_address} = req.body;
    const sqlUpdate = "UPDATE classes SET cls_name= ?, cls_email= ?, cls_contact= ?, cls_address=? WHERE cls_id=?";
    db.query(sqlUpdate,[cls_name, cls_email, cls_contact, cls_address, cls_id],(err,result) => {
        if(err)
            console.log(err);
        res.send(result)
    })
})











app.get("/photographer/get", (req, res) => {
    const sqlGet = "SELECT * FROM photographer";
    db.query(sqlGet, (error, result) => {
        if(error) console.log(error); 
        res.send(result);
    });
});

app.post("/photographer/post", (req, res) =>{
    const {pho_name, pho_email, pho_contact,pho_experience,previous_experience ,Pho_address} = req.body;
    console.log(previous_experience);
    const sqlInsert = 
    "INSERT INTO photographer (pho_name, pho_email, pho_contact, pho_experience,previous_experience, Pho_address) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [pho_name, pho_email, pho_contact,pho_experience,previous_experience, Pho_address], (error, result) =>{
        if(error){
            console.log(error);
        }
    });
});

app.delete("/photographer/remove/:pho_id",(req,res) =>{
    const {pho_id} = req.params;
    const sqlRemove = "DELETE FROM photographer WHERE pho_id=?";
    db.query(sqlRemove,pho_id,(error,result)=>{
        if(error)
            console.log(error);
    })
})

app.get("/photographer/get/:pho_id",(req,res) =>{
    const {pho_id} = req.params;
    const sqlGet = "SELECT * from photographer WHERE pho_id = ?";
    db.query(sqlGet,pho_id,(err,result) => {
        if(err)
            console.log(err);
        res.send(result)
    })
})

app.put("/photographer/update/:pho_id",(req,res) =>{
    const {pho_id} = req.params;
    const {pho_name, pho_email, pho_contact,pho_experience,previous_experience, Pho_address} = req.body;
    const sqlUpdate = "UPDATE photographer SET pho_name= ?, pho_email= ?, pho_contact= ?, pho_experience=?,previous_experience= ?, Pho_address=? WHERE pho_id=?";
    db.query(sqlUpdate,[pho_name, pho_email, pho_contact,pho_experience,previous_experience, Pho_address, pho_id],(err,result) => {
        if(err)
            console.log(err);
        res.send(result)
    })
})







app.post("/booking/post", (req, res) =>{
    const { from_date, to_date, shoot_type, name, contact, email, address} = req.body;
    const sqlInsert = 
    "INSERT INTO booking ( from_date, to_date, shoot_type, name, contact, email, address, bookdate) VALUES (?, ?, ?, ?, ?, ?, ?, CURDATE())";
    db.query(sqlInsert, [from_date, to_date, shoot_type, name, contact, email, address], (error, result) =>{
        if(error){
            console.log(error);
        }
    });
});

app.delete("/booking/remove/:book_id",(req,res) =>{
    const {book_id} = req.params;
    const sqlRemove = "DELETE FROM booking WHERE book_id=?";
    db.query(sqlRemove,book_id,(error,result)=>{
        if(error)
            console.log(error);
    })
})

app.get("/booking/get/:book_id",(req,res) =>{
    const {book_id} = req.params;
    const sqlGet = "SELECT * from booking WHERE book_id = ?";
    db.query(sqlGet,book_id,(err,result) => {
        if(err)
            console.log(err);
        res.send(result)
    })
})

app.put("/booking/update/:book_id",(req,res) =>{
    const {book_id} = req.params;
    const { from_date, to_date, shoot_type, contact, email, address} = req.body;
    const sqlUpdate = "UPDATE booking SET  from_date= ?, to_date= ?, shoot_type=?, contact=?, email=?, address=? WHERE book_id=?";
    db.query(sqlUpdate,[ from_date, to_date, shoot_type, contact, email, address, book_id],(err,result) => {
        if(err)
            console.log(err);
        console.log(result)
        res.send(result)
    })
})

app.get("/booking/get", (req, res) => {
    const sqlGet = "SELECT * FROM digital.booking;";
    db.query(sqlGet, (error, result) => {
        if(error) console.log(error); 
        console.log(result);
        res.send(result);
    });
});


















app.post("/bookingclient/post", (req, res) =>{
    const { from_date, to_date, shoot_type, name, contact, email, address} = req.body;
    const sqlInsert = 
    "INSERT INTO booking ( from_date, to_date, shoot_type, name, contact, email, address, bookdate) VALUES ( ?, ?, ?, ?, ?, ?, ?, CURDATE())";
    db.query(sqlInsert, [ from_date, to_date, shoot_type, name, contact, email, address], (error, result) =>{
        if(error){
            console.log(error);
        }
    });
});

app.delete("/bookingclient/remove/:book_id",(req,res) =>{
    const {book_id} = req.params;
    const sqlRemove = "DELETE FROM booking WHERE book_id=?";
    db.query(sqlRemove,book_id,(error,result)=>{
        if(error)
            console.log(error);
    })
})

app.get("/bookingclient/get/:book_id",(req,res) =>{
    const {book_id} = req.params;
    const sqlGet = "SELECT * from booking WHERE book_id = ?";
    db.query(sqlGet,book_id,(err,result) => {
        if(err)
            console.log(err);
        res.send(result)
    })
})

app.put("/bookingclient/update/:book_id",(req,res) =>{
    const {book_id} = req.params;
    const { from_date, to_date, shoot_type, contact, email, address} = req.body;
    const sqlUpdate = "UPDATE booking SET from_date= ?, to_date= ?, shoot_type=?, contact=?, email=?, address=? WHERE book_id=?";
    db.query(sqlUpdate,[ from_date, to_date, shoot_type, contact, email, address, book_id],(err,result) => {
        if(err)
            console.log(err);
        console.log(result)
        res.send(result)
    })
})

app.get("/bookingclient/get", (req, res) => {
    const sqlGet = "SELECT * FROM digital.booking;";
    db.query(sqlGet, (error, result) => {
        if(error) console.log(error); 
        console.log(result);
        res.send(result);
    });
});



















app.post("/ordering/post", (req, res) =>{
    const {order_id, Product_id, cus_id, order_quantity, payment_status} = req.body;
    const sqlInsert = 
    "INSERT INTO order (order_id, Product_id, cus_id, order_quantity, payment_status) VALUES (?, ?, ?, ?, ?)";
    db.query(sqlInsert, [order_id, Product_id, cus_id, order_quantity, payment_status], (error, result) =>{
        if(error){
            console.log(error);
        }
    });
});

app.delete("/ordering/remove/:order_id",(req,res) =>{
    const {order_id} = req.params;
    const sqlRemove = "DELETE FROM order WHERE order_id=?";
    db.query(sqlRemove,order_id,(error,result)=>{
        if(error)
            console.log(error);
    })
})

// app.get("/ordering/get/:order_id",(req,res) =>{
//     const {order_id} = req.params;
//     const sqlGet = "SELECT * from order WHERE order_id = ?";
//     db.query(sqlGet,order_id,(err,result) => {
//         if(err)
//             console.log(err);
//         res.send(result)
//     })
// })

app.put("/orderingupdate/update/:order_id",(req,res) =>{
    const {order_id} = req.params;
    const { Product_id, cus_id, order_quantity,payment_status} = req.body;
    const sqlUpdate = "UPDATE order SET Product_id= ?, cus_id= ?, order_quantity= ?, payment_status=? WHERE order_id=?";
    db.query(sqlUpdate,[order_id, Product_id, cus_id, order_quantity,payment_status],(err,result) => {
        if(err)
            console.log(err);
        res.send(result)
    })
})

app.get("/ordering/get", (req, res) => {
    const sqlGet = "SELECT digital.order.order_id,digital.products.Product_id,digital.customers.cus_id,digital.order.order_quantity,digital.order.payment_status FROM digital.order INNER JOIN digital.products ON digital.order.Product_id = digital.products.Product_id INNER JOIN digital.customers ON digital.order.cus_id = digital.customers.cus_id ";
    db.query(sqlGet, (error, result) => {
        if(error) console.log(error); 
        res.send(result);
    });
});

















app.get("/products/productsdetails",(req,res) =>{
    const sqlGet ="SELECT Product_id, P_name, P_quantity, P_price, sales_price FROM products";
    db.query(sqlGet,(err,result)=>{
        if(err)
        console.log(err);
        res.send(result)
    })
})


app.get("/customers/customersdetails",(req,res) =>{
    const sqlGet ="SELECT cus_id, cus_name, cus_email, gender, cus_contact, cus_address FROM customers";
    db.query(sqlGet,(err,result)=>{
        if(err)
        console.log(err);
        res.send(result)
    })
})


app.get("/photographer/photographerdetails",(req,res) =>{
    const sqlGet ="SELECT * FROM photographer";
    db.query(sqlGet,(err,result)=>{
        if(err)
        console.log(err);
        res.send(result)
    })
})




app.get("/class/classdetails",(req,res) =>{
    const sqlGet ="SELECT * FROM classes";
    db.query(sqlGet,(err,result)=>{
        if(err)
        console.log(err);
        res.send(result)
    })
})



app.get("/bookings/bookingdetails/:from/:to",(req,res)=>{
    const{from,to} = req.params;
    console.log(from+" "+to);
    const sqlGet = "SELECT * FROM booking WHERE bookdate BETWEEN ? AND ?";
    db.query(sqlGet,[from,to],(err,result)=>{
        if(err)
            console.log(err)
        res.send(result)
    } )
})






app.listen(4000, () => {
    console.log("Server is running on port 4000");
})



