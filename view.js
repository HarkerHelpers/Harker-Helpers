const newse = document.querySelector('#news');

function newsR(doc){
    let li = document.createElement('li');
    let title = document.createElement('span');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let post = document.createElement('span');

  var img1 = document.createElement('img');
  img1.src = '/icons/pencil.svg';
  

  var img3 = document.createElement('img');
  img3.src = '/icons/eye-slash.svg';

  
    li.setAttribute('data-id', doc.id);
    title.textContent = doc.data().Type + ": " + doc.data().Title;
    name.textContent = "Name: " + doc.data().Name;
    email.textContent = "Email: " + doc.data().Email;
    post.textContent = doc.data().Post;
  let btn = document.createElement("button");
btn.appendChild(img1);
btn.name = "Com";
btn.id = "Com";
btn.class = "Com";
  btn.onclick = function goCom(){
    localStorage.setItem('TITLE', doc.data().Name + ":" + doc.data().Type + ":" + doc.data().tmnow);
    localStorage.setItem('UEM', doc.data().Email);
    localStorage.setItem('LIK', doc.data().Likes)
    document.location.href="inpo.html"
}

  let likbtn = document.createElement("button");
  var img4 = document.createElement('img');
  img4.src = '/icons/heart.svg';
  img4.id = doc.data().tmnow
  img4.name = "heartimg"
likbtn.appendChild(img4);
likbtn.name = "heart";
likbtn.id = doc.data().Time;
likbtn.class = "heart";
likbtn.onclick = function goLik(){
if(img4.getAttribute('src') === '/icons/heart.svg'){
document.getElementById(doc.data().tmnow)
  .src="/icons/heart-fill.svg";
document.getElementById(doc.data().Time)
  .style.backgroundColor = "#f00000";
    
   let pot = doc.data().Name + ":" + doc.data().Type + ":" + doc.data().tmnow
  let uem = doc.data().Email
var potato = db.collection("posts").doc(pot);
var tomato = db.collection("users").doc(uem).collection("posts").doc(pot);
const increment = firebase.firestore.FieldValue.increment(1);
 potato.update({
    Likes: increment
});
 tomato.update({
    Likes: increment
});
  }
  else {
  document.getElementById(doc.data().tmnow)
    .src="/icons/heart.svg";
  document.getElementById(doc.data().Time)
    .style.backgroundColor = "#858585"
    
   let pot = doc.data().Name + ":" + doc.data().Type + ":" + doc.data().tmnow
  let uem = doc.data().Email
var potato = db.collection("posts").doc(pot);
var tomato = db.collection("users").doc(uem).collection("posts").doc(pot);
const deincrement = firebase.firestore.FieldValue.increment(-1);
    
 potato.update({
    Likes: deincrement
});
 tomato.update({
    Likes: deincrement
});
  }
}


    li.appendChild(title);
    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(post);
    li.appendChild(btn);
    li.appendChild(likbtn);
  

    newse.appendChild(li);
}

// getting data
db.collection('posts').orderBy("Time", "desc").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        newsR(doc);
    });
});