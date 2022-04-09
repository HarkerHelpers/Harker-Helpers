
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCyAJghXpU_s5kmsmSFGf9I5RJKvnTfiJQ",
    authDomain: "kindness-website.firebaseapp.com",
    projectId: "kindness-website",
    storageBucket: "kindness-website.appspot.com",
    messagingSenderId: "379859692313",
    appId: "1:379859692313:web:e3cd175c450c481dd77388",
    measurementId: "G-3WY5C4B4GT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();


  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
  if(password.value.length > 5){
        password.style.backgroundColor = goodColor;
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
    makePage();
    signIn();
  }else{
        password.style.backgroundColor = badColor;
        alert(" You have to enter at least 6 charcters!");
    }
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }

  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user.email == "26henryf@students.harker.org" || user.email == "26sathvikv@students.harker.org" || user.email == "henry@fradin.com"){
      var email = user.email;
          if (confirm("Active user "+email+" is an Admin")){
      document.location.href='/admin/admin.html', localStorage.setItem('EMAIL', email);}
          else{
            alert("Signing you out now...");
            signOut();
          }
    }else if(user.email == "harkerkindnessclub@gmail.com" || user.email == "26kirab@students.harker.org" || user.email == "26aidano@students.harker.org" || user.email == "26shreyav@students.harker.org" || user.email == "26savithas@students.harker.org" || user.email == "harkerhelpers@gmail.com" || user.email == "26charlottel@students.harker.org" || user.email == "kathyp2@harker.org" || user.email == "26alanab@students.harker.org"){
      var email = user.email;
if (confirm("Active user "+email+" is a Member")){
document.location.href='/memb/memb.html', localStorage.setItem('EMAIL', email);
      }else{
            alert("Signing you out now...");
            signOut();
          }
    }
    else if(user){
      var email = user.email;
      if (confirm("Active user "+email)){
document.location.href='feed.html', 
  localStorage.setItem('EMAIL', email);
      }else{
            alert("Signing you out now...");
            signOut();
          }
    }else{
      alert("No Active user Found")
    }
  })
function makePage(){
   //Initialize Firebase 
   var firestore = firebase.firestore()
   
   //Variable to access database collection
   const db = firestore.collection("users")
   
     //Get Form Values
     let email = document.getElementById('email').value

  db.doc(email).set({
      Email: email
    }).then( () => {
      console.log("Data saved")
      document.location.href=('feed.html')
    }).catch((error) => {
      console.log(error)
    })

  db.doc(email).collection("posts").add({
      Email: email
    }).then( () => {
      console.log("Data saved")
      document.location.href=('feed.html')
    }).catch((error) => {
      console.log(error)
    })
}
