const routes = {
    '/#'              : Home,
    '/#/about'        : About,
    '/#/articles'     : Articles,
    '/#/articles/:id' : ArticlesShow
}

const router = async () => {
    const path = location.hash || '/#';
    
    const view = routes[path];
    if (view) {
        view();
    } 
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);