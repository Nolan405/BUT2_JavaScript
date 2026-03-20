async function render_articles(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const title = document.createElement('h1');
    title.textContent = "Articles de la Constitution";
    app.appendChild(title);

    let ul = document.createElement('ul');
    ul.className = "article-list";

    data.forEach(element => {
        let li = document.createElement('li');
        let a = document.createElement('a')

        li.className = "article-item";
        a.href = `#/articles/${element.id}/`;
        a.textContent = element.title;

        li.appendChild(a);
        ul.appendChild(li);
    });

    app.appendChild(ul);
}