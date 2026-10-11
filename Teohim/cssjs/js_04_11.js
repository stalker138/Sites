var v_descSH, v_sessionID, v_capID, v_trname, v_trname2, v_trtara, v_zlist, v_zlistt, v_zlist_, v_zlistr, v_mtrt, v_fields, v_cb8, v_aPages, a_fgalItems, v_changeRal, aRal, v_ralOldK, v_ralOldR1, v_ralOldR2, v_ralCF, v_storage = 0, v_layer = null, v_dialogEsc = 0, v_esc = 0, v_interval = null, v_intvl = null, v_int_cap = null, v_mode = 0, v_setsb = 0, v_IE18 = 0, v_queryHttp = 0, v_queryXHR = 0, v_cap = "", v_XHRC = $.httpNew(), v_XHR = $.httpNew(), v_cb = '<div class="px', v_cp = '"></div>', v_px0 = v_cb + "0" + v_cp, v_px0b = v_cb + "0b" + v_cp, v_px1 = v_cb + "1" + v_cp, v_px3 = v_cb + "3" + v_cp, v_px3b = v_cb + "3b" + v_cp, v_px5 = v_cb + "5" + v_cp, v_px7 = v_cb + "7" + v_cp, v_px5b = v_cb + "5b" + v_cp, v_px10 = v_cb + "10" + v_cp, v_px10b = v_cb + "10b" + v_cp, v_px15 = v_cb + "15" + v_cp, v_px15b = v_cb + "15b" + v_cp, v_px20 = v_cb + "20" + v_cp, v_px20b = v_cb + "20b" + v_cp, v_px25 = v_cb + "25" + v_cp, v_px25b = v_cb + "25b" + v_cp, v_px30 = v_cb + "30" + v_cp, v_px30b = v_cb + "30b" + v_cp, v_px40 = v_cb + "40" + v_cp, v_px50 = v_cb + "50" + v_cp, v_wlh = window.location.href, v_page = 0, o_pageToUp = null, v_idBT_I = null, v_idBT_S = 0, v_ordEdit = 0, v_spIDmail = "im.ruteohim@teoh", v_smls_txt = '<div style="cursor:pointer;float:left;width:105px;margin:0;padding:5px 0;text-align:center;font-size:11px;text-decoration:underline;" onclick="f_smiles(0)">Cмотреть отзывы</div>', a_gal = [], a_fgal = [], v_galItem = -1, a_galItems = [-1, 0, 0, 0], aRalN = [], aRalC = [], aRalSel = [], dBalPrice = 0;
function f_show_query() {
    var t,
    e;
    v_layer = $.addLayer(0, "#808080", 260, 0, 0),
    v_descSH = $.aOpacity(v_layer, 1e3, 100, 0, 1),
    $.uEnv(),
    (t = parseInt($.gCW() / 2 - 150, 10)) < 0 && (t = 0),
    (e = parseInt($.gCH() / 2 - 100, 10)) < 0 && (e = 0),
    v_queryXHR = 1,
    v_layer.innerHTML = '<div style="position:fixed;left:' + t + "px;top:" + e + 'px;width:300px;height:150px;border:solid 1px #0969a3;"><table class="twajax"><tbody><tr><td>Please wait...' + v_px10 + "Пожалуйста, подождите...</td></tr></tbody></table></div>"
}
function f_hide_query() {
    v_interval && clearInterval(v_interval),
    v_interval = null,
    (v_queryXHR = 0) <= v_descSH && $.aClear(v_descSH),
    $.removeLayer(v_layer),
    v_layer = null
}
function f_replace(t, e) {
    return t = $.trim(t.replace(/\¡/gm, "i").replace(/\'/gm, "’").replace(/\"/gm, "”").replace(new RegExp($.gCC(9), "g"), " ")),
    (e = e || 0) && (t = (t = t.replace(new RegExp($.gCC(10), "g"), "")).replace(new RegExp($.gCC(13), "g"), "")),
    t
}
function f_checkEmail(t) {
    var e = new RegExp("[^@]+@[^@]+.[a-zA-Z]{2,6}");
    return 0 < t.indexOf(".") && e.test(t)
}
function f_mesNot() {
    f_message('<div class="pb_ah0">Message</div>', "In developing...", 200, 100)
}
function f_mesErr(t, e, i, a, l, s) {
    f_message(t = '<div class="pb_ahr">' + t + "</div>", e, i, a, l, s)
}
function f_mesXRST(t) {
    f_mesErr("Ошибка связи. Статус:" + t, "Временные технические проблемы." + v_px5 + "Повторите позже.", 320, 120)
}
function f_message(t, e, i, a, l, s) {
    var d = e.indexOf("<input");
    $.wDelete(1),
    l && 1 != l || (v_esc = 1),
    -1 != d || l && 1 != l || (a += 30, e += v_px15 + '<input type="button" class="pb_buttons" id="idMsgOK" value="Ok" style="width:70px;height:30px;" onclick="$.wDelete(1,1);"/>'),
    $.wAlert(t, v_px5 + e, i, a, l, s),
    -1 != d || l && 1 != l || $.id("idMsgOK").focus()
}
function f_ltblock(t) {
    for (var e = $.B, i = $.id("mlblock"), a = $.id("ltblock"), l = $.id("ya-site-form0"), s = $.id("ya-site-form1"), d = parseInt($.gStyle(i, "width"), 10), r = (t = t || window.event).target || t.srcElement; r != e && r != a && r != i && r != l && r != s; )
        r = r.parentNode;
    100 < d && r == i || r == l || r == s || ($._(24)(t), i.style.width = (d < 100 ? 310 : 50) + "px", i.style.height = d < 100 ? "auto" : "40px", $.id("ltblock").style.height = d < 100 ? "50px" : "auto", $.id("mmenu").style.visibility = d < 100 ? "visible" : "hidden", $.id("melakor").style.display = d < 100 ? "block" : "none")
}
function f_init_zlist() {
    v_zlistt = [[0, ""]],
    v_zlistr = [[0, 0, 0, 0]]
}
function f_set_zlist(t) {
    var e,
    i,
    a,
    l,
    s,
    d = 3,
    r = v_zlistr,
    _ = r.length;
    if ((t = t || 0) && (a = $.gLS("zlistr") || JSON.stringify(v_zlistr), v_zlistr = JSON.parse(a), a = $.gLS("zlistr") || JSON.stringify(v_zlistr), v_zlistr = JSON.parse(a)), 226 == v_page) {
        for (e = 1; e < _; e += 1) {
            for (s = r[e][0], i = r[e][4], $.id("ordF" + s + "_" + i + "_0") && ((a = $.id("ordD" + s + "_" + i)).innerHTML = "", a.className = "", a.title = "", $.id("trt" + s + "_" + i + "_ld").className = "trt_none", $.id("trt" + s + "_" + i + "_I") && ($.id("trt" + s + "_" + i + "_I").className = "trt_none")), ii = 0; ii < 4; ii += 1)
                (a = $.id("trt" + s + "_" + i + "_" + ii)) && (a.className = "trt_none");
            (a = $.id("dordRal" + s + "_" + i)) && 0 <= aRal.indexOf(s) && (a.style.background = "#" + (0 < r[e][5] ? aRalC[r[e][5]][r[e][6]] : aRalC[7][40]))
        }
        if (0 < (l = r[0][2]))
            for (60 <= l && l < 200 && (d = 4), 200 <= l && l < 500 && (d = 5), 500 <= l && l < 1e3 && (d = 6), 1e3 <= l && l < 3e3 && (d = 7), 3e3 <= l && (d = 8), e = 1; e < _; e += 1)
                f_t226(r[e][0], e, d, r[e][4]);
        0 == l ? ($.id("id_div_clear").style.display = "block", $.id("trt0th").className = "trt_none", $.id("trt1th").className = "trt_none", $.id("clc").style.display = $.id("clz").style.display = $.id("dlnkPR").style.display = $.id("idOrdert").style.display = $.id("dordEdit").style.display = "none") : ($.id("id_div_clear").style.display = "none", $.id("trt0th").className = "trt_tr fwb", $.id("trt1th").className = "trt_tr", $.id("clc").style.display = $.id("clz").style.display = $.id("dlnkPR").style.display = $.id("idOrdert").style.display = $.id("dordEdit").style.display = "block")
    }
}
function f_t226(t, e, i, a) {
    var l,
    s,
    d,
    _,
    n,
    o,
    p,
    v,
    c = 0,
    f = 0,
    g = 0,
    h = 0,
    u = 0;
    if (t = t || 0, r = v_zlistr, t && (s = [(p = r[e])[2][0], p[2][2], p[2][4], p[2][6], p[2][8], p[2][10]], d = JSON.parse(JSON.stringify(v_mtrt[t][10])), _ = JSON.parse(JSON.stringify(v_mtrt[t][11])), 226 == v_page)) {
        for ($.id("ordF" + t + "_" + a + "_0") && ((v = $.id("ordD" + t + "_" + a)).innerHTML = "", v.className = "", v.title = ""), 0 <= aRal.indexOf(t) && (u = aRalN[r[e][5]][r[e][6]] || 0, f_tr12(r[e][5], r[e][6]) || (u = 0)), l = 0; l < 4; l += 1)
            0 < d[l] && (c += s[l] * d[l]);
        for (99620 < c && (c = 99620), c < d[0] + d[0] && (17 == t || 20 == t || 21 == t || 22 == t || 165 == t || 193 == t || 205 == t || 206 == t) && (u = 0, $.id("dordRal" + t + "_" + a) && ($.id("dordRal" + t + "_" + a).style.background = "#" + (0 < r[e][5] ? aRalC[r[e][5]][r[e][6]] : aRalC[7][40]))), c < d[0] && (33 == t || 37 == t || 71 == t) && (u = 0, $.id("dordRal" + t + "_" + a) && ($.id("dordRal" + t + "_" + a).style.background = "#" + (0 < r[e][5] ? aRalC[r[e][5]][r[e][6]] : aRalC[7][40]))), o = v_mtrt[t][i], 0 < u && ((27 == t || 57 == t) && (o += 25), o += u += 840 <= c ? 5 : aRal[0] / c > Math.round(aRal[0] / c) ? Math.round(aRal[0] / c) + 1 : Math.round(aRal[0] / c)), _[c = 0] && _[2] && _[3] && (h = 1), 1 == s[u = 3] && (0 < s[1] || 0 < s[0]) && 1 == h && (_[u] = _[u - 1]), 1 == s[u = 2] && 0 == s[3] && (0 < s[1] || 0 < s[0]) && (_[u] = _[u - 1]), (u = 1) == s[u] && 0 == s[3] && 0 == s[2] && 0 < s[0] && 0 == h && (_[u] = _[u - 1]), l = 0; l < 4; l += 1)
            (v = $.id("trt" + t + "_" + a + "_" + l)) && (v.className = "trt_none"), 0 < d[l] && (c += s[l] * d[l], 0 < s[l] ? (v.className = "trt_tr", v.style.color = "#000000", f += 1) : 1 == v_ordEdit && (v.className = "trt_tr", v.style.color = "#808080", f += 1), $.id("ordF" + t + "_" + a + "_" + l).innerHTML = '<span style="font:bold 13px arial">' + s[l] + "</span> по " + d[l] + (105 == t || 106 == t || 227 == t ? "л" : "кг"), 1 == v_ordEdit ? (n = '<div class="f_l" onclick="f_ordTara(' + t + "," + e + "," + a + "," + l + ',2)"></div><input type="text" id="id_inptara' + t + "_" + a + "_" + l + '" style="float:left;width:69px;height:15px;text-align:right;" maxlength="8"', n += " onfocus=\"if(this.value=='нет'){this.value='';this.style.color='#000000'}\" onblur=\"if(this.value==''){this.value='нет';this.style.color='inherit'}\" onchange=\"f_ordTara(" + t + "," + e + "," + a + "," + l + ',0)" value="' + (0 == s[l] ? "нет" : (s[l] * d[l]).toFixed(2)) + '"/>', n += '<div class="f_r"' + (99620 < c ? "" : ' onclick="f_ordTara(' + t + "," + e + "," + a + "," + l + ',1)"') + "></div>") : n = "" + (0 == s[l] ? "нет" : f_ts((s[l] * d[l]).toFixed(2))), $.id("ordK" + t + "_" + a + "_" + l).innerHTML = n, g += s[l] * d[l] * (o + _[l]), $.id("ordC" + t + "_" + a + "_" + l).innerHTML = f_ts((o + _[l]).toFixed(2)), $.id("ordS" + t + "_" + a + "_" + l).innerHTML = f_ts((s[l] * d[l] * (o + _[l])).toFixed(2)), 1 == v_ordEdit && ((v = $.id("ordD" + t + "_" + a)).className = "ordDtd", v.innerHTML = '<div class="ordD"></div>', v.title = "Удалить"), (v = $.id("ordRal" + t + "_" + a)) && (v.innerHTML = 0 <= aRal.indexOf(t) ? "RAL " + (1e3 * r[e][5] + r[e][6]) : "Базовый (RAL 7035, RAL 7040)"), 0 < f && ($.id("trt" + t + "_" + a + "_ld").className = "trt_tr", $.id("trt" + t + "_" + a + "_I") && 1 < f && ($.id("trt" + t + "_" + a + "_I").className = "trt_tr")), $.id("trt" + t + "_" + a + "_I") && ($.id("ordKI" + t + "_" + a).innerHTML = f_ts(c.toFixed(2)), $.id("ordCS" + t + "_" + a).innerHTML = f_ts(g.toFixed(2))));
        return [c, g]
    }
}
function f_ts(t, e) {
    var i,
    a;
    return e = e || "",
    "string" != typeof t && "number" == typeof t && (t = t.toFixed(e ? 2 : 0)),
    "string" != typeof t && (t = "0.00"),
    e && (t = $.trim(t.replace(/\./gm, e)), t = $.trim(t.replace(/\,/gm, e))),
    t = e ? 0 < (a = t.indexOf(e)) ? (i = t.substr(0, a), t.substr(a)) : 0 == a ? (i = "", "0" + t) : (i = t, "") : (i = t, ""),
    3 < (a = i.length) && (i = i.substr(0, a - 3) + " " + i.substr(a - 3)),
    7 < (a = i.length) && (i = i.substr(0, a - 7) + " " + i.substr(a - 7)),
    11 < (a = i.length) && (i = i.substr(0, a - 11) + " " + i.substr(a - 11)),
    0 < (a = (i += t).indexOf(" .")) && (i = i.substr(0, a) + i.substr(a + 1)),
    i
}
function f_ordTara(t, e, i, a, l) {
    var s,
    d,
    r,
    _,
    n,
    o = 0,
    p = 0;
    if (a = a || 0, !(a < 0 || 3 < a || l < 0 || 2 < l || t < 11 || 351 < t) && (f_basketRalDel(event), d = v_mtrt[t], t)) {
        for (r = JSON.parse(JSON.stringify(d[9])), _ = JSON.parse(JSON.stringify(d[10])), n = v_zlistr[e], (d = parseFloat($.id("id_inptara" + t + "_" + i + "_" + a).value) || 0) < 0 && (d = 0), s = 0; s < 4; s += 1)
            r[s] = n[2][s + s] || 0, _[s] = n[2][s + s + 1] || 0;
        for (1 == l && (r[a] += 1), 2 == l && 0 < r[a] && --r[a], r[a] < 0 && (r[a] = 0), 0 == l && (d / _[a] > Math.round(d / _[a]) ? r[a] = Math.round(d / _[a]) + 1 : r[a] = Math.round(d / _[a])), s = 0; s < 4; s += 1)
            p += r[s] * _[s];
        if (p <= 0)
            return $.id("id_inptara" + t + "_" + i + "_" + a).value = _[a].toFixed(2), void f_message('<div class="pb_ahr">Недопустимое количество!</div>', '<span class="c1">Недопустимое минимальное количество!</span>' + v_px5, 400, 100);
        if (0 <= aRal.indexOf(t) && 0 < n[5] && (7 != n[5] || 35 != n[6] && 40 != n[6]) && 1 != l && p < _[0] + _[0] && (17 == t || 20 == t || 21 == t || 22 == t || 165 == t || 193 == t || 205 == t || 206 == t))
            f_message('<div class="pb_ahr">Колеровка от количества!</div>', '<span class="c1">Минимальное количество для колеровки<br>&nbsp;<br>' + (_[0] + _[0]) + (105 == t || 106 == t || 227 == t ? "л" : "кг") + "</span>" + v_px5, 400, 130);
        else if (0 <= aRal.indexOf(t) && 0 < n[5] && (7 != n[5] || 35 != n[6] && 40 != n[6]) && 1 != l && p < _[0] && (33 == t || 37 == t || 71 == t))
            f_message('<div class="pb_ahr">Колеровка от количества!</div>', '<span class="c1">Минимальное количество для колеровки<br>&nbsp;<br>' + _[0] + "кг</span>" + v_px5, 400, 130);
        else {
            for (s = 0; s < 4; s += 1)
                n[2][s + s] = r[s], o += r[s] * _[s];
            n[1] = o,
            v_zlistr[e] = n,
            $.sLS("zlistr", JSON.stringify(v_zlistr)),
            f_testBasketSum(),
            f_set_zlist(1)
        }
    }
}
function f_ordDel(t, e) {
    var i,
    a,
    l = 0,
    s = v_zlistr,
    d = s.length;
    if (t = t || 0, s[0][1] ? 1 : 0) {
        for (a = 1; a < d; a += 1)
            s[a][0] == t && s[a][4] == e && (l = a, a = d);
        if (!l)
            return;
        v_zlist_ = s[l],
        v_ralOldK = s[l][1],
        v_changeRal = e,
        i = "ВНИМАНИЕ!" + v_px10 + "Удалить из заказа:" + v_px5 + v_mtrt[t][2] + v_px10 + "Количество: " + s[l][1] + (105 == t || 106 == t || 227 == t ? "л" : "кг") + (0 < s[l][5] ? v_px5 + "Цвет: RAL " + (1e3 * s[l][5] + s[l][6]) : "") + v_px20,
        i += '<input type="button" class="pb_buttons fleft ml20 fwb c8" style="width:100px;" value="Удалить" onclick="f_addRal(' + t + ',0);$.wDelete(1,1);if(v_ordEdit==1)f_basketRalDel(event);f_testBasketSum(); f_set_zlist(1);"/>',
        i += '<input type="button" class="pb_buttons fright mr20" style="width:100px;" value="Отменить" onclick="$.wDelete(1,1);"/>'
    } else
        i = '<span class="fwn fs15">Заказ пустой</span>';
    f_message('<div class="pb_ahr">Удалить из заказа</div>', i, 400, 250)
}
function f_ordEdit() {
    var t = $.id("dordEdit");
    t && (dBalPrice && ($.B.removeChild(dBalPrice), dBalPrice = 0), 0 == v_ordEdit ? (v_ordEdit = 1, t.innerHTML = "Завершить редактирование", $.id("clz").style.display = $.id("clc").style.display = $.id("dlnkPR").style.display = $.id("idOrdert").style.display = $.id("dordEdit").style.display = "none") : (v_ordEdit = 0, t.innerHTML = "Редактировать заказ", $.id("clz").style.display = $.id("clc").style.display = $.id("dlnkPR").style.display = $.id("idOrdert").style.display = $.id("dordEdit").style.display = "block"), f_set_zlist())
}
function f_ordClc() {
    var t = v_zlistr[0][1] ? 1 : 0,
    e = "ВНИМАНИЕ!" + v_px10 + "Очистка списка заказанных материалов!" + v_px10 + "После очистки восстановить информацию невозможно" + v_px20;
    1 != v_ordEdit && (e += '<input type="button" class="pb_buttons fleft ml20 fwb c8" style="width:100px;" value="Очистить" onclick="f_init_zlist();$.sLS(\'zlistr\',JSON.stringify(v_zlistr));window.location.reload();"/>', e += '<input type="button" class="pb_buttons fright mr20" style="width:100px;" value="Отменить" onclick="$.wDelete(1,1);"/>', t || (e = '<span class="fwn fs15">Заказ пустой</span>'), f_message('<div class="pb_ahr">Полная очистка заказа</div>', e, t ? 400 : 220, t ? 185 : 100))
}
function f_ordClz() {
    1 != v_ordEdit && (v_zlistr[0][1] ? f_post(3, v_zlistr[0][3], 1) : f_message("Оформление заказа", '<span class="fwn fs15">Заказ пустой</span>', 200, 100))
}
function f_print() {
    var t = v_wlh,
    e = t.indexOf(".ru/");
    202 < v_page && v_page < 207 ? t += "print.php" : t = "/print/" + t.substr(e + 4),
    t = window.open(t, "", "left=" + ($.uEnv(), 0 + $.gCW() / 2 - 425) + ",top=50,height=" + ($.gCH() - 100) + ",width=850,resizable=yes,scrollbars=yes,status=yes,location=no,directories=no,menubar=no"),
    setTimeout(function () {
        1010 == v_page && f_page1010(0, 1),
        1011 == v_page && f_page1011(0, 1)
    }, 20),
    t.focus()
}
function f_bup(t) {
    var e = window.pageYOffset || document.documentElement.scrollTop;
    $._(24)(t),
    0 < e && null == o_pageToUp && (o_pageToUp = setInterval(function () {
            var t = window.pageYOffset || document.documentElement.scrollTop,
            e = 200 < t ? v_IE18 ? t / 4 : t / 2 + t / 4 : v_IE18 && t < 40 || !v_IE18 && t < 20 ? 0 : v_IE18 ? t / 10 : t / 2;
            window.scrollTo(0, e),
            t < 20 && (clearInterval(o_pageToUp), o_pageToUp = null)
        }, 30))
}
function f_testLS(t) {
    window.sessionStorage && window.sessionStorage.setItem("url", v_wlh)
}
function f_testfbuy() {
    var t,
    e,
    i,
    a,
    l,
    s = v_zlistr,
    d = s.length,
    r = $.qSA(".fbuy,.fbuyb");
    if (r)
        for (a = r.length, t = 0; t < a; t += 1)
            if (r[t].className = "fbuy", i = $.qS("div", r[t]) || 0)
                for (l = parseInt(i.innerHTML, 10) || 0, e = 1; e < d; e += 1)
                    s[e][0] == l && (i.parentNode.className = "fbuyb")
}
function f_init_mtrt() {
    var t,
    e,
    i,
    a,
    l,
    s,
    d;
    for (v_mtrt = [[0]], t = 11; t < 351; t += 1)
        if (e = $.id("idCent" + t)) {
            if (a = [0, 0, 0, 0, 0, 0], l = [0, 0, 0, 0, 0, 0], s = [0, 0, 0, 0, 0, 0], d = [0, 0, 0, 0, 0, 0], "none" != $.id("idTara" + t) && (0 < (i = $.id("idTara" + t).innerHTML).indexOf(",,") && (i = i.replace(/\,\,/gm, ",0,").replace(/\,\,/gm, ",0,")), "none" != i)) {
                for (i = (i = i.substr(1, i.length - 2)).split(","), e = 0; e < 12; e += 1)
                    i[e] || (i[e] = 0);
                for (e = 0; e < 6; e += 1)
                    l[e] = 0 - (0 - i[e + e]), s[e] = 0 - (0 - i[e + e + 1])
            }
            v_mtrt[t] = [t, 0, f_gIH("idNamet" + t, 1), f_imN(t, 3), f_imN(t, 4), f_imN(t, 5), f_imN(t, 6), f_imN(t, 7), f_imN(t, 8), a, l, s, d, 0]
        }
}
function f_imN(t, e) {
    return $.id("idSCent" + t + "_" + e) && parseInt($.id("idSCent" + t + "_" + e).innerHTML, 10) || 0
}
function f_gIH(t, e) {
    return e ? $.id(t) ? $.id(t) ? $.id(t).innerHTML : "" : parseInt($.id(t).innerHTML, 10) || 0 : 0
}
function f_newBasket() {
    var t,
    e = 0,
    i = [[0, 0, 0, 0]],
    a = v_zlistt,
    l = $.gLS("zlistr");
    if (l && 1 < JSON.parse(l).length)
        return f_testBasketSum();
    for (t = 1; t < 351; t += 1)
        a[t] && 0 < a[t][1] && (i[e += 1] = JSON.parse(JSON.stringify(a[t])), i[e][4] = 1);
    return v_zlistr = i,
    $.sLS("zlistr", JSON.stringify(v_zlistr)),
    f_testBasketSum()
}
function f_testBasketSum(t, e, i) {
    var a,
    l,
    s,
    d,
    r,
    _,
    n,
    o,
    p,
    v = 3,
    c = 0,
    f = 0,
    g = 0,
    h = 0,
    u = 0,
    b = 0,
    x = 0,
    m = [[0, 0, 0, 0]],
    y = v_zlistr,
    w = y.length,
    S = 0;
    for (t = t || 0, e = e || 0, i = i || 0, l = 11; l < 351; l += 1)
        for (a = 1; a < w; a += 1)
            y[a][0] == l && (m[h += 1] = JSON.parse(JSON.stringify(y[a])));
    for (w = m.length, a = 1; a < w; a += 1)
        f = (s = m[a][2])[0] * s[1] + s[2] * s[3] + s[4] * s[5] + s[6] * s[7] + s[8] * s[9] + s[10] * s[11], f = Math.round(f * 100) / 100, x += 1, u += m[a][1] = f, m[a][0] == t && m[a][5] == e && m[a][6] == i && (S += 1);
    for (60 <= u && u < 200 && (v = 4), 200 <= u && u < 500 && (v = 5), 500 <= u && u < 1e3 && (v = 6), 1e3 <= u && u < 3e3 && (v = 7), 3e3 <= u && (v = 8), h = 0, a = 1; a < w; a += 1) {
        for (c != m[a][0] && (h = 0, c = m[a][0]), f = m[a][1], h += 1, m[a][5], m[a][6], n = [m[a][2][0], m[a][2][2], m[a][2][4], m[a][2][6], m[a][2][8], m[a][2][10]], p = [m[a][2][1], m[a][2][3], m[a][2][5], m[a][2][7], m[a][2][9], m[a][2][11]], o = JSON.parse(JSON.stringify(v_mtrt[c][11])), d = 0, 0 <= aRal.indexOf(c) && (d = aRalN[m[a][5]][m[a][6]] || 0, f_tr12(m[a][5], m[a][6]) || (d = 0)), g = _ = 0, r = v_mtrt[c][v], 0 < d && ((27 == c || 57 == c) && (r += 25), r += d += 840 <= f ? 5 : aRal[0] / f > Math.round(aRal[0] / f) ? Math.round(aRal[0] / f) + 1 : Math.round(aRal[0] / f)), o[0] && o[2] && o[3] && (_ = 1), 1 == n[l = 3] && (0 < n[1] || 0 < n[0]) && 1 == _ && (o[l] = o[l - 1]), 1 == n[l = 2] && 0 == n[3] && (0 < n[1] || 0 < n[0]) && (o[l] = o[l - 1]), (l = 1) == n[l] && 0 == n[3] && 0 == n[2] && 0 < n[0] && 0 == _ && (o[l] = o[l - 1]), l = 0; l < 4; l += 1)
            g += n[l] * p[l] * (r + o[l]);
        m[a][3] = g,
        m[a][4] = h,
        b += g
    }
    return m[0] = [0, x, u, b],
    v_zlistr = m,
    $.sLS("zlistr", JSON.stringify(v_zlistr)),
    $.id("idbsk") && ($.id("idbskn").innerHTML = f_ts(x.toFixed(0)), $.id("idbsks").innerHTML = f_ts(b.toFixed(2)) + "р", $.id("idbskk").innerHTML = f_ts(u.toFixed(2)) + "кг", $.id("idbsk").style.display = 0 == u ? "none" : "block"),
    226 == v_page && $.id("idSumNmTara") && ($.id("idSumNmTara").innerHTML = f_ts((w - 1).toFixed(0)), $.id("idSumKgTara").innerHTML = f_ts(u.toFixed(2)), $.id("idSumMatTara").innerHTML = f_ts(b.toFixed(2)), $.id("dordEdit").style.display = u ? "block" : "none"),
    [S, x, u, b]
}
function f_getBasketSum(t, e, i) {
    var a,
    l = 0,
    s = 0,
    d = 0,
    r = v_zlistr,
    _ = 0,
    n = r.length;
    for (t = t || 0, e = e || 0, i = i || 0, a = 1; a < n; a += 1)
        0 < r[a][0] && (l += r[a][1], d += 1, s += r[a][3], r[a][0] == t && r[a][5] == e && r[a][6] == i && (_ += 1));
    return v_zlistr[0] = [0, d, l, s],
    $.id("idbsk") && ($.id("idbskn").innerHTML = f_ts(d.toFixed(0)), $.id("idbsks").innerHTML = f_ts(s.toFixed(2)) + "р", $.id("idbskk").innerHTML = f_ts(l.toFixed(2)) + "кг", $.id("idbsk").style.display = 0 == l ? "none" : "block"),
    [_, d, l, s]
}
function vcorpJS_onload(t) {
    var e,
    i,
    a,
    n,
    l,
    d,
    r;
    if (v_storage = window.localStorage || 0) {
        if ("vcorp_js_00_01" != t && "vcorp_js_00_80" != t)
            return f_mesErr("Диагностика", "Неверная версия JS-библиотеки<br>(необходима сборка vcorp_js_00_01 или vcorp_js_00_80)" + v_px5 + "Обновите (перезагрузите) страницу." + v_px5 + "Рекомендуется сбросить кеш браузера.", 320, 150, 3), !1;
        if (v_cb = "/auto/cb.php", v_cp = "/auto/get_cnew.php", v_sessionID = "00000" + Math.round(9e4 * Math.random()), v_sessionID = parseInt(v_sessionID.substr(v_sessionID.length - 5, 5), 10) || 0, v_capID = "0" + Math.round(9 * Math.random()), ((v_capID = parseInt(v_capID.substr(v_capID.length - 1, 1), 10) || 0) < 1 || 9 < v_capID) && (v_capID = 1), (e = $.id("datePrice")) && (1 == (i = ((r = new Date).getMonth() + 1).toString()).length && (i = "0" + i), e.innerHTML = "Дата " + r.getDate().toString() + "." + i + "." + r.getFullYear().toString()), $.uCheckeds("if(!this.id)return;if(this.id=='idpc'){$.id(idText).innerHTML='&nbsp;';return;}"), (e = $.id("mmenu")) ? ($.iMenu("mmenu"), e.style.visibility = "hidden", $.EH.add("ltblock", "click", f_ltblock), $.EH.add("mlblock", "click", f_ltblock), $.EH.add($.B, "click", function (t) {
                    var e,
                    i = $.id("mlblock"),
                    a = $.B;
                    if (!(parseInt($.gStyle(i, "width"), 10) < 100)) {
                        for (e = (t = t || window.event).target || t.srcElement; e != a && e != i; )
                            e = e.parentNode;
                        e != i && f_ltblock(t)
                    }
                })) : $.id("ltblock") && f_predAuth(0), v_cb8 = "/auto/cb8.php", $.EH.add(document, "keydown", function (t) {
                if (t = t || window.event, 0 < v_esc && 27 == t.keyCode) {
                    if ($.id("pb__alert"))
                        return $.wDelete(1, 1) , $.isDialog() && 1 != v_dialogEsc || (v_esc = 0), void $._(24)(t);
                        $.isDialog() && (1 == v_dialogEsc ? (v_dialogEsc = 0, $.removeDialog(), $._(24)(t)) : v_esc = 1)
                    }
                }), $.EH.add(window, "load", photoGal), (e = $.id("scrltop")) && ($.EH.add(e, "click", f_bup), d = window.pageYOffset || document.documentElement.scrollTop, e.style.visibility = 300 < d ? "visible" : "hidden"), r = "", $.isFF() && (r += "input::-moz-focus-inner{margin-top:-1px;}"), $.id("desktop") && "block" == $.gStyle("desktop", "display").toLowerCase() ? r += "#mobile,#mlblock { display:none; } @media screen and (max-width:999px) { #mobile,#mlblock { display:block; } }" : r += "@media screen and (min-width:1000px) { #mobile { display:none; } }", ($.isOPERA12() || $.isTOUCH()) && (r += ".pb_win_panel,.pb_win,.pb_win_sel,.pb_alert,.pb_dialog{position:absolute;}"), r += $.isTOUCH() ? "" : ".pb_ismall { opacity:1; transition:border 0.3s ease-out 0s, box-shadow 0.3s ease-out 0s, margin 0.3s ease-out 0s, opacity 0.3s ease-out 0s; } .pb_ismall:hover { opacity:1; }", v_page = +$.id("pb_page").innerHTML, $.isIE() && 1014 == v_page && (r += ".div_mo ul,.div_mc ul{font-family:tahoma;}"), r && $.addCss(r), e = $.qSA(".callback"))for (i = e.length; 0 <= i; --i)
                $.EH.add(e[i], "click", f_callback);
        for (v_spIDmail = v_spIDmail.substr(5) + v_spIDmail.substr(0, 5), (e = $.id("swtch3")) && (e.href = "mailto:" + v_spIDmail), e = $.id("spIDmail"), (d = $.id("dpIDmail")) && e && 6 < (r = (e = e.innerHTML).length || 0) && (r = e.substr(5) + e.substr(0, 5), d.innerHTML = '<a href="mailto:' + r + '">' + r + "</a>"), i = 0; i < 10; i += 1)
            (e = $.id("spIDmail" + i)) && (r = '<a href="mailto:' + (r = (r = e.innerHTML).substr(5) + r.substr(0, 5)) + '">' + r + "</a>", (e = $.id("dpIDmail" + i)) && (e.innerHTML = r));
        if (1057 == v_page && $.id("IDtblOver") && f_tblOver_set(), 1015 == v_page && $.id("divotz") && f_otz_view(), $.id("mtr_tabs") && $.addEH("click", function (t) {
                for (var e, i, a = t.target || t.srcElement; !a.id; )
                    a = a.parentNode;
                for (e = 1; e <= 4; e += 1)
                    (i = $.id("mtr_tabs_" + e))
                         && (i.className = ""), (i = $.id("mtr_body_" + e)) && (i.className = "");
                    a.className = "active",
                    (i = $.id("mtr_body_" + a.id.substr(9, 1))) && (i.className = "active")
                }, ["mtr_tabs_1", "mtr_tabs_2", "mtr_tabs_3", "mtr_tabs_4"]), ($.gLS("teo_version") || $.gLS("setmain")) && window.localStorage.clear(), f_init_mtrt(), f_init_zlist(), e = $.gLS("zlistt") || JSON.stringify(v_zlistt), v_zlistt = JSON.parse(e), e = $.gLS("zlistr") || JSON.stringify(v_zlistr), v_zlistr = JSON.parse(e), t = f_newBasket(), 226 == v_page) {
                for (n = v_zlistr.length, r = '<p class="nds mt0 fright" style="font-size:13px">Цены с НДС, руб</p><div class="px0"></div><table class="tmtr"><tbody>', r += '<tr id="trt0th" class="trt_tr"><th class="fwb" style="width:80px;min-width:80px">Фасовка</th><th style="width:112px;min-width:112px">Кол-во, кг</th><th style="width:65px;min-width:65px">Цена за кг</th><th style="width:85px;min-width:85px">Стоимость</th></tr><tr id="trt1th" class="trt_tr" style="height:10px"><td colspan="4"></td></tr>', a = 1; a < n; a += 1) {
                    for (r += '<tr id="trt' + (l = v_zlistr[a][0]) + "_" + (d = v_zlistr[a][4]) + '" class=""trt_tr"><td class="tmdl" colspan="4" style="font-weight:bold;color:#004f92;">' + v_mtrt[l][2], 0 < v_zlistr[a][5] && (r += v_px0 + '<div class="nw" style="float:left;color:#000000"><span class="c0">Цвет:</span> <span class="c0" id="ordRal' + l + "_" + d + '"></span> <div class="dordRal" id="dordRal' + l + "_" + d + '" onclick="f_basketRal(event)" title="Выбор цвета..." style="display:inline-block;">...</div></div>'), r += '<div id="ordD' + l + "_" + d + '" style="float:right;" onclick="f_ordDel(' + l + "," + d + ')"></div></td>', e = v_mtrt[l][10], i = 0; i < 4; i += 1)
                        0 < e[i] && (r += '<tr id="trt' + l + "_" + d + "_" + i + '" class=""trt_tr"><td id="ordF' + l + "_" + d + "_" + i + '" class="tac"></td>', r += '<td id="ordK' + l + "_" + d + "_" + i + '" class="tar" style="white-space:nowrap"></td>', r += '<td id="ordC' + l + "_" + d + "_" + i + '" class="tar"></td>', r += '<td id="ordS' + l + "_" + d + "_" + i + '" class="tar"></td></tr>');
                    r += '<tr id="trt' + l + "_" + d + '_I" class="trt_tr"><td style="padding-left:3px;font:bold 11px arial">Итого</td><td id="ordKI' + l + "_" + d + '" class="tar" style="font:bold 11px arial"></td><td colspan="2" id="ordCS' + l + "_" + d + '" class="tar" style="font:bold 11px arial"></td></tr>',
                    r += '<tr id="trt' + l + "_" + d + '_ld" class="trt_tr" style="height:10px"><td colspan="6" class="sepl"></td></tr>'
                }
                r += '<tr style="background:#ffff00;"><td style="padding-left:3px;font-weight:bold;">ИТОГО:</td><td id="idSumKgTara" style="padding-right:3px;font-weight:bold;text-align:right"></td><td colspan="2" id="idSumMatTara" style="padding-right:3px;font-weight:bold;text-align:right;"></td></tr>',
                r += '<tr style="background:#ffff00;"><td colspan="4" style="padding-left:3px;font-weight:bold;">Наименований: <span id="idSumNmTara" style="padding-right:3px;font-weight:bold;font-size:13px"></span></td></tr>',
                r += "</tbody></table>" + v_px0b + v_px15 + v_px20,
                $.id("idOrdert").innerHTML = r,
                v_ordEdit = 0,
                f_set_zlist(),
                $.id("idSumNmTara") && ($.id("idSumNmTara").innerHTML = f_ts(t[1].toFixed(0)), $.id("idSumKgTara").innerHTML = f_ts(t[2].toFixed(2)), $.id("idSumMatTara").innerHTML = f_ts(t[3].toFixed(2)), $.id("dordEdit").style.display = t[2] ? "block" : "none")
            }
        $.sLS("zlist", ""),
        $.sLS("zlistt", ""),
        (e = $.id("id_smiles")) && $.gLS("smls" + v_wlh) && (e.innerHTML = v_smls_txt),
        v_aPages = $.gLS("blocks_of_pages") || "[0]",
        v_aPages = JSON.parse(v_aPages),
        setTimeout(function (t) {
            var e,
            i,
            a,
            l,
            d,
            r,
            _ = $.qSA(".divh3");
            if (_) {
                for (n = _.length, d = 0; d < n; d += 1)
                    $.EH.add(_[d], "click", function (t) {
                        var e,
                        i,
                        a,
                        l,
                        s = 0;
                        if ((t = t || window.event).target || (t.target = t.srcElement), (e = ("div_mc" == t.target.parentNode.className || "div_mo" == t.target.parentNode.className ? t.target : t.target.parentNode).parentNode).className = 40 == parseInt($.gStyle(e, "height")) ? "div_mo" : "div_mc", $.aHeight(e, 200, 25, e.scrollHeight, 40), e.id) {
                            for (l = (i = v_aPages).length, a = 1; a < l; a += 1)
                                i[a][1] == v_page && (i[a] = [v_wlh, v_page, "div_mc" == e.className ? 0 : +e.id.substr(3)], s = 1);
                            s || (v_aPages[l] = [v_wlh, v_page, "div_mc" == e.className ? 0 : +e.id.substr(3)]),
                            $.sLS("blocks_of_pages", JSON.stringify(v_aPages))
                        }
                    });
                if (e = $.qS("#block1"), i = $.qS(".dblock"), a = $.qS(".mobile"), l = $.qS("#mobile"), s = v_wlh, r = s.indexOf("#block"), s = parseInt(0 < r ? s.substr(r + 6, 1) : "0", 10) || 0, 0 < s)
                    e && (i && "block" == $.gStyle(i, "display").toLowerCase() || a && "none" == $.gStyle(a, "display").toLowerCase()) && ((_ = _[s - 1].parentNode).className = "div_mo", $.aHeight(_, 200, 25, _.scrollHeight, 40));
                else if (!e && (!i || i && "block" == $.gStyle(i, "display").toLowerCase()) && (!a || a && "none" == $.gStyle(a, "display").toLowerCase()) && (!l || l && "none" == $.gStyle(l, "display").toLowerCase())) {
                    for (r = 0, d = (_ = v_aPages).length - 1; 0 < d; --d)
                        _[d][1] == v_page && (r = d);
                    0 < r && 0 < _[r][2] && (e = $.id("pbm" + _[r][2]), window.scrollTo(0, $.gOffset(e).top - 300), e.className = "div_mo", $.aHeight(e, 200, 25, e.scrollHeight, 40))
                }
            }
            if (_ = $.qSA(".divh4")) {
                for (n = _.length, d = 0; d < n; d += 1)
                    $.EH.add(_[d], "click", function (t) {
                        var e,
                        i,
                        a,
                        l,
                        s = 0;
                        if ((t = t || window.event).target || (t.target = t.srcElement), (e = ("div_mc" == t.target.parentNode.className || "div_mo" == t.target.parentNode.className ? t.target : t.target.parentNode).parentNode).className = 25 == parseInt($.gStyle(e, "height")) ? "div_mo" : "div_mc", $.aHeight(e, 200, 25, e.scrollHeight, 25), e.id) {
                            for (l = (i = v_aPages).length, a = 1; a < l; a += 1)
                                i[a][1] == v_page && (i[a] = [v_wlh, v_page, "div_mc" == e.className ? 0 : +e.id.substr(3)], s = 1);
                            s || (v_aPages[l] = [v_wlh, v_page, "div_mc" == e.className ? 0 : +e.id.substr(3)]),
                            $.sLS("blocks_of_pages", JSON.stringify(v_aPages))
                        }
                    });
                if (e = $.qS("#block1"), i = $.qS(".dblock"), a = $.qS(".mobile"), l = $.qS("#mobile"), s = v_wlh, r = s.indexOf("#block"), s = parseInt(0 < r ? s.substr(r + 6, 1) : "0", 10) || 0, 0 < s)
                    e && (i && "block" == $.gStyle(i, "display").toLowerCase() || a && "none" == $.gStyle(a, "display").toLowerCase()) && ((_ = _[s - 1].parentNode).className = "div_mo", $.aHeight(_, 200, 25, _.scrollHeight, 25));
                else if (!e && (!i || i && "block" == $.gStyle(i, "display").toLowerCase()) && (!a || a && "none" == $.gStyle(a, "display").toLowerCase()) && (!l || l && "none" == $.gStyle(l, "display").toLowerCase())) {
                    for (r = 0, d = (_ = v_aPages).length - 1; 0 < d; --d)
                        _[d][1] == v_page && (r = d);
                    0 < r && 0 < _[r][2] && (e = $.id("pbm" + _[r][2]), window.scrollTo(0, $.gOffset(e).top - 300), e.className = "div_mo", $.aHeight(e, 200, 25, e.scrollHeight, 25))
                }
            }
        }, 10),
        1023 != v_page && 5002 != v_page || window.addEventListener("orientationchange", function () {
            f_message("Калькулятор - смена формата", 'Просьба обновить страницу<br>(смена формата альбомный/книжный).<div class="px10"></div><input type="button" class="pb_buttons" value="Обновить" style="width:100px;height:30px;" onclick="window.location.reload()"/>', 300, 150)
        }, !1),
        $.id("id_auth_pred") && f_predAuth(1),
        f_testLS(),
        $.EH.add(window, "storage", f_testLS),
        f_testfbuy()
    } else
        f_mesErr("Ограничение", "Ваш браузер устарел" + v_px5 + "и нуждается в замене.", 450, 130, 3)
}
function f_smiles(t) {
    var e = $.id("id_smiles");
    (t = t || 0) < 0 || 3 < t || 0 < v_mode || !e || 0 < v_queryXHR || (v_mode = t, f_show_query(), $.httpPost("/auto/smiles.php", "mfd", ["mode", v_mode, "number", t, "page", v_wlh], v_XHR), v_interval = setInterval(function () {
            f_hRqStChSmiles()
        }, 100))
}
function f_hRqStChSmiles() {
    var t,
    e;
    try {
        4 == v_XHR.readyState && (e = v_XHR.status, f_hide_query(), 200 == e ? "error" == (t = v_XHR.responseText) ? f_mesErr("Ошибка", "Пожалуйста повторите выбор.", 350, 120) : (f_message("Отзывы по этой странице", t, 500, 0 == v_mode ? 220 : 260), $.sLS("smls" + v_wlh, "ok"), $.id("id_smiles").innerHTML = v_smls_txt) : f_mesXRST(e), v_mode = 0)
    } catch (t) {
        f_hide_query(),
        v_mode = 0
    }
}
function f_predAuth(t) {
    var e = v_px5 + '<div style="width:100px;float:left;padding-top:2px;text-align:right;">Пароль:</div>';
    $.isDialog() || 0 < v_queryXHR || 0 < v_mode || (e += '<input id="IDpass" class="inpbox" type="text" style="float:left;margin-left:10px;padding:0 2px;width:100px;" value="" placeholder="введите пароль" onkeypress="f_predEnter(event,0)"/>' + v_px20, e += '<input type="button" class="pb_buttons" id="idcapOK" style="margin:0 0 0 90px; width:80px;" value="Войти" onclick="f_predEnter(event,1)"/>', $.createDialog('<div class="pb_ah0">Авторизация представителя</div>', e, 270, 130), v_esc = v_dialogEsc = 1, $.id("IDpass").focus())
}
function f_predEnter(t, e) {
    var i = $.id("IDpass") || null;
    if (t = t || window.event, !(!i || 0 < v_queryXHR || 0 < v_mode) && (v_esc = v_dialogEsc = 0, i.style.border = "solid 1px #808080", i.style.background = "#ffffff", "keypress" != t.type || 13 == t.keyCode)) {
        if (1 == e && $.trim(i.value).length < 3)
            return i.style.border = "solid 1px #ff0000", void(i.style.background = "#fff0f0");
        v_mode = 1,
        f_show_query(),
        $.httpPost("/setpred01/gethash.php", "mfd", ["mode", v_mode, "pass", f_replace(i.value, 1)], v_XHR),
        v_interval = setInterval(function () {
            f_hRqStChHash()
        }, 100)
    }
}
function f_hRqStChHash() {
    var t,
    e;
    try {
        4 == v_XHR.readyState && (e = v_XHR.status, f_hide_query(), 200 == e && 1 == v_mode ? (t = v_XHR.responseText) && "error" != t ? -1 == v_wlh.indexOf("/pred-info") && 210 != v_page ? window.location.reload() : window.location.href = "/pred-info/" : f_mesErr("Ошибка", "Неверный пароль или код", 300, 100) : 204 == e ? ($.id("IDpass").style.border = "solid 1px #800000", f_mesErr("Ошибка", "Неправильно введён пароль", 300, 120)) : f_mesXRST(e), v_mode = 0)
    } catch (t) {
        f_hide_query(),
        v_mode = 0
    }
}
function f_hRSCCap() {
    var t,
    e,
    i,
    a = "",
    l = $.id("idSend") || null,
    s = $.id("idcapImg") || null;
    try {
        4 == v_XHRC.readyState && (v_int_cap && clearInterval(v_int_cap), v_cap = "", v_queryHttp = 0, l && (l.disabled = !1), t = v_XHRC.status, s && 200 == t && 0 < (e = (a = v_XHRC.responseText).indexOf("?t=")) && 0 < (i = (e = a.substr(e + 3)).indexOf("&")) && (v_cap = e.substr(0, i)), s && (s.innerHTML = 200 == t && "" < v_cap ? '<img src="' + a + '" alt="" style="padding:0;margin:0;border:none" />' : "Error"))
    } catch (t) {
        v_int_cap && clearInterval(v_int_cap),
        s && (s.innerHTML = "Error"),
        l && (l.disabled = !1),
        v_queryHttp = 0
    }
}
function f_postCap(t) {
    var e = $.id("idSend"),
    i = $.id("idcapImg");
    i && e && v_XHRC && 0 == v_queryHttp && (v_queryHttp = 1, e.disabled = !0, i.innerHTML = "Loading...", $.httpPost(v_cp, "mfd", ["c_new", v_sessionID, "ncap", v_capID], v_XHRC), v_int_cap = setInterval(function () {
            f_hRSCCap()
        }, 100))
}
function f_callback() {
    $.wDelete(1, 1),
    f_post(2)
}
function f_post(t, e, i) {
    var a,
    l,
    s,
    d = "",
    r = 500,
    _ = 150,
    n = '</div><div onclick="f_cb2click(this)" class="cb2',
    o = ["", "Пожелания, замечания, сообщение об ошибке", "Запрос на обратный звонок", "Оформление заказа на материалы", "Заказ выполнения работ", "Заказ рассчитанных материалов", "Заказ выполнения работ «под ключ»", "Заказ Антидроновое одеяло", "Заказ Мягкие носилки бескаркасные"],
    p = ' onkeypress="f_changePost(this)" onchange="f_changePost(this)"',
    v = '<div class="fleft mt3 fwb" style="width:' + (3 == t || 5 == t ? "220px;" : "150px;");
    if (e = e || "", 1 != (i = i || 0) && (i = 0), (t = t || 0) < 1 || 8 < t || (5 == t || 6 == t) && !$.id("id_calcHead") || $.isDialog() || 0 < v_queryXHR || 0 < v_mode || !v_storage)
        return !1;
    "string" == typeof(a = $.gLS("fields") || {
            source: "",
            sity: "",
            person: "",
            tel: "",
            email: "",
            reqs: "",
            other: "",
            pl: "",
            amount: ""
        }) && (a = JSON.parse(a)),
    a.pl || (a.pl = ""),
    v_fields = a,
    $.uEnv(),
    (s = $.gCH()) < 540 && (_ = s - 340),
    _ < 20 && (_ = 20),
    500 < (r = (s = $.gCW()) - 210) && (r = 500),
    r < 270 && (r = 270),
    s = _ - (s < 640 ? 65 : 45),
    2 == t && (r -= 50) < 200 && (r = 200),
    l = ' :</div><div class="fleft"><input type="text" class="inpbox" maxlength="70" style="width:' + (3 == t || 5 == t ? r - 55 : r + 15) + "px;",
    1 == t && (d += v_px5 + '<div class="fwb tac">Ваше имя/телефон/e-mail</div>' + v_px5 + '<input type="text" class="inpbox" maxlength="70" style="width:' + (r + 165) + 'px;" id="idText1" value=\'' + (a.source || a.person || a.tel || a.email) + "'" + p + "/>", d += v_px10 + '<div class="fwb tac">' + o[1] + "</div>" + v_px5, d += '<textarea id="idArea1" class="inparea" style="width:' + (r + 165) + "px;max-width:" + (r + 165) + "px;min-width:" + (r + 165) + "px;height:" + _ + "px;min-height:" + _ + "px;max-height:" + _ + 'px;"' + p + ">" + a.other + "</textarea>", _ = 80),
    2 == t && (d += v_px5 + v + '">Контактное лицо' + l + '" id="idText1" value=\'' + (a.person || a.source) + "'" + p + "/></div>", d += v_px5 + v + '">Телефон' + l + '" id="idText2" value=\'' + a.tel + "'" + p + "/></div>", d += v_px5 + v + '">Почта (e-mail)' + l + '" id="idText3" value=\'' + a.email + "'" + p + "/></div>", d += v_px5 + ($.gCW() < 690 ? '<div class="fleft mt3 fwb" style="width:80px;' : v) + '">Вы хотите :' + n + '">Купить Материалы' + n + ' ml10 mr10">Заказать Работы' + ($.gCW() < 690 ? "</div>" + v_px5 + '<div onclick="f_cb2click(this)" class="cb2" style="float:none;margin:0 auto;max-width:170px;">' : n + '">') + "Получить Консультацию</div>", d += v_px10 + '<div class="fwb tac">Мы перезвоним максимально быстро!<br>Если хотите, кратко опишите Ваш «вопрос»,<br>тогда с Вами свяжется «нужный» специалист.</div>' + v_px5, d += v_px5 + v + '">Площадь объекта, м²' + l.substr(2) + '" id="idText4" value=\'' + a.pl + "'" + p + "/></div>", d += v_px5 + '<textarea id="idArea1" class="inparea" style="width:' + (r + 165) + "px;max-width:" + (r + 165) + "px;min-width:" + (r + 165) + "px;height:" + s + "px;min-height:" + s + "px;max-height:" + s + 'px;"' + p + ">" + a.other + "</textarea>", _ = 160, $.gCW() < 690 && (_ = 180)),
    3 != t && 5 != t || (3 == t && (d += '<div class="fleft fwb">На основании этого заказа Вам будет выставлен счет на оплату.</div><div class="fright">Материалов на сумму: <span>' + f_ts(e) + "р.</span></div>" + v_px10), d += v + '">1. Город' + l + '" id="idText0" value=\'' + a.sity + "'" + p + "/></div>", d += v_px3 + '<div class="fs11">Поля <span class="c1">2, 3, 4</span> - обязательны для заполнения.</div>', d += v_px5 + v + '"><span class="c1">2.</span> Заказчик, контактное лицо' + l + '" id="idText1" value=\'' + (a.person || a.source) + "'" + p + "/></div>", d += v_px5 + v + '"><span class="c1">3.</span> Телефон' + l + '" id="idText2" value=\'' + a.tel + "'" + p + "/></div>", d += v_px5 + v + '"><span class="c1">4.</span> Почта (e-mail)' + l + '" id="idText3" value=\'' + a.email + "'" + p + "/></div>", d += v_px3 + '<div class="fs11 ml15">Мы ГАРАНТИРУЕМ, что никогда НЕ будем присылать на Ваш телефон и почту рекламу или другой СПАМ.</div>', d += v_px10 + v + '">5. Реквизиты, примечания.' + v_px10 + '<div class="fs11">- Если Вы частное лицо:<br>напишите фамилию и инициалы.' + v_px10 + "- Если Вы юридическое лицо:<br>скопируйте сюда Ваши реквизиты." + v_px10 + "- Если требуется ДОСТАВКА:<br>напишите адрес доставки</div></div>", d += '<textarea id="idArea1" class="inparea" style="float:left;width:' + (r - 55) + "px;max-width:" + (r - 55) + "px;min-width:" + (r - 55) + "px;height:" + (_ - 30) + "px;min-height:" + (_ - 30) + "px;max-height:" + (_ - 30) + 'px;"' + p + ">" + a.reqs + "</textarea>", d += v_px10b, _ = 3 == t ? 160 : 130),
    4 != t && 6 != t && 7 != t && 8 != t || (6 == t && (d += '<div class="tac">ООО «ТэоХим» выполняет работы в Москве и Московской области.<br>Если Ваш объект находится в другом регионе, обратитесь к нашим <a class="fwb" href="/pred/" target="_blank">Представителям</a></div>'), d += (6 == t ? v_px5 : "") + '<div class="fs11">Поля <span class="c1">1, 2, 3</span> - обязательны для заполнения.</div>', d += (6 == t ? v_px5 : v_px10) + v + '"><span class="c1">1.</span> Контактное лицо' + l + '" id="idText1" value=\'' + (a.person || a.source) + "'" + p + "/></div>", d += v_px5 + v + '"><span class="c1">2.</span> Телефон' + l + '" id="idText2" value=\'' + a.tel + "'" + p + "/></div>", d += v_px5 + v + '"><span class="c1">3.</span> Почта (e-mail)' + l + '" id="idText3" value=\'' + a.email + "'" + p + "/></div>", 6 == t ? (d += v_px3 + '<div class="fs11 ml15">Мы ГАРАНТИРУЕМ, что никогда НЕ будем присылать на Ваш телефон и почту рекламу или другой СПАМ.</div>', d += v_px10 + "<span>4. Дополнительные данные:</span><br>- назначение Вашего объекта (гараж, склад, цех или др.)<br>- адрес (можно примерно).") : d += 4 == t ? v_px10 + '<div class="tac">Пожалуйста, укажите основные характеристики Вашего объекта.<br>Площадь. Назначение (гараж, склад, цех или др. ).<br>Какое хотите покрытие? Если не знаете – посоветуем.</div>' : v_px10 + '<div class="tac">Пожалуйста, укажите <span>КОЛИЧЕСТВО</span> и скопируйте сюда Ваши реквизиты.<br>Если требуется ДОСТАВКА, напишите адрес доставки.<br>С Вами свяжется специалист.</div>', d += (6 == t ? "" : v_px5) + '<div class="fwb tac">Мы ответим максимально быстро. Спасибо.</div>' + v_px5, d += '<textarea id="idArea1" class="inparea" style="width:' + (r + 165) + "px;max-width:" + (r + 165) + "px;min-width:" + (r + 165) + "px;height:" + (_ - 30) + "px;min-height:" + (_ - 30) + "px;max-height:" + (_ - 30) + 'px;"' + p + ">" + a.other + "</textarea>", _ = 4 == t || 7 == t || 8 == t ? 155 : 200),
    d += v_px10 + '<div class="fleft"><div id="idcapImg"></div><div id="idRefresh" title="обновить рисунок" onclick="f_postCap()"></div>',
    d += '<input id="idInpC" class="inpbox" type="text" value="" maxlength="3" placeholder="код"/></div><div class="fleft fwn c8">введите 3 цифры' + (2 == t && $.gCW() < 690 ? "<br>" : " ") + "с картинки</div>",
    d += '<input type="button" class="pb_buttons" value="Отправить" id="idSend" onclick="f_postGo(' + t + "," + i + ')"/>',
    d += v_px0 + '<div id="idText"></div><div class="pb_hidden" id="idCop">' + t + "</div>" + v_px10 + '<div class="pb_checked_false" id="idpc" style="padding:2px 5px 0 20px;width:auto;height:20px;font:inherit;"><div class="pb_ch1"></div><span class="pb_chs1">Я согласен (согласна)</span></div><div class="fleft" style="margin:3px 0 0 5px;"><a href="javascript:void(0)" onclick="f_pprivacy()">с политикой конфиденциальности</a></div>',
    ym(988617, "reachGoal", 3 == t || 5 == t ? "ClickOrd" : "ClickForm"),
    $.createDialog('<div class="pb_ah0">' + o[t] + "</div>", d, r + 200, _ + 325),
    v_esc = v_dialogEsc = 1,
    $.id("idText1").focus(),
    f_postCap(),
    $.uCheckeds(),
    f_cb2click()
}
function f_cb2click(t) {
    var e,
    i = $.qSA(".cb2");
    if (i) {
        for (e = 0; e < i.length; e += 1)
            i[e].style.color = "inherit", i[e].style.borderColor = "#c8c8c8", i[e].style.boxShadow = "2px 2px 2px 0 #888888";
        t && (t.style.color = "#c80000", t.style.borderColor = "#c80000", t.style.boxShadow = "2px 2px 2px 0 #004f92")
    }
}
function f_changePost(t) {
    var e = $.id("idText"),
    i = v_fields,
    a = $.id("idCop");
    a && ((a = parseInt(a.innerHTML, 10) || 0) < 1 || 7 < a || (v_dialogEsc = 0, e && (e.innerHTML = "&nbsp;"), "idText3" == t.id && ($.id("idText3").style.background = "#ffffff"), 1 == a ? "idText1" == t.id && (i.source = f_replace(t.value, 1)) : ("idText1" == t.id && (i.person = f_replace(t.value, 1)), "idText2" == t.id && (i.tel = f_replace(t.value, 1)), "idText3" == t.id && (i.email = f_replace(t.value, 1)), "idText4" == t.id && (i.pl = f_replace(t.value, 1))), 3 == a || 5 == a ? ("idText0" == t.id && (i.sity = f_replace(t.value, 1)), "idArea1" == t.id && (i.reqs = f_replace(t.value))) : "idArea1" == t.id && (i.other = f_replace(t.value)), "idText5" == t.id && (i.amount = "" + parseInt(f_replace(t.value, 1), 10)), $.sLS("fields", JSON.stringify(i))))
}
function f_postGo(t, e) {
    var i,
    a,
    s,
    d,
    r,
    _ = "empty",
    n = $.id("idInpC"),
    o = [$.id("idText0"), $.id("idText1"), $.id("idText2"), $.id("idText3"), $.id("idText4"), $.id("idText5"), $.id("idText6"), $.id("idArea1")],
    p = ["Не все поля заполнены. Можно указать Телефон или E-mail", "Не все обязательные поля заполнены", "Введён неверный E-mail", "Необходимо ввести 3 цифры с рисунка", "Пожалуста, напишите подробности"],
    v = ["", "", "CallBack", "OrderGoods", "OrderWork", "OrderGoodsCvr", "OrderGoodsWorkCvr", "OrderGoodsWorkCvr", "OrderGoodsWorkCvr"];
    for (1 != (e = e || 0) && (e = 0), $.id("idText").innerHTML = "&nbsp;", i = 0; i <= 8; i += 1)
        o[i] ? o[i] = f_replace(o[i].value, 7 == i ? 0 : 1) : o[i] = "";
    if (1 != t || o[1] && o[7])
        if (2 != t || o[1] && (o[2] || o[3]))
            if (!(2 < t) || o[1] && o[2] && o[3])
                if (!o[3] || f_checkEmail(o[3])) {
                    for (i = 0; i <= 7; i += 1)
                        o[i] || (o[i] = "empty");
                    if (2 == t && "0" == o[4] && (o[4] = "empty"), 3 == (n = n.value = f_replace(n.value, 1)).length)
                        if ("pb_checked_false" != $.id("idpc").className) {
                            if (3 == t) {
                                if (0 == e)
                                    return;
                                if (1 == e) {
                                    for (s = $.qSA(".trt_none"), l = s.length, i = 0; i < l; i += 1)
                                        s[i].parentNode.removeChild(s[i]);
                                    s = 0,
                                    _ = $.id("idOrdert").innerHTML
                                }
                            }
                            if (5 != t && 6 != t || (d = v_px10 + '<div id="id_calcHead">' + $.id("id_calcHead").innerHTML + "</div>" + v_px10 + '<div id="id_calcBody">' + $.id("id_calcBody").innerHTML + "</div>" + v_px10, 6 == t && (d += '<div id="table2">' + $.id("table2").innerHTML + "</div>" + v_px10), 0 < (i = d.indexOf("i_so_td")) && (i = d.indexOf(">", i) + 1, a = d.indexOf("</td>", i), d = d.substr(0, i) + $.id("i_so").value + d.substr(a)), 0 < (i = d.indexOf("i_mb_td")) && ("100" == (r = $.id("i_mb").value) && (r = "М100 (В7,5)"), "150" == r && (r = "М150 (В12,5)"), "200" == r && (r = "М200 (В15)"), "250" == r && (r = "М250 (В20)"), "300" == r && (r = "М300 (В22,5)"), "350" == r && (r = "М350 (В25)"), i = d.indexOf(">", i) + 1, a = d.indexOf("</td>", i), d = d.substr(0, i) + r + d.substr(a)), 0 < (i = d.indexOf("i_se_td")) && (i = d.indexOf(">", i) + 1, a = d.indexOf("</td>", i), d = d.substr(0, i) + $.id("i_se").value + d.substr(a)), 0 < (i = d.indexOf("i_sep_td")) && ("0" == (r = $.id("i_np").value) && (r = "1,0 - 1,5"), "1" == r && (r = "2,0 - 2,5"), "2" == r && (r = "3,0 - 3,5"), "3" == r && (r = "4,0 - 4,5"), i = d.indexOf(">", i) + 1, a = d.indexOf("</td>", i), d = d.substr(0, i) + r + d.substr(a)), 0 < (i = d.indexOf("i_sen_td")) && (r = $.id("i_np").value, 2223 == v_page && ("0" == r && (r = "1,1 - 1,2"), "1" == r && (r = "1,6 - 1,7"), "2" == r && (r = "2,0 - 2,2")), 2224 == v_page && ("0" == r && (r = "1,2 - 1,3"), "1" == r && (r = "1,6 - 1,7"), "2" == r && (r = "2,0 - 2,2")), "0" == r && (r = "2,0 - 2,5"), "1" == r && (r = "3,0 - 3,5"), "2" == r && (r = "4,0 - 4,5"), "3" == r && (r = "5,0 - 5,5"), i = d.indexOf(">", i) + 1, a = d.indexOf("</td>", i), d = d.substr(0, i) + r + d.substr(a)), 0 < (i = d.indexOf("i_sh_td")) && (i = d.indexOf(">", i) + 1, a = d.indexOf("</td>", i), d = d.substr(0, i) + ("1" == $.id("i_sh").value ? "Да" : "Нет") + d.substr(a)), 0 < (i = d.indexOf("i_shp_td")) && (i = d.indexOf(">", i) + 1, a = d.indexOf("</td>", i), d = d.substr(0, i) + ("1" == $.id("i_sh").value ? "Фактурная" : "Шероховатая") + d.substr(a)), 0 < (i = d.indexOf("i_fl_td")) && (r = $.id("i_fl").value, i = d.indexOf(">", i) + 1, a = d.indexOf("</td>", i), d = d.substr(0, i) + ("1" == r ? "матовый" : "2" == r ? "полуматовый" : "3" == r ? "глянцевый" : "НЕТ") + d.substr(a)), _ = v_px10 + "<h1>" + document.querySelector("#dcontent h1").innerHTML + "</h1>" + d, !(i = $.id("dscr")) || i.style.height && "0px" != i.style.height || (i = _.indexOf('<div id="dscr"'), a = _.indexOf('</div><div class="pb_hidden"></div>', i) + 35, 0 < i && 0 < a && (_ = _.substr(0, i) + _.substr(a)))), a = 0, 2 == t && (s = $.qSA(".cb2")))
                                for (i = 0; i < s.length; i += 1)
                                    "inherit" != s[i].style.color && (a = i + 1);
                            s = ["mode", v_mode = t, "idText0", o[0], "idText1", o[1], "idText2", o[2], "idText3", o[3], "idText4", o[4], "idText5", o[5], "idText6", o[6], "idArea1", o[7], "cb2", a, "mlist", _, "tara", e, "url", v_wlh, "cap", n, "hcap", v_cap, "ncap", v_capID],
                            f_show_query(),
                            ym(988617, "reachGoal", v[t]),
                            ym(988617, "reachGoal", "Сonsolidate"),
                            ym(100515207, "reachGoal", v[t]),
                            ym(100515207, "reachGoal", "Сonsolidate"),
                            $.httpPost(1 == e ? v_cb8 : v_cb, "mfd", s, v_XHR),
                            v_interval = setInterval(function () {
                                f_hRSCR()
                            }, 100)
                        } else
                            $.id("idText").innerHTML = "Вы должны согласиться с политикой конфиденциальности";
                    else
                        $.id("idText").innerHTML = p[3]
                } else
                    $.id("idText").innerHTML = p[2];
            else
                $.id("idText").innerHTML = p[1];
        else
            $.id("idText").innerHTML = p[0];
    else
        $.id("idText").innerHTML = p[0]
}
function f_hRSCR() {
    var t,
    e,
    i = $.id("idText"),
    a = ["Ошибка", "Ваше сообщение принято", "Ваш запрос принят", "Ваш <span>заказ на материалы</span> принят", "Ваш <span>заказ на выполнение работ</span> принят", "Ваш <span>заказ рассчитанных материалов</span> принят", "Ваш <span>заказ выполнения работ «под ключ»</span> принят", "Ваш <span>заказ «Антидроновое одеяло»</span> принят", "Ваш <span>заказ «Мягкие носилки бескаркасные»</span> принят", "Введён неверный код с картинки." + v_px5 + "Проверьте правильность кода.", "Неверно указан почтовый ящик." + v_px5 + "Проверьте правильность E-mail"];
    try {
        4 == v_XHR.readyState && (e = v_XHR.status, f_hide_query(), 200 == e ? "1" == (t = v_XHR.responseText) || "2" == t ? ("1" == t && f_mesErr(a[0], a[9], 350, 120), "2" == t && (f_mesErr(a[0], a[10], 350, 120), $.id("idText3").style.background = "#fff0f0", i && (i.innerHTML = "Введён неверный E-mail"))) : "ok" == t.substr(0, 2) ? (a[0] = v_mode < 3 ? a[v_mode] : '<span style="font-weight:bold">Заказ ПРИНЯТ</span>', a[v_mode] = v_mode < 3 ? a[v_mode] : '№ Вашего заказа: <span class="fwb fs14 cf00">' + t.substr(2) + "</span>" + v_px10 + "Письмо – подтверждение Заказа -<br>отправлено на указанный Вами e-mail." + v_px10 + '<span style="font:normal italic 11px arial;">Если Вы не получили письмо, проверьте<br>папку «Спам»/«Нежелательная почта».</span>' + v_px5 + '<span style="font:normal italic 11px arial;">Если письмо не найдено,<br>звоните: <a class="consult fwb" href="tel:+79263622520">+7-926-362-2520</a></span>', $.removeDialog(), f_message('<div class="pb_ahb">' + a[v_esc = v_dialogEsc = 0] + "</div>", a[v_mode] + "." + v_px10 + '<span class="fs12 c2">Спасибо</span>.' + v_px5, 300, 250)) : f_mesErr(a[0], "Произошла ошибка." + v_px10 + "Приносим извинения." + v_px5, 200, 130) : f_mesXRST(e), v_mode = 0)
    } catch (t) {
        v_mode = 0,
        f_hide_query()
    }
}
function f_pprivacy() {
    var t,
    e,
    i = "";
    $.uEnv(),
    1200 < (t = $.gCW() - 50) && (t = 1200),
    t < 800 && (t = 800),
    (e = $.gCH() - 100) < 350 && (e = 350),
    650 < e && (e = 650),
    i += '<div class="tal"><div class="h160">Политика конфиденциальности ООО «ТэоХим» и сайта teohim.ru</div>',
    i += "<p>Политика конфиденциальности</p>",
    i += "<p>Согласие на обработку персональных данных</p>",
    i += "<p>Настоящим в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» от 27.07.2006 года свободно, своей волей и в своем интересе выражаю свое безусловное согласие на обработку моих персональных данных ООО «ТЭОХИМ»» ( ОГРН 1037739543126, ИНН 7710305930), зарегистрированным в соответствии с законодательством РФ по адресу: 107023 г.Москва, ул. Суворовская д.10, офис 15 (далее по тексту - Оператор).</p>",
    i += "<p>Персональные данные - любая информация, относящаяся к определенному или определяемому на основании такой информации физическому лицу.</p>",
    i += "<p>Настоящее Согласие выдано мною на обработку следующих персональных данных:</p>",
    i += "<ul>",
    i += "<li>Телефон</li>",
    i += "<li>Имя</li>",
    i += "<li>Электронная почта</li>",
    i += "</ul>",
    i += "<p>Согласие дано Оператору для совершения следующих действий с моими персональными данными с использованием средств автоматизации и/или без использования таких средств: сбор, систематизация, накопление, хранение, уточнение (обновление, изменение), использование, обезличивание, а также осуществление любых иных действий, предусмотренных действующим законодательством РФ как неавтоматизированными, так и автоматизированными способами.</p>",
    i += "<p>Данное согласие дается Оператору для обработки моих персональных данных в следующих целях:</p>",
    i += "<ul>",
    i += "<li>предоставление мне услуг/работ;</li>",
    i += "<li>направление в мой адрес уведомлений, касающихся предоставляемых услуг/работ;</li>",
    i += "<li>подготовка и направление ответов на мои запросы;</li>",
    i += "<li>направление в мой адрес информации, в том числе рекламной, о мероприятиях/товарах/услугах/работах Оператора.</li>",
    i += "</ul>",
    i += "<p>Настоящее согласие действует до момента его отзыва путем направления соответствующего уведомления на электронный адрес teohim@teohim.ru. В случае отзыва мною согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без моего согласия при наличии оснований, указанных в пунктах 2 – 11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального закона №152-ФЗ «О персональных данных» от 27.06.2006 г.</p>",
    i += '<p>Вы можете <a href="/policies-privacy/" target="_blank" tabindex="0">открыть политику конфиденциальности</a> в отдельной вкладке/окне браузера.</p>',
    i += '<p class="fleft">Спасибо за внимание.</p></div>',
    f_message('<div class="pb_ahb">Политика конфиденциальности ООО «ТэоХим» и сайта teohim.ru</div>', i += v_px10b + v_px20 + '<input type="button" class="pb_buttons" id="idMsgOK" value="Ok" style="width:70px;height:30px;" onclick="$.wDelete(1,1)"/>' + v_px20, t, e),
    $.id("pb__win_body_1").style.overflowY = "scroll",
    $.id("idMsgOK").focus()
}
function f_mtrls_set() {
    for (var t, e, i, a, l = $.qSA(".mtrls") || [], s = 0; s < l.length; s += 1) {
        for (i = $.qSA("tr", l[s]) || [], t = 1; t < i.length; t += 1)
            for (a = $.qSA("td", i[t]) || [], e = 0; e < 7; e += 1)
                a[e].id = "aT" + (s + 1) + "_" + t + "_" + e;
        $.EH.add(l[s], "mouseover", function (t) {
            f_mtrls_sel(t.target.id, 1)
        }),
        $.EH.add(l[s], "mouseout", function (t) {
            f_mtrls_sel(t.target.id, 0)
        })
    }
}
function f_mtrls_sel(t, e) {
    var i,
    a,
    l,
    s;
    if (e = e ? "tdOver" : "", t = t.substr(2), a = parseInt(t, 10) || 0, l = t.indexOf("_") || 0, !(a < 1 || l < 1 || (t = t.substr(l + 1), l = parseInt(t, 10) || 0, s = t.indexOf("_") || 0, l < 1 || s < 1 || (s = parseInt(t.substr(s + 1), 10) || 0) < 1))) {
        for (i = 1; i < l; i += 1)
            $.id("aT" + a + "_" + i + "_" + s).className = e + (0 == s ? (e ? " " : "") + "tmdl" : "");
        for (i = 0; i < s; i += 1)
            $.id("aT" + a + "_" + l + "_" + i).className = e + (0 == i ? (e ? " " : "") + "tmdl" : "")
    }
}
function f_tblOver_set() {
    var t,
    e,
    i = 0,
    a = $.id("IDtblOver") || 0;
    if ((a = a && a.getElementsByTagName("td")) && 504 == a.length) {
        for (e = 0; e < 36; e += 1)
            for (t = 0; t < 14; t += 1)
                a[i].id = "aT" + e + "_" + t, i += 1;
        for (a = $.id("IDtblOver").getElementsByTagName("th"), e = 2; e < 52; e += 1)
            a[e].id = "aT" + e;
        $.EH.add("IDtblOver", "mouseover", function (t) {
            f_tblOver_sel(t.target.id, 1)
        }),
        $.EH.add("IDtblOver", "mouseout", function (t) {
            f_tblOver_sel(t.target.id, 0)
        })
    }
}
function f_tblOver_sel(t, e) {
    var i,
    a,
    l,
    s;
    if (t = t.substr(2), s = parseInt(t, 10) || 0, !((l = t.indexOf("_") || 0) < 1)) {
        for (e = e ? "tdOver" : "", l = parseInt(t.substr(l + 1), 10) || 0, a = 0; a < s; a += 1)
            $.id("aT" + a + "_" + l).className = e;
        for (i = 0; i < l; i += 1)
            $.id("aT" + s + "_" + i).className = e;
        $.id("aT" + (s + 16)).className = e,
        $.id("aT" + (l + 2)).className = e
    }
}
function f_otz_view() {
    var t = null;
    $.id("divotz").style.visibility = "visible",
    $.animate("divotz", 200, 50, t, t, t, t, t, t, 0, 1, t, t, t, t, f_otz_view0)
}
function f_otz_view0(t) {
    var e,
    i,
    a,
    l,
    s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    r = [0, 0],
    _ = [0, 0];
    if ("end" == t && $.id("sel1") && $.id("sel2")) {
        for (s[0] = [0, 0], s[1] = [1, 5, 42, 46, 57, 62, 70, 104], s[2] = [1, 15, 23, 34, 46, 54], s[3] = [2, 9, 19, 20, 21, 25, 32, 36, 38, 39, 50, 52, 56, 71, 76, 91, 100, 105, 106, 109, 115, 120, 123, 124, 125, 126], s[4] = [3, 8, 40, 51, 81, 82, 83], s[5] = [4, 26, 30, 48, 52, 58, 63, 65, 76, 77, 78, 79, 84, 85, 92, 93, 95, 98, 112, 121, 127], s[6] = [6, 7, 10, 13, 16, 17, 18, 22, 27, 30, 31, 35, 37, 41, 43, 44, 49, 52, 53, 55, 59, 60, 66, 67, 68, 72, 73, 74, 75, 78, 79, 80, 82, 84, 85, 86, 87, 88, 89, 90, 94, 101, 108, 114, 117, 118, 128], s[7] = [11, 24, 33, 45, 47, 64, 77, 96, 99, 103, 107, 110, 111, 112], s[8] = [12, 29, 102, 111, 113], s[9] = [13, 16, 18, 85], s[10] = [14, 122], s[11] = [28, 97], s[12] = [61, 69, 78], s[13] = [3, 8, 33, 49, 53, 82, 83, 86, 88, 116, 119], d[0] = [0, 0], d[1] = [1, 5, 13, 15, 17, 19, 23, 35, 36, 37, 48, 50, 54, 66, 68, 69, 73, 74, 90, 94, 100, 101, 104, 109], d[2] = [2, 4, 5, 7, 9, 10, 11, 12, 13, 15, 16, 18, 20, 21, 22, 27, 29, 30, 31, 32, 34, 35, 38, 41, 44, 45, 46, 49, 54, 55, 56, 57, 59, 60, 61, 62, 64, 65, 67, 75, 76, 77, 78, 79, 80, 82, 84, 85, 86, 88, 89, 92, 103, 106, 107, 112, 114, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127], d[3] = [2, 4, 5, 9, 10, 13, 22, 25, 26, 39, 58, 63, 70, 71, 72, 105, 108], d[4] = [3, 8, 33, 40, 51, 81, 82, 83], d[5] = [24], d[6] = [18, 23], d[7] = [6, 17, 37, 42, 43, 44, 48, 52, 53, 69, 73], d[8] = [14, 28, 47, 77, 87, 93, 95, 96, 97, 98, 99, 102, 110, 111, 112, 115], d[9] = [80, 85, 91, 92], d[10] = [0, 0], d[11] = [84, 89, 110, 114, 116, 117], d[12] = [128], a = s[0], l = d[0], e = 1; e <= 128; e += 1)
            r[e] = 0, _[e] = 0, l[(a[e - 1] = e) - 1] = e;
        for (i = (a = s[l = parseInt($.id("sel1").value, 10) || 0]).length || 0, e = 0; e < i; e += 1)
            r[a[e]] = 1;
        for (i = (a = d[l = parseInt($.id("sel2").value, 10) || 0]).length || 0, e = 0; e < i; e += 1)
            _[a[e]] = 1;
        for (e = 1; e <= 128; e += 1)
            $.id("dotz" + e) && ($.id("dotz" + e).style.display = 0 == r[e] || 0 == _[e] ? "none" : "block");
        setTimeout(function () {
            var t = null;
            $.animate("divotz", 200, 50, t, t, t, t, t, t, 1, 0, t, t, t, t, function () {
                $.id("divotz").style.visibility = "hidden"
            })
        }, 100)
    }
}
function f_clz(t) {
    4 == t || v_zlistr[0][1] ? f_post(t, v_zlistr[0][3]) : f_message("Оформление заказа", '<span class="fwn fs15">Заказ пустой</span>', 200, 100)
}
function f_basketRal(t) {
    var e,
    i,
    a,
    l,
    s,
    d = 0,
    r = $.gMX(t),
    _ = $.gMY(t),
    n = $.gPW(t),
    o = $.gPH(t),
    p = t.target,
    v = p.id.substr(7),
    c = v_zlistr,
    f = c.length;
    if (v_changeRal = 9, e = v.indexOf("_"), s = parseInt(v.substr(e + 1), 10), v = parseInt(v.substr(0, e), 10), 0 != v_ordEdit && -1 != aRal.indexOf(v)) {
        for (f_basketRalDel(t), $.uEnv(t), e = 1; e < f; e += 1)
            c[e][0] == v && c[e][4] == s && (l = JSON.parse(JSON.stringify(c[e])), d = e, e = f);
        l && (a = (i = 17 == v || 20 == v || 21 == v || 22 == v || 165 == v || 193 == v || 205 == v || 206 == v ? 1 : 0) && l[1] < l[2][1] + l[2][1] ? 0 : 1, 33 != v && 37 != v && 71 != v || (a = l[i = 1] < l[2][1] ? 0 : 1), _ = (r = $.gOffset(p)).top, r = r.left, n - 300 < (r += p = parseInt($.gStyle(t.target, "width"), 10) || 30) && (r = n - 300), o - 100 < (_ += (p = parseInt($.gStyle(t.target, "height"), 10) || 20) - 5) && (_ = o - 100), r < 0 && (r = 0), _ < 0 && (_ = 0), (o = $.D.createElement("div")).className = "dBalPrice", (p = o.style).top = _ + "px", p.left = r + "px", p = 33 == v || 37 == v || 71 == v ? l[2][1] : l[2][1] + l[2][1], i && 0 == a ? f_message('<div class="pb_ah0">Выбор цвета от количества:' + p + (105 == v || 106 == v || 227 == v ? "л" : "кг") + "</div>", '<spanp class="fwb c1">Выбор цвета возможен от количества:<br>' + p + (105 == v || 106 == v || 227 == v ? "л" : "кг") + "</span>", 300, 110) : (r = l[5] || 0, a = l[6], aRalSel = [v, r, a, "if(f_addRal(" + v + "," + l[1] + ")){v_zlistr[" + d + "]=v_zlist_;v_zlist_=[];f_testBasketSum();f_set_zlist();f_basketRalDel(event);}"], p = '<div class="dBalPriceHead">Выбор цвета</div><div class="dBalPriceHeadDel" onclick="f_basketRalDel(event)"></div>', p += v_px15 + '<div style="margin:0 auto; width:150px;">', p += '<div class="fleft mt2 fwb">Цвет:</div><div class="ordDtdC fright" title="Сбросить по-умолчанию" onclick="v_zlist_[5]=7;v_zlist_[6]=40;' + aRalSel[3] + '"><div class="ordD"></div></div>', p += '<div class="dralc" style="background:#', f_tr12(r, a) ? p += aRalC[r][a] : (a = 40, p += aRalC[r = 7][40]), v_ralCF = i ? l[2][1] + l[2][1] : 0, 33 != v && 37 != v && 71 != v || (v_ralCF = l[2][1]), v_ralOldK = (v_zlist_ = l)[1], v_ralOldR1 = v_zlist_[5], v_ralOldR2 = v_zlist_[6], p += ';float:right;margin:0;width:80px;height:20px;" onclick="f_ral(' + v + "," + r + "," + a + "," + l[1] + ')" title="Выбрать цвет"></div>' + v_px0 + '<div class="fright fs11 tal" style="width:103px;">(выбрать цвет)</div>', p += "</div>" + v_px5, o.innerHTML = '<div class="dBalPriceBody">' + p + "</div>", $.B.appendChild(o), dBalPrice = o, t.targetTouches && 1 == t.targetTouches.length && $._(24)(t, 0), v_changeRal = s, v_ralOldK = v_zlist_[1]))
    }
}
function f_basketRalDel(t) {
    0 != dBalPrice && ($.uEnv(t), $.B.removeChild(dBalPrice), $._(24)(t, 0), dBalPrice = 0)
}
function f_b(t, e, i) {
    f_newRal(t, e, i)
}
function f_newRal(t, e, i, a) {
    var l,
    s = v_zlistr,
    d = s.length;
    if (v_zlist_ = 0, (a = a || 0) && 0 < v_changeRal)
        for (l = 1; l < d; l += 1)
            t == s[l][0] && s[l][4] == v_changeRal && (v_zlist_ = JSON.parse(JSON.stringify(s[l])), l = d);
    else
        for (l = 1; l < d; l += 1)
            t == s[l][0] && (v_zlist_ = JSON.parse(JSON.stringify(s[l])), v_changeRal = s[l][4]);
    v_zlist_ || (v_zlist_ = [t, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0, 1, 0, 0], v_changeRal = 0),
    v_trname = e || v_mtrt[t][2],
    v_trname2 = i || "",
    v_ralOldK = v_zlist_[1],
    v_ralOldR1 = v_zlist_[5],
    v_ralOldR2 = v_zlist_[6],
    e = v_mtrt[t][10],
    i = v_mtrt[t][11],
    v_trtara = [e[0], i[0], e[1], i[1], e[2], i[2], e[3], i[3], e[4], i[4], e[5], i[5]],
    f_editRal(t, -1)
}
function f_changeRal(t, e, i) {
    var a,
    l = 0,
    s = v_zlistr,
    d = s.length;
    if (i = parseInt(i, 10) || 0, (e = e || 0) != v_ralOldK)
        return !1;
    for (a = 1; a < d; a += 1)
        t == s[a][0] && (l += 1, v_changeRal != s[a][4] && i == s[a][4] && (v_zlist_ = JSON.parse(JSON.stringify(s[a])), a = d));
    0 == i && (v_zlist_ = [t, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0, l + 1, 0, 0]),
    v_ralOldK = v_zlist_[1],
    v_ralOldR1 = v_zlist_[5],
    v_ralOldR2 = v_zlist_[6],
    v_changeRal = v_zlist_[4],
    f_editRal(t, -1)
}
function f_addRal(e, t) {
    var i,
    a,
    l,
    s,
    d,
    r,
    _,
    n = v_zlistr,
    o = n.length,
    p = v_zlist_[5],
    v = v_zlist_[6],
    c = 0,
    f = "RAL " + ((f = 1e3 * p + v) || "Базовый 7040");
    if (0 < (t = t || 0) && 0 == v_ralOldK) {
        for (i = 1; i < o; i += 1) {
            if (s = n[i][5], d = n[i][6], n[i][0] == e && n[i][4] != v_changeRal && s == p && d == v)
                return f_message('<div class="pb_ah0">' + f + ": есть в заказе</div>", "Вариант с колеровкой " + f + "<br>уже есть в заказе.", 280, 110), !1;
            n[i][0] == e && 0 == v_changeRal && (c += 1)
        }
        c && (v_zlist_[4] = v_changeRal = c),
        n[o] = v_zlist_
    }
    if (0 == t && 0 < v_ralOldK) {
        for (i = 1; i < o; i += 1)
            n[i][0] == e && n[i][4] == v_changeRal && (n[i] = [0], i = o, 226 == v_page && (l = r = v_changeRal, (_ = $.id("trt" + e + "_" + r)) && (_.className = "trt_none"), (_ = $.id("trt" + e + "_" + r + "_I")) && (_.className = "trt_none"), (_ = $.id("trt" + e + "_" + r + "_ld")) && (_.className = "trt_none"), (_ = $.id("dordRal" + e + "_" + r)) && (_.style.display = "none"), (_ = $.id("trt" + e + "_" + r + "_0")) && (_.className = "trt_none"), (_ = $.id("trt" + e + "_" + r + "_1")) && (_.className = "trt_none"), (_ = $.id("trt" + e + "_" + r + "_2")) && (_.className = "trt_none"), (_ = $.id("trt" + e + "_" + r + "_3")) && (_.className = "trt_none"), (_ = $.id("trt" + e + "_" + r + "_4")) && (_.className = "trt_none"), (_ = $.id("trt" + e + "_" + r + "_5")) && (_.className = "trt_none")));
        v_changeRal = 0
    }
    if (0 < t && 0 < v_ralOldK) {
        for (i = 1; i < o; i += 1)
            if (s = n[i][5], d = n[i][6], n[i][0] == e && n[i][4] != v_changeRal && s == p && d == v)
                return f_message('<div class="pb_ah0">' + f + ": есть в заказе</div>", "Вариант с колеровкой " + f + "<br>уже есть в заказе.", 280, 110), !1;
        for (i = 1; i < o; i += 1)
            n[i][0] == e && n[i][4] == v_changeRal && (n[i] = v_zlist_, i = o)
    }
    if (226 == v_page) {
        for (o = (r = $.qSA(".trt_none") || []).length, i = 0; i < o; i += 1)
            "trt0th" != r[i].id && "trt1th" != r[i].id && r[i].parentNode.removeChild(r[i]);
        if (0 == t && 0 < v_ralOldK)
            for (i = l + 1; i <= 5; i += 1)
                for ((_ = $.id("dordRal" + e + "_" + i)) && (_.id = "dordRal" + e + "_" + (i - 1)), (_ = $.id("ordRal" + e + "_" + i)) && (_.id = "ordRal" + e + "_" + (i - 1)), (_ = $.id("ordD" + e + "_" + i)) && (_.id = "ordD" + e + "_" + (i - 1)), (_ = $.id("trt" + e + "_" + i)) && (_.id = "trt" + e + "_" + (i - 1)), (_ = $.id("trt" + e + "_" + i + "_ld")) && (_.id = "trt" + e + "_" + (i - 1) + "_ld"), (_ = $.id("ordKI" + e + "_" + i)) && (_.id = "ordKI" + e + "_" + (i - 1)), (_ = $.id("ordCS" + e + "_" + i)) && (_.id = "ordCS" + e + "_" + (i - 1)), (_ = $.id("trt" + e + "_" + i + "_I")) && (_.id = "trt" + e + "_" + (i - 1) + "_I"), a = 0; a <= 5; a += 1)
                    (_ = $.id("ordF" + e + "_" + i + "_" + a)) && (_.id = "ordF" + e + "_" + (i - 1) + "_" + a), (_ = $.id("ordK" + e + "_" + i + "_" + a)) && (_.id = "ordK" + e + "_" + (i - 1) + "_" + a), (_ = $.id("ordC" + e + "_" + i + "_" + a)) && (_.id = "ordC" + e + "_" + (i - 1) + "_" + a), (_ = $.id("ordS" + e + "_" + i + "_" + a)) && (_.id = "ordS" + e + "_" + (i - 1) + "_" + a), (_ = $.id("trt" + e + "_" + i + "_" + a)) && (_.id = "trt" + e + "_" + (i - 1) + "_" + a)
    } else
        f_testBasketSum(), v_idBT_I && (clearInterval(v_idBT_I), v_idBT_I = null, v_idBT_S = 1), $.removeDialog(), v_esc = v_dialogEsc = 0, f_testfbuy(), 0 <= aRal.indexOf(e) && setTimeout(function (t) {
            f_newRal(e, v_trname, v_trname2, 1)
        }, 20);
    return !0
}
function f_tr12(t, e) {
    return 0 == t ? 0 : 1
}
function f_rBase(t, e) {
    return 0 == t ? 1 : 0
}
function f_editRal(t, e) {
    var i,
    a,
    l,
    s,
    d,
    r,
    _,
    n,
    o,
    p,
    v,
    c,
    f,
    g,
    h,
    u = 0,
    b = "",
    x = 0,
    m = 0,
    y = 0,
    w = 0,
    S = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    R = [0, 0],
    T = v_zlistr,
    k = T.length;
    for (aRalSel = [], aR = 0 <= aRal.indexOf(t) ? 1 : 0, g = (p = JSON.parse(JSON.stringify(v_zlist_)))[5] || 0, h = p[6] || 0, aR && (f_tr12(g, h) ? aRalC[g][h] : aRalC[7][40]), v = JSON.parse(JSON.stringify(v_trtara)), e = e || 0, $.removeDialog(), v_esc = v_dialogEsc = 0, v_idBT_I && (clearInterval(v_idBT_I), v_idBT_I = null, v_idBT_S = 1, $.id("idBT_ACD").style.background = "inherit"), 0 <= e && e != v_ralOldK && (v_idBT_I = setInterval(function () {
                var t = $.id("idBT_ACD") || 0;
                t ? v_idBT_S = v_idBT_S ? (t.style.background = "#ffc8c8", 0) : (t.style.background = "inherit", 1) : v_idBT_I && (clearInterval(v_idBT_I), v_idBT_I = null)
            }, 500)), -1 == e && 0 < p[1] && (e = x = p[1], S = [p[2][0], 0, p[2][2], 0, p[2][4], 0, p[2][6], 0, p[2][8], 0, p[2][10], 0]), -1 == e && (e = 0), v_zlist_ = 0, R[t] = [t, e, v, 0], i = 0; i < 7; i += 2)
        R[t][2][i] || (R[t][2][i] = 0), R[t][2][i + 1] || (R[t][2][i + 1] = 0);
    for (R[t][2][0] && R[t][2][2] && R[t][2][4] && R[t][2][6] && (w = 2), "0.00" == (p = parseFloat(e).toFixed(2)) && (p = ""), d = '<div class="tac"><span class="c9">' + v_trname + "</span><br><span class='fwn fs12'>" + v_trname2 + "</span>" + v_px5b + v_px5, s = '<p class="fleft mt5 fs11" style="color:#606060">Ввод для <span>оптимального</span> подбора тары :</p> &nbsp;<input class="inpbox" id="IDiadd" type="text" onchange="if(parseFloat(this.value)<=99620)f_editRal(' + t + ',(parseFloat(this.value)||0),1)" style="width:60px;text-align:right;" value="' + p + '" maxlength="8"/>' + v_px5b, s += v_px0 + '<p class="fs11 fleft">Наберите количество в требуемой таре.</p><p class="fs11 fright">Цены с НДС, руб.</p>' + v_px10, n = e; x < e; ) {
        for (i = 0; i < 7; i += 2) {
            for (o = R[t][2][i]; 0 < o && o <= e - x; )
                S[i] += 1, x += o;
            if (e == x)
                break
        }
        if (e == x)
            break;
        if (0 < R[t][2][6] && x + R[t][2][6] > e && (e = x + R[t][2][6], S[6] += 1), 0 == R[t][2][6] && 0 < R[t][2][4] && x + R[t][2][4] > e && (e = x + R[t][2][4], S[4] += 1), 0 == R[t][2][6] && 0 == R[t][2][4] && 0 < R[t][2][2] && x + R[t][2][2] > e && (e = x + R[t][2][2], S[2] += 1), 0 == R[t][2][6] && 0 == R[t][2][4] && 0 == R[t][2][2] && 0 < R[t][2][0] && x + R[t][2][0] > e && (e = x + R[t][2][0], S[0] += 1), n < e || n <= x) {
            x = e;
            break
        }
        S = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        x = 0
    }
    for (1 == S[a = 6] && (0 < S[2] || 0 < S[0]) && 2 == w && (R[t][2][a + 1] = R[t][2][a - 1]), 1 == S[a = 4] && 0 == S[6] && (0 < S[2] || 0 < S[0]) && (R[t][2][a + 1] = R[t][2][a - 1]), 1 == S[a = 2] && 0 == S[6] && 0 == S[4] && 0 < S[0] && 0 == w && (R[t][2][a + 1] = R[t][2][a - 1]), i = 6; 2 <= i; i -= 2)
        2 == S[i] && R[t][2][i - 2] == R[t][2][i] + R[t][2][i] && (S[i - 2] += 1, S[i] = 0);
    for (s += '<div id="IDiaddTbl">', s += '<table class="tmtrt"><tbody><tr class="fwb" style="height:20px"><th style="width:80px">Фасовка</th><th style="width:100px">Кол-во, ' + (105 == t || 106 == t || 227 == t ? "л" : "кг") + '</th><th style="width:60px">Цена за ' + (105 == t || 106 == t || 227 == t ? "л" : "кг") + '</th><th style="width:85px">Стоимость</th></tr>', e = "f_editRal2(" + t + "," + x + ",[" + v_trtara + "],[" + S[0] + "," + (R[t][2][0] || 0) + "," + S[2] + "," + (R[t][2][2] || 0) + "," + S[4] + "," + (R[t][2][4] || 0) + "," + S[6] + "," + (R[t][2][6] || 0) + ",0,0,0,0],", R[t] = [t, x, v, u], b = f_z_cht(t, x)[2], y = 17 == t || 20 == t || 21 == t || 22 == t || 165 == t || 193 == t || 205 == t || 206 == t ? R[t][2][0] + R[t][2][0] : 0, 33 != t && 37 != t && 71 != t || (y = R[t][2][0]), u = 0, (v_ralCF = y) && 7 == g && 40 == h && (y = 0), (7 != g || 35 != h && 40 != h) && aR && 0 < g && y <= x && (b += aRalN[g][h], m = (m = 0 < x && f_tr12(g, h) ? aRal[0] : 0) / x > Math.round(m / x) ? Math.round(m / x) + 1 : Math.round(m / x), 840 <= x && (m = 5), b += m), i = 0; i < 7; i += 2)
        R[t][2][i] && ((27 == t || 57 == t) && 0 < g && 0 < aRalN[g][h] && (b += 25), o = S[i] * R[t][2][i] * R[t][2][i + 1], a = S[i] * R[t][2][i] * b + o, s += "<tr" + (0 == S[i] ? ' style="color:#808080"' : "") + '><td style="padding-left:5px;text-align:left"><span style="ont:bold 13px arial">' + S[i] + "</span> по " + R[t][2][i] + (105 == t || 106 == t || 227 == t ? "л" : "кг") + "</td>", s += '<td><div class="f_l" onclick="' + e + "(parseFloat($.id('id_inptara" + i + "').value,10)||0)," + i + ',2)"></div>', s += '<input type="text" id="id_inptara' + i + '" style="width:60px; height:15px; text-align:right;" maxlength="8" onfocus="if(this.value==\'нет\')this.value=\'\'" onblur="if(this.value==\'\')this.value=\'нет\'" onchange="' + e + "(parseFloat(this.value,10)||0)," + i + ',0)" value="' + (0 == S[i] ? "нет" : (S[i] * R[t][2][i]).toFixed(2)) + '"/>', s += '<div class="f_r"' + (99620 < x ? "" : ' onclick="' + e + "(parseFloat($.id('id_inptara" + i + "').value,10)||0)," + i + ',1)"') + "></div></td>", s += '<td style="padding-right:5px;text-align:right;">' + (0 < a ? f_ts((b + R[t][2][i + 1]).toFixed(2)) : "") + '</td><td style="padding-right:5px;text-align:right">' + (0 < a ? f_ts(a.toFixed(2)) : "") + "</td></tr>", u += a);
    if (u = u || 0, s += '<tr><td style="padding-left:5px;text-align:left;font:bold 13px arial">Итого:</td><td style="padding-right:5px;text-align:right;font:bold 13px arial;">' + f_ts(x.toFixed(2)) + '</td><td colspan="2" style="padding-right:5px;text-align:right;font:bold 13px arial;">' + f_ts(u.toFixed(2) || 0) + "</td></tr>", s += "</tbody></table>", aR ? (aRalSel = [t, g, h, ""], cf2 = (17 == t || 20 == t || 21 == t || 22 == t || 165 == t || 193 == t || 205 == t || 206 == t) && x < R[t][2][0] + R[t][2][0] ? 0 : 1, 33 != t && 37 != t && 71 != t || (cf2 = x < R[t][2][0] ? 0 : 1), s += v_px15 + '<div style="margin:0 30px 0 70px; width:280px;"><div class="fleft mt2 fwb">Цвет:</div><div class="fright mt2" style="width:130px">(RAL ' + (cf2 && 1e3 * g + h || "7040") + (7 == g && 40 == h || 0 == g ? " базовый" : "") + ")</div>", cf2 ? s += '<div class="ordDtdC fright" title="Сбросить по-умолчанию" onclick="f_ral_clr(' + t + ");" + e + '(parseFloat($.id(\'IDiadd\').value,10)||0),0,3);"><div class="ordD"></div></div>' : s += '<div class="fright" style="width:21px">&nbsp;</div>', s += '<div class="dralc" style="background:#', f_tr12(g, h) ? s += aRalC[g][h] : s += aRalC[7][40], aRalSel[3] = e + "(parseFloat($.id('IDiadd').value,10)||0),0,3)", s += ';float:right;margin:0;width:80px;height:20px;" ', cf2 && (s += 'onclick="f_ral(' + t + "," + g + "," + h + "," + x + ')" title="Выбрать цвет"'), s += "></div>" + v_px0 + '<div class="fright fs11 tal" style="width:233px;">' + (cf2 ? "(выбрать цвет)" : "&nbsp;") + "</div>", s += "</div>" + v_px5) : s += v_px20, aR) {
        for (_ = 0, a = 1; a < k; a += 1)
            t == T[a][0] && (_ += 1);
        for (r = 0 < _ && _ < 6 && x == v_ralOldK && v_ralOldR1 == g && v_ralOldR2 == h ? 1 : 0, d += '<div id="dordTC">' + (0 < _ ? '<div class="fleft fs11 fwb" style="margin:-2px 0 0 5px">Заказанные цвета:</div>' + v_px3 : ""), a = 1; a < k; a += 1)
            t == T[a][0] && (c = T[a][5], f = T[a][6], l = T[a][4] == v_changeRal ? 1 : 0, d += '<div class="fleft" id="id_bral_' + T[a][4] + '" style="margin:0 0 5px 5px;font-weight:bold;' + (l ? "border:solid 2px #000000" : "border:solid 2px transparent") + ';"><div class="pb_buttons" style="display:inline-block;margin:0;width:55px;font-weight:normal;color:#ffffff;text-shadow:#000000 1px 1px 1px;background:#' + (l && x < y || !f_tr12(c, f) ? aRalC[7][40] : aRalC[c][f]) + '"' + (r ? ' onclick="f_changeRal(' + t + "," + x + "," + T[a][4] + ')"' : "") + ">" + v_px5 + (1e3 * c + f) + "</div><br>" + T[a][1] + "кг</div>");
        r && _ < 5 && (d += '<div class="cd_ral_plus" title="Добавить с другим цветом..." onclick="f_changeRal(' + t + "," + x + ',0)">+</div>'),
        d += (0 < _ ? v_px0b + v_px5 : "") + "</div>" + v_px0
    }
    (!f_tr12(g, h) || x < y) && (g = h = 0, aR && (g = 7, h = 40)),
    v_zlist_ = [t, x, [S[0], R[t][2][0] || 0, S[2], R[t][2][2] || 0, S[4], R[t][2][4] || 0, S[6], R[t][2][6] || 0, S[8], R[t][2][8] || 0, 0, 0], u, v_changeRal, g || 0, h || 0],
    aR && (17 != t && 20 != t && 21 != t && 22 != t && 165 != t && 193 != t && 205 != t && 206 != t || (s += v_px0 + '<p class="fwb mt0 fs11 tac c1">Минимальная партия для колеровки от ' + 2 * R[t][2][0] + "кг</p>" + v_px7), 33 != t && 37 != t && 71 != t || (s += v_px0 + '<p class="fwb mt0 fs11 tac c1">Минимальная партия для колеровки от ' + R[t][2][0] + "кг</p>" + v_px7)),
    s += v_px5 + '<input type="button" class="pb_buttons" id="idBT_ACD" style="font-weight:bold;width:150px;" value="' + (0 == x && 0 < v_ralOldK ? "Удалить из заказа" : (0 != x || 0 != v_ralOldK) && 0 < v_ralOldK ? "Изменить в заказе" : "Добавить в заказ") + '" onclick="f_addRal(' + t + "," + x + ')"/></div>',
    s += v_px5 + '<p class="fs11 tac">ВНИМАНИЕ! Цены будут изменены (уменьшены)<br>с учетом общего количества покупаемых материалов.</p>',
    $.createDialog('<div class="pb_ah0">Выбор количества и тары</div>', d + s, 360, aR ? 460 : 400),
    v_esc = v_dialogEsc = 1,
    "0.00" == (p = x.toFixed(2) || "0.00") && (p = ""),
    $.id("IDiadd").value = p,
    $.id("IDiadd").focus()
}
function f_editRal2(t, e, i, l, s, d, r) {
    var _,
    n,
    o,
    p,
    v,
    c,
    f,
    g = "",
    h = 0,
    u = 0,
    b = "",
    x = 0,
    m = 0,
    y = 0,
    w = 0,
    S = 0,
    R = [l[0], 0, l[2], 0, l[4], 0, l[6], 0, 0, 0],
    l = JSON.parse(JSON.stringify(i)),
    T = v_zlistr,
    k = T.length,
    I = aRalSel[1],
    O = aRalSel[2],
    i = 0 <= aRal.indexOf(t) ? 1 : 0;
    if (a = [0, 0], !((e = e || 0) < 0)) {
        for (a[t] = [t, e, l, 0], s = s || 0, r = r || 0, d = d || 0, h = 0; h < 7; h += 2)
            a[t][2][h] || (a[t][2][h] = 0), a[t][2][h + 1] || (a[t][2][h + 1] = 0);
        for (a[t][2][0] && a[t][2][2] && a[t][2][4] && a[t][2][6] && (S = 2), 1 == r && (R[d] += 1), 2 == r && 0 < R[d] && --R[d], R[d] < 0 && (R[d] = 0), 0 == r && (s / a[t][2][d] > Math.round(s / a[t][2][d]) ? R[d] = Math.round(s / a[t][2][d]) + 1 : R[d] = Math.round(s / a[t][2][d])), 1 == R[p = 6] && (0 < R[2] || 0 < R[0]) && 2 == S && (a[t][2][p + 1] = a[t][2][p - 1]), 1 == R[p = 4] && 0 == R[6] && (0 < R[2] || 0 < R[0]) && (a[t][2][p + 1] = a[t][2][p - 1]), 1 == R[p = 2] && 0 == R[6] && 0 == R[4] && 0 < R[0] && 0 == S && (a[t][2][p + 1] = a[t][2][p - 1]), h = 0; h < 7; h += 2)
            0 < R[h] && (x += (v = a[t][2][h]) * R[h], u += v * R[h] * a[t][2][h + 1]);
        x = Math.round(x * 100) / 100;
		if (99620 < x)
            return $.id("IDiadd").value = "99620", void f_editRal(t, 99620, 1);
        for (v_idBT_I && (clearInterval(v_idBT_I), v_idBT_I = null, v_idBT_S = 1, $.id("idBT_ACD").style.background = "inherit"), x == v_ralOldK && I == v_ralOldR1 && O == v_ralOldR2 || (v_idBT_I = setInterval(function () {
                    var t = $.id("idBT_ACD") || 0;
                    t ? v_idBT_S = v_idBT_S ? (t.style.background = "#ffc8c8", 0) : (t.style.background = "inherit", 1) : v_idBT_I && (clearInterval(v_idBT_I), v_idBT_I = null)
                }, 500)), n = '<table class="tmtrt"><tbody><tr class="fwb" style="height:20px"><th style="width:80px">Фасовка</th><th style="width:100px">Кол-во, ' + (105 == t || 106 == t || 227 == t ? "л" : "кг") + '</th><th style="width:60px">Цена за ' + (105 == t || 106 == t || 227 == t ? "л" : "кг") + '</th><th style="width:85px">Стоимость</th></tr>', e = "f_editRal2(" + t + "," + x + ",[" + v_trtara + "],[" + R[0] + "," + (a[t][2][0] || 0) + "," + R[2] + "," + (a[t][2][2] || 0) + "," + R[4] + "," + (a[t][2][4] || 0) + "," + R[6] + "," + (a[t][2][6] || 0) + ",0,0,0,0],", b = f_z_cht(t, x)[2], y = 17 == t || 20 == t || 21 == t || 22 == t || 165 == t || 193 == t || 205 == t || 206 == t ? a[t][2][0] + a[t][2][0] : 0, 33 != t && 37 != t && 71 != t || (y = a[t][2][0]), u = 0, (v_ralCF = y) && 7 == I && 40 == O && (y = 0), (7 != I || 35 != O && 40 != O) && i && 0 < I && y <= x && (b += aRalN[I][O], m = (m = 0 < x && f_tr12(I, O) ? aRal[0] : 0) / x > Math.round(m / x) ? Math.round(m / x) + 1 : Math.round(m / x), 840 <= x && (m = 5), b += m), h = 0; h < 7; h += 2)
            a[t][2][h] && ((27 == t || 57 == t) && 0 < I && 0 < aRalN[I][O] && (b += 25), v = R[h] * a[t][2][h] * a[t][2][h + 1], p = R[h] * a[t][2][h] * b + v, n += "<tr" + (0 == R[h] ? ' style="color:#808080"' : "") + '><td style="padding-left:5px;text-align:left"><span style="font:bold 13px arial">' + R[h] + "</span> по " + a[t][2][h] + (105 == t || 106 == t || 227 == t ? "л" : "кг") + "</td>", n += '<td><div class="f_l" onclick="' + e + "(parseFloat($.id('id_inptara" + h + "').value,10)||0)," + h + ',2)"></div>', n += '<input type="text" id="id_inptara' + h + '" style="width:60px; height:15px; text-align:right;" maxlength="8" onfocus="if(this.value==\'нет\')this.value=\'\'" onblur="if(this.value==\'\')this.value=\'нет\'" onchange="' + e + "(parseFloat(this.value,10)||0)," + h + ',0)" value="' + (0 == R[h] ? "нет" : (R[h] * a[t][2][h]).toFixed(2)) + '"/>', n += '<div class="f_r"' + (99620 <= x ? "" : ' onclick="' + e + "(parseFloat($.id('id_inptara" + h + "').value,10)||0)," + h + ',1)"') + "></div></td>", n += '<td style="padding-right:5px;text-align:right;">' + (p ? f_ts((b + a[t][2][h + 1]).toFixed(2)) : "") + '</td><td style="padding-right:5px;text-align:right">' + (p ? f_ts(p.toFixed(2)) : "") + "</td></tr>", u += p);
        if (u = u || 0, n += '<tr><td style="padding-left:5px;text-align:left;font:bold 13px arial">Итого:</td><td style="padding-right:5px;text-align:right;font:bold 13px arial;">' + f_ts(x.toFixed(2)) + '</td><td colspan="2" style="padding-right:5px;text-align:right;font:bold 13px arial;">' + f_ts(u.toFixed(2) || 0) + "</td></tr>", n += "</tbody></table>", i ? (aRalSel = [t, I, O, ""], w = (17 == t || 20 == t || 21 == t || 22 == t || 165 == t || 193 == t || 205 == t || 206 == t) && x < a[t][2][0] + a[t][2][0] ? 0 : 1, 33 != t && 37 != t && 71 != t || (w = x < a[t][2][0] ? 0 : 1), n += v_px15 + '<div style="margin:0 30px 0 70px; width:280px;"><div class="fleft mt2 fwb">Цвет:</div><div class="fright mt2" style="width:130px">(RAL ' + (w && 1e3 * I + O || "7040") + (7 == I && 40 == O || 0 == I ? " базовый" : "") + ")</div>", n += w ? '<div class="ordDtdC fright" title="Сбросить по-умолчанию" onclick="f_ral_clr(' + t + ");" + e + '(parseFloat($.id(\'IDiadd\').value,10)||0),0,3);"><div class="ordD"></div></div>' : '<div class="fright" style="width:21px">&nbsp;</div>', n += '<div class="dralc" style="background:#', f_tr12(I, O) ? n += aRalC[I][O] : n += aRalC[7][40], aRalSel[3] = e + "(parseFloat($.id('IDiadd').value,10)||0),0,3)", n += ';float:right;margin:0;width:80px;height:20px;" ', w && (n += 'onclick="f_ral(' + t + "," + I + "," + O + "," + x + ')" title="Выбрать цвет"'), n += "></div>" + v_px0 + '<div class="fright fs11 tal" style="width:233px;">' + (w ? "(выбрать цвет)" : "&nbsp;") + "</div>", n += "</div>" + v_px5) : n += v_px20, i) {
            for (r = 0, p = 1; p < k; p += 1)
                t == T[p][0] && (r += 1);
            for (g += 0 < r ? '<div class="fleft fs11 fwb" style="margin:-2px 0 0 5px">Заказанные цвета:</div>' + v_px3 : "", o = 0 < r && r < 6 && x == v_ralOldK && v_ralOldR1 == I && v_ralOldR2 == O ? 1 : 0, p = 1; p < k; p += 1)
                t == T[p][0] && (c = T[p][5], f = T[p][6], _ = T[p][4] == v_changeRal ? 1 : 0, g += '<div class="fleft" id="id_bral_' + T[p][4] + '" style="margin:0 0 5px 5px;font-weight:bold;' + (_ ? "border:solid 2px #000000" : "border:solid 2px transparent") + ';"><div class="pb_buttons" style="display:inline-block;margin:0;width:55px;font-weight:normal;color:#ffffff;text-shadow:#000000 1px 1px 1px;background:#' + (_ && x < y || !f_tr12(c, f) ? aRalC[7][40] : aRalC[c][f]) + '"' + (o ? ' onclick="f_changeRal(' + t + "," + x + "," + T[p][4] + ')"' : "") + ">" + v_px5 + (1e3 * c + f) + "</div><br>" + T[p][1] + "кг</div>");
            o && r < 5 && (g += '<div class="cd_ral_plus" title="Добавить с другим цветом..." onclick="f_changeRal(' + t + "," + x + ',0)">+</div>'),
            g += v_px0b + v_px5,
            $.id("dordTC").innerHTML = 0 < r ? g : ""
        }
        (!f_tr12(I, O) || x < y) && (I = O = 0, i && (I = 7, O = 40)),
        v_zlist_ = [t, x, [R[0], a[t][2][0] || 0, R[2], a[t][2][2] || 0, R[4], a[t][2][4] || 0, R[6], a[t][2][6] || 0, R[8], a[t][2][8] || 0, 0, 0], u, v_changeRal, I || 0, O || 0],
        i && (17 != t && 20 != t && 21 != t && 22 != t && 165 != t && 193 != t && 205 != t && 206 != t || (n += v_px0 + '<p class="fwb mt0 fs11 tac c1">Минимальная партия для колеровки от ' + 2 * a[t][2][0] + "кг</p>" + v_px7), 33 != t && 37 != t && 71 != t || (n += v_px0 + '<p class="fwb mt0 fs11 tac c1">Минимальная партия для колеровки от ' + a[t][2][0] + "кг</p>" + v_px7)),
        n += v_px5 + '<input type="button" class="pb_buttons" id="idBT_ACD" style="font-weight:bold;width:150px;" value="' + (0 == x && 0 < v_ralOldK ? "Удалить из заказа" : (0 != x || 0 != v_ralOldK) && 0 < v_ralOldK ? "Изменить в заказе" : "Добавить в заказ") + '" onclick="f_addRal(' + t + "," + x + ')"/></div>',
        $.id("IDiaddTbl").innerHTML = n,
        "0.00" == (i = x.toFixed(2) || "0.00") && (i = ""),
        $.id("IDiadd").value = i,
        $.id("IDiadd").focus()
    }
}
function f_ral(t, e, i, a) {
    var l,
    s,
    d,
    r,
    _ = 1,
    n = [],
    o = v_zlist_;
    if (t) {
        for (n[1] = ["EAF044", "AF8A54"], n[2] = ["FA842B", "C63927"], n[3] = ["CB3334", "701F29"], n[4] = ["83639D", "992572"], n[5] = ["6A93B0", "2B2C7C"], n[6] = ["008F39", "26392F"], n[7] = ["BDBDB2", "373F43"], n[8] = ["A65E2F", "4E3B2B"], n[9] = ["EFEBDC", "0A0A0D"], l = '<div class="mt-10"><span>Внимание! Для выбора цвета<br>используйте оригинальную таблицу RAL</span>.<br>Цвета на экране могут отличаться от действительных<br>из-за настроек Вашего монитора.</div>', a < v_ralCF && (17 == t || 20 == t || 21 == t || 22 == t || 165 == t || 193 == t || 205 == t || 206 == t) && (_ = 0, l += '<p class="fwb fs13 tac c1">Минимальная партия для колеровки от ' + 2 * o[2][1] + "кг</p>" + v_px5), a < v_ralCF && (33 == t || 37 == t || 71 == t) && (_ = 0, l += '<p class="fwb fs13 tac c1">Минимальная партия для колеровки от ' + o[2][1] + "кг</p>" + v_px5), l += v_px5b + v_px7, s = 1; s <= 9; s += 1)
            l += '<div class="fleft" id="id_bral' + s + '" style="margin:0 0 5px 5px;' + (s == e ? "border:solid 2px #000000" : "border:solid 2px transparent") + ';"><input type="button" class="pb_buttons" style="margin:0;width:55px;font-weight:bold;background:linear-gradient(to right,#' + n[s][0] + ",#" + n[s][1] + ');" value="" onclick="f_ral_sGr(' + s + ')"/><br>RAL ' + s + "xxx</div>";
        for (l += v_px3b + v_px10, l += '<div style="height:190px">', s = 1; s <= 9; s += 1) {
            for (r = aRalC[s].length, l += '<div id="id_dral' + s + '" style="display:' + (e == s ? "block" : "none") + '">', d = 0; d < r; d += 1)
                aRalC[s][d] && (l += '<div class="dralc" style="width:57px;' + (s == e && d == i ? "border:solid 2px #000000;" : "border:solid 2px transparent;") + "background:#" + aRalC[s][d] + '" ', (_ || 7 == s && 40 == d) && (l += "onclick=\"$.id('divAtopB').style.display='block';$.id('divAtopC').style.display='block';$.id('divAtopC').style.background='#" + aRalC[s][d] + "';", l += "$.id('divAtopS').innerHTML='RAL " + (1e3 * s + d) + "</div>';f_ral_sCl(" + t + "," + s + "," + d + ')"'), l += ">&nbsp;<br>" + (1e3 * s + d) + "</div>");
            l += "</div>"
        }
        l += "</div>" + v_px10,
        l += '<div id="divAtopC" style="position:absolute; display:none; top:0px; height:390px; left:0; right:0; text-align:center;"><div class="px0" style="height:340px"></div>',
        l += '<span id="divAtopS" style="font-size:30px; color:#3F3A32; letter-spacing:3px; text-shadow:#ffffff 1px 1px 5px;"></span>',
        l += '<div id="divAtopH" class="pb_hidden"></div></div>',
        l += '<div id="divAtopB" style="position:absolute; display:none; bottom:0; height:50px; left:0; right:0; background:#f8f8f8">' + v_px10,
        l += '<input type="button" class="pb_buttons" id="idMsgRalOK" value="Выбрать" style="width:80px;height:30px;"/>',
        l += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" class="pb_buttons" value="Отменить" style="width:80px;height:30px;" onclick="$.id(\'divAtopC\').style.display=\'none\';$.id(\'divAtopB\').style.display=\'none\'"/>',
        f_message('<div class="pb_ah0">Выберите цвет (текущий: RAL ' + (0 == e ? "Базовый" : 1e3 * e + i) + ")</div>", l += "</div>", 350, 460)
    }
}
function f_ral_sGr(t) {
    for (var e = 1; e <= 9; e += 1)
        $.id("id_dral" + e) && ($.id("id_dral" + e).style.display = t == e ? "block" : "none"), $.id("id_bral" + e) && ($.id("id_bral" + e).style.borderColor = t == e ? "#000000" : "transparent")
}
function f_ral_sCl(t, e, i) {
    $.id("idMsgRalOK").onclick = Function("e", "f_ral_sel(" + t + "," + e + "," + i + ");" + aRalSel[3])
}
function f_ral_sel(t, e, i) {
    e = e || 0,
    i = i || 0,
    (t = t || 0) && t == aRalSel[0] && e && ($.wDelete(1, 1), f_tr12(e, i) || (i = e = 0), aRalSel[1] = v_zlist_[5] = e, aRalSel[2] = v_zlist_[6] = i)
}
function f_ral_clr(t) {
    aRalSel[1] = v_zlist_[5] = aRalSel[2] = v_zlist_[6] = 0
}
function f_z_cht(t, e) {
    var i,
    a = v_zlistr,
    l = a.length,
    s = 0,
    d = 3,
    r = 0;
    for (t = t || 0, e = e || 0, i = 1; i < l; i += 1)
        t == a[i][0] ? (r += 1, s += a[i][4] == v_changeRal ? e : a[i][1]) : s += a[i][1];
    return (1 == l || r < v_changeRal) && (s += e),
    60 <= s && s < 200 && (d = 4),
    200 <= s && s < 500 && (d = 5),
    500 <= s && s < 1e3 && (d = 6),
    1e3 <= s && s < 3e3 && (d = 7),
    3e3 <= s && (d = 8),
    p = 0,
    [d, s, v_mtrt[t][d]]
}
function photoGal(t) {
    var e,
    i,
    a,
    l,
    s,
    d,
    r,
    _,
    n,
    o,
    p,
    v,
    c = $.qSA(".pb_gal"),
    f = c.length || 0;
    if (0 < f) {
        for (e = 0; e < f; e += 1)
            if (c[e]) {
                if (n = 0, o = (l = $.qS(".pb_gal_scroll", c[e]) || 0) && parseInt($.gStyle(l, "height"), 10) || 0, s = l && $.qSA(".pb_gal_item", l) || 0, d = l && $.qSA(".pb_gal_item img", l) || 0, !(l && o && s && d))
                    return f_mesErr("Ошибка HTML галереи", "Ошибка HTML галереи<br>" + (l ? "" : ".pb_gal_scroll ") + (s ? "" : ".pb_gal_item ") + (d ? "" : "images ") + " not found", 300, 120), !1;
                if ((a = s.length) != d.length)
                    return f_mesErr("Ошибка HTML галереи", "Ошибка HTML галереи<br>Количество изображений не равно количеству .pb_gal_item", 300, 120), !1;
                for (p = new Array(a), v = new Array(a), r = new Array(a), _ = new Array(a), i = 0; i < a; i += 1)
                    i == a - 1 && (s[i].style.paddingRight = 0), p[i] = s[i].offsetWidth || 0, v[i] = s[i].offsetHeight || 0, r[i] = $.qS("img", s[i]).width, _[i] = $.qS("img", s[i]).height, n += p[i];
                l.style.width = n + 1 + "px",
                a_gal[e] = [0, c[e], l, 0, 0, n, o, p, v, 0, 0, 0, 0, r, _, 0, 0, -1, 0],
                $.EH.add($.qS(".pb_gal_left", c[e]), "click", photoGal_scroll, !1),
                $.EH.add($.qS(".pb_gal_right", c[e]), "click", photoGal_scroll, !1),
                $.EH.add(c[e], "mouseout", photoGal_scroll, !1),
                $.EH.add(l, "mousedown", photoGal_scroll, !1),
                $.EH.add(l, "mouseup", photoGal_scroll, !1),
                $.EH.add(l, "mousemove", photoGal_scroll, !1),
                $.isTOUCH() && ($.EH.add(l, "touchstart", photoGal_scroll, !1), $.EH.add(l, "touchend", photoGal_scroll, !1), $.EH.add(l, "touchmove", photoGal_scroll, !1)),
                $.EH.add(l, "click", photoGal_full),
                $.EH.add($.W, "resize", function (t) {
                    $.qS(".pb_fgal") && setTimeout(function (t) {
                        photoGal_full(t, 1)
                    }, 200)
                })
            }
        for (e = 0; e < f; e += 1)
            photoGal_lr(e)
    } else {
        if ((f = (s = $.qSA(".pb_gal_itm")).length || 0) < 1)
            return !1;
        for (a_fgalItems = new Array(f), c = "", e = 0; e < f; e += 1)
            i = (a = "" + s[e].onclick).indexOf("$.zoomImg(this"), i = (a = (a = a.substr(i)).substr(16)).indexOf("'"), c += '<img id="id_fgal_ism_' + e + '" src="' + (a = (n = a).substr(0, i)) + '" alt=""/>', i = (n = n.substr(i + 1)).indexOf("'"), i = (n = n.substr(i + 1)).indexOf("'"), n = n.substr(0, i), a_fgalItems[e] = ["id_fgal_ism_" + e, a, 0, 0, n], s[e].id = "id_gal_ism_" + e, s[e].onclick = void 0, $.EH.add(s[e], "click", photoGal_full);
        (l = $.D.createElement("div")).style.display = "none",
        l.innerHTML = c,
        $.B.appendChild(l),
        a_gal[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0],
        a_galItems = [-1, 0, 0, 0],
        v_galItem = -1,
        $.EH.add($.W, "resize", function (t) {
            $.qS(".pb_fgal") && setTimeout(function (t) {
                photoGal_full(t, 1)
            }, 200)
        })
    }
}
function photoGal_scroll(t) {
    var e,
    i,
    a,
    s,
    d,
    r = 1,
    _ = null,
    n = a_gal,
    o = (s = photoGal_gItem(t = t || window.event))[0],
    p = s[1];
    s[2];
    (d = s[3]) && (e = 0 - n[o][0], a = $.qS(".pb_gal_scroll", d).offsetWidth, s = e <= (i = d.offsetWidth) ? e : i - 50, d = i <= a - i - e ? i - 50 : a - i - e, "click" == t.type && (r = 0, "pb_gal_left" == p.className && ($.aClear(n[o][18]), n[o][18] = $.animate(n[o][2], 200, 20, [0 - e, _, _, _], [0 - (e - s), _, _, _]), n[o][0] = 0 - (e - s)), "pb_gal_right" == p.className && ($.aClear(n[o][18]), n[o][18] = $.animate(n[o][2], 200, 20, [0 - e, _, _, _], [0 - (e + d), _, _, _]), n[o][0] = 0 - (e + d))), r && (("touchstart" == t.type && 1 == t.targetTouches.length || "mousedown" == t.type) && (n[o][4] = $.gMX(), n[o][9] = 1, n[o][10] = 0, "mousedown" == t.type && $._(24)(t)), ("touchend" == t.type && 1 == t.targetTouches.length || "mouseup" == t.type) && (n[o][4] = n[o][9] = 0), ("touchmove" == t.type && 1 == t.targetTouches.length || "mousemove" == t.type) && 0 != n[o][4] && (l = $.gMX() - n[o][4], 0 != l && (n[o][4] += l, n[o][0] += l, 0 < n[o][0] && (n[o][0] = 0), n[o][0] < i - a && (n[o][0] = i - a), n[o][2].style.left = n[o][0] + "px", n[o][10] += l < 0 ? 0 - l : l, "touchmove" == t.type && $._(24)(t))), "mouseout" != t.type && "touchout" != t.type || (n[o][4] = n[o][9] = 0, n[o][10] = 99), photoGal_lr(o)))
}
function photoGal_gItem(t) {
    var e,
    i,
    a,
    l = -1,
    s = a_gal,
    d = s.length;
    if (!$.qS(".pb_gal"))
        return a_galItems;
    if (t = (i = (t = t || window.event).target).parentNode, "pb_gal_left" != i.className && "pb_gal_right" != i.className || (a = i.parentNode), "pb_gal_item" == i.className && (a = t.parentNode), "pb_gal_item" == t.className && (a = t.parentNode.parentNode), !a)
        return a_galItems = [-1, 0, 0, 0];
    for (e = 0; e < d; e += 1)
        a == s[e][1] && (l = e, e = d);
    return a_galItems = [l, i, t, a]
}
function photoGal_lr(t) {
    var e,
    i,
    a,
    l,
    s = 0,
    d = a_gal,
    r = d.length;
    if (t = t || 0, r < 1)
        return !1;
    if (a = $.qS(".pb_fgal"))
        $.qS(".pb_fgal_left", a).style.display = $.qS(".pb_fgal_lft", a).style.display = 0 == v_galItem ? "none" : "block", $.qS(".pb_fgal_right", a).style.display = $.qS(".pb_fgal_rgt", a).style.display = v_galItem == a_fgal[13].length - 1 ? "none" : "block";
    else {
        if (t < 0 || r - 1 < t)
            return !1;
        for (i = 0; i < r; i += 1) {
            for (l = d[e = t < 0 ? i : t], $.qS(".pb_gal_left", l[1]).style.display = 0 == l[0] ? "none" : "block", a = l[7].length - 1; 0 <= a; --a)
                s += l[7][a];
            $.qS(".pb_gal_right", l[1]).style.display = l[0] < 0 - s + l[1].offsetWidth ? "none" : "block",
            e == t && (i = r)
        }
    }
}
function photoGal_full(t, e) {
    var i,
    a,
    s,
    d,
    r,
    _,
    n,
    o,
    p,
    v,
    c,
    f = "",
    g = a_gal;
    if (e = e || 0, t = t || window.event, $.qS(".pb_gal")) {
        if (i = e ? a_galItems : photoGal_gItem(t), o = (a_galItems = i)[0], d = i[1], r = i[2], !(_ = i[3]))
            return;
        if (("pb_gal_item" == d.className || "pb_gal_item" == r.className) && 0 == g[o][9] && (g[o][10] < 5 || 99 == g[o][10])) {
            if (g[o][10] = 0, $.uEnv(), a = $.gCW(), s = $.gCH(), e || $._(24)(t), !(p = "pb_gal_item" == d.className ? d : "pb_gal_item" == d.parentNode.className ? d.parentNode : 0))
                return;
            for (r = $.qSA(".pb_gal_item", g[o][2]), l = r.length, g[o][17] = e ? v_galItem : -1, i = 0; i < l; i += 1)
                f += '<div class="pb_fgal_item" style="width:' + a + "px;height:" + s + "px;background-image:url('" + $.qS("img", r[i]).src + "')\"></div>", e || p != r[i] || (g[o][17] = i);
            if (g[o][17] < 0)
                return;
            v_galItem = g[o][17],
            e ? r = g[o][16] : (g[o][15] = $.addLayer(0, "#000000", 210, "hidden", 1), (r = $.D.createElement("div")).className = "pb_fgal", r.style.zIndex = 210),
            r.innerHTML = '<div class="pb_fgal_scroll" style="width:' + a * l + "px;left:-" + parseInt(a * v_galItem, 10) + 'px;">' + f + '</div><div class="pb_fgal_left"></div><div class="pb_fgal_right"></div><div class="pb_fgal_lft"></div><div class="pb_fgal_rgt"></div><div class="pb_fgal_close" onclick="photoGal_rest(' + o + ')"></div>',
            e || ($.B.appendChild(r), g[o][16] = r),
            n = $.qS(".pb_fgal_scroll"),
            a_fgal = [0 - parseInt(a * v_galItem, 10), _, n, 0, 0, a * l, 0, 0, 0, 0, 0, 0, 0, JSON.parse(JSON.stringify(g[o][13])), JSON.parse(JSON.stringify(g[o][14])), g[o][15], v_galItem, 0]
        }
    } else {
        for (e || (v_galItem = parseInt(t.target.id.substr(11), 10), g[0][17] = v_galItem), l = a_fgalItems.length, v = new Array(l), c = new Array(l), $.uEnv(), a = $.gCW(), s = $.gCH(), e || $._(24)(t), i = 0; i < l; i += 1)
            f += '<div class="pb_fgal_item" style="width:' + a + "px;height:" + s + "px;background-image:url('" + a_fgalItems[i][1] + '\')"><div class="pb_fgal_text" style="padding-top:10px"><span style="font-size:15px; font-weight:normal; font-style:italic; color:#ffffff; background:rgba(0, 0, 0, 0.5);">&nbsp;' + a_fgalItems[i][4] + "&nbsp;</span></div></div>", a_fgalItems[i][2] = v[i] = $.id(a_fgalItems[i][0]).width, a_fgalItems[i][3] = c[i] = $.id(a_fgalItems[i][0]).height;
        e ? r = g[0][16] : (g[0][15] = $.addLayer(0, "#000000", 210, "hidden", 1), (r = $.D.createElement("div")).className = "pb_fgal", r.style.zIndex = 210),
        r.innerHTML = '<div class="pb_fgal_scroll" style="width:' + a * l + "px;left:-" + parseInt(a * v_galItem, 10) + 'px;">' + f + '</div><div class="pb_fgal_left"></div><div class="pb_fgal_right"></div><div class="pb_fgal_lft"></div><div class="pb_fgal_rgt"></div><div class="pb_fgal_close" onclick="photoGal_rest(0)"></div>',
        e || ($.B.appendChild(r), g[0][16] = r),
        n = $.qS(".pb_fgal_scroll"),
        a_fgal = [0 - parseInt(a * v_galItem, 10), 0, n, 0, 0, a * l, 0, 0, 0, 0, 0, 0, 0, v, c, g[0][15], v_galItem, 0]
    }
    $.EH.add($.qS(".pb_fgal_left"), "click", photoGal_fScroll, !1),
    $.EH.add($.qS(".pb_fgal_right"), "click", photoGal_fScroll, !1),
    $.EH.add($.qS(".pb_fgal_lft"), "click", photoGal_fScroll, !1),
    $.EH.add($.qS(".pb_fgal_rgt"), "click", photoGal_fScroll, !1),
    e || $.EH.add($.qS(".pb_fgal"), "mouseout", photoGal_fScroll, !1),
    $.EH.add(n, "mousedown", photoGal_fScroll, !1),
    $.EH.add(n, "mouseup", photoGal_fScroll, !1),
    $.EH.add(n, "mousemove", photoGal_fScroll, !1),
    $.isTOUCH() && ($.EH.add(n, "touchstart", photoGal_fScroll, !1), $.EH.add(n, "touchend", photoGal_fScroll, !1), $.EH.add(n, "touchmove", photoGal_fScroll, !1)),
    photoGal_lr(-1)
}
function photoGal_rest(t) {
    (t = t || 0) < 0 || !a_gal[t] || ($.removeLayer(a_gal[t][15]), a_gal[t][16].parentNode.removeChild(a_gal[t][16]))
}
function photoGal_fScroll(t) {
    var e,
    i,
    a,
    l,
    s,
    d = a_fgal;
    if (t = t || window.event, !(a = $.qS(".pb_fgal_scroll")))
        return !1;
    i = $.gCW(),
    h = $.gCH(),
    a = a.offsetWidth,
    e = d[0],
    s = d[13].length - 1,
    l = t.target.className,
    "click" != t.type || "pb_fgal_left" != l && "pb_fgal_right" != l && "pb_fgal_lft" != l && "pb_fgal_rgt" != l || ("pb_fgal_left" == l && 0 < v_galItem && (v_galItem = d[17] = v_galItem - 1), "pb_fgal_right" == l && v_galItem < s && (v_galItem = d[17] = v_galItem + 1), "pb_fgal_lft" == l && 0 < v_galItem && (v_galItem = d[17] = 0), "pb_fgal_rgt" == l && v_galItem < s && (v_galItem = d[17] = s), photoGal_fScroll_a(i, e, d)),
    ("touchstart" == t.type && 1 == t.targetTouches.length || "mousedown" == t.type) && (d[4] = $.gMX(), d[10] = 0, "mousedown" == t.type && $._(24)(t)),
    ("touchmove" == t.type && 1 == t.targetTouches.length || "mousemove" == t.type) && 0 != d[4] && 0 != (l = $.gMX() - d[4]) && (d[4] += l, d[0] += l, 0 < d[0] && (d[0] = 0), d[0] < i - a && (d[0] = i - a), d[2].style.left = d[0] + "px", d[10] += l, "touchmove" == t.type && $._(24)(t)),
    "touchend" != t.type && "mouseup" != t.type && "mouseout" != t.type && "touchout" != t.type || (d[4] = 0, d[10] < -99 && (v_galItem += 1), 99 < d[10] && --v_galItem, v_galItem < 0 && (v_galItem = 0), s < v_galItem && (v_galItem = s), d[17] = v_galItem, d[10] = 0, photoGal_fScroll_a(i, e, d)),
    photoGal_lr(-1)
}
function photoGal_fScroll_a(t, e, i) {
    var a = null;
    i[0] = 0 - parseInt(t * v_galItem, 10),
    e != i[0] && ($.aClear(i[18]), i[18] = $.animate(i[2], 200, 20, [e, a, a, a], [i[0], a, a, a]))
}
