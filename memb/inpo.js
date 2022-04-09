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
      

    li.appendChild(title);
    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(post);

    newse.appendChild(li);
}

let Title = localStorage.getItem('TITLE');

db.collection('posts').doc(Title).collection('comments').orderBy("Time", "asc").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        newsR(doc);
    });
});