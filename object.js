               //  ****** CREATING AN OBJECT LITERAL *******
const user = {
    name : 'piyush tyagi',
    age : 19,
    email : 'tyagipiyush2233@gmail.com',
    location : 'berlin',
    blogs : ['heya', 'hii', 'uouo'],

                         // **** ADDING METHODS ****** 

    //  using method inside objects

    login : function(){
        console.log(`the  ${user.name} logged in`)
    },
    logBlogs : function(){
   
        //   console.log('this user has written the following blogs : ');
        //   this.blogs.forEach(blog =>{
        //     console.log(blog)
        //   })
    //     //    -- using object in array
      

    }
     //       //----- printing blogs using arrays method
    
    // using shorthand _____
    // login(){
    //     console.log(`the  ${user.name} logged in`)
    // },
    // logBlogs(){
    //     console.log(this.blogs)
    //       // printing blogs using arrays method
    //       console.log('this user has written the following blogs : ');
    //       this.blogs.forEach(blog =>{
    //         console.log(blog)
    //       })
    // }
  

             // *******  What is this in js. ******* 
    
    // In JavaScript, the this keyword refers to an object.

    // Which object depends on how this is being invoked (used or called).


// The this keyword refers to different objects depending on how it is used:

// ***  In an object method, this refers to the object.

// *** Alone, this refers to the global object.

// ***  In a function, this refers to the global object.

// ***  In a function, in strict mode, this is undefined.

//***  In an event, this refers to the element that received the event.

//***  Methods like call(), apply(), and bind() can refer this to any object.

// *** in ARROW FUNCTION this do not work same. javascript do not change the value of this function and this function refers to global window

// ++ this is not a variable. It is a keyword. You cannot change the value of this.

}

// >>>>>>  using dot notation to access or update the objects

console.log(user.age)
user.age = 18;
console.log(user.age)

// >>>>>>>>>>>  using SQUARE BRACKETS NOTATION to acess or update the objects

console.log(user['name'])
user['name'] = 'chin-li'
console.log(user['name'])

console.log(typeof user.blogs)

//  >>>>> calling function declared in objects
user.login();
user.logBlogs();


                        //  ***** OBJECTS IN ARRAY ****** 

const blogs = [
    {title : 'heya', like : 20},
    {title : 'helllo', like : 00}
    
    ]

console.log(blogs)
