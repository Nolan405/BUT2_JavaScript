async function Home() {
    const url = "http://localhost:3000/introduction";
    getData(url, render_home);
}

async function Articles() {
    const url = "http://localhost:3000/articles";
    getData(url, render_articles);
}


async function About() {
    const url = "/articles"
    getData(url);
}

async function ArticleShow() {
    const pathParts = window.location.hash.split('/'); 
    const id = pathParts[2]; 
    if (id) {
        const url = `http://localhost:3000/articles/${id}`;
        getData(url, render_single_article);
    }
}

async function getData(url, callback) {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.status);
    }
    const text = await response.text();
    try {
        const data = JSON.parse(text);
        console.log(data)
        callback(data);
    } catch (e) {
        callback(text);
    }
}