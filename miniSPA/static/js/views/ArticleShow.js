async function render_single_article(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const backBtn = document.createElement('a');
    backBtn.href = "#/articles/";
    backBtn.textContent = "← Retour aux articles";
    backBtn.className = "back-button"; 
    app.appendChild(backBtn);

    const title = document.createElement('h1');
    title.textContent = data.title;
    app.appendChild(title);

    const content = document.createElement('p');
    content.textContent = data.text;
    content.className = "article-content";
    app.appendChild(content);

    if (data.see_more) {
        const externalLink = document.createElement('a');
        externalLink.href = data.see_more;
        externalLink.textContent = "Voir sur Légifrance ↗";
        externalLink.target = "_blank";
        externalLink.className = "external-link";
        app.appendChild(externalLink);
    }

    if (data.modified_by && data.modified_by.length > 0) {
        const modTitle = document.createElement('h3');
        modTitle.textContent = "Modifié par :";
        app.appendChild(modTitle);

        const modUl = document.createElement('ul');
        data.modified_by.forEach((link, index) => {
            const modLi = document.createElement('li');
            const modA = document.createElement('a');
            modA.href = link;
            modA.textContent = `Version modifiée n°${index + 1}`;
            modA.target = "_blank";
            modLi.appendChild(modA);
            modUl.appendChild(modLi);
        });
        app.appendChild(modUl);
    }
}