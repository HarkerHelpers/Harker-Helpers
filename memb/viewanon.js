const newse = document.querySelector('#news');

// create element & render cafe
function newsR(doc){
  
var img1 = document.createElement('img');
  img1.src = '/icons/pencil.svg';

    let li = document.createElement('li');
    let title = document.createElement('span');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let post = document.createElement('span');
  
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
    localStorage.setItem('UEM', doc.data().Email)
    document.location.href="inpo.html"
}


    li.appendChild(title);
    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(post);
    li.appendChild(btn);
  

    newse.appendChild(li);
}

// getting data
db.collection('anopost') .orderBy("Time", "desc").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        newsR(doc);
    });
});