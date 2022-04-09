const newse = document.querySelector('#news');

// create element & render cafe
function newsR(doc){
    let li = document.createElement('li');
    let email = document.createElement('span');
    let password = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    email.textContent = doc.data().Email;
    password.textContent = doc.data().Password;
  

    li.appendChild(email);
    li.appendChild(password);

    newse.appendChild(li);
}

// getting data
db.collection('users').orderBy("Email", "desc").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        newsR(doc);
    });
});