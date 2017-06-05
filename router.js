function route(handle, pathname,queryname) {

    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](queryname);
    } else {
        return "No request handler found for ";
    }

}

exports.route = route;