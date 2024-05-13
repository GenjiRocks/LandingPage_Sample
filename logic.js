class Landing{
    // property
    database={
        Milan:{username:'Milan', password:'milan123'},
        Ashwin:{username:'Ashwin', password:'ashwin123'},
        Bimal:{username:'Bimal', password:'bimal123'}
    }

    // to store data to local strorage
    saveData(){
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database))
        }
    }

    // get the data from local storage
    getData(){
        this.database = JSON.parse(localStorage.getItem("database"))
        console.log(this.database);
    }

    // Method to register the user data
    register(){
        obj.getData()
        let user = reguser.value
        let pass = regpswd.value
        console.log(user,pass);
        if(user=='' || pass==''){
            alert("Please complete the form ")
        }
        else{
            if(user in this.database){
                alert("Account already exist")
            }
            else{
                this.database[user] = {username:user,password:pass}
                alert("Data saved successfully")
                this.saveData()
                // to navigate to login page
                window.location = "index.html"
            }
        }
    }

    login(){
        let user1 = loguser.value
        let pass1 = logpswd.value
        if(user1 == '' && pass1 == ''){
            alert(`Please fill the form completely`)
        }
        else{
            if(user1 in this.database){
                if(this.database[user1].password == pass1){
                    localStorage.setItem("user",user1)
                    window.location = "home.html"
                }
                else{
                    alert("Invalid username or password")
                }
            }
            else{
                alert(`Account does not exsist`)
            }
        }
     
        
    }

}

// Creating an object
const obj = new Landing()
// obj.saveData() /* Calling for saving data */
// obj.getData()   /* Getting data from Local Stroage */

