const routes = {
    '#/'              : Home,
    '#/about/'        : About,
    '#/articles/'     : Articles,
    '#/articles/:id/' : ArticleShow
}

const router = async () => {
    const path = location.hash;
    
    if (path.startsWith('#/articles/') && path.split('/').length >= 4) {
        ArticleShow();
        return;
    }

    const view = routes[path];
    if (view) {
        view();
    } 
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);