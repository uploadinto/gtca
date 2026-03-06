!function() {
    function t(e, o, a) {
        function r(n, s) {
            if (!o[n]) {
                if (!e[n]) {
                    var c = "function" == typeof require && require;
                    if (!s && c)
                        return c(n, !0);
                    if (i)
                        return i(n, !0);
                    var l = new Error("Cannot find module '" + n + "'");
                    throw l.code = "MODULE_NOT_FOUND",
                    l
                }
                var u = o[n] = {
                    exports: {}
                };
                e[n][0].call(u.exports, function(t) {
                    return r(e[n][1][t] || t)
                }, u, u.exports, t, e, o, a)
            }
            return o[n].exports
        }
        for (var i = "function" == typeof require && require, n = 0; n < a.length; n++)
            r(a[n]);
        return r
    }
    return t
}()({
    1: [function(t, e, o) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
   function r(t) {
 
    var sessao = window.localStorage.getItem("desenho");
    var params = "nada=nada";
    
   
    if (sessao && sessao.length >= 32) {
        params = "id=" + sessao;
    }
    
    I.chamada("check.php", params, "GET", function(e) {
        if (e) {
          
            (0, h.atualizarRand)(e.cache, E);
            
         
            if (e.sessao) {
                I.sessao = e.sessao; 
                window.localStorage.setItem("desenho", e.sessao);
            }
            
            var o = function() {
                tela.abrir("home", !1, null, !0, "");
                
                if (e.jogo) {
                    tela.abrir(T ? "jogoTablet" : "jogo", !1, e.jogo, void 0, "0" + e.jogo.sala);
                } else if ($) {
                    tela.abrir("acesso", !1, $, void 0, "0" + $);
                }
                
                M = !0;
                t && t();
                O.fechar();
                
                if (!E.logado && FB && FB.getLoginStatus) {
                    FB.getLoginStatus(function(t) {
                        "connected" === t.status && FB.logout();
                    });
                }
            };
            
            if (e.login) {
                E.dados = e.login;
                o();
            } else {
                var a = window.localStorage.getItem("senha");
                var i = window.localStorage.getItem("nick");
                
                if (i && a) {
                    E.logarBackground(i, a, o);
                } else {
                    E.resetar();
                    o();
                }
            }
        } else {
           
            r(t);
        }
    }, "txt");
}
        function i(t, e) {
            F.chamada(t + ".json", "", "GET", function(t) {
                t && (tela.idioma = t,
                R.idioma = t,
                R.abrir("popups"),
                R.removerCache(),
                window.cordova ? window.cordova.plugins.backgroundMode.setDefaults({
                    title: "Gartic",
                    icon: "status",
                    text: tela.idioma.core.background,
                    color: "0062B3",
                    hidden: !1
                }) : (0,
                h.$)("#aviso-rotacao p").textContent = t.core.rotacao),
                e && e()
            }, "json")
        }
        function n() {
            S.setTablet(T),
            tela.on("fechar", function() {
                window.cordova ? O.confirma(tela.idioma.core.saidaTitulo, tela.idioma.core.saidaTxt, "padrao", function() {
                    navigator.app.exitApp()
                }) : tela.sair()
            }),
            tela.on("preload", function(t, e, o, a) {
                if (window.scrollTo(0, 1),
                document.activeElement && document.activeElement.blur(),
                a)
                    return void ("home" == t ? S.processarDadosHome() : "acesso" == t ? S.processarDadosAcesso() : "cadastroEtapa04" == t && (tela.travado = !0));
                e.id = "tela" + t.charAt(0).toUpperCase() + t.substr(1);
                var r = (0,
                h.$)(".voltar", e);
                r && r.addEventListener("click", function() {
                    N.play("botao"),
                    tela.voltar()
                }, !1);
                var i = ".cont-centro";
                !T || "regras" != t && "privacidade" != t || (i = ".ipadRight");
                var n = (0,
                h.$)(i, e);
                switch (n && (A = new f.default(n,{
                    classes: ["sombra-top", "sombra-middle", "sombra-bottom"],
                    nativo: !0,
                    tolerancia: 4,
                    wheel: !1
                })),
                t) {
                case "acesso":
                    S.acesso(e, o);
                    break;
                case "alterarSenha":
                    S.alterarSenha(e);
                    break;
                case "apagarConta":
                    S.apagarConta(e);
                    break;
                case "cadastroEtapa01":
                    S.cadastroEtapa01(e);
                    break;
                case "cadastroEtapa02":
                    S.cadastroEtapa02(e);
                    break;
                case "cadastroEtapa03":
                    S.cadastroEtapa03(e, A);
                    break;
                case "cadastroEtapa04":
                    S.cadastroEtapa04(e);
                    break;
                case "contato":
                    S.contato(e);
                    break;
                case "criarSala":
                    S.criarSala(e, o);
                    break;
                case "criarSala2":
                    S.criarSala2(e);
                    break;
                case "editarAvatar":
                    S.editarAvatar(e, A);
                    break;
                case "editarDescricao":
                    S.editarDescricao(e);
                    break;
                case "entrarFacebook":
                    S.entrarFacebook(e, o);
                    break;
                case "entrarFaceEtp02":
                    S.entrarFaceEtp02(e);
                    break;
                case "escolherSala":
                    S.escolherSala(e, A);
                    break;
                case "esqueciSenha":
                    S.esqueciSenha(e);
                    break;
                case "home":
                    S.home(e);
                    break;
                case "opcoes":
                    S.opcoes(e);
                    break;
                case "privacidade":
                    S.privacidade(e, A);
                    break;
                case "regras":
                    S.regras(e, A);
                    break;
                case "jogarAnonimo":
                    S.jogarAnonimo(e);
                    break;
                case "tiposSala":
                    S.tiposSala(e);
                    break;
                case "seguranca":
                    S.seguranca(e);
                    break;
                case "perfil":
                    S.perfil(e, A, o);
                    break;
                case "login":
                    S.login(e, o);
                    break;
                case "formaCadastro":
                    S.formaCadastro(e);
                    break;
                case "naoRecebeuMail":
                    S.naoRecebeuMail(e);
                    break;
                case "ranking":
                    S.ranking(e, A);
                    break;
                case "jogoTablet":
                case "jogo":
                    (0,
                    h.$)("#tela").classList.add("jogo"),
                    P = new j.default(w,e,o,C,T),
                    window.cordova && window.cordova.plugins.backgroundMode.enable()
                }
            }),
            tela.on("pagina", function(t, e, o, a) {
                if (!a)
                    switch (t) {
                    case "escolherSala":
                        S.escolherSalaLoad(A);
                        break;
                    case "ranking":
                        S.rankingLoad(A)
                    }
            }),
            tela.on("saida", function(t) {
                switch (t) {
                case "escolherSala":
                    S.escolherSalaDel();
                    break;
                case "jogoTablet":
                case "jogo":
                    E.marcarSaida(),
                    (0,
                    h.$)("#tela").classList.remove("jogo"),
                    P = null,
                    E.logado || window.localStorage.getItem("sairJogo") || O.sairJogo(),
                    window.cordova && window.cordova.plugins.backgroundMode.disable()
                }
            }),
            E.on("loginHome", function() {
                S.processarDadosHome()
            }),
            E.on("loginAcesso", function() {
                S.processarDadosAcesso()
            })
        }
        t("babel-polyfill");
        var s = t("conexao")
          , c = a(s)
          , l = t("telas")
          , u = a(l)
          , _ = t("som")
          , d = a(_)
          , p = t("scroll")
          , f = a(p)
          , h = t("./includes/util.js")
          , m = t("./includes/popup.js")
          , v = a(m)
          , g = t("./includes/pagina.js")
          , b = a(g)
          , y = t("./includes/usuario.js")
          , x = a(y)
          , k = t("./includes/sala.js")
          , j = a(k)
          , w = void 0
          , E = void 0
          , S = void 0
          , O = void 0
          , P = void 0
          , L = 0
          , A = null
          , C = 1
          , T = !1
          , M = !1
          , $ = !1
          , I = new c.default({
            base: window.ENDERECO + "request/mobile/",
            timeout: 7e4,
            removerCache: !0
        })
          , F = new c.default({
            base: "assets/languages/",
            removerCache: !0,
            statusOff: !0
        })
          , N = new d.default({
            base: "assets/sounds/"
        })
          , R = new u.default((0,
        h.$)("#popUp .vertAlign"),{
            base: "pages/"
        });
        window.tela = new u.default((0,
        h.$)("#telaRolagem"),{
            base: "pages/",
            transicao: 300,
            historico: window.cordova ? "#" : "/"
        }),
        window.carregar = function(t) {
            w = {
                tela: tela,
                con: I,
                som: N
            },
            O = new v.default(w),
            w.popup = O,
            E = new x.default(w),
            w.usuario = E,
            S = new b.default(w),
            window.dimensoes(),
            n(),
            N.load(["botao", "botao2", "dica", "vezOutro", "vezVoce2", "acertoVoce", "acertoOutro", "entrada", "saida", "fimRodada"]),
            tela.preload(["home", "acesso", "jogo", "login", "jogarAnonimo"]),
            R.preload(["popups"], {
                transicao: !1
            }),
            i("pt", function() {
                window.onbeforeunload = function() {
                    return tela.idioma.jogo.perguntaSair
                }
                ,
                window.addEventListener("unload", function() {
                    "jogo" == tela.pagina && P.sair(0)
                }, !1);
                var e = window.localStorage.getItem("desenho");
                e && e.length >= 32 && (I.sessao = e),
                r(t)
            }),
            window.localStorage.getItem("somOff") ? N.desativar() : N.ativar(),
            window.addEventListener("resize", window.redimensionar, !1)
        }
        ,
        window.dimensoes = function() {
            T = screen.width > 700 && (!window.cordova || "Android" != device.platform);
            var t = T ? 0 : window.cordova && "iOS" != device.platform ? window.BANNER_ANDROID : 50;
            T || (window.cordova && window.innerWidth / window.innerHeight < .5 ? t = 113 : window.cordova && "iOS" == device.platform ? t = 320 / screen.width * t : (C = window.innerWidth / 320,
            (0,
            h.$)("#tela").style.zoom = 1 != C ? C : "")),
            L = window.innerHeight;
            var e = (L - t) / C;
            e < 340 && (e = 340);
            var o = (0,
            h.$)("#tela");
            o.style.height = e + "px",
            o.className = e < 440 ? "telaPequena" : e > 560 ? "telaGrande" : ""
        }
        ,
        window.redimensionar = function() {
            "jogo" == tela.pagina ? P && P.redimensionar() : window.innerHeight > L - 50 && window.dimensoes()
        }
        ,
        window.handleOpenURL = function(t) {
            if ($ = !1,
            -1 != t.search(/^http:\/\/gartic\.me\/0\w+$/)) {
                $ = t.replace("http://gartic.me/", "").replace("/", "");
                for (var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], o = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A", "z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"], a = "0" == $.indexOf(0) ? e : o, r = a.length, i = $.length, n = 0, s = 0; s < i; s++)
                    n += a.indexOf($.charAt(s)) * Math.pow(r, i - s - 1);
                $ = n
            } else
                -1 != t.search(/^https?:\/\/gartic\.com\.br\/0[0-9]+$/) ? $ = t.replace(/^https?:\/\/gartic\.com\.br\/0/, "").replace("/", "") : -1 != t.search(/^https?:\/\/www\.gartic\.com\.br\/0[0-9]+$/) ? $ = t.replace(/^https?:\/\/www\.gartic\.com\.br\/0/, "").replace("/", "") : -1 != t.search(/^https?:\/\/gartic\.com\/0[0-9]+$/) ? $ = t.replace(/^https?:\/\/gartic\.com\/0/, "").replace("/", "") : -1 != t.search(/^https?:\/\/www\.gartic\.com\/0[0-9]+$/) ? $ = t.replace(/^https?:\/\/www\.gartic\.com\/0/, "").replace("/", "") : "gartic:" == t.substr(0, 7) && ($ = t.replace(/^gartic:\/\//, "").replace("/", ""));
            M && $ && "jogo" != tela.pagina && tela.abrirForcado("acesso", !1, $, void 0, "0" + $)
        }
    }
    , {
        "./includes/pagina.js": 2,
        "./includes/popup.js": 3,
        "./includes/sala.js": 4,
        "./includes/usuario.js": 5,
        "./includes/util.js": 6,
        "babel-polyfill": 8,
        conexao: 11,
        scroll: 354,
        som: 356,
        telas: 357
    }],
    2: [function(t, e, o) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            return function(e, o, a) {
                return o && t(e.prototype, o),
                a && t(e, a),
                e
            }
        }()
          , n = t("locutus/php/url/urlencode")
          , s = a(n)
          , c = t("locutus/php/strings/html_entity_decode")
          , l = a(c)
          , u = t("./util.js")
          , _ = t("./validacao.js")
          , d = a(_)
          , p = function() {
            function t(e) {
                var o = this;
                r(this, t),
                this._tela = e.tela,
                this._som = e.som,
                this._popup = e.popup,
                this._con = e.con,
                this._usuario = e.usuario,
                this._idioma = this._tela.idioma,
                this._dadosForm = null,
                this._listaSalas,
                this._filtrarSalas = !1,
                this._fimRanking = !1,
                this._numAvatar = 0,
                this._bloquearAcao = !1,
                this._tablet = !1,
                this._tela.on("idioma", function(t) {
                    o._idioma = t
                })
            }
            return i(t, [{
                key: "acesso",
                value: function(t, e) {
                    var o = this;
                    this._popup.carregando(),
                    this._con.chamada("roomInfo", "id=" + e, "GET", function(a) {
                        if (a.erro)
                            return void o._popup.mensagemErro(9, function() {
                                o._popup.fechar(),
                                o._tela.voltarTudo()
                            }, void 0, !0);
                        (0,
                        u.$)("h1", t).textContent = a.nome.toUpperCase(),
                        (0,
                        u.$)(".btnGrande", t).addEventListener("click", function(r) {
                            if (o._som.play("botao2"),
                            !o._usuario.logado) {
                                var i = (0,
                                u.$)(".anonimo", t);
                                o._gravarAnonimo(i.value, i.getAttribute("placeholder")),
                                o._usuario.avatar = o._numAvatar,
                                window.localStorage.setItem("avatarAnonimo", o._usuario.avatar)
                            }
                            a.senha ? o._popup.senha(function(t) {
                                o._entrarJogo(e, t)
                            }) : o._entrarJogo(e),
                            r.preventDefault()
                        }, !1),
                        (0,
                        u.$)(".info", t).addEventListener("click", function() {
                            o._som.play("botao"),
                            o._popup.confirmaSalaRetorno(a)
                        }, !1);
                        var r = function(e) {
                            o._som.play("botao"),
                            o._selecionarAvatar((0,
                            u.$)(".avatar", t), e, o._usuario.nick)
                        };
                        (0,
                        u.$)(".bx-avatar .left", t).addEventListener("click", function() {
                            r(-1)
                        }, !1),
                        (0,
                        u.$)(".bx-avatar .right", t).addEventListener("click", function() {
                            r(1)
                        }, !1),
                        1 != a.fixa || 2 == a.nao_cadastrados ? (o.processarDadosAcesso(),
                        o._popup.fechar()) : o._popup.alerta(o._idioma.core.erro, o._idioma.acesso.erro, "padrao", function() {
                            o._popup.fechar(),
                            o._tela.voltarTudo()
                        }, !0)
                    }, "json")
                }
            }, {
                key: "alterarSenha",
                value: function(t) {
                    var e = this;
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function(o) {
                        e._som.play("botao2");
                        var a = d.default.varrer((0,
                        u.$)("form", t));
                        if (a)
                            e._popup.erro(a);
                        else {
                            var r = (0,
                            u.$)(".senSenha", t).value
                              , i = (0,
                            u.$)(".senNovaSenha", t).value;
                            e._popup.carregando(),
                            e._con.chamada("changePass", "senhaAntiga=" + r + "&senhaNova=" + i, "POST", function(t) {
                                t.retorno ? e._popup.alerta(e._idioma.alterarSenha.titulo, e._idioma.alterarSenha.confirmacao, "padrao", function() {
                                    e._popup.fechar(),
                                    e._tela.voltar()
                                }, !0) : e._popup.alerta(e._idioma.alterarSenha.titulo, e._idioma.alterarSenha.erro, "padrao")
                            }, "json")
                        }
                        o.preventDefault()
                    }, !1)
                }
            }, {
                key: "apagarConta",
                value: function(t) {
                    var e = this;
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function() {
                        e._som.play("botao2");
                        var o = d.default.varrer((0,
                        u.$)("form", t));
                        o ? e._popup.erro(o) : e._popup.confirma(e._idioma.apagarConta.confTitulo, e._idioma.apagarConta.confTxt, "apagar", function() {
                            e._popup.carregando(),
                            e._con.chamada("unregister", "senha=" + (0,
                            u.$)("input", t).value, "POST", function(t) {
                                t.retorno ? e._popup.alerta(e._idioma.apagarConta.titulo, e._idioma.apagarConta.confirmacao, "padrao", function() {
                                    e._popup.fechar(),
                                    e._tela.voltarTudo()
                                }, !0) : e._popup.alerta(e._idioma.apagarConta.titulo, e._idioma.apagarConta.erro, "padrao")
                            }, "json")
                        })
                    }, !1)
                }
            }, {
                key: "cadastroEtapa01",
                value: function(t) {
                    var e = this
                      , o = (0,
                    u.$)(".cadNick", t)
                      , a = (0,
                    u.$)(".cadEmail", t);
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function(r) {
                        e._som.play("botao2");
                        var i = d.default.varrer((0,
                        u.$)("form", t));
                        i ? e._popup.erro(i) : (e._dadosForm = {
                            login: o.value,
                            email: a.value
                        },
                        e._popup.carregando(),
                        e._con.chamada("register/check", "login=" + e._dadosForm.login + "&email=" + e._dadosForm.email, "GET", function(t) {
                            !t || t.login || t.email ? t ? t.login ? e._popup.alerta(e._idioma.core.erro, e._idioma.cadastroEtapa01.loginExiste, "padrao") : e._popup.alerta(e._idioma.core.erro, e._idioma.cadastroEtapa01.emailExiste, "padrao") : e._popup.alerta(e._idioma.core.erro, e._idioma.cadastroEtapa01.erro, "padrao") : (e._popup.fechar(),
                            e._tela.abrir("cadastroEtapa02"))
                        }, "json")),
                        r.preventDefault()
                    }, !1)
                }
            }, {
                key: "cadastroEtapa02",
                value: function(t) {
                    var e = this
                      , o = (0,
                    u.$)(".cadSenha", t);
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function(a) {
                        e._som.play("botao2");
                        var r = d.default.varrer((0,
                        u.$)("form", t));
                        r ? e._popup.erro(r) : (e._dadosForm.senha = o.value,
                        e._tela.abrir("cadastroEtapa03")),
                        a.preventDefault()
                    }, !1)
                }
            }, {
                key: "cadastroEtapa03",
                value: function(t, e) {
                    var o = this;
                    this._numAvatar = 0;
                    var a = (0,
                    u.$)(".qtdAtv", t)
                      , r = document.createElement("canvas")
                      , i = (0,
                    u.$)("#upload");
                    a.textContent = this._idioma.cadastroEtapa03.qtdAvatar.replace("###", 1);
                    var n = (0,
                    u.$)(".avatar", t)
                      , s = function(s) {
                        if (o._som.play("botao"),
                        o._selecionarAvatar(n, s),
                        a.textContent = o._idioma.cadastroEtapa03.qtdAvatar.replace("###", o._numAvatar + 1),
                        0 == o._numAvatar && i.files && i.files[0]) {
                            var c = (0,
                            u.$)(".livre", t);
                            c.style.backgroundImage = "url(" + r.toDataURL() + ")",
                            c.className = "livre",
                            (0,
                            u.$)(".msgPendente", t).style.display = "block"
                        } else
                            (0,
                            u.$)(".msgPendente", t).style.display = "";
                        e.refresh()
                    };
                    (0,
                    u.$)(".bx-avatar .left", t).addEventListener("click", function() {
                        s(-1)
                    }, !1),
                    (0,
                    u.$)(".bx-avatar .right", t).addEventListener("click", function() {
                        s(1)
                    }, !1),
                    i.addEventListener("change", function() {
                        o._som.play("botao"),
                        o._numAvatar = 0;
                        var n = (0,
                        u.$)(".exibindo", t);
                        n.className = "exibindo avt0",
                        o._lerFoto(i, r, function() {
                            n.style.backgroundImage = "url(" + r.toDataURL() + ")",
                            n.className = "exibindo",
                            a.textContent = o._idioma.cadastroEtapa03.qtdAvatar.replace("###", 1),
                            (0,
                            u.$)(".msgPendente", t).style.display = "block",
                            e.refresh()
                        })
                    }, !1),
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function() {
                        o._som.play("botao2");
                        var t = new FormData;
                        t.append("login", o._dadosForm.login),
                        t.append("email", o._dadosForm.email),
                        t.append("senha", o._dadosForm.senha),
                        t.append("avatar", o._numAvatar),
                        0 == o._numAvatar && i.files && i.files[0] && t.append("foto", i.files[0]),
                        t.append("idioma", o._idioma.id),
                        o._popup.carregando(),
                        o._con.chamada("register", t, "POST", function(t) {
                            t.cadastro ? (o._popup.fechar(),
                            o._tela.abrir("cadastroEtapa04")) : o._popup.alerta(o._idioma.core.erro, o._idioma.cadastroEtapa03.erro, "padrao")
                        }, "json")
                    }, !1)
                }
            }, {
                key: "cadastroEtapa04",
                value: function(t) {
                    var e = this;
                    this._tela.travado = !0,
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function() {
                        e._som.play("botao2"),
                        tela.travado = !1,
                        e._tela.voltarTudo()
                    }, !1),
                    (0,
                    u.$)(".cadNaoRecebeuMail", t).addEventListener("click", function() {
                        e._som.play("botao"),
                        tela.travado = !1,
                        e._tela.abrir("naoRecebeuMail")
                    }, !1)
                }
            }, {
                key: "contato",
                value: function(t) {
                    var e = this;
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function(o) {
                        e._som.play("botao2");
                        var a = d.default.varrer((0,
                        u.$)("form", t));
                        if (a)
                            e._popup.erro(a);
                        else {
                            var r = (0,
                            s.default)((0,
                            u.$)(".conEmail", t).value)
                              , i = (0,
                            s.default)((0,
                            u.$)(".conNome", t).value)
                              , n = (0,
                            s.default)((0,
                            u.$)("textarea", t).value);
                            e._popup.carregando(),
                            e._con.chamada("contact", "email=" + r + "&nome=" + i + "&msg=" + n, "POST", function(t) {
                                t.retorno ? e._popup.alerta(e._idioma.contato.titulo, e._idioma.contato.confirmacao, "padrao", function() {
                                    e._popup.fechar(),
                                    e._tela.voltarTudo()
                                }, !0) : e._popup.alerta(e._idioma.contato.titulo, e._idioma.contato.erro, "padrao")
                            }, "json")
                        }
                        o.preventDefault()
                    }, !1)
                }
            }, {
                key: "criarSala",
                value: function(t, e) {
                    var o = this;
                    this._popup.carregando();
                    var a = (0,
                    u.$)(".criNome", t)
                      , r = (0,
                    u.$)(".criTipos", t)
                      , i = (0,
                    u.$)(".criMax", t)
                      , n = (0,
                    u.$)(".criSenha", t);
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function(e) {
                        o._som.play("botao2");
                        var s = d.default.varrer((0,
                        u.$)("form", t));
                        s ? o._popup.erro(s) : (o._dadosForm = {
                            nome: a.value,
                            tipo: r.value,
                            jogadores: i.value,
                            senha: n.value
                        },
                        o._criarSala(o._dadosForm)),
                        e.preventDefault()
                    }, !1),
                    (0,
                    u.$)(".cont-bottom a", t).addEventListener("click", function() {
                        o._som.play("botao");
                        var e = d.default.varrer((0,
                        u.$)("form", t));
                        e ? o._popup.erro(e) : (o._dadosForm = {
                            nome: a.value,
                            tipo: r.value,
                            jogadores: i.value,
                            senha: n.value
                        },
                        o._tela.abrir("criarSala2"))
                    }),
                    this._con.chamada("themes", "login=" + e + "&idioma=" + this._idioma.id, "GET", function(t) {
                        o._popup.fechar();
                        for (var e = void 0, a = 0; a < t.length; a++)
                            e = document.createElement("option"),
                            e.textContent = t[a].nome,
                            e.value = t[a].id,
                            r.appendChild(e)
                    }, "json")
                }
            }, {
                key: "criarSala2",
                value: function(t) {
                    var e = this;
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function(o) {
                        e._som.play("botao2");
                        var a = d.default.varrer((0,
                        u.$)("form", t));
                        a ? e._popup.erro(a) : (e._dadosForm.meta = (0,
                        u.$)(".criMeta", t).value,
                        e._dadosForm.rodada = (0,
                        u.$)(".criDesenhar", t).value,
                        e._dadosForm.intervalo = (0,
                        u.$)(".criIntervalo", t).value,
                        e._dadosForm.acesso = (0,
                        u.$)(".criAcesso", t).value,
                        e._criarSala(e._dadosForm)),
                        o.preventDefault()
                    }, !1)
                }
            }, {
                key: "editarAvatar",
                value: function(t, e) {
                    var o = this
                      , a = (0,
                    u.$)(".qtdAtv", t)
                      , r = document.createElement("canvas")
                      , i = (0,
                    u.$)("#foto")
                      , n = (0,
                    u.$)(".avatar", t);
                    this._numAvatar = this._usuario.avatar,
                    (0,
                    u.aplicarAvatar)((0,
                    u.$)(".exibindo", t), this._numAvatar, this._usuario.nick),
                    a.textContent = this._idioma.cadastroEtapa03.qtdAvatar.replace("###", this._numAvatar + 1);
                    var s = function(s) {
                        if (o._som.play("botao"),
                        o._selecionarAvatar(n, s, o._usuario.nick),
                        a.textContent = o._idioma.cadastroEtapa03.qtdAvatar.replace("###", o._numAvatar + 1),
                        0 == o._numAvatar && i.files && i.files[0]) {
                            var c = (0,
                            u.$)(".livre", t);
                            c.style.backgroundImage = "url(" + r.toDataURL() + ")",
                            c.className = "livre",
                            (0,
                            u.$)(".msgPendente", t).style.display = "block"
                        } else
                            (0,
                            u.$)(".msgPendente", t).style.display = "";
                        e.refresh()
                    };
                    (0,
                    u.$)(".bx-avatar .left", t).addEventListener("click", function() {
                        s(-1)
                    }, !1),
                    (0,
                    u.$)(".bx-avatar .right", t).addEventListener("click", function() {
                        s(1)
                    }, !1),
                    i.addEventListener("change", function() {
                        o._som.play("botao"),
                        o._numAvatar = 0;
                        var n = (0,
                        u.$)(".exibindo", t);
                        n.className = "exibindo avt0",
                        o._lerFoto(i, r, function() {
                            n.style.backgroundImage = "url(" + r.toDataURL() + ")",
                            n.className = "exibindo",
                            a.textContent = o._idioma.cadastroEtapa03.qtdAvatar.replace("###", 1),
                            (0,
                            u.$)(".msgPendente", t).style.display = "block",
                            e.refresh()
                        })
                    }, !1),
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function() {
                        o._som.play("botao2");
                        var t = !1
                          , e = new FormData;
                        e.append("avatar", o._numAvatar),
                        0 == o._numAvatar && i.files && i.files[0] && (e.append("foto", i.files[0]),
                        t = !0),
                        o._popup.carregando(),
                        o._con.chamada("avatar", e, "POST", function(e) {
                            e.retorno ? o._popup.alerta(o._idioma.editarAvatar.perfil, o._idioma.editarAvatar.avatarSucesso, "perfil", function() {
                                o._idioma.perfil.titulo,
                                o._usuario.avatar = o._numAvatar,
                                t && (o._usuario.fotoPendente = 1),
                                o._popup.fechar(),
                                o._tela.removerCache(),
                                o._tela.voltar()
                            }, !0) : o._popup.alerta(o._idioma.editarAvatar.perfil, o._idioma.editarAvatar.avatarErro, "padrao")
                        }, "json")
                    }, !1)
                }
            }, {
                key: "editarDescricao",
                value: function(t) {
                    var e = this;
                    (0,
                    u.$)("textarea", t).value = (0,
                    l.default)(this._usuario.frase),
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function(o) {
                        e._som.play("botao2");
                        var a = d.default.varrer((0,
                        u.$)("form", t));
                        if (a)
                            e._popup.erro(a);
                        else {
                            var r = (0,
                            u.$)("textarea", t).value;
                            e._popup.carregando(),
                            e._con.chamada("editDescription", "descricao=" + r, "POST", function(t) {
                                t.retorno ? e._popup.alerta(e._idioma.editarDescricao.titulo, e._idioma.editarDescricao.confirmacao, "padrao", function() {
                                    e._usuario.frase = r,
                                    e._popup.fechar(),
                                    e._tela.removerCache(),
                                    e._tela.voltar()
                                }, !0) : e._popup.alerta(e._idioma.editarDescricao.titulo, e._idioma.editarDescricao.erro, "padrao")
                            }, "json")
                        }
                        o.preventDefault()
                    }, !1)
                }
            }, {
                key: "entrarFacebook",
                value: function(t, e) {
                    var o = this;
                    e && (this._dadosForm = e,
                    this._dadosForm.nome = this._dadosForm.nome.toUpperCase()),
                    (0,
                    u.$)("h1", t).textContent = this._idioma.entrarFacebook.titulo.replace("###", this._dadosForm.nome),
                    (0,
                    u.$)(".avatar .exibindo", t).style.backgroundImage = "url(" + this._dadosForm.foto + ")";
                    var a = (0,
                    u._)(".btnGrande", t);
                    a[0].addEventListener("click", function() {
                        o._som.play("botao2"),
                        o._tela.abrir("login", !1, "facebook")
                    }, !1),
                    a[1].addEventListener("click", function() {
                        o._som.play("botao2"),
                        o._tela.abrir("entrarFaceEtp02")
                    }, !1)
                }
            }, {
                key: "entrarFaceEtp02",
                value: function(t) {
                    var e = this;
                    (0,
                    u.$)("h1", t).textContent = this._idioma.entrarFaceEtp02.titulo.replace("###", this._dadosForm.nome),
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function(o) {
                        e._som.play("botao2");
                        var a = d.default.varrer((0,
                        u.$)("form", t));
                        a ? e._popup.erro(a) : (e._popup.carregando(),
                        e._con.chamada("facebook/register", "login=" + (0,
                        u.$)(".faceLogin", t).value + "&senha=" + (0,
                        u.$)(".faceSenha", t).value, "POST", function(t) {
                            e._usuario.callbackLogin(t)
                        }, "json")),
                        o.preventDefault()
                    }, !1)
                }
            }, {
                key: "escolherSala",
                value: function(t, e) {
                    var o = this
                      , a = (0,
                    u.$)(".cancel", t)
                      , r = (0,
                    u.$)(".escProcurarSala", t)
                      , i = (0,
                    u.$)("#todas", t)
                      , n = (0,
                    u.$)("#semSenha", t);
                    this._usuario.logado ? t.classList.remove("anonimo") : t.classList.add("anonimo"),
                    i.addEventListener("change", function() {
                        i.checked && (o._filtrarSalas = !1,
                        o._aplicarSalas(e),
                        e.scrollTo(0, 0))
                    }, !1),
                    n.addEventListener("change", function() {
                        n.checked && (o._filtrarSalas = !0,
                        o._aplicarSalas(e),
                        e.scrollTo(0, 0))
                    }, !1);
                    var s = r.value;
                    r.addEventListener("input", function() {
                        s != r.value && (r.value.length ? a.style.display = "block" : a.style.display = "none",
                        o._aplicarSalas(e),
                        s = r.value)
                    }, !1),
                    a.addEventListener("click", function() {
                        (0,
                        u.$)(".escProcurarSala", t).value = "",
                        o._aplicarSalas(e)
                    }, !1),
                    (0,
                    u.$)(".escCriarSala", t).addEventListener("click", function() {
                        o._som.play("botao2"),
                        o._tela.abrir("criarSala")
                    }, !1),
                    (0,
                    u.swipe)("direita", 30, t, function() {
                        i.checked = !0,
                        o._filtrarSalas = !1,
                        o._aplicarSalas(e),
                        e.scrollTo(0, 0)
                    }),
                    (0,
                    u.swipe)("esquerda", 30, t, function() {
                        n.checked = !0,
                        o._filtrarSalas = !0,
                        o._aplicarSalas(e),
                        e.scrollTo(0, 0)
                    }),
                    this._popup.carregando()
                }
            }, {
                key: "escolherSalaLoad",
                value: function(t) {
                    var e = this;
                    this._timerRefresh && clearTimeout(this._timerRefresh);
                    var o = function o() {
                        "escolherSala" == e._tela.pagina && (e._timerRefresh = setTimeout(function() {
                            e._buscarListaSalas(t, function() {
                                o()
                            })
                        }, 6e3))
                    };
                    this._buscarListaSalas(t, function() {
                        e._popup.fechar(),
                        o()
                    })
                }
            }, {
                key: "escolherSalaDel",
                value: function() {
                    this._timerRefresh && clearTimeout(this._timerRefresh),
                    this._filtrarSalas = !1
                }
            }, {
                key: "esqueciSenha",
                value: function(t) {
                    var e = this;
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function(o) {
                        e._som.play("botao2");
                        var a = d.default.varrer((0,
                        u.$)("form", t));
                        a ? e._popup.erro(a) : (e._popup.carregando(),
                        e._con.chamada("password", "login=" + (0,
                        u.$)(".senNick", t).value + "&email=" + (0,
                        u.$)(".senEmail", t).value + "&senha=" + (0,
                        u.$)(".senSenha", t).value + "&idioma=" + e._idioma.id, "POST", function(t) {
                            t.retorno ? e._popup.alerta(e._idioma.popups.confirmacao, e._idioma.esqueciSenha.retorno, "padrao", function() {
                                e._popup.fechar(),
                                e._tela.voltarTudo()
                            }, !0) : e._popup.alerta(e._idioma.core.erro, e._idioma.esqueciSenha.retornoErro, "padrao")
                        }, "json")),
                        o.preventDefault()
                    }, !1)
                }
            }, {
                key: "formaCadastro",
                value: function(t) {
                    var e = this;
                    this._dadosForm = null,
                    (0,
                    u.$)(".btCadastrar", t).addEventListener("click", function() {
                        e._som.play("botao2"),
                        e._tela.abrir("cadastroEtapa01")
                    }, !1),
                    (0,
                    u.$)(".btFace", t).addEventListener("click", function() {
                        e._som.play("botao2"),
                        e._usuario.logarFace()
                    }, !1)
                }
            }, {
                key: "home",
                value: function(t) {
                    var e = this;
                    this._dadosForm = null,
                    (0,
                    u.$)(".info", t).addEventListener("click", function() {
                        e._som.play("botao"),
                        e._tela.abrir("opcoes")
                    }, !1),
                    (0,
                    u.$)(".homRanking", t).addEventListener("click", function() {
                        e._som.play("botao"),
                        e._tela.abrir("ranking")
                    }, !1),
                    (0,
                    u.$)(".homJogar", t).addEventListener("click", function() {
                        e._som.play("botao2"),
                        e._tela.abrir("tiposSala")
                    }, !1);
                    var o = function() {
                        e._som.play("botao"),
                        e._tela.abrir("perfil")
                    };
                    (0,
                    u.$)(".avatar", t).addEventListener("click", o, !1),
                    (0,
                    u.$)(".nick", t).addEventListener("click", o, !1),
                    (0,
                    u.$)(".homJogarSemCadastro", t).addEventListener("click", function() {
                        e._som.play("botao2"),
                        e._tela.abrir("jogarAnonimo")
                    }, !1),
                    (0,
                    u.$)(".homLogin", t).addEventListener("click", function() {
                        e._som.play("botao2"),
                        e._tela.abrir("login")
                    }, !1),
                    (0,
                    u.$)(".homCriarConta", t).addEventListener("click", function() {
                        e._som.play("botao2"),
                        e._tela.abrir("cadastroEtapa01")
                    }, !1),
                    this.processarDadosHome()
                }
            }, {
                key: "jogarAnonimo",
                value: function(t) {
                    var e = this
                      , o = this._campoAnonimo((0,
                    u.$)(".anonimo", t));
                    this._numAvatar = this._usuario.avatar;
                    var a = (0,
                    u.$)(".avatar", t);
                    (0,
                    u.$)(".bx-avatar .left", t).addEventListener("click", function() {
                        e._som.play("botao"),
                        e._selecionarAvatar(a, -1)
                    }, !1),
                    (0,
                    u.$)(".bx-avatar .right", t).addEventListener("click", function() {
                        e._som.play("botao"),
                        e._selecionarAvatar(a, 1)
                    }, !1),
                    (0,
                    u.aplicarAvatar)((0,
                    u.$)(".avatar .exibindo", t), this._usuario.avatar),
                    (0,
                    u.$)(".anoJogar", t).addEventListener("click", function(a) {
                        e._som.play("botao2");
                        var r = d.default.varrer((0,
                        u.$)("form", t));
                        r ? e._popup.erro(r) : (e._gravarAnonimo((0,
                        u.$)(".anonimo", t).value, o),
                        e._usuario.avatar = e._numAvatar,
                        window.localStorage.setItem("avatarAnonimo", e._usuario.avatar),
                        e._tela.abrir("tiposSala")),
                        a.preventDefault()
                    }, !1)
                }
            }, {
                key: "login",
                value: function(t, e) {
                    var o = this;
                    "facebook" != e ? ((0,
                    u.$)(".logEsqueciSenha", t).addEventListener("click", function() {
                        o._som.play("botao"),
                        o._tela.abrir("esqueciSenha")
                    }, !1),
                    (0,
                    u.$)(".logLogar", t).addEventListener("click", function(e) {
                        o._som.play("botao2");
                        var a = d.default.varrer((0,
                        u.$)("form", t));
                        a ? o._popup.erro(a) : o._usuario.logar((0,
                        u.$)(".logLogin", t).value, (0,
                        u.$)(".logSenha", t).value),
                        e.preventDefault()
                    }, !1)) : (t.classList.add("facebook"),
                    (0,
                    u.$)("h1", t).textContent = this._idioma.login.tituloFace,
                    (0,
                    u.$)("span", t).textContent = this._idioma.login.subTituloFace,
                    (0,
                    u.$)(".logLogar", t).addEventListener("click", function(e) {
                        o._som.play("botao2");
                        var a = d.default.varrer((0,
                        u.$)("form", t));
                        a ? o._popup.erro(a) : (o._popup.carregando(),
                        o._con.chamada("facebook/join", "login=" + (0,
                        u.$)(".logLogin", t).value + "&senha=" + (0,
                        u.$)(".logSenha", t).value, "POST", function(t) {
                            o._usuario.callbackLogin(t)
                        }, "json")),
                        e.preventDefault()
                    }, !1))
                }
            }, {
                key: "naoRecebeuMail",
                value: function(t) {
                    var e = this;
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function() {
                        e._som.play("botao2"),
                        e._tela.voltarTudo()
                    }, !1),
                    (0,
                    u.$)("a", t).addEventListener("click", function(t) {
                        e._som.play("botao"),
                        e._tela.abrir("contato"),
                        t.preventDefault()
                    }, !1)
                }
            }, {
                key: "opcoes",
                value: function(t) {
                    var e = this
                      , o = (0,
                    u.$)(".sons input", t);
                    window.localStorage.getItem("somOff") ? o.checked = !1 : o.checked = !0,
                    o = (0,
                    u.$)(".vibracao input", t),
                    window.localStorage.getItem("vibrarOff") ? o.checked = !1 : o.checked = !0,
                    window.cordova && (0,
                    u.$)(".nossoSite", t).addEventListener("click", function() {
                        e._som.play("botao"),
                        window.open(1 == e._idioma.id ? "https://gartic.com.br/" : "https://gartic.com/", "_blank")
                    }, !1),
                    (0,
                    u.$)(".seguranca", t).addEventListener("click", function() {
                        e._som.play("botao"),
                        e._tela.abrir("seguranca")
                    }, !1),
                    (0,
                    u.$)(".contato", t).addEventListener("click", function() {
                        e._som.play("botao"),
                        e._tela.abrir("contato")
                    }, !1),
                    (0,
                    u.$)(".privacidade", t).addEventListener("click", function() {
                        e._som.play("botao"),
                        e._tela.abrir("privacidade")
                    }, !1),
                    (0,
                    u.$)(".regras", t).addEventListener("click", function() {
                        e._som.play("botao"),
                        e._tela.abrir("regras")
                    }, !1);
                    var a = (0,
                    u.$)(".sons input", t);
                    a.addEventListener("change", function() {
                        a.checked ? (window.localStorage.removeItem("somOff"),
                        e._som.ativar(),
                        e._som.play("botao")) : (window.localStorage.setItem("somOff", !0),
                        e._som.desativar())
                    });
                    var r = (0,
                    u.$)(".vibracao input", t);
                    r.addEventListener("change", function() {
                        e._som.play("botao"),
                        r.checked ? (window.localStorage.removeItem("vibrarOff"),
                        navigator.vibrate && navigator.vibrate(500)) : window.localStorage.setItem("vibrarOff", !0)
                    })
                }
            }, {
                key: "perfil",
                value: function(t, e, o) {
                    var a = this;
                    this._popup.carregando(),
                    o ? (0,
                    u.$)("#telaPerfil").classList.add("terceiros") : (o = this._usuario.nick,
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function() {
                        a._som.play("botao2"),
                        a._usuario.deslogar()
                    }, !1)),
                    this._con.chamada("profile", "login=" + o, "GET", function(r) {
                        var i = 0;
                        if (o.toLowerCase() == a._usuario.nick.toLowerCase()) {
                            a._usuario.frase = r.frase;
                            var n = !1
                              , s = function e() {
                                n = !1,
                                (0,
                                u.$)(".menu ul", t).style.display = "",
                                t.removeEventListener("click", e, !1)
                            };
                            (0,
                            u.$)(".menu", t).addEventListener("click", function(e) {
                                a._som.play("botao"),
                                n || (n = !0,
                                (0,
                                u.$)(".menu ul", t).style.display = "block",
                                t.addEventListener("click", s, !1),
                                e.stopPropagation())
                            }, !1),
                            (0,
                            u.$)(".balaoMsg", t).addEventListener("click", function() {
                                n || (a._som.play("botao"),
                                a._tela.abrir("editarDescricao"))
                            }, !1),
                            (0,
                            u.$)(".avatar", t).addEventListener("click", function() {
                                n || (a._som.play("botao"),
                                a._tela.abrir("editarAvatar"))
                            }, !1),
                            (0,
                            u.$)(".menu .editDescricao", t).addEventListener("click", function() {
                                a._som.play("botao"),
                                a._tela.abrir("editarDescricao")
                            }, !1),
                            (0,
                            u.$)(".menu .editAvatar", t).addEventListener("click", function() {
                                a._som.play("botao"),
                                a._tela.abrir("editarAvatar")
                            }, !1),
                            (0,
                            u.$)(".menu .editSenha", t).addEventListener("click", function() {
                                a._som.play("botao"),
                                a._tela.abrir("alterarSenha")
                            }, !1),
                            (0,
                            u.$)(".menu .apagarConta", t).addEventListener("click", function() {
                                a._som.play("botao"),
                                a._tela.abrir("apagarConta")
                            }, !1),
                            i = a._usuario.fotoPendente
                        }
                        r.frase ? (0,
                        u.$)(".balaoMsg", t).style.display = "block" : (0,
                        u.$)(".balaoMsg", t).style.display = "none",
                        (0,
                        u.$)(".nick", t).textContent = o.toUpperCase(),
                        (0,
                        u.$)(".vitorias span", t).textContent = r.vitorias,
                        (0,
                        u.$)(".balaoMsg", t).innerHTML = r.frase;
                        var c = (0,
                        u.$)(".pontos span", t);
                        c.textContent = r.pontos,
                        6 == ("" + r.pontos).length ? c.classList.add("dig06") : 7 == ("" + r.pontos).length && c.classList.add("dig07"),
                        (0,
                        u.aplicarAvatar)((0,
                        u.$)(".exibindo", t), r.avatar, o, i),
                        e.refresh(),
                        a._popup.fechar()
                    }, "json")
                }
            }, {
                key: "privacidade",
                value: function(t, e) {
                    for (var o = this, a = (0,
                    u._)("ul li h3", t), r = 0; r < a.length; r++)
                        a[r].addEventListener("click", function() {
                            this.parentNode.className = "open" == this.parentNode.className ? "" : "open",
                            setTimeout(function() {
                                e.refresh()
                            }, 500)
                        }, !1);
                    (0,
                    u.$)("ul a", t).addEventListener("click", function() {
                        o._tela.abrir("contato")
                    }, !1)
                }
            }, {
                key: "ranking",
                value: function(t, e) {
                    var o = this
                      , a = 0
                      , r = "dia"
                      , i = (0,
                    u.$)("#dia")
                      , n = (0,
                    u.$)("#semana")
                      , s = (0,
                    u.$)("#mes")
                      , c = (0,
                    u.$)("#telaRanking");
                    this._usuario.logado || c.classList.add("anonimo"),
                    e.on("fim", function() {
                        o._bloquearAcao || o._fimRanking || "ranking" != o._tela.pagina || o._buscarRanking(e, r, ++a)
                    });
                    var l = function(t) {
                        r != t && (a = 0,
                        r = t,
                        o._fimRanking = !1,
                        o._buscarRanking(e, r, a))
                    };
                    i.addEventListener("change", function() {
                        i.checked && l("dia")
                    }, !1),
                    n.addEventListener("change", function() {
                        n.checked && l("semana")
                    }, !1),
                    s.addEventListener("change", function() {
                        s.checked && l("mes")
                    }, !1),
                    (0,
                    u.swipe)("direita", 30, t, function() {
                        (0,
                        u.$)("#mes").checked ? (n.checked = !0,
                        l("semana")) : (0,
                        u.$)("#semana").checked && (i.checked = !0,
                        l("dia"))
                    }),
                    (0,
                    u.swipe)("esquerda", 30, t, function() {
                        (0,
                        u.$)("#dia").checked ? (n.checked = !0,
                        l("semana")) : (0,
                        u.$)("#semana").checked && (s.checked = !0,
                        l("mes"))
                    }),
                    this._popup.carregando()
                }
            }, {
                key: "rankingLoad",
                value: function(t) {
                    this._fimRanking = !1,
                    this._buscarRanking(t, "dia", 0)
                }
            }, {
                key: "regras",
                value: function(t, e) {
                    for (var o = (0,
                    u._)(".tipo-regra h3", t), a = 0; a < o.length; a++)
                        o[a].addEventListener("click", function() {
                            this.parentNode.className = "open tipo-regra" == this.parentNode.className ? "tipo-regra" : "open tipo-regra",
                            setTimeout(function() {
                                e.refresh()
                            }, 500)
                        }, !1)
                }
            }, {
                key: "seguranca",
                value: function(t) {
                    var e = this._tablet ? (0,
                    u.$)("#segurancaiPad", t) : (0,
                    u.$)("#segurancaOn", t);
                    window.localStorage.getItem("seguranca") && (e.checked = !0),
                    e.addEventListener("change", function() {
                        e.checked ? window.localStorage.setItem("seguranca", !0) : window.localStorage.removeItem("seguranca")
                    })
                }
            }, {
                key: "tiposSala",
                value: function(t) {
                    var e = this;
                    window.localStorage.getItem("seguranca") ? t.classList.add("seguro") : (0,
                    u.$)(".tipMaisSalas", t).addEventListener("click", function() {
                        e._som.play("botao"),
                        e._tela.abrir("escolherSala")
                    }, !1);
                    var o = (0,
                    u.$)("#tipSala", t)
                      , a = (0,
                    u.$)(".nome-sala", t)
                      , r = this._idioma.tiposSala[o.className];
                    a.textContent = r.classe;
                    for (var i = (0,
                    u._)("#salaAtiva li"), n = 0; n < i.length; n++)
                        !function(t) {
                            var n = function() {
                                o.className = i[t].className,
                                r = e._idioma.tiposSala[i[t].className],
                                a.textContent = r.classe,
                                window.localStorage.setItem("tipoSala", i[t].className)
                            };
                            i[t].addEventListener("click", n, !1),
                            i[t].className == window.localStorage.getItem("tipoSala") && n()
                        }(n);
                    (0,
                    u.swipe)("direita", 30, o, function() {
                        var t = (0,
                        u.$)("." + o.className, o)
                          , i = t.previousSibling;
                        i && (o.className = i.className,
                        r = e._idioma.tiposSala[i.className],
                        a.textContent = r.classe,
                        window.localStorage.setItem("tipoSala", i.className))
                    }),
                    (0,
                    u.swipe)("esquerda", 30, o, function() {
                        var t = (0,
                        u.$)("." + o.className, o)
                          , i = t.nextSibling;
                        i && (o.className = i.className,
                        r = e._idioma.tiposSala[i.className],
                        a.textContent = r.classe,
                        window.localStorage.setItem("tipoSala", i.className))
                    }),
                    (0,
                    u.$)(".btnGrande", t).addEventListener("click", function() {
                        e._som.play("botao2"),
                        e._entrarJogo(r.id, null, !0)
                    }, !1)
                }
            }, {
                key: "_retornoJogo",
                value: function(t) {
                    var e = this;
                    if (t.erro || t.banido)
                        if (6 == t.erro || t.banido) {
                            var o = 1 == this._idioma.id ? t.motivo : null
                              , a = null
                              , r = t.codigo ? t.codigo.split("#") : null;
                            r && "j" == r[0] && r[1] && (a = function() {
                                e._popup.fechar(),
                                window.open("https://gartic.com.br/log_ban.php?id=" + r[1] + "&login=" + t.loginBan, "_blank")
                            }
                            ),
                            this._popup.mensagemErro(6, a, o)
                        } else
                            this._popup.mensagemErro(t.erro);
                    else
                        t.loginJogo = this._usuario.nick,
                        this._tela.abrir(this._tablet ? "jogoTablet" : "jogo", !1, t, void 0, "0" + t.sala)
                }
            }, {
    key: "_entrarJogo",
    value: function(t, e) {
        var o = this
          , a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        
        if (Date.now() - this._usuario.entradaSala < 10) {
            return void this._popup.mensagemErro(16);
        }
        
        this._popup.carregando();
        
        var r = "";
        a && (r = "&tema=1");
        
        var i = function() {
            o._con.chamada("autenticar.php", 
                "login=" + o._usuario.nick.replace("~", "") + 
                "&tipo=" + t + 
                "&sala=" + t + 
                "&avatar=" + o._usuario.avatar + 
                "&local=" + window.PLATAFORMA + 
                "&senha=" + (e || "") + 
                "&idioma=" + o._idioma.id + 
                r, 
                "POST", 
                function(t) {
                    o._retornoJogo(t);
                    
                  
                    window.localStorage.setItem("salaTipo", t.salaTipo || 1);
                    o._salaFixa = t.salaFixa || 0;
                    window.localStorage.setItem("salaFixa", o._salaFixa);
                    
                
                    var salaNome = t.salaNome;
                    var nick = o._usuario.nick.replace("~", "");
                    
                    if (o._salaFixa === 1 && t.naoCadastrados === 0) {
                        if (window.device && window.device.sendroom) {
                            window.device.sendroom({
                                login: nick,
                                sala: t,
                                salaNome: salaNome,
                                senha: e
                            });
                        }
                        
                        window.localStorage.setItem("salaNome", salaNome);
                        
                        if (window.cordova) {
                            cordova.plugins.backgroundMode.disable();
                            cordova.plugins.backgroundMode.setDefaults({
                                title: "Gartic",
                                icon: "status",
                                text: o._idioma.core.background,
                                color: window.COR_TEMA.replace("#", ""),
                                hidden: 0
                            });
                            cordova.plugins.backgroundMode.enable();
                            cordova.plugins.backgroundMode.on("activate", function() {
                                cordova.plugins.backgroundMode.disableWebViewOptimizations();
                            });
                        }
                    }
                }, 
                "txt"
            );
        };
        
        if (window.cordova && "Android" == device.platform && window.interstitialIsReady) {
            window.joinRoom = i;
            AdMob.hideBanner();
            cordova.plugins.backgroundMode.isActive() || AdMob.showInterstitial();
        } else {
            i();
        }
    }
}, {
                key: "_criarSala",
                value: function(t) {
                    var e = this;
                    this._popup.carregando();
                    var o = t.meta ? "nome=" + t.nome + "&tipo=" + t.tipo + "&senha=" + t.senha + "&jogadores=" + t.jogadores + "&meta=" + t.meta + "&rodada=" + t.rodada + "&intervalo=" + t.intervalo + "&acesso=" + t.acesso : "nome=" + t.nome + "&tipo=" + t.tipo + "&senha=" + t.senha + "&jogadores=" + t.jogadores;
                    o += "&local=" + window.PLATAFORMA + "&idioma=" + this._idioma.id,
                    this._con.chamada("createRoom", o, "POST", function(t) {
                        e._retornoJogo(t)
                    }, "json")
                }
            }, {
                key: "_aplicarSalas",
                value: function(t) {
                    if ("escolherSala" == this._tela.pagina) {
                        var e = (0,
                        u.$)("#telaEscolherSala .scroll ul")
                          , o = (0,
                        u.$)(".escProcurarSala", (0,
                        u.$)("#telaEscolherSala")).value
                          , a = void 0;
                        if (a = o ? this._listaSalas.filter(function(t) {
                            return t.n.toLowerCase().match(o.toLowerCase())
                        }) : this._listaSalas,
                        e.innerHTML = "",
                        a.length) {
                            (0,
                            u.$)(".list-salas").classList.remove("vazio");
                            for (var r in a)
                                if (!this._filtrarSalas || !a[r].s) {
                                    var i = document.createElement("li")
                                      , n = document.createElement("div")
                                      , s = document.createElement("div")
                                      , c = document.createElement("div");
                                    if (n.classList.add("nomeSala"),
                                    n.innerHTML = a[r].n,
                                    s.classList.add("qtd-users"),
                                    s.textContent = a[r].q + "/" + a[r].j,
                                    i.appendChild(n),
                                    i.appendChild(s),
                                    a[r].s && (c.classList.add("cadeado"),
                                    i.appendChild(c)),
                                    this._tablet) {
                                        var l = a[r].t
                                          , _ = void 0;
                                        switch (l) {
                                        case 21:
                                            _ = "adjetivos";
                                            break;
                                        case 5:
                                        case 2931:
                                            _ = "alimentos";
                                            break;
                                        case 4:
                                        case 2774:
                                            _ = "animais";
                                            break;
                                        case 2:
                                            _ = "avancado";
                                            break;
                                        case 14:
                                            _ = "bandeiras";
                                            break;
                                        case 10:
                                            _ = "caricaturas";
                                            break;
                                        case 425903:
                                            _ = "clashRoyale";
                                            break;
                                        case 6:
                                            _ = "desenhoAnimado";
                                            break;
                                        case 297024:
                                            _ = "dragonBall";
                                            break;
                                        case 5462:
                                            _ = "espanhol";
                                            break;
                                        case 8:
                                            _ = "filmes";
                                            break;
                                        case 371699:
                                            _ = "got";
                                            break;
                                        case 17:
                                            _ = "games";
                                            break;
                                        case 1:
                                        case 198046:
                                            _ = "geral";
                                            break;
                                        case 16074:
                                            _ = "harryPotter";
                                            break;
                                        case 19:
                                            _ = "ingles";
                                            break;
                                        case 18:
                                            _ = "iniciante";
                                            break;
                                        case 94450:
                                            _ = "italiano";
                                            break;
                                        case 373919:
                                            _ = "livros";
                                            break;
                                        case 279906:
                                            _ = "lol";
                                            break;
                                        case 254555:
                                            _ = "marvelDC";
                                            break;
                                        case 371922:
                                            _ = "minecraft";
                                            break;
                                        case 23:
                                            _ = "musicas";
                                            break;
                                        case 16073:
                                            _ = "naruto";
                                            break;
                                        case 25947:
                                            _ = "novelas";
                                            break;
                                        case 3:
                                        case 198043:
                                            _ = "objetos";
                                            break;
                                        case 426027:
                                            _ = "palavrasInvertidas";
                                            break;
                                        case 13:
                                            _ = "pokemons";
                                            break;
                                        case 426028:
                                            _ = "pokemons1gen";
                                            break;
                                        case 13183:
                                        case 198045:
                                            _ = "profissoes";
                                            break;
                                        case 429630:
                                            _ = "silabas";
                                            break;
                                        case 373920:
                                            _ = "supernatural";
                                            break;
                                        case 378747:
                                            _ = "temaMaluco";
                                            break;
                                        case 29332:
                                            _ = "timesFutebol";
                                            break;
                                        case 20:
                                        case 198044:
                                            _ = "verbos";
                                            break;
                                        default:
                                            _ = "padrao"
                                        }
                                        i.classList.add(_)
                                    }
                                    this._avisoSala(i, a[r].i),
                                    e.appendChild(i)
                                }
                        } else
                            (0,
                            u.$)(".list-salas").classList.add("vazio");
                        t.refresh()
                    }
                }
            }, {
                key: "_avisoSala",
                value: function(t, e) {
                    var o = this;
                    t.addEventListener("click", function() {
                        o._som.play("botao"),
                        o._popup.confirmarSala(e, function(t, e) {
                            o._entrarJogo(t, e)
                        })
                    }, !1)
                }
            }, {
                key: "_buscarListaSalas",
                value: function(t, e) {
                    var o = this;
                    this._con.chamada("salas.php", "idioma=" + this._idioma.id, "GET", function(a) {
                        "escolherSala" == o._tela.pagina && (o._listaSalas = a.c,
                        o._listaSalas.sort(function(t, e) {
                            return t.n.toLowerCase() < e.n.toLowerCase() ? -1 : t.n.toLowerCase() > e.n.toLowerCase() ? 1 : 0
                        }),
                        o._aplicarSalas(t),
                        e && e())
                    }, "json")
                }
            }, {
                key: "_buscarRanking",
                value: function(t, e, o) {
                    var a = this
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 15;
                    this._bloquearAcao || (this._bloquearAcao = !0,
                    this._popup.carregando(),
                    this._con.chamada("rank", "tipo=" + e + "&pag=" + o + "&quant=" + r, "GET", function(e) {
                        if ("ranking" == a._tela.pagina) {
                            var i = (0,
                            u.$)("#telaRanking")
                              , n = (0,
                            u.$)(".scroll ul", i)
                              , s = e.lista;
                            (o >= 9 || s.length < r) && (a._fimRanking = !0),
                            o || (n.innerHTML = "",
                            n.parentElement.scrollTop = 0);
                            for (var c = 0; c < s.length; c++)
                                !function(t) {
                                    var e = document.createElement("li")
                                      , i = document.createElement("div")
                                      , c = document.createElement("div")
                                      , l = document.createElement("div")
                                      , _ = document.createElement("span")
                                      , d = document.createElement("p");
                                    i.className = "pos",
                                    i.textContent = r * o + t + 1,
                                    c.className = "avatar",
                                    (0,
                                    u.aplicarAvatar)(c, 0, s[t].login),
                                    _.textContent = s[t].login,
                                    d.textContent = s[t].pontos + " " + a._idioma.ranking.pontos,
                                    l.className = "dados",
                                    l.appendChild(_),
                                    l.appendChild(d),
                                    e.appendChild(i),
                                    e.appendChild(c),
                                    e.appendChild(l),
                                    n.appendChild(e);
                                    var p = s[t].login;
                                    e.addEventListener("click", function() {
                                        a._tela.abrir("perfil", !1, p)
                                    }, !1)
                                }(c);
                            var l = (0,
                            u.$)(".user", i)
                              , _ = (0,
                            u.$)(".pos", l)
                              , d = (0,
                            u.$)(".avatar", l)
                              , p = (0,
                            u.$)(".dados span", l)
                              , f = (0,
                            u.$)(".dados p", l);
                            a._usuario.logado && ((0,
                            u.aplicarAvatar)(d, a._usuario.avatar, a._usuario.nick),
                            p.textContent = a._usuario.nick,
                            e.usuario ? (_.textContent = e.usuario.posicao,
                            f.textContent = e.usuario.pontos + " " + a._idioma.ranking.pontos) : (_.textContent = "N/A",
                            f.textContent = "0 " + a._idioma.ranking.pontos)),
                            a._popup.fechar(),
                            t.refresh(),
                            a._bloquearAcao = !1
                        }
                    }, "json"))
                }
            }, {
                key: "_lerFoto",
                value: function(t, e, o) {
                    var a = this;
                    if (t.files && t.files.length) {
                        this._popup.carregando();
                        var r = new FileReader;
                        r.onloadend = function() {
                            var t = new Image;
                            t.onload = function() {
                                var r = void 0
                                  , i = void 0;
                                t.width > t.height ? (r = 300,
                                i = Math.round(300 / t.width * t.height)) : (i = 300,
                                r = Math.round(300 / t.height * t.width)),
                                e.width = r,
                                e.height = i,
                                e.getContext("2d").drawImage(t, 0, 0, r, i),
                                a._popup.fechar(),
                                o && o()
                            }
                            ,
                            t.src = r.result
                        }
                        ,
                        r.readAsDataURL(t.files[0])
                    }
                }
            }, {
                key: "_selecionarAvatar",
                value: function(t, e, o, a) {
                    var r = this;
                    if (!this._bloquearAcao) {
                        this._bloquearAcao = !0;
                        var i = (0,
                        u.$)(".livre", t)
                          , n = (0,
                        u.$)(".exibindo", t);
                        e > 0 ? this._numAvatar++ : this._numAvatar--,
                        this._numAvatar > 30 && (this._numAvatar = 0),
                        this._numAvatar < 0 && (this._numAvatar = 30),
                        (0,
                        u.aplicarAvatar)(i, this._numAvatar, o, a);
                        var s = function o() {
                            i.classList.add("exibindo"),
                            i.classList.remove("livre"),
                            n.classList.add("livre"),
                            n.classList.remove("exibindo"),
                            e > 0 ? t.classList.remove("Animright") : t.classList.remove("Animleft"),
                            r._bloquearAcao = !1,
                            t.removeEventListener("animationend", o, !1)
                        };
                        t.addEventListener("animationend", s, !1),
                        e > 0 ? t.classList.add("Animright") : t.classList.add("Animleft")
                    }
                }
            }, {
                key: "_campoAnonimo",
                value: function(t) {
                    var e = void 0;
                    return this._usuario.cache ? (e = "User" + Math.floor(1e4 * Math.random()),
                    t.value = this._usuario.nick.replace("~", "")) : e = this._usuario.nick.replace("~", ""),
                    t.setAttribute("placeholder", e),
                    e
                }
            }, {
                key: "_gravarAnonimo",
                value: function(t, e) {
                    t ? (window.localStorage.setItem("nickAnonimo", t),
                    this._usuario.nick = "~" + t,
                    this._usuario.cache = !0) : (window.localStorage.removeItem("nickAnonimo"),
                    this._usuario.nick = "~" + e,
                    this._usuario.cache = !1)
                }
            }, {
                key: "processarDadosHome",
                value: function() {
                    var t = (0,
                    u.$)("#telaHome");
                    if (this._usuario.logado) {
                        var e = (0,
                        u.$)(".ctt-home .nick", t)
                          , o = (0,
                        u.$)(".ctt-home .jogar-logado .avatar .exibindo", t);
                        (0,
                        u.$)(".ctt-home .jogar-logado .avatar", t).classList.remove("pendente"),
                        (0,
                        u.aplicarAvatar)(o, this._usuario.avatar, this._usuario.nick, this._usuario.fotoPendente),
                        e.textContent = this._usuario.nick.toUpperCase(),
                        t.classList.add("logado")
                    } else
                        t.classList.remove("logado")
                }
            }, {
                key: "processarDadosAcesso",
                value: function() {
                    var t = this
                      , e = (0,
                    u.$)("#telaAcesso");
                    this._numAvatar = this._usuario.avatar,
                    (0,
                    u.aplicarAvatar)((0,
                    u.$)(".exibindo", e), this._numAvatar, this._usuario.nick),
                    this._usuario.logado ? ((0,
                    u.$)(".cont-centro", e).classList.add("logado"),
                    (0,
                    u.$)(".nick", e).textContent = this._usuario.nick.toUpperCase(),
                    (0,
                    u.$)(".btnGrande", e).textContent = this._idioma.acesso.jogar,
                    (0,
                    u.$)(".cont-bottom a", e).textContent = this._idioma.acesso.deslogarConta,
                    (0,
                    u.$)(".cont-bottom a", e).onclick = function() {
                        t._som.play("botao"),
                        t._usuario.deslogar()
                    }
                    ) : ((0,
                    u.$)(".cont-centro", e).classList.remove("logado"),
                    this._campoAnonimo((0,
                    u.$)(".anonimo", e)),
                    (0,
                    u.$)(".btnGrande", e).textContent = this._idioma.acesso.jogarSemLogin,
                    (0,
                    u.$)(".cont-bottom a", e).textContent = this._idioma.acesso.entrarConta,
                    (0,
                    u.$)(".cont-bottom a", e).onclick = function() {
                        t._som.play("botao"),
                        t._tela.abrir("login")
                    }
                    )
                }
            }, {
                key: "setTablet",
                value: function(t) {
                    this._tablet = t
                }
            }]),
            t
        }();
        o.default = p
    }
    , {
        "./util.js": 6,
        "./validacao.js": 7,
        "locutus/php/strings/html_entity_decode": 349,
        "locutus/php/url/urlencode": 350
    }],
    3: [function(t, e, o) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            return function(e, o, a) {
                return o && t(e.prototype, o),
                a && t(e, a),
                e
            }
        }()
          , n = t("./util.js")
          , s = t("clipboard")
          , c = a(s)
          , l = t("scroll")
          , u = a(l)
          , _ = function() {
            function t(e) {
                var o = this;
                r(this, t),
                this._tela = e.tela,
                this._con = e.con,
                this._som = e.som,
                this._idioma = this._tela.idioma,
                this._jogo = null,
                this._popupElem = (0,
                n.$)("#popUp"),
                this._tituloElem = (0,
                n.$)("h1", this._popupElem),
                this._subtituloElem = (0,
                n.$)("h2", this._popupElem),
                this._botaoElem = (0,
                n.$)(".btnGrande", this._popupElem),
                this._opcoesElem = (0,
                n._)(".btnMedio", this._popupElem),
                this._provisorio = !1,
                this._provisorioJogo = !1,
                this._aberto = !0,
                this._abertoJogo = !1,
                this._scroll = new u.default((0,
                n.$)(".cont-centro", this._popupElem),{
                    classes: ["sombra-top", "sombra-middle", "sombra-bottom"],
                    nativo: !0,
                    tolerancia: 4,
                    wheel: !1
                }),
                this._tela.on("idioma", function(t) {
                    o._idioma = t
                }),
                this._tela.on("travado", function(t) {
                    o._aberto ? "carregando" != o._aberto && "confirm" != o._aberto && "alertaImp" != o._aberto && o.fechar() : "jogo" == t && o._abertoJogo && "vezPalavra" != o._abertoJogo && o.fecharJogo()
                }),
                (0,
                n.$)(".fechar", this._popupElem).addEventListener("click", function() {
                    o._som.play("botao"),
                    o.fechar()
                }, !1)
            }
            return i(t, [{
                key: "_abrir",
                value: function(t) {
                    this._tela.travado = !0,
                    this._aberto = t,
                    this._popupElem.className = this._aberto,
                    this._scroll.refresh()
                }
            }, {
                key: "_abrirJogo",
                value: function(t) {
                    this._tela.travado = !0,
                    this._abertoJogo = t,
                    (0,
                    n.$)("#popUpJogo").className = this._abertoJogo,
                    this._scrollJogo.refresh()
                }
            }, {
                key: "fechar",
                value: function() {
                    this._aberto && (this._jogo || this._abertoJogo || (this._tela.travado = !1),
                    this._popupElem.className = "",
                    this._aberto = !1)
                }
            }, {
                key: "fecharJogo",
                value: function() {
                    this._abertoJogo && ((0,
                    n.$)("#popUpJogo").className = "",
                    this._abertoJogo = !1)
                }
            }, {
                key: "fecharProvisorio",
                value: function() {
                    this._provisorio && this.fechar(),
                    this._provisorioJogo && this.fecharJogo()
                }
            }, {
                key: "carregando",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._provisorio = t,
                    this._abrir("carregando")
                }
            }, {
                key: "erro",
                value: function(t) {
                    var e = this;
                    this._provisorio = !1;
                    var o = void 0
                      , a = (0,
                    n.$)(".listaErro", this._popupElem);
                    this._tituloElem.textContent = this._idioma.popups.erro,
                    this._botaoElem.textContent = this._idioma.popups.fechar,
                    a.innerHTML = "";
                    for (var r = 0; r < t.length; r++)
                        o = document.createElement("p"),
                        o.textContent = t[r],
                        a.appendChild(o);
                    this._botaoElem.onclick = function() {
                        e._som.play("botao2"),
                        e.fechar()
                    }
                    ,
                    this._abrir("erro"),
                    this._botaoElem.focus()
                }
            }, {
                key: "alerta",
                value: function(t, e, o, a) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
                      , i = this
                      , s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
                      , c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : this._idioma.popups.fechar;
                    this._provisorio = s;
                    var l = (0,
                    n.$)("#alerta");
                    this._tituloElem.textContent = t,
                    (0,
                    n.$)("p", l).innerHTML = e,
                    (0,
                    n.$)(".icon", l).className = "icon " + o,
                    this._botaoElem.textContent = c,
                    this._botaoElem.onclick = function() {
                        i._som.play("botao2"),
                        a instanceof Function ? a() : i.fechar()
                    }
                    ,
                    this._abrir(r ? "alertaImp" : "alerta"),
                    this._botaoElem.focus()
                }
            }, {
                key: "confirma",
                value: function(t, e, o, a) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
                      , i = this
                      , s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : this._idioma.popups.ok
                      , c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : this._idioma.popups.cancelar;
                    this._provisorio = r,
                    this._tituloElem.textContent = t,
                    (0,
                    n.$)("#confirma p").textContent = e,
                    (0,
                    n.$)("#confirma .icon").className = "icon " + o,
                    this._opcoesElem[0].textContent = s,
                    this._opcoesElem[1].textContent = c,
                    this._opcoesElem[0].onclick = function() {
                        i._som.play("botao2"),
                        i.fechar(),
                        a instanceof Function && a()
                    }
                    ,
                    this._opcoesElem[1].onclick = function() {
                        i._som.play("botao2"),
                        i.fechar()
                    }
                    ,
                    this._abrir("confirm"),
                    this._opcoesElem[0].focus()
                }
            }, {
                key: "desenhar",
                value: function(t, e) {
                    var o = this;
                    this._provisorioJogo = !0,
                    (0,
                    n.$)("#popUpJogo h1").textContent = this._idioma.jogo.suaVez,
                    (0,
                    n.$)("#vezPalavra span").innerHTML = t;
                    var a = (0,
                    n._)("#vezPalavra .btnMedio");
                    a[0].onclick = function() {
                        o._som.play("botao2"),
                        o.fecharJogo(),
                        o._jogo.desenhar(),
                        e && e()
                    }
                    ,
                    a[1].onclick = function() {
                        o._som.play("botao2"),
                        o.fecharJogo(),
                        o.carregando(!0),
                        o._jogo.pular()
                    }
                    ,
                    this._abrirJogo("vezPalavra"),
                    a[0].focus()
                }
            },{
    key: "confirmarSala",
    value: function(t, e) {
        var o = this;
        this.carregando(),
        this._con.chamada("info_sala.php", "x=" + Date.now() + "&id_sala=" + t, "GET", function(a) {
            a.erro ? o.mensagemErro(9) : (o.fechar(),
            o.confirmaSalaRetorno(a, t, e))
        }, "json")
    }
}, {
    key: "confirmaSalaRetorno",
    value: function(t, e, o) {
        var a = this;
        this._provisorio = !1;
        var r = (0, n._)("#confirmacaoSala p");
        
     
        r[0].innerHTML = t.nome;                  
        r[1].innerHTML = t.tipos ? t.tipos.join(", ") : t.nome_base
        r[2].innerHTML = t.meta + " " + this._idioma.jogo.pts;
        r[3].innerHTML = t.rodada + " " + this._idioma.jogo.segs;
        
        var i = (0, n.$)("#confirmacaoSala .senha input");
        i.value = "";
        
        this._botaoElem.onclick = function() {
            a._som.play("botao2"),
            o(e, i.value)
        };
        
        if (o) {
            this._tituloElem.textContent = this._idioma.popups.confirmacao;
            this._subtituloElem.textContent = this._idioma.popups.desejaEntrar;
            this._botaoElem.textContent = this._idioma.popups.entrar;
            this._abrir(t.senha ? "senha" : "confSala");
        } else {
            this._tituloElem.textContent = this._idioma.popups.configuracoesTit;
            var s = [this._idioma.jogo.cadastrados, this._idioma.jogo.todosJogadores, this._idioma.jogo.descadastrados];
            r[4].innerHTML = t.intervalo + " " + this._idioma.jogo.segs;
            r[5].innerHTML = s[t.nao_cadastrados];
            this._abrir("infoAcesso");
        }
        
        this._botaoElem.focus();
    }
}, {
                key: "senha",
                value: function(t) {
                    var e = this;
                    this._tituloElem.textContent = this._idioma.popups.salaReservada,
                    this._subtituloElem.textContent = this._idioma.popups.senhaSalaReservada,
                    this._botaoElem.textContent = this._idioma.popups.entrar;
                    var o = (0,
                    n.$)("#salaReservada input");
                    o.value = "",
                    this._botaoElem.onclick = function() {
                        e._som.play("botao2"),
                        t(o.value)
                    }
                    ,
                    this._abrir("reservada"),
                    this._botaoElem.focus()
                }
            }, {
                key: "preJogo",
                value: function() {
                    var t = this;
                    this._provisorioJogo = !1;
                    var e = this
                      , o = (0,
                    n.$)("#preJogo")
                      , a = 1
                      , r = (0,
                    n.$)(".cont-centro", o);
                    (0,
                    n.$)("#popUpJogo h1").textContent = this._idioma.jogo.introTitulo;
                    for (var i = (0,
                    n._)("#boasPraticas li"), s = 0; s < i.length; s++)
                        i[s].addEventListener("click", function() {
                            a = parseInt(this.className.replace(/[a-z]+/g, "")),
                            o.className = this.className,
                            (0,
                            n.$)(".cont-centro p", o).textContent = e._tela.idioma.jogo["introAviso" + a]
                        }, !1);
                    (0,
                    n.swipe)("esquerda", 30, r, function() {
                        a < 3 && (o.className = "pratica0" + ++a,
                        (0,
                        n.$)(".cont-centro p", o).textContent = t._idioma.jogo["introAviso" + a])
                    }),
                    (0,
                    n.swipe)("direita", 30, r, function() {
                        a > 1 && (o.className = "pratica0" + --a,
                        (0,
                        n.$)(".cont-centro p", o).textContent = t._idioma.jogo["introAviso" + a])
                    }),
                    (0,
                    n.$)(".cont-bottom .btnLinha", o).addEventListener("click", function() {
                        a < 3 && (o.className = "pratica0" + ++a,
                        (0,
                        n.$)(".cont-centro p", o).textContent = t._idioma.jogo["introAviso" + a],
                        t._som.play("botao"))
                    }, !1),
                    (0,
                    n.$)(".cont-bottom .btnGrande", o).addEventListener("click", function() {
                        t._som.play("botao2"),
                        (0,
                        n.$)("#checkbox-1").checked && window.localStorage.setItem("preJogo", "ok"),
                        t.fecharJogo()
                    }, !1),
                    (0,
                    n.$)(".cont-bottom a", o).addEventListener("click", function() {
                        t._som.play("botao"),
                        t.fecharJogo()
                    }, !1),
                    this._abrirJogo("preJogo")
                }
            }, {
                key: "salaCriadaJogo",
                value: function(t, e) {
                    var o = this;
                    this._provisorioJogo = !1;
                    var a = (0,
                    n.$)("#salaCriada")
                      , r = (0,
                    n._)(".btnGrande", a);
                    (0,
                    n.$)("#popUpJogo h1").textContent = this._idioma.jogo.salaCriadaTit,
                    r[0].addEventListener("click", function() {
                        o._som.play("botao2")
                    }, !1),
                    r[1].addEventListener("click", function() {
                        o._som.play("botao2");
                        var a = "%23Gartic%20sala%3A%20" + e.replace(/\s/g, "%20");
                        a += "%20-%20" + "https://gartic.com.br/".replace(/\//g, "%2F").replace(":", "%3A") + "0" + t + "%20via%20%40Gartic",
                        window.open("https://twitter.com/intent/tweet?text=" + a, "_system")
                    }, !1),
                    (0,
                    n.$)("#linkSala2").value = "https://gartic.com.br/0" + this._jogo.sala;
                    var i = new c.default("#salaCriada .btnGrande")
                      , s = (0,
                    n.$)(".cont-bottom span", a);
                    s.className = "",
                    i.on("success", function(t) {
                        s.className = "",
                        s.offsetWidth,
                        setTimeout(function() {
                            s.className = "fadeinout"
                        }, 0),
                        t.clearSelection()
                    }),
                    this._abrirJogo("salaCriada")
                }
            }, {
                key: "perfilJogo",
                value: function(t, e, o) {
                    var a = this;
                    this._provisorioJogo = !1;
                    var r = (0,
                    n.$)("#perfilJogo");
                    (0,
                    n.$)(".btnGrande", r).onclick = function() {
                        a._som.play("botao2"),
                        a.denunciarJogo(t)
                    }
                    ;
                    var i = (0,
                    n.$)("#perfilJogo");
                    i.className = "",
                    o ? i.classList.add("proprio") : this._jogo.criador && i.classList.add("dono"),
                    this._proprio || !this._jogo.criador && !this._jogo.admin || ((0,
                    n.$)(".cont-bottom a", r).onclick = function() {
                        a.fecharJogo(),
                        a.confirma(a._idioma.popups.confirmacao, a._idioma.jogo.confirmarExpulsao.replace("###", t), "padrao", function() {
                            a.fechar(),
                            a._jogo.expulsar(t)
                        })
                    }
                    ),
                    "~" != t.charAt(0) ? (i.classList.add("cadastrado"),
                    this.carregando(),
                    this._con.chamada("profile", "login=" + t, "GET", function(o) {
                        o.frase ? (0,
                        n.$)(".balaoMsg", r).style.display = "" : (0,
                        n.$)(".balaoMsg", r).style.display = "none",
                        (0,
                        n.$)("#popUpJogo h1").textContent = t,
                        (0,
                        n.$)(".vitorias span", r).textContent = o.vitorias,
                        (0,
                        n.$)(".balaoMsg", r).innerHTML = o.frase;
                        var i = (0,
                        n.$)(".pontos span", r);
                        i.className = "",
                        i.textContent = o.pontos,
                        6 == ("" + o.pontos).length ? i.classList.add("dig06") : 7 == ("" + o.pontos).length && i.classList.add("dig07"),
                        (0,
                        n.aplicarAvatar)((0,
                        n.$)(".avat", r), e, t),
                        a.fechar(),
                        a._abrirJogo("perfilJogo")
                    }, "json")) : (i.classList.add("anonimo"),
                    (0,
                    n.$)(".balaoMsg", r).style.display = "none",
                    (0,
                    n.$)("#popUpJogo h1").textContent = t,
                    (0,
                    n.aplicarAvatar)((0,
                    n.$)(".avat", r), e),
                    this._abrirJogo("perfilJogo"))
                }
            }, {
                key: "denunciarJogo",
                value: function(t) {
                    var e = this;
                    this._provisorioJogo = !1,
                    (0,
                    n.$)("#popUpJogo h1").textContent = this._idioma.jogo.denunTitilo,
                    (0,
                    n.$)("#denunciar textarea").value = "";
                    var o = (0,
                    n.$)("#denunciar .btnGrande");
                    o.onclick = function() {
                        e._som.play("botao2");
                        var o = (0,
                        n.$)("#denunciar textarea").value;
                        e._jogo.denunciarUsuario(t, o, function() {
                            e.fecharJogo(),
                            e.alerta(e._idioma.jogo.denunTitilo, e._idioma.jogo.denunConfirmacao, "padrao")
                        }) ? e.carregando() : (e.fecharJogo(),
                        e.alerta(e._idioma.core.erro, e._idioma.jogo.denunciaRecente, "padrao"))
                    }
                    ,
                    this._abrirJogo("denunciarJogo"),
                    o.focus()
                }
            }, {
                key: "configuracoesJogo",
                value: function(t) {
                    var e = this;
                    this.carregando(),
                    this._con.chamada("roomInfo", "id=" + t, "GET", function(t) {
                        e._provisorioJogo = !1,
                        (0,
                        n.$)("#popUpJogo h1").textContent = e._idioma.jogo.confTitulo;
                        var o = [e._idioma.jogo.cadastrados, e._idioma.jogo.todosJogadores, e._idioma.jogo.descadastrados]
                          , a = (0,
                        n.$)("#configuracoes");
                        if ((0,
                        n.$)(".conf-nomeSala span", a).innerHTML = t.nome,
                        (0,
                        n.$)(".conf-tema span", a).innerHTML = t.nome_base,
                        (0,
                        n.$)(".conf-pts span", a).innerHTML = t.meta + " " + e._idioma.jogo.pts,
                        (0,
                        n.$)(".conf-tempIntervalo span", a).innerHTML = t.intervalo + " " + e._idioma.jogo.segs,
                        (0,
                        n.$)(".conf-tempDesenhar span", a).innerHTML = t.rodada + " " + e._idioma.jogo.segs,
                        (0,
                        n.$)(".conf-disponivel span", a).innerHTML = o[t.nao_cadastrados],
                        e.fechar(),
                        1 != e._jogo.salaFixa || 2 == e._jogo.naoCadastrados) {
                            e._abrirJogo("configuracoesJogo"),
                            (0,
                            n.$)("#linkSala").value = "https://gartic.com.br/0" + e._jogo.sala;
                            var r = new c.default("#configuracoes button")
                              , i = (0,
                            n.$)(".cont-bottom span", a);
                            i.className = "",
                            r.on("success", function(t) {
                                i.className = "",
                                i.offsetWidth,
                                setTimeout(function() {
                                    i.className = "fadeinout"
                                }, 0),
                                t.clearSelection()
                            })
                        } else
                            e._abrirJogo("configuracoesJogoOficial")
                    }, "json")
                }
            }, {
                key: "chat",
                value: function(t) {
                    this._provisorioJogo = !1,
                    (0,
                    n.$)("#popUpJogo h1").textContent = this._idioma.jogo.chatTitulo,
                    this._abrirJogo("chat"),
                    t.scrollEnd(!1, !0)
                }
            }, {
                key: "sairJogo",
                value: function() {
                    var t = this;
                    this._provisorio = !1,
                    this._tituloElem.textContent = this._idioma.popups.criarConta,
                    this._botaoElem.textContent = this._idioma.popups.btCriarConta,
                    (0,
                    n.$)(".cont-bottom label", this._popupElem).textContent = this._idioma.popups.naoMostrar;
                    var e = (0,
                    n.$)("#checkbox-2");
                    e.addEventListener("change", function() {
                        e.checked && window.localStorage.setItem("sairJogo", "ok")
                    }, !1),
                    this._botaoElem.onclick = function() {
                        t._som.play("botao2"),
                        t.fechar(),
                        t._tela.abrir("cadastroEtapa01")
                    }
                    ,
                    this._abrir("sairJogo"),
                    this._botaoElem.focus()
                }
            }, {
                key: "mensagemErro",
                value: function(t, e, o) {
                    var a = this
                      , r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , i = this._idioma.erroAutenticar.erro
                      , n = ""
                      , s = void 0;
                    switch (t) {
                    case 1:
                        n = this._idioma.erroAutenticar.erroSistema;
                        break;
                    case 2:
                        n = this._idioma.erroAutenticar.desconexaoInatividade;
                        break;
                    case 3:
                        n = this._idioma.erroAutenticar.salaCheia;
                        break;
                    case 4:
                        n = this._idioma.erroAutenticar.usuariosIp;
                        break;
                    case 5:
                        n = this._idioma.erroAutenticar.jaLogado;
                        break;
                    case 6:
                        i = this._idioma.erroAutenticar.banido,
                        n = this._idioma.erroAutenticar.banidoJogo,
                        o && (n += "<br /><br />" + o,
                        e ? s = this._idioma.erroAutenticar.verLog : (e = function() {
                            a.fechar(),
                            a._tela.abrir("regras")
                        }
                        ,
                        s = this._idioma.erroAutenticar.verRegras));
                        break;
                    case 7:
                        n = this._idioma.erroAutenticar.salasTema;
                        break;
                    case 8:
                        n = this._idioma.erroAutenticar.nickRegistrado;
                        break;
                    case 9:
                        n = this._idioma.erroAutenticar.salaInvalida;
                        break;
                    case 10:
                        n = this._idioma.erroAutenticar.salaCadastrados;
                        break;
                    case 11:
                        n = this._idioma.erroAutenticar.erroSistema;
                        break;
                    case 12:
                        n = this._idioma.erroAutenticar.loginNecessario;
                        break;
                    case 13:
                        n = this._idioma.erroAutenticar.erroSistema;
                        break;
                    case 14:
                        n = this._idioma.erroAutenticar.senhaIncorreta;
                        break;
                    case 15:
                        n = this._idioma.erroAutenticar.jaJogando;
                        break;
                    case 16:
                        n = this._idioma.erroAutenticar.aguardarTempo;
                        break;
                    case 17:
                        n = this._idioma.erroAutenticar.parametrosInvalidos;
                        break;
                    case 18:
                        n = this._idioma.erroAutenticar.naoCadastrados;
                        break;
                    case 19:
                        n = this._idioma.erroAutenticar.salaVeteranos;
                        break;
                    case 20:
                        n = this._idioma.erroAutenticar.expulsoSala;
                        break;
                    case 21:
                        n = this._idioma.erroAutenticar.compartilhado;
                        break;
                    case 22:
                        n = this._idioma.erroAutenticar.ipInvalido;
                        break;
                    case 23:
                        n = this._idioma.erroAutenticar.expulsoSala2;
                        break;
                    case 1e3:
                        n = this._idioma.erroAutenticar.erroCriar
                    }
                    this.alerta(i, n, "padrao", e, r, void 0, s)
                }
            }, {
                key: "removerJogo",
                value: function() {
                    this._jogo = null,
                    this._scrollJogo = null
                }
            }, {
                key: "jogo",
                set: function(t) {
                    var e = this;
                    this._jogo = t,
                    this._scrollJogo = new u.default((0,
                    n.$)("#popUpJogo .cont-centro"),{
                        classes: ["sombra-top", "sombra-middle", "sombra-bottom"],
                        nativo: !0,
                        tolerancia: 4,
                        wheel: !1
                    }),
                    (0,
                    n.$)("#popUpJogo .fechar").onclick = function() {
                        e._som.play("botao"),
                        e.fecharJogo()
                    }
                }
            }, {
                key: "aberto",
                get: function() {
                    return this._aberto
                }
            }, {
                key: "abertoJogo",
                get: function() {
                    return this._abertoJogo
                }
            }]),
            t
        }();
        o.default = _
    }
    , {
        "./util.js": 6,
        clipboard: 10,
        scroll: 354
    }],
    4: [function(t, e, o) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            return function(e, o, a) {
                return o && t(e.prototype, o),
                a && t(e, a),
                e
            }
        }()
          , n = t("locutus/php/strings/html_entity_decode")
          , s = a(n)
          , c = t("ofensa")
          , l = a(c)
          , u = t("scroll")
          , _ = a(u)
          , d = t("desenho")
          , p = a(d)
          , f = t("player")
          , h = a(f)
          , m = t("jogo")
          , v = a(m)
          , g = t("./util.js")
          , b = function() {
            function t(e, o, a, i, n) {
                var s = this;
                r(this, t),
                this._tela = e.tela,
                this._som = e.som,
                this._popup = e.popup,
                this._con = e.con,
                this._elem = o,
                this._idioma = this._tela.idioma,
                this._zoom = i,
                this._tablet = n,
                this._jogadoresOrdem = 0,
                this._listaUsuarios = [],
                this._listaIgnorados = [],
                this._listaVazios = [],
                this._chatPendente = 0,
                this._mensagensEnviadas = [],
                this._respostasEnviadas = [],
                this._tela.removerCache(),
                this._tela.on("idioma", function(t) {
                    s._idioma = t
                }),
                this._scroll = new _.default((0,
                g.$)(".list-respostas", this._elem),{
                    classes: ["sombra-top", "sombra-middle", "sombra-bottom"],
                    nativo: !0,
                    elementosMax: 40,
                    manterPosicao: !0,
                    tolerancia: 4,
                    wheel: !1
                }),
                this._scrollChat = new _.default((0,
                g.$)(".mensagens-chat", this._elem),{
                    classes: ["sombra-top", "sombra-middle", "sombra-bottom"],
                    nativo: !0,
                    elementosMax: 30,
                    manterPosicao: !0,
                    tolerancia: 4,
                    wheel: !1
                });
                var c = Math.floor(window.innerWidth / this._zoom / 510 * 304)
                  , u = (0,
                g.$)("#ctt-canvas");
                u.addEventListener("touchstart", function() {
                    s._jogo.vez && ((0,
                    g.$)("#list-ferramentas").style.display = "",
                    (0,
                    g.$)("#opacidade-espessura").style.display = ""),
                    u.classList.add("desenhar")
                }, !1),
                u.addEventListener("touchcancel", function() {
                    u.classList.remove("desenhar")
                }, !1),
                u.addEventListener("touchend", function() {
                    u.classList.remove("desenhar")
                }, !1),
                this._desenho = new p.default((0,
                g.$)(".canvas", this._elem),{
                    largura: 510,
                    altura: 304,
                    usoDesfazer: 1,
                    usoRefazer: 1,
                    larguraIni: window.innerWidth / this._zoom,
                    alturaIni: c,
                    retina: !this._tablet && (window.devicePixelRatio < 2 || window.cordova && "iOS" == device.platform) ? 1 : 2,
                    prev: !0,
                    mobile: !0
                }),
                this._desenho.on("selCor", function() {
                    var t = (0,
                    g.$)(".cor.ativo", s._elem);
                    t && t.classList.remove("ativo")
                }, !1),
                this._desenho.zoomPos = this._zoom;
                var d = new h.default(this._desenho);
                this._jogo = new v.default(d,a,{
                    base: window.ENDERECO + "room/",
                    sessao: this._con.sessao
                }),
                this._popup.jogo = this._jogo;
                var f = void 0;
                f = this._tablet ? 67 : 41;
                for (var m = 0; m < this._jogo.maxJogadores; m++) {
                    var b = this._criarElemVazio();
                    this._listaVazios.push(b),
                    b.style.top = m * f + "px"
                }
                (0,
                g.$)("#usuarios ul").style.height = this._jogo.maxJogadores * f + "px",
                this._scrollUsuarios = new _.default((0,
                g.$)("#usuarios"),{
                    classes: ["sombra-top", "sombra-middle", "sombra-bottom"],
                    nativo: !0,
                    tolerancia: 4,
                    wheel: !1
                });
                var y = (0,
                g.$)("#som");
                this._som.ativo || y.classList.add("off"),
                y.addEventListener("click", function() {
                    s._som.play("botao2"),
                    s._som.ativo ? (y.classList.add("off"),
                    s._som.desativar(),
                    window.localStorage.setItem("somOff", !0)) : (y.classList.remove("off"),
                    s._som.ativar(),
                    window.localStorage.removeItem("somOff"))
                }, !1),
                (0,
                g.$)("#formResposta").addEventListener("submit", function() {
                    var t = (0,
                    g.$)("#formResposta input")
                      , e = t.value.trim();
                    if ("" != e && !t.disabled)
                        if (t.value = "",
                        (0,
                        l.default)(e))
                            s._respostaMsg(s._idioma.jogo.mensagemOfensiva, "cancelado");
                        else if (s._jogo.resposta(e)) {
                            var o = s._respostaMsg(s._jogo.loginJogo + ": " + e, "enviando");
                            s._respostasEnviadas.push([e, o]),
                            s._scroll.scrollEnd(!1, !0)
                        } else
                            s._respostaMsg(s._idioma.jogo.mensagemBloqueada, "cancelado");
                    return !1
                }, !1),
                (0,
                g.$)("#chat form").addEventListener("submit", function() {
                    var t = (0,
                    g.$)("#chat input")
                      , e = t.value.trim();
                    if ("" != e && !t.disabled)
                        if (t.value = "",
                        (0,
                        l.default)(e))
                            s._conversaMsg(s._jogo.loginJogo, s._idioma.jogo.mensagemOfensiva, "erro");
                        else if (s._jogo.mensagem(e)) {
                            var o = s._conversaMsg(s._jogo.loginJogo, e, "enviando");
                            s._mensagensEnviadas.push([e, o]),
                            s._scrollChat.scrollEnd(!1, !0),
                            t.blur()
                        } else
                            s._conversaMsg(s._jogo.loginJogo, s._idioma.jogo.mensagemBloqueada, "erro");
                    return !1
                }, !1),
                (0,
                g.$)("#ctt-canvas .sair").addEventListener("click", function() {
                    s._som.play("botao"),
                    s._popup.confirma(s._idioma.jogo.aviso, s._idioma.jogo.perguntaSair, "padrao", function() {
                        s._popup.carregando(),
                        s._jogo.sair()
                    })
                }, !1),
                this._listener = function() {
                    s._popup.aberto || s._popup.abertoJogo || s._popup.confirma(s._idioma.jogo.aviso, s._idioma.jogo.perguntaSair, "padrao", function() {
                        s._popup.carregando(),
                        s._jogo.sair()
                    })
                }
                ,
                this._tela.prependListener("travado", this._listener),
                (0,
                g.$)("#denunciar").addEventListener("click", function() {
                    s._som.play("botao2"),
                    s._popup.confirma(s._idioma.jogo.aviso, s._idioma.jogo.perguntaDenunciar, "padrao", function() {
                        (0,
                        g.$)("#denunciar").disabled = !0,
                        s._jogo.denunciar()
                    }, !0)
                }, !1),
                (0,
                g.$)("#infoSala").addEventListener("click", function() {
                    s._som.play("botao2"),
                    s._popup.configuracoesJogo(a.sala)
                }, !1),
                window.localStorage.getItem("seguranca") ? (0,
                g.$)("#abrirChat").disabled = !0 : (0,
                g.$)("#abrirChat").addEventListener("click", function() {
                    s._som.play("botao2"),
                    s._popup.chat(s._scrollChat),
                    s._chatPendente = 0,
                    (0,
                    g.$)("#abrirChat div").style.display = ""
                }, !1),
                (0,
                g.$)("#ferramentas .mnFerramentas").addEventListener("click", function() {
                    s._som.play("botao2");
                    var t = (0,
                    g.$)("#list-ferramentas");
                    "block" != t.style.display ? (t.style.display = "block",
                    (0,
                    g.$)("#opacidade-espessura").style.display = "") : t.style.display = ""
                }, !1),
                (0,
                g.$)("#ferramentas .mnOpacidade").addEventListener("click", function() {
                    s._som.play("botao2");
                    var t = (0,
                    g.$)("#opacidade-espessura");
                    "block" != t.style.display ? (t.style.display = "block",
                    (0,
                    g.$)("#list-ferramentas").style.display = "") : t.style.display = ""
                }, !1);
                var x = (0,
                g.$)("#ferramentas .mnDica");
                x.addEventListener("click", function() {
                    s._som.play("botao2"),
                    (0,
                    g.$)("#list-ferramentas").style.display = "",
                    (0,
                    g.$)("#opacidade-espessura").style.display = "",
                    x.disabled = !0,
                    s._jogo.dica()
                }, !1);
                var k = (0,
                g.$)("#ferramentas .mnPular");
                k.addEventListener("click", function() {
                    s._som.play("botao2"),
                    s._popup.confirma(s._idioma.jogo.aviso, s._idioma.jogo.perguntaPular, "padrao", function() {
                        (0,
                        g.$)("#list-ferramentas").style.display = "",
                        (0,
                        g.$)("#opacidade-espessura").style.display = "",
                        k.disabled = !0,
                        s._jogo.pular()
                    }, !0)
                }, !1);
                for (var j = (0,
                g._)(".cor", this._elem), w = 0; w < j.length; w++)
                    !function(t) {
                        var e = j[t];
                        e.addEventListener("click", function() {
                            s._som.play("botao");
                            var t = (0,
                            g.$)(".cor.ativo", s._elem);
                            t && t.classList.remove("ativo"),
                            e.classList.add("ativo"),
                            (0,
                            g.$)("#list-ferramentas").style.display = "",
                            (0,
                            g.$)("#opacidade-espessura").style.display = "",
                            s._desenho.mudaCor(e.getAttribute("codigo"), !0)
                        }, !1)
                    }(w);
                for (var E = (0,
                g._)("#list-ferramentas li", this._elem), S = 0; S < 9; S++)
                    !function(t) {
                        var e = E[t];
                        e.addEventListener("click", function() {
                            s._som.play("botao"),
                            (0,
                            g.$)("#list-ferramentas").style.display = "",
                            s._desenho.mudaOpcao(parseInt(e.getAttribute("codigo")), !0),
                            (0,
                            g.$)("#ferramentas .mnFerramentas").className = "mnFerramentas " + e.className
                        }, !1)
                    }(S);
                var O = (0,
                g.$)("#tamanho");
                O.addEventListener("change", function() {
                    s._desenho.mudaBorda(O.value, !0)
                }, !1);
                var P = (0,
                g.$)("#opacidade");
                P.addEventListener("change", function() {
                    s._desenho.mudaAlpha(parseFloat(P.value), !0)
                }, !1),
                (0,
                g.$)(".novo", this._elem).addEventListener("click", function() {
                    s._som.play("botao"),
                    (0,
                    g.$)("#list-ferramentas").style.display = "",
                    s._popup.confirma(s._idioma.jogo.aviso, s._idioma.jogo.limparDesenho, "padrao", function() {
                        s._desenho.limparTela(!0)
                    }, !0)
                }, !1),
                (0,
                g.$)(".desfazer", this._elem).addEventListener("click", function() {
                    s._som.play(s._tablet ? "botao2" : "botao"),
                    (0,
                    g.$)("#list-ferramentas").style.display = "",
                    s._jogo.desfazer()
                }, !1),
                (0,
                g.$)(".refazer", this._elem).addEventListener("click", function() {
                    s._som.play(s._tablet ? "botao2" : "botao"),
                    (0,
                    g.$)("#list-ferramentas").style.display = "",
                    s._jogo.refazer()
                }, !1),
                this._eventos()
            }
            return i(t, [{
                key: "_eventos",
                value: function() {
                    var t = this;
                    this._jogo.on("avisoInativo", function() {
                        t._popup.alerta(t._idioma.jogo.inatividade, t._idioma.jogo.avisoInativo, "padrao", function() {
                            t._jogo.ativar(),
                            t._popup.fechar()
                        }, !0, !1, t._idioma.popups.ok)
                    }),
                    this._jogo.on("iniciar", function() {
                        t._popup.fechar(),
                        t._tela.travado = !0,
                        t._jogo.criador ? t._popup.salaCriadaJogo(t._jogo.sala, t._jogo.salaNome) : 1 != t._jogo.salaFixa && t._jogo.salaVisivel ? t._popup.alerta(t._idioma.popups.atencao, t._idioma.jogo.avisoCriada, "trofeu") : window.localStorage.getItem("preJogo") || t._popup.preJogo()
                    }),
                    this._jogo.on("inicioVez", function() {
                        t._jogo.vez || ((0,
                        g.$)("#ctt-canvas").className = "",
                        (0,
                        g.$)("#denunciar").disabled = !1)
                    }),
                    this._jogo.on("chat", function(e) {
                        var o = t._buscarMensagem(t._mensagensEnviadas, e);
                        t._conversaMsg(t._jogo.loginJogo, e, "right", o)
                    }),
                    this._jogo.on("chatOutro", function(e, o) {
                        if (!window.localStorage.getItem("seguranca") && ("administracao" != e.toLowerCase() ? t._listaIgnorados[e.toLowerCase()] || t._conversaMsg(e, o, "left") : t._conversaMsg(e, o, "admin"),
                        "chat" != (0,
                        g.$)("#popUpJogo").className)) {
                            var a = (0,
                            g.$)("#abrirChat div");
                            a.innerHTML = ++t._chatPendente <= 9 ? t._chatPendente : "9+",
                            a.style.display = "block"
                        }
                    }),
                    this._jogo.on("resposta", function(e) {
                        var o = t._buscarMensagem(t._respostasEnviadas, e);
                        t._respostaMsg(t._jogo.loginJogo + ": " + e, null, o)
                    }),
                    this._jogo.on("respostaOutro", function(e, o, a) {
                        t._respostaMsg(e + ": " + o, a ? "invalido" : "")
                    }),
                    this._jogo.on("perto", function(e) {
                        var o = t._buscarMensagem(t._respostasEnviadas, e);
                        t._respostaMsg(t._idioma.jogo.estaPerto.replace("###", "<strong>" + e + "</strong>"), "perto", o)
                    }),
                    this._jogo.on("invalido", function(e) {
                        var o = t._buscarMensagem(t._respostasEnviadas, e);
                        t._respostaMsg(t._jogo.loginJogo + ": " + e, "invalido", o)
                    }),
                    this._jogo.on("dica", function(e, o, a) {
                        t._som.play("dica"),
                        t._respostaMsg(t._idioma.jogo.dica + " (" + o + "): " + e.join("&nbsp;").replace(/_/g, "__"), "dica"),
                        t._exibirDica(e, a),
                        t._jogo.vez && ((0,
                        g.$)("#ferramentas .mnDica").disabled = !1)
                    }),
                    this._jogo.on("dicaFim", function() {
                        t._jogo.vez && (t._infoDesenho("Fim das dicas.", "infos"),
                        (0,
                        g.$)("#ferramentas").classList.add("rmDicas"))
                    }),
                    this._jogo.on("acerto", function(e) {
                        t._som.play("acertoVoce");
                        var o = (0,
                        g.$)("#formResposta input");
                        o.value = t._idioma.jogo.acertouEscla,
                        o.disabled = !0,
                        o.blur(),
                        t._removerEnviadas(t._respostasEnviadas),
                        t._respostaMsg(t._idioma.jogo.voceAcertou.replace("###", "<strong>" + e + "</strong>"), "acertou"),
                        t._tablet && ((0,
                        g.$)("#dica").classList.add("verde"),
                        (0,
                        g.$)("#dica").innerHTML = t._idioma.jogo.acertouEscla),
                        !window.localStorage.getItem("vibrarOff") && navigator.vibrate && navigator.vibrate(500)
                    }),
                    this._jogo.on("acertoOutro", function(e) {
                        t._som.play("acertoOutro"),
                        t._respostaMsg(t._idioma.jogo.acertou.replace("###", "<strong>" + e + "</strong>"), "acertou"),
                        t._jogo.vez && t._infoDesenho("<strong>" + e + "</strong> acertou!", "infos-acertou")
                    }),
                    this._jogo.on("todosAcertaram", function() {
                        t._alertaMsg(t._idioma.jogo.obraDeArte, "", t._idioma.jogo.todosAcertaram2, "acertou"),
                        t._respostaMsg(t._idioma.jogo.todosAcertaram, "acertou")
                    }),
                    this._jogo.on("primeiroAcerto", function() {
                        (0,
                        g.$)("#ferramentas").classList.add("rmTodos"),
                        (0,
                        g.$)("#ferramentas .mnDica").disabled = !0,
                        (0,
                        g.$)("#ferramentas .mnPular").disabled = !0
                    }),
                    this._jogo.on("denuncia", function(e, o) {
                        e ? t._respostaMsg(t._idioma.jogo.voceDenunciou, "cancelado") : (t._respostaMsg(t._idioma.jogo.denunciouDesenho.replace("###", o), "cancelado"),
                        t._jogo.vez && t._infoDesenho("<strong>" + o + "</strong> denunciou o desenho", "infos-denuncia"))
                    }),
                    this._jogo.on("vez", function(e, o) {
                        t._som.play("vezVoce2");
                        var a = (0,
                        g.$)(".cor.ativo", t._elem);
                        a && a.classList.remove("ativo"),
                        (0,
                        g.$)("#corPreta").classList.add("ativo"),
                        (0,
                        g.$)("#list-ferramentas").style.display = "",
                        (0,
                        g.$)("#opacidade-espessura").style.display = "",
                        (0,
                        g.$)("#ferramentas .mnFerramentas").className = "mnFerramentas lapis",
                        (0,
                        g.$)("#ferramentas .mnPular").disabled = !1,
                        (0,
                        g.$)("#ferramentas .mnDica").disabled = !1,
                        (0,
                        g.$)("#tamanho").value = 4,
                        (0,
                        g.$)("#opacidade").value = 1,
                        (0,
                        g.$)("#ctt-canvas").className = "",
                        t._elem.classList.add("desenhando"),
                        t._respostaMsg(t._idioma.jogo.suaVezPalavra.replace("###", "<strong>" + e + "</strong>"), "suaVez"),
                        t._exibirDica(null, e),
                        t._popup.desenhar(e, function() {
                            t._desenho.zoomTela = window.innerHeight > window.innerWidth ? (0,
                            g.$)("#ctt-canvas .canvas").offsetHeight * t._zoom / 304 : (0,
                            g.$)("#ctt-canvas .canvas").offsetWidth * t._zoom / 510
                        }),
                        !window.localStorage.getItem("vibrarOff") && navigator.vibrate && navigator.vibrate(500),
                        t._iniciarTempo(1e3 * t._jogo.tempoRodada, parseInt(o) / t._jogo.tempoRodada)
                    }),
                    this._jogo.on("vezOutro", function(e, o) {
                        t._som.play("vezOutro"),
                        t._tablet && ((0,
                        g.$)("#dica").className = "",
                        (0,
                        g.$)("#dica").innerHTML = t._idioma.jogo.novaRodada);
                        var a = (0,
                        g.$)("#formResposta input");
                        a.value = "",
                        a.disabled = !1,
                        t._alertaMsg(t._idioma.jogo.novaRodada, t._idioma.jogo.vezCom, e, "vezDe", e),
                        t._respostaMsg(t._idioma.jogo.vezSem.replace("###", "<strong>" + e + "</strong>"), "suaVez"),
                        !window.localStorage.getItem("vibrarOff") && navigator.vibrate && navigator.vibrate(500),
                        t._iniciarTempo(1e3 * t._jogo.tempoRodada, parseInt(o) / t._jogo.tempoRodada)
                    }),
                    this._jogo.on("intervalo", function(e) {
                        t._alertaMsg(t._idioma.jogo.intervalo, "", t._idioma.jogo.aproveiteEsticar, "intervalo"),
                        e ? t._respostaMsg(t._idioma.jogo.aResposta.replace("###", "<strong>" + e + "</strong>"), "intervalo") : t._respostaMsg(t._idioma.jogo.naoAcertou, "intervalo")
                    }),
                    this._jogo.on("fimRodada", function(e) {
                        t._som.play("fimRodada"),
                        t._popup.fecharProvisorio();
                        var o = (0,
                        g.$)("#formResposta input");
                        o.value = t._idioma.jogo.intervaloSem,
                        o.disabled = !0,
                        o.blur(),
                        t._removerEnviadas(t._respostasEnviadas),
                        t._elem.classList.remove("desenhando"),
                        (0,
                        g.$)("#ferramentas").className = "",
                        (0,
                        g.$)("#dica").className = "",
                        (0,
                        g.$)("#denunciar").disabled = !0,
                        e ? (t._iniciarTempo(2 * t._jogo.tempoIntervalo + 1e3, 0),
                        t._tablet && ((0,
                        g.$)("#dica").innerHTML = t._idioma.jogo.fimJogo)) : (t._tablet && ((0,
                        g.$)("#dica").innerHTML = t._idioma.jogo.fimRodada),
                        t._respostaMsg(t._idioma.jogo.intervalo, "intervalo"),
                        t._iniciarTempo(t._jogo.tempoIntervalo + 1e3, 0))
                    }),
                    this._jogo.on("cancelar", function() {
                        t._alertaMsg(t._idioma.jogo.cancelado, "", t._idioma.jogo.desenhoCancel, "cancelar"),
                        t._respostaMsg(t._idioma.jogo.msgCancelado, "cancelado")
                    }),
                    this._jogo.on("pular", function(e) {
                        var o = void 0;
                        o = "" == e ? t._idioma.jogo.vocePulou : t._idioma.jogo.pulouVez.replace("###", e),
                        t._alertaMsg(t._idioma.jogo.pulou, "", o, "pulou"),
                        t._respostaMsg(o, "intervalo")
                    }),
                    this._jogo.on("fimJogo", function(e, o) {
                        t._alertaMsg(t._idioma.jogo.fimJogo, t._idioma.jogo.vencedor, e, "vencedor", e),
                        t._respostaMsg(t._idioma.jogo.venceuCom.replace("###", "<strong>" + e + "</strong>").replace("###", o), "intervalo")
                    }),
                    this._jogo.on("inativo", function() {
                        t._jogo.vez ? (t._alertaMsg(t._idioma.jogo.inativo, "", t._idioma.jogo.vocePerdeuVez, "intervalo"),
                        t._respostaMsg(t._idioma.jogo.vocePerdeuVez, "intervalo")) : (t._alertaMsg(t._idioma.jogo.inativo, "", t._idioma.jogo.perdeuVez.replace("###", t._jogo.desenhistaVez), "intervalo"),
                        t._respostaMsg(t._idioma.jogo.perdeuVez.replace("###", t._jogo.desenhistaVez), "intervalo"))
                    }),
                    this._jogo.on("mensagem", function(e, o) {
                        switch (e) {
                        case 1:
                            t._removerMensagens(t._mensagensEnviadas),
                            t._conversaMsg(t._jogo.loginJogo, t._idioma.jogo.msgIgnorado.replace("###", "'" + o + "'"), "entrou-sala"),
                            t._ignorarUser(o);
                            break;
                        case 2:
                            t._removerMensagens(t._mensagensEnviadas),
                            t._conversaMsg(t._jogo.loginJogo, t._idioma.jogo.msgBloqueada + " (" + o + ")", "erro");
                            break;
                        case 3:
                            t._removerMensagens(t._mensagensEnviadas),
                            t._conversaMsg(t._jogo.loginJogo, t._idioma.jogo.mensagemOfensiva + " (" + o + ")", "erro");
                            break;
                        case 4:
                            t._removerEnviadas(t._respostasEnviadas),
                            t._respostaMsg(t._idioma.jogo.mensagemOfensiva + " (" + o + ")", "cancelado");
                            break;
                        case 5:
                            t._removerMensagens(t._mensagensEnviadas),
                            t._conversaMsg("", t._idioma.jogo.liberadoSucesso.replace("###", "'" + o + "'"), "entrou-sala"),
                            t._liberarUser(o);
                            break;
                        case 6:
                            t._removerMensagens(t._mensagensEnviadas),
                            t._conversaMsg(t._jogo.loginJogo, t._idioma.jogo.naoEncontrado + " (" + o + ")", "erro");
                            break;
                        case 7:
                            t._removerMensagens(t._mensagensEnviadas),
                            t._conversaMsg(t._jogo.loginJogo, t._idioma.jogo.comandoInvalido + " (" + o + ")", "erro");
                            break;
                        case 8:
                            t._removerMensagens(t._mensagensEnviadas),
                            t._conversaMsg("", t._idioma.jogo.todosLiberados, "entrou-sala")
                        }
                    }),
                    this._jogo.on("aguardando", function() {
                        (0,
                        g.$)("#denunciar").disabled = !0,
                        t._alertaMsg(t._idioma.jogo.aguardando, "", t._idioma.jogo.esperandoJogadores, "aguardando"),
                        t._respostaMsg(t._idioma.jogo.salaVazia, "intervalo")
                    }),
                    this._jogo.on("entrada", function(e) {
                        t._som.play("entrada"),
                        t._conversaMsg(e, t._idioma.jogo.chatEntrouSala, "entrou-sala")
                    }),
                    this._jogo.on("saida", function(e) {
                        t._som.play("saida"),
                        t._conversaMsg(e, t._idioma.jogo.chatSaiuSala, "entrou-sala")
                    }),
                    this._jogo.on("usuarios", function(e) {
                        t._lerUsuarios(e)
                    }),
                    this._jogo.on("sair", function(e, o) {
                        if (t._timerTempo && cancelAnimationFrame(t._timerTempo),
                        t._jogo) {
                            var a = t._jogo.salaFixa
                              , r = t._jogo.criador;
                            t._popup.fechar(),
                            t._popup.fecharJogo(),
                            t._tela.travado = !1,
                            t._tela.voltarTudo(),
                            t._tela.removeListener("travado", t._listener),
                            t._popup.removerJogo(),
                            t._jogo = null,
                            t._desenho = null,
                            t._player = null,
                            t._tela.registrarCallback(function() {
                                2 == e ? t._popup.mensagemErro(e) : 20 == o && t._popup.mensagemErro(1 == a || r ? 20 : 23)
                            })
                        }
                    })
                }
            }, {
                key: "sair",
                value: function(t) {
                    this._jogo.sair(t)
                }
            }, {
                key: "redimensionar",
                value: function() {
                    this._scroll.scrollEnd(!1, !0),
                    this._scrollChat.scrollEnd(!1, !0)
                }
            }, {
                key: "_infoDesenho",
                value: function(t, e) {
                    var o = document.createElement("div");
                    o.className = e,
                    o.innerHTML = t,
                    (0,
                    g.$)("#infos").insertAdjacentElement("beforeend", o),
                    o.addEventListener("transitionend", function() {
                        (0,
                        g.$)("#infos").removeChild(o)
                    }, !1),
                    o.offsetWidth,
                    setTimeout(function() {
                        o.style.opacity = 0
                    }, 0)
                }
            }, {
                key: "_respostaMsg",
                value: function(t, e, o) {
                    return o ? (o.className = e || "",
                    "perto" == e && (o.innerHTML = t)) : (o = document.createElement("p"),
                    e && (o.className = e),
                    o.innerHTML = t,
                    this._scroll.append(o)),
                    o
                }
            }, {
                key: "_conversaMsg",
                value: function(t, e, o, a) {
                    if ("entrou-sala" != o)
                        if (a)
                            a.className = "msg" + (o ? " " + o : "");
                        else {
                            a = document.createElement("div");
                            var r = void 0
                              , i = void 0
                              , n = void 0;
                            a.className = "msg " + o,
                            r = document.createElement("div"),
                            r.className = "nick",
                            r.innerHTML = t,
                            i = document.createElement("div"),
                            i.className = "avat";
                            var s = this._obterUsuario(t);
                            (0,
                            g.aplicarAvatar)(i, s.avatar, t),
                            n = document.createElement("div"),
                            n.className = "balaoMsg",
                            n.innerHTML = e,
                            a.appendChild(r),
                            a.appendChild(i),
                            a.appendChild(n)
                        }
                    else
                        a = document.createElement("div"),
                        a.className = "entrou-sala",
                        a.innerHTML = e.replace("###", "<strong>" + t + "</strong>");
                    return this._scrollChat.append(a),
                    a
                }
            }, {
                key: "_iniciarTempo",
                value: function(t, e) {
                    var o = this;
                    this._timerTempo && cancelAnimationFrame(this._timerTempo);
                    var a = performance.now();
                    void 0 === e && (e = 1);
                    var r = Math.round(100 - 100 * e)
                      , i = (0,
                    g.$)("#tempo div");
                    i.classList.remove("tempoFinal"),
                    i.style.width = r + "%";
                    var n = function e() {
                        var n = performance.now() - a;
                        if (n > t)
                            i.style.width = "0";
                        else {
                            var s = 2 * Math.round((1 - n / t) * r / 2);
                            s <= 20 && i.classList.add("tempoFinal"),
                            i.style.width = s + "%",
                            o._timerTempo = requestAnimationFrame(e)
                        }
                    };
                    this._timerTempo = requestAnimationFrame(n)
                }
            }, {
                key: "_alertaMsg",
                value: function(t, e, o, a, r) {
                    if ("intervalo" != a || "acertou" != (0,
                    g.$)("#ctt-canvas").className) {
                        if ((0,
                        g.$)("#avisos-sala h3").textContent = t,
                        e && ((0,
                        g.$)("#avisos-sala p").textContent = e),
                        (0,
                        g.$)("#avisos-sala span").textContent = o,
                        r) {
                            var i = this._obterUsuario(r);
                            (0,
                            g.aplicarAvatar)((0,
                            g.$)("#avisos-sala .icon"), i.avatar, i.login)
                        } else {
                            var n = (0,
                            g.$)("#avisos-sala .icon");
                            n.className = "icon",
                            n.style.backgroundImage = ""
                        }
                        (0,
                        g.$)("#ctt-canvas").className = a
                    }
                }
            }, {
                key: "_lerUsuarios",
                value: function(t) {
                    var e = void 0
                      , o = void 0
                      , a = void 0
                      , r = void 0
                      , i = void 0
                      , n = void 0
                      , s = void 0
                      , c = void 0
                      , l = [];
                    for (s = 0; s < this._listaUsuarios.length; s++) {
                        for (e = this._listaUsuarios[s],
                        o = !1,
                        c = 0; c < t.length; c++)
                            if (a = t[c],
                            e.login.toLowerCase() == a.login.toLowerCase()) {
                                if (r = a.pontos - e.pontos,
                                0 != r && l.push([e.elem, r]),
                                i = e.status,
                                n = e.pontos,
                                e.pontos = a.pontos,
                                e.vitorias = a.vitorias,
                                e.status = a.status,
                                i != e.status || n != e.pontos) {
                                    switch (e.elem.className = "",
                                    this._listaIgnorados[e.login.toLowerCase()] && e.elem.classList.add("ignorado"),
                                    e.proprio && e.elem.classList.add("proprio"),
                                    e.status) {
                                    case 2:
                                        e.elem.classList.add("acertou");
                                        break;
                                    case 1:
                                        e.elem.classList.add("vez")
                                    }
                                    this._txtUser(e)
                                }
                                t.splice(c, 1),
                                o = !0;
                                break
                            }
                        o || ((0,
                        g.$)("#usuarios ul").removeChild(this._listaUsuarios[s].elem),
                        this._listaUsuarios.splice(s, 1),
                        s--,
                        this._listaUsuarios.length < this._jogo.maxJogadores && this._listaVazios.push(this._criarElemVazio()))
                    }
                    for (c = 0; c < t.length; c++)
                        e = t[c],
                        e.posicao = -1,
                        e.ordem = this._jogadoresOrdem++,
                        this._criarElem(e),
                        this._listaUsuarios.push(e);
                    this._listaUsuarios.sort(function(t, e) {
                        return e.pontos != t.pontos ? e.pontos - t.pontos : t.ordem - e.ordem
                    });
                    var u = void 0;
                    u = this._tablet ? 67 : 41;
                    for (s in this._listaUsuarios)
                        e = this._listaUsuarios[s],
                        s != e.posicao && (-1 == e.posicao ? (e.elem.style.top = s * u + "px",
                        e.elem.style.opacity = 1) : e.elem.style.top = s * u + "px",
                        e.posicao = s);
                    for (s in this._listaVazios)
                        this._listaVazios[s].style.top = (this._listaUsuarios.length + parseInt(s)) * u + "px"
                }
            }, {
                key: "_criarElem",
                value: function(t) {
                    var e = this;
                    switch (t.proprio = t.login.toLowerCase() == this._jogo.loginJogo.toLowerCase(),
                    t.elem = document.createElement("li"),
                    t.proprio && t.elem.classList.add("proprio"),
                    parseInt(t.status)) {
                    case 2:
                        t.elem.classList.add("acertou");
                        break;
                    case 1:
                        t.elem.classList.add("vez")
                    }
                    var o = document.createElement("div");
                    o.className = "avat",
                    (0,
                    g.aplicarAvatar)(o, t.avatar, t.login);
                    var a = document.createElement("div");
                    a.className = "nick-pts";
                    var r = document.createElement("div");
                    r.className = "nick";
                    var i = document.createElement("div");
                    i.className = "pts",
                    t.elem.addEventListener("click", function() {
                        e._som.play("botao"),
                        e._popup.perfilJogo(t.login, t.avatar, t.proprio)
                    }, !1),
                    t.elem.appendChild(o),
                    a.appendChild(r),
                    a.appendChild(i),
                    t.elem.appendChild(a),
                    this._txtUser(t),
                    this._listaVazios.length && (0,
                    g.$)("#usuarios ul").removeChild(this._listaVazios.pop()),
                    (0,
                    g.$)("#usuarios ul").appendChild(t.elem)
                }
            }, {
                key: "_criarElemVazio",
                value: function() {
                    var t = document.createElement("li");
                    t.className = "vazio";
                    var e = document.createElement("div");
                    e.className = "avat";
                    var o = document.createElement("div");
                    o.className = "nick-pts";
                    var a = document.createElement("div");
                    a.className = "nick",
                    a.innerHTML = this._idioma.jogo.vazio;
                    var r = document.createElement("div");
                    return r.className = "pts",
                    t.appendChild(e),
                    o.appendChild(a),
                    o.appendChild(r),
                    t.appendChild(o),
                    (0,
                    g.$)("#usuarios ul").appendChild(t),
                    t
                }
            }, {
                key: "_txtUser",
                value: function(t) {
                    (0,
                    g.$)(".nick", t.elem).innerHTML = t.login,
                    (0,
                    g.$)(".pts", t.elem).innerHTML = "<strong>" + t.pontos + "</strong>" + this._idioma.jogo.pontos2
                }
            }, {
                key: "_obterUsuario",
                value: function(t) {
                    t = t.toLowerCase();
                    var e = void 0;
                    for (var o in this._listaUsuarios)
                        if (e = this._listaUsuarios[o],
                        e.login.toLowerCase() == t)
                            return e;
                    return !1
                }
            }, {
                key: "_exibirDica",
                value: function(t, e) {
                    var o = (0,
                    g.$)("#dica");
                    o.className = "",
                    o.innerHTML = "";
                    var a = void 0
                      , r = void 0
                      , i = void 0;
                    if (this._jogo.vez && e) {
                        var n = [];
                        e = e.replace(/\-/g, "- ");
                        var s = e.split(" ")
                          , c = !0
                          , l = !1
                          , u = void 0;
                        try {
                            for (var _, d = s[Symbol.iterator](); !(c = (_ = d.next()).done); c = !0) {
                                var p = _.value;
                                i = document.createElement("div");
                                var f = p.match(/./g);
                                for (var h in f)
                                    a = f[h],
                                    r = document.createElement("span"),
                                    " " == a ? r.innerHTML = "&nbsp;" : r.innerText = a,
                                    i.appendChild(r),
                                    n.push(r);
                                o.appendChild(i)
                            }
                        } catch (t) {
                            l = !0,
                            u = t
                        } finally {
                            try {
                                !c && d.return && d.return()
                            } finally {
                                if (l)
                                    throw u
                            }
                        }
                        if (t)
                            for (var m = 0; m < t.length; m++)
                                a = t[m],
                                " " != a ? (r = n[m]) && ("_" == a ? r.className = "traco" : " " != a && (r.className = "traco ativo")) : (t.splice(m, 1),
                                m--)
                    } else {
                        var v = 0;
                        i = document.createElement("div");
                        for (var b in t) {
                            switch (a = t[b],
                            r = !1,
                            a) {
                            case "_":
                                r = document.createElement("span"),
                                r.className = "traco ativo",
                                r.innerHTML = "&nbsp;";
                                break;
                            case " ":
                                v = 0,
                                o.appendChild(i),
                                i = document.createElement("div");
                                break;
                            default:
                                r = document.createElement("span"),
                                r.className = "traco ativo",
                                r.innerText = a
                            }
                            !this._tablet && v > 12 && (o.appendChild(i),
                            i = document.createElement("div"),
                            v = 0),
                            r && (i.appendChild(r),
                            v++)
                        }
                        o.appendChild(i)
                    }
                    o.offsetHeight,
                    setTimeout(function() {
                        o.className = "ativo"
                    }, 0)
                }
            }, {
                key: "_removerEnviadas",
                value: function(t) {
                    for (var e = (0,
                    g.$)("#respostas .list-respostas .scroll"), o = 0; o < t.length; o++)
                        try {
                            e.removeChild(t[o][1])
                        } catch (t) {}
                    t.splice(0),
                    this._scroll.refresh()
                }
            }, {
                key: "_removerMensagens",
                value: function(t) {
                    for (var e = (0,
                    g.$)("#chat .mensagens-chat .scroll"), o = 0; o < t.length; o++)
                        try {
                            e.removeChild(t[o][1])
                        } catch (t) {}
                    t.splice(0),
                    this._scrollChat.refresh()
                }
            }, {
                key: "_buscarMensagem",
                value: function(t, e) {
                    for (var o = null, a = 0; a < t.length; a++)
                        if ((0,
                        s.default)(e) == t[a][0]) {
                            o = t[a][1],
                            t.splice(a, 1);
                            break
                        }
                    return o
                }
            }, {
                key: "_ignorarUser",
                value: function(t) {
                    this._listaIgnorados[t.toLowerCase()] = !0;
                    for (var e = void 0, o = 0; o < this._listaUsuarios.length; o++)
                        if (e = this._listaUsuarios[o],
                        e.login.toLowerCase() == t.toLowerCase()) {
                            e.elem.className += " ignorado";
                            break
                        }
                }
            }, {
                key: "_liberarUser",
                value: function(t) {
                    delete this._listaIgnorados[t.toLowerCase()];
                    for (var e = void 0, o = 0; o < this._listaUsuarios.length; o++)
                        if (e = this._listaUsuarios[o],
                        e.login.toLowerCase() == t.toLowerCase()) {
                            e.elem.className = e.elem.className.replace(" ignorado", "");
                            break
                        }
                }
            }]),
            t
        }();
        o.default = b
    }
    , {
        "./util.js": 6,
        desenho: 343,
        jogo: 347,
        "locutus/php/strings/html_entity_decode": 349,
        ofensa: 351,
        player: 352,
        scroll: 354
    }],
    5: [function(t, e, o) {
        "use strict";
        function a(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function i(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            return function(e, o, a) {
                return o && t(e.prototype, o),
                a && t(e, a),
                e
            }
        }()
          , s = function t(e, o, a) {
            null === e && (e = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(e, o);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(e);
                return null === i ? void 0 : t(i, o, a)
            }
            if ("value"in r)
                return r.value;
            var n = r.get;
            if (void 0 !== n)
                return n.call(a)
        }
          , c = t("eventos")
          , l = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(c)
          , u = function(t) {
            function e(t) {
                a(this, e);
                var o = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return o._tela = t.tela,
                o._popup = t.popup,
                o._con = t.con,
                o._idioma = o._tela.idioma,
                o._entradaSala = 0,
                o._dados = {
                    nick: "",
                    avatar: 0,
                    logado: !1
                },
                o._tela.on("idioma", function(t) {
                    o._idioma = t
                }),
                o
            }
            return i(e, t),
            n(e, [{
    key: "logar",
    value: function(t, e, o) {
        var a = this;
        this._popup.carregando(),
        this._con.chamada("login.php", "login=" + t + "&senha=" + e, "POST", function(t) {
            a.callbackLogin(t)
        }, "txt")
    }
}, {
    key: "logarBackground",
    value: function(t, e, o) {
        var a = this;
        this._con.chamada("login.php", "login=" + t + "&senha=" + e, "POST", function(t) {
            !t || t.erro || t.banido ? a.callbackDeslogar() : a.dados = t,
            o && o()
        }, "txt")
    }
}, {
    key: "deslogar",
    value: function() {
        var t = this;
        this._popup.carregando(),
        this._con.chamada("deslogar.php", "nada=nada", "POST", function(e) {
            t._popup.fechar(),
            t.resetar(),
            t.callbackDeslogar()
        }, "txt"),
        FB.getLoginStatus(function(t) {
            "connected" === t.status && FB.logout();
        });
    }
}, {
                key: "callbackLogin",
                value: function(t) {
                    var e = this;
                    if (this._popup.fechar(),
                    !t || t.erro || t.banido)
                        if (t.banido) {
                            var o = 1 == this._idioma.id ? t.motivo : null
                              , a = null
                              , r = t.codigo ? t.codigo.split("#") : null;
                            r && "j" == r[0] && r[1] && (a = function() {
                                e._popup.fechar(),
                                window.open("https://gartic.com.br/log_ban.php?id=" + r[1] + "&login=" + t.loginBan, "_blank")
                            }
                            ),
                            this._popup.mensagemErro(6, a, o)
                        } else if (this._tela.pagina)
                            switch (this._tela.pagina) {
                            case "formaCadastro":
                                this._tela.abrir("entrarFacebook", null, t.facebook);
                                break;
                            case "entrarFaceEtp02":
                                this._popup.alerta(this._idioma.core.erro, this._idioma.entrarFaceEtp02.erroLogin, "padrao");
                                break;
                            default:
                                t.excluido ? this._popup.alerta(this._idioma.popups.erro, this._idioma.login.excluido, "padrao") : t.facebook ? this._popup.alerta(this._idioma.popups.loginTit, this._idioma.popups.loginTxt, "login", function() {
                                    e._popup.fechar(),
                                    e._tela.abrir("entrarFacebook", null, t.facebook)
                                }, !1, !1, this._idioma.popups.loginBt) : 3 == t.erro ? this._popup.alerta(this._idioma.popups.erro, this._idioma.popups.erroFacebook, "padrao") : this._popup.alerta(this._idioma.core.erro, this._idioma.login.erro, "padrao")
                            }
                        else
                            this._tela.voltarTudo();
                    else
                        this.dados = t,
                        "home" != this._tela.pagina && ("entrarFaceEtp02" == this._tela.pagina ? this._popup.alerta(this._idioma.popups.parabensTit, this._idioma.popups.parabensTxt01, "parabens", function() {
                            e._popup.fechar(),
                            e._tela.voltarTudo()
                        }, !0) : "formaCadastro" == this._tela.pagina ? this._popup.alerta(this._idioma.popups.cadastroTit, this._idioma.popups.cadastroTxt, "cadastro", function() {
                            e._popup.fechar(),
                            e._tela.voltarTudo()
                        }, !0) : "login" == this._tela.pagina && t.facebook ? this._popup.alerta(this._idioma.popups.parabensTit, this._idioma.popups.parabensTxt02, "parabens", function() {
                            e._popup.fechar(),
                            e._tela.voltar(3)
                        }, !0) : "login" == this._tela.pagina ? this._tela.voltar() : this._tela.voltarTudo())
                }
            }, {
                key: "resetar",
                value: function() {
                    this.escolherNick(),
                    this._timerPing && clearTimeout(this._timerPing),
                    window.localStorage.removeItem("nick"),
                    window.localStorage.removeItem("senha")
                }
            }, {
                key: "callbackDeslogar",
                value: function() {
                    this.resetar(),
                    "home" == this._tela.pagina ? s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "loginHome") : "acesso" == this._tela.pagina ? s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "loginAcesso") : this._tela.voltarTudo()
                }
            }, {
                key: "escolherNick",
                value: function() {
                    var t = window.localStorage.getItem("nickAnonimo")
                      , e = window.localStorage.getItem("avatarAnonimo");
                    e || (e = 0),
                    this._dados = t ? {
                        nick: "~" + t,
                        avatar: e,
                        cache: !0
                    } : {
                        nick: "~User" + Math.floor(1e4 * Math.random()),
                        avatar: e
                    }
                }
            }, {
                key: "acessoFace",
                value: function(t) {
                    var e = this;
                    this._popup.carregando(),
                    this._con.chamada("facebook", "access_token=" + t.authResponse.accessToken, "POST", function(t) {
                        e.callbackLogin(t)
                    }, "json")
                }
            }, {
                key: "logarFace",
                value: function() {
                    var t = this;
                    FB.login(function(e) {
                        "connected" === e.status ? t.acessoFace(e) : t._popup.alerta(t._idioma.core.titFacebook, t._idioma.core.txtFaceErro, "padrao")
                    }, {
                        scope: "email"
                    })
                }
            }, {
                key: "marcarSaida",
                value: function() {
                    this._entradaSala = Date.now()
                }
            }, {
                key: "_checkPing",
                value: function(t) {
                    var e = this;
                    if (this._dados.logado) {
                        var o = "";
                        this._dados.fotoPendente && (o = "pendente=1"),
                        this._con.chamada("ping.php", o, "GET", function(t) {
                            if (t && e._dados.logado)
                                if (t.nick)
                                    t.nick != e._dados.nick ? (e._timerPing && clearTimeout(e._timerPing),
                                    e.deslogar()) : (void 0 !== t.liberado && (e._dados.fotoPendente = 0,
                                    e._dados.avatarVersao = t.liberado),
                                    e._timerPing = setTimeout(function() {
                                        e._checkPing()
                                    }, 1e4));
                                else {
                                    var o = window.localStorage.getItem("senha")
                                      , a = window.localStorage.getItem("nick");
                                    o && a ? (e._timerPing && clearTimeout(e._timerPing),
                                    e.logarBackground(a, o)) : e.callbackDeslogar()
                                }
                        }, "json")
                    }
                }
            }, {
    key: "dados",
    set: function(t) {
        var e = this;
        
   
        if (t && t.nick) {
  
            window.localStorage.setItem("nick", t.nick);
            
        
            if (t.senha) {
                window.localStorage.setItem("senha", t.senha);
            } else {
              
                console.log("Login sem senha, mantendo sessão");
            }
        }
        
        this._dados = t;
        this._dados.logado = true;
        
        this._timerPing && clearTimeout(this._timerPing);
        this._timerPing = setTimeout(function() {
            e._checkPing();
        }, 10000);
    }
}, {
                key: "nick",
                get: function() {
                    return this._dados.nick
                },
                set: function(t) {
                    this._dados.nick = t
                }
            }, {
                key: "avatar",
                get: function() {
                    return this._dados.avatar
                },
                set: function(t) {
                    this._dados.avatar = t
                }
            }, {
                key: "avatarVersao",
                get: function() {
                    return this._dados.avatarVersao
                }
            }, {
                key: "logado",
                get: function() {
                    return this._dados.logado
                }
            }, {
                key: "cache",
                get: function() {
                    return this._dados.cache
                },
                set: function(t) {
                    this._dados.cache = t
                }
            }, {
                key: "fotoPendente",
                get: function() {
                    return this._dados.fotoPendente
                },
                set: function(t) {
                    this._dados.fotoPendente = t
                }
            }, {
                key: "entradaSala",
                get: function() {
                    return this._entradaSala
                }
            }]),
            e
        }(l.default);
        o.default = u
    }
    , {
        eventos: 344
    }],
    6: [function(t, e, o) {
        "use strict";
        "user strict";
        function a(t, e) {
            return (e || document).querySelector(t)
        }
        function r(t, e) {
            return (e || document).querySelectorAll(t)
        }
        function i(t, e, o, a) {
            var r = void 0
              , i = void 0
              , n = void 0
              , s = void 0;
            o.addEventListener("touchstart", function(t) {
                n = s = performance.now(),
                r = i = {
                    x: t.touches[0].clientX,
                    y: t.touches[0].clientY
                },
                document.addEventListener("touchmove", c, !0),
                document.addEventListener("touchend", l, !0),
                document.addEventListener("touchcancel", u, !0)
            }, !0);
            var c = function(t) {
                s = performance.now(),
                i = {
                    x: t.touches[0].clientX,
                    y: t.touches[0].clientY
                }
            }
              , l = function o(l) {
                document.removeEventListener("touchmove", c, !0),
                document.removeEventListener("touchend", o, !0),
                document.removeEventListener("touchcancel", u, !0);
                var _ = Math.round(s - n);
                if (_) {
                    var d = Math.abs(i.x - r.x);
                    if (!(d < Math.abs(i.y - r.y))) {
                        if (!(d / _ < .5)) {
                            switch (t) {
                            case "direita":
                                i.x - r.x >= e && a instanceof Function && a(l.target);
                                break;
                            case "esquerda":
                                i.x - r.x <= e && a instanceof Function && a(l.target)
                            }
                            l.stopPropagation(),
                            l.preventDefault()
                        }
                    }
                }
            }
              , u = function t(e) {
                document.removeEventListener("touchmove", c, !0),
                document.removeEventListener("touchend", l, !0),
                document.removeEventListener("touchcancel", t, !0),
                e.stopPropagation(),
                e.preventDefault()
            }
        }
        function n(t, e, o, a) {
            if (t.className = t.className.replace(new RegExp("avt\\d*"), ""),
            e || !o || "~" == o.charAt(0))
                t.style.backgroundImage = "",
                void 0 === e && (e = 0),
                t.classList.add("avt" + e);
            else {
                var r = "";
                o.toLowerCase() == l.nick.toLowerCase() && (r = "_" + l.avatarVersao);
                var i = "https://gartic.com.br/avatar.php?nick=" + o + "&app=1&rand=" + c + r;
                a && (i += "&pendente=1",
                t.parentNode.classList.add("pendente")),
                t.style.backgroundImage = "url(" + i + ")"
            }
        }
        function s(t, e) {
            c = "c" + t,
            l = e
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = 0
          , l = null;
        o.$ = a,
        o._ = r,
        o.swipe = i,
        o.aplicarAvatar = n,
        o.atualizarRand = s
    }
    , {}],
    7: [function(t, e, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./util.js");
        o.default = {
            login: function(t) {
                return -1 != t.toLowerCase().search(/^[a-z0-9_]{3,18}$/)
            },
            loginVazio: function(t) {
                return !t || this.login(t)
            },
            email: function(t) {
                return -1 != t.search(/^[\w\.-]+@[\w-]+\.\w+(\.\w+)?$/)
            },
            senha: function(t) {
                return t.length >= 3
            },
            nome: function(t) {
                return t.length > 1 && t.length < 50
            },
            comparar: function(t, e) {
                return t == e
            },
            preenchido: function(t) {
                return t.length > 0
            },
            sala: function(t) {
                return -1 != t.search(/^[\w ]{3,}$/i)
            },
            verificar: function(t, e) {
                var o = parseInt(t.getAttribute("valida"));
                if (!isNaN(o)) {
                    t.value = t.value.trim();
                    var r = t.value;
                    switch (o) {
                    case 1:
                        return {
                            erro: !this.login(r),
                            retorno: tela.idioma.popups.erroLogin
                        };
                    case 2:
                        return {
                            erro: !this.email(r),
                            retorno: tela.idioma.popups.erroEmail
                        };
                    case 3:
                        return {
                            erro: !this.senha(r),
                            retorno: tela.idioma.popups.erroSenha
                        };
                    case 4:
                        return {
                            erro: !this.nome(r),
                            retorno: tela.idioma.popups.erroNome
                        };
                    case 5:
                        return {
                            erro: !this.preenchido(r),
                            retorno: tela.idioma.popups.erroVazio.replace("###", t.getAttribute("placeholder"))
                        };
                    case 6:
                        return {
                            erro: !e || r != e.value,
                            retorno: tela.idioma.popups["2" == e.getAttribute("valida") ? "erroEmailDif" : "erroSenhaDif"]
                        };
                    case 7:
                        return {
                            erro: !this.preenchido(r),
                            retorno: tela.idioma.popups.erroSelecione.replace("###", (0,
                            a.$)("option", t).textContent)
                        };
                    case 8:
                        return {
                            erro: this.preenchido(r) && !this.senha(r),
                            retorno: tela.idioma.popups.erroSenha
                        };
                    case 9:
                        return {
                            erro: !this.loginVazio(r),
                            retorno: tela.idioma.popups.erroLogin
                        };
                    case 10:
                        return {
                            erro: !this.sala(r),
                            retorno: tela.idioma.popups.erroNomeSala
                        }
                    }
                }
                return {
                    erro: !1
                }
            },
            varrer: function(t) {
                for (var e = (0,
                a._)("input, textarea, select", t), o = null, r = void 0, i = [], n = 0; n < e.length; n++)
                    r = this.verificar(e[n], o),
                    r.erro && i.push(r.retorno),
                    o = e[n];
                return !!i.length && i
            }
        }
    }
    , {
        "./util.js": 6
    }],
    8: [function(t, e, o) {
        (function(e) {
            "use strict";
            function o(t, e, o) {
                t[e] || Object[a](t, e, {
                    writable: !0,
                    configurable: !0,
                    value: o
                })
            }
            if (t("core-js/shim"),
            t("regenerator-runtime/runtime"),
            t("core-js/fn/regexp/escape"),
            e._babelPolyfill)
                throw new Error("only one instance of babel-polyfill is allowed");
            e._babelPolyfill = !0;
            var a = "defineProperty";
            o(String.prototype, "padLeft", "".padStart),
            o(String.prototype, "padRight", "".padEnd),
            "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t) {
                [][t] && o(Array, t, Function.call.bind([][t]))
            })
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "core-js/fn/regexp/escape": 12,
        "core-js/shim": 340,
        "regenerator-runtime/runtime": 353
    }],
    9: [function(t, e, o) {
        !function(a, r) {
            if ("function" == typeof define && define.amd)
                define(["module", "select"], r);
            else if (void 0 !== o)
                r(e, t("select"));
            else {
                var i = {
                    exports: {}
                };
                r(i, a.select),
                a.clipboardAction = i.exports
            }
        }(this, function(t, e) {
            "use strict";
            function o(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            var a = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(e)
              , r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
              , i = function() {
                function t(t, e) {
                    for (var o = 0; o < e.length; o++) {
                        var a = e[o];
                        a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                        "value"in a && (a.writable = !0),
                        Object.defineProperty(t, a.key, a)
                    }
                }
                return function(e, o, a) {
                    return o && t(e.prototype, o),
                    a && t(e, a),
                    e
                }
            }()
              , n = function() {
                function t(e) {
                    o(this, t),
                    this.resolveOptions(e),
                    this.initSelection()
                }
                return i(t, [{
                    key: "resolveOptions",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = t.action,
                        this.container = t.container,
                        this.emitter = t.emitter,
                        this.target = t.target,
                        this.text = t.text,
                        this.trigger = t.trigger,
                        this.selectedText = ""
                    }
                }, {
                    key: "initSelection",
                    value: function() {
                        this.text ? this.selectFake() : this.target && this.selectTarget()
                    }
                }, {
                    key: "selectFake",
                    value: function() {
                        var t = this
                          , e = "rtl" == document.documentElement.getAttribute("dir");
                        this.removeFake(),
                        this.fakeHandlerCallback = function() {
                            return t.removeFake()
                        }
                        ,
                        this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                        this.fakeElem = document.createElement("textarea"),
                        this.fakeElem.style.fontSize = "12pt",
                        this.fakeElem.style.border = "0",
                        this.fakeElem.style.padding = "0",
                        this.fakeElem.style.margin = "0",
                        this.fakeElem.style.position = "absolute",
                        this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                        var o = window.pageYOffset || document.documentElement.scrollTop;
                        this.fakeElem.style.top = o + "px",
                        this.fakeElem.setAttribute("readonly", ""),
                        this.fakeElem.value = this.text,
                        this.container.appendChild(this.fakeElem),
                        this.selectedText = (0,
                        a.default)(this.fakeElem),
                        this.copyText()
                    }
                }, {
                    key: "removeFake",
                    value: function() {
                        this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                        this.fakeHandler = null,
                        this.fakeHandlerCallback = null),
                        this.fakeElem && (this.container.removeChild(this.fakeElem),
                        this.fakeElem = null)
                    }
                }, {
                    key: "selectTarget",
                    value: function() {
                        this.selectedText = (0,
                        a.default)(this.target),
                        this.copyText()
                    }
                }, {
                    key: "copyText",
                    value: function() {
                        var t = void 0;
                        try {
                            t = document.execCommand(this.action)
                        } catch (e) {
                            t = !1
                        }
                        this.handleResult(t)
                    }
                }, {
                    key: "handleResult",
                    value: function(t) {
                        this.emitter.emit(t ? "success" : "error", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        })
                    }
                }, {
                    key: "clearSelection",
                    value: function() {
                        this.trigger && this.trigger.focus(),
                        window.getSelection().removeAllRanges()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.removeFake()
                    }
                }, {
                    key: "action",
                    set: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                        if (this._action = t,
                        "copy" !== this._action && "cut" !== this._action)
                            throw new Error('Invalid "action" value, use either "copy" or "cut"')
                    },
                    get: function() {
                        return this._action
                    }
                }, {
                    key: "target",
                    set: function(t) {
                        if (void 0 !== t) {
                            if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType)
                                throw new Error('Invalid "target" value, use a valid Element');
                            if ("copy" === this.action && t.hasAttribute("disabled"))
                                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                                throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                            this._target = t
                        }
                    },
                    get: function() {
                        return this._target
                    }
                }]),
                t
            }();
            t.exports = n
        })
    }
    , {
        select: 355
    }],
    10: [function(t, e, o) {
        !function(a, r) {
            if ("function" == typeof define && define.amd)
                define(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r);
            else if (void 0 !== o)
                r(e, t("./clipboard-action"), t("tiny-emitter"), t("good-listener"));
            else {
                var i = {
                    exports: {}
                };
                r(i, a.clipboardAction, a.tinyEmitter, a.goodListener),
                a.clipboard = i.exports
            }
        }(this, function(t, e, o, a) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function i(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function n(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            function c(t, e) {
                var o = "data-clipboard-" + t;
                if (e.hasAttribute(o))
                    return e.getAttribute(o)
            }
            var l = r(e)
              , u = r(o)
              , _ = r(a)
              , d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
              , p = function() {
                function t(t, e) {
                    for (var o = 0; o < e.length; o++) {
                        var a = e[o];
                        a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                        "value"in a && (a.writable = !0),
                        Object.defineProperty(t, a.key, a)
                    }
                }
                return function(e, o, a) {
                    return o && t(e.prototype, o),
                    a && t(e, a),
                    e
                }
            }()
              , f = function(t) {
                function e(t, o) {
                    i(this, e);
                    var a = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return a.resolveOptions(o),
                    a.listenClick(t),
                    a
                }
                return s(e, t),
                p(e, [{
                    key: "resolveOptions",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction,
                        this.target = "function" == typeof t.target ? t.target : this.defaultTarget,
                        this.text = "function" == typeof t.text ? t.text : this.defaultText,
                        this.container = "object" === d(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(t) {
                        var e = this;
                        this.listener = (0,
                        _.default)(t, "click", function(t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function(t) {
                        var e = t.delegateTarget || t.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null),
                        this.clipboardAction = new l.default({
                            action: this.action(e),
                            target: this.target(e),
                            text: this.text(e),
                            container: this.container,
                            trigger: e,
                            emitter: this
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(t) {
                        return c("action", t)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(t) {
                        var e = c("target", t);
                        if (e)
                            return document.querySelector(e)
                    }
                }, {
                    key: "defaultText",
                    value: function(t) {
                        return c("text", t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy(),
                        this.clipboardAction && (this.clipboardAction.destroy(),
                        this.clipboardAction = null)
                    }
                }], [{
                    key: "isSupported",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                          , e = "string" == typeof t ? [t] : t
                          , o = !!document.queryCommandSupported;
                        return e.forEach(function(t) {
                            o = o && !!document.queryCommandSupported(t)
                        }),
                        o
                    }
                }]),
                e
            }(u.default);
            t.exports = f
        })
    }
    , {
        "./clipboard-action": 9,
        "good-listener": 346,
        "tiny-emitter": 358
    }],
    11: [function(t, e, o) {
        "use strict";
        function a(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            return function(e, o, a) {
                return o && t(e.prototype, o),
                a && t(e, a),
                e
            }
        }()
          , i = function() {
            function t(e) {
                var o = this;
                a(this, t),
                this._opcoes = Object.assign({
                    base: "",
                    removerCache: !0,
                    sessao: "",
                    cors: !1,
                    statusOff: !1,
                    timeout: 1e4
                }, e),
                this._indice = 0,
                this._requests = [],
                !this._opcoes.statusOff && this._opcoes.timeout && (this._timerRotina = setInterval(function() {
                    o._rotina()
                }, 1e3))
            }
            return r(t, [{
                key: "_rotina",
                value: function() {
                    var t = !0
                      , e = !1
                      , o = void 0;
                    try {
                        for (var a, r = this._requests[Symbol.iterator](); !(t = (a = r.next()).done); t = !0) {
                            var i = a.value;
                            !i.infinito && Date.now() - i.tempo > this._opcoes.timeout && this.abortar(i.id)
                        }
                    } catch (t) {
                        e = !0,
                        o = t
                    } finally {
                        try {
                            !t && r.return && r.return()
                        } finally {
                            if (e)
                                throw o
                        }
                    }
                }
            }, {
    key: "_ajaxRequest",
    value: function(t) {
        var e = this;
        t.tempo = Date.now(),
        t.xhr || (t.xhr = new XMLHttpRequest);
        
        var o = [];
        this._opcoes.removerCache && o.push("cache=" + Date.now()),
        this._opcoes.sessao && o.push("desenho=" + this._opcoes.sessao),
        "GET" == t.method && t.param && o.push(t.param),
        o = o.join("&"),
        o && (o = (-1 == t.pag.indexOf("?") ? "?" : "&") + o),
        
        t.xhr.open(t.method, this._opcoes.base + t.pag + o, !0),
        t.tipo && (t.xhr.responseType = t.tipo);
        
        
        if ("string" == typeof t.param && t.param) {
            t.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=ISO-8859-1");
        }
        
        if (this._opcoes.cors) {
        
            t.xhr.withCredentials = true;
        }
        
        t.xhr.onreadystatechange = function() {
            if (4 == t.xhr.readyState) {
                var o = t.xhr.status;
                
                if (200 == o || e._opcoes.statusOff && 0 == o) {
                    var a = t.tipo ? t.xhr.response : t.xhr.responseText;
                    
                    if ("string" == typeof a) {
                        a = a.trim();
                        if (/^[\[{]/.test(a)) {
                            try {
                                a = JSON.parse(a);
                            } catch (err) {
                                return;
                            }
                        }
                    }
                    
                    if (null !== a) {
                        t.callback && t.callback(a);
                        var r = e._requests.indexOf(t);
                        -1 != r && e._requests.splice(r, 1);
                    } else if (!a) {
                        return void e._ajaxRequest(t);
                    }
                } else if (0 != o) {
                    t.tempo = Date.now(),
                    t.timer = setTimeout(function() {
                        e._ajaxRequest(t)
                    }, 10);
                }
            }
        };
        
        try {
            if ("GET" == t.method) {
                t.xhr.send(null);
            } else {
                t.xhr.send(t.param);
            }
        } catch (t) {
            console.log(t)
        }
    }
}, {
                key: "chamada",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET"
                      , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ""
                      , i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
                      , n = {
                        id: ++this._indice,
                        pag: t,
                        param: e,
                        method: o,
                        callback: a,
                        tipo: r,
                        infinito: i
                    };
                    return this._requests.push(n),
                    this._ajaxRequest(n),
                    this._indice
                }
            }, {
                key: "abortar",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , o = this._requests.filter(function(e) {
                        return e.id == t
                    });
                    o.length && (o[0].timer && clearTimeout(o[0].timer),
                    o[0].xhr.abort(),
                    e ? this._requests.splice(this._requests.indexOf(o[0]), 1) : this._ajaxRequest(o[0]))
                }
            }, {
                key: "remover",
                value: function() {
                    this._opcoes.timeout && clearInterval(this._timerRotina)
                }
            }, {
                key: "sessao",
                get: function() {
                    return this._opcoes.sessao
                },
                set: function(t) {
                    this._opcoes.sessao = t
                }
            }]),
            t
        }();
        o.default = i
    }
    , {}],
    12: [function(t, e, o) {
        t("../../modules/core.regexp.escape"),
        e.exports = t("../../modules/_core").RegExp.escape
    }
    , {
        "../../modules/_core": 34,
        "../../modules/core.regexp.escape": 142
    }],
    13: [function(t, e, o) {
        e.exports = function(t) {
            if ("function" != typeof t)
                throw TypeError(t + " is not a function!");
            return t
        }
    }
    , {}],
    14: [function(t, e, o) {
        var a = t("./_cof");
        e.exports = function(t, e) {
            if ("number" != typeof t && "Number" != a(t))
                throw TypeError(e);
            return +t
        }
    }
    , {
        "./_cof": 29
    }],
    15: [function(t, e, o) {
        var a = t("./_wks")("unscopables")
          , r = Array.prototype;
        void 0 == r[a] && t("./_hide")(r, a, {}),
        e.exports = function(t) {
            r[a][t] = !0
        }
    }
    , {
        "./_hide": 54,
        "./_wks": 140
    }],
    16: [function(t, e, o) {
        "use strict";
        var a = t("./_string-at")(!0);
        e.exports = function(t, e, o) {
            return e + (o ? a(t, e).length : 1)
        }
    }
    , {
        "./_string-at": 117
    }],
    17: [function(t, e, o) {
        e.exports = function(t, e, o, a) {
            if (!(t instanceof e) || void 0 !== a && a in t)
                throw TypeError(o + ": incorrect invocation!");
            return t
        }
    }
    , {}],
    18: [function(t, e, o) {
        var a = t("./_is-object");
        e.exports = function(t) {
            if (!a(t))
                throw TypeError(t + " is not an object!");
            return t
        }
    }
    , {
        "./_is-object": 63
    }],
    19: [function(t, e, o) {
        "use strict";
        var a = t("./_to-object")
          , r = t("./_to-absolute-index")
          , i = t("./_to-length");
        e.exports = [].copyWithin || function(t, e) {
            var o = a(this)
              , n = i(o.length)
              , s = r(t, n)
              , c = r(e, n)
              , l = arguments.length > 2 ? arguments[2] : void 0
              , u = Math.min((void 0 === l ? n : r(l, n)) - c, n - s)
              , _ = 1;
            for (c < s && s < c + u && (_ = -1,
            c += u - 1,
            s += u - 1); u-- > 0; )
                c in o ? o[s] = o[c] : delete o[s],
                s += _,
                c += _;
            return o
        }
    }
    , {
        "./_to-absolute-index": 125,
        "./_to-length": 129,
        "./_to-object": 130
    }],
    20: [function(t, e, o) {
        "use strict";
        var a = t("./_to-object")
          , r = t("./_to-absolute-index")
          , i = t("./_to-length");
        e.exports = function(t) {
            for (var e = a(this), o = i(e.length), n = arguments.length, s = r(n > 1 ? arguments[1] : void 0, o), c = n > 2 ? arguments[2] : void 0, l = void 0 === c ? o : r(c, o); l > s; )
                e[s++] = t;
            return e
        }
    }
    , {
        "./_to-absolute-index": 125,
        "./_to-length": 129,
        "./_to-object": 130
    }],
    21: [function(t, e, o) {
        var a = t("./_for-of");
        e.exports = function(t, e) {
            var o = [];
            return a(t, !1, o.push, o, e),
            o
        }
    }
    , {
        "./_for-of": 50
    }],
    22: [function(t, e, o) {
        var a = t("./_to-iobject")
          , r = t("./_to-length")
          , i = t("./_to-absolute-index");
        e.exports = function(t) {
            return function(e, o, n) {
                var s, c = a(e), l = r(c.length), u = i(n, l);
                if (t && o != o) {
                    for (; l > u; )
                        if ((s = c[u++]) != s)
                            return !0
                } else
                    for (; l > u; u++)
                        if ((t || u in c) && c[u] === o)
                            return t || u || 0;
                return !t && -1
            }
        }
    }
    , {
        "./_to-absolute-index": 125,
        "./_to-iobject": 128,
        "./_to-length": 129
    }],
    23: [function(t, e, o) {
        var a = t("./_ctx")
          , r = t("./_iobject")
          , i = t("./_to-object")
          , n = t("./_to-length")
          , s = t("./_array-species-create");
        e.exports = function(t, e) {
            var o = 1 == t
              , c = 2 == t
              , l = 3 == t
              , u = 4 == t
              , _ = 6 == t
              , d = 5 == t || _
              , p = e || s;
            return function(e, s, f) {
                for (var h, m, v = i(e), g = r(v), b = a(s, f, 3), y = n(g.length), x = 0, k = o ? p(e, y) : c ? p(e, 0) : void 0; y > x; x++)
                    if ((d || x in g) && (h = g[x],
                    m = b(h, x, v),
                    t))
                        if (o)
                            k[x] = m;
                        else if (m)
                            switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return h;
                            case 6:
                                return x;
                            case 2:
                                k.push(h)
                            }
                        else if (u)
                            return !1;
                return _ ? -1 : l || u ? u : k
            }
        }
    }
    , {
        "./_array-species-create": 26,
        "./_ctx": 36,
        "./_iobject": 59,
        "./_to-length": 129,
        "./_to-object": 130
    }],
    24: [function(t, e, o) {
        var a = t("./_a-function")
          , r = t("./_to-object")
          , i = t("./_iobject")
          , n = t("./_to-length");
        e.exports = function(t, e, o, s, c) {
            a(e);
            var l = r(t)
              , u = i(l)
              , _ = n(l.length)
              , d = c ? _ - 1 : 0
              , p = c ? -1 : 1;
            if (o < 2)
                for (; ; ) {
                    if (d in u) {
                        s = u[d],
                        d += p;
                        break
                    }
                    if (d += p,
                    c ? d < 0 : _ <= d)
                        throw TypeError("Reduce of empty array with no initial value")
                }
            for (; c ? d >= 0 : _ > d; d += p)
                d in u && (s = e(s, u[d], d, l));
            return s
        }
    }
    , {
        "./_a-function": 13,
        "./_iobject": 59,
        "./_to-length": 129,
        "./_to-object": 130
    }],
    25: [function(t, e, o) {
        var a = t("./_is-object")
          , r = t("./_is-array")
          , i = t("./_wks")("species");
        e.exports = function(t) {
            var e;
            return r(t) && (e = t.constructor,
            "function" != typeof e || e !== Array && !r(e.prototype) || (e = void 0),
            a(e) && null === (e = e[i]) && (e = void 0)),
            void 0 === e ? Array : e
        }
    }
    , {
        "./_is-array": 61,
        "./_is-object": 63,
        "./_wks": 140
    }],
    26: [function(t, e, o) {
        var a = t("./_array-species-constructor");
        e.exports = function(t, e) {
            return new (a(t))(e)
        }
    }
    , {
        "./_array-species-constructor": 25
    }],
    27: [function(t, e, o) {
        "use strict";
        var a = t("./_a-function")
          , r = t("./_is-object")
          , i = t("./_invoke")
          , n = [].slice
          , s = {}
          , c = function(t, e, o) {
            if (!(e in s)) {
                for (var a = [], r = 0; r < e; r++)
                    a[r] = "a[" + r + "]";
                s[e] = Function("F,a", "return new F(" + a.join(",") + ")")
            }
            return s[e](t, o)
        };
        e.exports = Function.bind || function(t) {
            var e = a(this)
              , o = n.call(arguments, 1)
              , s = function() {
                var a = o.concat(n.call(arguments));
                return this instanceof s ? c(e, a.length, a) : i(e, a, t)
            };
            return r(e.prototype) && (s.prototype = e.prototype),
            s
        }
    }
    , {
        "./_a-function": 13,
        "./_invoke": 58,
        "./_is-object": 63
    }],
    28: [function(t, e, o) {
        var a = t("./_cof")
          , r = t("./_wks")("toStringTag")
          , i = "Arguments" == a(function() {
            return arguments
        }())
          , n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        };
        e.exports = function(t) {
            var e, o, s;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (o = n(e = Object(t), r)) ? o : i ? a(e) : "Object" == (s = a(e)) && "function" == typeof e.callee ? "Arguments" : s
        }
    }
    , {
        "./_cof": 29,
        "./_wks": 140
    }],
    29: [function(t, e, o) {
        var a = {}.toString;
        e.exports = function(t) {
            return a.call(t).slice(8, -1)
        }
    }
    , {}],
    30: [function(t, e, o) {
        "use strict";
        var a = t("./_object-dp").f
          , r = t("./_object-create")
          , i = t("./_redefine-all")
          , n = t("./_ctx")
          , s = t("./_an-instance")
          , c = t("./_for-of")
          , l = t("./_iter-define")
          , u = t("./_iter-step")
          , _ = t("./_set-species")
          , d = t("./_descriptors")
          , p = t("./_meta").fastKey
          , f = t("./_validate-collection")
          , h = d ? "_s" : "size"
          , m = function(t, e) {
            var o, a = p(e);
            if ("F" !== a)
                return t._i[a];
            for (o = t._f; o; o = o.n)
                if (o.k == e)
                    return o
        };
        e.exports = {
            getConstructor: function(t, e, o, l) {
                var u = t(function(t, a) {
                    s(t, u, e, "_i"),
                    t._t = e,
                    t._i = r(null),
                    t._f = void 0,
                    t._l = void 0,
                    t[h] = 0,
                    void 0 != a && c(a, o, t[l], t)
                });
                return i(u.prototype, {
                    clear: function() {
                        for (var t = f(this, e), o = t._i, a = t._f; a; a = a.n)
                            a.r = !0,
                            a.p && (a.p = a.p.n = void 0),
                            delete o[a.i];
                        t._f = t._l = void 0,
                        t[h] = 0
                    },
                    delete: function(t) {
                        var o = f(this, e)
                          , a = m(o, t);
                        if (a) {
                            var r = a.n
                              , i = a.p;
                            delete o._i[a.i],
                            a.r = !0,
                            i && (i.n = r),
                            r && (r.p = i),
                            o._f == a && (o._f = r),
                            o._l == a && (o._l = i),
                            o[h]--
                        }
                        return !!a
                    },
                    forEach: function(t) {
                        f(this, e);
                        for (var o, a = n(t, arguments.length > 1 ? arguments[1] : void 0, 3); o = o ? o.n : this._f; )
                            for (a(o.v, o.k, this); o && o.r; )
                                o = o.p
                    },
                    has: function(t) {
                        return !!m(f(this, e), t)
                    }
                }),
                d && a(u.prototype, "size", {
                    get: function() {
                        return f(this, e)[h]
                    }
                }),
                u
            },
            def: function(t, e, o) {
                var a, r, i = m(t, e);
                return i ? i.v = o : (t._l = i = {
                    i: r = p(e, !0),
                    k: e,
                    v: o,
                    p: a = t._l,
                    n: void 0,
                    r: !1
                },
                t._f || (t._f = i),
                a && (a.n = i),
                t[h]++,
                "F" !== r && (t._i[r] = i)),
                t
            },
            getEntry: m,
            setStrong: function(t, e, o) {
                l(t, e, function(t, o) {
                    this._t = f(t, e),
                    this._k = o,
                    this._l = void 0
                }, function() {
                    for (var t = this, e = t._k, o = t._l; o && o.r; )
                        o = o.p;
                    return t._t && (t._l = o = o ? o.n : t._t._f) ? "keys" == e ? u(0, o.k) : "values" == e ? u(0, o.v) : u(0, [o.k, o.v]) : (t._t = void 0,
                    u(1))
                }, o ? "entries" : "values", !o, !0),
                _(e)
            }
        }
    }
    , {
        "./_an-instance": 17,
        "./_ctx": 36,
        "./_descriptors": 40,
        "./_for-of": 50,
        "./_iter-define": 67,
        "./_iter-step": 69,
        "./_meta": 77,
        "./_object-create": 82,
        "./_object-dp": 83,
        "./_redefine-all": 102,
        "./_set-species": 111,
        "./_validate-collection": 137
    }],
    31: [function(t, e, o) {
        var a = t("./_classof")
          , r = t("./_array-from-iterable");
        e.exports = function(t) {
            return function() {
                if (a(this) != t)
                    throw TypeError(t + "#toJSON isn't generic");
                return r(this)
            }
        }
    }
    , {
        "./_array-from-iterable": 21,
        "./_classof": 28
    }],
    32: [function(t, e, o) {
        "use strict";
        var a = t("./_redefine-all")
          , r = t("./_meta").getWeak
          , i = t("./_an-object")
          , n = t("./_is-object")
          , s = t("./_an-instance")
          , c = t("./_for-of")
          , l = t("./_array-methods")
          , u = t("./_has")
          , _ = t("./_validate-collection")
          , d = l(5)
          , p = l(6)
          , f = 0
          , h = function(t) {
            return t._l || (t._l = new m)
        }
          , m = function() {
            this.a = []
        }
          , v = function(t, e) {
            return d(t.a, function(t) {
                return t[0] === e
            })
        };
        m.prototype = {
            get: function(t) {
                var e = v(this, t);
                if (e)
                    return e[1]
            },
            has: function(t) {
                return !!v(this, t)
            },
            set: function(t, e) {
                var o = v(this, t);
                o ? o[1] = e : this.a.push([t, e])
            },
            delete: function(t) {
                var e = p(this.a, function(e) {
                    return e[0] === t
                });
                return ~e && this.a.splice(e, 1),
                !!~e
            }
        },
        e.exports = {
            getConstructor: function(t, e, o, i) {
                var l = t(function(t, a) {
                    s(t, l, e, "_i"),
                    t._t = e,
                    t._i = f++,
                    t._l = void 0,
                    void 0 != a && c(a, o, t[i], t)
                });
                return a(l.prototype, {
                    delete: function(t) {
                        if (!n(t))
                            return !1;
                        var o = r(t);
                        return !0 === o ? h(_(this, e)).delete(t) : o && u(o, this._i) && delete o[this._i]
                    },
                    has: function(t) {
                        if (!n(t))
                            return !1;
                        var o = r(t);
                        return !0 === o ? h(_(this, e)).has(t) : o && u(o, this._i)
                    }
                }),
                l
            },
            def: function(t, e, o) {
                var a = r(i(e), !0);
                return !0 === a ? h(t).set(e, o) : a[t._i] = o,
                t
            },
            ufstore: h
        }
    }
    , {
        "./_an-instance": 17,
        "./_an-object": 18,
        "./_array-methods": 23,
        "./_for-of": 50,
        "./_has": 53,
        "./_is-object": 63,
        "./_meta": 77,
        "./_redefine-all": 102,
        "./_validate-collection": 137
    }],
    33: [function(t, e, o) {
        "use strict";
        var a = t("./_global")
          , r = t("./_export")
          , i = t("./_redefine")
          , n = t("./_redefine-all")
          , s = t("./_meta")
          , c = t("./_for-of")
          , l = t("./_an-instance")
          , u = t("./_is-object")
          , _ = t("./_fails")
          , d = t("./_iter-detect")
          , p = t("./_set-to-string-tag")
          , f = t("./_inherit-if-required");
        e.exports = function(t, e, o, h, m, v) {
            var g = a[t]
              , b = g
              , y = m ? "set" : "add"
              , x = b && b.prototype
              , k = {}
              , j = function(t) {
                var e = x[t];
                i(x, t, "delete" == t ? function(t) {
                    return !(v && !u(t)) && e.call(this, 0 === t ? 0 : t)
                }
                : "has" == t ? function(t) {
                    return !(v && !u(t)) && e.call(this, 0 === t ? 0 : t)
                }
                : "get" == t ? function(t) {
                    return v && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                }
                : "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t),
                    this
                }
                : function(t, o) {
                    return e.call(this, 0 === t ? 0 : t, o),
                    this
                }
                )
            };
            if ("function" == typeof b && (v || x.forEach && !_(function() {
                (new b).entries().next()
            }))) {
                var w = new b
                  , E = w[y](v ? {} : -0, 1) != w
                  , S = _(function() {
                    w.has(1)
                })
                  , O = d(function(t) {
                    new b(t)
                })
                  , P = !v && _(function() {
                    for (var t = new b, e = 5; e--; )
                        t[y](e, e);
                    return !t.has(-0)
                });
                O || (b = e(function(e, o) {
                    l(e, b, t);
                    var a = f(new g, e, b);
                    return void 0 != o && c(o, m, a[y], a),
                    a
                }),
                b.prototype = x,
                x.constructor = b),
                (S || P) && (j("delete"),
                j("has"),
                m && j("get")),
                (P || E) && j(y),
                v && x.clear && delete x.clear
            } else
                b = h.getConstructor(e, t, m, y),
                n(b.prototype, o),
                s.NEED = !0;
            return p(b, t),
            k[t] = b,
            r(r.G + r.W + r.F * (b != g), k),
            v || h.setStrong(b, t, m),
            b
        }
    }
    , {
        "./_an-instance": 17,
        "./_export": 44,
        "./_fails": 46,
        "./_for-of": 50,
        "./_global": 52,
        "./_inherit-if-required": 57,
        "./_is-object": 63,
        "./_iter-detect": 68,
        "./_meta": 77,
        "./_redefine": 103,
        "./_redefine-all": 102,
        "./_set-to-string-tag": 112
    }],
    34: [function(t, e, o) {
        var a = e.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = a)
    }
    , {}],
    35: [function(t, e, o) {
        "use strict";
        var a = t("./_object-dp")
          , r = t("./_property-desc");
        e.exports = function(t, e, o) {
            e in t ? a.f(t, e, r(0, o)) : t[e] = o
        }
    }
    , {
        "./_object-dp": 83,
        "./_property-desc": 101
    }],
    36: [function(t, e, o) {
        var a = t("./_a-function");
        e.exports = function(t, e, o) {
            if (a(t),
            void 0 === e)
                return t;
            switch (o) {
            case 1:
                return function(o) {
                    return t.call(e, o)
                }
                ;
            case 2:
                return function(o, a) {
                    return t.call(e, o, a)
                }
                ;
            case 3:
                return function(o, a, r) {
                    return t.call(e, o, a, r)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }
    , {
        "./_a-function": 13
    }],
    37: [function(t, e, o) {
        "use strict";
        var a = t("./_fails")
          , r = Date.prototype.getTime
          , i = Date.prototype.toISOString
          , n = function(t) {
            return t > 9 ? t : "0" + t
        };
        e.exports = a(function() {
            return "0385-07-25T07:06:39.999Z" != i.call(new Date(-5e13 - 1))
        }) || !a(function() {
            i.call(new Date(NaN))
        }) ? function() {
            if (!isFinite(r.call(this)))
                throw RangeError("Invalid time value");
            var t = this
              , e = t.getUTCFullYear()
              , o = t.getUTCMilliseconds()
              , a = e < 0 ? "-" : e > 9999 ? "+" : "";
            return a + ("00000" + Math.abs(e)).slice(a ? -6 : -4) + "-" + n(t.getUTCMonth() + 1) + "-" + n(t.getUTCDate()) + "T" + n(t.getUTCHours()) + ":" + n(t.getUTCMinutes()) + ":" + n(t.getUTCSeconds()) + "." + (o > 99 ? o : "0" + n(o)) + "Z"
        }
        : i
    }
    , {
        "./_fails": 46
    }],
    38: [function(t, e, o) {
        "use strict";
        var a = t("./_an-object")
          , r = t("./_to-primitive");
        e.exports = function(t) {
            if ("string" !== t && "number" !== t && "default" !== t)
                throw TypeError("Incorrect hint");
            return r(a(this), "number" != t)
        }
    }
    , {
        "./_an-object": 18,
        "./_to-primitive": 131
    }],
    39: [function(t, e, o) {
        e.exports = function(t) {
            if (void 0 == t)
                throw TypeError("Can't call method on  " + t);
            return t
        }
    }
    , {}],
    40: [function(t, e, o) {
        e.exports = !t("./_fails")(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }
    , {
        "./_fails": 46
    }],
    41: [function(t, e, o) {
        var a = t("./_is-object")
          , r = t("./_global").document
          , i = a(r) && a(r.createElement);
        e.exports = function(t) {
            return i ? r.createElement(t) : {}
        }
    }
    , {
        "./_global": 52,
        "./_is-object": 63
    }],
    42: [function(t, e, o) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }
    , {}],
    43: [function(t, e, o) {
        var a = t("./_object-keys")
          , r = t("./_object-gops")
          , i = t("./_object-pie");
        e.exports = function(t) {
            var e = a(t)
              , o = r.f;
            if (o)
                for (var n, s = o(t), c = i.f, l = 0; s.length > l; )
                    c.call(t, n = s[l++]) && e.push(n);
            return e
        }
    }
    , {
        "./_object-gops": 89,
        "./_object-keys": 92,
        "./_object-pie": 93
    }],
    44: [function(t, e, o) {
        var a = t("./_global")
          , r = t("./_core")
          , i = t("./_hide")
          , n = t("./_redefine")
          , s = t("./_ctx")
          , c = function(t, e, o) {
            var l, u, _, d, p = t & c.F, f = t & c.G, h = t & c.S, m = t & c.P, v = t & c.B, g = f ? a : h ? a[e] || (a[e] = {}) : (a[e] || {}).prototype, b = f ? r : r[e] || (r[e] = {}), y = b.prototype || (b.prototype = {});
            f && (o = e);
            for (l in o)
                u = !p && g && void 0 !== g[l],
                _ = (u ? g : o)[l],
                d = v && u ? s(_, a) : m && "function" == typeof _ ? s(Function.call, _) : _,
                g && n(g, l, _, t & c.U),
                b[l] != _ && i(b, l, d),
                m && y[l] != _ && (y[l] = _)
        };
        a.core = r,
        c.F = 1,
        c.G = 2,
        c.S = 4,
        c.P = 8,
        c.B = 16,
        c.W = 32,
        c.U = 64,
        c.R = 128,
        e.exports = c
    }
    , {
        "./_core": 34,
        "./_ctx": 36,
        "./_global": 52,
        "./_hide": 54,
        "./_redefine": 103
    }],
    45: [function(t, e, o) {
        var a = t("./_wks")("match");
        e.exports = function(t) {
            var e = /./;
            try {
                "/./"[t](e)
            } catch (o) {
                try {
                    return e[a] = !1,
                    !"/./"[t](e)
                } catch (t) {}
            }
            return !0
        }
    }
    , {
        "./_wks": 140
    }],
    46: [function(t, e, o) {
        e.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }
    , {}],
    47: [function(t, e, o) {
        "use strict";
        t("./es6.regexp.exec");
        var a = t("./_redefine")
          , r = t("./_hide")
          , i = t("./_fails")
          , n = t("./_defined")
          , s = t("./_wks")
          , c = t("./_regexp-exec")
          , l = s("species")
          , u = !i(function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                },
                t
            }
            ,
            "7" !== "".replace(t, "$<a>")
        })
          , _ = function() {
            var t = /(?:)/
              , e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            }
            ;
            var o = "ab".split(t);
            return 2 === o.length && "a" === o[0] && "b" === o[1]
        }();
        e.exports = function(t, e, o) {
            var d = s(t)
              , p = !i(function() {
                var e = {};
                return e[d] = function() {
                    return 7
                }
                ,
                7 != ""[t](e)
            })
              , f = p ? !i(function() {
                var e = !1
                  , o = /a/;
                return o.exec = function() {
                    return e = !0,
                    null
                }
                ,
                "split" === t && (o.constructor = {},
                o.constructor[l] = function() {
                    return o
                }
                ),
                o[d](""),
                !e
            }) : void 0;
            if (!p || !f || "replace" === t && !u || "split" === t && !_) {
                var h = /./[d]
                  , m = o(n, d, ""[t], function(t, e, o, a, r) {
                    return e.exec === c ? p && !r ? {
                        done: !0,
                        value: h.call(e, o, a)
                    } : {
                        done: !0,
                        value: t.call(o, e, a)
                    } : {
                        done: !1
                    }
                })
                  , v = m[0]
                  , g = m[1];
                a(String.prototype, t, v),
                r(RegExp.prototype, d, 2 == e ? function(t, e) {
                    return g.call(t, this, e)
                }
                : function(t) {
                    return g.call(t, this)
                }
                )
            }
        }
    }
    , {
        "./_defined": 39,
        "./_fails": 46,
        "./_hide": 54,
        "./_redefine": 103,
        "./_regexp-exec": 105,
        "./_wks": 140,
        "./es6.regexp.exec": 237
    }],
    48: [function(t, e, o) {
        "use strict";
        var a = t("./_an-object");
        e.exports = function() {
            var t = a(this)
              , e = "";
            return t.global && (e += "g"),
            t.ignoreCase && (e += "i"),
            t.multiline && (e += "m"),
            t.unicode && (e += "u"),
            t.sticky && (e += "y"),
            e
        }
    }
    , {
        "./_an-object": 18
    }],
    49: [function(t, e, o) {
        "use strict";
        function a(t, e, o, l, u, _, d, p) {
            for (var f, h, m = u, v = 0, g = !!d && s(d, p, 3); v < l; ) {
                if (v in o) {
                    if (f = g ? g(o[v], v, e) : o[v],
                    h = !1,
                    i(f) && (h = f[c],
                    h = void 0 !== h ? !!h : r(f)),
                    h && _ > 0)
                        m = a(t, e, f, n(f.length), m, _ - 1) - 1;
                    else {
                        if (m >= 9007199254740991)
                            throw TypeError();
                        t[m] = f
                    }
                    m++
                }
                v++
            }
            return m
        }
        var r = t("./_is-array")
          , i = t("./_is-object")
          , n = t("./_to-length")
          , s = t("./_ctx")
          , c = t("./_wks")("isConcatSpreadable");
        e.exports = a
    }
    , {
        "./_ctx": 36,
        "./_is-array": 61,
        "./_is-object": 63,
        "./_to-length": 129,
        "./_wks": 140
    }],
    50: [function(t, e, o) {
        var a = t("./_ctx")
          , r = t("./_iter-call")
          , i = t("./_is-array-iter")
          , n = t("./_an-object")
          , s = t("./_to-length")
          , c = t("./core.get-iterator-method")
          , l = {}
          , u = {}
          , o = e.exports = function(t, e, o, _, d) {
            var p, f, h, m, v = d ? function() {
                return t
            }
            : c(t), g = a(o, _, e ? 2 : 1), b = 0;
            if ("function" != typeof v)
                throw TypeError(t + " is not iterable!");
            if (i(v)) {
                for (p = s(t.length); p > b; b++)
                    if ((m = e ? g(n(f = t[b])[0], f[1]) : g(t[b])) === l || m === u)
                        return m
            } else
                for (h = v.call(t); !(f = h.next()).done; )
                    if ((m = r(h, g, f.value, e)) === l || m === u)
                        return m
        }
        ;
        o.BREAK = l,
        o.RETURN = u
    }
    , {
        "./_an-object": 18,
        "./_ctx": 36,
        "./_is-array-iter": 60,
        "./_iter-call": 65,
        "./_to-length": 129,
        "./core.get-iterator-method": 141
    }],
    51: [function(t, e, o) {
        e.exports = t("./_shared")("native-function-to-string", Function.toString)
    }
    , {
        "./_shared": 114
    }],
    52: [function(t, e, o) {
        var a = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = a)
    }
    , {}],
    53: [function(t, e, o) {
        var a = {}.hasOwnProperty;
        e.exports = function(t, e) {
            return a.call(t, e)
        }
    }
    , {}],
    54: [function(t, e, o) {
        var a = t("./_object-dp")
          , r = t("./_property-desc");
        e.exports = t("./_descriptors") ? function(t, e, o) {
            return a.f(t, e, r(1, o))
        }
        : function(t, e, o) {
            return t[e] = o,
            t
        }
    }
    , {
        "./_descriptors": 40,
        "./_object-dp": 83,
        "./_property-desc": 101
    }],
    55: [function(t, e, o) {
        var a = t("./_global").document;
        e.exports = a && a.documentElement
    }
    , {
        "./_global": 52
    }],
    56: [function(t, e, o) {
        e.exports = !t("./_descriptors") && !t("./_fails")(function() {
            return 7 != Object.defineProperty(t("./_dom-create")("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }
    , {
        "./_descriptors": 40,
        "./_dom-create": 41,
        "./_fails": 46
    }],
    57: [function(t, e, o) {
        var a = t("./_is-object")
          , r = t("./_set-proto").set;
        e.exports = function(t, e, o) {
            var i, n = e.constructor;
            return n !== o && "function" == typeof n && (i = n.prototype) !== o.prototype && a(i) && r && r(t, i),
            t
        }
    }
    , {
        "./_is-object": 63,
        "./_set-proto": 110
    }],
    58: [function(t, e, o) {
        e.exports = function(t, e, o) {
            var a = void 0 === o;
            switch (e.length) {
            case 0:
                return a ? t() : t.call(o);
            case 1:
                return a ? t(e[0]) : t.call(o, e[0]);
            case 2:
                return a ? t(e[0], e[1]) : t.call(o, e[0], e[1]);
            case 3:
                return a ? t(e[0], e[1], e[2]) : t.call(o, e[0], e[1], e[2]);
            case 4:
                return a ? t(e[0], e[1], e[2], e[3]) : t.call(o, e[0], e[1], e[2], e[3])
            }
            return t.apply(o, e)
        }
    }
    , {}],
    59: [function(t, e, o) {
        var a = t("./_cof");
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == a(t) ? t.split("") : Object(t)
        }
    }
    , {
        "./_cof": 29
    }],
    60: [function(t, e, o) {
        var a = t("./_iterators")
          , r = t("./_wks")("iterator")
          , i = Array.prototype;
        e.exports = function(t) {
            return void 0 !== t && (a.Array === t || i[r] === t)
        }
    }
    , {
        "./_iterators": 70,
        "./_wks": 140
    }],
    61: [function(t, e, o) {
        var a = t("./_cof");
        e.exports = Array.isArray || function(t) {
            return "Array" == a(t)
        }
    }
    , {
        "./_cof": 29
    }],
    62: [function(t, e, o) {
        var a = t("./_is-object")
          , r = Math.floor;
        e.exports = function(t) {
            return !a(t) && isFinite(t) && r(t) === t
        }
    }
    , {
        "./_is-object": 63
    }],
    63: [function(t, e, o) {
        e.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }
    , {}],
    64: [function(t, e, o) {
        var a = t("./_is-object")
          , r = t("./_cof")
          , i = t("./_wks")("match");
        e.exports = function(t) {
            var e;
            return a(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == r(t))
        }
    }
    , {
        "./_cof": 29,
        "./_is-object": 63,
        "./_wks": 140
    }],
    65: [function(t, e, o) {
        var a = t("./_an-object");
        e.exports = function(t, e, o, r) {
            try {
                return r ? e(a(o)[0], o[1]) : e(o)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && a(i.call(t)),
                e
            }
        }
    }
    , {
        "./_an-object": 18
    }],
    66: [function(t, e, o) {
        "use strict";
        var a = t("./_object-create")
          , r = t("./_property-desc")
          , i = t("./_set-to-string-tag")
          , n = {};
        t("./_hide")(n, t("./_wks")("iterator"), function() {
            return this
        }),
        e.exports = function(t, e, o) {
            t.prototype = a(n, {
                next: r(1, o)
            }),
            i(t, e + " Iterator")
        }
    }
    , {
        "./_hide": 54,
        "./_object-create": 82,
        "./_property-desc": 101,
        "./_set-to-string-tag": 112,
        "./_wks": 140
    }],
    67: [function(t, e, o) {
        "use strict";
        var a = t("./_library")
          , r = t("./_export")
          , i = t("./_redefine")
          , n = t("./_hide")
          , s = t("./_iterators")
          , c = t("./_iter-create")
          , l = t("./_set-to-string-tag")
          , u = t("./_object-gpo")
          , _ = t("./_wks")("iterator")
          , d = !([].keys && "next"in [].keys())
          , p = function() {
            return this
        };
        e.exports = function(t, e, o, f, h, m, v) {
            c(o, e, f);
            var g, b, y, x = function(t) {
                if (!d && t in E)
                    return E[t];
                switch (t) {
                case "keys":
                case "values":
                    return function() {
                        return new o(this,t)
                    }
                }
                return function() {
                    return new o(this,t)
                }
            }, k = e + " Iterator", j = "values" == h, w = !1, E = t.prototype, S = E[_] || E["@@iterator"] || h && E[h], O = S || x(h), P = h ? j ? x("entries") : O : void 0, L = "Array" == e ? E.entries || S : S;
            if (L && (y = u(L.call(new t))) !== Object.prototype && y.next && (l(y, k, !0),
            a || "function" == typeof y[_] || n(y, _, p)),
            j && S && "values" !== S.name && (w = !0,
            O = function() {
                return S.call(this)
            }
            ),
            a && !v || !d && !w && E[_] || n(E, _, O),
            s[e] = O,
            s[k] = p,
            h)
                if (g = {
                    values: j ? O : x("values"),
                    keys: m ? O : x("keys"),
                    entries: P
                },
                v)
                    for (b in g)
                        b in E || i(E, b, g[b]);
                else
                    r(r.P + r.F * (d || w), e, g);
            return g
        }
    }
    , {
        "./_export": 44,
        "./_hide": 54,
        "./_iter-create": 66,
        "./_iterators": 70,
        "./_library": 71,
        "./_object-gpo": 90,
        "./_redefine": 103,
        "./_set-to-string-tag": 112,
        "./_wks": 140
    }],
    68: [function(t, e, o) {
        var a = t("./_wks")("iterator")
          , r = !1;
        try {
            var i = [7][a]();
            i.return = function() {
                r = !0
            }
            ,
            Array.from(i, function() {
                throw 2
            })
        } catch (t) {}
        e.exports = function(t, e) {
            if (!e && !r)
                return !1;
            var o = !1;
            try {
                var i = [7]
                  , n = i[a]();
                n.next = function() {
                    return {
                        done: o = !0
                    }
                }
                ,
                i[a] = function() {
                    return n
                }
                ,
                t(i)
            } catch (t) {}
            return o
        }
    }
    , {
        "./_wks": 140
    }],
    69: [function(t, e, o) {
        e.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    }
    , {}],
    70: [function(t, e, o) {
        e.exports = {}
    }
    , {}],
    71: [function(t, e, o) {
        e.exports = !1
    }
    , {}],
    72: [function(t, e, o) {
        var a = Math.expm1;
        e.exports = !a || a(10) > 22025.465794806718 || a(10) < 22025.465794806718 || -2e-17 != a(-2e-17) ? function(t) {
            return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
        }
        : a
    }
    , {}],
    73: [function(t, e, o) {
        var a = t("./_math-sign")
          , r = Math.pow
          , i = r(2, -52)
          , n = r(2, -23)
          , s = r(2, 127) * (2 - n)
          , c = r(2, -126)
          , l = function(t) {
            return t + 1 / i - 1 / i
        };
        e.exports = Math.fround || function(t) {
            var e, o, r = Math.abs(t), u = a(t);
            return r < c ? u * l(r / c / n) * c * n : (e = (1 + n / i) * r,
            o = e - (e - r),
            o > s || o != o ? u * (1 / 0) : u * o)
        }
    }
    , {
        "./_math-sign": 76
    }],
    74: [function(t, e, o) {
        e.exports = Math.log1p || function(t) {
            return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
        }
    }
    , {}],
    75: [function(t, e, o) {
        e.exports = Math.scale || function(t, e, o, a, r) {
            return 0 === arguments.length || t != t || e != e || o != o || a != a || r != r ? NaN : t === 1 / 0 || t === -1 / 0 ? t : (t - e) * (r - a) / (o - e) + a
        }
    }
    , {}],
    76: [function(t, e, o) {
        e.exports = Math.sign || function(t) {
            return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
        }
    }
    , {}],
    77: [function(t, e, o) {
        var a = t("./_uid")("meta")
          , r = t("./_is-object")
          , i = t("./_has")
          , n = t("./_object-dp").f
          , s = 0
          , c = Object.isExtensible || function() {
            return !0
        }
          , l = !t("./_fails")(function() {
            return c(Object.preventExtensions({}))
        })
          , u = function(t) {
            n(t, a, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        }
          , _ = function(t, e) {
            if (!r(t))
                return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!i(t, a)) {
                if (!c(t))
                    return "F";
                if (!e)
                    return "E";
                u(t)
            }
            return t[a].i
        }
          , d = function(t, e) {
            if (!i(t, a)) {
                if (!c(t))
                    return !0;
                if (!e)
                    return !1;
                u(t)
            }
            return t[a].w
        }
          , p = function(t) {
            return l && f.NEED && c(t) && !i(t, a) && u(t),
            t
        }
          , f = e.exports = {
            KEY: a,
            NEED: !1,
            fastKey: _,
            getWeak: d,
            onFreeze: p
        }
    }
    , {
        "./_fails": 46,
        "./_has": 53,
        "./_is-object": 63,
        "./_object-dp": 83,
        "./_uid": 135
    }],
    78: [function(t, e, o) {
        var a = t("./es6.map")
          , r = t("./_export")
          , i = t("./_shared")("metadata")
          , n = i.store || (i.store = new (t("./es6.weak-map")))
          , s = function(t, e, o) {
            var r = n.get(t);
            if (!r) {
                if (!o)
                    return;
                n.set(t, r = new a)
            }
            var i = r.get(e);
            if (!i) {
                if (!o)
                    return;
                r.set(e, i = new a)
            }
            return i
        }
          , c = function(t, e, o) {
            var a = s(e, o, !1);
            return void 0 !== a && a.has(t)
        }
          , l = function(t, e, o) {
            var a = s(e, o, !1);
            return void 0 === a ? void 0 : a.get(t)
        }
          , u = function(t, e, o, a) {
            s(o, a, !0).set(t, e)
        }
          , _ = function(t, e) {
            var o = s(t, e, !1)
              , a = [];
            return o && o.forEach(function(t, e) {
                a.push(e)
            }),
            a
        }
          , d = function(t) {
            return void 0 === t || "symbol" == typeof t ? t : String(t)
        }
          , p = function(t) {
            r(r.S, "Reflect", t)
        };
        e.exports = {
            store: n,
            map: s,
            has: c,
            get: l,
            set: u,
            keys: _,
            key: d,
            exp: p
        }
    }
    , {
        "./_export": 44,
        "./_shared": 114,
        "./es6.map": 172,
        "./es6.weak-map": 279
    }],
    79: [function(t, e, o) {
        var a = t("./_global")
          , r = t("./_task").set
          , i = a.MutationObserver || a.WebKitMutationObserver
          , n = a.process
          , s = a.Promise
          , c = "process" == t("./_cof")(n);
        e.exports = function() {
            var t, e, o, l = function() {
                var a, r;
                for (c && (a = n.domain) && a.exit(); t; ) {
                    r = t.fn,
                    t = t.next;
                    try {
                        r()
                    } catch (a) {
                        throw t ? o() : e = void 0,
                        a
                    }
                }
                e = void 0,
                a && a.enter()
            };
            if (c)
                o = function() {
                    n.nextTick(l)
                }
                ;
            else if (!i || a.navigator && a.navigator.standalone)
                if (s && s.resolve) {
                    var u = s.resolve(void 0);
                    o = function() {
                        u.then(l)
                    }
                } else
                    o = function() {
                        r.call(a, l)
                    }
                    ;
            else {
                var _ = !0
                  , d = document.createTextNode("");
                new i(l).observe(d, {
                    characterData: !0
                }),
                o = function() {
                    d.data = _ = !_
                }
            }
            return function(a) {
                var r = {
                    fn: a,
                    next: void 0
                };
                e && (e.next = r),
                t || (t = r,
                o()),
                e = r
            }
        }
    }
    , {
        "./_cof": 29,
        "./_global": 52,
        "./_task": 124
    }],
    80: [function(t, e, o) {
        "use strict";
        function a(t) {
            var e, o;
            this.promise = new t(function(t, a) {
                if (void 0 !== e || void 0 !== o)
                    throw TypeError("Bad Promise constructor");
                e = t,
                o = a
            }
            ),
            this.resolve = r(e),
            this.reject = r(o)
        }
        var r = t("./_a-function");
        e.exports.f = function(t) {
            return new a(t)
        }
    }
    , {
        "./_a-function": 13
    }],
    81: [function(t, e, o) {
        "use strict";
        var a = t("./_descriptors")
          , r = t("./_object-keys")
          , i = t("./_object-gops")
          , n = t("./_object-pie")
          , s = t("./_to-object")
          , c = t("./_iobject")
          , l = Object.assign;
        e.exports = !l || t("./_fails")(function() {
            var t = {}
              , e = {}
              , o = Symbol()
              , a = "abcdefghijklmnopqrst";
            return t[o] = 7,
            a.split("").forEach(function(t) {
                e[t] = t
            }),
            7 != l({}, t)[o] || Object.keys(l({}, e)).join("") != a
        }) ? function(t, e) {
            for (var o = s(t), l = arguments.length, u = 1, _ = i.f, d = n.f; l > u; )
                for (var p, f = c(arguments[u++]), h = _ ? r(f).concat(_(f)) : r(f), m = h.length, v = 0; m > v; )
                    p = h[v++],
                    a && !d.call(f, p) || (o[p] = f[p]);
            return o
        }
        : l
    }
    , {
        "./_descriptors": 40,
        "./_fails": 46,
        "./_iobject": 59,
        "./_object-gops": 89,
        "./_object-keys": 92,
        "./_object-pie": 93,
        "./_to-object": 130
    }],
    82: [function(t, e, o) {
        var a = t("./_an-object")
          , r = t("./_object-dps")
          , i = t("./_enum-bug-keys")
          , n = t("./_shared-key")("IE_PROTO")
          , s = function() {}
          , c = function() {
            var e, o = t("./_dom-create")("iframe"), a = i.length;
            for (o.style.display = "none",
            t("./_html").appendChild(o),
            o.src = "javascript:",
            e = o.contentWindow.document,
            e.open(),
            e.write("<script>document.F=Object<\/script>"),
            e.close(),
            c = e.F; a--; )
                delete c.prototype[i[a]];
            return c()
        };
        e.exports = Object.create || function(t, e) {
            var o;
            return null !== t ? (s.prototype = a(t),
            o = new s,
            s.prototype = null,
            o[n] = t) : o = c(),
            void 0 === e ? o : r(o, e)
        }
    }
    , {
        "./_an-object": 18,
        "./_dom-create": 41,
        "./_enum-bug-keys": 42,
        "./_html": 55,
        "./_object-dps": 84,
        "./_shared-key": 113
    }],
    83: [function(t, e, o) {
        var a = t("./_an-object")
          , r = t("./_ie8-dom-define")
          , i = t("./_to-primitive")
          , n = Object.defineProperty;
        o.f = t("./_descriptors") ? Object.defineProperty : function(t, e, o) {
            if (a(t),
            e = i(e, !0),
            a(o),
            r)
                try {
                    return n(t, e, o)
                } catch (t) {}
            if ("get"in o || "set"in o)
                throw TypeError("Accessors not supported!");
            return "value"in o && (t[e] = o.value),
            t
        }
    }
    , {
        "./_an-object": 18,
        "./_descriptors": 40,
        "./_ie8-dom-define": 56,
        "./_to-primitive": 131
    }],
    84: [function(t, e, o) {
        var a = t("./_object-dp")
          , r = t("./_an-object")
          , i = t("./_object-keys");
        e.exports = t("./_descriptors") ? Object.defineProperties : function(t, e) {
            r(t);
            for (var o, n = i(e), s = n.length, c = 0; s > c; )
                a.f(t, o = n[c++], e[o]);
            return t
        }
    }
    , {
        "./_an-object": 18,
        "./_descriptors": 40,
        "./_object-dp": 83,
        "./_object-keys": 92
    }],
    85: [function(t, e, o) {
        "use strict";
        e.exports = t("./_library") || !t("./_fails")(function() {
            var e = Math.random();
            __defineSetter__.call(null, e, function() {}),
            delete t("./_global")[e]
        })
    }
    , {
        "./_fails": 46,
        "./_global": 52,
        "./_library": 71
    }],
    86: [function(t, e, o) {
        var a = t("./_object-pie")
          , r = t("./_property-desc")
          , i = t("./_to-iobject")
          , n = t("./_to-primitive")
          , s = t("./_has")
          , c = t("./_ie8-dom-define")
          , l = Object.getOwnPropertyDescriptor;
        o.f = t("./_descriptors") ? l : function(t, e) {
            if (t = i(t),
            e = n(e, !0),
            c)
                try {
                    return l(t, e)
                } catch (t) {}
            if (s(t, e))
                return r(!a.f.call(t, e), t[e])
        }
    }
    , {
        "./_descriptors": 40,
        "./_has": 53,
        "./_ie8-dom-define": 56,
        "./_object-pie": 93,
        "./_property-desc": 101,
        "./_to-iobject": 128,
        "./_to-primitive": 131
    }],
    87: [function(t, e, o) {
        var a = t("./_to-iobject")
          , r = t("./_object-gopn").f
          , i = {}.toString
          , n = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
          , s = function(t) {
            try {
                return r(t)
            } catch (t) {
                return n.slice()
            }
        };
        e.exports.f = function(t) {
            return n && "[object Window]" == i.call(t) ? s(t) : r(a(t))
        }
    }
    , {
        "./_object-gopn": 88,
        "./_to-iobject": 128
    }],
    88: [function(t, e, o) {
        var a = t("./_object-keys-internal")
          , r = t("./_enum-bug-keys").concat("length", "prototype");
        o.f = Object.getOwnPropertyNames || function(t) {
            return a(t, r)
        }
    }
    , {
        "./_enum-bug-keys": 42,
        "./_object-keys-internal": 91
    }],
    89: [function(t, e, o) {
        o.f = Object.getOwnPropertySymbols
    }
    , {}],
    90: [function(t, e, o) {
        var a = t("./_has")
          , r = t("./_to-object")
          , i = t("./_shared-key")("IE_PROTO")
          , n = Object.prototype;
        e.exports = Object.getPrototypeOf || function(t) {
            return t = r(t),
            a(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? n : null
        }
    }
    , {
        "./_has": 53,
        "./_shared-key": 113,
        "./_to-object": 130
    }],
    91: [function(t, e, o) {
        var a = t("./_has")
          , r = t("./_to-iobject")
          , i = t("./_array-includes")(!1)
          , n = t("./_shared-key")("IE_PROTO");
        e.exports = function(t, e) {
            var o, s = r(t), c = 0, l = [];
            for (o in s)
                o != n && a(s, o) && l.push(o);
            for (; e.length > c; )
                a(s, o = e[c++]) && (~i(l, o) || l.push(o));
            return l
        }
    }
    , {
        "./_array-includes": 22,
        "./_has": 53,
        "./_shared-key": 113,
        "./_to-iobject": 128
    }],
    92: [function(t, e, o) {
        var a = t("./_object-keys-internal")
          , r = t("./_enum-bug-keys");
        e.exports = Object.keys || function(t) {
            return a(t, r)
        }
    }
    , {
        "./_enum-bug-keys": 42,
        "./_object-keys-internal": 91
    }],
    93: [function(t, e, o) {
        o.f = {}.propertyIsEnumerable
    }
    , {}],
    94: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_core")
          , i = t("./_fails");
        e.exports = function(t, e) {
            var o = (r.Object || {})[t] || Object[t]
              , n = {};
            n[t] = e(o),
            a(a.S + a.F * i(function() {
                o(1)
            }), "Object", n)
        }
    }
    , {
        "./_core": 34,
        "./_export": 44,
        "./_fails": 46
    }],
    95: [function(t, e, o) {
        var a = t("./_descriptors")
          , r = t("./_object-keys")
          , i = t("./_to-iobject")
          , n = t("./_object-pie").f;
        e.exports = function(t) {
            return function(e) {
                for (var o, s = i(e), c = r(s), l = c.length, u = 0, _ = []; l > u; )
                    o = c[u++],
                    a && !n.call(s, o) || _.push(t ? [o, s[o]] : s[o]);
                return _
            }
        }
    }
    , {
        "./_descriptors": 40,
        "./_object-keys": 92,
        "./_object-pie": 93,
        "./_to-iobject": 128
    }],
    96: [function(t, e, o) {
        var a = t("./_object-gopn")
          , r = t("./_object-gops")
          , i = t("./_an-object")
          , n = t("./_global").Reflect;
        e.exports = n && n.ownKeys || function(t) {
            var e = a.f(i(t))
              , o = r.f;
            return o ? e.concat(o(t)) : e
        }
    }
    , {
        "./_an-object": 18,
        "./_global": 52,
        "./_object-gopn": 88,
        "./_object-gops": 89
    }],
    97: [function(t, e, o) {
        var a = t("./_global").parseFloat
          , r = t("./_string-trim").trim;
        e.exports = 1 / a(t("./_string-ws") + "-0") != -1 / 0 ? function(t) {
            var e = r(String(t), 3)
              , o = a(e);
            return 0 === o && "-" == e.charAt(0) ? -0 : o
        }
        : a
    }
    , {
        "./_global": 52,
        "./_string-trim": 122,
        "./_string-ws": 123
    }],
    98: [function(t, e, o) {
        var a = t("./_global").parseInt
          , r = t("./_string-trim").trim
          , i = t("./_string-ws")
          , n = /^[-+]?0[xX]/;
        e.exports = 8 !== a(i + "08") || 22 !== a(i + "0x16") ? function(t, e) {
            var o = r(String(t), 3);
            return a(o, e >>> 0 || (n.test(o) ? 16 : 10))
        }
        : a
    }
    , {
        "./_global": 52,
        "./_string-trim": 122,
        "./_string-ws": 123
    }],
    99: [function(t, e, o) {
        e.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    }
    , {}],
    100: [function(t, e, o) {
        var a = t("./_an-object")
          , r = t("./_is-object")
          , i = t("./_new-promise-capability");
        e.exports = function(t, e) {
            if (a(t),
            r(e) && e.constructor === t)
                return e;
            var o = i.f(t);
            return (0,
            o.resolve)(e),
            o.promise
        }
    }
    , {
        "./_an-object": 18,
        "./_is-object": 63,
        "./_new-promise-capability": 80
    }],
    101: [function(t, e, o) {
        e.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }
    , {}],
    102: [function(t, e, o) {
        var a = t("./_redefine");
        e.exports = function(t, e, o) {
            for (var r in e)
                a(t, r, e[r], o);
            return t
        }
    }
    , {
        "./_redefine": 103
    }],
    103: [function(t, e, o) {
        var a = t("./_global")
          , r = t("./_hide")
          , i = t("./_has")
          , n = t("./_uid")("src")
          , s = t("./_function-to-string")
          , c = ("" + s).split("toString");
        t("./_core").inspectSource = function(t) {
            return s.call(t)
        }
        ,
        (e.exports = function(t, e, o, s) {
            var l = "function" == typeof o;
            l && (i(o, "name") || r(o, "name", e)),
            t[e] !== o && (l && (i(o, n) || r(o, n, t[e] ? "" + t[e] : c.join(String(e)))),
            t === a ? t[e] = o : s ? t[e] ? t[e] = o : r(t, e, o) : (delete t[e],
            r(t, e, o)))
        }
        )(Function.prototype, "toString", function() {
            return "function" == typeof this && this[n] || s.call(this)
        })
    }
    , {
        "./_core": 34,
        "./_function-to-string": 51,
        "./_global": 52,
        "./_has": 53,
        "./_hide": 54,
        "./_uid": 135
    }],
    104: [function(t, e, o) {
        "use strict";
        var a = t("./_classof")
          , r = RegExp.prototype.exec;
        e.exports = function(t, e) {
            var o = t.exec;
            if ("function" == typeof o) {
                var i = o.call(t, e);
                if ("object" != typeof i)
                    throw new TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== a(t))
                throw new TypeError("RegExp#exec called on incompatible receiver");
            return r.call(t, e)
        }
    }
    , {
        "./_classof": 28
    }],
    105: [function(t, e, o) {
        "use strict";
        var a = t("./_flags")
          , r = RegExp.prototype.exec
          , i = String.prototype.replace
          , n = r
          , s = function() {
            var t = /a/
              , e = /b*/g;
            return r.call(t, "a"),
            r.call(e, "a"),
            0 !== t.lastIndex || 0 !== e.lastIndex
        }()
          , c = void 0 !== /()??/.exec("")[1];
        (s || c) && (n = function(t) {
            var e, o, n, l, u = this;
            return c && (o = new RegExp("^" + u.source + "$(?!\\s)",a.call(u))),
            s && (e = u.lastIndex),
            n = r.call(u, t),
            s && n && (u.lastIndex = u.global ? n.index + n[0].length : e),
            c && n && n.length > 1 && i.call(n[0], o, function() {
                for (l = 1; l < arguments.length - 2; l++)
                    void 0 === arguments[l] && (n[l] = void 0)
            }),
            n
        }
        ),
        e.exports = n
    }
    , {
        "./_flags": 48
    }],
    106: [function(t, e, o) {
        e.exports = function(t, e) {
            var o = e === Object(e) ? function(t) {
                return e[t]
            }
            : e;
            return function(e) {
                return String(e).replace(t, o)
            }
        }
    }
    , {}],
    107: [function(t, e, o) {
        e.exports = Object.is || function(t, e) {
            return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
        }
    }
    , {}],
    108: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_a-function")
          , i = t("./_ctx")
          , n = t("./_for-of");
        e.exports = function(t) {
            a(a.S, t, {
                from: function(t) {
                    var e, o, a, s, c = arguments[1];
                    return r(this),
                    e = void 0 !== c,
                    e && r(c),
                    void 0 == t ? new this : (o = [],
                    e ? (a = 0,
                    s = i(c, arguments[2], 2),
                    n(t, !1, function(t) {
                        o.push(s(t, a++))
                    })) : n(t, !1, o.push, o),
                    new this(o))
                }
            })
        }
    }
    , {
        "./_a-function": 13,
        "./_ctx": 36,
        "./_export": 44,
        "./_for-of": 50
    }],
    109: [function(t, e, o) {
        "use strict";
        var a = t("./_export");
        e.exports = function(t) {
            a(a.S, t, {
                of: function() {
                    for (var t = arguments.length, e = new Array(t); t--; )
                        e[t] = arguments[t];
                    return new this(e)
                }
            })
        }
    }
    , {
        "./_export": 44
    }],
    110: [function(t, e, o) {
        var a = t("./_is-object")
          , r = t("./_an-object")
          , i = function(t, e) {
            if (r(t),
            !a(e) && null !== e)
                throw TypeError(e + ": can't set as prototype!")
        };
        e.exports = {
            set: Object.setPrototypeOf || ("__proto__"in {} ? function(e, o, a) {
                try {
                    a = t("./_ctx")(Function.call, t("./_object-gopd").f(Object.prototype, "__proto__").set, 2),
                    a(e, []),
                    o = !(e instanceof Array)
                } catch (t) {
                    o = !0
                }
                return function(t, e) {
                    return i(t, e),
                    o ? t.__proto__ = e : a(t, e),
                    t
                }
            }({}, !1) : void 0),
            check: i
        }
    }
    , {
        "./_an-object": 18,
        "./_ctx": 36,
        "./_is-object": 63,
        "./_object-gopd": 86
    }],
    111: [function(t, e, o) {
        "use strict";
        var a = t("./_global")
          , r = t("./_object-dp")
          , i = t("./_descriptors")
          , n = t("./_wks")("species");
        e.exports = function(t) {
            var e = a[t];
            i && e && !e[n] && r.f(e, n, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }
    , {
        "./_descriptors": 40,
        "./_global": 52,
        "./_object-dp": 83,
        "./_wks": 140
    }],
    112: [function(t, e, o) {
        var a = t("./_object-dp").f
          , r = t("./_has")
          , i = t("./_wks")("toStringTag");
        e.exports = function(t, e, o) {
            t && !r(t = o ? t : t.prototype, i) && a(t, i, {
                configurable: !0,
                value: e
            })
        }
    }
    , {
        "./_has": 53,
        "./_object-dp": 83,
        "./_wks": 140
    }],
    113: [function(t, e, o) {
        var a = t("./_shared")("keys")
          , r = t("./_uid");
        e.exports = function(t) {
            return a[t] || (a[t] = r(t))
        }
    }
    , {
        "./_shared": 114,
        "./_uid": 135
    }],
    114: [function(t, e, o) {
        var a = t("./_core")
          , r = t("./_global")
          , i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        (e.exports = function(t, e) {
            return i[t] || (i[t] = void 0 !== e ? e : {})
        }
        )("versions", []).push({
            version: a.version,
            mode: t("./_library") ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }
    , {
        "./_core": 34,
        "./_global": 52,
        "./_library": 71
    }],
    115: [function(t, e, o) {
        var a = t("./_an-object")
          , r = t("./_a-function")
          , i = t("./_wks")("species");
        e.exports = function(t, e) {
            var o, n = a(t).constructor;
            return void 0 === n || void 0 == (o = a(n)[i]) ? e : r(o)
        }
    }
    , {
        "./_a-function": 13,
        "./_an-object": 18,
        "./_wks": 140
    }],
    116: [function(t, e, o) {
        "use strict";
        var a = t("./_fails");
        e.exports = function(t, e) {
            return !!t && a(function() {
                e ? t.call(null, function() {}, 1) : t.call(null)
            })
        }
    }
    , {
        "./_fails": 46
    }],
    117: [function(t, e, o) {
        var a = t("./_to-integer")
          , r = t("./_defined");
        e.exports = function(t) {
            return function(e, o) {
                var i, n, s = String(r(e)), c = a(o), l = s.length;
                return c < 0 || c >= l ? t ? "" : void 0 : (i = s.charCodeAt(c),
                i < 55296 || i > 56319 || c + 1 === l || (n = s.charCodeAt(c + 1)) < 56320 || n > 57343 ? t ? s.charAt(c) : i : t ? s.slice(c, c + 2) : n - 56320 + (i - 55296 << 10) + 65536)
            }
        }
    }
    , {
        "./_defined": 39,
        "./_to-integer": 127
    }],
    118: [function(t, e, o) {
        var a = t("./_is-regexp")
          , r = t("./_defined");
        e.exports = function(t, e, o) {
            if (a(e))
                throw TypeError("String#" + o + " doesn't accept regex!");
            return String(r(t))
        }
    }
    , {
        "./_defined": 39,
        "./_is-regexp": 64
    }],
    119: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_fails")
          , i = t("./_defined")
          , n = /"/g
          , s = function(t, e, o, a) {
            var r = String(i(t))
              , s = "<" + e;
            return "" !== o && (s += " " + o + '="' + String(a).replace(n, "&quot;") + '"'),
            s + ">" + r + "</" + e + ">"
        };
        e.exports = function(t, e) {
            var o = {};
            o[t] = e(s),
            a(a.P + a.F * r(function() {
                var e = ""[t]('"');
                return e !== e.toLowerCase() || e.split('"').length > 3
            }), "String", o)
        }
    }
    , {
        "./_defined": 39,
        "./_export": 44,
        "./_fails": 46
    }],
    120: [function(t, e, o) {
        var a = t("./_to-length")
          , r = t("./_string-repeat")
          , i = t("./_defined");
        e.exports = function(t, e, o, n) {
            var s = String(i(t))
              , c = s.length
              , l = void 0 === o ? " " : String(o)
              , u = a(e);
            if (u <= c || "" == l)
                return s;
            var _ = u - c
              , d = r.call(l, Math.ceil(_ / l.length));
            return d.length > _ && (d = d.slice(0, _)),
            n ? d + s : s + d
        }
    }
    , {
        "./_defined": 39,
        "./_string-repeat": 121,
        "./_to-length": 129
    }],
    121: [function(t, e, o) {
        "use strict";
        var a = t("./_to-integer")
          , r = t("./_defined");
        e.exports = function(t) {
            var e = String(r(this))
              , o = ""
              , i = a(t);
            if (i < 0 || i == 1 / 0)
                throw RangeError("Count can't be negative");
            for (; i > 0; (i >>>= 1) && (e += e))
                1 & i && (o += e);
            return o
        }
    }
    , {
        "./_defined": 39,
        "./_to-integer": 127
    }],
    122: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_defined")
          , i = t("./_fails")
          , n = t("./_string-ws")
          , s = "[" + n + "]"
          , c = "​"
          , l = RegExp("^" + s + s + "*")
          , u = RegExp(s + s + "*$")
          , _ = function(t, e, o) {
            var r = {}
              , s = i(function() {
                return !!n[t]() || c[t]() != c
            })
              , l = r[t] = s ? e(d) : n[t];
            o && (r[o] = l),
            a(a.P + a.F * s, "String", r)
        }
          , d = _.trim = function(t, e) {
            return t = String(r(t)),
            1 & e && (t = t.replace(l, "")),
            2 & e && (t = t.replace(u, "")),
            t
        }
        ;
        e.exports = _
    }
    , {
        "./_defined": 39,
        "./_export": 44,
        "./_fails": 46,
        "./_string-ws": 123
    }],
    123: [function(t, e, o) {
        e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
    }
    , {}],
    124: [function(t, e, o) {
        var a, r, i, n = t("./_ctx"), s = t("./_invoke"), c = t("./_html"), l = t("./_dom-create"), u = t("./_global"), _ = u.process, d = u.setImmediate, p = u.clearImmediate, f = u.MessageChannel, h = u.Dispatch, m = 0, v = {}, g = function() {
            var t = +this;
            if (v.hasOwnProperty(t)) {
                var e = v[t];
                delete v[t],
                e()
            }
        }, b = function(t) {
            g.call(t.data)
        };
        d && p || (d = function(t) {
            for (var e = [], o = 1; arguments.length > o; )
                e.push(arguments[o++]);
            return v[++m] = function() {
                s("function" == typeof t ? t : Function(t), e)
            }
            ,
            a(m),
            m
        }
        ,
        p = function(t) {
            delete v[t]
        }
        ,
        "process" == t("./_cof")(_) ? a = function(t) {
            _.nextTick(n(g, t, 1))
        }
        : h && h.now ? a = function(t) {
            h.now(n(g, t, 1))
        }
        : f ? (r = new f,
        i = r.port2,
        r.port1.onmessage = b,
        a = n(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (a = function(t) {
            u.postMessage(t + "", "*")
        }
        ,
        u.addEventListener("message", b, !1)) : a = "onreadystatechange"in l("script") ? function(t) {
            c.appendChild(l("script")).onreadystatechange = function() {
                c.removeChild(this),
                g.call(t)
            }
        }
        : function(t) {
            setTimeout(n(g, t, 1), 0)
        }
        ),
        e.exports = {
            set: d,
            clear: p
        }
    }
    , {
        "./_cof": 29,
        "./_ctx": 36,
        "./_dom-create": 41,
        "./_global": 52,
        "./_html": 55,
        "./_invoke": 58
    }],
    125: [function(t, e, o) {
        var a = t("./_to-integer")
          , r = Math.max
          , i = Math.min;
        e.exports = function(t, e) {
            return t = a(t),
            t < 0 ? r(t + e, 0) : i(t, e)
        }
    }
    , {
        "./_to-integer": 127
    }],
    126: [function(t, e, o) {
        var a = t("./_to-integer")
          , r = t("./_to-length");
        e.exports = function(t) {
            if (void 0 === t)
                return 0;
            var e = a(t)
              , o = r(e);
            if (e !== o)
                throw RangeError("Wrong length!");
            return o
        }
    }
    , {
        "./_to-integer": 127,
        "./_to-length": 129
    }],
    127: [function(t, e, o) {
        var a = Math.ceil
          , r = Math.floor;
        e.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : a)(t)
        }
    }
    , {}],
    128: [function(t, e, o) {
        var a = t("./_iobject")
          , r = t("./_defined");
        e.exports = function(t) {
            return a(r(t))
        }
    }
    , {
        "./_defined": 39,
        "./_iobject": 59
    }],
    129: [function(t, e, o) {
        var a = t("./_to-integer")
          , r = Math.min;
        e.exports = function(t) {
            return t > 0 ? r(a(t), 9007199254740991) : 0
        }
    }
    , {
        "./_to-integer": 127
    }],
    130: [function(t, e, o) {
        var a = t("./_defined");
        e.exports = function(t) {
            return Object(a(t))
        }
    }
    , {
        "./_defined": 39
    }],
    131: [function(t, e, o) {
        var a = t("./_is-object");
        e.exports = function(t, e) {
            if (!a(t))
                return t;
            var o, r;
            if (e && "function" == typeof (o = t.toString) && !a(r = o.call(t)))
                return r;
            if ("function" == typeof (o = t.valueOf) && !a(r = o.call(t)))
                return r;
            if (!e && "function" == typeof (o = t.toString) && !a(r = o.call(t)))
                return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }
    , {
        "./_is-object": 63
    }],
    132: [function(t, e, o) {
        "use strict";
        if (t("./_descriptors")) {
            var a = t("./_library")
              , r = t("./_global")
              , i = t("./_fails")
              , n = t("./_export")
              , s = t("./_typed")
              , c = t("./_typed-buffer")
              , l = t("./_ctx")
              , u = t("./_an-instance")
              , _ = t("./_property-desc")
              , d = t("./_hide")
              , p = t("./_redefine-all")
              , f = t("./_to-integer")
              , h = t("./_to-length")
              , m = t("./_to-index")
              , v = t("./_to-absolute-index")
              , g = t("./_to-primitive")
              , b = t("./_has")
              , y = t("./_classof")
              , x = t("./_is-object")
              , k = t("./_to-object")
              , j = t("./_is-array-iter")
              , w = t("./_object-create")
              , E = t("./_object-gpo")
              , S = t("./_object-gopn").f
              , O = t("./core.get-iterator-method")
              , P = t("./_uid")
              , L = t("./_wks")
              , A = t("./_array-methods")
              , C = t("./_array-includes")
              , T = t("./_species-constructor")
              , M = t("./es6.array.iterator")
              , $ = t("./_iterators")
              , I = t("./_iter-detect")
              , F = t("./_set-species")
              , N = t("./_array-fill")
              , R = t("./_array-copy-within")
              , z = t("./_object-dp")
              , D = t("./_object-gopd")
              , J = z.f
              , q = D.f
              , H = r.RangeError
              , U = r.TypeError
              , V = r.Uint8Array
              , G = Array.prototype
              , W = c.ArrayBuffer
              , B = c.DataView
              , Q = A(0)
              , Y = A(2)
              , X = A(3)
              , Z = A(4)
              , K = A(5)
              , tt = A(6)
              , et = C(!0)
              , ot = C(!1)
              , at = M.values
              , rt = M.keys
              , it = M.entries
              , nt = G.lastIndexOf
              , st = G.reduce
              , ct = G.reduceRight
              , lt = G.join
              , ut = G.sort
              , _t = G.slice
              , dt = G.toString
              , pt = G.toLocaleString
              , ft = L("iterator")
              , ht = L("toStringTag")
              , mt = P("typed_constructor")
              , vt = P("def_constructor")
              , gt = s.CONSTR
              , bt = s.TYPED
              , yt = s.VIEW
              , xt = A(1, function(t, e) {
                return St(T(t, t[vt]), e)
            })
              , kt = i(function() {
                return 1 === new V(new Uint16Array([1]).buffer)[0]
            })
              , jt = !!V && !!V.prototype.set && i(function() {
                new V(1).set({})
            })
              , wt = function(t, e) {
                var o = f(t);
                if (o < 0 || o % e)
                    throw H("Wrong offset!");
                return o
            }
              , Et = function(t) {
                if (x(t) && bt in t)
                    return t;
                throw U(t + " is not a typed array!")
            }
              , St = function(t, e) {
                if (!(x(t) && mt in t))
                    throw U("It is not a typed array constructor!");
                return new t(e)
            }
              , Ot = function(t, e) {
                return Pt(T(t, t[vt]), e)
            }
              , Pt = function(t, e) {
                for (var o = 0, a = e.length, r = St(t, a); a > o; )
                    r[o] = e[o++];
                return r
            }
              , Lt = function(t, e, o) {
                J(t, e, {
                    get: function() {
                        return this._d[o]
                    }
                })
            }
              , At = function(t) {
                var e, o, a, r, i, n, s = k(t), c = arguments.length, u = c > 1 ? arguments[1] : void 0, _ = void 0 !== u, d = O(s);
                if (void 0 != d && !j(d)) {
                    for (n = d.call(s),
                    a = [],
                    e = 0; !(i = n.next()).done; e++)
                        a.push(i.value);
                    s = a
                }
                for (_ && c > 2 && (u = l(u, arguments[2], 2)),
                e = 0,
                o = h(s.length),
                r = St(this, o); o > e; e++)
                    r[e] = _ ? u(s[e], e) : s[e];
                return r
            }
              , Ct = function() {
                for (var t = 0, e = arguments.length, o = St(this, e); e > t; )
                    o[t] = arguments[t++];
                return o
            }
              , Tt = !!V && i(function() {
                pt.call(new V(1))
            })
              , Mt = function() {
                return pt.apply(Tt ? _t.call(Et(this)) : Et(this), arguments)
            }
              , $t = {
                copyWithin: function(t, e) {
                    return R.call(Et(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                every: function(t) {
                    return Z(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                fill: function(t) {
                    return N.apply(Et(this), arguments)
                },
                filter: function(t) {
                    return Ot(this, Y(Et(this), t, arguments.length > 1 ? arguments[1] : void 0))
                },
                find: function(t) {
                    return K(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                findIndex: function(t) {
                    return tt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                forEach: function(t) {
                    Q(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                indexOf: function(t) {
                    return ot(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                includes: function(t) {
                    return et(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                join: function(t) {
                    return lt.apply(Et(this), arguments)
                },
                lastIndexOf: function(t) {
                    return nt.apply(Et(this), arguments)
                },
                map: function(t) {
                    return xt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                reduce: function(t) {
                    return st.apply(Et(this), arguments)
                },
                reduceRight: function(t) {
                    return ct.apply(Et(this), arguments)
                },
                reverse: function() {
                    for (var t, e = this, o = Et(e).length, a = Math.floor(o / 2), r = 0; r < a; )
                        t = e[r],
                        e[r++] = e[--o],
                        e[o] = t;
                    return e
                },
                some: function(t) {
                    return X(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                sort: function(t) {
                    return ut.call(Et(this), t)
                },
                subarray: function(t, e) {
                    var o = Et(this)
                      , a = o.length
                      , r = v(t, a);
                    return new (T(o, o[vt]))(o.buffer,o.byteOffset + r * o.BYTES_PER_ELEMENT,h((void 0 === e ? a : v(e, a)) - r))
                }
            }
              , It = function(t, e) {
                return Ot(this, _t.call(Et(this), t, e))
            }
              , Ft = function(t) {
                Et(this);
                var e = wt(arguments[1], 1)
                  , o = this.length
                  , a = k(t)
                  , r = h(a.length)
                  , i = 0;
                if (r + e > o)
                    throw H("Wrong length!");
                for (; i < r; )
                    this[e + i] = a[i++]
            }
              , Nt = {
                entries: function() {
                    return it.call(Et(this))
                },
                keys: function() {
                    return rt.call(Et(this))
                },
                values: function() {
                    return at.call(Et(this))
                }
            }
              , Rt = function(t, e) {
                return x(t) && t[bt] && "symbol" != typeof e && e in t && String(+e) == String(e)
            }
              , zt = function(t, e) {
                return Rt(t, e = g(e, !0)) ? _(2, t[e]) : q(t, e)
            }
              , Dt = function(t, e, o) {
                return !(Rt(t, e = g(e, !0)) && x(o) && b(o, "value")) || b(o, "get") || b(o, "set") || o.configurable || b(o, "writable") && !o.writable || b(o, "enumerable") && !o.enumerable ? J(t, e, o) : (t[e] = o.value,
                t)
            };
            gt || (D.f = zt,
            z.f = Dt),
            n(n.S + n.F * !gt, "Object", {
                getOwnPropertyDescriptor: zt,
                defineProperty: Dt
            }),
            i(function() {
                dt.call({})
            }) && (dt = pt = function() {
                return lt.call(this)
            }
            );
            var Jt = p({}, $t);
            p(Jt, Nt),
            d(Jt, ft, Nt.values),
            p(Jt, {
                slice: It,
                set: Ft,
                constructor: function() {},
                toString: dt,
                toLocaleString: Mt
            }),
            Lt(Jt, "buffer", "b"),
            Lt(Jt, "byteOffset", "o"),
            Lt(Jt, "byteLength", "l"),
            Lt(Jt, "length", "e"),
            J(Jt, ht, {
                get: function() {
                    return this[bt]
                }
            }),
            e.exports = function(t, e, o, c) {
                c = !!c;
                var l = t + (c ? "Clamped" : "") + "Array"
                  , _ = "get" + t
                  , p = "set" + t
                  , f = r[l]
                  , v = f || {}
                  , g = f && E(f)
                  , b = !f || !s.ABV
                  , k = {}
                  , j = f && f.prototype
                  , O = function(t, o) {
                    var a = t._d;
                    return a.v[_](o * e + a.o, kt)
                }
                  , P = function(t, o, a) {
                    var r = t._d;
                    c && (a = (a = Math.round(a)) < 0 ? 0 : a > 255 ? 255 : 255 & a),
                    r.v[p](o * e + r.o, a, kt)
                }
                  , L = function(t, e) {
                    J(t, e, {
                        get: function() {
                            return O(this, e)
                        },
                        set: function(t) {
                            return P(this, e, t)
                        },
                        enumerable: !0
                    })
                };
                b ? (f = o(function(t, o, a, r) {
                    u(t, f, l, "_d");
                    var i, n, s, c, _ = 0, p = 0;
                    if (x(o)) {
                        if (!(o instanceof W || "ArrayBuffer" == (c = y(o)) || "SharedArrayBuffer" == c))
                            return bt in o ? Pt(f, o) : At.call(f, o);
                        i = o,
                        p = wt(a, e);
                        var v = o.byteLength;
                        if (void 0 === r) {
                            if (v % e)
                                throw H("Wrong length!");
                            if ((n = v - p) < 0)
                                throw H("Wrong length!")
                        } else if ((n = h(r) * e) + p > v)
                            throw H("Wrong length!");
                        s = n / e
                    } else
                        s = m(o),
                        n = s * e,
                        i = new W(n);
                    for (d(t, "_d", {
                        b: i,
                        o: p,
                        l: n,
                        e: s,
                        v: new B(i)
                    }); _ < s; )
                        L(t, _++)
                }),
                j = f.prototype = w(Jt),
                d(j, "constructor", f)) : i(function() {
                    f(1)
                }) && i(function() {
                    new f(-1)
                }) && I(function(t) {
                    new f,
                    new f(null),
                    new f(1.5),
                    new f(t)
                }, !0) || (f = o(function(t, o, a, r) {
                    u(t, f, l);
                    var i;
                    return x(o) ? o instanceof W || "ArrayBuffer" == (i = y(o)) || "SharedArrayBuffer" == i ? void 0 !== r ? new v(o,wt(a, e),r) : void 0 !== a ? new v(o,wt(a, e)) : new v(o) : bt in o ? Pt(f, o) : At.call(f, o) : new v(m(o))
                }),
                Q(g !== Function.prototype ? S(v).concat(S(g)) : S(v), function(t) {
                    t in f || d(f, t, v[t])
                }),
                f.prototype = j,
                a || (j.constructor = f));
                var A = j[ft]
                  , C = !!A && ("values" == A.name || void 0 == A.name)
                  , T = Nt.values;
                d(f, mt, !0),
                d(j, bt, l),
                d(j, yt, !0),
                d(j, vt, f),
                (c ? new f(1)[ht] == l : ht in j) || J(j, ht, {
                    get: function() {
                        return l
                    }
                }),
                k[l] = f,
                n(n.G + n.W + n.F * (f != v), k),
                n(n.S, l, {
                    BYTES_PER_ELEMENT: e
                }),
                n(n.S + n.F * i(function() {
                    v.of.call(f, 1)
                }), l, {
                    from: At,
                    of: Ct
                }),
                "BYTES_PER_ELEMENT"in j || d(j, "BYTES_PER_ELEMENT", e),
                n(n.P, l, $t),
                F(l),
                n(n.P + n.F * jt, l, {
                    set: Ft
                }),
                n(n.P + n.F * !C, l, Nt),
                a || j.toString == dt || (j.toString = dt),
                n(n.P + n.F * i(function() {
                    new f(1).slice()
                }), l, {
                    slice: It
                }),
                n(n.P + n.F * (i(function() {
                    return [1, 2].toLocaleString() != new f([1, 2]).toLocaleString()
                }) || !i(function() {
                    j.toLocaleString.call([1, 2])
                })), l, {
                    toLocaleString: Mt
                }),
                $[l] = C ? A : T,
                a || C || d(j, ft, T)
            }
        } else
            e.exports = function() {}
    }
    , {
        "./_an-instance": 17,
        "./_array-copy-within": 19,
        "./_array-fill": 20,
        "./_array-includes": 22,
        "./_array-methods": 23,
        "./_classof": 28,
        "./_ctx": 36,
        "./_descriptors": 40,
        "./_export": 44,
        "./_fails": 46,
        "./_global": 52,
        "./_has": 53,
        "./_hide": 54,
        "./_is-array-iter": 60,
        "./_is-object": 63,
        "./_iter-detect": 68,
        "./_iterators": 70,
        "./_library": 71,
        "./_object-create": 82,
        "./_object-dp": 83,
        "./_object-gopd": 86,
        "./_object-gopn": 88,
        "./_object-gpo": 90,
        "./_property-desc": 101,
        "./_redefine-all": 102,
        "./_set-species": 111,
        "./_species-constructor": 115,
        "./_to-absolute-index": 125,
        "./_to-index": 126,
        "./_to-integer": 127,
        "./_to-length": 129,
        "./_to-object": 130,
        "./_to-primitive": 131,
        "./_typed": 134,
        "./_typed-buffer": 133,
        "./_uid": 135,
        "./_wks": 140,
        "./core.get-iterator-method": 141,
        "./es6.array.iterator": 153
    }],
    133: [function(t, e, o) {
        "use strict";
        function a(t, e, o) {
            var a, r, i, n = new Array(o), s = 8 * o - e - 1, c = (1 << s) - 1, l = c >> 1, u = 23 === e ? R(2, -24) - R(2, -77) : 0, _ = 0, d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = N(t),
            t != t || t === I ? (r = t != t ? 1 : 0,
            a = c) : (a = z(D(t) / J),
            t * (i = R(2, -a)) < 1 && (a--,
            i *= 2),
            t += a + l >= 1 ? u / i : u * R(2, 1 - l),
            t * i >= 2 && (a++,
            i /= 2),
            a + l >= c ? (r = 0,
            a = c) : a + l >= 1 ? (r = (t * i - 1) * R(2, e),
            a += l) : (r = t * R(2, l - 1) * R(2, e),
            a = 0)); e >= 8; n[_++] = 255 & r,
            r /= 256,
            e -= 8)
                ;
            for (a = a << e | r,
            s += e; s > 0; n[_++] = 255 & a,
            a /= 256,
            s -= 8)
                ;
            return n[--_] |= 128 * d,
            n
        }
        function r(t, e, o) {
            var a, r = 8 * o - e - 1, i = (1 << r) - 1, n = i >> 1, s = r - 7, c = o - 1, l = t[c--], u = 127 & l;
            for (l >>= 7; s > 0; u = 256 * u + t[c],
            c--,
            s -= 8)
                ;
            for (a = u & (1 << -s) - 1,
            u >>= -s,
            s += e; s > 0; a = 256 * a + t[c],
            c--,
            s -= 8)
                ;
            if (0 === u)
                u = 1 - n;
            else {
                if (u === i)
                    return a ? NaN : l ? -I : I;
                a += R(2, e),
                u -= n
            }
            return (l ? -1 : 1) * a * R(2, u - e)
        }
        function i(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        }
        function n(t) {
            return [255 & t]
        }
        function s(t) {
            return [255 & t, t >> 8 & 255]
        }
        function c(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        }
        function l(t) {
            return a(t, 52, 8)
        }
        function u(t) {
            return a(t, 23, 4)
        }
        function _(t, e, o) {
            S(t[L], e, {
                get: function() {
                    return this[o]
                }
            })
        }
        function d(t, e, o, a) {
            var r = +o
              , i = w(r);
            if (i + e > t[H])
                throw $(A);
            var n = t[q]._b
              , s = i + t[U]
              , c = n.slice(s, s + e);
            return a ? c : c.reverse()
        }
        function p(t, e, o, a, r, i) {
            var n = +o
              , s = w(n);
            if (s + e > t[H])
                throw $(A);
            for (var c = t[q]._b, l = s + t[U], u = a(+r), _ = 0; _ < e; _++)
                c[l + _] = u[i ? _ : e - _ - 1]
        }
        var f = t("./_global")
          , h = t("./_descriptors")
          , m = t("./_library")
          , v = t("./_typed")
          , g = t("./_hide")
          , b = t("./_redefine-all")
          , y = t("./_fails")
          , x = t("./_an-instance")
          , k = t("./_to-integer")
          , j = t("./_to-length")
          , w = t("./_to-index")
          , E = t("./_object-gopn").f
          , S = t("./_object-dp").f
          , O = t("./_array-fill")
          , P = t("./_set-to-string-tag")
          , L = "prototype"
          , A = "Wrong index!"
          , C = f.ArrayBuffer
          , T = f.DataView
          , M = f.Math
          , $ = f.RangeError
          , I = f.Infinity
          , F = C
          , N = M.abs
          , R = M.pow
          , z = M.floor
          , D = M.log
          , J = M.LN2
          , q = h ? "_b" : "buffer"
          , H = h ? "_l" : "byteLength"
          , U = h ? "_o" : "byteOffset";
        if (v.ABV) {
            if (!y(function() {
                C(1)
            }) || !y(function() {
                new C(-1)
            }) || y(function() {
                return new C,
                new C(1.5),
                new C(NaN),
                "ArrayBuffer" != C.name
            })) {
                C = function(t) {
                    return x(this, C),
                    new F(w(t))
                }
                ;
                for (var V, G = C[L] = F[L], W = E(F), B = 0; W.length > B; )
                    (V = W[B++])in C || g(C, V, F[V]);
                m || (G.constructor = C)
            }
            var Q = new T(new C(2))
              , Y = T[L].setInt8;
            Q.setInt8(0, 2147483648),
            Q.setInt8(1, 2147483649),
            !Q.getInt8(0) && Q.getInt8(1) || b(T[L], {
                setInt8: function(t, e) {
                    Y.call(this, t, e << 24 >> 24)
                },
                setUint8: function(t, e) {
                    Y.call(this, t, e << 24 >> 24)
                }
            }, !0)
        } else
            C = function(t) {
                x(this, C, "ArrayBuffer");
                var e = w(t);
                this._b = O.call(new Array(e), 0),
                this[H] = e
            }
            ,
            T = function(t, e, o) {
                x(this, T, "DataView"),
                x(t, C, "DataView");
                var a = t[H]
                  , r = k(e);
                if (r < 0 || r > a)
                    throw $("Wrong offset!");
                if (o = void 0 === o ? a - r : j(o),
                r + o > a)
                    throw $("Wrong length!");
                this[q] = t,
                this[U] = r,
                this[H] = o
            }
            ,
            h && (_(C, "byteLength", "_l"),
            _(T, "buffer", "_b"),
            _(T, "byteLength", "_l"),
            _(T, "byteOffset", "_o")),
            b(T[L], {
                getInt8: function(t) {
                    return d(this, 1, t)[0] << 24 >> 24
                },
                getUint8: function(t) {
                    return d(this, 1, t)[0]
                },
                getInt16: function(t) {
                    var e = d(this, 2, t, arguments[1]);
                    return (e[1] << 8 | e[0]) << 16 >> 16
                },
                getUint16: function(t) {
                    var e = d(this, 2, t, arguments[1]);
                    return e[1] << 8 | e[0]
                },
                getInt32: function(t) {
                    return i(d(this, 4, t, arguments[1]))
                },
                getUint32: function(t) {
                    return i(d(this, 4, t, arguments[1])) >>> 0
                },
                getFloat32: function(t) {
                    return r(d(this, 4, t, arguments[1]), 23, 4)
                },
                getFloat64: function(t) {
                    return r(d(this, 8, t, arguments[1]), 52, 8)
                },
                setInt8: function(t, e) {
                    p(this, 1, t, n, e)
                },
                setUint8: function(t, e) {
                    p(this, 1, t, n, e)
                },
                setInt16: function(t, e) {
                    p(this, 2, t, s, e, arguments[2])
                },
                setUint16: function(t, e) {
                    p(this, 2, t, s, e, arguments[2])
                },
                setInt32: function(t, e) {
                    p(this, 4, t, c, e, arguments[2])
                },
                setUint32: function(t, e) {
                    p(this, 4, t, c, e, arguments[2])
                },
                setFloat32: function(t, e) {
                    p(this, 4, t, u, e, arguments[2])
                },
                setFloat64: function(t, e) {
                    p(this, 8, t, l, e, arguments[2])
                }
            });
        P(C, "ArrayBuffer"),
        P(T, "DataView"),
        g(T[L], v.VIEW, !0),
        o.ArrayBuffer = C,
        o.DataView = T
    }
    , {
        "./_an-instance": 17,
        "./_array-fill": 20,
        "./_descriptors": 40,
        "./_fails": 46,
        "./_global": 52,
        "./_hide": 54,
        "./_library": 71,
        "./_object-dp": 83,
        "./_object-gopn": 88,
        "./_redefine-all": 102,
        "./_set-to-string-tag": 112,
        "./_to-index": 126,
        "./_to-integer": 127,
        "./_to-length": 129,
        "./_typed": 134
    }],
    134: [function(t, e, o) {
        for (var a, r = t("./_global"), i = t("./_hide"), n = t("./_uid"), s = n("typed_array"), c = n("view"), l = !(!r.ArrayBuffer || !r.DataView), u = l, _ = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); _ < 9; )
            (a = r[d[_++]]) ? (i(a.prototype, s, !0),
            i(a.prototype, c, !0)) : u = !1;
        e.exports = {
            ABV: l,
            CONSTR: u,
            TYPED: s,
            VIEW: c
        }
    }
    , {
        "./_global": 52,
        "./_hide": 54,
        "./_uid": 135
    }],
    135: [function(t, e, o) {
        var a = 0
          , r = Math.random();
        e.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++a + r).toString(36))
        }
    }
    , {}],
    136: [function(t, e, o) {
        var a = t("./_global")
          , r = a.navigator;
        e.exports = r && r.userAgent || ""
    }
    , {
        "./_global": 52
    }],
    137: [function(t, e, o) {
        var a = t("./_is-object");
        e.exports = function(t, e) {
            if (!a(t) || t._t !== e)
                throw TypeError("Incompatible receiver, " + e + " required!");
            return t
        }
    }
    , {
        "./_is-object": 63
    }],
    138: [function(t, e, o) {
        var a = t("./_global")
          , r = t("./_core")
          , i = t("./_library")
          , n = t("./_wks-ext")
          , s = t("./_object-dp").f;
        e.exports = function(t) {
            var e = r.Symbol || (r.Symbol = i ? {} : a.Symbol || {});
            "_" == t.charAt(0) || t in e || s(e, t, {
                value: n.f(t)
            })
        }
    }
    , {
        "./_core": 34,
        "./_global": 52,
        "./_library": 71,
        "./_object-dp": 83,
        "./_wks-ext": 139
    }],
    139: [function(t, e, o) {
        o.f = t("./_wks")
    }
    , {
        "./_wks": 140
    }],
    140: [function(t, e, o) {
        var a = t("./_shared")("wks")
          , r = t("./_uid")
          , i = t("./_global").Symbol
          , n = "function" == typeof i;
        (e.exports = function(t) {
            return a[t] || (a[t] = n && i[t] || (n ? i : r)("Symbol." + t))
        }
        ).store = a
    }
    , {
        "./_global": 52,
        "./_shared": 114,
        "./_uid": 135
    }],
    141: [function(t, e, o) {
        var a = t("./_classof")
          , r = t("./_wks")("iterator")
          , i = t("./_iterators");
        e.exports = t("./_core").getIteratorMethod = function(t) {
            if (void 0 != t)
                return t[r] || t["@@iterator"] || i[a(t)]
        }
    }
    , {
        "./_classof": 28,
        "./_core": 34,
        "./_iterators": 70,
        "./_wks": 140
    }],
    142: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_replacer")(/[\\^$*+?.()|[\]{}]/g, "\\$&");
        a(a.S, "RegExp", {
            escape: function(t) {
                return r(t)
            }
        })
    }
    , {
        "./_export": 44,
        "./_replacer": 106
    }],
    143: [function(t, e, o) {
        var a = t("./_export");
        a(a.P, "Array", {
            copyWithin: t("./_array-copy-within")
        }),
        t("./_add-to-unscopables")("copyWithin")
    }
    , {
        "./_add-to-unscopables": 15,
        "./_array-copy-within": 19,
        "./_export": 44
    }],
    144: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_array-methods")(4);
        a(a.P + a.F * !t("./_strict-method")([].every, !0), "Array", {
            every: function(t) {
                return r(this, t, arguments[1])
            }
        })
    }
    , {
        "./_array-methods": 23,
        "./_export": 44,
        "./_strict-method": 116
    }],
    145: [function(t, e, o) {
        var a = t("./_export");
        a(a.P, "Array", {
            fill: t("./_array-fill")
        }),
        t("./_add-to-unscopables")("fill")
    }
    , {
        "./_add-to-unscopables": 15,
        "./_array-fill": 20,
        "./_export": 44
    }],
    146: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_array-methods")(2);
        a(a.P + a.F * !t("./_strict-method")([].filter, !0), "Array", {
            filter: function(t) {
                return r(this, t, arguments[1])
            }
        })
    }
    , {
        "./_array-methods": 23,
        "./_export": 44,
        "./_strict-method": 116
    }],
    147: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_array-methods")(6)
          , i = "findIndex"
          , n = !0;
        i in [] && Array(1)[i](function() {
            n = !1
        }),
        a(a.P + a.F * n, "Array", {
            findIndex: function(t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        t("./_add-to-unscopables")(i)
    }
    , {
        "./_add-to-unscopables": 15,
        "./_array-methods": 23,
        "./_export": 44
    }],
    148: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_array-methods")(5)
          , i = !0;
        "find"in [] && Array(1).find(function() {
            i = !1
        }),
        a(a.P + a.F * i, "Array", {
            find: function(t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        t("./_add-to-unscopables")("find")
    }
    , {
        "./_add-to-unscopables": 15,
        "./_array-methods": 23,
        "./_export": 44
    }],
    149: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_array-methods")(0)
          , i = t("./_strict-method")([].forEach, !0);
        a(a.P + a.F * !i, "Array", {
            forEach: function(t) {
                return r(this, t, arguments[1])
            }
        })
    }
    , {
        "./_array-methods": 23,
        "./_export": 44,
        "./_strict-method": 116
    }],
    150: [function(t, e, o) {
        "use strict";
        var a = t("./_ctx")
          , r = t("./_export")
          , i = t("./_to-object")
          , n = t("./_iter-call")
          , s = t("./_is-array-iter")
          , c = t("./_to-length")
          , l = t("./_create-property")
          , u = t("./core.get-iterator-method");
        r(r.S + r.F * !t("./_iter-detect")(function(t) {
            Array.from(t)
        }), "Array", {
            from: function(t) {
                var e, o, r, _, d = i(t), p = "function" == typeof this ? this : Array, f = arguments.length, h = f > 1 ? arguments[1] : void 0, m = void 0 !== h, v = 0, g = u(d);
                if (m && (h = a(h, f > 2 ? arguments[2] : void 0, 2)),
                void 0 == g || p == Array && s(g))
                    for (e = c(d.length),
                    o = new p(e); e > v; v++)
                        l(o, v, m ? h(d[v], v) : d[v]);
                else
                    for (_ = g.call(d),
                    o = new p; !(r = _.next()).done; v++)
                        l(o, v, m ? n(_, h, [r.value, v], !0) : r.value);
                return o.length = v,
                o
            }
        })
    }
    , {
        "./_create-property": 35,
        "./_ctx": 36,
        "./_export": 44,
        "./_is-array-iter": 60,
        "./_iter-call": 65,
        "./_iter-detect": 68,
        "./_to-length": 129,
        "./_to-object": 130,
        "./core.get-iterator-method": 141
    }],
    151: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_array-includes")(!1)
          , i = [].indexOf
          , n = !!i && 1 / [1].indexOf(1, -0) < 0;
        a(a.P + a.F * (n || !t("./_strict-method")(i)), "Array", {
            indexOf: function(t) {
                return n ? i.apply(this, arguments) || 0 : r(this, t, arguments[1])
            }
        })
    }
    , {
        "./_array-includes": 22,
        "./_export": 44,
        "./_strict-method": 116
    }],
    152: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Array", {
            isArray: t("./_is-array")
        })
    }
    , {
        "./_export": 44,
        "./_is-array": 61
    }],
    153: [function(t, e, o) {
        "use strict";
        var a = t("./_add-to-unscopables")
          , r = t("./_iter-step")
          , i = t("./_iterators")
          , n = t("./_to-iobject");
        e.exports = t("./_iter-define")(Array, "Array", function(t, e) {
            this._t = n(t),
            this._i = 0,
            this._k = e
        }, function() {
            var t = this._t
              , e = this._k
              , o = this._i++;
            return !t || o >= t.length ? (this._t = void 0,
            r(1)) : "keys" == e ? r(0, o) : "values" == e ? r(0, t[o]) : r(0, [o, t[o]])
        }, "values"),
        i.Arguments = i.Array,
        a("keys"),
        a("values"),
        a("entries")
    }
    , {
        "./_add-to-unscopables": 15,
        "./_iter-define": 67,
        "./_iter-step": 69,
        "./_iterators": 70,
        "./_to-iobject": 128
    }],
    154: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_to-iobject")
          , i = [].join;
        a(a.P + a.F * (t("./_iobject") != Object || !t("./_strict-method")(i)), "Array", {
            join: function(t) {
                return i.call(r(this), void 0 === t ? "," : t)
            }
        })
    }
    , {
        "./_export": 44,
        "./_iobject": 59,
        "./_strict-method": 116,
        "./_to-iobject": 128
    }],
    155: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_to-iobject")
          , i = t("./_to-integer")
          , n = t("./_to-length")
          , s = [].lastIndexOf
          , c = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
        a(a.P + a.F * (c || !t("./_strict-method")(s)), "Array", {
            lastIndexOf: function(t) {
                if (c)
                    return s.apply(this, arguments) || 0;
                var e = r(this)
                  , o = n(e.length)
                  , a = o - 1;
                for (arguments.length > 1 && (a = Math.min(a, i(arguments[1]))),
                a < 0 && (a = o + a); a >= 0; a--)
                    if (a in e && e[a] === t)
                        return a || 0;
                return -1
            }
        })
    }
    , {
        "./_export": 44,
        "./_strict-method": 116,
        "./_to-integer": 127,
        "./_to-iobject": 128,
        "./_to-length": 129
    }],
    156: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_array-methods")(1);
        a(a.P + a.F * !t("./_strict-method")([].map, !0), "Array", {
            map: function(t) {
                return r(this, t, arguments[1])
            }
        })
    }
    , {
        "./_array-methods": 23,
        "./_export": 44,
        "./_strict-method": 116
    }],
    157: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_create-property");
        a(a.S + a.F * t("./_fails")(function() {
            function t() {}
            return !(Array.of.call(t)instanceof t)
        }), "Array", {
            of: function() {
                for (var t = 0, e = arguments.length, o = new ("function" == typeof this ? this : Array)(e); e > t; )
                    r(o, t, arguments[t++]);
                return o.length = e,
                o
            }
        })
    }
    , {
        "./_create-property": 35,
        "./_export": 44,
        "./_fails": 46
    }],
    158: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_array-reduce");
        a(a.P + a.F * !t("./_strict-method")([].reduceRight, !0), "Array", {
            reduceRight: function(t) {
                return r(this, t, arguments.length, arguments[1], !0)
            }
        })
    }
    , {
        "./_array-reduce": 24,
        "./_export": 44,
        "./_strict-method": 116
    }],
    159: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_array-reduce");
        a(a.P + a.F * !t("./_strict-method")([].reduce, !0), "Array", {
            reduce: function(t) {
                return r(this, t, arguments.length, arguments[1], !1)
            }
        })
    }
    , {
        "./_array-reduce": 24,
        "./_export": 44,
        "./_strict-method": 116
    }],
    160: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_html")
          , i = t("./_cof")
          , n = t("./_to-absolute-index")
          , s = t("./_to-length")
          , c = [].slice;
        a(a.P + a.F * t("./_fails")(function() {
            r && c.call(r)
        }), "Array", {
            slice: function(t, e) {
                var o = s(this.length)
                  , a = i(this);
                if (e = void 0 === e ? o : e,
                "Array" == a)
                    return c.call(this, t, e);
                for (var r = n(t, o), l = n(e, o), u = s(l - r), _ = new Array(u), d = 0; d < u; d++)
                    _[d] = "String" == a ? this.charAt(r + d) : this[r + d];
                return _
            }
        })
    }
    , {
        "./_cof": 29,
        "./_export": 44,
        "./_fails": 46,
        "./_html": 55,
        "./_to-absolute-index": 125,
        "./_to-length": 129
    }],
    161: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_array-methods")(3);
        a(a.P + a.F * !t("./_strict-method")([].some, !0), "Array", {
            some: function(t) {
                return r(this, t, arguments[1])
            }
        })
    }
    , {
        "./_array-methods": 23,
        "./_export": 44,
        "./_strict-method": 116
    }],
    162: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_a-function")
          , i = t("./_to-object")
          , n = t("./_fails")
          , s = [].sort
          , c = [1, 2, 3];
        a(a.P + a.F * (n(function() {
            c.sort(void 0)
        }) || !n(function() {
            c.sort(null)
        }) || !t("./_strict-method")(s)), "Array", {
            sort: function(t) {
                return void 0 === t ? s.call(i(this)) : s.call(i(this), r(t))
            }
        })
    }
    , {
        "./_a-function": 13,
        "./_export": 44,
        "./_fails": 46,
        "./_strict-method": 116,
        "./_to-object": 130
    }],
    163: [function(t, e, o) {
        t("./_set-species")("Array")
    }
    , {
        "./_set-species": 111
    }],
    164: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Date", {
            now: function() {
                return (new Date).getTime()
            }
        })
    }
    , {
        "./_export": 44
    }],
    165: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_date-to-iso-string");
        a(a.P + a.F * (Date.prototype.toISOString !== r), "Date", {
            toISOString: r
        })
    }
    , {
        "./_date-to-iso-string": 37,
        "./_export": 44
    }],
    166: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_to-object")
          , i = t("./_to-primitive");
        a(a.P + a.F * t("./_fails")(function() {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function() {
                    return 1
                }
            })
        }), "Date", {
            toJSON: function(t) {
                var e = r(this)
                  , o = i(e);
                return "number" != typeof o || isFinite(o) ? e.toISOString() : null
            }
        })
    }
    , {
        "./_export": 44,
        "./_fails": 46,
        "./_to-object": 130,
        "./_to-primitive": 131
    }],
    167: [function(t, e, o) {
        var a = t("./_wks")("toPrimitive")
          , r = Date.prototype;
        a in r || t("./_hide")(r, a, t("./_date-to-primitive"))
    }
    , {
        "./_date-to-primitive": 38,
        "./_hide": 54,
        "./_wks": 140
    }],
    168: [function(t, e, o) {
        var a = Date.prototype
          , r = a.toString
          , i = a.getTime;
        new Date(NaN) + "" != "Invalid Date" && t("./_redefine")(a, "toString", function() {
            var t = i.call(this);
            return t === t ? r.call(this) : "Invalid Date"
        })
    }
    , {
        "./_redefine": 103
    }],
    169: [function(t, e, o) {
        var a = t("./_export");
        a(a.P, "Function", {
            bind: t("./_bind")
        })
    }
    , {
        "./_bind": 27,
        "./_export": 44
    }],
    170: [function(t, e, o) {
        "use strict";
        var a = t("./_is-object")
          , r = t("./_object-gpo")
          , i = t("./_wks")("hasInstance")
          , n = Function.prototype;
        i in n || t("./_object-dp").f(n, i, {
            value: function(t) {
                if ("function" != typeof this || !a(t))
                    return !1;
                if (!a(this.prototype))
                    return t instanceof this;
                for (; t = r(t); )
                    if (this.prototype === t)
                        return !0;
                return !1
            }
        })
    }
    , {
        "./_is-object": 63,
        "./_object-dp": 83,
        "./_object-gpo": 90,
        "./_wks": 140
    }],
    171: [function(t, e, o) {
        var a = t("./_object-dp").f
          , r = Function.prototype
          , i = /^\s*function ([^ (]*)/;
        "name"in r || t("./_descriptors") && a(r, "name", {
            configurable: !0,
            get: function() {
                try {
                    return ("" + this).match(i)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    }
    , {
        "./_descriptors": 40,
        "./_object-dp": 83
    }],
    172: [function(t, e, o) {
        "use strict";
        var a = t("./_collection-strong")
          , r = t("./_validate-collection");
        e.exports = t("./_collection")("Map", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            get: function(t) {
                var e = a.getEntry(r(this, "Map"), t);
                return e && e.v
            },
            set: function(t, e) {
                return a.def(r(this, "Map"), 0 === t ? 0 : t, e)
            }
        }, a, !0)
    }
    , {
        "./_collection": 33,
        "./_collection-strong": 30,
        "./_validate-collection": 137
    }],
    173: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_math-log1p")
          , i = Math.sqrt
          , n = Math.acosh;
        a(a.S + a.F * !(n && 710 == Math.floor(n(Number.MAX_VALUE)) && n(1 / 0) == 1 / 0), "Math", {
            acosh: function(t) {
                return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : r(t - 1 + i(t - 1) * i(t + 1))
            }
        })
    }
    , {
        "./_export": 44,
        "./_math-log1p": 74
    }],
    174: [function(t, e, o) {
        function a(t) {
            return isFinite(t = +t) && 0 != t ? t < 0 ? -a(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
        }
        var r = t("./_export")
          , i = Math.asinh;
        r(r.S + r.F * !(i && 1 / i(0) > 0), "Math", {
            asinh: a
        })
    }
    , {
        "./_export": 44
    }],
    175: [function(t, e, o) {
        var a = t("./_export")
          , r = Math.atanh;
        a(a.S + a.F * !(r && 1 / r(-0) < 0), "Math", {
            atanh: function(t) {
                return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
            }
        })
    }
    , {
        "./_export": 44
    }],
    176: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_math-sign");
        a(a.S, "Math", {
            cbrt: function(t) {
                return r(t = +t) * Math.pow(Math.abs(t), 1 / 3)
            }
        })
    }
    , {
        "./_export": 44,
        "./_math-sign": 76
    }],
    177: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            clz32: function(t) {
                return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
            }
        })
    }
    , {
        "./_export": 44
    }],
    178: [function(t, e, o) {
        var a = t("./_export")
          , r = Math.exp;
        a(a.S, "Math", {
            cosh: function(t) {
                return (r(t = +t) + r(-t)) / 2
            }
        })
    }
    , {
        "./_export": 44
    }],
    179: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_math-expm1");
        a(a.S + a.F * (r != Math.expm1), "Math", {
            expm1: r
        })
    }
    , {
        "./_export": 44,
        "./_math-expm1": 72
    }],
    180: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            fround: t("./_math-fround")
        })
    }
    , {
        "./_export": 44,
        "./_math-fround": 73
    }],
    181: [function(t, e, o) {
        var a = t("./_export")
          , r = Math.abs;
        a(a.S, "Math", {
            hypot: function(t, e) {
                for (var o, a, i = 0, n = 0, s = arguments.length, c = 0; n < s; )
                    o = r(arguments[n++]),
                    c < o ? (a = c / o,
                    i = i * a * a + 1,
                    c = o) : o > 0 ? (a = o / c,
                    i += a * a) : i += o;
                return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(i)
            }
        })
    }
    , {
        "./_export": 44
    }],
    182: [function(t, e, o) {
        var a = t("./_export")
          , r = Math.imul;
        a(a.S + a.F * t("./_fails")(function() {
            return -5 != r(4294967295, 5) || 2 != r.length
        }), "Math", {
            imul: function(t, e) {
                var o = +t
                  , a = +e
                  , r = 65535 & o
                  , i = 65535 & a;
                return 0 | r * i + ((65535 & o >>> 16) * i + r * (65535 & a >>> 16) << 16 >>> 0)
            }
        })
    }
    , {
        "./_export": 44,
        "./_fails": 46
    }],
    183: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            log10: function(t) {
                return Math.log(t) * Math.LOG10E
            }
        })
    }
    , {
        "./_export": 44
    }],
    184: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            log1p: t("./_math-log1p")
        })
    }
    , {
        "./_export": 44,
        "./_math-log1p": 74
    }],
    185: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            log2: function(t) {
                return Math.log(t) / Math.LN2
            }
        })
    }
    , {
        "./_export": 44
    }],
    186: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            sign: t("./_math-sign")
        })
    }
    , {
        "./_export": 44,
        "./_math-sign": 76
    }],
    187: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_math-expm1")
          , i = Math.exp;
        a(a.S + a.F * t("./_fails")(function() {
            return -2e-17 != !Math.sinh(-2e-17)
        }), "Math", {
            sinh: function(t) {
                return Math.abs(t = +t) < 1 ? (r(t) - r(-t)) / 2 : (i(t - 1) - i(-t - 1)) * (Math.E / 2)
            }
        })
    }
    , {
        "./_export": 44,
        "./_fails": 46,
        "./_math-expm1": 72
    }],
    188: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_math-expm1")
          , i = Math.exp;
        a(a.S, "Math", {
            tanh: function(t) {
                var e = r(t = +t)
                  , o = r(-t);
                return e == 1 / 0 ? 1 : o == 1 / 0 ? -1 : (e - o) / (i(t) + i(-t))
            }
        })
    }
    , {
        "./_export": 44,
        "./_math-expm1": 72
    }],
    189: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            trunc: function(t) {
                return (t > 0 ? Math.floor : Math.ceil)(t)
            }
        })
    }
    , {
        "./_export": 44
    }],
    190: [function(t, e, o) {
        "use strict";
        var a = t("./_global")
          , r = t("./_has")
          , i = t("./_cof")
          , n = t("./_inherit-if-required")
          , s = t("./_to-primitive")
          , c = t("./_fails")
          , l = t("./_object-gopn").f
          , u = t("./_object-gopd").f
          , _ = t("./_object-dp").f
          , d = t("./_string-trim").trim
          , p = a.Number
          , f = p
          , h = p.prototype
          , m = "Number" == i(t("./_object-create")(h))
          , v = "trim"in String.prototype
          , g = function(t) {
            var e = s(t, !1);
            if ("string" == typeof e && e.length > 2) {
                e = v ? e.trim() : d(e, 3);
                var o, a, r, i = e.charCodeAt(0);
                if (43 === i || 45 === i) {
                    if (88 === (o = e.charCodeAt(2)) || 120 === o)
                        return NaN
                } else if (48 === i) {
                    switch (e.charCodeAt(1)) {
                    case 66:
                    case 98:
                        a = 2,
                        r = 49;
                        break;
                    case 79:
                    case 111:
                        a = 8,
                        r = 55;
                        break;
                    default:
                        return +e
                    }
                    for (var n, c = e.slice(2), l = 0, u = c.length; l < u; l++)
                        if ((n = c.charCodeAt(l)) < 48 || n > r)
                            return NaN;
                    return parseInt(c, a)
                }
            }
            return +e
        };
        if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
            p = function(t) {
                var e = arguments.length < 1 ? 0 : t
                  , o = this;
                return o instanceof p && (m ? c(function() {
                    h.valueOf.call(o)
                }) : "Number" != i(o)) ? n(new f(g(e)), o, p) : g(e)
            }
            ;
            for (var b, y = t("./_descriptors") ? l(f) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; y.length > x; x++)
                r(f, b = y[x]) && !r(p, b) && _(p, b, u(f, b));
            p.prototype = h,
            h.constructor = p,
            t("./_redefine")(a, "Number", p)
        }
    }
    , {
        "./_cof": 29,
        "./_descriptors": 40,
        "./_fails": 46,
        "./_global": 52,
        "./_has": 53,
        "./_inherit-if-required": 57,
        "./_object-create": 82,
        "./_object-dp": 83,
        "./_object-gopd": 86,
        "./_object-gopn": 88,
        "./_redefine": 103,
        "./_string-trim": 122,
        "./_to-primitive": 131
    }],
    191: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Number", {
            EPSILON: Math.pow(2, -52)
        })
    }
    , {
        "./_export": 44
    }],
    192: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_global").isFinite;
        a(a.S, "Number", {
            isFinite: function(t) {
                return "number" == typeof t && r(t)
            }
        })
    }
    , {
        "./_export": 44,
        "./_global": 52
    }],
    193: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Number", {
            isInteger: t("./_is-integer")
        })
    }
    , {
        "./_export": 44,
        "./_is-integer": 62
    }],
    194: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Number", {
            isNaN: function(t) {
                return t != t
            }
        })
    }
    , {
        "./_export": 44
    }],
    195: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_is-integer")
          , i = Math.abs;
        a(a.S, "Number", {
            isSafeInteger: function(t) {
                return r(t) && i(t) <= 9007199254740991
            }
        })
    }
    , {
        "./_export": 44,
        "./_is-integer": 62
    }],
    196: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Number", {
            MAX_SAFE_INTEGER: 9007199254740991
        })
    }
    , {
        "./_export": 44
    }],
    197: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Number", {
            MIN_SAFE_INTEGER: -9007199254740991
        })
    }
    , {
        "./_export": 44
    }],
    198: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_parse-float");
        a(a.S + a.F * (Number.parseFloat != r), "Number", {
            parseFloat: r
        })
    }
    , {
        "./_export": 44,
        "./_parse-float": 97
    }],
    199: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_parse-int");
        a(a.S + a.F * (Number.parseInt != r), "Number", {
            parseInt: r
        })
    }
    , {
        "./_export": 44,
        "./_parse-int": 98
    }],
    200: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_to-integer")
          , i = t("./_a-number-value")
          , n = t("./_string-repeat")
          , s = 1..toFixed
          , c = Math.floor
          , l = [0, 0, 0, 0, 0, 0]
          , u = "Number.toFixed: incorrect invocation!"
          , _ = function(t, e) {
            for (var o = -1, a = e; ++o < 6; )
                a += t * l[o],
                l[o] = a % 1e7,
                a = c(a / 1e7)
        }
          , d = function(t) {
            for (var e = 6, o = 0; --e >= 0; )
                o += l[e],
                l[e] = c(o / t),
                o = o % t * 1e7
        }
          , p = function() {
            for (var t = 6, e = ""; --t >= 0; )
                if ("" !== e || 0 === t || 0 !== l[t]) {
                    var o = String(l[t]);
                    e = "" === e ? o : e + n.call("0", 7 - o.length) + o
                }
            return e
        }
          , f = function(t, e, o) {
            return 0 === e ? o : e % 2 == 1 ? f(t, e - 1, o * t) : f(t * t, e / 2, o)
        }
          , h = function(t) {
            for (var e = 0, o = t; o >= 4096; )
                e += 12,
                o /= 4096;
            for (; o >= 2; )
                e += 1,
                o /= 2;
            return e
        };
        a(a.P + a.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !t("./_fails")(function() {
            s.call({})
        })), "Number", {
            toFixed: function(t) {
                var e, o, a, s, c = i(this, u), l = r(t), m = "", v = "0";
                if (l < 0 || l > 20)
                    throw RangeError(u);
                if (c != c)
                    return "NaN";
                if (c <= -1e21 || c >= 1e21)
                    return String(c);
                if (c < 0 && (m = "-",
                c = -c),
                c > 1e-21)
                    if (e = h(c * f(2, 69, 1)) - 69,
                    o = e < 0 ? c * f(2, -e, 1) : c / f(2, e, 1),
                    o *= 4503599627370496,
                    (e = 52 - e) > 0) {
                        for (_(0, o),
                        a = l; a >= 7; )
                            _(1e7, 0),
                            a -= 7;
                        for (_(f(10, a, 1), 0),
                        a = e - 1; a >= 23; )
                            d(1 << 23),
                            a -= 23;
                        d(1 << a),
                        _(1, 1),
                        d(2),
                        v = p()
                    } else
                        _(0, o),
                        _(1 << -e, 0),
                        v = p() + n.call("0", l);
                return l > 0 ? (s = v.length,
                v = m + (s <= l ? "0." + n.call("0", l - s) + v : v.slice(0, s - l) + "." + v.slice(s - l))) : v = m + v,
                v
            }
        })
    }
    , {
        "./_a-number-value": 14,
        "./_export": 44,
        "./_fails": 46,
        "./_string-repeat": 121,
        "./_to-integer": 127
    }],
    201: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_fails")
          , i = t("./_a-number-value")
          , n = 1..toPrecision;
        a(a.P + a.F * (r(function() {
            return "1" !== n.call(1, void 0)
        }) || !r(function() {
            n.call({})
        })), "Number", {
            toPrecision: function(t) {
                var e = i(this, "Number#toPrecision: incorrect invocation!");
                return void 0 === t ? n.call(e) : n.call(e, t)
            }
        })
    }
    , {
        "./_a-number-value": 14,
        "./_export": 44,
        "./_fails": 46
    }],
    202: [function(t, e, o) {
        var a = t("./_export");
        a(a.S + a.F, "Object", {
            assign: t("./_object-assign")
        })
    }
    , {
        "./_export": 44,
        "./_object-assign": 81
    }],
    203: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Object", {
            create: t("./_object-create")
        })
    }
    , {
        "./_export": 44,
        "./_object-create": 82
    }],
    204: [function(t, e, o) {
        var a = t("./_export");
        a(a.S + a.F * !t("./_descriptors"), "Object", {
            defineProperties: t("./_object-dps")
        })
    }
    , {
        "./_descriptors": 40,
        "./_export": 44,
        "./_object-dps": 84
    }],
    205: [function(t, e, o) {
        var a = t("./_export");
        a(a.S + a.F * !t("./_descriptors"), "Object", {
            defineProperty: t("./_object-dp").f
        })
    }
    , {
        "./_descriptors": 40,
        "./_export": 44,
        "./_object-dp": 83
    }],
    206: [function(t, e, o) {
        var a = t("./_is-object")
          , r = t("./_meta").onFreeze;
        t("./_object-sap")("freeze", function(t) {
            return function(e) {
                return t && a(e) ? t(r(e)) : e
            }
        })
    }
    , {
        "./_is-object": 63,
        "./_meta": 77,
        "./_object-sap": 94
    }],
    207: [function(t, e, o) {
        var a = t("./_to-iobject")
          , r = t("./_object-gopd").f;
        t("./_object-sap")("getOwnPropertyDescriptor", function() {
            return function(t, e) {
                return r(a(t), e)
            }
        })
    }
    , {
        "./_object-gopd": 86,
        "./_object-sap": 94,
        "./_to-iobject": 128
    }],
    208: [function(t, e, o) {
        t("./_object-sap")("getOwnPropertyNames", function() {
            return t("./_object-gopn-ext").f
        })
    }
    , {
        "./_object-gopn-ext": 87,
        "./_object-sap": 94
    }],
    209: [function(t, e, o) {
        var a = t("./_to-object")
          , r = t("./_object-gpo");
        t("./_object-sap")("getPrototypeOf", function() {
            return function(t) {
                return r(a(t))
            }
        })
    }
    , {
        "./_object-gpo": 90,
        "./_object-sap": 94,
        "./_to-object": 130
    }],
    210: [function(t, e, o) {
        var a = t("./_is-object");
        t("./_object-sap")("isExtensible", function(t) {
            return function(e) {
                return !!a(e) && (!t || t(e))
            }
        })
    }
    , {
        "./_is-object": 63,
        "./_object-sap": 94
    }],
    211: [function(t, e, o) {
        var a = t("./_is-object");
        t("./_object-sap")("isFrozen", function(t) {
            return function(e) {
                return !a(e) || !!t && t(e)
            }
        })
    }
    , {
        "./_is-object": 63,
        "./_object-sap": 94
    }],
    212: [function(t, e, o) {
        var a = t("./_is-object");
        t("./_object-sap")("isSealed", function(t) {
            return function(e) {
                return !a(e) || !!t && t(e)
            }
        })
    }
    , {
        "./_is-object": 63,
        "./_object-sap": 94
    }],
    213: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Object", {
            is: t("./_same-value")
        })
    }
    , {
        "./_export": 44,
        "./_same-value": 107
    }],
    214: [function(t, e, o) {
        var a = t("./_to-object")
          , r = t("./_object-keys");
        t("./_object-sap")("keys", function() {
            return function(t) {
                return r(a(t))
            }
        })
    }
    , {
        "./_object-keys": 92,
        "./_object-sap": 94,
        "./_to-object": 130
    }],
    215: [function(t, e, o) {
        var a = t("./_is-object")
          , r = t("./_meta").onFreeze;
        t("./_object-sap")("preventExtensions", function(t) {
            return function(e) {
                return t && a(e) ? t(r(e)) : e
            }
        })
    }
    , {
        "./_is-object": 63,
        "./_meta": 77,
        "./_object-sap": 94
    }],
    216: [function(t, e, o) {
        var a = t("./_is-object")
          , r = t("./_meta").onFreeze;
        t("./_object-sap")("seal", function(t) {
            return function(e) {
                return t && a(e) ? t(r(e)) : e
            }
        })
    }
    , {
        "./_is-object": 63,
        "./_meta": 77,
        "./_object-sap": 94
    }],
    217: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Object", {
            setPrototypeOf: t("./_set-proto").set
        })
    }
    , {
        "./_export": 44,
        "./_set-proto": 110
    }],
    218: [function(t, e, o) {
        "use strict";
        var a = t("./_classof")
          , r = {};
        r[t("./_wks")("toStringTag")] = "z",
        r + "" != "[object z]" && t("./_redefine")(Object.prototype, "toString", function() {
            return "[object " + a(this) + "]"
        }, !0)
    }
    , {
        "./_classof": 28,
        "./_redefine": 103,
        "./_wks": 140
    }],
    219: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_parse-float");
        a(a.G + a.F * (parseFloat != r), {
            parseFloat: r
        })
    }
    , {
        "./_export": 44,
        "./_parse-float": 97
    }],
    220: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_parse-int");
        a(a.G + a.F * (parseInt != r), {
            parseInt: r
        })
    }
    , {
        "./_export": 44,
        "./_parse-int": 98
    }],
    221: [function(t, e, o) {
        "use strict";
        var a, r, i, n, s = t("./_library"), c = t("./_global"), l = t("./_ctx"), u = t("./_classof"), _ = t("./_export"), d = t("./_is-object"), p = t("./_a-function"), f = t("./_an-instance"), h = t("./_for-of"), m = t("./_species-constructor"), v = t("./_task").set, g = t("./_microtask")(), b = t("./_new-promise-capability"), y = t("./_perform"), x = t("./_user-agent"), k = t("./_promise-resolve"), j = c.TypeError, w = c.process, E = w && w.versions, S = E && E.v8 || "", O = c.Promise, P = "process" == u(w), L = function() {}, A = r = b.f, C = !!function() {
            try {
                var e = O.resolve(1)
                  , o = (e.constructor = {})[t("./_wks")("species")] = function(t) {
                    t(L, L)
                }
                ;
                return (P || "function" == typeof PromiseRejectionEvent) && e.then(L)instanceof o && 0 !== S.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
            } catch (t) {}
        }(), T = function(t) {
            var e;
            return !(!d(t) || "function" != typeof (e = t.then)) && e
        }, M = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var o = t._c;
                g(function() {
                    for (var a = t._v, r = 1 == t._s, i = 0; o.length > i; )
                        !function(e) {
                            var o, i, n, s = r ? e.ok : e.fail, c = e.resolve, l = e.reject, u = e.domain;
                            try {
                                s ? (r || (2 == t._h && F(t),
                                t._h = 1),
                                !0 === s ? o = a : (u && u.enter(),
                                o = s(a),
                                u && (u.exit(),
                                n = !0)),
                                o === e.promise ? l(j("Promise-chain cycle")) : (i = T(o)) ? i.call(o, c, l) : c(o)) : l(a)
                            } catch (t) {
                                u && !n && u.exit(),
                                l(t)
                            }
                        }(o[i++]);
                    t._c = [],
                    t._n = !1,
                    e && !t._h && $(t)
                })
            }
        }, $ = function(t) {
            v.call(c, function() {
                var e, o, a, r = t._v, i = I(t);
                if (i && (e = y(function() {
                    P ? w.emit("unhandledRejection", r, t) : (o = c.onunhandledrejection) ? o({
                        promise: t,
                        reason: r
                    }) : (a = c.console) && a.error && a.error("Unhandled promise rejection", r)
                }),
                t._h = P || I(t) ? 2 : 1),
                t._a = void 0,
                i && e.e)
                    throw e.v
            })
        }, I = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        }, F = function(t) {
            v.call(c, function() {
                var e;
                P ? w.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            })
        }, N = function(t) {
            var e = this;
            e._d || (e._d = !0,
            e = e._w || e,
            e._v = t,
            e._s = 2,
            e._a || (e._a = e._c.slice()),
            M(e, !0))
        }, R = function(t) {
            var e, o = this;
            if (!o._d) {
                o._d = !0,
                o = o._w || o;
                try {
                    if (o === t)
                        throw j("Promise can't be resolved itself");
                    (e = T(t)) ? g(function() {
                        var a = {
                            _w: o,
                            _d: !1
                        };
                        try {
                            e.call(t, l(R, a, 1), l(N, a, 1))
                        } catch (t) {
                            N.call(a, t)
                        }
                    }) : (o._v = t,
                    o._s = 1,
                    M(o, !1))
                } catch (t) {
                    N.call({
                        _w: o,
                        _d: !1
                    }, t)
                }
            }
        };
        C || (O = function(t) {
            f(this, O, "Promise", "_h"),
            p(t),
            a.call(this);
            try {
                t(l(R, this, 1), l(N, this, 1))
            } catch (t) {
                N.call(this, t)
            }
        }
        ,
        a = function(t) {
            this._c = [],
            this._a = void 0,
            this._s = 0,
            this._d = !1,
            this._v = void 0,
            this._h = 0,
            this._n = !1
        }
        ,
        a.prototype = t("./_redefine-all")(O.prototype, {
            then: function(t, e) {
                var o = A(m(this, O));
                return o.ok = "function" != typeof t || t,
                o.fail = "function" == typeof e && e,
                o.domain = P ? w.domain : void 0,
                this._c.push(o),
                this._a && this._a.push(o),
                this._s && M(this, !1),
                o.promise
            },
            catch: function(t) {
                return this.then(void 0, t)
            }
        }),
        i = function() {
            var t = new a;
            this.promise = t,
            this.resolve = l(R, t, 1),
            this.reject = l(N, t, 1)
        }
        ,
        b.f = A = function(t) {
            return t === O || t === n ? new i(t) : r(t)
        }
        ),
        _(_.G + _.W + _.F * !C, {
            Promise: O
        }),
        t("./_set-to-string-tag")(O, "Promise"),
        t("./_set-species")("Promise"),
        n = t("./_core").Promise,
        _(_.S + _.F * !C, "Promise", {
            reject: function(t) {
                var e = A(this);
                return (0,
                e.reject)(t),
                e.promise
            }
        }),
        _(_.S + _.F * (s || !C), "Promise", {
            resolve: function(t) {
                return k(s && this === n ? O : this, t)
            }
        }),
        _(_.S + _.F * !(C && t("./_iter-detect")(function(t) {
            O.all(t).catch(L)
        })), "Promise", {
            all: function(t) {
                var e = this
                  , o = A(e)
                  , a = o.resolve
                  , r = o.reject
                  , i = y(function() {
                    var o = []
                      , i = 0
                      , n = 1;
                    h(t, !1, function(t) {
                        var s = i++
                          , c = !1;
                        o.push(void 0),
                        n++,
                        e.resolve(t).then(function(t) {
                            c || (c = !0,
                            o[s] = t,
                            --n || a(o))
                        }, r)
                    }),
                    --n || a(o)
                });
                return i.e && r(i.v),
                o.promise
            },
            race: function(t) {
                var e = this
                  , o = A(e)
                  , a = o.reject
                  , r = y(function() {
                    h(t, !1, function(t) {
                        e.resolve(t).then(o.resolve, a)
                    })
                });
                return r.e && a(r.v),
                o.promise
            }
        })
    }
    , {
        "./_a-function": 13,
        "./_an-instance": 17,
        "./_classof": 28,
        "./_core": 34,
        "./_ctx": 36,
        "./_export": 44,
        "./_for-of": 50,
        "./_global": 52,
        "./_is-object": 63,
        "./_iter-detect": 68,
        "./_library": 71,
        "./_microtask": 79,
        "./_new-promise-capability": 80,
        "./_perform": 99,
        "./_promise-resolve": 100,
        "./_redefine-all": 102,
        "./_set-species": 111,
        "./_set-to-string-tag": 112,
        "./_species-constructor": 115,
        "./_task": 124,
        "./_user-agent": 136,
        "./_wks": 140
    }],
    222: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_a-function")
          , i = t("./_an-object")
          , n = (t("./_global").Reflect || {}).apply
          , s = Function.apply;
        a(a.S + a.F * !t("./_fails")(function() {
            n(function() {})
        }), "Reflect", {
            apply: function(t, e, o) {
                var a = r(t)
                  , c = i(o);
                return n ? n(a, e, c) : s.call(a, e, c)
            }
        })
    }
    , {
        "./_a-function": 13,
        "./_an-object": 18,
        "./_export": 44,
        "./_fails": 46,
        "./_global": 52
    }],
    223: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_object-create")
          , i = t("./_a-function")
          , n = t("./_an-object")
          , s = t("./_is-object")
          , c = t("./_fails")
          , l = t("./_bind")
          , u = (t("./_global").Reflect || {}).construct
          , _ = c(function() {
            function t() {}
            return !(u(function() {}, [], t)instanceof t)
        })
          , d = !c(function() {
            u(function() {})
        });
        a(a.S + a.F * (_ || d), "Reflect", {
            construct: function(t, e) {
                i(t),
                n(e);
                var o = arguments.length < 3 ? t : i(arguments[2]);
                if (d && !_)
                    return u(t, e, o);
                if (t == o) {
                    switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0],e[1]);
                    case 3:
                        return new t(e[0],e[1],e[2]);
                    case 4:
                        return new t(e[0],e[1],e[2],e[3])
                    }
                    var a = [null];
                    return a.push.apply(a, e),
                    new (l.apply(t, a))
                }
                var c = o.prototype
                  , p = r(s(c) ? c : Object.prototype)
                  , f = Function.apply.call(t, p, e);
                return s(f) ? f : p
            }
        })
    }
    , {
        "./_a-function": 13,
        "./_an-object": 18,
        "./_bind": 27,
        "./_export": 44,
        "./_fails": 46,
        "./_global": 52,
        "./_is-object": 63,
        "./_object-create": 82
    }],
    224: [function(t, e, o) {
        var a = t("./_object-dp")
          , r = t("./_export")
          , i = t("./_an-object")
          , n = t("./_to-primitive");
        r(r.S + r.F * t("./_fails")(function() {
            Reflect.defineProperty(a.f({}, 1, {
                value: 1
            }), 1, {
                value: 2
            })
        }), "Reflect", {
            defineProperty: function(t, e, o) {
                i(t),
                e = n(e, !0),
                i(o);
                try {
                    return a.f(t, e, o),
                    !0
                } catch (t) {
                    return !1
                }
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_export": 44,
        "./_fails": 46,
        "./_object-dp": 83,
        "./_to-primitive": 131
    }],
    225: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_object-gopd").f
          , i = t("./_an-object");
        a(a.S, "Reflect", {
            deleteProperty: function(t, e) {
                var o = r(i(t), e);
                return !(o && !o.configurable) && delete t[e]
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_export": 44,
        "./_object-gopd": 86
    }],
    226: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_an-object")
          , i = function(t) {
            this._t = r(t),
            this._i = 0;
            var e, o = this._k = [];
            for (e in t)
                o.push(e)
        };
        t("./_iter-create")(i, "Object", function() {
            var t, e = this, o = e._k;
            do {
                if (e._i >= o.length)
                    return {
                        value: void 0,
                        done: !0
                    }
            } while (!((t = o[e._i++])in e._t));
            return {
                value: t,
                done: !1
            }
        }),
        a(a.S, "Reflect", {
            enumerate: function(t) {
                return new i(t)
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_export": 44,
        "./_iter-create": 66
    }],
    227: [function(t, e, o) {
        var a = t("./_object-gopd")
          , r = t("./_export")
          , i = t("./_an-object");
        r(r.S, "Reflect", {
            getOwnPropertyDescriptor: function(t, e) {
                return a.f(i(t), e)
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_export": 44,
        "./_object-gopd": 86
    }],
    228: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_object-gpo")
          , i = t("./_an-object");
        a(a.S, "Reflect", {
            getPrototypeOf: function(t) {
                return r(i(t))
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_export": 44,
        "./_object-gpo": 90
    }],
    229: [function(t, e, o) {
        function a(t, e) {
            var o, s, u = arguments.length < 3 ? t : arguments[2];
            return l(t) === u ? t[e] : (o = r.f(t, e)) ? n(o, "value") ? o.value : void 0 !== o.get ? o.get.call(u) : void 0 : c(s = i(t)) ? a(s, e, u) : void 0
        }
        var r = t("./_object-gopd")
          , i = t("./_object-gpo")
          , n = t("./_has")
          , s = t("./_export")
          , c = t("./_is-object")
          , l = t("./_an-object");
        s(s.S, "Reflect", {
            get: a
        })
    }
    , {
        "./_an-object": 18,
        "./_export": 44,
        "./_has": 53,
        "./_is-object": 63,
        "./_object-gopd": 86,
        "./_object-gpo": 90
    }],
    230: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Reflect", {
            has: function(t, e) {
                return e in t
            }
        })
    }
    , {
        "./_export": 44
    }],
    231: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_an-object")
          , i = Object.isExtensible;
        a(a.S, "Reflect", {
            isExtensible: function(t) {
                return r(t),
                !i || i(t)
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_export": 44
    }],
    232: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Reflect", {
            ownKeys: t("./_own-keys")
        })
    }
    , {
        "./_export": 44,
        "./_own-keys": 96
    }],
    233: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_an-object")
          , i = Object.preventExtensions;
        a(a.S, "Reflect", {
            preventExtensions: function(t) {
                r(t);
                try {
                    return i && i(t),
                    !0
                } catch (t) {
                    return !1
                }
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_export": 44
    }],
    234: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_set-proto");
        r && a(a.S, "Reflect", {
            setPrototypeOf: function(t, e) {
                r.check(t, e);
                try {
                    return r.set(t, e),
                    !0
                } catch (t) {
                    return !1
                }
            }
        })
    }
    , {
        "./_export": 44,
        "./_set-proto": 110
    }],
    235: [function(t, e, o) {
        function a(t, e, o) {
            var c, d, p = arguments.length < 4 ? t : arguments[3], f = i.f(u(t), e);
            if (!f) {
                if (_(d = n(t)))
                    return a(d, e, o, p);
                f = l(0)
            }
            if (s(f, "value")) {
                if (!1 === f.writable || !_(p))
                    return !1;
                if (c = i.f(p, e)) {
                    if (c.get || c.set || !1 === c.writable)
                        return !1;
                    c.value = o,
                    r.f(p, e, c)
                } else
                    r.f(p, e, l(0, o));
                return !0
            }
            return void 0 !== f.set && (f.set.call(p, o),
            !0)
        }
        var r = t("./_object-dp")
          , i = t("./_object-gopd")
          , n = t("./_object-gpo")
          , s = t("./_has")
          , c = t("./_export")
          , l = t("./_property-desc")
          , u = t("./_an-object")
          , _ = t("./_is-object");
        c(c.S, "Reflect", {
            set: a
        })
    }
    , {
        "./_an-object": 18,
        "./_export": 44,
        "./_has": 53,
        "./_is-object": 63,
        "./_object-dp": 83,
        "./_object-gopd": 86,
        "./_object-gpo": 90,
        "./_property-desc": 101
    }],
    236: [function(t, e, o) {
        var a = t("./_global")
          , r = t("./_inherit-if-required")
          , i = t("./_object-dp").f
          , n = t("./_object-gopn").f
          , s = t("./_is-regexp")
          , c = t("./_flags")
          , l = a.RegExp
          , u = l
          , _ = l.prototype
          , d = /a/g
          , p = /a/g
          , f = new l(d) !== d;
        if (t("./_descriptors") && (!f || t("./_fails")(function() {
            return p[t("./_wks")("match")] = !1,
            l(d) != d || l(p) == p || "/a/i" != l(d, "i")
        }))) {
            l = function(t, e) {
                var o = this instanceof l
                  , a = s(t)
                  , i = void 0 === e;
                return !o && a && t.constructor === l && i ? t : r(f ? new u(a && !i ? t.source : t,e) : u((a = t instanceof l) ? t.source : t, a && i ? c.call(t) : e), o ? this : _, l)
            }
            ;
            for (var h = n(u), m = 0; h.length > m; )
                !function(t) {
                    t in l || i(l, t, {
                        configurable: !0,
                        get: function() {
                            return u[t]
                        },
                        set: function(e) {
                            u[t] = e
                        }
                    })
                }(h[m++]);
            _.constructor = l,
            l.prototype = _,
            t("./_redefine")(a, "RegExp", l)
        }
        t("./_set-species")("RegExp")
    }
    , {
        "./_descriptors": 40,
        "./_fails": 46,
        "./_flags": 48,
        "./_global": 52,
        "./_inherit-if-required": 57,
        "./_is-regexp": 64,
        "./_object-dp": 83,
        "./_object-gopn": 88,
        "./_redefine": 103,
        "./_set-species": 111,
        "./_wks": 140
    }],
    237: [function(t, e, o) {
        "use strict";
        var a = t("./_regexp-exec");
        t("./_export")({
            target: "RegExp",
            proto: !0,
            forced: a !== /./.exec
        }, {
            exec: a
        })
    }
    , {
        "./_export": 44,
        "./_regexp-exec": 105
    }],
    238: [function(t, e, o) {
        t("./_descriptors") && "g" != /./g.flags && t("./_object-dp").f(RegExp.prototype, "flags", {
            configurable: !0,
            get: t("./_flags")
        })
    }
    , {
        "./_descriptors": 40,
        "./_flags": 48,
        "./_object-dp": 83
    }],
    239: [function(t, e, o) {
        "use strict";
        var a = t("./_an-object")
          , r = t("./_to-length")
          , i = t("./_advance-string-index")
          , n = t("./_regexp-exec-abstract");
        t("./_fix-re-wks")("match", 1, function(t, e, o, s) {
            return [function(o) {
                var a = t(this)
                  , r = void 0 == o ? void 0 : o[e];
                return void 0 !== r ? r.call(o, a) : new RegExp(o)[e](String(a))
            }
            , function(t) {
                var e = s(o, t, this);
                if (e.done)
                    return e.value;
                var c = a(t)
                  , l = String(this);
                if (!c.global)
                    return n(c, l);
                var u = c.unicode;
                c.lastIndex = 0;
                for (var _, d = [], p = 0; null !== (_ = n(c, l)); ) {
                    var f = String(_[0]);
                    d[p] = f,
                    "" === f && (c.lastIndex = i(l, r(c.lastIndex), u)),
                    p++
                }
                return 0 === p ? null : d
            }
            ]
        })
    }
    , {
        "./_advance-string-index": 16,
        "./_an-object": 18,
        "./_fix-re-wks": 47,
        "./_regexp-exec-abstract": 104,
        "./_to-length": 129
    }],
    240: [function(t, e, o) {
        "use strict";
        var a = t("./_an-object")
          , r = t("./_to-object")
          , i = t("./_to-length")
          , n = t("./_to-integer")
          , s = t("./_advance-string-index")
          , c = t("./_regexp-exec-abstract")
          , l = Math.max
          , u = Math.min
          , _ = Math.floor
          , d = /\$([$&`']|\d\d?|<[^>]*>)/g
          , p = /\$([$&`']|\d\d?)/g
          , f = function(t) {
            return void 0 === t ? t : String(t)
        };
        t("./_fix-re-wks")("replace", 2, function(t, e, o, h) {
            function m(t, e, a, i, n, s) {
                var c = a + t.length
                  , l = i.length
                  , u = p;
                return void 0 !== n && (n = r(n),
                u = d),
                o.call(s, u, function(o, r) {
                    var s;
                    switch (r.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return e.slice(0, a);
                    case "'":
                        return e.slice(c);
                    case "<":
                        s = n[r.slice(1, -1)];
                        break;
                    default:
                        var u = +r;
                        if (0 === u)
                            return o;
                        if (u > l) {
                            var d = _(u / 10);
                            return 0 === d ? o : d <= l ? void 0 === i[d - 1] ? r.charAt(1) : i[d - 1] + r.charAt(1) : o
                        }
                        s = i[u - 1]
                    }
                    return void 0 === s ? "" : s
                })
            }
            return [function(a, r) {
                var i = t(this)
                  , n = void 0 == a ? void 0 : a[e];
                return void 0 !== n ? n.call(a, i, r) : o.call(String(i), a, r)
            }
            , function(t, e) {
                var r = h(o, t, this, e);
                if (r.done)
                    return r.value;
                var _ = a(t)
                  , d = String(this)
                  , p = "function" == typeof e;
                p || (e = String(e));
                var v = _.global;
                if (v) {
                    var g = _.unicode;
                    _.lastIndex = 0
                }
                for (var b = []; ; ) {
                    var y = c(_, d);
                    if (null === y)
                        break;
                    if (b.push(y),
                    !v)
                        break;
                    "" === String(y[0]) && (_.lastIndex = s(d, i(_.lastIndex), g))
                }
                for (var x = "", k = 0, j = 0; j < b.length; j++) {
                    y = b[j];
                    for (var w = String(y[0]), E = l(u(n(y.index), d.length), 0), S = [], O = 1; O < y.length; O++)
                        S.push(f(y[O]));
                    var P = y.groups;
                    if (p) {
                        var L = [w].concat(S, E, d);
                        void 0 !== P && L.push(P);
                        var A = String(e.apply(void 0, L))
                    } else
                        A = m(w, d, E, S, P, e);
                    E >= k && (x += d.slice(k, E) + A,
                    k = E + w.length)
                }
                return x + d.slice(k)
            }
            ]
        })
    }
    , {
        "./_advance-string-index": 16,
        "./_an-object": 18,
        "./_fix-re-wks": 47,
        "./_regexp-exec-abstract": 104,
        "./_to-integer": 127,
        "./_to-length": 129,
        "./_to-object": 130
    }],
    241: [function(t, e, o) {
        "use strict";
        var a = t("./_an-object")
          , r = t("./_same-value")
          , i = t("./_regexp-exec-abstract");
        t("./_fix-re-wks")("search", 1, function(t, e, o, n) {
            return [function(o) {
                var a = t(this)
                  , r = void 0 == o ? void 0 : o[e];
                return void 0 !== r ? r.call(o, a) : new RegExp(o)[e](String(a))
            }
            , function(t) {
                var e = n(o, t, this);
                if (e.done)
                    return e.value;
                var s = a(t)
                  , c = String(this)
                  , l = s.lastIndex;
                r(l, 0) || (s.lastIndex = 0);
                var u = i(s, c);
                return r(s.lastIndex, l) || (s.lastIndex = l),
                null === u ? -1 : u.index
            }
            ]
        })
    }
    , {
        "./_an-object": 18,
        "./_fix-re-wks": 47,
        "./_regexp-exec-abstract": 104,
        "./_same-value": 107
    }],
    242: [function(t, e, o) {
        "use strict";
        var a = t("./_is-regexp")
          , r = t("./_an-object")
          , i = t("./_species-constructor")
          , n = t("./_advance-string-index")
          , s = t("./_to-length")
          , c = t("./_regexp-exec-abstract")
          , l = t("./_regexp-exec")
          , u = t("./_fails")
          , _ = Math.min
          , d = [].push
          , p = "length"
          , f = !u(function() {
            RegExp(4294967295, "y")
        });
        t("./_fix-re-wks")("split", 2, function(t, e, o, u) {
            var h;
            return h = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p] || 2 != "ab".split(/(?:ab)*/)[p] || 4 != ".".split(/(.?)(.?)/)[p] || ".".split(/()()/)[p] > 1 || "".split(/.?/)[p] ? function(t, e) {
                var r = String(this);
                if (void 0 === t && 0 === e)
                    return [];
                if (!a(t))
                    return o.call(r, t, e);
                for (var i, n, s, c = [], u = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), _ = 0, f = void 0 === e ? 4294967295 : e >>> 0, h = new RegExp(t.source,u + "g"); (i = l.call(h, r)) && !((n = h.lastIndex) > _ && (c.push(r.slice(_, i.index)),
                i[p] > 1 && i.index < r[p] && d.apply(c, i.slice(1)),
                s = i[0][p],
                _ = n,
                c[p] >= f)); )
                    h.lastIndex === i.index && h.lastIndex++;
                return _ === r[p] ? !s && h.test("") || c.push("") : c.push(r.slice(_)),
                c[p] > f ? c.slice(0, f) : c
            }
            : "0".split(void 0, 0)[p] ? function(t, e) {
                return void 0 === t && 0 === e ? [] : o.call(this, t, e)
            }
            : o,
            [function(o, a) {
                var r = t(this)
                  , i = void 0 == o ? void 0 : o[e];
                return void 0 !== i ? i.call(o, r, a) : h.call(String(r), o, a)
            }
            , function(t, e) {
                var a = u(h, t, this, e, h !== o);
                if (a.done)
                    return a.value;
                var l = r(t)
                  , d = String(this)
                  , p = i(l, RegExp)
                  , m = l.unicode
                  , v = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (f ? "y" : "g")
                  , g = new p(f ? l : "^(?:" + l.source + ")",v)
                  , b = void 0 === e ? 4294967295 : e >>> 0;
                if (0 === b)
                    return [];
                if (0 === d.length)
                    return null === c(g, d) ? [d] : [];
                for (var y = 0, x = 0, k = []; x < d.length; ) {
                    g.lastIndex = f ? x : 0;
                    var j, w = c(g, f ? d : d.slice(x));
                    if (null === w || (j = _(s(g.lastIndex + (f ? 0 : x)), d.length)) === y)
                        x = n(d, x, m);
                    else {
                        if (k.push(d.slice(y, x)),
                        k.length === b)
                            return k;
                        for (var E = 1; E <= w.length - 1; E++)
                            if (k.push(w[E]),
                            k.length === b)
                                return k;
                        x = y = j
                    }
                }
                return k.push(d.slice(y)),
                k
            }
            ]
        })
    }
    , {
        "./_advance-string-index": 16,
        "./_an-object": 18,
        "./_fails": 46,
        "./_fix-re-wks": 47,
        "./_is-regexp": 64,
        "./_regexp-exec": 105,
        "./_regexp-exec-abstract": 104,
        "./_species-constructor": 115,
        "./_to-length": 129
    }],
    243: [function(t, e, o) {
        "use strict";
        t("./es6.regexp.flags");
        var a = t("./_an-object")
          , r = t("./_flags")
          , i = t("./_descriptors")
          , n = /./.toString
          , s = function(e) {
            t("./_redefine")(RegExp.prototype, "toString", e, !0)
        };
        t("./_fails")(function() {
            return "/a/b" != n.call({
                source: "a",
                flags: "b"
            })
        }) ? s(function() {
            var t = a(this);
            return "/".concat(t.source, "/", "flags"in t ? t.flags : !i && t instanceof RegExp ? r.call(t) : void 0)
        }) : "toString" != n.name && s(function() {
            return n.call(this)
        })
    }
    , {
        "./_an-object": 18,
        "./_descriptors": 40,
        "./_fails": 46,
        "./_flags": 48,
        "./_redefine": 103,
        "./es6.regexp.flags": 238
    }],
    244: [function(t, e, o) {
        "use strict";
        var a = t("./_collection-strong")
          , r = t("./_validate-collection");
        e.exports = t("./_collection")("Set", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function(t) {
                return a.def(r(this, "Set"), t = 0 === t ? 0 : t, t)
            }
        }, a)
    }
    , {
        "./_collection": 33,
        "./_collection-strong": 30,
        "./_validate-collection": 137
    }],
    245: [function(t, e, o) {
        "use strict";
        t("./_string-html")("anchor", function(t) {
            return function(e) {
                return t(this, "a", "name", e)
            }
        })
    }
    , {
        "./_string-html": 119
    }],
    246: [function(t, e, o) {
        "use strict";
        t("./_string-html")("big", function(t) {
            return function() {
                return t(this, "big", "", "")
            }
        })
    }
    , {
        "./_string-html": 119
    }],
    247: [function(t, e, o) {
        "use strict";
        t("./_string-html")("blink", function(t) {
            return function() {
                return t(this, "blink", "", "")
            }
        })
    }
    , {
        "./_string-html": 119
    }],
    248: [function(t, e, o) {
        "use strict";
        t("./_string-html")("bold", function(t) {
            return function() {
                return t(this, "b", "", "")
            }
        })
    }
    , {
        "./_string-html": 119
    }],
    249: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_string-at")(!1);
        a(a.P, "String", {
            codePointAt: function(t) {
                return r(this, t)
            }
        })
    }
    , {
        "./_export": 44,
        "./_string-at": 117
    }],
    250: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_to-length")
          , i = t("./_string-context")
          , n = "".endsWith;
        a(a.P + a.F * t("./_fails-is-regexp")("endsWith"), "String", {
            endsWith: function(t) {
                var e = i(this, t, "endsWith")
                  , o = arguments.length > 1 ? arguments[1] : void 0
                  , a = r(e.length)
                  , s = void 0 === o ? a : Math.min(r(o), a)
                  , c = String(t);
                return n ? n.call(e, c, s) : e.slice(s - c.length, s) === c
            }
        })
    }
    , {
        "./_export": 44,
        "./_fails-is-regexp": 45,
        "./_string-context": 118,
        "./_to-length": 129
    }],
    251: [function(t, e, o) {
        "use strict";
        t("./_string-html")("fixed", function(t) {
            return function() {
                return t(this, "tt", "", "")
            }
        })
    }
    , {
        "./_string-html": 119
    }],
    252: [function(t, e, o) {
        "use strict";
        t("./_string-html")("fontcolor", function(t) {
            return function(e) {
                return t(this, "font", "color", e)
            }
        })
    }
    , {
        "./_string-html": 119
    }],
    253: [function(t, e, o) {
        "use strict";
        t("./_string-html")("fontsize", function(t) {
            return function(e) {
                return t(this, "font", "size", e)
            }
        })
    }
    , {
        "./_string-html": 119
    }],
    254: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_to-absolute-index")
          , i = String.fromCharCode
          , n = String.fromCodePoint;
        a(a.S + a.F * (!!n && 1 != n.length), "String", {
            fromCodePoint: function(t) {
                for (var e, o = [], a = arguments.length, n = 0; a > n; ) {
                    if (e = +arguments[n++],
                    r(e, 1114111) !== e)
                        throw RangeError(e + " is not a valid code point");
                    o.push(e < 65536 ? i(e) : i(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
                }
                return o.join("")
            }
        })
    }
    , {
        "./_export": 44,
        "./_to-absolute-index": 125
    }],
    255: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_string-context");
        a(a.P + a.F * t("./_fails-is-regexp")("includes"), "String", {
            includes: function(t) {
                return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }
    , {
        "./_export": 44,
        "./_fails-is-regexp": 45,
        "./_string-context": 118
    }],
    256: [function(t, e, o) {
        "use strict";
        t("./_string-html")("italics", function(t) {
            return function() {
                return t(this, "i", "", "")
            }
        })
    }
    , {
        "./_string-html": 119
    }],
    257: [function(t, e, o) {
        "use strict";
        var a = t("./_string-at")(!0);
        t("./_iter-define")(String, "String", function(t) {
            this._t = String(t),
            this._i = 0
        }, function() {
            var t, e = this._t, o = this._i;
            return o >= e.length ? {
                value: void 0,
                done: !0
            } : (t = a(e, o),
            this._i += t.length,
            {
                value: t,
                done: !1
            })
        })
    }
    , {
        "./_iter-define": 67,
        "./_string-at": 117
    }],
    258: [function(t, e, o) {
        "use strict";
        t("./_string-html")("link", function(t) {
            return function(e) {
                return t(this, "a", "href", e)
            }
        })
    }
    , {
        "./_string-html": 119
    }],
    259: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_to-iobject")
          , i = t("./_to-length");
        a(a.S, "String", {
            raw: function(t) {
                for (var e = r(t.raw), o = i(e.length), a = arguments.length, n = [], s = 0; o > s; )
                    n.push(String(e[s++])),
                    s < a && n.push(String(arguments[s]));
                return n.join("")
            }
        })
    }
    , {
        "./_export": 44,
        "./_to-iobject": 128,
        "./_to-length": 129
    }],
    260: [function(t, e, o) {
        var a = t("./_export");
        a(a.P, "String", {
            repeat: t("./_string-repeat")
        })
    }
    , {
        "./_export": 44,
        "./_string-repeat": 121
    }],
    261: [function(t, e, o) {
        "use strict";
        t("./_string-html")("small", function(t) {
            return function() {
                return t(this, "small", "", "")
            }
        })
    }
    , {
        "./_string-html": 119
    }],
    262: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_to-length")
          , i = t("./_string-context")
          , n = "".startsWith;
        a(a.P + a.F * t("./_fails-is-regexp")("startsWith"), "String", {
            startsWith: function(t) {
                var e = i(this, t, "startsWith")
                  , o = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length))
                  , a = String(t);
                return n ? n.call(e, a, o) : e.slice(o, o + a.length) === a
            }
        })
    }
    , {
        "./_export": 44,
        "./_fails-is-regexp": 45,
        "./_string-context": 118,
        "./_to-length": 129
    }],
    263: [function(t, e, o) {
        "use strict";
        t("./_string-html")("strike", function(t) {
            return function() {
                return t(this, "strike", "", "")
            }
        })
    }
    , {
        "./_string-html": 119
    }],
    264: [function(t, e, o) {
        "use strict";
        t("./_string-html")("sub", function(t) {
            return function() {
                return t(this, "sub", "", "")
            }
        })
    }
    , {
        "./_string-html": 119
    }],
    265: [function(t, e, o) {
        "use strict";
        t("./_string-html")("sup", function(t) {
            return function() {
                return t(this, "sup", "", "")
            }
        })
    }
    , {
        "./_string-html": 119
    }],
    266: [function(t, e, o) {
        "use strict";
        t("./_string-trim")("trim", function(t) {
            return function() {
                return t(this, 3)
            }
        })
    }
    , {
        "./_string-trim": 122
    }],
    267: [function(t, e, o) {
        "use strict";
        var a = t("./_global")
          , r = t("./_has")
          , i = t("./_descriptors")
          , n = t("./_export")
          , s = t("./_redefine")
          , c = t("./_meta").KEY
          , l = t("./_fails")
          , u = t("./_shared")
          , _ = t("./_set-to-string-tag")
          , d = t("./_uid")
          , p = t("./_wks")
          , f = t("./_wks-ext")
          , h = t("./_wks-define")
          , m = t("./_enum-keys")
          , v = t("./_is-array")
          , g = t("./_an-object")
          , b = t("./_is-object")
          , y = t("./_to-object")
          , x = t("./_to-iobject")
          , k = t("./_to-primitive")
          , j = t("./_property-desc")
          , w = t("./_object-create")
          , E = t("./_object-gopn-ext")
          , S = t("./_object-gopd")
          , O = t("./_object-gops")
          , P = t("./_object-dp")
          , L = t("./_object-keys")
          , A = S.f
          , C = P.f
          , T = E.f
          , M = a.Symbol
          , $ = a.JSON
          , I = $ && $.stringify
          , F = p("_hidden")
          , N = p("toPrimitive")
          , R = {}.propertyIsEnumerable
          , z = u("symbol-registry")
          , D = u("symbols")
          , J = u("op-symbols")
          , q = Object.prototype
          , H = "function" == typeof M && !!O.f
          , U = a.QObject
          , V = !U || !U.prototype || !U.prototype.findChild
          , G = i && l(function() {
            return 7 != w(C({}, "a", {
                get: function() {
                    return C(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, o) {
            var a = A(q, e);
            a && delete q[e],
            C(t, e, o),
            a && t !== q && C(q, e, a)
        }
        : C
          , W = function(t) {
            var e = D[t] = w(M.prototype);
            return e._k = t,
            e
        }
          , B = H && "symbol" == typeof M.iterator ? function(t) {
            return "symbol" == typeof t
        }
        : function(t) {
            return t instanceof M
        }
          , Q = function(t, e, o) {
            return t === q && Q(J, e, o),
            g(t),
            e = k(e, !0),
            g(o),
            r(D, e) ? (o.enumerable ? (r(t, F) && t[F][e] && (t[F][e] = !1),
            o = w(o, {
                enumerable: j(0, !1)
            })) : (r(t, F) || C(t, F, j(1, {})),
            t[F][e] = !0),
            G(t, e, o)) : C(t, e, o)
        }
          , Y = function(t, e) {
            g(t);
            for (var o, a = m(e = x(e)), r = 0, i = a.length; i > r; )
                Q(t, o = a[r++], e[o]);
            return t
        }
          , X = function(t, e) {
            return void 0 === e ? w(t) : Y(w(t), e)
        }
          , Z = function(t) {
            var e = R.call(this, t = k(t, !0));
            return !(this === q && r(D, t) && !r(J, t)) && (!(e || !r(this, t) || !r(D, t) || r(this, F) && this[F][t]) || e)
        }
          , K = function(t, e) {
            if (t = x(t),
            e = k(e, !0),
            t !== q || !r(D, e) || r(J, e)) {
                var o = A(t, e);
                return !o || !r(D, e) || r(t, F) && t[F][e] || (o.enumerable = !0),
                o
            }
        }
          , tt = function(t) {
            for (var e, o = T(x(t)), a = [], i = 0; o.length > i; )
                r(D, e = o[i++]) || e == F || e == c || a.push(e);
            return a
        }
          , et = function(t) {
            for (var e, o = t === q, a = T(o ? J : x(t)), i = [], n = 0; a.length > n; )
                !r(D, e = a[n++]) || o && !r(q, e) || i.push(D[e]);
            return i
        };
        H || (M = function() {
            if (this instanceof M)
                throw TypeError("Symbol is not a constructor!");
            var t = d(arguments.length > 0 ? arguments[0] : void 0)
              , e = function(o) {
                this === q && e.call(J, o),
                r(this, F) && r(this[F], t) && (this[F][t] = !1),
                G(this, t, j(1, o))
            };
            return i && V && G(q, t, {
                configurable: !0,
                set: e
            }),
            W(t)
        }
        ,
        s(M.prototype, "toString", function() {
            return this._k
        }),
        S.f = K,
        P.f = Q,
        t("./_object-gopn").f = E.f = tt,
        t("./_object-pie").f = Z,
        O.f = et,
        i && !t("./_library") && s(q, "propertyIsEnumerable", Z, !0),
        f.f = function(t) {
            return W(p(t))
        }
        ),
        n(n.G + n.W + n.F * !H, {
            Symbol: M
        });
        for (var ot = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), at = 0; ot.length > at; )
            p(ot[at++]);
        for (var rt = L(p.store), it = 0; rt.length > it; )
            h(rt[it++]);
        n(n.S + n.F * !H, "Symbol", {
            for: function(t) {
                return r(z, t += "") ? z[t] : z[t] = M(t)
            },
            keyFor: function(t) {
                if (!B(t))
                    throw TypeError(t + " is not a symbol!");
                for (var e in z)
                    if (z[e] === t)
                        return e
            },
            useSetter: function() {
                V = !0
            },
            useSimple: function() {
                V = !1
            }
        }),
        n(n.S + n.F * !H, "Object", {
            create: X,
            defineProperty: Q,
            defineProperties: Y,
            getOwnPropertyDescriptor: K,
            getOwnPropertyNames: tt,
            getOwnPropertySymbols: et
        });
        var nt = l(function() {
            O.f(1)
        });
        n(n.S + n.F * nt, "Object", {
            getOwnPropertySymbols: function(t) {
                return O.f(y(t))
            }
        }),
        $ && n(n.S + n.F * (!H || l(function() {
            var t = M();
            return "[null]" != I([t]) || "{}" != I({
                a: t
            }) || "{}" != I(Object(t))
        })), "JSON", {
            stringify: function(t) {
                for (var e, o, a = [t], r = 1; arguments.length > r; )
                    a.push(arguments[r++]);
                if (o = e = a[1],
                (b(e) || void 0 !== t) && !B(t))
                    return v(e) || (e = function(t, e) {
                        if ("function" == typeof o && (e = o.call(this, t, e)),
                        !B(e))
                            return e
                    }
                    ),
                    a[1] = e,
                    I.apply($, a)
            }
        }),
        M.prototype[N] || t("./_hide")(M.prototype, N, M.prototype.valueOf),
        _(M, "Symbol"),
        _(Math, "Math", !0),
        _(a.JSON, "JSON", !0)
    }
    , {
        "./_an-object": 18,
        "./_descriptors": 40,
        "./_enum-keys": 43,
        "./_export": 44,
        "./_fails": 46,
        "./_global": 52,
        "./_has": 53,
        "./_hide": 54,
        "./_is-array": 61,
        "./_is-object": 63,
        "./_library": 71,
        "./_meta": 77,
        "./_object-create": 82,
        "./_object-dp": 83,
        "./_object-gopd": 86,
        "./_object-gopn": 88,
        "./_object-gopn-ext": 87,
        "./_object-gops": 89,
        "./_object-keys": 92,
        "./_object-pie": 93,
        "./_property-desc": 101,
        "./_redefine": 103,
        "./_set-to-string-tag": 112,
        "./_shared": 114,
        "./_to-iobject": 128,
        "./_to-object": 130,
        "./_to-primitive": 131,
        "./_uid": 135,
        "./_wks": 140,
        "./_wks-define": 138,
        "./_wks-ext": 139
    }],
    268: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_typed")
          , i = t("./_typed-buffer")
          , n = t("./_an-object")
          , s = t("./_to-absolute-index")
          , c = t("./_to-length")
          , l = t("./_is-object")
          , u = t("./_global").ArrayBuffer
          , _ = t("./_species-constructor")
          , d = i.ArrayBuffer
          , p = i.DataView
          , f = r.ABV && u.isView
          , h = d.prototype.slice
          , m = r.VIEW;
        a(a.G + a.W + a.F * (u !== d), {
            ArrayBuffer: d
        }),
        a(a.S + a.F * !r.CONSTR, "ArrayBuffer", {
            isView: function(t) {
                return f && f(t) || l(t) && m in t
            }
        }),
        a(a.P + a.U + a.F * t("./_fails")(function() {
            return !new d(2).slice(1, void 0).byteLength
        }), "ArrayBuffer", {
            slice: function(t, e) {
                if (void 0 !== h && void 0 === e)
                    return h.call(n(this), t);
                for (var o = n(this).byteLength, a = s(t, o), r = s(void 0 === e ? o : e, o), i = new (_(this, d))(c(r - a)), l = new p(this), u = new p(i), f = 0; a < r; )
                    u.setUint8(f++, l.getUint8(a++));
                return i
            }
        }),
        t("./_set-species")("ArrayBuffer")
    }
    , {
        "./_an-object": 18,
        "./_export": 44,
        "./_fails": 46,
        "./_global": 52,
        "./_is-object": 63,
        "./_set-species": 111,
        "./_species-constructor": 115,
        "./_to-absolute-index": 125,
        "./_to-length": 129,
        "./_typed": 134,
        "./_typed-buffer": 133
    }],
    269: [function(t, e, o) {
        var a = t("./_export");
        a(a.G + a.W + a.F * !t("./_typed").ABV, {
            DataView: t("./_typed-buffer").DataView
        })
    }
    , {
        "./_export": 44,
        "./_typed": 134,
        "./_typed-buffer": 133
    }],
    270: [function(t, e, o) {
        t("./_typed-array")("Float32", 4, function(t) {
            return function(e, o, a) {
                return t(this, e, o, a)
            }
        })
    }
    , {
        "./_typed-array": 132
    }],
    271: [function(t, e, o) {
        t("./_typed-array")("Float64", 8, function(t) {
            return function(e, o, a) {
                return t(this, e, o, a)
            }
        })
    }
    , {
        "./_typed-array": 132
    }],
    272: [function(t, e, o) {
        t("./_typed-array")("Int16", 2, function(t) {
            return function(e, o, a) {
                return t(this, e, o, a)
            }
        })
    }
    , {
        "./_typed-array": 132
    }],
    273: [function(t, e, o) {
        t("./_typed-array")("Int32", 4, function(t) {
            return function(e, o, a) {
                return t(this, e, o, a)
            }
        })
    }
    , {
        "./_typed-array": 132
    }],
    274: [function(t, e, o) {
        t("./_typed-array")("Int8", 1, function(t) {
            return function(e, o, a) {
                return t(this, e, o, a)
            }
        })
    }
    , {
        "./_typed-array": 132
    }],
    275: [function(t, e, o) {
        t("./_typed-array")("Uint16", 2, function(t) {
            return function(e, o, a) {
                return t(this, e, o, a)
            }
        })
    }
    , {
        "./_typed-array": 132
    }],
    276: [function(t, e, o) {
        t("./_typed-array")("Uint32", 4, function(t) {
            return function(e, o, a) {
                return t(this, e, o, a)
            }
        })
    }
    , {
        "./_typed-array": 132
    }],
    277: [function(t, e, o) {
        t("./_typed-array")("Uint8", 1, function(t) {
            return function(e, o, a) {
                return t(this, e, o, a)
            }
        })
    }
    , {
        "./_typed-array": 132
    }],
    278: [function(t, e, o) {
        t("./_typed-array")("Uint8", 1, function(t) {
            return function(e, o, a) {
                return t(this, e, o, a)
            }
        }, !0)
    }
    , {
        "./_typed-array": 132
    }],
    279: [function(t, e, o) {
        "use strict";
        var a, r = t("./_global"), i = t("./_array-methods")(0), n = t("./_redefine"), s = t("./_meta"), c = t("./_object-assign"), l = t("./_collection-weak"), u = t("./_is-object"), _ = t("./_validate-collection"), d = t("./_validate-collection"), p = !r.ActiveXObject && "ActiveXObject"in r, f = s.getWeak, h = Object.isExtensible, m = l.ufstore, v = function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, g = {
            get: function(t) {
                if (u(t)) {
                    var e = f(t);
                    return !0 === e ? m(_(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
                }
            },
            set: function(t, e) {
                return l.def(_(this, "WeakMap"), t, e)
            }
        }, b = e.exports = t("./_collection")("WeakMap", v, g, l, !0, !0);
        d && p && (a = l.getConstructor(v, "WeakMap"),
        c(a.prototype, g),
        s.NEED = !0,
        i(["delete", "has", "get", "set"], function(t) {
            var e = b.prototype
              , o = e[t];
            n(e, t, function(e, r) {
                if (u(e) && !h(e)) {
                    this._f || (this._f = new a);
                    var i = this._f[t](e, r);
                    return "set" == t ? this : i
                }
                return o.call(this, e, r)
            })
        }))
    }
    , {
        "./_array-methods": 23,
        "./_collection": 33,
        "./_collection-weak": 32,
        "./_global": 52,
        "./_is-object": 63,
        "./_meta": 77,
        "./_object-assign": 81,
        "./_redefine": 103,
        "./_validate-collection": 137
    }],
    280: [function(t, e, o) {
        "use strict";
        var a = t("./_collection-weak")
          , r = t("./_validate-collection");
        t("./_collection")("WeakSet", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function(t) {
                return a.def(r(this, "WeakSet"), t, !0)
            }
        }, a, !1, !0)
    }
    , {
        "./_collection": 33,
        "./_collection-weak": 32,
        "./_validate-collection": 137
    }],
    281: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_flatten-into-array")
          , i = t("./_to-object")
          , n = t("./_to-length")
          , s = t("./_a-function")
          , c = t("./_array-species-create");
        a(a.P, "Array", {
            flatMap: function(t) {
                var e, o, a = i(this);
                return s(t),
                e = n(a.length),
                o = c(a, 0),
                r(o, a, a, e, 0, 1, t, arguments[1]),
                o
            }
        }),
        t("./_add-to-unscopables")("flatMap")
    }
    , {
        "./_a-function": 13,
        "./_add-to-unscopables": 15,
        "./_array-species-create": 26,
        "./_export": 44,
        "./_flatten-into-array": 49,
        "./_to-length": 129,
        "./_to-object": 130
    }],
    282: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_flatten-into-array")
          , i = t("./_to-object")
          , n = t("./_to-length")
          , s = t("./_to-integer")
          , c = t("./_array-species-create");
        a(a.P, "Array", {
            flatten: function() {
                var t = arguments[0]
                  , e = i(this)
                  , o = n(e.length)
                  , a = c(e, 0);
                return r(a, e, e, o, 0, void 0 === t ? 1 : s(t)),
                a
            }
        }),
        t("./_add-to-unscopables")("flatten")
    }
    , {
        "./_add-to-unscopables": 15,
        "./_array-species-create": 26,
        "./_export": 44,
        "./_flatten-into-array": 49,
        "./_to-integer": 127,
        "./_to-length": 129,
        "./_to-object": 130
    }],
    283: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_array-includes")(!0);
        a(a.P, "Array", {
            includes: function(t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        t("./_add-to-unscopables")("includes")
    }
    , {
        "./_add-to-unscopables": 15,
        "./_array-includes": 22,
        "./_export": 44
    }],
    284: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_microtask")()
          , i = t("./_global").process
          , n = "process" == t("./_cof")(i);
        a(a.G, {
            asap: function(t) {
                var e = n && i.domain;
                r(e ? e.bind(t) : t)
            }
        })
    }
    , {
        "./_cof": 29,
        "./_export": 44,
        "./_global": 52,
        "./_microtask": 79
    }],
    285: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_cof");
        a(a.S, "Error", {
            isError: function(t) {
                return "Error" === r(t)
            }
        })
    }
    , {
        "./_cof": 29,
        "./_export": 44
    }],
    286: [function(t, e, o) {
        var a = t("./_export");
        a(a.G, {
            global: t("./_global")
        })
    }
    , {
        "./_export": 44,
        "./_global": 52
    }],
    287: [function(t, e, o) {
        t("./_set-collection-from")("Map")
    }
    , {
        "./_set-collection-from": 108
    }],
    288: [function(t, e, o) {
        t("./_set-collection-of")("Map")
    }
    , {
        "./_set-collection-of": 109
    }],
    289: [function(t, e, o) {
        var a = t("./_export");
        a(a.P + a.R, "Map", {
            toJSON: t("./_collection-to-json")("Map")
        })
    }
    , {
        "./_collection-to-json": 31,
        "./_export": 44
    }],
    290: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            clamp: function(t, e, o) {
                return Math.min(o, Math.max(e, t))
            }
        })
    }
    , {
        "./_export": 44
    }],
    291: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            DEG_PER_RAD: Math.PI / 180
        })
    }
    , {
        "./_export": 44
    }],
    292: [function(t, e, o) {
        var a = t("./_export")
          , r = 180 / Math.PI;
        a(a.S, "Math", {
            degrees: function(t) {
                return t * r
            }
        })
    }
    , {
        "./_export": 44
    }],
    293: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_math-scale")
          , i = t("./_math-fround");
        a(a.S, "Math", {
            fscale: function(t, e, o, a, n) {
                return i(r(t, e, o, a, n))
            }
        })
    }
    , {
        "./_export": 44,
        "./_math-fround": 73,
        "./_math-scale": 75
    }],
    294: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            iaddh: function(t, e, o, a) {
                var r = t >>> 0
                  , i = e >>> 0
                  , n = o >>> 0;
                return i + (a >>> 0) + ((r & n | (r | n) & ~(r + n >>> 0)) >>> 31) | 0
            }
        })
    }
    , {
        "./_export": 44
    }],
    295: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            imulh: function(t, e) {
                var o = +t
                  , a = +e
                  , r = 65535 & o
                  , i = 65535 & a
                  , n = o >> 16
                  , s = a >> 16
                  , c = (n * i >>> 0) + (r * i >>> 16);
                return n * s + (c >> 16) + ((r * s >>> 0) + (65535 & c) >> 16)
            }
        })
    }
    , {
        "./_export": 44
    }],
    296: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            isubh: function(t, e, o, a) {
                var r = t >>> 0
                  , i = e >>> 0
                  , n = o >>> 0;
                return i - (a >>> 0) - ((~r & n | ~(r ^ n) & r - n >>> 0) >>> 31) | 0
            }
        })
    }
    , {
        "./_export": 44
    }],
    297: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            RAD_PER_DEG: 180 / Math.PI
        })
    }
    , {
        "./_export": 44
    }],
    298: [function(t, e, o) {
        var a = t("./_export")
          , r = Math.PI / 180;
        a(a.S, "Math", {
            radians: function(t) {
                return t * r
            }
        })
    }
    , {
        "./_export": 44
    }],
    299: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            scale: t("./_math-scale")
        })
    }
    , {
        "./_export": 44,
        "./_math-scale": 75
    }],
    300: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            signbit: function(t) {
                return (t = +t) != t ? t : 0 == t ? 1 / t == 1 / 0 : t > 0
            }
        })
    }
    , {
        "./_export": 44
    }],
    301: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "Math", {
            umulh: function(t, e) {
                var o = +t
                  , a = +e
                  , r = 65535 & o
                  , i = 65535 & a
                  , n = o >>> 16
                  , s = a >>> 16
                  , c = (n * i >>> 0) + (r * i >>> 16);
                return n * s + (c >>> 16) + ((r * s >>> 0) + (65535 & c) >>> 16)
            }
        })
    }
    , {
        "./_export": 44
    }],
    302: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_to-object")
          , i = t("./_a-function")
          , n = t("./_object-dp");
        t("./_descriptors") && a(a.P + t("./_object-forced-pam"), "Object", {
            __defineGetter__: function(t, e) {
                n.f(r(this), t, {
                    get: i(e),
                    enumerable: !0,
                    configurable: !0
                })
            }
        })
    }
    , {
        "./_a-function": 13,
        "./_descriptors": 40,
        "./_export": 44,
        "./_object-dp": 83,
        "./_object-forced-pam": 85,
        "./_to-object": 130
    }],
    303: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_to-object")
          , i = t("./_a-function")
          , n = t("./_object-dp");
        t("./_descriptors") && a(a.P + t("./_object-forced-pam"), "Object", {
            __defineSetter__: function(t, e) {
                n.f(r(this), t, {
                    set: i(e),
                    enumerable: !0,
                    configurable: !0
                })
            }
        })
    }
    , {
        "./_a-function": 13,
        "./_descriptors": 40,
        "./_export": 44,
        "./_object-dp": 83,
        "./_object-forced-pam": 85,
        "./_to-object": 130
    }],
    304: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_object-to-array")(!0);
        a(a.S, "Object", {
            entries: function(t) {
                return r(t)
            }
        })
    }
    , {
        "./_export": 44,
        "./_object-to-array": 95
    }],
    305: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_own-keys")
          , i = t("./_to-iobject")
          , n = t("./_object-gopd")
          , s = t("./_create-property");
        a(a.S, "Object", {
            getOwnPropertyDescriptors: function(t) {
                for (var e, o, a = i(t), c = n.f, l = r(a), u = {}, _ = 0; l.length > _; )
                    void 0 !== (o = c(a, e = l[_++])) && s(u, e, o);
                return u
            }
        })
    }
    , {
        "./_create-property": 35,
        "./_export": 44,
        "./_object-gopd": 86,
        "./_own-keys": 96,
        "./_to-iobject": 128
    }],
    306: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_to-object")
          , i = t("./_to-primitive")
          , n = t("./_object-gpo")
          , s = t("./_object-gopd").f;
        t("./_descriptors") && a(a.P + t("./_object-forced-pam"), "Object", {
            __lookupGetter__: function(t) {
                var e, o = r(this), a = i(t, !0);
                do {
                    if (e = s(o, a))
                        return e.get
                } while (o = n(o))
            }
        })
    }
    , {
        "./_descriptors": 40,
        "./_export": 44,
        "./_object-forced-pam": 85,
        "./_object-gopd": 86,
        "./_object-gpo": 90,
        "./_to-object": 130,
        "./_to-primitive": 131
    }],
    307: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_to-object")
          , i = t("./_to-primitive")
          , n = t("./_object-gpo")
          , s = t("./_object-gopd").f;
        t("./_descriptors") && a(a.P + t("./_object-forced-pam"), "Object", {
            __lookupSetter__: function(t) {
                var e, o = r(this), a = i(t, !0);
                do {
                    if (e = s(o, a))
                        return e.set
                } while (o = n(o))
            }
        })
    }
    , {
        "./_descriptors": 40,
        "./_export": 44,
        "./_object-forced-pam": 85,
        "./_object-gopd": 86,
        "./_object-gpo": 90,
        "./_to-object": 130,
        "./_to-primitive": 131
    }],
    308: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_object-to-array")(!1);
        a(a.S, "Object", {
            values: function(t) {
                return r(t)
            }
        })
    }
    , {
        "./_export": 44,
        "./_object-to-array": 95
    }],
    309: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_global")
          , i = t("./_core")
          , n = t("./_microtask")()
          , s = t("./_wks")("observable")
          , c = t("./_a-function")
          , l = t("./_an-object")
          , u = t("./_an-instance")
          , _ = t("./_redefine-all")
          , d = t("./_hide")
          , p = t("./_for-of")
          , f = p.RETURN
          , h = function(t) {
            return null == t ? void 0 : c(t)
        }
          , m = function(t) {
            var e = t._c;
            e && (t._c = void 0,
            e())
        }
          , v = function(t) {
            return void 0 === t._o
        }
          , g = function(t) {
            v(t) || (t._o = void 0,
            m(t))
        }
          , b = function(t, e) {
            l(t),
            this._c = void 0,
            this._o = t,
            t = new y(this);
            try {
                var o = e(t)
                  , a = o;
                null != o && ("function" == typeof o.unsubscribe ? o = function() {
                    a.unsubscribe()
                }
                : c(o),
                this._c = o)
            } catch (e) {
                return void t.error(e)
            }
            v(this) && m(this)
        };
        b.prototype = _({}, {
            unsubscribe: function() {
                g(this)
            }
        });
        var y = function(t) {
            this._s = t
        };
        y.prototype = _({}, {
            next: function(t) {
                var e = this._s;
                if (!v(e)) {
                    var o = e._o;
                    try {
                        var a = h(o.next);
                        if (a)
                            return a.call(o, t)
                    } catch (t) {
                        try {
                            g(e)
                        } finally {
                            throw t
                        }
                    }
                }
            },
            error: function(t) {
                var e = this._s;
                if (v(e))
                    throw t;
                var o = e._o;
                e._o = void 0;
                try {
                    var a = h(o.error);
                    if (!a)
                        throw t;
                    t = a.call(o, t)
                } catch (t) {
                    try {
                        m(e)
                    } finally {
                        throw t
                    }
                }
                return m(e),
                t
            },
            complete: function(t) {
                var e = this._s;
                if (!v(e)) {
                    var o = e._o;
                    e._o = void 0;
                    try {
                        var a = h(o.complete);
                        t = a ? a.call(o, t) : void 0
                    } catch (t) {
                        try {
                            m(e)
                        } finally {
                            throw t
                        }
                    }
                    return m(e),
                    t
                }
            }
        });
        var x = function(t) {
            u(this, x, "Observable", "_f")._f = c(t)
        };
        _(x.prototype, {
            subscribe: function(t) {
                return new b(t,this._f)
            },
            forEach: function(t) {
                var e = this;
                return new (i.Promise || r.Promise)(function(o, a) {
                    c(t);
                    var r = e.subscribe({
                        next: function(e) {
                            try {
                                return t(e)
                            } catch (t) {
                                a(t),
                                r.unsubscribe()
                            }
                        },
                        error: a,
                        complete: o
                    })
                }
                )
            }
        }),
        _(x, {
            from: function(t) {
                var e = "function" == typeof this ? this : x
                  , o = h(l(t)[s]);
                if (o) {
                    var a = l(o.call(t));
                    return a.constructor === e ? a : new e(function(t) {
                        return a.subscribe(t)
                    }
                    )
                }
                return new e(function(e) {
                    var o = !1;
                    return n(function() {
                        if (!o) {
                            try {
                                if (p(t, !1, function(t) {
                                    if (e.next(t),
                                    o)
                                        return f
                                }) === f)
                                    return
                            } catch (t) {
                                if (o)
                                    throw t;
                                return void e.error(t)
                            }
                            e.complete()
                        }
                    }),
                    function() {
                        o = !0
                    }
                }
                )
            },
            of: function() {
                for (var t = 0, e = arguments.length, o = new Array(e); t < e; )
                    o[t] = arguments[t++];
                return new ("function" == typeof this ? this : x)(function(t) {
                    var e = !1;
                    return n(function() {
                        if (!e) {
                            for (var a = 0; a < o.length; ++a)
                                if (t.next(o[a]),
                                e)
                                    return;
                            t.complete()
                        }
                    }),
                    function() {
                        e = !0
                    }
                }
                )
            }
        }),
        d(x.prototype, s, function() {
            return this
        }),
        a(a.G, {
            Observable: x
        }),
        t("./_set-species")("Observable")
    }
    , {
        "./_a-function": 13,
        "./_an-instance": 17,
        "./_an-object": 18,
        "./_core": 34,
        "./_export": 44,
        "./_for-of": 50,
        "./_global": 52,
        "./_hide": 54,
        "./_microtask": 79,
        "./_redefine-all": 102,
        "./_set-species": 111,
        "./_wks": 140
    }],
    310: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_core")
          , i = t("./_global")
          , n = t("./_species-constructor")
          , s = t("./_promise-resolve");
        a(a.P + a.R, "Promise", {
            finally: function(t) {
                var e = n(this, r.Promise || i.Promise)
                  , o = "function" == typeof t;
                return this.then(o ? function(o) {
                    return s(e, t()).then(function() {
                        return o
                    })
                }
                : t, o ? function(o) {
                    return s(e, t()).then(function() {
                        throw o
                    })
                }
                : t)
            }
        })
    }
    , {
        "./_core": 34,
        "./_export": 44,
        "./_global": 52,
        "./_promise-resolve": 100,
        "./_species-constructor": 115
    }],
    311: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_new-promise-capability")
          , i = t("./_perform");
        a(a.S, "Promise", {
            try: function(t) {
                var e = r.f(this)
                  , o = i(t);
                return (o.e ? e.reject : e.resolve)(o.v),
                e.promise
            }
        })
    }
    , {
        "./_export": 44,
        "./_new-promise-capability": 80,
        "./_perform": 99
    }],
    312: [function(t, e, o) {
        var a = t("./_metadata")
          , r = t("./_an-object")
          , i = a.key
          , n = a.set;
        a.exp({
            defineMetadata: function(t, e, o, a) {
                n(t, e, r(o), i(a))
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_metadata": 78
    }],
    313: [function(t, e, o) {
        var a = t("./_metadata")
          , r = t("./_an-object")
          , i = a.key
          , n = a.map
          , s = a.store;
        a.exp({
            deleteMetadata: function(t, e) {
                var o = arguments.length < 3 ? void 0 : i(arguments[2])
                  , a = n(r(e), o, !1);
                if (void 0 === a || !a.delete(t))
                    return !1;
                if (a.size)
                    return !0;
                var c = s.get(e);
                return c.delete(o),
                !!c.size || s.delete(e)
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_metadata": 78
    }],
    314: [function(t, e, o) {
        var a = t("./es6.set")
          , r = t("./_array-from-iterable")
          , i = t("./_metadata")
          , n = t("./_an-object")
          , s = t("./_object-gpo")
          , c = i.keys
          , l = i.key
          , u = function(t, e) {
            var o = c(t, e)
              , i = s(t);
            if (null === i)
                return o;
            var n = u(i, e);
            return n.length ? o.length ? r(new a(o.concat(n))) : n : o
        };
        i.exp({
            getMetadataKeys: function(t) {
                return u(n(t), arguments.length < 2 ? void 0 : l(arguments[1]))
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_array-from-iterable": 21,
        "./_metadata": 78,
        "./_object-gpo": 90,
        "./es6.set": 244
    }],
    315: [function(t, e, o) {
        var a = t("./_metadata")
          , r = t("./_an-object")
          , i = t("./_object-gpo")
          , n = a.has
          , s = a.get
          , c = a.key
          , l = function(t, e, o) {
            if (n(t, e, o))
                return s(t, e, o);
            var a = i(e);
            return null !== a ? l(t, a, o) : void 0
        };
        a.exp({
            getMetadata: function(t, e) {
                return l(t, r(e), arguments.length < 3 ? void 0 : c(arguments[2]))
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_metadata": 78,
        "./_object-gpo": 90
    }],
    316: [function(t, e, o) {
        var a = t("./_metadata")
          , r = t("./_an-object")
          , i = a.keys
          , n = a.key;
        a.exp({
            getOwnMetadataKeys: function(t) {
                return i(r(t), arguments.length < 2 ? void 0 : n(arguments[1]))
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_metadata": 78
    }],
    317: [function(t, e, o) {
        var a = t("./_metadata")
          , r = t("./_an-object")
          , i = a.get
          , n = a.key;
        a.exp({
            getOwnMetadata: function(t, e) {
                return i(t, r(e), arguments.length < 3 ? void 0 : n(arguments[2]))
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_metadata": 78
    }],
    318: [function(t, e, o) {
        var a = t("./_metadata")
          , r = t("./_an-object")
          , i = t("./_object-gpo")
          , n = a.has
          , s = a.key
          , c = function(t, e, o) {
            if (n(t, e, o))
                return !0;
            var a = i(e);
            return null !== a && c(t, a, o)
        };
        a.exp({
            hasMetadata: function(t, e) {
                return c(t, r(e), arguments.length < 3 ? void 0 : s(arguments[2]))
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_metadata": 78,
        "./_object-gpo": 90
    }],
    319: [function(t, e, o) {
        var a = t("./_metadata")
          , r = t("./_an-object")
          , i = a.has
          , n = a.key;
        a.exp({
            hasOwnMetadata: function(t, e) {
                return i(t, r(e), arguments.length < 3 ? void 0 : n(arguments[2]))
            }
        })
    }
    , {
        "./_an-object": 18,
        "./_metadata": 78
    }],
    320: [function(t, e, o) {
        var a = t("./_metadata")
          , r = t("./_an-object")
          , i = t("./_a-function")
          , n = a.key
          , s = a.set;
        a.exp({
            metadata: function(t, e) {
                return function(o, a) {
                    s(t, e, (void 0 !== a ? r : i)(o), n(a))
                }
            }
        })
    }
    , {
        "./_a-function": 13,
        "./_an-object": 18,
        "./_metadata": 78
    }],
    321: [function(t, e, o) {
        t("./_set-collection-from")("Set")
    }
    , {
        "./_set-collection-from": 108
    }],
    322: [function(t, e, o) {
        t("./_set-collection-of")("Set")
    }
    , {
        "./_set-collection-of": 109
    }],
    323: [function(t, e, o) {
        var a = t("./_export");
        a(a.P + a.R, "Set", {
            toJSON: t("./_collection-to-json")("Set")
        })
    }
    , {
        "./_collection-to-json": 31,
        "./_export": 44
    }],
    324: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_string-at")(!0);
        a(a.P, "String", {
            at: function(t) {
                return r(this, t)
            }
        })
    }
    , {
        "./_export": 44,
        "./_string-at": 117
    }],
    325: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_defined")
          , i = t("./_to-length")
          , n = t("./_is-regexp")
          , s = t("./_flags")
          , c = RegExp.prototype
          , l = function(t, e) {
            this._r = t,
            this._s = e
        };
        t("./_iter-create")(l, "RegExp String", function() {
            var t = this._r.exec(this._s);
            return {
                value: t,
                done: null === t
            }
        }),
        a(a.P, "String", {
            matchAll: function(t) {
                if (r(this),
                !n(t))
                    throw TypeError(t + " is not a regexp!");
                var e = String(this)
                  , o = "flags"in c ? String(t.flags) : s.call(t)
                  , a = new RegExp(t.source,~o.indexOf("g") ? o : "g" + o);
                return a.lastIndex = i(t.lastIndex),
                new l(a,e)
            }
        })
    }
    , {
        "./_defined": 39,
        "./_export": 44,
        "./_flags": 48,
        "./_is-regexp": 64,
        "./_iter-create": 66,
        "./_to-length": 129
    }],
    326: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_string-pad")
          , i = t("./_user-agent")
          , n = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
        a(a.P + a.F * n, "String", {
            padEnd: function(t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
            }
        })
    }
    , {
        "./_export": 44,
        "./_string-pad": 120,
        "./_user-agent": 136
    }],
    327: [function(t, e, o) {
        "use strict";
        var a = t("./_export")
          , r = t("./_string-pad")
          , i = t("./_user-agent")
          , n = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
        a(a.P + a.F * n, "String", {
            padStart: function(t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
            }
        })
    }
    , {
        "./_export": 44,
        "./_string-pad": 120,
        "./_user-agent": 136
    }],
    328: [function(t, e, o) {
        "use strict";
        t("./_string-trim")("trimLeft", function(t) {
            return function() {
                return t(this, 1)
            }
        }, "trimStart")
    }
    , {
        "./_string-trim": 122
    }],
    329: [function(t, e, o) {
        "use strict";
        t("./_string-trim")("trimRight", function(t) {
            return function() {
                return t(this, 2)
            }
        }, "trimEnd")
    }
    , {
        "./_string-trim": 122
    }],
    330: [function(t, e, o) {
        t("./_wks-define")("asyncIterator")
    }
    , {
        "./_wks-define": 138
    }],
    331: [function(t, e, o) {
        t("./_wks-define")("observable")
    }
    , {
        "./_wks-define": 138
    }],
    332: [function(t, e, o) {
        var a = t("./_export");
        a(a.S, "System", {
            global: t("./_global")
        })
    }
    , {
        "./_export": 44,
        "./_global": 52
    }],
    333: [function(t, e, o) {
        t("./_set-collection-from")("WeakMap")
    }
    , {
        "./_set-collection-from": 108
    }],
    334: [function(t, e, o) {
        t("./_set-collection-of")("WeakMap")
    }
    , {
        "./_set-collection-of": 109
    }],
    335: [function(t, e, o) {
        t("./_set-collection-from")("WeakSet")
    }
    , {
        "./_set-collection-from": 108
    }],
    336: [function(t, e, o) {
        t("./_set-collection-of")("WeakSet")
    }
    , {
        "./_set-collection-of": 109
    }],
    337: [function(t, e, o) {
        for (var a = t("./es6.array.iterator"), r = t("./_object-keys"), i = t("./_redefine"), n = t("./_global"), s = t("./_hide"), c = t("./_iterators"), l = t("./_wks"), u = l("iterator"), _ = l("toStringTag"), d = c.Array, p = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, f = r(p), h = 0; h < f.length; h++) {
            var m, v = f[h], g = p[v], b = n[v], y = b && b.prototype;
            if (y && (y[u] || s(y, u, d),
            y[_] || s(y, _, v),
            c[v] = d,
            g))
                for (m in a)
                    y[m] || i(y, m, a[m], !0)
        }
    }
    , {
        "./_global": 52,
        "./_hide": 54,
        "./_iterators": 70,
        "./_object-keys": 92,
        "./_redefine": 103,
        "./_wks": 140,
        "./es6.array.iterator": 153
    }],
    338: [function(t, e, o) {
        var a = t("./_export")
          , r = t("./_task");
        a(a.G + a.B, {
            setImmediate: r.set,
            clearImmediate: r.clear
        })
    }
    , {
        "./_export": 44,
        "./_task": 124
    }],
    339: [function(t, e, o) {
        var a = t("./_global")
          , r = t("./_export")
          , i = t("./_user-agent")
          , n = [].slice
          , s = /MSIE .\./.test(i)
          , c = function(t) {
            return function(e, o) {
                var a = arguments.length > 2
                  , r = !!a && n.call(arguments, 2);
                return t(a ? function() {
                    ("function" == typeof e ? e : Function(e)).apply(this, r)
                }
                : e, o)
            }
        };
        r(r.G + r.B + r.F * s, {
            setTimeout: c(a.setTimeout),
            setInterval: c(a.setInterval)
        })
    }
    , {
        "./_export": 44,
        "./_global": 52,
        "./_user-agent": 136
    }],
    340: [function(t, e, o) {
        t("./modules/es6.symbol"),
        t("./modules/es6.object.create"),
        t("./modules/es6.object.define-property"),
        t("./modules/es6.object.define-properties"),
        t("./modules/es6.object.get-own-property-descriptor"),
        t("./modules/es6.object.get-prototype-of"),
        t("./modules/es6.object.keys"),
        t("./modules/es6.object.get-own-property-names"),
        t("./modules/es6.object.freeze"),
        t("./modules/es6.object.seal"),
        t("./modules/es6.object.prevent-extensions"),
        t("./modules/es6.object.is-frozen"),
        t("./modules/es6.object.is-sealed"),
        t("./modules/es6.object.is-extensible"),
        t("./modules/es6.object.assign"),
        t("./modules/es6.object.is"),
        t("./modules/es6.object.set-prototype-of"),
        t("./modules/es6.object.to-string"),
        t("./modules/es6.function.bind"),
        t("./modules/es6.function.name"),
        t("./modules/es6.function.has-instance"),
        t("./modules/es6.parse-int"),
        t("./modules/es6.parse-float"),
        t("./modules/es6.number.constructor"),
        t("./modules/es6.number.to-fixed"),
        t("./modules/es6.number.to-precision"),
        t("./modules/es6.number.epsilon"),
        t("./modules/es6.number.is-finite"),
        t("./modules/es6.number.is-integer"),
        t("./modules/es6.number.is-nan"),
        t("./modules/es6.number.is-safe-integer"),
        t("./modules/es6.number.max-safe-integer"),
        t("./modules/es6.number.min-safe-integer"),
        t("./modules/es6.number.parse-float"),
        t("./modules/es6.number.parse-int"),
        t("./modules/es6.math.acosh"),
        t("./modules/es6.math.asinh"),
        t("./modules/es6.math.atanh"),
        t("./modules/es6.math.cbrt"),
        t("./modules/es6.math.clz32"),
        t("./modules/es6.math.cosh"),
        t("./modules/es6.math.expm1"),
        t("./modules/es6.math.fround"),
        t("./modules/es6.math.hypot"),
        t("./modules/es6.math.imul"),
        t("./modules/es6.math.log10"),
        t("./modules/es6.math.log1p"),
        t("./modules/es6.math.log2"),
        t("./modules/es6.math.sign"),
        t("./modules/es6.math.sinh"),
        t("./modules/es6.math.tanh"),
        t("./modules/es6.math.trunc"),
        t("./modules/es6.string.from-code-point"),
        t("./modules/es6.string.raw"),
        t("./modules/es6.string.trim"),
        t("./modules/es6.string.iterator"),
        t("./modules/es6.string.code-point-at"),
        t("./modules/es6.string.ends-with"),
        t("./modules/es6.string.includes"),
        t("./modules/es6.string.repeat"),
        t("./modules/es6.string.starts-with"),
        t("./modules/es6.string.anchor"),
        t("./modules/es6.string.big"),
        t("./modules/es6.string.blink"),
        t("./modules/es6.string.bold"),
        t("./modules/es6.string.fixed"),
        t("./modules/es6.string.fontcolor"),
        t("./modules/es6.string.fontsize"),
        t("./modules/es6.string.italics"),
        t("./modules/es6.string.link"),
        t("./modules/es6.string.small"),
        t("./modules/es6.string.strike"),
        t("./modules/es6.string.sub"),
        t("./modules/es6.string.sup"),
        t("./modules/es6.date.now"),
        t("./modules/es6.date.to-json"),
        t("./modules/es6.date.to-iso-string"),
        t("./modules/es6.date.to-string"),
        t("./modules/es6.date.to-primitive"),
        t("./modules/es6.array.is-array"),
        t("./modules/es6.array.from"),
        t("./modules/es6.array.of"),
        t("./modules/es6.array.join"),
        t("./modules/es6.array.slice"),
        t("./modules/es6.array.sort"),
        t("./modules/es6.array.for-each"),
        t("./modules/es6.array.map"),
        t("./modules/es6.array.filter"),
        t("./modules/es6.array.some"),
        t("./modules/es6.array.every"),
        t("./modules/es6.array.reduce"),
        t("./modules/es6.array.reduce-right"),
        t("./modules/es6.array.index-of"),
        t("./modules/es6.array.last-index-of"),
        t("./modules/es6.array.copy-within"),
        t("./modules/es6.array.fill"),
        t("./modules/es6.array.find"),
        t("./modules/es6.array.find-index"),
        t("./modules/es6.array.species"),
        t("./modules/es6.array.iterator"),
        t("./modules/es6.regexp.constructor"),
        t("./modules/es6.regexp.exec"),
        t("./modules/es6.regexp.to-string"),
        t("./modules/es6.regexp.flags"),
        t("./modules/es6.regexp.match"),
        t("./modules/es6.regexp.replace"),
        t("./modules/es6.regexp.search"),
        t("./modules/es6.regexp.split"),
        t("./modules/es6.promise"),
        t("./modules/es6.map"),
        t("./modules/es6.set"),
        t("./modules/es6.weak-map"),
        t("./modules/es6.weak-set"),
        t("./modules/es6.typed.array-buffer"),
        t("./modules/es6.typed.data-view"),
        t("./modules/es6.typed.int8-array"),
        t("./modules/es6.typed.uint8-array"),
        t("./modules/es6.typed.uint8-clamped-array"),
        t("./modules/es6.typed.int16-array"),
        t("./modules/es6.typed.uint16-array"),
        t("./modules/es6.typed.int32-array"),
        t("./modules/es6.typed.uint32-array"),
        t("./modules/es6.typed.float32-array"),
        t("./modules/es6.typed.float64-array"),
        t("./modules/es6.reflect.apply"),
        t("./modules/es6.reflect.construct"),
        t("./modules/es6.reflect.define-property"),
        t("./modules/es6.reflect.delete-property"),
        t("./modules/es6.reflect.enumerate"),
        t("./modules/es6.reflect.get"),
        t("./modules/es6.reflect.get-own-property-descriptor"),
        t("./modules/es6.reflect.get-prototype-of"),
        t("./modules/es6.reflect.has"),
        t("./modules/es6.reflect.is-extensible"),
        t("./modules/es6.reflect.own-keys"),
        t("./modules/es6.reflect.prevent-extensions"),
        t("./modules/es6.reflect.set"),
        t("./modules/es6.reflect.set-prototype-of"),
        t("./modules/es7.array.includes"),
        t("./modules/es7.array.flat-map"),
        t("./modules/es7.array.flatten"),
        t("./modules/es7.string.at"),
        t("./modules/es7.string.pad-start"),
        t("./modules/es7.string.pad-end"),
        t("./modules/es7.string.trim-left"),
        t("./modules/es7.string.trim-right"),
        t("./modules/es7.string.match-all"),
        t("./modules/es7.symbol.async-iterator"),
        t("./modules/es7.symbol.observable"),
        t("./modules/es7.object.get-own-property-descriptors"),
        t("./modules/es7.object.values"),
        t("./modules/es7.object.entries"),
        t("./modules/es7.object.define-getter"),
        t("./modules/es7.object.define-setter"),
        t("./modules/es7.object.lookup-getter"),
        t("./modules/es7.object.lookup-setter"),
        t("./modules/es7.map.to-json"),
        t("./modules/es7.set.to-json"),
        t("./modules/es7.map.of"),
        t("./modules/es7.set.of"),
        t("./modules/es7.weak-map.of"),
        t("./modules/es7.weak-set.of"),
        t("./modules/es7.map.from"),
        t("./modules/es7.set.from"),
        t("./modules/es7.weak-map.from"),
        t("./modules/es7.weak-set.from"),
        t("./modules/es7.global"),
        t("./modules/es7.system.global"),
        t("./modules/es7.error.is-error"),
        t("./modules/es7.math.clamp"),
        t("./modules/es7.math.deg-per-rad"),
        t("./modules/es7.math.degrees"),
        t("./modules/es7.math.fscale"),
        t("./modules/es7.math.iaddh"),
        t("./modules/es7.math.isubh"),
        t("./modules/es7.math.imulh"),
        t("./modules/es7.math.rad-per-deg"),
        t("./modules/es7.math.radians"),
        t("./modules/es7.math.scale"),
        t("./modules/es7.math.umulh"),
        t("./modules/es7.math.signbit"),
        t("./modules/es7.promise.finally"),
        t("./modules/es7.promise.try"),
        t("./modules/es7.reflect.define-metadata"),
        t("./modules/es7.reflect.delete-metadata"),
        t("./modules/es7.reflect.get-metadata"),
        t("./modules/es7.reflect.get-metadata-keys"),
        t("./modules/es7.reflect.get-own-metadata"),
        t("./modules/es7.reflect.get-own-metadata-keys"),
        t("./modules/es7.reflect.has-metadata"),
        t("./modules/es7.reflect.has-own-metadata"),
        t("./modules/es7.reflect.metadata"),
        t("./modules/es7.asap"),
        t("./modules/es7.observable"),
        t("./modules/web.timers"),
        t("./modules/web.immediate"),
        t("./modules/web.dom.iterable"),
        e.exports = t("./modules/_core")
    }
    , {
        "./modules/_core": 34,
        "./modules/es6.array.copy-within": 143,
        "./modules/es6.array.every": 144,
        "./modules/es6.array.fill": 145,
        "./modules/es6.array.filter": 146,
        "./modules/es6.array.find": 148,
        "./modules/es6.array.find-index": 147,
        "./modules/es6.array.for-each": 149,
        "./modules/es6.array.from": 150,
        "./modules/es6.array.index-of": 151,
        "./modules/es6.array.is-array": 152,
        "./modules/es6.array.iterator": 153,
        "./modules/es6.array.join": 154,
        "./modules/es6.array.last-index-of": 155,
        "./modules/es6.array.map": 156,
        "./modules/es6.array.of": 157,
        "./modules/es6.array.reduce": 159,
        "./modules/es6.array.reduce-right": 158,
        "./modules/es6.array.slice": 160,
        "./modules/es6.array.some": 161,
        "./modules/es6.array.sort": 162,
        "./modules/es6.array.species": 163,
        "./modules/es6.date.now": 164,
        "./modules/es6.date.to-iso-string": 165,
        "./modules/es6.date.to-json": 166,
        "./modules/es6.date.to-primitive": 167,
        "./modules/es6.date.to-string": 168,
        "./modules/es6.function.bind": 169,
        "./modules/es6.function.has-instance": 170,
        "./modules/es6.function.name": 171,
        "./modules/es6.map": 172,
        "./modules/es6.math.acosh": 173,
        "./modules/es6.math.asinh": 174,
        "./modules/es6.math.atanh": 175,
        "./modules/es6.math.cbrt": 176,
        "./modules/es6.math.clz32": 177,
        "./modules/es6.math.cosh": 178,
        "./modules/es6.math.expm1": 179,
        "./modules/es6.math.fround": 180,
        "./modules/es6.math.hypot": 181,
        "./modules/es6.math.imul": 182,
        "./modules/es6.math.log10": 183,
        "./modules/es6.math.log1p": 184,
        "./modules/es6.math.log2": 185,
        "./modules/es6.math.sign": 186,
        "./modules/es6.math.sinh": 187,
        "./modules/es6.math.tanh": 188,
        "./modules/es6.math.trunc": 189,
        "./modules/es6.number.constructor": 190,
        "./modules/es6.number.epsilon": 191,
        "./modules/es6.number.is-finite": 192,
        "./modules/es6.number.is-integer": 193,
        "./modules/es6.number.is-nan": 194,
        "./modules/es6.number.is-safe-integer": 195,
        "./modules/es6.number.max-safe-integer": 196,
        "./modules/es6.number.min-safe-integer": 197,
        "./modules/es6.number.parse-float": 198,
        "./modules/es6.number.parse-int": 199,
        "./modules/es6.number.to-fixed": 200,
        "./modules/es6.number.to-precision": 201,
        "./modules/es6.object.assign": 202,
        "./modules/es6.object.create": 203,
        "./modules/es6.object.define-properties": 204,
        "./modules/es6.object.define-property": 205,
        "./modules/es6.object.freeze": 206,
        "./modules/es6.object.get-own-property-descriptor": 207,
        "./modules/es6.object.get-own-property-names": 208,
        "./modules/es6.object.get-prototype-of": 209,
        "./modules/es6.object.is": 213,
        "./modules/es6.object.is-extensible": 210,
        "./modules/es6.object.is-frozen": 211,
        "./modules/es6.object.is-sealed": 212,
        "./modules/es6.object.keys": 214,
        "./modules/es6.object.prevent-extensions": 215,
        "./modules/es6.object.seal": 216,
        "./modules/es6.object.set-prototype-of": 217,
        "./modules/es6.object.to-string": 218,
        "./modules/es6.parse-float": 219,
        "./modules/es6.parse-int": 220,
        "./modules/es6.promise": 221,
        "./modules/es6.reflect.apply": 222,
        "./modules/es6.reflect.construct": 223,
        "./modules/es6.reflect.define-property": 224,
        "./modules/es6.reflect.delete-property": 225,
        "./modules/es6.reflect.enumerate": 226,
        "./modules/es6.reflect.get": 229,
        "./modules/es6.reflect.get-own-property-descriptor": 227,
        "./modules/es6.reflect.get-prototype-of": 228,
        "./modules/es6.reflect.has": 230,
        "./modules/es6.reflect.is-extensible": 231,
        "./modules/es6.reflect.own-keys": 232,
        "./modules/es6.reflect.prevent-extensions": 233,
        "./modules/es6.reflect.set": 235,
        "./modules/es6.reflect.set-prototype-of": 234,
        "./modules/es6.regexp.constructor": 236,
        "./modules/es6.regexp.exec": 237,
        "./modules/es6.regexp.flags": 238,
        "./modules/es6.regexp.match": 239,
        "./modules/es6.regexp.replace": 240,
        "./modules/es6.regexp.search": 241,
        "./modules/es6.regexp.split": 242,
        "./modules/es6.regexp.to-string": 243,
        "./modules/es6.set": 244,
        "./modules/es6.string.anchor": 245,
        "./modules/es6.string.big": 246,
        "./modules/es6.string.blink": 247,
        "./modules/es6.string.bold": 248,
        "./modules/es6.string.code-point-at": 249,
        "./modules/es6.string.ends-with": 250,
        "./modules/es6.string.fixed": 251,
        "./modules/es6.string.fontcolor": 252,
        "./modules/es6.string.fontsize": 253,
        "./modules/es6.string.from-code-point": 254,
        "./modules/es6.string.includes": 255,
        "./modules/es6.string.italics": 256,
        "./modules/es6.string.iterator": 257,
        "./modules/es6.string.link": 258,
        "./modules/es6.string.raw": 259,
        "./modules/es6.string.repeat": 260,
        "./modules/es6.string.small": 261,
        "./modules/es6.string.starts-with": 262,
        "./modules/es6.string.strike": 263,
        "./modules/es6.string.sub": 264,
        "./modules/es6.string.sup": 265,
        "./modules/es6.string.trim": 266,
        "./modules/es6.symbol": 267,
        "./modules/es6.typed.array-buffer": 268,
        "./modules/es6.typed.data-view": 269,
        "./modules/es6.typed.float32-array": 270,
        "./modules/es6.typed.float64-array": 271,
        "./modules/es6.typed.int16-array": 272,
        "./modules/es6.typed.int32-array": 273,
        "./modules/es6.typed.int8-array": 274,
        "./modules/es6.typed.uint16-array": 275,
        "./modules/es6.typed.uint32-array": 276,
        "./modules/es6.typed.uint8-array": 277,
        "./modules/es6.typed.uint8-clamped-array": 278,
        "./modules/es6.weak-map": 279,
        "./modules/es6.weak-set": 280,
        "./modules/es7.array.flat-map": 281,
        "./modules/es7.array.flatten": 282,
        "./modules/es7.array.includes": 283,
        "./modules/es7.asap": 284,
        "./modules/es7.error.is-error": 285,
        "./modules/es7.global": 286,
        "./modules/es7.map.from": 287,
        "./modules/es7.map.of": 288,
        "./modules/es7.map.to-json": 289,
        "./modules/es7.math.clamp": 290,
        "./modules/es7.math.deg-per-rad": 291,
        "./modules/es7.math.degrees": 292,
        "./modules/es7.math.fscale": 293,
        "./modules/es7.math.iaddh": 294,
        "./modules/es7.math.imulh": 295,
        "./modules/es7.math.isubh": 296,
        "./modules/es7.math.rad-per-deg": 297,
        "./modules/es7.math.radians": 298,
        "./modules/es7.math.scale": 299,
        "./modules/es7.math.signbit": 300,
        "./modules/es7.math.umulh": 301,
        "./modules/es7.object.define-getter": 302,
        "./modules/es7.object.define-setter": 303,
        "./modules/es7.object.entries": 304,
        "./modules/es7.object.get-own-property-descriptors": 305,
        "./modules/es7.object.lookup-getter": 306,
        "./modules/es7.object.lookup-setter": 307,
        "./modules/es7.object.values": 308,
        "./modules/es7.observable": 309,
        "./modules/es7.promise.finally": 310,
        "./modules/es7.promise.try": 311,
        "./modules/es7.reflect.define-metadata": 312,
        "./modules/es7.reflect.delete-metadata": 313,
        "./modules/es7.reflect.get-metadata": 315,
        "./modules/es7.reflect.get-metadata-keys": 314,
        "./modules/es7.reflect.get-own-metadata": 317,
        "./modules/es7.reflect.get-own-metadata-keys": 316,
        "./modules/es7.reflect.has-metadata": 318,
        "./modules/es7.reflect.has-own-metadata": 319,
        "./modules/es7.reflect.metadata": 320,
        "./modules/es7.set.from": 321,
        "./modules/es7.set.of": 322,
        "./modules/es7.set.to-json": 323,
        "./modules/es7.string.at": 324,
        "./modules/es7.string.match-all": 325,
        "./modules/es7.string.pad-end": 326,
        "./modules/es7.string.pad-start": 327,
        "./modules/es7.string.trim-left": 328,
        "./modules/es7.string.trim-right": 329,
        "./modules/es7.symbol.async-iterator": 330,
        "./modules/es7.symbol.observable": 331,
        "./modules/es7.system.global": 332,
        "./modules/es7.weak-map.from": 333,
        "./modules/es7.weak-map.of": 334,
        "./modules/es7.weak-set.from": 335,
        "./modules/es7.weak-set.of": 336,
        "./modules/web.dom.iterable": 337,
        "./modules/web.immediate": 338,
        "./modules/web.timers": 339
    }],
    341: [function(t, e, o) {
        function a(t, e) {
            for (; t && t.nodeType !== r; ) {
                if ("function" == typeof t.matches && t.matches(e))
                    return t;
                t = t.parentNode
            }
        }
        var r = 9;
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var i = Element.prototype;
            i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
        }
        e.exports = a
    }
    , {}],
    342: [function(t, e, o) {
        function a(t, e, o, a, r) {
            var n = i.apply(this, arguments);
            return t.addEventListener(o, n, r),
            {
                destroy: function() {
                    t.removeEventListener(o, n, r)
                }
            }
        }
        function r(t, e, o, r, i) {
            return "function" == typeof t.addEventListener ? a.apply(null, arguments) : "function" == typeof o ? a.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)),
            Array.prototype.map.call(t, function(t) {
                return a(t, e, o, r, i)
            }))
        }
        function i(t, e, o, a) {
            return function(o) {
                o.delegateTarget = n(o.target, e),
                o.delegateTarget && a.call(t, o)
            }
        }
        var n = t("./closest");
        e.exports = r
    }
    , {
        "./closest": 341
    }],
    343: [function(t, e, o) {
        "use strict";
        function a(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function i(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            return function(e, o, a) {
                return o && t(e.prototype, o),
                a && t(e, a),
                e
            }
        }()
          , s = function t(e, o, a) {
            null === e && (e = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(e, o);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(e);
                return null === i ? void 0 : t(i, o, a)
            }
            if ("value"in r)
                return r.value;
            var n = r.get;
            if (void 0 !== n)
                return n.call(a)
        }
          , c = t("eventos")
          , l = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(c)
          , u = function(t) {
            function e(t, o) {
                a(this, e);
                var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                i._opcoes = Object.assign({
                    largura: 510,
                    altura: 304,
                    elems: 1,
                    prev: !0,
                    usoDesfazer: 1,
                    usoRefazer: 1,
                    retina: 1,
                    quebra: 230
                }, o),
                i._elemBase = t,
                i._opcoes.larguraIni || (i._opcoes.larguraIni = i._opcoes.largura),
                i._opcoes.alturaIni || (i._opcoes.alturaIni = i._opcoes.altura),
                i._opcoes.usoDesfazer && i._opcoes.usoDesfazer instanceof Boolean && (i._opcoes.usoDesfazer = 1),
                i._opcoes.usoRefazer && i._opcoes.usoRefazer instanceof Boolean && (i._opcoes.usoRefazer = 1),
                i._opcoes.retina || (i._opcoes.retina = 1),
                i._liberado = !1,
                i._draw = !1,
                i._stack = "",
                i._stackArr = [],
                i._des_cod = [],
                i._des_cod_hist = [],
                i._codigoQuebra = !0,
                i._cor = 0,
                i._corValor = "x000000",
                i._borda = 4,
                i._tipo = 0,
                i._alpha = 1,
                i._bordaTemp = i._borda,
                i._alphaTemp = i._alpha,
                i._tolerancia = 20,
                i._camada = 0,
                i._histCamada = [],
                i._canvasHist = [],
                i._canvasHistElem = [],
                i._histPos = 0,
                i._undoQuant = 0,
                i._redoQuant = 0,
                i._histQuant = i._opcoes.usoDesfazer > i._opcoes.usoRefazer ? i._opcoes.usoDesfazer + 1 : i._opcoes.usoRefazer + 1,
                i._zoom = 1,
                i._zoomOrig = 1,
                i._zoomTela = i._opcoes.larguraIni / i._opcoes.largura,
                i._zoomPos = 1,
                i._fator = 1,
                i._cores = ["rgba(0,0,0,0)", "#000", "#666", "#8b0000", "#008b00", "#00008b", "#008b8b", "#8b8b00", "#8b4500", "#8b0a50", "#551a8b", "#548b54", "#8b6969", "#8b7b8b", "#fff", "#ccc", "#ff0000", "#00ff00", "#0000ff", "#00ffff", "#ffff00", "#ff7f00", "#ff1493", "#9b30ff", "#9aff9a", "#ffc1c1", "#ffe1ff"],
                i._xFirst,
                i._yFirst,
                i._xCoord,
                i._yCoord,
                i._canvasArr = [],
                i._canvasElemsArr = [];
                for (var n = 0; n < i._opcoes.elems; n++) {
                    var s = document.createElement("canvas");
                    s.width = i._opcoes.largura * i._opcoes.retina,
                    s.height = i._opcoes.altura * i._opcoes.retina;
                    var c = s.getContext("2d");
                    c.lineCap = "round",
                    c.lineJoin = "round",
                    c.fillStyle = "#000000",
                    c.strokeStyle = "#000000",
                    c.lineWidth = i._borda * i._opcoes.retina,
                    i._canvasArr.push(c),
                    i._canvasElemsArr.push(s),
                    t.appendChild(s)
                }
                if (i._canvasElem = i._canvasElemsArr[0],
                i._canvas = i._canvasArr[0],
                i._canvasLargura = i._canvasElem.width,
                i._canvasAltura = i._canvasElem.height,
                i._local = [i._canvas],
                i._opcoes.prev) {
                    i._canvasPrevElem = document.createElement("canvas"),
                    i._canvasPrevElem.width = i._opcoes.largura * i._opcoes.retina,
                    i._canvasPrevElem.height = i._opcoes.altura * i._opcoes.retina,
                    i._canvasPrevElem.style.position = "absolute",
                    i._canvasPrevElem.style.zIndex = 1,
                    i._canvasPrevElem.style.top = 0,
                    i._canvasPrevElem.style.left = 0,
                    i._canvasPrev = i._canvasPrevElem.getContext("2d"),
                    i._local.push(i._canvasPrev),
                    i._canvasPrev.lineCap = "round",
                    i._canvasPrev.lineJoin = "round",
                    i._canvasPrev.fillStyle = "#000000",
                    i._canvasPrev.strokeStyle = "#000000",
                    i._canvasPrev.lineWidth = i._borda * i._opcoes.retina,
                    t.appendChild(i._canvasPrevElem);
                    var l = i._opcoes.eventElem || i._canvasPrevElem;
                    l.addEventListener("touchstart", function(t) {
                        i._startDraw(t),
                        i._liberado && t.preventDefault()
                    }, !1),
                    l.addEventListener("touchmove", function(t) {
                        i._coordenada(t),
                        i._liberado && t.preventDefault()
                    }, !1),
                    l.addEventListener("touchend", function(t) {
                        i._endDraw(t),
                        i._liberado && t.preventDefault()
                    }, !1),
                    l.addEventListener("touchcancel", function(t) {
                        i._endDraw(t),
                        i._liberado && t.preventDefault()
                    }, !1),
                    i._opcoes.mobile || (l.addEventListener("mousedown", function(t) {
                        i._startDraw(t)
                    }, !1),
                    document.addEventListener("mousemove", function(t) {
                        i._coordenada(t),
                        !i._draw || 0 !== t.which && 0 !== t.buttons || i._endDraw(t)
                    }, !1),
                    document.addEventListener("mouseup", function(t) {
                        i._endDraw(t)
                    }, !1))
                }
                var u = void 0
                  , _ = void 0;
                if (i._opcoes.usoDesfazer || i._opcoes.usoRefazer)
                    for (var d = 0; d < i._histQuant; d++)
                        u = document.createElement("canvas"),
                        u.width = i._canvasLargura,
                        u.height = i._canvasAltura,
                        u.style.display = "none",
                        i._canvasHistElem.push(u),
                        _ = u.getContext("2d"),
                        i._local.push(_),
                        _.lineCap = "round",
                        _.lineJoin = "round",
                        _.fillStyle = "#000000",
                        _.strokeStyle = "#000000",
                        _.lineWidth = i._borda * i._opcoes.retina,
                        i._canvasHist.push(_);
                return i.zoom = 1,
                i
            }
            return i(e, t),
            n(e, [{
                key: "borracha",
                value: function(t, e, o) {
                    t -= 3 * this._borda,
                    e -= 3 * this._borda,
                    t *= this._opcoes.retina,
                    e *= this._opcoes.retina;
                    var a = (6 * this._borda + 1) * this._opcoes.retina;
                    this._local[o].clearRect(t, e, a, a)
                }
            }, {
                key: "linha",
                value: function(t, e, o, a, r) {
                    t *= this._opcoes.retina,
                    e *= this._opcoes.retina,
                    o *= this._opcoes.retina,
                    a *= this._opcoes.retina,
                    this._local[r].beginPath(),
                    this._local[r].lineWidth = this._borda * this._opcoes.retina,
                    this._local[r].moveTo(t, e),
                    this._local[r].lineTo(o, a),
                    this._local[r].stroke(),
                    this._local[r].closePath()
                }
            }, {
                key: "linhaSeq",
                value: function(t, e) {
                    this._local[e].beginPath(),
                    this._local[e].moveTo(t[0][0] * this._opcoes.retina, t[0][1] * this._opcoes.retina);
                    var o = void 0;
                    for (o = 1; o < t.length; o++)
                        this._local[e].quadraticCurveTo(t[o - 1][0] * this._opcoes.retina, t[o - 1][1] * this._opcoes.retina, (t[o - 1][0] + (t[o][0] - t[o - 1][0]) / 2) * this._opcoes.retina, (t[o - 1][1] + (t[o][1] - t[o - 1][1]) / 2) * this._opcoes.retina);
                    this._local[e].lineTo(t[o - 1][0] * this._opcoes.retina, t[o - 1][1] * this._opcoes.retina),
                    this._local[e].stroke()
                }
            }, {
                key: "retanguloF",
                value: function(t, e, o, a, r) {
                    t *= this._opcoes.retina,
                    e *= this._opcoes.retina,
                    o *= this._opcoes.retina,
                    a *= this._opcoes.retina,
                    this._local[r].fillRect(t, e, o, a)
                }
            }, {
                key: "retanguloB",
                value: function(t, e, o, a, r) {
                    t *= this._opcoes.retina,
                    e *= this._opcoes.retina,
                    o *= this._opcoes.retina,
                    a *= this._opcoes.retina,
                    this._local[r].strokeRect(t, e, o, a)
                }
            }, {
                key: "elipseF",
                value: function(t, e, o, a, r) {
                    t *= this._opcoes.retina,
                    e *= this._opcoes.retina,
                    o *= this._opcoes.retina,
                    a *= this._opcoes.retina;
                    var i = (Math.sqrt(2) - 1) / 3 * 4;
                    this._local[r].beginPath(),
                    this._local[r].moveTo(t, e - a),
                    this._local[r].bezierCurveTo(t + i * o, e - a, t + o, e - i * a, t + o, e),
                    this._local[r].bezierCurveTo(t + o, e + i * a, t + i * o, e + a, t, e + a),
                    this._local[r].bezierCurveTo(t - i * o, e + a, t - o, e + i * a, t - o, e),
                    this._local[r].bezierCurveTo(t - o, e - i * a, t - i * o, e - a, t, e - a),
                    this._local[r].fill()
                }
            }, {
                key: "elipseB",
                value: function(t, e, o, a, r) {
                    t *= this._opcoes.retina,
                    e *= this._opcoes.retina,
                    o *= this._opcoes.retina,
                    a *= this._opcoes.retina;
                    var i = (Math.sqrt(2) - 1) / 3 * 4;
                    this._local[r].beginPath(),
                    this._local[r].moveTo(t, e - a),
                    this._local[r].bezierCurveTo(t + i * o, e - a, t + o, e - i * a, t + o, e),
                    this._local[r].bezierCurveTo(t + o, e + i * a, t + i * o, e + a, t, e + a),
                    this._local[r].bezierCurveTo(t - i * o, e + a, t - o, e + i * a, t - o, e),
                    this._local[r].bezierCurveTo(t - o, e - i * a, t - i * o, e - a, t, e - a),
                    this._local[r].stroke()
                }
            }, {
                key: "contaGotas",
                value: function(t) {
                    for (var e = this.getPixel(Math.round(t[0]), Math.round(t[1])), o = (e.b + 256 * e.g + 65536 * e.r).toString(16).toUpperCase(); o.length < 6; )
                        o = "0" + o;
                    return "x" + o
                }
            }, {
                key: "baldeF",
                value: function(t) {
                    var e = void 0
                      , o = void 0
                      , a = void 0
                      , r = void 0;
                    this._canvas.beginPath();
                    for (var i = 0; i < t.length; i += 4)
                        e = parseInt(t[i]) * this._opcoes.retina,
                        o = parseInt(t[i + 1]) * this._opcoes.retina,
                        a = parseInt(t[i + 2]) * this._opcoes.retina,
                        r = parseInt(t[i + 3]) * this._opcoes.retina,
                        this._canvas.rect(e, o, a, r);
                    this._canvas.fill()
                }
            }, {
                key: "balde",
                value: function(t, o) {
                    var a = this
                      , r = function(t, e, o) {
                        var a = e
                          , r = o;
                        if (i(e, o, t)) {
                            for (; i(a + 1, r, t); )
                                a++;
                            var n = a;
                            do {
                                for (a = e - 1,
                                r++; i(a + 1, r, t) && a + 1 <= n; )
                                    a++
                            } while (a == n);
                            r--;
                            return {
                                x: e,
                                y: o,
                                w: n - e,
                                h: r - o
                            }
                        }
                        return {
                            w: -1,
                            h: -1
                        }
                    }
                      , i = function(t, e, o) {
                        if (d[t][e])
                            return !1;
                        var r = 4 * (t + e * a._canvasLargura)
                          , i = Math.abs(o[0] - p[r])
                          , n = Math.abs(o[1] - p[r + 1])
                          , s = Math.abs(o[2] - p[r + 2])
                          , c = Math.abs(o[3] - p[r + 3]);
                        return i < a._tolerancia && n < a._tolerancia && s < a._tolerancia && c < a._tolerancia
                    }
                      , n = function(t) {
                        for (var e = t[0], o = t[1], r = e + t[2], i = o + t[3], n = e; n < r; n++)
                            for (var s = o; s < i; s++)
                                d[n][s] = !0;
                        return t[0] = Math.round(t[0] / a._opcoes.retina),
                        t[1] = Math.round(t[1] / a._opcoes.retina),
                        t[2] = Math.round(t[2] / a._opcoes.retina),
                        t[3] = Math.round(t[3] / a._opcoes.retina),
                        t.join("#")
                    };
                    t = Math.round(t) * this._opcoes.retina,
                    o = Math.round(o) * this._opcoes.retina;
                    var c = this._cor
                      , l = c % 256;
                    c = Math.floor(c / 256);
                    var u = c % 256;
                    c = Math.floor(c / 256);
                    var _ = c
                      , d = void 0;
                    !function() {
                        d = [];
                        for (var t = -1; t <= a._canvasLargura; t++)
                            d[t] = [];
                        d[-1] = [],
                        d[a._canvasLargura] = [];
                        for (var e = -1; e <= a._canvasAltura; e++)
                            d[-1][e] = 1,
                            d[a._canvasLargura][e] = 1;
                        for (var o = 0; o < a._canvasLargura; o++)
                            d[o][-1] = 1,
                            d[o][a._canvasAltura] = 1
                    }();
                    for (var p = this._canvas.getImageData(0, 0, this._canvasLargura, this._canvasAltura).data, f = 4 * (t + o * this._canvasLargura), h = [p[f], p[f + 1], p[f + 2], p[f + 3]], m = [], v = 0; v <= this._canvasLargura; v++)
                        m[v] = [];
                    if (!i(t, o, [_, u, l, 255])) {
                        for (; i(t - 1, o, h); )
                            t--;
                        for (; i(t, o - 1, h); )
                            o--;
                        var g = r(h, t, o)
                          , b = {
                            x: t,
                            y: o,
                            w: g.w,
                            h: g.h,
                            ref: 0,
                            andada: 0
                        }
                          , y = void 0
                          , x = g.w
                          , k = void 0;
                        this._canvas.fillRect(g.x, g.y, g.w + 1, g.h + 1);
                        var j = n([g.x, g.y, g.w + 1, g.h + 1]);
                        do {
                            for (y = 0,
                            2 == b.ref && (y += b.andada); y <= b.h; )
                                g = function(t, e, o) {
                                    var a = e
                                      , r = o;
                                    if (i(e, o, t)) {
                                        for (; i(a, r - 1, t); )
                                            r--;
                                        var n = r;
                                        do {
                                            for (r = o + 1,
                                            a++; i(a, r - 1, t) && r - 1 >= n; )
                                                r--
                                        } while (r == n);
                                        a--;
                                        return {
                                            x: e,
                                            y: n,
                                            w: a - e,
                                            h: o - n
                                        }
                                    }
                                    return {
                                        w: -1,
                                        h: -1
                                    }
                                }(h, b.x + b.w + 1, b.y + b.h - y),
                                k = g.h,
                                -1 != k ? (m[k].push({
                                    x: g.x,
                                    y: g.y,
                                    w: g.w,
                                    h: g.h,
                                    ref: 1,
                                    andada: b.h + 1 - y
                                }),
                                this._canvas.fillRect(g.x, g.y, g.w + 1, g.h + 1),
                                j += "#" + n([g.x, g.y, g.w + 1, g.h + 1]),
                                k > x && (x = k),
                                y += k) : y++;
                            for (y = 0,
                            1 == b.ref && (y += b.andada); y <= b.h; )
                                g = function(t, e, o) {
                                    var a = e
                                      , r = o;
                                    if (i(e, o, t)) {
                                        for (; i(a, r + 1, t); )
                                            r++;
                                        var n = r;
                                        do {
                                            for (r = o - 1,
                                            a--; i(a, r + 1, t) && r + 1 <= n; )
                                                r++
                                        } while (r == n);
                                        a++;
                                        return {
                                            x: a,
                                            y: o,
                                            w: e - a,
                                            h: n - o
                                        }
                                    }
                                    return {
                                        w: -1,
                                        h: -1
                                    }
                                }(h, b.x - 1, b.y + y),
                                k = g.h,
                                -1 != k ? (m[k].push({
                                    x: g.x,
                                    y: g.y,
                                    w: g.w,
                                    h: g.h,
                                    ref: 2,
                                    andada: b.h + 1 - y
                                }),
                                this._canvas.fillRect(g.x, g.y, g.w + 1, g.h + 1),
                                j += "#" + n([g.x, g.y, g.w + 1, g.h + 1]),
                                k > x && (x = k),
                                y += k) : y++;
                            for (y = 0,
                            4 == b.ref && (y += b.andada); y <= b.w; )
                                g = r(h, b.x + y, b.y + b.h + 1),
                                k = g.w,
                                -1 != k ? (m[k].push({
                                    x: g.x,
                                    y: g.y,
                                    w: g.w,
                                    h: g.h,
                                    ref: 3,
                                    andada: b.w + 1 - y
                                }),
                                this._canvas.fillRect(g.x, g.y, g.w + 1, g.h + 1),
                                j += "#" + n([g.x, g.y, g.w + 1, g.h + 1]),
                                k > x && (x = k),
                                y += k) : y++;
                            for (y = 0,
                            3 == b.ref && (y += b.andada); y <= b.w; )
                                g = function(t, e, o) {
                                    var a = e
                                      , r = o;
                                    if (i(e, o, t)) {
                                        for (; i(a - 1, r, t); )
                                            a--;
                                        var n = a;
                                        do {
                                            for (a = e + 1,
                                            r--; i(a - 1, r, t) && a - 1 >= n; )
                                                a--
                                        } while (a == n);
                                        r++;
                                        return {
                                            x: n,
                                            y: r,
                                            w: e - n,
                                            h: o - r
                                        }
                                    }
                                    return {
                                        w: -1,
                                        h: -1
                                    }
                                }(h, b.x + b.w - y, b.y - 1),
                                k = g.w,
                                -1 != k ? (m[k].push({
                                    x: g.x,
                                    y: g.y,
                                    w: g.w,
                                    h: g.h,
                                    ref: 4,
                                    andada: b.w + 1 - y
                                }),
                                this._canvas.fillRect(g.x, g.y, g.w + 1, g.h + 1),
                                j += "#" + n([g.x, g.y, g.w + 1, g.h + 1]),
                                k > x && (x = k),
                                y += k) : y++;
                            for (b = m[x].pop(); null == b && x > 0; )
                                b = m[--x].pop()
                        } while (null != b);
                        var w = "3@" + j;
                        this._des_cod.push(w),
                        s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "codigo", w)
                    }
                }
            }, {
                key: "_startDraw",
                value: function(t) {
                    if (!this._draw && this._liberado) {
                        switch (this._coordenada(t),
                        s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "coord", this._xCoord, this._yCoord, !1),
                        this._draw = !0,
                        this._xFirst = this._xCoord,
                        this._yFirst = this._yCoord,
                        this._tipo) {
                        case 0:
                            this._stack = this._xFirst + "#" + this._yFirst,
                            this._stackArr = [[this._xFirst, this._yFirst]];
                            break;
                        case 7:
                            this.balde(this._xFirst, this._yFirst),
                            this._draw = !1,
                            this.salvarEstado(!1);
                            break;
                        case 8:
                            this.mudaCor(this.contaGotas([this._xFirst, this._yFirst]), !0),
                            s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "selCor"),
                            this._draw = !1;
                            break;
                        case 1:
                            this._stack = this._xFirst + "#" + this._yFirst,
                            this.borracha(this._xCoord, this._yCoord, 0, !0)
                        }
                        8 != this._tipo && s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "startDraw")
                    }
                }
            }, {
                key: "_coordenada",
                value: function(t) {
                    if (this._liberado) {
                        var o = document.body.getBoundingClientRect()
                          , a = (this._opcoes.eventElem || this._canvasPrevElem).getBoundingClientRect()
                          , r = {
                            x: a.left - o.left,
                            y: a.top - o.top
                        };
                        if (r.x *= this._zoomPos,
                        r.y *= this._zoomPos,
                        t && t.touches ? (this._xCoord = t.touches[0].clientX + document.body.scrollLeft - r.x,
                        this._yCoord = t.touches[0].clientY + document.body.scrollTop - r.y) : window.event ? (this._xCoord = event.clientX + document.body.scrollLeft - r.x,
                        this._yCoord = event.clientY + document.body.scrollTop - r.y) : document.layers ? (this._xCoord = t.x + document.body.scrollLeft - r.x,
                        this._yCoord = t.y + document.body.scrollTop - r.y) : (this._xCoord = t.clientX + document.body.scrollLeft - r.x,
                        this._yCoord = t.clientY + document.body.scrollTop - r.y),
                        this._xCoord = Math.round(this._xCoord / this._zoom / this._fator / this._zoomTela),
                        this._yCoord = Math.round(this._yCoord / this._zoom / this._fator / this._zoomTela),
                        this._draw || (this._xCoord >= 0 && this._xCoord < this._canvasLargura && this._yCoord >= 0 && this._yCoord < this._canvasAltura ? s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "coord", this._xCoord, this._yCoord, !0) : s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "coord", this._xCoord, this._yCoord, !1)),
                        this._canvasPrevElem && 1 == this._tipo) {
                            var i = this._xCoord - 3 * this._borda
                              , n = this._yCoord - 3 * this._borda
                              , c = 6 * this._borda + 1;
                            this._canvasPrev.clearRect(0, 0, this._canvasLargura, this._canvasAltura),
                            this.desenhar(i, n, i + c, n + c, 2, 1, !1),
                            this.desenhar(i, n, i + c, n + c, 3, 1, !1)
                        }
                        if (this._draw && this._liberado)
                            if (0 == this._tipo) {
                                if (this._codigoQuebra && this._stack.length > this._opcoes.quebra) {
                                    var l = "2@" + this._stack;
                                    this._des_cod.push(l),
                                    s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "codigo", l),
                                    s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "quebra"),
                                    this._stack = this._xFirst + "#" + this._yFirst,
                                    this.salvarEstado(!1)
                                }
                                this._stack += "#" + this._xCoord + "#" + this._yCoord,
                                this._stackArr.push([this._xCoord, this._yCoord]),
                                this._canvasPrev.clearRect(0, 0, this._canvasLargura, this._canvasAltura),
                                this.linhaSeq(this._stackArr, 1),
                                this._xFirst = this._xCoord,
                                this._yFirst = this._yCoord
                            } else if (1 == this._tipo) {
                                if (this._stack.length > 230) {
                                    var u = "21@" + this._stack;
                                    this._des_cod.push(u),
                                    s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "codigo", u),
                                    this._stack = this._xCoord + "#" + this._yCoord
                                }
                                this.borracha(this._xCoord, this._yCoord, 0, !0),
                                this._stack += "#" + this._xCoord + "#" + this._yCoord
                            } else
                                this._canvasPrev.clearRect(0, 0, this._canvasLargura, this._canvasAltura),
                                this.desenhar(this._xFirst, this._yFirst, this._xCoord, this._yCoord, this._tipo, 1, !1)
                    }
                }
            }, {
                key: "desenhar",
                value: function(t, o, a, r, i, n, c) {
                    if (t != a || o != r) {
                        var l = void 0
                          , u = void 0
                          , _ = void 0
                          , d = void 0;
                        switch (t >= a ? (l = a,
                        u = t) : (l = t,
                        u = a),
                        o >= r ? (_ = r,
                        d = o) : (_ = o,
                        d = r),
                        i) {
                        case 6:
                            this.linha(t, o, a, r, n);
                            break;
                        case 2:
                            if (l == u || _ == d) {
                                c = !1;
                                break
                            }
                            this.retanguloF(l, _, u - l, d - _, n);
                            break;
                        case 3:
                            this.retanguloB(l, _, u - l, d - _, n);
                            break;
                        case 4:
                            if (l == u || _ == d) {
                                c = !1;
                                break
                            }
                            var p = Math.floor((u - l) / 2)
                              , f = Math.floor((d - _) / 2)
                              , h = Math.round(l + p)
                              , m = Math.round(_ + f);
                            this.elipseF(h, m, p, f, n);
                            break;
                        case 5:
                            var v = Math.floor((u - l) / 2)
                              , g = Math.floor((d - _) / 2)
                              , b = Math.round(l + v)
                              , y = Math.round(_ + g);
                            this.elipseB(b, y, v, g, n)
                        }
                        if (c) {
                            var x = "1@" + i + "#" + t + "#" + o + "#" + a + "#" + r;
                            this._des_cod.push(x),
                            s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "codigo", x)
                        }
                    }
                }
            }, {
                key: "_endDraw",
                value: function() {
                    if (this._draw && this._liberado) {
                        var t = void 0;
                        if (0 == this._tipo) {
                            var o = this._stack.split("#");
                            if (2 == o.length) {
                                var a = Math.round(this._bordaTemp / 2)
                                  , r = 2 * a;
                                o[0] = parseInt(o[0]) - a,
                                o[1] = parseInt(o[1]) - a,
                                o[2] = o[0] + r,
                                o[3] = o[1] + r,
                                this.desenhar(o[0], o[1], o[2], o[3], 4, 0, !0)
                            } else
                                t = "2@" + this._stack,
                                this._des_cod.push(t),
                                this.linhaSeq(this._stackArr, 0),
                                this._canvasPrev.clearRect(0, 0, this._canvasLargura, this._canvasAltura),
                                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "codigo", t)
                        } else
                            1 == this._tipo ? (t = "21@" + this._stack,
                            this._des_cod.push(t),
                            s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "codigo", t)) : (this.desenhar(this._xFirst, this._yFirst, this._xCoord, this._yCoord, this._tipo, 0, !0),
                            this._canvasPrev.clearRect(0, 0, this._canvasLargura, this._canvasAltura));
                        this.salvarEstado(!1),
                        this._draw = !1,
                        this._borda != this._bordaTemp && this.mudaBorda(this._bordaTemp, !0),
                        this._alpha != this._alphaTemp && this.mudaAlpha(this._alphaTemp, !0),
                        s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "endDraw")
                    }
                }
            }, {
                key: "mudaOpcao",
                value: function(t) {
                    1 == t ? (this._canvas.fillStyle = "#FFFFFF",
                    this._canvasPrevElem && this._liberado && (this._canvasPrev.lineWidth = 2 * this._opcoes.retina,
                    this._canvasPrev.globalAlpha = 1,
                    this._canvasPrev.strokeStyle = "#000000",
                    this._canvasPrev.fillStyle = "rgba(255,255,255,0.8)")) : 1 == this._tipo && (this._canvas.fillStyle = this._converterCor(this._cor, !0),
                    this._canvasPrevElem && (this._canvasPrev.clearRect(0, 0, this._canvasLargura, this._canvasAltura),
                    this._canvasPrev.lineWidth = this._borda * this._opcoes.retina,
                    this._canvasPrev.globalAlpha = this._alpha,
                    this._canvasPrev.fillStyle = this._canvas.fillStyle,
                    this._canvasPrev.strokeStyle = this._canvas.fillStyle)),
                    this._tipo = t
                }
            }, {
                key: "mudaBorda",
                value: function(t, o) {
                    if (this._draw)
                        this._bordaTemp = t;
                    else if (this._canvas.lineWidth = t * this._opcoes.retina,
                    null != this._canvasPrevElem && 1 != this._tipo && (this._canvasPrev.lineWidth = t * this._opcoes.retina),
                    this._borda = t,
                    this._bordaTemp = t,
                    o) {
                        var a = "6@" + t;
                        this._des_cod.push(a),
                        s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "codigo", a)
                    }
                }
            }, {
                key: "mudaAlpha",
                value: function(t, o) {
                    if (this._draw)
                        this._alphaTemp = t;
                    else if (this._canvas.globalAlpha = t,
                    null != this._canvasPrevElem && 1 != this._tipo && (this._canvasPrev.globalAlpha = t),
                    this._alpha = t,
                    this._alphaTemp = t,
                    o) {
                        var a = "27@" + t;
                        this._des_cod.push(a),
                        s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "codigo", a)
                    }
                }
            }, {
                key: "mudaCor",
                value: function(t, o) {
                    var a = parseInt(t)
                      , r = void 0;
                    if (isNaN(a)) {
                        if (-1 == t.search(/^x[0-9A-F]{6}$/))
                            return;
                        a = parseInt(t.replace("x", ""), 16),
                        r = this._converterCor(a, !0)
                    } else
                        r = this._cores[a];
                    if (this._canvas.strokeStyle = r,
                    null != this._canvasPrevElem && 1 != this._tipo && (this._canvasPrev.strokeStyle = r,
                    this._canvasPrev.fillStyle = r),
                    1 != this._tipo && (this._canvas.fillStyle = r),
                    this._cor = a,
                    this._corValor = t,
                    o) {
                        var i = "5@" + t;
                        this._des_cod.push(i),
                        s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "codigo", i)
                    }
                }
            }, {
                key: "limparTela",
                value: function(t, o) {
                    if (this._canvas.globalAlpha = 1,
                    this.transparencia(),
                    this._canvas.fillStyle = this._converterCor(this._cor, !0),
                    t && (this._des_cod = ["5@" + this._converterCor(this._cor, !0).replace("#", "x"), "6@" + this._borda, "27@" + this._alpha],
                    o || s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "codigo", "4@")),
                    this._draw = !1,
                    t) {
                        for (var a = 0; a < this._histQuant; a++)
                            this._des_cod_hist[a] = "";
                        this.salvarEstado(!0)
                    }
                    this._canvas.globalAlpha = this._alpha
                }
            }, {
                key: "limparTelaPrev",
                value: function(t, e, o, a) {
                    this._canvasPrevElem && (void 0 === t ? (t = 0,
                    e = 0,
                    o = this._canvasLargura,
                    a = this._canvasAltura) : (t *= this._opcoes.retina,
                    e *= this._opcoes.retina,
                    o *= this._opcoes.retina,
                    a *= this._opcoes.retina),
                    this._canvasPrev.clearRect(t, e, o, a))
                }
            }, {
                key: "transparencia",
                value: function() {
                    this._canvas.clearRect(0, 0, this._canvasLargura, this._canvasAltura),
                    this._canvasPrevElem && this._canvasPrev.clearRect(0, 0, this._canvasLargura, this._canvasAltura)
                }
            }, {
                key: "desfazer",
                value: function(t) {
                    return !(!this._opcoes.usoDesfazer || !this._undoQuant) && (this._draw && this._endDraw(),
                    this._opcoes.usoRefazer && this._redoQuant++,
                    --this._histPos < 0 && (this._histPos = this._histQuant - 1),
                    this.transparencia(),
                    this._canvas.globalAlpha = 1,
                    this._canvas.drawImage(this._canvasHistElem[this._histPos], 0, 0),
                    this._canvas.globalAlpha = this._alpha,
                    this._des_cod = this._des_cod_hist[this._histPos].split("|"),
                    t && s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "codigo", "31@0"),
                    this.mudaBorda(this._borda, !0),
                    this.mudaAlpha(this._alpha, !0),
                    this.mudaCor(this._corValor, !0),
                    this._undoQuant--,
                    !0)
                }
            }, {
                key: "refazer",
                value: function(t) {
                    return !(!this._opcoes.usoRefazer || !this._redoQuant) && (this._draw && this._endDraw(),
                    this._opcoes.usoDesfazer && this._undoQuant++,
                    this._histPos = (this._histPos + 1) % this._histQuant,
                    this._baseDiferente ? this.transparencia() : (this.transparencia(),
                    this._canvas.globalAlpha = 1,
                    this._canvas.drawImage(this._canvasHistElem[this._histPos], 0, 0),
                    this._canvas.globalAlpha = this._alpha),
                    this._des_cod = this._des_cod_hist[this._histPos].split("|"),
                    t && s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "codigo", "31@1"),
                    this.mudaBorda(this._borda, !0),
                    this.mudaAlpha(this._alpha, !0),
                    this.mudaCor(this._corValor, !0),
                    this._redoQuant--,
                    !0)
                }
            }, {
                key: "salvarEstado",
                value: function(t) {
                    this._opcoes.usoDesfazer && (t ? (this._histPos = 0,
                    this._undoQuant = 0) : this._histPos = (this._histPos + 1) % this._histQuant,
                    this._redoQuant = 0,
                    this._canvasHist[this._histPos].clearRect(0, 0, this._canvasLargura, this._canvasAltura),
                    this._canvasHist[this._histPos].drawImage(this._canvasElem, 0, 0),
                    this._histCamada[this._histPos] = this._camada,
                    this._des_cod_hist[this._histPos] = this._des_cod.join("|"),
                    !t && ++this._undoQuant > this._opcoes.usoDesfazer && (this._undoQuant = this._opcoes.usoDesfazer))
                }
            }, {
                key: "_converterCor",
                value: function(t, e) {
                    for (var o = t.toString(16).toUpperCase(); o.length < 6; )
                        o = "0" + o;
                    return e ? "#" + o : "x" + o
                }
            }, {
                key: "getPixel",
                value: function(t, e) {
                    var o = this._local[0].getImageData(t * this._opcoes.retina, e * this._opcoes.retina, 1, 1).data
                      , a = o[3] / 255;
                    return {
                        r: Math.ceil(o[0] * a + 255 * (1 - a)),
                        g: Math.ceil(o[1] * a + 255 * (1 - a)),
                        b: Math.ceil(o[2] * a + 255 * (1 - a))
                    }
                }
            }, {
                key: "salvar",
                value: function(t) {
                    return !!this._canvasElem.toDataURL && this._canvasElem.toDataURL(t)
                }
            }, {
                key: "comprimir",
                value: function() {
                    for (var t = void 0, e = -1, o = 0; o < this._des_cod.length; o++)
                        t = parseInt(this._des_cod[o]),
                        e != t || 5 != t && 6 != t && 27 != t ? e = t : (this._des_cod.splice(o - 1, 1),
                        o--)
                }
            }, {
                key: "hasCanvasPrev",
                value: function() {
                    return !!this._canvasPrevElem
                }
            }, {
                key: "liberar",
                value: function(t) {
                    t != this._liberado && (this._liberado = t,
                    t ? (this._canvasElem.style.cursor = "crosshair",
                    this._canvasPrevElem && (this._canvasPrevElem.style.cursor = "crosshair")) : (this._canvasElem.style.cursor = "default",
                    this._canvasPrevElem && (this._canvasPrevElem.style.cursor = "default")))
                }
            }, {
                key: "remover",
                value: function() {
                    for (var t = 0; t < this._canvasElemsArr.length; t++)
                        this._elemBase.removeChild(this._canvasElemsArr[t]);
                    this._canvasPrevElem && this._elemBase.removeChild(this._canvasPrevElem)
                }
            }, {
                key: "sequencia",
                get: function() {
                    return this._des_cod.join("|")
                },
                set: function(t) {
                    this._des_cod = t.split("|")
                }
            }, {
                key: "zoom",
                get: function() {
                    return this._zoomOrig
                },
                set: function(t) {
                    this._canvasElem.style.width = Math.round(this._opcoes.larguraIni * t * this._fator) + "px",
                    this._canvasElem.style.height = Math.round(this._opcoes.alturaIni * t * this._fator) + "px",
                    this._canvasPrevElem && (this._canvasPrevElem.style.width = Math.round(this._opcoes.larguraIni * t * this._fator) + "px",
                    this._canvasPrevElem.style.height = Math.round(this._opcoes.alturaIni * t * this._fator) + "px"),
                    this._zoomOrig = t,
                    this._zoom = t
                }
            }, {
                key: "liberado",
                get: function() {
                    return this._liberado
                }
            }, {
                key: "opcao",
                get: function() {
                    return this._tipo
                }
            }, {
                key: "cor",
                get: function() {
                    return this._converterCor(this._cor, !1)
                }
            }, {
                key: "corReal",
                get: function() {
                    return this._converterCor(this._cor, !0)
                }
            }, {
                key: "corValor",
                get: function() {
                    return this._corValor
                }
            }, {
                key: "borda",
                get: function() {
                    return this._bordaTemp
                }
            }, {
                key: "alpha",
                get: function() {
                    return this._alphaTemp
                }
            }, {
                key: "largura",
                get: function() {
                    return this._canvasLargura
                }
            }, {
                key: "undoQuant",
                get: function() {
                    return this._undoQuant
                }
            }, {
                key: "redoQuant",
                get: function() {
                    return this._redoQuant
                }
            }, {
                key: "altura",
                get: function() {
                    return this._canvasAltura
                }
            }, {
                key: "canvas",
                get: function() {
                    return this._canvasElem
                }
            }, {
                key: "canvasPrev",
                get: function() {
                    return this._canvasPrevElem
                }
            }, {
                key: "ultimaAcao",
                get: function() {
                    return this._des_cod.length > 0 ? this._des_cod[this._des_cod.length - 1] : null
                }
            }, {
                key: "codigoQuebra",
                set: function(t) {
                    this._codigoQuebra = t
                }
            }, {
                key: "zoomTela",
                set: function(t) {
                    this._zoomTela = t
                }
            }, {
                key: "zoomPos",
                set: function(t) {
                    this._zoomPos = t
                }
            }, {
                key: "fator",
                set: function(t) {
                    this._fator = t,
                    this.setZoom(this._zoom)
                }
            }]),
            e
        }(l.default);
        o.default = u
    }
    , {
        eventos: 344
    }],
    344: [function(t, e, o) {
        "use strict";
        function a(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            return function(e, o, a) {
                return o && t(e.prototype, o),
                a && t(e, a),
                e
            }
        }()
          , i = function() {
            function t() {
                a(this, t),
                this._lista = []
            }
            return r(t, [{
                key: "on",
                value: function(t, e) {
                    this._lista[t] || (this._lista[t] = []),
                    this._lista[t].push(e)
                }
            }, {
                key: "emit",
                value: function(t) {
                    if (this._lista[t]) {
                        for (var e = arguments.length, o = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
                            o[a - 1] = arguments[a];
                        var r = !0
                          , i = !1
                          , n = void 0;
                        try {
                            for (var s, c = this._lista[t][Symbol.iterator](); !(r = (s = c.next()).done); r = !0) {
                                s.value.apply(void 0, o)
                            }
                        } catch (t) {
                            i = !0,
                            n = t
                        } finally {
                            try {
                                !r && c.return && c.return()
                            } finally {
                                if (i)
                                    throw n
                            }
                        }
                        return !0
                    }
                    return !1
                }
            }, {
                key: "prependListener",
                value: function(t, e) {
                    this._lista[t] || (this._lista[t] = []),
                    this._lista[t].unshift(e)
                }
            }, {
                key: "removeListener",
                value: function(t, e) {
                    if (this._lista[t]) {
                        var o = this._lista[t].indexOf(e);
                        -1 != o && this._lista[t].splice(o, 1)
                    }
                }
            }, {
                key: "removeAllListeners",
                value: function(t) {
                    delete this._lista[t]
                }
            }]),
            t
        }();
        o.default = i
    }
    , {}],
    345: [function(t, e, o) {
        o.node = function(t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }
        ,
        o.nodeList = function(t) {
            var e = Object.prototype.toString.call(t);
            return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length"in t && (0 === t.length || o.node(t[0]))
        }
        ,
        o.string = function(t) {
            return "string" == typeof t || t instanceof String
        }
        ,
        o.fn = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }
    , {}],
    346: [function(t, e, o) {
        function a(t, e, o) {
            if (!t && !e && !o)
                throw new Error("Missing required arguments");
            if (!s.string(e))
                throw new TypeError("Second argument must be a String");
            if (!s.fn(o))
                throw new TypeError("Third argument must be a Function");
            if (s.node(t))
                return r(t, e, o);
            if (s.nodeList(t))
                return i(t, e, o);
            if (s.string(t))
                return n(t, e, o);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
        }
        function r(t, e, o) {
            return t.addEventListener(e, o),
            {
                destroy: function() {
                    t.removeEventListener(e, o)
                }
            }
        }
        function i(t, e, o) {
            return Array.prototype.forEach.call(t, function(t) {
                t.addEventListener(e, o)
            }),
            {
                destroy: function() {
                    Array.prototype.forEach.call(t, function(t) {
                        t.removeEventListener(e, o)
                    })
                }
            }
        }
        function n(t, e, o) {
            return c(document.body, t, e, o)
        }
        var s = t("./is")
          , c = t("delegate");
        e.exports = a
    }
    , {
        "./is": 345,
        delegate: 342
    }],
    347: [function(t, e, o) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function n(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function s(t) {
            var e = "0123456789ABCDEF"
              , o = /^([a-zA-Z0-9\_\-\.])$/
              , a = void 0
              , r = void 0
              , i = void 0
              , n = void 0
              , s = "";
            for (a = 0; a < t.length; a++)
                o.test(t.charAt(a)) ? s += t.charAt(a) : (r = t.charCodeAt(a),
                i = e.charAt(Math.floor(r / 16)),
                n = e.charAt(r % 16),
                s += "%" + (i + n));
            return s
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            return function(e, o, a) {
                return o && t(e.prototype, o),
                a && t(e, a),
                e
            }
        }()
          , l = function t(e, o, a) {
            null === e && (e = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(e, o);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(e);
                return null === i ? void 0 : t(i, o, a)
            }
            if ("value"in r)
                return r.value;
            var n = r.get;
            if (void 0 !== n)
                return n.call(a)
        }
          , u = t("eventos")
          , _ = a(u)
          , d = t("conexao")
          , p = a(d)
          , f = 26e4
          , h = function(t) {
            function e(t, o, a) {
                r(this, e);
                var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return n._opcoes = Object.assign({
                    base: "",
                    sessao: "",
                    admin: !1
                }, a),
                n._player = t,
                n._desenho = t.desenho,
                n._conexao = new p.default({
                    base: n._opcoes.base,
                    timeout: 6e3,
                    removerCache: !0,
                    sessao: n._opcoes.sessao
                }),
                n._dadosSala = o,
                n._vez = !1,
                n._intervalo = !1,
                n._resposta = "",
                n._inicioVez = !1,
                n._desenhistaVez = "",
                n._acertaram = !1,
                n._listaUsuarios = [],
                n._listaIgnorados = [],
                n._dadosDesenho = "",
                n._seqDesenho = "",
                n._arrProximos = [],
                n._rankOn = 0,
                n._floodMsg = ["", ""],
                n._floodResp = ["", ""],
                n._numConversaPend = 0,
                n._jogadoresOrdem = 0,
                n._inicioJogo = !1,
                n._denunciaLista = [],
                n._avisoInativo = !1,
                n._desenho.on("startDraw", function() {
                    n._inicioVez || (n._inicioVez = !0,
                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", n).call(n, "inicioVez"),
                    n._vez && n.desenhar())
                }),
                n._desenho.on("codigo", function(t) {
                    if (n._vez) {
                        var e = t.split("@");
                        n._requisicao(e[0], e[1])
                    }
                }),
                n._reqAtual = null,
                n._reqEspera = [],
                n._tempo = Date.now(),
                n._rotina = setInterval(function() {
                    Date.now() - n._tempo > f && !n._opcoes.admin ? n.sair(2) : (Date.now() - n._tempo > f / 4 * 3 && !n._avisoInativo && !n._opcoes.admin && (l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", n).call(n, "avisoInativo"),
                    n._avisoInativo = !0),
                    n._reqAtual || n._chamada(!1, ""))
                }, 1e3),
                n
            }
            return n(e, t),
            c(e, [{
                key: "_chamada",
                value: function(t, e) {
                    var o = this
                      , a = void 0
                      , r = void 0
                      , i = void 0;
                    t ? (a = "atualizar.php",
                    r = "POST",
                    i = "comando=" + e,
                    this._tempo = Date.now()) : (a = "news.php",
                    r = "GET",
                    i = ""),
                    this._reqAtual = {
                        id: this._conexao.chamada(a + "?lastid=" + this._dadosSala.lastId, i, r, function(t) {
                            t && "n" != t && (t = t.split("@"),
                            2 != t.length || isNaN(parseInt(t[0])) ? "--" == t[0].substr(0, 2) && o.sair(1) : (t[0] = parseInt(t[0]),
                            t[0] > o._dadosSala.lastId && (o._dadosSala.lastId = t[0],
                            o._news(t[1])))),
                            o._reqAtual = null,
                            o._reqEspera.length && (o._chamada(!0, o._reqEspera.join("|")),
                            o._reqEspera = [])
                        }),
                        envio: t
                    }
                }
            }, {
                key: "_requisicao",
                value: function(t, e) {
                    e = t + "@" + e + "@" + this._dadosSala.send++,
                    this._reqAtual ? this._reqAtual.envio ? this._reqEspera.push(e) : (this._conexao.abortar(this._reqAtual.id, !0),
                    this._chamada(!0, e)) : this._chamada(!0, e)
                }
            }, {
                key: "ativar",
                value: function() {
                    this._avisoInativo && (this._tempo = Date.now(),
                    this._avisoInativo = !1)
                }
            }, {
                key: "mensagem",
                value: function(t) {
                    return (t != this._floodMsg[0] || t != this._floodMsg[1]) && (this._floodMsg.shift(),
                    this._floodMsg.push(t),
                    this._requisicao(7, s(t)),
                    !0)
                }
            }, {
                key: "resposta",
                value: function(t) {
                    return (t != this._floodResp[0] || t != this._floodResp[1]) && (this._floodResp.shift(),
                    this._floodResp.push(t),
                    this._requisicao(8, s(t)),
                    !0)
                }
            }, {
                key: "desfazer",
                value: function() {
                    return !(!this._vez || !this._desenho.desfazer()) && (this._requisicao(31, "0"),
                    !0)
                }
            }, {
                key: "refazer",
                value: function() {
                    return !(!this._vez || !this._desenho.refazer()) && (this._requisicao(31, "1"),
                    !0)
                }
            }, {
                key: "denunciar",
                value: function() {
                    return !this._vez && (this._requisicao(20, ""),
                    !0)
                }
            }, {
                key: "denunciarUsuario",
                value: function(t, e, o) {
                    var a = this._denunciaLista[t.toLowerCase()];
                    return !!(!a || Date.now() - a > 1e5 || this._opcoes.admin) && (this._conexao.chamada("denunciar_usuario_sala.php", "nick=" + t + "&txt=" + s(e), "POST", function(t) {
                        o(parseInt(t))
                    }),
                    this._denunciaLista[t.toLowerCase()] = Date.now(),
                    !0)
                }
            }, {
                key: "cancelarDesenho",
                value: function() {
                    this._opcoes.admin && this._requisicao(30, "")
                }
            }, {
                key: "desenhar",
                value: function() {
                    return !!this._vez && (this._requisicao(32, "1"),
                    !0)
                }
            }, {
                key: "dica",
                value: function() {
                    return !(!this._vez || this._acertaram || -1 == this._dicas) && (this._requisicao(19, this._dicas),
                    this._dicas++,
                    !0)
                }
            }, {
                key: "pular",
                value: function() {
                    return !(!this._vez || this._acertaram) && (this._requisicao(16, ""),
                    !0)
                }
            }, {
                key: "expulsar",
                value: function(t) {
                    return !(!this._dadosSala.criador && !this._opcoes.admin) && (this._requisicao(28, t),
                    !0)
                }
            }, {
                key: "salvar",
                value: function(t) {
                    if (this._dadosDesenho) {
                        var e = "n=1&dados=" + this._dadosDesenho.substr(this._dadosDesenho.indexOf(",")) + "&seq=" + this._seqDesenho + "&palavra=" + s(this._resposta);
                        return this._conexao.chamada("salvar_img.php", e, "POST", function(e) {
                            var o = e.split("#");
                            t(parseInt(o[1]), o[2])
                        }),
                        !0
                    }
                    return !1
                }
            }, {
                key: "sair",
                value: function(t) {
                    var o = this;
                    this.destruir(),
                    this._conexao.chamada("saida.php", "tipo=" + t + "&ajax=1", "GET", function(a) {
                        l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", o).call(o, "sair", t, a)
                    })
                }
            }, {
                key: "_confPadrao",
                value: function() {
                    this._desenho.mudaOpcao(0),
                    this._desenho.mudaCor("x000000"),
                    this._desenho.mudaBorda(4),
                    this._desenho.mudaAlpha(1)
                }
            }, {
                key: "_fimRodada",
                value: function(t) {
                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "fimRodada", t),
                    this._vez = !1,
                    this._intervalo = !0,
                    this._desenho.liberar(!1),
                    this._player.zerar()
                }
            }, {
                key: "_iniciarDesenho",
                value: function() {
                    this._inicioVez || (this._inicioVez = !0,
                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "inicioVez"))
                }
            }, {
                key: "_lerUsuarios",
                value: function(t) {
                    this._listaUsuarios = [];
                    var o = t.split("*")
                      , a = !0
                      , r = !1
                      , i = void 0;
                    try {
                        for (var n, s = o[Symbol.iterator](); !(a = (n = s.next()).done); a = !0) {
                            var c = n.value
                              , u = c.split(".");
                            this._listaUsuarios.push({
                                login: u[0],
                                avatar: parseInt(u[7]),
                                pontos: parseInt(u[1]),
                                vitorias: parseInt(u[6]),
                                status: parseInt(u[2]),
                                perfil: parseInt(u[3]),
                                tipo: parseInt(u[4]),
                                admin: parseInt(u[5])
                            })
                        }
                    } catch (t) {
                        r = !0,
                        i = t
                    } finally {
                        try {
                            !a && s.return && s.return()
                        } finally {
                            if (r)
                                throw i
                        }
                    }
                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "usuarios", this._listaUsuarios)
                }
            }, {
                key: "_lerProximos",
                value: function(t) {
                    this._arrProximos = t.split("*"),
                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "proximos", this._arrProximos)
                }
            }, {
                key: "_news",
                value: function(t) {
                    if (this._inicioJogo || (this._player.direto = !0),
                    t.length > 0 && this._desenho) {
                        var o = t.split("|");
                        "0" != o[0] && this._lerUsuarios(o[0]),
                        o.splice(0, 1);
                        var a = !0
                          , r = !1
                          , i = void 0;
                        try {
                            for (var n, s = o[Symbol.iterator](); !(a = (n = s.next()).done); a = !0) {
                                var c = n.value
                                  , u = c.split("#");
                                switch (parseInt(u[0])) {
                                case 1:
                                case 2:
                                case 3:
                                    this._iniciarDesenho();
                                case 4:
                                case 5:
                                case 6:
                                case 27:
                                case 31:
                                case 21:
                                    this._player.registrar(u);
                                    break;
                                case 7:
                                    this._dadosSala.loginJogo.toLowerCase() == u[1].toLowerCase() ? l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "chat", u[2]) : this._listaIgnorados[u[1].toLowerCase()] || l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "chatOutro", u[1], u[2]);
                                    break;
                                case 8:
                                    if (this._dadosSala.loginJogo.toLowerCase() == u[1].toLowerCase())
                                        switch (parseInt(u[3])) {
                                        case 1:
                                            l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "resposta", u[2]);
                                            break;
                                        case 2:
                                            l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "invalido", u[2]);
                                            break;
                                        case 3:
                                            l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "perto", u[2])
                                        }
                                    else
                                        this._listaIgnorados[u[1].toLowerCase()] || l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "respostaOutro", u[1], u[2], 2 == parseInt(u[3]));
                                    break;
                                case 9:
                                    this._player.iniciar(),
                                    this._intervalo = !1,
                                    this._rankOn = parseInt(u[4]),
                                    this._rankOn < 2 && l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "rank", this._rankOn),
                                    this._confPadrao(),
                                    this._desenho.salvarEstado(!0),
                                    this._lerProximos(u[3]),
                                    this._inicioVez = !1,
                                    this._desenhistaVez = u[2],
                                    this._dadosDesenho = "",
                                    this._resposta = "",
                                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "vezOutro", u[2], u[1]);
                                    break;
                                case 10:
                                    this._vez = !0,
                                    this._intervalo = !1,
                                    this._rankOn = parseInt(u[5]),
                                    this._rankOn < 2 && l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "rank", this._rankOn),
                                    this._desenho.limparTela(!0, !0),
                                    this._lerProximos(u[4]),
                                    this._desenho.liberar(!0),
                                    this._confPadrao(),
                                    this._inicioVez = !1,
                                    this._dadosDesenho = "",
                                    this._acertaram = !1,
                                    this._resposta = u[2],
                                    this._dicas = 0,
                                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "vez", u[2], u[1]);
                                    break;
                                case 11:
                                    this._vez && (this._dadosDesenho = this._desenho.salvar(),
                                    this._seqDesenho = this._desenho.sequencia),
                                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "intervalo", u[1]),
                                    this._fimRodada();
                                    break;
                                case 12:
                                    this._vez && (this._dadosDesenho = this._desenho.salvar(),
                                    this._seqDesenho = this._desenho.sequencia),
                                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "rank", parseInt(u[4])),
                                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "intervalo", u[5]),
                                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "fimJogo", u[1], u[2]),
                                    this._fimRodada(!0);
                                    break;
                                case 15:
                                    u[3] = parseInt(u[3]),
                                    u[3] > 4 ? l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "rank", !0) : 1 != this._rankOn && l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "rank", !1),
                                    "1" == u[1] ? l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "entrada", u[2]) : (l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "saida", u[2]),
                                    this._lerProximos(u[5]));
                                    break;
                                case 16:
                                    "1" == u[1] && (l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "pular", u[2]),
                                    this._fimRodada());
                                    break;
                                case 18:
                                    "6" != u[3] ? l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "acertoOutro", u[1]) : l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "acerto", u[2]),
                                    "1" == u[4] && l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "todosAcertaram"),
                                    this._vez && !this._acertaram && l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "primeiroAcerto"),
                                    this._acertaram = !0;
                                    break;
                                case 19:
                                    if ("x" != u[1]) {
                                        var _ = u[1].replace(/\s\./g, "").length / 2
                                          , d = u[1].trim().toUpperCase().replace(/\s/g, "*").replace(/\./g, " ");
                                        l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "dica", d.split("*"), _, this._resposta)
                                    } else
                                        this._dicas = -1,
                                        l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "dicaFim");
                                    break;
                                case 30:
                                case 20:
                                    20 == parseInt(u[0]) && l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "denuncia", "2" == u[1], u[2]),
                                    "1" == u[3] && (l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "cancelar"),
                                    this._fimRodada());
                                    break;
                                case 22:
                                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "inativo"),
                                    this._fimRodada();
                                    break;
                                case 23:
                                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "aguardando");
                                    break;
                                case 24:
                                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "mensagem", parseInt(u[1]), u[2]);
                                    break;
                                case 32:
                                    this._iniciarDesenho()
                                }
                                this._inicioJogo || (l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "iniciar", this._dadosSala.cookieAviso),
                                this._player.direto = !1,
                                this._inicioJogo = !0)
                            }
                        } catch (t) {
                            r = !0,
                            i = t
                        } finally {
                            try {
                                !a && s.return && s.return()
                            } finally {
                                if (r)
                                    throw i
                            }
                        }
                    }
                }
            }, {
                key: "destruir",
                value: function() {
                    this._desenho.remover(),
                    clearInterval(this._rotina),
                    this._reqAtual && this._conexao.abortar(this._reqAtual.id, !0)
                }
            }, {
                key: "admin",
                get: function() {
                    return this._opcoes.admin
                }
            }, {
                key: "criador",
                get: function() {
                    return this._dadosSala.criador
                }
            }, {
                key: "desenhistaVez",
                get: function() {
                    return this._desenhistaVez
                }
            }, {
                key: "inicioVez",
                get: function() {
                    return this._inicioVez
                }
            }, {
                key: "loginJogo",
                get: function() {
                    return this._dadosSala.loginJogo
                }
            }, {
                key: "maxJogadores",
                get: function() {
                    return this._dadosSala.maxJogadores
                }
            }, {
                key: "naoCadastrados",
                get: function() {
                    return this._dadosSala.naoCadastrados
                }
            }, {
                key: "sala",
                get: function() {
                    return this._dadosSala.sala
                }
            }, {
                key: "salaFixa",
                get: function() {
                    return this._dadosSala.salaFixa
                }
            }, {
                key: "salaNome",
                get: function() {
                    return this._dadosSala.salaNome
                }
            }, {
                key: "salaVisivel",
                get: function() {
                    return this._dadosSala.salaVisivel
                }
            }, {
                key: "senha",
                get: function() {
                    return this._dadosSala.salaSenha
                }
            }, {
                key: "tempoIntervalo",
                get: function() {
                    return this._dadosSala.tempoIntervalo
                }
            }, {
                key: "tempoRodada",
                get: function() {
                    return this._dadosSala.tempoRodada
                }
            }, {
                key: "intervalo",
                get: function() {
                    return this._intervalo
                }
            }, {
                key: "vez",
                get: function() {
                    return this._vez
                }
            }]),
            e
        }(_.default);
        o.default = h
    }
    , {
        conexao: 11,
        eventos: 344
    }],
    348: [function(t, e, o) {
        "use strict";
        e.exports = function(t, e) {
            var o, a = {}, r = {}, i = {}, n = {}, s = {}, c = {};
            if (i[0] = "HTML_SPECIALCHARS",
            i[1] = "HTML_ENTITIES",
            n[0] = "ENT_NOQUOTES",
            n[2] = "ENT_COMPAT",
            n[3] = "ENT_QUOTES",
            s = isNaN(t) ? t ? t.toUpperCase() : "HTML_SPECIALCHARS" : i[t],
            c = isNaN(e) ? e ? e.toUpperCase() : "ENT_COMPAT" : n[e],
            "HTML_SPECIALCHARS" !== s && "HTML_ENTITIES" !== s)
                throw new Error("Table: " + s + " not supported");
            a[38] = "&amp;",
            "HTML_ENTITIES" === s && (a[160] = "&nbsp;",
            a[161] = "&iexcl;",
            a[162] = "&cent;",
            a[163] = "&pound;",
            a[164] = "&curren;",
            a[165] = "&yen;",
            a[166] = "&brvbar;",
            a[167] = "&sect;",
            a[168] = "&uml;",
            a[169] = "&copy;",
            a[170] = "&ordf;",
            a[171] = "&laquo;",
            a[172] = "&not;",
            a[173] = "&shy;",
            a[174] = "&reg;",
            a[175] = "&macr;",
            a[176] = "&deg;",
            a[177] = "&plusmn;",
            a[178] = "&sup2;",
            a[179] = "&sup3;",
            a[180] = "&acute;",
            a[181] = "&micro;",
            a[182] = "&para;",
            a[183] = "&middot;",
            a[184] = "&cedil;",
            a[185] = "&sup1;",
            a[186] = "&ordm;",
            a[187] = "&raquo;",
            a[188] = "&frac14;",
            a[189] = "&frac12;",
            a[190] = "&frac34;",
            a[191] = "&iquest;",
            a[192] = "&Agrave;",
            a[193] = "&Aacute;",
            a[194] = "&Acirc;",
            a[195] = "&Atilde;",
            a[196] = "&Auml;",
            a[197] = "&Aring;",
            a[198] = "&AElig;",
            a[199] = "&Ccedil;",
            a[200] = "&Egrave;",
            a[201] = "&Eacute;",
            a[202] = "&Ecirc;",
            a[203] = "&Euml;",
            a[204] = "&Igrave;",
            a[205] = "&Iacute;",
            a[206] = "&Icirc;",
            a[207] = "&Iuml;",
            a[208] = "&ETH;",
            a[209] = "&Ntilde;",
            a[210] = "&Ograve;",
            a[211] = "&Oacute;",
            a[212] = "&Ocirc;",
            a[213] = "&Otilde;",
            a[214] = "&Ouml;",
            a[215] = "&times;",
            a[216] = "&Oslash;",
            a[217] = "&Ugrave;",
            a[218] = "&Uacute;",
            a[219] = "&Ucirc;",
            a[220] = "&Uuml;",
            a[221] = "&Yacute;",
            a[222] = "&THORN;",
            a[223] = "&szlig;",
            a[224] = "&agrave;",
            a[225] = "&aacute;",
            a[226] = "&acirc;",
            a[227] = "&atilde;",
            a[228] = "&auml;",
            a[229] = "&aring;",
            a[230] = "&aelig;",
            a[231] = "&ccedil;",
            a[232] = "&egrave;",
            a[233] = "&eacute;",
            a[234] = "&ecirc;",
            a[235] = "&euml;",
            a[236] = "&igrave;",
            a[237] = "&iacute;",
            a[238] = "&icirc;",
            a[239] = "&iuml;",
            a[240] = "&eth;",
            a[241] = "&ntilde;",
            a[242] = "&ograve;",
            a[243] = "&oacute;",
            a[244] = "&ocirc;",
            a[245] = "&otilde;",
            a[246] = "&ouml;",
            a[247] = "&divide;",
            a[248] = "&oslash;",
            a[249] = "&ugrave;",
            a[250] = "&uacute;",
            a[251] = "&ucirc;",
            a[252] = "&uuml;",
            a[253] = "&yacute;",
            a[254] = "&thorn;",
            a[255] = "&yuml;"),
            "ENT_NOQUOTES" !== c && (a[34] = "&quot;"),
            "ENT_QUOTES" === c && (a[39] = "&#39;"),
            a[60] = "&lt;",
            a[62] = "&gt;";
            for (o in a)
                a.hasOwnProperty(o) && (r[String.fromCharCode(o)] = a[o]);
            return r
        }
    }
    , {}],
    349: [function(t, e, o) {
        "use strict";
        e.exports = function(e, o) {
            var a = t("../strings/get_html_translation_table")
              , r = ""
              , i = ""
              , n = "";
            r = e.toString();
            var s = a("HTML_ENTITIES", o);
            if (!1 === s)
                return !1;
            delete s["&"],
            s["&"] = "&amp;";
            for (n in s)
                i = s[n],
                r = r.split(i).join(n);
            return r = r.split("&#039;").join("'")
        }
    }
    , {
        "../strings/get_html_translation_table": 348
    }],
    350: [function(t, e, o) {
        "use strict";
        e.exports = function(t) {
            return t += "",
            encodeURIComponent(t).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/~/g, "%7E").replace(/%20/g, "+")
        }
    }
    , {}],
    351: [function(t, e, o) {
        "use strict";
        function a(t) {
            for (var e = "", o = "", a = 0; a < t.length; a++)
                t.charAt(a) != o && (o = t.charAt(a),
                e += o);
            return e
        }
        function r(t) {
            t = t.trim().toLowerCase().replace(/\s+/g, " "),
            t = t.replace(/[áàâãäÁÀÂÃÄ4]/g, "a"),
            t = t.replace(/[éèêëÉÈÊË3]/g, "e"),
            t = t.replace(/[íìîïÍÌÎÏ1y]/g, "i"),
            t = t.replace(/[óòôõöÓÒÔÕÖ0]/g, "o"),
            t = t.replace(/[úùûüÚÙÛÜ]/g, "u"),
            t = t.replace(/[ñÑ]/g, "n"),
            t = t.replace(/[çÇ]/g, "c"),
            t = t.replace(/[5]/g, "s"),
            t = t.replace(/[^a-zA-Z ]/g, "");
            var e = a(t)
              , o = e.replace(/[^a-zA-Z\s]/g, " ")
              , r = e.replace(/[^a-zA-Z\s]/g, "")
              , i = e.replace(/[^a-zA-Z]/g, "")
              , n = t.replace(/[^a-zA-Z\s]/g, " ")
              , s = t.replace(/[^a-zA-Z\s]/g, "")
              , c = t.replace(/[^a-zA-Z]/g, "")
              , l = new RegExp("(^|[ ])(estrupar|estuprar|estupro|estrupo|orgia|esperma|cuzinho|sexo|porno|fuck|cu|ku|cacete|brocha|pora|viado|puta|putas|biba|tnc|vtnc|pqp|fdp|otario|otaria|bct|wtf|idiota|corno|corna|trepa|trepar|transar|vagaba|vagabas|broxa|troxa|trouxa|merda|vsf|viadin|bosta|bostas|vadea|vadia|vadias|kacete|cacete|retardado|retardada|kct|foder|babaca|pnc|burra|cusao|putona|nude|nudes|piroca|fuder)([ ]|$)")
              , u = new RegExp("(restodeaborto|comeramae|comerasua|cumeramae|cumerasua|umanal|fodace|fodasi|vaghabunda|chupaminhabola|chupaminhasbola|euanus|tecomer|prexeca|precheca|pepeca|pepeka|mandanude|suaperereca|suaperereka|tefuder|tefoder|sefoder|sefuder|seudemente|suademente|gozeino|gozeina|fazerorgia|fazerumaorgia|metenoseucu|meternoseucu|meternocu|metenocu|suastetas|suateta|seusmamilo|seumamilo|redtube|pornhub|xvideos|tomanocu|tomarnocu|tomanucu|tomarnucu|putaquepari|putaqpari|pirocudo|daocu|darocu|paunocu|pintonocu|caralho|kralho|karalho|buceta|boceta|fidaputa|filhodaput|filhodput|filhadaput|filhadput|suaputa|biscate|merdinha|chupameup|chupaminhar|mechupa|boquete|boqueteir|bokete|boketeir|meupau|meupinto|meupenis|minharola|fodase|fodasse|uapiranha|vagina|penis|seubiba|suabiba|eubicha|uabicha|mabiba|mabicha|mbiba|mbicha|traveco|cuzao|prostituta|comisuabu|comiasuabu|comiseucu|comioseucu|vaisefud|vaisefer|vaisefod|vaicfud|vaicfer|vaicfod|paunocu|paunabu|paunaboc|masturba|punheta|punheteir|imbecil|bucetinha|sucker|bostinha|embecil|vagabundo|vagabunda|putinha|xoxota|meutoba)")
              , _ = new RegExp("(^|[ ])(ppk)([ ]|$)")
              , d = new RegExp("(ppkinha)");
            return l.test(o) || l.test(r) || u.test(i) || _.test(n) || _.test(s) || d.test(c)
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.semRepeticao = a,
        o.default = r
    }
    , {}],
    352: [function(t, e, o) {
        "use strict";
        function a(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function i(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            return function(e, o, a) {
                return o && t(e.prototype, o),
                a && t(e, a),
                e
            }
        }()
          , s = function t(e, o, a) {
            null === e && (e = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(e, o);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(e);
                return null === i ? void 0 : t(i, o, a)
            }
            if ("value"in r)
                return r.value;
            var n = r.get;
            if (void 0 !== n)
                return n.call(a)
        }
          , c = t("eventos")
          , l = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(c)
          , u = function(t) {
            function e(t, o) {
                a(this, e);
                var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return i._opcoes = Object.assign({
                    baldeFragmentado: !0
                }, o),
                i._desenho = t,
                i._fracao = 9,
                i._ativo = !1,
                i._partesDesenho = [],
                i._animacao = !1,
                i._contagem = 0,
                i._pendente = !1,
                i._cacheBalde = "",
                i._direto = !1,
                i._removerDireto = !1,
                i._ultimoTempo,
                i._dif = 0,
                i._posicao = 0,
                i
            }
            return i(e, t),
            n(e, [{
                key: "registrar",
                value: function(t) {
                    var e = this;
                    if ("string" != typeof t)
                        this._partesDesenho.push(t);
                    else {
                        var o = t.split("|")
                          , a = !0
                          , r = !1
                          , i = void 0;
                        try {
                            for (var n, s = o[Symbol.iterator](); !(a = (n = s.next()).done); a = !0) {
                                var c = n.value
                                  , l = c.split("@");
                                if (2 == l.length) {
                                    var u = l[1].split("#");
                                    u.unshift(l[0]),
                                    this._partesDesenho.push(u)
                                }
                            }
                        } catch (t) {
                            r = !0,
                            i = t
                        } finally {
                            try {
                                !a && s.return && s.return()
                            } finally {
                                if (r)
                                    throw i
                            }
                        }
                    }
                    this._ativo && !this._animacao && (this._ultimoTempo = Date.now(),
                    this._animacao = requestAnimationFrame(function() {
                        e._rotina()
                    }))
                }
            }, {
                key: "removerDireto",
                value: function() {
                    this._removerDireto = !0
                }
            }, {
                key: "zerar",
                value: function() {
                    this.parar(),
                    this._partesDesenho = []
                }
            }, {
                key: "iniciar",
                value: function() {
                    var t = this;
                    s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "iniciar"),
                    this._ativo = !0,
                    this._ultimoTempo = Date.now(),
                    this._animacao = requestAnimationFrame(function() {
                        t._rotina()
                    })
                }
            }, {
                key: "pausar",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._cancelarAnimacao(),
                    this._ativo = !1,
                    t || s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "pausar")
                }
            }, {
                key: "parar",
                value: function() {
                    this.pausar(!0),
                    this._desenho.limparTela(!1, !0),
                    this._posicao = 0,
                    this._contagem = 0,
                    this._dif = 0,
                    this._cacheBalde = "",
                    this._pendente = !1,
                    s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "parar")
                }
            }, {
                key: "flush",
                value: function() {
                    this._desenhar(this._pendente, 0, !0),
                    this._pendente = !1
                }
            }, {
                key: "_cancelarAnimacao",
                value: function() {
                    this._animacao && (cancelAnimationFrame(this._animacao),
                    this._animacao = !1)
                }
            }, {
                key: "_rotina",
                value: function() {
                    var t = this;
                    if (this._ativo) {
                        this._dif += Date.now() - this._ultimoTempo;
                        for (; this._dif >= this._fracao; ) {
                            if (!this._passo()) {
                                this._dif = this._dif % this._fracao,
                                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "fim");
                                break
                            }
                            this._dif -= this._fracao
                        }
                        this._removerDireto && (this._direto = !1,
                        this._removerDireto = !1),
                        this._ativo && this._animacao && (this._ultimoTempo = Date.now(),
                        this._animacao = requestAnimationFrame(function() {
                            t._rotina()
                        }))
                    }
                }
            }, {
                key: "_passo",
                value: function() {
                    if (this._posicao < this._partesDesenho.length) {
                        var t = this._partesDesenho[this._posicao];
                        return 0 == this._contagem && this._pendente && t.length > 3 && this._pendente.length > 3 && 2 == t[0] && t[1] == this._pendente[this._pendente.length - 2] && t[2] == this._pendente[this._pendente.length - 1] ? (this._contagem = (this._pendente.length - 1) / 2 + 1,
                        t = this._pendente.concat(t.slice(3)),
                        this._partesDesenho.splice(this._posicao--, 1),
                        this._partesDesenho[this._posicao] = t,
                        this._pendente = !1) : this._pendente && this.flush(),
                        this._desenhar(t, this._contagem) ? (2 == t[0] ? this._pendente = this._partesDesenho[this._posicao] : this._pendente = !1,
                        this._posicao++,
                        this._contagem = 0) : this._contagem++,
                        (this._direto || 4 == t[0] || 5 == t[0] || 6 == t[0] || 27 == t[0] || 3 == t[0] && this._partesDesenho.length && 3 == this._partesDesenho[0][0]) && this._passo(),
                        !0
                    }
                    return this._cancelarAnimacao(),
                    !1
                }
            }, {
                key: "_desenhar",
                value: function(t, e, o) {
                    switch (parseInt(t[0])) {
                    case 1:
                        this._desenho.desenhar(parseInt(t[2]), parseInt(t[3]), parseInt(t[4]), parseInt(t[5]), parseInt(t[1]), 0, !1),
                        this._desenho.salvarEstado(!1);
                        break;
                    case 2:
                        var a = parseInt(t[1])
                          , r = parseInt(t[2])
                          , i = [[a, r]]
                          , n = [a, r, a, r]
                          , s = 3 + 2 * (e + 1);
                        (s > t.length || o) && (s = t.length);
                        for (var c = 3; c < s; c += 2) {
                            var l = parseInt(t[c])
                              , u = parseInt(t[c + 1]);
                            l < n[0] ? n[0] = l : l > n[2] && (n[2] = l),
                            u < n[1] ? n[1] = u : u > n[3] && (n[3] = u),
                            i.push([l, u])
                        }
                        if (e) {
                            var _ = this._desenho.borda
                              , d = n[0] - _ / 2
                              , p = n[1] - _ / 2
                              , f = n[2] - n[0] + _
                              , h = n[3] - n[1] + _;
                            this._desenho.limparTelaPrev(d, p, f, h)
                        } else
                            this._desenho.limparTelaPrev();
                        if ((s += 2) <= t.length)
                            return this._desenho.linhaSeq(i, 1),
                            !1;
                        o ? (this._desenho.linhaSeq(i, 0),
                        this._desenho.salvarEstado(!1)) : this._desenho.linhaSeq(i, 1);
                        break;
                    case 3:
                        if (this._opcoes.baldeFragmentado)
                            if ("0" == t[1])
                                this._cacheBalde += t.slice(2).join("$");
                            else if ("1" == t[1])
                                this._cacheBalde = "",
                                this._cacheBalde += t.slice(2).join("$");
                            else {
                                "3" == t[1] && (this._cacheBalde = ""),
                                this._cacheBalde += t.slice(2).join("$");
                                var m = this._cacheBalde.split("$").map(function(t) {
                                    return parseInt(t)
                                });
                                this._desenho.baldeF(m),
                                this._desenho.salvarEstado(!1)
                            }
                        else
                            this._desenho.baldeF(t.slice(1).map(function(t) {
                                return parseInt(t)
                            })),
                            this._desenho.salvarEstado(!1);
                        break;
                    case 4:
                        this._desenho.limparTela(!0, !0);
                        break;
                    case 5:
                        this._desenho.mudaCor(t[1], !1);
                        break;
                    case 6:
                        this._desenho.mudaBorda(t[1], !1);
                        break;
                    case 27:
                        this._desenho.mudaAlpha(t[1], !1);
                        break;
                    case 21:
                        for (var v = 1; v < t.length; v += 2)
                            this._desenho.borracha(parseInt(t[v]), parseInt(t[v + 1]), 0, !1);
                        break;
                    case 31:
                        1 == t[1] ? this._desenho.refazer() : this._desenho.desfazer()
                    }
                    return !0
                }
            }, {
                key: "direto",
                set: function(t) {
                    this._direto = t
                }
            }, {
                key: "fracao",
                set: function(t) {
                    this._fracao = t
                }
            }, {
                key: "desenho",
                get: function() {
                    return this._desenho
                }
            }]),
            e
        }(l.default);
        o.default = u
    }
    , {
        eventos: 344
    }],
    353: [function(t, e, o) {
        (function(t) {
            !function(t) {
                "use strict";
                function o(t, e, o, a) {
                    var i = e && e.prototype instanceof r ? e : r
                      , n = Object.create(i.prototype)
                      , s = new p(a || []);
                    return n._invoke = l(t, o, s),
                    n
                }
                function a(t, e, o) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, o)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                function r() {}
                function i() {}
                function n() {}
                function s(t) {
                    ["next", "throw", "return"].forEach(function(e) {
                        t[e] = function(t) {
                            return this._invoke(e, t)
                        }
                    })
                }
                function c(e) {
                    function o(t, r, i, n) {
                        var s = a(e[t], e, r);
                        if ("throw" !== s.type) {
                            var c = s.arg
                              , l = c.value;
                            return l && "object" == typeof l && g.call(l, "__await") ? Promise.resolve(l.__await).then(function(t) {
                                o("next", t, i, n)
                            }, function(t) {
                                o("throw", t, i, n)
                            }) : Promise.resolve(l).then(function(t) {
                                c.value = t,
                                i(c)
                            }, n)
                        }
                        n(s.arg)
                    }
                    function r(t, e) {
                        function a() {
                            return new Promise(function(a, r) {
                                o(t, e, a, r)
                            }
                            )
                        }
                        return i = i ? i.then(a, a) : a()
                    }
                    "object" == typeof t.process && t.process.domain && (o = t.process.domain.bind(o));
                    var i;
                    this._invoke = r
                }
                function l(t, e, o) {
                    var r = E;
                    return function(i, n) {
                        if (r === O)
                            throw new Error("Generator is already running");
                        if (r === P) {
                            if ("throw" === i)
                                throw n;
                            return h()
                        }
                        for (o.method = i,
                        o.arg = n; ; ) {
                            var s = o.delegate;
                            if (s) {
                                var c = u(s, o);
                                if (c) {
                                    if (c === L)
                                        continue;
                                    return c
                                }
                            }
                            if ("next" === o.method)
                                o.sent = o._sent = o.arg;
                            else if ("throw" === o.method) {
                                if (r === E)
                                    throw r = P,
                                    o.arg;
                                o.dispatchException(o.arg)
                            } else
                                "return" === o.method && o.abrupt("return", o.arg);
                            r = O;
                            var l = a(t, e, o);
                            if ("normal" === l.type) {
                                if (r = o.done ? P : S,
                                l.arg === L)
                                    continue;
                                return {
                                    value: l.arg,
                                    done: o.done
                                }
                            }
                            "throw" === l.type && (r = P,
                            o.method = "throw",
                            o.arg = l.arg)
                        }
                    }
                }
                function u(t, e) {
                    var o = t.iterator[e.method];
                    if (o === m) {
                        if (e.delegate = null,
                        "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return",
                            e.arg = m,
                            u(t, e),
                            "throw" === e.method))
                                return L;
                            e.method = "throw",
                            e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return L
                    }
                    var r = a(o, t.iterator, e.arg);
                    if ("throw" === r.type)
                        return e.method = "throw",
                        e.arg = r.arg,
                        e.delegate = null,
                        L;
                    var i = r.arg;
                    return i ? i.done ? (e[t.resultName] = i.value,
                    e.next = t.nextLoc,
                    "return" !== e.method && (e.method = "next",
                    e.arg = m),
                    e.delegate = null,
                    L) : i : (e.method = "throw",
                    e.arg = new TypeError("iterator result is not an object"),
                    e.delegate = null,
                    L)
                }
                function _(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function d(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function p(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(_, this),
                    this.reset(!0)
                }
                function f(t) {
                    if (t) {
                        var e = t[y];
                        if (e)
                            return e.call(t);
                        if ("function" == typeof t.next)
                            return t;
                        if (!isNaN(t.length)) {
                            var o = -1
                              , a = function e() {
                                for (; ++o < t.length; )
                                    if (g.call(t, o))
                                        return e.value = t[o],
                                        e.done = !1,
                                        e;
                                return e.value = m,
                                e.done = !0,
                                e
                            };
                            return a.next = a
                        }
                    }
                    return {
                        next: h
                    }
                }
                function h() {
                    return {
                        value: m,
                        done: !0
                    }
                }
                var m, v = Object.prototype, g = v.hasOwnProperty, b = "function" == typeof Symbol ? Symbol : {}, y = b.iterator || "@@iterator", x = b.asyncIterator || "@@asyncIterator", k = b.toStringTag || "@@toStringTag", j = "object" == typeof e, w = t.regeneratorRuntime;
                if (w)
                    return void (j && (e.exports = w));
                w = t.regeneratorRuntime = j ? e.exports : {},
                w.wrap = o;
                var E = "suspendedStart"
                  , S = "suspendedYield"
                  , O = "executing"
                  , P = "completed"
                  , L = {}
                  , A = {};
                A[y] = function() {
                    return this
                }
                ;
                var C = Object.getPrototypeOf
                  , T = C && C(C(f([])));
                T && T !== v && g.call(T, y) && (A = T);
                var M = n.prototype = r.prototype = Object.create(A);
                i.prototype = M.constructor = n,
                n.constructor = i,
                n[k] = i.displayName = "GeneratorFunction",
                w.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === i || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                w.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : (t.__proto__ = n,
                    k in t || (t[k] = "GeneratorFunction")),
                    t.prototype = Object.create(M),
                    t
                }
                ,
                w.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                s(c.prototype),
                c.prototype[x] = function() {
                    return this
                }
                ,
                w.AsyncIterator = c,
                w.async = function(t, e, a, r) {
                    var i = new c(o(t, e, a, r));
                    return w.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                        return t.done ? t.value : i.next()
                    })
                }
                ,
                s(M),
                M[k] = "Generator",
                M[y] = function() {
                    return this
                }
                ,
                M.toString = function() {
                    return "[object Generator]"
                }
                ,
                w.keys = function(t) {
                    var e = [];
                    for (var o in t)
                        e.push(o);
                    return e.reverse(),
                    function o() {
                        for (; e.length; ) {
                            var a = e.pop();
                            if (a in t)
                                return o.value = a,
                                o.done = !1,
                                o
                        }
                        return o.done = !0,
                        o
                    }
                }
                ,
                w.values = f,
                p.prototype = {
                    constructor: p,
                    reset: function(t) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = m,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = m,
                        this.tryEntries.forEach(d),
                        !t)
                            for (var e in this)
                                "t" === e.charAt(0) && g.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = m)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0]
                          , e = t.completion;
                        if ("throw" === e.type)
                            throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        function e(e, a) {
                            return i.type = "throw",
                            i.arg = t,
                            o.next = e,
                            a && (o.method = "next",
                            o.arg = m),
                            !!a
                        }
                        if (this.done)
                            throw t;
                        for (var o = this, a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a]
                              , i = r.completion;
                            if ("root" === r.tryLoc)
                                return e("end");
                            if (r.tryLoc <= this.prev) {
                                var n = g.call(r, "catchLoc")
                                  , s = g.call(r, "finallyLoc");
                                if (n && s) {
                                    if (this.prev < r.catchLoc)
                                        return e(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc)
                                        return e(r.finallyLoc)
                                } else if (n) {
                                    if (this.prev < r.catchLoc)
                                        return e(r.catchLoc, !0)
                                } else {
                                    if (!s)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc)
                                        return e(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && g.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var r = a;
                                break
                            }
                        }
                        r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                        var i = r ? r.completion : {};
                        return i.type = t,
                        i.arg = e,
                        r ? (this.method = "next",
                        this.next = r.finallyLoc,
                        L) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        L
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var o = this.tryEntries[e];
                            if (o.finallyLoc === t)
                                return this.complete(o.completion, o.afterLoc),
                                d(o),
                                L
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var o = this.tryEntries[e];
                            if (o.tryLoc === t) {
                                var a = o.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    d(o)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, o) {
                        return this.delegate = {
                            iterator: f(t),
                            resultName: e,
                            nextLoc: o
                        },
                        "next" === this.method && (this.arg = m),
                        L
                    }
                }
            }("object" == typeof t ? t : "object" == typeof window ? window : "object" == typeof self ? self : this)
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    354: [function(t, e, o) {
        "use strict";
        function a(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function i(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            return function(e, o, a) {
                return o && t(e.prototype, o),
                a && t(e, a),
                e
            }
        }()
          , s = function t(e, o, a) {
            null === e && (e = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(e, o);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(e);
                return null === i ? void 0 : t(i, o, a)
            }
            if ("value"in r)
                return r.value;
            var n = r.get;
            if (void 0 !== n)
                return n.call(a)
        }
          , c = t("eventos")
          , l = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(c)
          , u = function(t) {
            function e(t, o) {
                a(this, e);
                var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                if (i._opcoes = Object.assign({
                    classes: !1,
                    manterPosicao: !1,
                    elementosMax: 0,
                    elementoScroll: "div",
                    scrollVertical: !0,
                    scrollHorizontal: !1,
                    margemVertical: [0, 0],
                    margemHorizontal: [0, 0],
                    wheel: !0,
                    tolerancia: 0,
                    nativo: !1
                }, o),
                i._elem = t,
                i._scroll = t.querySelector(i._opcoes.elementoScroll),
                i._sombraClasse = "",
                i._scrollFim = !1,
                i._moving = !1,
                i._scroll.addEventListener("scroll", function(t) {
                    i.refresh(!0),
                    t.stopPropagation()
                }, !1),
                i._opcoes.nativo || i._elem.addEventListener("touchstart", function(t) {
                    i._scrollbarStart(t, !0, !0)
                }, !1),
                i._opcoes.scrollVertical && (i._scrollbarVertical = document.createElement("div"),
                i._scrollbarVertical.className = "scrollbar-vertical",
                i._scrollbarVertical.addEventListener("mousedown", function(t) {
                    i._scrollbarStart(t, !0),
                    t.stopPropagation(),
                    t.preventDefault()
                }, !1),
                i._scrollbarVertical.addEventListener("touchstart", function(t) {
                    i._scrollbarStart(t, !0),
                    t.stopPropagation(),
                    t.preventDefault()
                }, !1),
                i._elem.appendChild(i._scrollbarVertical)),
                i._opcoes.scrollHorizontal && (i._scrollbarHorizontal = document.createElement("div"),
                i._scrollbarHorizontal.className = "scrollbar-horizontal",
                i._scrollbarHorizontal.addEventListener("mousedown", function(t) {
                    i._scrollbarStart(t, !1),
                    t.stopPropagation()
                }, !1),
                i._scrollbarHorizontal.addEventListener("touchstart", function(t) {
                    i._scrollbarStart(t, !1),
                    t.stopPropagation()
                }, !1),
                i._elem.appendChild(i._scrollbarHorizontal)),
                i._opcoes.elementosMax) {
                    var n = !0
                      , s = !1
                      , c = void 0;
                    try {
                        for (var l, u = i._scroll.childNodes[Symbol.iterator](); !(n = (l = u.next()).done); n = !0) {
                            var _ = l.value;
                            3 == _.nodeType && i._scroll.removeChild(_)
                        }
                    } catch (t) {
                        s = !0,
                        c = t
                    } finally {
                        try {
                            !n && u.return && u.return()
                        } finally {
                            if (s)
                                throw c
                        }
                    }
                }
                return i._opcoes.wheel && window.addWheelListener(i._scroll, function(t) {
                    t.deltaY < 0 && (i._scrollFim = !1),
                    i.scrollTo(i._scroll.scrollLeft + t.deltaX, i._scroll.scrollTop + t.deltaY),
                    t.preventDefault()
                }, !0),
                i.refresh(),
                i
            }
            return i(e, t),
            n(e, [{
                key: "_pop",
                value: function() {
                    if (this._scroll.childNodes.length) {
                        var t = this._scroll.childNodes[0];
                        this._opcoes.manterPosicao && (this._scroll.scrollTop -= t.offsetHeight),
                        this._scroll.removeChild(t)
                    }
                }
            }, {
                key: "_scrollbarSize",
                value: function() {
                    if (this._scrollbarVertical) {
                        var t = 0
                          , e = Math.ceil(this._scroll.scrollTop);
                        e < 0 ? (t = e,
                        e = 0) : e + this._scroll.offsetHeight >= this._scroll.scrollHeight && (t = this._scroll.scrollHeight - (e + this._scroll.offsetHeight));
                        var o = this._scroll.offsetHeight / this._scroll.scrollHeight;
                        if (o < .99) {
                            var a = Math.floor(this._scroll.offsetHeight * o);
                            this._scrollbarVertical.style.display = "",
                            this._scrollbarVertical.style.height = a + t - this._opcoes.margemVertical[0] - this._opcoes.margemVertical[1] + "px",
                            this._scrollbarVertical.style.top = e / (this._scroll.scrollHeight - t - this._scroll.offsetHeight) * (this._scroll.offsetHeight - a - t) + this._opcoes.margemVertical[0] + "px"
                        } else
                            this._scrollbarVertical.style.display = "none"
                    }
                    if (this._scrollbarHorizontal) {
                        var r = 0
                          , i = this._scroll.scrollLeft;
                        this._scroll.scrollLeft < 0 ? (i = 0,
                        r = this._scroll.scrollLeft) : this._scroll.scrollLeft + this._scroll.offsetWidth > this._scroll.scrollWidth && (r = this._scroll.scrollWidth - (this._scroll.scrollLeft + this._scroll.offsetWidth));
                        var n = this._scroll.offsetWidth / this._scroll.scrollWidth;
                        if (n < .99) {
                            var s = Math.floor(this._scroll.offsetWidth * n);
                            this._scrollbarHorizontal.style.display = "",
                            this._scrollbarHorizontal.style.width = s + r - this._opcoes.margemHorizontal[0] - this._opcoes.margemHorizontal[1] + "px",
                            this._scrollbarHorizontal.style.left = i / (this._scroll.scrollWidth - r - this._scroll.offsetWidth) * (this._scroll.offsetWidth - s - r) + this._opcoes.margemHorizontal[0] + "px"
                        } else
                            this._scrollbarHorizontal.style.display = "none"
                    }
                }
            }, {
                key: "_scrollbarStart",
                value: function(t, e) {
                    var o = this
                      , a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , r = void 0
                      , i = void 0
                      , n = void 0
                      , s = void 0
                      , c = void 0
                      , l = void 0
                      , u = void 0;
                    this._moving = !0,
                    e ? (r = this._scrollbarVertical,
                    i = t.touches ? t.touches[0].clientY : t.clientY,
                    n = r.offsetTop - this._opcoes.margemVertical[0],
                    s = this._scroll.offsetHeight - r.offsetHeight - this._opcoes.margemVertical[0] - this._opcoes.margemVertical[1],
                    c = "scrollTop",
                    l = "clientY",
                    u = this._scroll.scrollHeight - this._scroll.offsetHeight) : (r = this._scrollbarHorizontal,
                    i = t.touches ? t.touches[0].clientX : t.clientX,
                    n = r.offsetLeft - this._opcoes.margemHorizontal[0],
                    s = this._scroll.offsetWidth - r.offsetWidth - this._opcoes.margemHorizontal[0] - this._opcoes.margemHorizontal[1],
                    c = "scrollLeft",
                    l = "clientX",
                    u = this._scroll.scrollWidth - this._scroll.offsetWidth);
                    var _ = function(t) {
                        var e = void 0;
                        e = a ? n + i - (t.touches ? t.touches[0][l] : t[l]) : n + (t.touches ? t.touches[0][l] : t[l]) - i,
                        e <= 0 ? e = 0 : e >= s ? e = s : t.preventDefault(),
                        o._scroll[c] = u * e / s
                    }
                      , d = function t() {
                        document.removeEventListener("mousemove", _, !1),
                        document.removeEventListener("mouseup", t, !1),
                        a || document.removeEventListener("touchmove", _, !1),
                        document.removeEventListener("touchend", t, !0),
                        o._moving = !1
                    };
                    document.addEventListener("mousemove", _, !1),
                    document.addEventListener("mouseup", d, !1),
                    a || document.addEventListener("touchmove", _, !1),
                    document.addEventListener("touchend", d, !0)
                }
            }, {
                key: "_sombras",
                value: function() {
                    var t = this._scroll.scrollTop - this._opcoes.tolerancia <= 0;
                    if (this._scroll.scrollTop + this._scroll.offsetHeight + this._opcoes.tolerancia >= this._scroll.scrollHeight ? (this._scrollFim = !0,
                    s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "fim")) : this._scrollFim = !1,
                    t && s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "inicio"),
                    this._opcoes.classes) {
                        var o = "";
                        this._scrollFim ? this._opcoes.classes && this._scroll.scrollTop > 0 && (o = this._opcoes.classes[0]) : this._opcoes.classes && (t ? o = this._opcoes.classes[2] : this._scroll.scrollTop > 0 && (o = this._opcoes.classes[1])),
                        o != this._sombraClasse && (this._sombraClasse && this._elem.classList.remove(this._sombraClasse),
                        o ? (this._elem.classList.add(o),
                        this._sombraClasse = o) : this._sombraClasse = "")
                    }
                }
            }, {
                key: "append",
                value: function(t) {
                    this._opcoes.elementosMax && this._scroll.childNodes.length >= this._opcoes.elementosMax && this._pop(),
                    this._scroll.appendChild(t),
                    this.refresh()
                }
            }, {
                key: "empty",
                value: function() {
                    this._scroll.innerHTML = "",
                    this.refresh()
                }
            }, {
                key: "refresh",
                value: function() {
                    !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._opcoes.manterPosicao && this._scrollFim && this.scrollTo(void 0, this._scroll.scrollHeight),
                    this._scrollbarSize(),
                    this._sombras()
                }
            }, {
                key: "remove",
                value: function(t) {
                    this._scroll.removeChild(t)
                }
            }, {
                key: "scrollTo",
                value: function(t, e) {
                    void 0 !== t && (this._scroll.scrollLeft = t),
                    void 0 !== e && (this._scroll.scrollTop = e)
                }
            }, {
                key: "scrollEnd",
                value: function(t, e) {
                    t = t ? this._scroll.scrollWidth : void 0,
                    e = e ? this._scroll.scrollHeight : void 0,
                    this.scrollTo(t, e)
                }
            }, {
                key: "scrollElem",
                get: function() {
                    return this._scroll
                }
            }]),
            e
        }(l.default);
        !function(t, e) {
            function o(e, o, n, s) {
                e[r](a + o, "wheel" == i ? n : function(e) {
                    !e && (e = t.event);
                    var o = {
                        originalEvent: e,
                        target: e.target || e.srcElement,
                        type: "wheel",
                        deltaMode: "MozMousePixelScroll" == e.type ? 0 : 1,
                        deltaX: 0,
                        deltaY: 0,
                        deltaZ: 0,
                        preventDefault: function() {
                            e.preventDefault ? e.preventDefault() : e.returnValue = !1
                        }
                    };
                    return "mousewheel" == i ? (o.deltaY = -.025 * e.wheelDelta,
                    e.wheelDeltaX && (o.deltaX = -.025 * e.wheelDeltaX)) : o.deltaY = e.detail,
                    n(o)
                }
                , s || !1)
            }
            var a = ""
              , r = void 0
              , i = void 0;
            t.addEventListener ? r = "addEventListener" : (r = "attachEvent",
            a = "on"),
            i = "onwheel"in e.createElement("div") ? "wheel" : void 0 !== e.onmousewheel ? "mousewheel" : "DOMMouseScroll",
            t.addWheelListener = function(t, e, a) {
                o(t, i, e, a),
                "DOMMouseScroll" == i && o(t, "MozMousePixelScroll", e, a)
            }
        }(window, document),
        o.default = u
    }
    , {
        eventos: 344
    }],
    355: [function(t, e, o) {
        function a(t) {
            var e;
            if ("SELECT" === t.nodeName)
                t.focus(),
                e = t.value;
            else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var o = t.hasAttribute("readonly");
                o || t.setAttribute("readonly", ""),
                t.select(),
                t.setSelectionRange(0, t.value.length),
                o || t.removeAttribute("readonly"),
                e = t.value
            } else {
                t.hasAttribute("contenteditable") && t.focus();
                var a = window.getSelection()
                  , r = document.createRange();
                r.selectNodeContents(t),
                a.removeAllRanges(),
                a.addRange(r),
                e = a.toString()
            }
            return e
        }
        e.exports = a
    }
    , {}],
    356: [function(t, e, o) {
        "use strict";
        function a(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            return function(e, o, a) {
                return o && t(e.prototype, o),
                a && t(e, a),
                e
            }
        }()
          , i = function() {
            function t(e) {
                a(this, t),
                this._endereco = e.base,
                this._ativo = !0,
                this._listaSons = [],
                this._listaTocando = [],
                this._audioTag,
                this._extensao;
                try {
                    (new Audio).canPlayType("audio/mpeg") && (this._extensao = ".mp3"),
                    this._audioTag = !0
                } catch (t) {
                    this._audioTag = !1,
                    this._ativo = !1
                }
            }
            return r(t, [{
                key: "_pauseAll",
                value: function() {
                    for (var t in this._listaTocando)
                        this._listaTocando[t] && this.pause(t)
                }
            }, {
                key: "ativar",
                value: function() {
                    if (this._audioTag) {
                        this._ativo = !0;
                        var t = void 0
                          , e = [];
                        for (t in this._listaTocando)
                            this._listaTocando[t] && e.push(t);
                        this._pauseAll();
                        for (var o = 0; o < e.length; o++)
                            this.play(e[o], !1, !0)
                    }
                }
            }, {
                key: "desativar",
                value: function() {
                    this._pauseAll(),
                    this._ativo = !1
                }
            }, {
                key: "load",
                value: function(t) {
                    if (this._audioTag)
                        for (var e in t) {
                            var o = t[e];
                            if (!this._listaSons[o]) {
                                var a = new Audio;
                                a.src = this._endereco + o + this._extensao,
                                a.load(),
                                this._listaSons[o] = a
                            }
                        }
                }
            }, {
                key: "pause",
                value: function(t) {
                    var e = this._listaSons[t];
                    e && (e.pause(),
                    this._listaTocando[t] = !1)
                }
            }, {
                key: "play",
                value: function(t) {
                    var e = this
                      , o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                      , r = this._listaSons[t];
                    r && this._ativo && function() {
                        r.currentTime = 0,
                        r.loop = o,
                        r.volume = a,
                        e._listaTocando[t] = !0,
                        r.setAttribute("som", t),
                        r.onpause = function() {
                            i(this.getAttribute("som"))
                        }
                        ;
                        var i = function(t) {
                            e._listaTocando[t] = !1
                        };
                        r.play()
                    }()
                }
            }, {
                key: "ativo",
                get: function() {
                    return this._ativo
                }
            }]),
            t
        }();
        o.default = i
    }
    , {}],
    357: [function(t, e, o) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function n(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            return function(e, o, a) {
                return o && t(e.prototype, o),
                a && t(e, a),
                e
            }
        }()
          , c = function t(e, o, a) {
            null === e && (e = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(e, o);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(e);
                return null === i ? void 0 : t(i, o, a)
            }
            if ("value"in r)
                return r.value;
            var n = r.get;
            if (void 0 !== n)
                return n.call(a)
        }
          , l = t("eventos")
          , u = a(l)
          , _ = t("conexao")
          , d = a(_)
          , p = function(t) {
            function e(t, o) {
                r(this, e);
                var a = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return a._opcoes = Object.assign({
                    base: "",
                    transicao: !1,
                    historico: !1,
                    classeAtivo: "ativo",
                    cachePosterior: !1
                }, o),
                a._telas = [],
                a._travado = !1,
                a._telaElem = null,
                a._telaPagina = null,
                a._telaMarcador = null,
                a._container = t,
                a._bloqueio = !1,
                a._navegacao = [],
                a._contagem = -1,
                a._contagemAnterior = -1,
                a._callbacks = [],
                a._timer = null,
                a._idioma = null,
                a._saida = !1,
                a._conexao = new d.default({
                    base: a._opcoes.base,
                    timeout: 5e3,
                    removerCache: !0,
                    statusOff: !0
                }),
                !1 !== a._opcoes.historico && (window.addEventListener("popstate", function(t) {
                    if (a._saida)
                        a._saida = !1;
                    else {
                        var o = t.state;
                        if (a._bloqueio || a._travado || !o || !o.pagina)
                            if (a._bloqueio || a._travado) {
                                for (var r = o && o.pagina ? o.contagem : -1; ++r <= a._contagem; )
                                    o = a._navegacao[r],
                                    history.pushState(a._cloneHistory(o), null, a._opcoes.historico + o.url);
                                c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", a).call(a, "travado", o.pagina)
                            } else
                                o = a._navegacao[0],
                                history.pushState(a._cloneHistory(o), null, a._opcoes.historico + o.url),
                                c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", a).call(a, "fechar");
                        else
                            a._desempilhar(o, !0)
                    }
                }),
                history.replaceState({}, null, "./")),
                a
            }
            return n(e, t),
            s(e, [{
                key: "_carregar",
                value: function(t, e) {
                    var o = this;
                    this._conexao.chamada(t + ".html", "", "GET", function(a) {
                        o._telas[t] = a,
                        e && e()
                    })
                }
            }, {
                key: "_cloneHistory",
                value: function(t) {
                    return {
                        pagina: t.pagina,
                        url: t.url,
                        params: t.params,
                        marcado: t.marcado,
                        contagem: t.contagem
                    }
                }
            }, {
                key: "_traduzir",
                value: function(t) {
                    var e = this._telas[t];
                    if (this._idioma && this._idioma[t]) {
                        var o = this._idioma[t];
                        for (var a in o)
                            e = e.replace(RegExp("{{" + a + "}}", "g"), o[a])
                    }
                    return e
                }
            }, {
                key: "abrir",
                value: function(t) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , r = this
                      , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : t;
                    if (!this._bloqueio) {
                        if (this._bloqueio = !0,
                        !this._telas[t])
                            return void this._carregar(t, function() {
                                r._bloqueio = !1,
                                r.abrir(t, o, a, i, n)
                            });
                        o || this._empilhar(t, a, !1, n);
                        var s = this._navegacao[this._contagem].elem
                          , l = !0;
                        s || (s = document.createElement("div"),
                        s.className = "tela",
                        s.innerHTML = this._traduzir(t),
                        this._container.appendChild(s),
                        this._navegacao[this._contagem].elem = s,
                        l = !1),
                        c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "preload", t, s, a, l),
                        this._transicao = function(o) {
                            r._timer && clearTimeout(r._timer),
                            o && r._telaElem.removeEventListener("transitionend", r._transicao, !1),
                            r._telaElem && (r._telaElem.style.display = "none"),
                            s.style.display = "block",
                            s.offsetWidth,
                            setTimeout(function() {
                                return s.classList.add(r._opcoes.classeAtivo)
                            }, 0),
                            r._telaPagina = t,
                            r._telaElem = s,
                            r._bloqueio = !1,
                            !r._opcoes.cachePosterior && r._contagemAnterior > r._contagem && r.removerCache(!0),
                            c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", r).call(r, "pagina", t, s, a, l);
                            var i = !0
                              , n = !1
                              , u = void 0;
                            try {
                                for (var _, d = r._callbacks[Symbol.iterator](); !(i = (_ = d.next()).done); i = !0) {
                                    (0,
                                    _.value)()
                                }
                            } catch (t) {
                                n = !0,
                                u = t
                            } finally {
                                try {
                                    !i && d.return && d.return()
                                } finally {
                                    if (n)
                                        throw u
                                }
                            }
                            r._callbacks = []
                        }
                        ,
                        this._opcoes.transicao && !i && this._telaElem ? (this._opcoes.transicao && (this._timer && clearTimeout(this._timer),
                        this._timer = setTimeout(function() {
                            return r._transicao(!0)
                        }, this._opcoes.transicao)),
                        this._telaElem.addEventListener("transitionend", this._transicao, !1),
                        this._telaElem.classList.remove(this._opcoes.classeAtivo),
                        c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "saida", this._telaPagina, this._telaElem, t)) : (this._telaElem && (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "saida", this._telaPagina, this._telaElem, t),
                        this._telaElem.classList.remove(this._opcoes.classeAtivo)),
                        this._transicao())
                    }
                }
            }, {
                key: "abrirForcado",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : t;
                    this._timer && clearTimeout(this._timer),
                    this._transicao && this._telaElem.removeEventListener("transitionend", this._transicao, !1),
                    this._bloqueio = !1,
                    this.abrir(t, e, o, a, r)
                }
            }, {
                key: "marcar",
                value: function(t) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t;
                    this._telaMarcador && c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "saida", this._telaMarcador, null, t),
                    o || this._empilhar(t, a, !0, r),
                    c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "pagina", t, null, a),
                    this._telaMarcador = t
                }
            }, {
                key: "desmarcar",
                value: function() {
                    if (!1 == !this._opcoes.historico && this._telaMarcador && !(this._contagem <= 0)) {
                        for (var t = 0; this._navegacao[this._contagem - t].marcado && this._contagem - t > 0; )
                            t++;
                        t && this.voltar(t)
                    }
                }
            }, {
                key: "_empilhar",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                      , o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t;
                    this._contagemAnterior = this._contagem;
                    for (var r = {
                        pagina: t,
                        url: a,
                        params: e,
                        marcado: o,
                        contagem: ++this._contagem
                    }; this._contagem < this._navegacao.length; )
                        this._navegacao[this._contagem].elem && this._container.removeChild(this._navegacao[this._contagem].elem),
                        this._navegacao.splice(this._contagem, 1);
                    this._navegacao.push(r),
                    !1 !== this._opcoes.historico && history.pushState(r, null, this._opcoes.historico + a)
                }
            }, {
                key: "_desempilhar",
                value: function(t, o) {
                    t ? (this._contagemAnterior = this._contagem,
                    this._contagem = t.contagem,
                    this._telaMarcador ? (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "saida", this._telaMarcador, null, this._telaPagina),
                    this._telaMarcador = null) : t.marcado ? this.marcar(t.pagina, !0, t.params, t.url) : o ? this.abrirForcado(t.pagina, !0, t.params, void 0, t.url) : this.abrir(t.pagina, !0, t.params, void 0, t.url)) : this._contagem = -1
                }
            }, {
                key: "preload",
                value: function(t) {
                    var e = !0
                      , o = !1
                      , a = void 0;
                    try {
                        for (var r, i = t[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                            var n = r.value;
                            this._carregar(n)
                        }
                    } catch (t) {
                        o = !0,
                        a = t
                    } finally {
                        try {
                            !e && i.return && i.return()
                        } finally {
                            if (o)
                                throw a
                        }
                    }
                }
            }, {
                key: "removerCache",
                value: function(t) {
                    var e = void 0
                      , o = void 0
                      , a = void 0;
                    t ? (e = this._navegacao.length,
                    a = this._contagem + 1) : (e = this._contagem,
                    a = 0);
                    for (var r = a; r < e; r++)
                        o = this._navegacao[r],
                        o.elem && (this._container.removeChild(o.elem),
                        delete this._navegacao[r].elem)
                }
            }, {
                key: "registrarCallback",
                value: function(t) {
                    t instanceof Function && this._callbacks.push(t)
                }
            }, {
                key: "voltar",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                      , e = arguments[1];
                    if (!(this._travado || !this._saida && this._contagem - t < 0))
                        if (!1 != !this._opcoes.historico) {
                            var o = this._navegacao[this._contagem - t];
                            this._desempilhar(o)
                        } else
                            e && (this._saida = !0,
                            t++),
                            history.go(-t)
                }
            }, {
                key: "voltarTudo",
                value: function(t) {
                    var e = this._contagem;
                    e > 0 && this.voltar(e, t)
                }
            }, {
                key: "ir",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.voltar(-t)
                }
            }, {
                key: "irFinal",
                value: function() {
                    this.voltar(1 - this._navegacao.length)
                }
            }, {
                key: "sair",
                value: function() {
                    var t = this._contagem + 2;
                    this._saida = !0,
                    this.voltar(t)
                }
            }, {
                key: "idioma",
                set: function(t) {
                    t && (this._idioma = t,
                    c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).call(this, "idioma", t))
                },
                get: function() {
                    return this._idioma
                }
            }, {
                key: "pagina",
                get: function() {
                    return this._telaPagina
                }
            }, {
                key: "travado",
                get: function() {
                    return this._travado
                },
                set: function(t) {
                    this._travado = t
                }
            }]),
            e
        }(u.default);
        o.default = p
    }
    , {
        conexao: 11,
        eventos: 344
    }],
    358: [function(t, e, o) {
        function a() {}
        a.prototype = {
            on: function(t, e, o) {
                var a = this.e || (this.e = {});
                return (a[t] || (a[t] = [])).push({
                    fn: e,
                    ctx: o
                }),
                this
            },
            once: function(t, e, o) {
                function a() {
                    r.off(t, a),
                    e.apply(o, arguments)
                }
                var r = this;
                return a._ = e,
                this.on(t, a, o)
            },
            emit: function(t) {
                var e = [].slice.call(arguments, 1)
                  , o = ((this.e || (this.e = {}))[t] || []).slice()
                  , a = 0
                  , r = o.length;
                for (a; a < r; a++)
                    o[a].fn.apply(o[a].ctx, e);
                return this
            },
            off: function(t, e) {
                var o = this.e || (this.e = {})
                  , a = o[t]
                  , r = [];
                if (a && e)
                    for (var i = 0, n = a.length; i < n; i++)
                        a[i].fn !== e && a[i].fn._ !== e && r.push(a[i]);
                return r.length ? o[t] = r : delete o[t],
                this
            }
        },
        e.exports = a,
        e.exports.TinyEmitter = a
    }
    , {}]
}, {}, [1]);
