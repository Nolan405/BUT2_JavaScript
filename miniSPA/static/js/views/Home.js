async function render_home(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    let h1 = document.createElement('h1');
    h1.textContent = "Constitution du 4 octobre 1958";
    app.appendChild(h1);

    let p = document.createElement('p');
    p.textContent = data; 
    app.appendChild(p);
}