require("pronto-prova");
// questo è da usare insieme al file di lettura, da solo non funziona
let utils = require("../application/utils")
,   ppp = utils.pathName()
,   _loggedIn = null
,   _admin = true
,   LoginStore = module.exports = assign({}, EventEmitter.prototype, {
        emitChange: function () { this.emit("prova"); }
    ,   addChangeListener: function (cb) { this.on("prova", cb); }
    ,   removeChangeListener: function (cb) { this.removeListener("prova", cb); }

    ,   isLoggedIn: function () {
            return _loggedOut;
        }
    ,   isUser: function () {
            return user;
        }
    })
;
