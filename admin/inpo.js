const newse = document.querySelector('#news');

// create element & render cafe
function newsR(doc){
    let li = document.createElement('li');
    let title = document.createElement('span');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let post = document.createElement('span');
  
    li.setAttribute('data-id', doc.id);
    title.textContent = "Comment: " + doc.data().Title;
    name.textContent = "Name: " + doc.data().Name;
    email.textContent = "Email: " + doc.data().Email;
    post.textContent = doc.data().Post;
      let delbtn = document.createElement("button");
delbtn.innerHTML = "Delete Comment";
delbtn.name = "Del";
delbtn.id = "Del";
delbtn.class = "Del";
  delbtn.onclick = function goDel(){    
    localStorage.setItem('DEL', doc.data().Name + ":" + doc.data().Type + ":" + doc.data().tmnow);
    var Email = doc.data().Email
    var DELTACO = localStorage.getItem('DEL')
    var Title = localStorage.getItem('TITLE')
    if (confirm('Are you sure you want to delete '+ DELTACO +"?")){db.collection('posts').doc(Title).collection('comments').doc(DELTACO).delete()
    alert("Comment "+DELTACO+" has been successfully deleted!");
    localStorage.removeItem('DEL'), setTimeout(() => window.location.reload(), 1000);
    }else{
      alert("Ok!");
    }};

    li.appendChild(title);
    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(post);
    li.appendChild(delbtn);

    newse.appendChild(li);
}

let Title = localStorage.getItem('TITLE');

db.collection('posts').doc(Title).collection('comments').orderBy("Time", "asc").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        newsR(doc);
    });
});