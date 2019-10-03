module.exports.get = function (app) {

    // Obtendo lista de rotas ordenadas
    const router_list = (function () {
        const list = [];
        app._router.stack.forEach(function (expRoute) {
            if (expRoute.name === 'router') {
                expRoute.handle.stack.forEach(r => {
                    const uri = r.route.path;
                    Object.keys(r.route.methods).forEach(method => {
                        if (r.route.methods[method]) {
                            list.push({
                                method: method.toUpperCase(),
                                uri: uri
                            });
                        }
                    })
                })
            }
        })
        return list.sort((a, b) => {
            if (a.uri < b.uri) {
                return -1;
            } else if (a.uri > b.uri) {
                return +1;
            } else {
                if (a.method < b.method) {
                    return -1;
                } else if (a.method > b.method) {
                    return +1;
                } else {
                    return 0;
                }
            }
        })
    })();

    return router_list;

}
