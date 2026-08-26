function CreateUserSchema({email,username,password,bio=""}){
  return{
    _id:"user_"+Date.now(),
    username: username,
    email : email,
    password:password,
    profile:{
      bio:bio,
      avatar:"https://th.bing.com/th/id/OIP.NLh6c2gtouyYHCcQEjNgRQHaE7?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      theme:"cyan",
      rank :"Gamer",
    },

    settings:{
        notification :{
          pushNotif: false,
        friendReq: true,
        achieveAlerts: true
        },
        audio :{
          masterVolume: 75,
        soundEffects: true
        },gameplay: {
        autoPlay: false
      }
    },

      createdAt: new Date().toISOString()


  };
}

let Users = JSON.parse(localStorage.getItem("Users")) || [];

function RegisterUser({username,email,password}){
  const newUser =CreateUserSchema({
     mail:email,
    username:username,
    password:password
  });
  Users.push(newUser);

  localStorage.setItem("Users",JSON.stringify(Users));

  localStorage.setItem("recentUser", JSON.stringify(newUser));

  console.log("User registered successfully!",newUser);
  
}
let x=1;
if(x){
  RegisterUser({
  username: "yasmin",
  email: "yas@gmail.com",
  password: "12345"
});
x--;
}

// ---------------------------------------------------
