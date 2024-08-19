(function(w, d, s, n, a) {
    if (!w[n]) {
        var methods = 'call,catch,on,once,set,then,track'.split(',');
        var i, o = function(n) {
            return typeof n === 'function' ? o.l.push([arguments]) && o :
                   function() { return o.l.push([n, arguments]) && o };
        };
        var t = d.getElementsByTagName(s)[0];
        var j = d.createElement(s);
        j.async = true;
        j.src = 'https://cdn.fundraiseup.com/widget/' + a;
        t.parentNode.insertBefore(j, t);
        o.s = Date.now();
        o.v = 4;
        o.h = w.location.href;
        o.l = [];
        for (i = 0; i < methods.length; i++) o[methods[i]] = o(methods[i]);
        w[n] = o;
    }
})(window, document, 'script', 'FundraiseUp', 'AEMZUDUM');