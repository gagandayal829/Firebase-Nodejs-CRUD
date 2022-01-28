import { v4 as uuidv4 } from 'uuid';



let users = []


export const getUsers = (req,res) => {
    console.log(users);

    res.send(users);
}

//We will create the uuid when we create a user so that a user has a unique id property
export const createUser = (req,res) => {
    console.log(req.body)

    const user = req.body;
    //Commented out both the commands below to simplify
    //const userId = uuidv4();

    //const userWithId = { ...user,id: uuidv4()}

    //Simplying the statement
    users.push({ ...user,id: uuidv4()})
    res.send(`User with the name ${user.firstname} added to the users array`)
}

export const getByUserId = (req,res) => {

    const {id} = req.params;

    //Now we need to find the user with the matching id sent in params
    const foundUser = users.find((user) => user.id == id)

    res.send(foundUser);
}

export const patchUserById = (req,res) => {
    const {id} = req.params;
    //We will mention all the elements that we will receive in the req.body
    const {firstname, lastname, age} = req.body

    //Array.find() goes through lot of elements in the array and the first one that matches it returns it.
    const user = users.find((user) => user.id == id)


    if(firstname){
        user.firstname = firstname
    }

    if(lastname){
        user.lastname = lastname
    }

    if(age){
        user.age = age
    }

    res.send(`User with the id ${id} has been updated `)

}

export const deleteUserById = (req,res) => {
    const {id} = req.params;

    //filter function loops through every element in the array and keeps the element which gives true and removes the one that is false
    //So our logic below is based on that
    users = users.filter((user) => user.id != id)

    res.send(`User with the id ${id} has been deleted`)
}
