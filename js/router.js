const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
    404: {
        template: "/templates/404.html",
        title: "404 | Noobrammer",
        document: "Page not found",
    },
    "/": {
        template: "/templates/index.html",
        title: "Home | Noobrammer",
        document: "Home page",
    },
    "/about": {
        template: "/templates/about.html",
        title: "Home | Noobrammer",
        document: "Home page",
    },
    "/source": {
        template: "/templates/source.html",
        title: "Home | Noobrammer",
        document: "Home page",
    }
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route.template).then((data) => data.text());
    document.getElementById("content").innerHTML = html;
}


window.onpopstate = handleLocation;
window.route = route;

handleLocation();