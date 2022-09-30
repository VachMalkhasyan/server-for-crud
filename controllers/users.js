import { v4 as uuid } from 'uuid';
const id =uuid
let users = [];
import sqlite from 'sqlite3';
const db = new sqlite.Database('data.db');

 
db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT VARCHAR(50) NOT NULL, surName TEXT NOT NULL, age INTEGER NOT NULL)");

export const getUsers = (req, res) => {
 db.all("SELECT * FROM users", function(err, rows){
   console.log(rows)
   res.send(rows);
})
}



export const createUser = (req, res) => {
  let name = req.body["firstName"]
  let surname = req.body["surName"]
  let age = req.body["age"]
  console.log(name, surname, age)

  db.run("INSERT INTO users(firstName,surName, age) VALUES(?,?,?)", name, surname, age)
  res.send(JSON.stringify({message: 'success'}))

  //   const user = req.body;

  //  const userId = uuidv4();
  //  const userWithId = { ...user, id: userId }
  // user.push(userWithId);

  //    users.push({ ...user, id: uuidv4() });

    //  res.send(User with the name ${user.firstName} added to the database!);
};

export const getUser = (req, res) => {
  const id = req.params.id
  db.all("SELECT * FROM users WHERE id = ?",[id],  function(err, rows){
    console.log(rows);
    res.send(rows);
 }
 )};

//export const getUsers = (req, res) => {
    // console.log(`Users in the database: ${users}`);

    // res.send(users);
//}

//export const createUser = (req, res) => {   
//     const user = req.body

//     users.push({...user, id: uuid()})
    
//     res.send(`User ${user.name} added to the database.`);
// //};

//export const getUser = (req, res) => {
    // const user = req.body
   // res.send(`${req.body.id}`)
//};
export const deleteUser =(req, res) => {
  const id = req.params.id

db.run("DELETE FROM  users WHERE id=?",[id], function(err){
  db.all("SELECT * FROM users WHERE id = ?",[id],  function(err, rows){
    console.log(rows);
    res.send(rows);
  })
})
};


 export const updateUser =  (req,res) => {
  const {id} = req.params
  let firstName = req.body["firstName"];
  let surname = req.body["surName"];
  let age = req.body["age"];

  let sqlite =`UPDATE users SET firstName = ?, surName = ?, age = ? WHERE id = ${id}`
  db.run(sqlite,firstName,surname,age)
  res.send(`User with the ${id} has een updated`)
}