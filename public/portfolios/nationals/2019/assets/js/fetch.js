! function(t) {
    "use strict";
    if (!t.fetch) {
        var e = "URLSearchParams" in t,
            r = "Symbol" in t && "iterator" in Symbol,
            s = "FileReader" in t && "Blob" in t && function() {
                try {
                    return new Blob, !0
                } catch (t) {
                    return !1
                }
            }(),
            o = "FormData" in t,
            n = "ArrayBuffer" in t;
        if (n) var i = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            a = function(t) {
                return t && DataView.prototype.isPrototypeOf(t)
            },
            h = ArrayBuffer.isView || function(t) {
                return t && -1 < i.indexOf(Object.prototype.toString.call(t))
            };
        c.prototype.append = function(t, e) {
            t = d(t), e = y(e);
            var r = this.map[t];
            this.map[t] = r ? r + "," + e : e
        }, c.prototype.delete = function(t) {
            delete this.map[d(t)]
        }, c.prototype.get = function(t) {
            return t = d(t), this.has(t) ? this.map[t] : null
        }, c.prototype.has = function(t) {
            return this.map.hasOwnProperty(d(t))
        }, c.prototype.set = function(t, e) {
            this.map[d(t)] = y(e)
        }, c.prototype.forEach = function(t, e) {
            for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
        }, c.prototype.keys = function() {
            var r = [];
            return this.forEach(function(t, e) {
                r.push(e)
            }), p(r)
        }, c.prototype.values = function() {
            var e = [];
            return this.forEach(function(t) {
                e.push(t)
            }), p(e)
        }, c.prototype.entries = function() {
            var r = [];
            return this.forEach(function(t, e) {
                r.push([e, t])
            }), p(r)
        }, r && (c.prototype[Symbol.iterator] = c.prototype.entries);
        var u = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        _.prototype.clone = function() {
            return new _(this, {
                body: this._bodyInit
            })
        }, v.call(_.prototype), v.call(B.prototype), B.prototype.clone = function() {
            return new B(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new c(this.headers),
                url: this.url
            })
        }, B.error = function() {
            var t = new B(null, {
                status: 0,
                statusText: ""
            });
            return t.type = "error", t
        };
        var f = [301, 302, 303, 307, 308];
        B.redirect = function(t, e) {
            if (-1 === f.indexOf(e)) throw new RangeError("Invalid status code");
            return new B(null, {
                status: e,
                headers: {
                    location: t
                }
            })
        }, t.Headers = c, t.Request = _, t.Response = B, t.fetch = function(n, i) {
            return new Promise(function(r, t) {
                var e = new _(n, i),
                    o = new XMLHttpRequest;
                o.onload = function() {
                    var t = {
                        status: o.status,
                        statusText: o.statusText,
                        headers: function(t) {
                            var n = new c;
                            return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                                var e = t.split(":"),
                                    r = e.shift().trim();
                                if (r) {
                                    var o = e.join(":").trim();
                                    n.append(r, o)
                                }
                            }), n
                        }(o.getAllResponseHeaders() || "")
                    };
                    t.url = "responseURL" in o ? o.responseURL : t.headers.get("X-Request-URL");
                    var e = "response" in o ? o.response : o.responseText;
                    r(new B(e, t))
                }, o.onerror = function() {
                    t(new TypeError("Network request failed"))
                }, o.ontimeout = function() {
                    t(new TypeError("Network request failed"))
                }, o.open(e.method, e.url, !0), "include" === e.credentials ? o.withCredentials = !0 : "omit" === e.credentials && (o.withCredentials = !1), "responseType" in o && s && (o.responseType = "blob"), e.headers.forEach(function(t, e) {
                    o.setRequestHeader(e, t)
                }), o.send(void 0 === e._bodyInit ? null : e._bodyInit)
            })
        }, t.fetch.polyfill = !0
    }

    function d(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
        return t.toLowerCase()
    }

    function y(t) {
        return "string" != typeof t && (t = String(t)), t
    }

    function p(e) {
        var t = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return r && (t[Symbol.iterator] = function() {
            return t
        }), t
    }

    function c(e) {
        this.map = {}, e instanceof c ? e.forEach(function(t, e) {
            this.append(e, t)
        }, this) : Array.isArray(e) ? e.forEach(function(t) {
            this.append(t[0], t[1])
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
            this.append(t, e[t])
        }, this)
    }

    function l(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0
    }

    function b(r) {
        return new Promise(function(t, e) {
            r.onload = function() {
                t(r.result)
            }, r.onerror = function() {
                e(r.error)
            }
        })
    }

    function m(t) {
        var e = new FileReader,
            r = b(e);
        return e.readAsArrayBuffer(t), r
    }

    function w(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer
    }

    function v() {
        return this.bodyUsed = !1, this._initBody = function(t) {
            if (this._bodyInit = t)
                if ("string" == typeof t) this._bodyText = t;
                else if (s && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
            else if (o && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
            else if (e && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
            else if (n && s && a(t)) this._bodyArrayBuffer = w(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
            else {
                if (!n || !ArrayBuffer.prototype.isPrototypeOf(t) && !h(t)) throw new Error("unsupported BodyInit type");
                this._bodyArrayBuffer = w(t)
            } else this._bodyText = "";
            this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, s && (this.blob = function() {
            var t = l(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? l(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(m)
        }), this.text = function() {
            var t = l(this);
            if (t) return t;
            if (this._bodyBlob) return function(t) {
                var e = new FileReader,
                    r = b(e);
                return e.readAsText(t), r
            }(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                for (var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++) r[o] = String.fromCharCode(e[o]);
                return r.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, o && (this.formData = function() {
            return this.text().then(A)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }

    function _(t, e) {
        var r = (e = e || {}).body;
        if (t instanceof _) {
            if (t.bodyUsed) throw new TypeError("Already read");
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new c(t.headers)), this.method = t.method, this.mode = t.mode, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new c(e.headers)), this.method = function(t) {
                var e = t.toUpperCase();
                return -1 < u.indexOf(e) ? e : t
            }(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(r)
    }

    function A(t) {
        var n = new FormData;
        return t.trim().split("&").forEach(function(t) {
            if (t) {
                var e = t.split("="),
                    r = e.shift().replace(/\+/g, " "),
                    o = e.join("=").replace(/\+/g, " ");
                n.append(decodeURIComponent(r), decodeURIComponent(o))
            }
        }), n
    }

    function B(t, e) {
        e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new c(e.headers), this.url = e.url || "", this._initBody(t)
    }
}("undefined" != typeof self ? self : this);