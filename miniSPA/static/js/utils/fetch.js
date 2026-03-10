async function Articles() {
    const url = "http://localhost:3000/articles"
    getData(url);
}

async function Home() {
    const url = "http://localhost:3000/introduction"
    getData(url);
}

async function About() {
    const url = "/articles"
    getData(url);
}

async function ArticlesShow() {
    const url = ""
    getData(url);
}

async function getData(url) {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.status)
    } else {
        console.log(response)
        render_articles(response);
    }
}