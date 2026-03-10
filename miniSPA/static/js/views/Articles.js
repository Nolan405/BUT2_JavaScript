async function render_articles(data) {
    const body  = document.querySelector('body');
    body.innerHTML = "";

    let ul = document.createElement('ul')

    data.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = element.title;
        ul.appendChild(li)
    });

    body.appendChild(ul);
}