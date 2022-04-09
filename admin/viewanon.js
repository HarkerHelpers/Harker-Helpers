const newse = document.querySelector('#news');

// create element & render cafe
function newsR(doc){
    let li = document.createElement('li');
    let title = document.createElement('span');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let post = document.createElement('span');

  var img1 = document.createElement('img');
  img1.src = '/icons/pencil.svg';
  
  var img2 = document.createElement('img');
  img2.src = '/icons/trash.svg';

  var img3 = document.createElement('img');
  img3.src = '/icons/eye.svg';
  
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
    let delbtn = document.createElement("button");
  delbtn.appendChild(img2);
delbtn.name = "Del";
delbtn.id = "Del";
delbtn.class = "Del";
  delbtn.onclick = function goDel(){    
    localStorage.setItem('DEL', doc.data().Name + ":" + doc.data().Type + ":" + doc.data().tmnow);
    var uem = doc.data().Email
    var DEL = localStorage.getItem('DEL')
    if (confirm('Are you sure you want to delete '+uem + "'s Post "+ DEL +"?")){
      db.collection('anopost').doc(DEL).delete()
      console.log("1/2 Deleted")
      db.collection('users').doc(uem).collection('posts').doc(DEL).delete()
      console.log("2/2 Deleted")
          localStorage.removeItem('DEL'), setTimeout(() => window.location.reload(), 1000);
    }else{
      alert("Ok!");
    }}



    li.appendChild(title);
    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(post);
    li.appendChild(btn);
    li.appendChild(delbtn);
  

    newse.appendChild(li);
}

// getting data
db.collection('anopost') .orderBy("Time", "desc").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        newsR(doc);
    });
});