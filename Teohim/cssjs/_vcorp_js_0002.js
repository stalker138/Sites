/*
Vcorp_JS free JavaScript library
version vcorp_js_00_80
Copyright (c) 2016 - all rights belong to the owner www.vcorp.ru (2016)
All rights reserved.

Redistribution and use with or without modification, 
are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this 
list of conditions and the following disclaimer.

The name of the owner of the site "www.vcorp.ru" can not be used to endorse or promote products 
derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE FOR 
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL 
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR 
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER 
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT 
LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY 
OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/* var myProp = */(function (wProp) {

	var $version='vcorp_js_00_80', $w=this, $u = undefined, $n = null, $m='number', $t = true, $f = false, $ua, $os, $s='string', $lST=$w['localStorage']?$w.localStorage:0,
	$d = document, $dE=$d.documentElement, $dB, $b, $h='function', $md=' onmousedown', $ts=' ontouchstart', vRAM=f46(99), $ = typeof(wProp) === $s ? wProp : 'VcorpJS',
	bIE=0, b18=0, b12=0, bFF=0, bSF=0, bCH=0, bOTH=0, brws, pTCH=0, pORN, $D=0,
	pMX, pMY, pAW, pAH, pCW, pCH, pPW, pPH, pST, pSL,
	pEV, pQH, pXHR, rAF, $rAF, v00, v24, va7, v08=0, va8=f46(10), va10=f46(10), va1=f46(100), v01=0, v06=0, v07=0,
	v02=0,v_aa=f46(100),v_ai=f46(100),v_ao=f46(100),v_at=f46(100),v_as=f46(100),v_af=f46(100), /* animation */
	v03=0, v04=0, v05, v10=0, va2=f04(), va3=f46(10), va4=f46(10), va5=f46(10), va6=[], va14,
	v_wpo, pPM=0, v_wp=[[$n,$n]], v_w=f46(50), va9=[0,0,0,0,0,0], v_max=10, hWC, hCC, v25, v26, v27, v28, v29={t:100,s:20,p:'e,desc,obj_parent,id_combobox,id_img,id_select,id_input,arrayValues,inputValue,typeEvent'},
	v31=['input','button','select','textarea','a','iframe'], v11,
	vMR1=['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], vDR=['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
	vMR2=['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'], vMES=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
	vMEN=['January','February','March','April','May','June','July','August','September','October','November','December'], vDE=['Su','Mo','Tu','We','Th','Fr','Sa'],

/* ***************************************************************************************
	У С Т А Н О В К А   И   У Д А Л Е Н И Е   О Б Р А Б О Т Ч И К О В  С О Б Ы Т И Й
**************************************************************************************** */
/*
	pEV.add(elem, type, handler)
	pEV.remove(elem, type, handler)
*/
pEV = (function() {
var n = 0;
function fE(e) {
	e = e || $w.event; if (e.isFixed) return e; e.isFixed = $t;
/*	e.preventDefault = e.preventDefault || function(){this.returnValue = false}; */
/*	e.stopPropagation = e.stopPropagation || function(){this.cancelBubble = true}; */
	if (!e.target) e.target = e.srcElement;
	if (!e.relatedTarget && e.fromElement) { e.relatedTarget = e.fromElement == e.target ? e.toElement : e.fromElement; }
	fmXY(e); if (!e.which && e.button) { e.which = (e.button & 1 ? 1 : ( e.button & 2 ? 3 : ( e.button & 4 ? 2 : 0 ) )); }
	return e;
}  
/* Вызывается в контексте элемента всегда this = element */
function cH(e) {
	var h; e = fE(e); h = this.pb_EVo[e.type];
	for ( var g in h ) { if ( h[g].call(this,e)===$f ) f24(e); if (e.stopNow) break; }
}
return {
	add: function(l,t,h) {
		l=fId(l); h=f60(h); if (!l||!h) return; if (l.setInterval && ( l!=$w && !l.frameElement ) ) l = $w;
		if (!h.pb_EVn) h.pb_EVn = ++n;
		if (!l.pb_EVo) { l.pb_EVo = {}; l.pb_EVh = function(e) { /*try {*/ if (typeof pEV !== "undefined") return cH.call(l,e) /*} catch (e) {}*/ } }
		if (!l.pb_EVo[t]) { l.pb_EVo[t] = {}; if (l.addEventListener) l.addEventListener(t, l.pb_EVh, $f); else if (l.attachEvent) l.attachEvent("on" + t, l.pb_EVh); }
		l.pb_EVo[t][h.pb_EVn] = h; return $t;
	},
	remove: function(l,t,hl) {
		var h; l=fId(l); if (!l||!hl||typeof hl!=$h) return $f;
		h = l.pb_EVo && l.pb_EVo[t]; if (!h) return;
		delete h[hl.pb_EVn]; for(var a in h) return;
		if (l.removeEventListener) l.removeEventListener(t, l.pb_EVh, $f); else if (l.detachEvent) l.detachEvent("on" + t, l.pb_EVh);
		delete l.pb_EVo[t]; for(var a in l.pb_EVo) return;
		try { delete l.pb_EVh; delete l.pb_EVo; } catch(e) { l.removeAttribute("pb_EVh"); l.removeAttribute("pb_EVo"); }
		return $t;
	}
}
}());

/* Установка переменных идентификации браузера */
(function () {
var i, w=$w, u=f82(navigator.userAgent), m='msie ', t='edge/', o='opera', f='firefox', s='safari', c='chrome', b='other', e=0; if ($dB) return;
if (u.indexOf("msie") != -1 && u.indexOf(o) == -1) { e=1; b='ie'; for (i=4;i<30;i+=1){if (u.indexOf(m+i)!=-1)e=i} b18=(e>0&&e<9)?e:0; }
if (e==0) { i=u.indexOf("trident/");if(i>0){u=u.substr(i+8);i=u.indexOf('rv:');if(i>=0)e=11;b='ie';} i=u.indexOf(t);if(i>0){b=t.substr(0,4);u=u.substr(i+5);i=u.indexOf('.');e=i>0?f71(u):14; } }
if (u.indexOf(o) != -1 && u.indexOf('presto') != -1) { b12=1; b=o; }
if (u.indexOf("mozilla") != -1 && u.indexOf(f) != -1) { bFF=1; b=f; }
if (u.indexOf(s) != -1) { bSF=1; b=s; }
if (u.indexOf(c) != -1) { bSF=0; bCH=1; b=c; }
if (b=='other') bOTH=1; brws=b; bIE=e;
$b=bIE?1:0; $ua=u; $os=f82(navigator.platform);if(typeof($w.ontouchstart)=='object')pTCH=1;
/* Функция $w.requestAnimationFrame() */
u=['moz','webkit','ms','o']; m='AnimationFrame';
for( i=0; i<4 && !w.requestAnimationFrame; i+=1) { w.requestAnimationFrame = w[u[i]+'Request'+m]; w.cancelAnimationFrame = w[u[i]+'Cancel'+m] || w[u[i]+'CancelRequest'+m]; }
if (w.requestAnimationFrame) $rAF=1; else {try{delete w.requestAnimationFrame; delete w.cancelAnimationFrame;}catch(e){} }
}());

/* Функция применения анимационных изменений, вызывается из ;$w.equestAnimationFrame() */
function fRAF(t) {
	var i; v00=0; if(v05){f09();v05=0;} for (i=1; i<50; i+=1) { if(vRAM[i]) {vRAM[i]();vRAM[i]=0; /*if(i>_max){_max=i;fId('id_out').innerHTML=_max;}*/ } }
	if(t>0 && $rAF) $w.requestAnimationFrame(fRAF);
}

if(typeof($w.onorientationchange)=='object') { pORN=$w.orientation; pEV.add($w,'orientationchange', function(e){pORN=$w.orientation;f53(e||$w.event);setTimeout(f53,100)}) }

/* Инициализация по событию DomContentLoaded или load */
fready(function(){if(typeof vcorpJS_onload==$h)vcorpJS_onload($version)});

/* Begin local functions */

/*
 инициализация библиотеки по событиям DOMContentLoaded или load
 h - handler вызываемой функции (если строка, то создаётся новая функция с содержимым строки), никаких параметров при вызове не передаётся. Контекст window
*/
function fready(h) {
if($dB)return $f; h=f60(h); if(!h) return $f;
if (b18) {
	if ($dE.doScroll && $w == $w.top) { function t(){ if(!$d.body){setTimeout(t,100);return} try {$dE.doScroll("left");f48();h.call($n);} catch(e){setTimeout(t,100)} } t(); }
} else { pEV.add($d,'DOMContentLoaded',function(){f48();h.call($n);}); } return $t;
}

function f48() { /* initialization */
var i, j, p, pw, v='visible', w='pb__win_panel', c='" class="pb_win_panel', b='" style="overflow:hidden;', n=$n;
if ($dB)return; $w[$].B=$dB=fqS('body')||$d.body;
for	(i=0; i<100; i+=1) { v_ai[i]=n; v_ao[i]=n; v_at[i]=n; v_as[i]=n; v_af[i]=n; } /* Инициализация системы анимации */
for	(i=0; i<10; i+=1) { va6[i]=[n,n,n,n,n,n,n,n]; va8[i]=[n]; } /* Инициализация системы всплывающих изображений (va6) Инициализация Блоков ротации (va8) */
f53(); /* fSetCheckeds(); fcbUpdate();*/ f63(); fSetMenu(140,20);
/* Инициализация оконной системы */
if (!fId(w)) { p=f49(0,0,'0','0',0,0,v); j='"'+$+'._(48)(event,\''+w+'\')"'; p.innerHTML='<div id="'+w+c+b+'z-index:100;padding:0;margin:0;"'+$md+'='+j+$ts+'='+j+'></div>'; }
j=v_wpo=fId(w); p=fGSs(j); pw=va9; pw[0]=f71(p.gS("width"))||410; pw[1]=f71(p.gS("height"))||30; p=f49(0,j,'0','0',0,0,v); p.innerHTML='<div id="'+w+'_elem_0'+c+'_elem'+b+'position:absolute;left:0;top:0;"></div>';
i=fGSs(fId(w+'_elem_0')); pw[2]=f71(i.gS("width"))||100; pw[3]=f71(i.gS("height"))||26; pw[4]=pw[2]; pw[5]=pw[3];
f49(p,j); for (i=0;i<50;i+=1) v_w[i]=n; fWSet(0,30,pSL+f71(pCW/2-250),pST+f71(pCH/2-150),500,300,0,(b18?0:1));
pEV.add($d,'keydown',f77); pXHR=fCreateXmlHttp()||n; if (/* pTCH && */ $rAF) { rAF=1; fRAF(1); }
pEV.add($w,'resize',f79); pEV.add($w,'scroll',f79);
}

/*
	fAddEH(e,h,a[,ph])
	Установка обработчика события для списка элементов
	e - текстовое наименование события (без on) - click, mousemove и т.д.
	h - функция (указатель на функцию). Если строка, то создаётся новая функция с содержимым строки.
	a - массив ссылок на элементы или текстовых наименований id элементов
	Возвращает количество установленных обработчиков (от 0)
*/
function fAddEH(e,h,a) {
	var i,l,f=0;
	if (!e || !h || typeof e!=$s || !fisA(a)) return 0; e=f82(e); l=a.length; h=f60(h); if(!h) return 0;
	for(i=0; i<l; i+=1)if(pEV.add(a[i],e,h))f+=1; return f;
}
function fRemoveEH(e,h,a) {
	var i,l,f=0;
	if (!e || typeof h!=$h || typeof e!=$s || !fisA(a)) return 0; e=f82(e); l=a.length;
	for(i=0; i<l; i+=1)if(pEV.remove(a[i],e,h))f+=1; return f;
}

/* Подгружает динамично js-файлы, s - URL, h - handler(функция), вызываемая при загрузке скрипта (если строка, то создаётся новая функция с содержимым строки). */
function fLoadJs(s, h) {
	var p; if (!s || typeof s!=$s) return $f; p=$d.createElement('script'); p.type='text/javascript'; p.src=s;
	h=f60(h); if(h) p.onload = h; s=fqSA('script')[0]; s.parentNode.insertBefore(p,s); return $t;
}

/*
Динамическое добавление CSS-стилей и тега style без внешнего файла CSS.
В строке s - аналог содержимого CSS-файла, d (id) - идентификатор существующего тега для его перезаписи (будет удалён старый и создан новый). id может иметь тип number или string
Пример вызова: fAddCss('.my_link:hover { color:#dddddd; text-decoration:none; }'[, id]);
Возвращает ID (тип number или тот, что передавался) нового тега style для возможной передачи в функцию fRemoveCss(id).
Возвращает false если s не строка или пустая строка, никаких действий при этом не поисходит.
Параметр g - только для внутренних нужд (модификатор id тегов стилей для Гридов)
*/
function fAddCss(s, d, g) {
var p, i; g=g||'';
if (s && typeof s==$s && s.length>0) {
	if (d) fRemoveCss(d); p=$d.createElement('style'); p.setAttribute("type","text/css");
	if (!d) d = f72(Math.random()*9000000); p.id = 'pb_'+g+'style_tag_'+d;
	if (p.styleSheet) p.styleSheet.cssText=s; else { s=$d.createTextNode(s); p.appendChild(s); }
	fqSA('head')[0].appendChild(p); return d;
} return $f;
}

/*
Удаление CSS-стилей по ID (удаление тега style) и возврат true или false в случае, если тег не найден
Если параметр id отсутствует, то удаляются все теги style, установленные ранее через функцию fAddCss(s[,id]) и возврат true.
id может иметь тип number или string
Параметр g - только для внутренних нужд (модификатор id тегов стилей для Гридов)
*/
function fRemoveCss(d, g) {
	var p,a,i; g=g||''; s='pb_'+g+'style_tag_'; if (d) { p = fId(s+d); if (p) { p.parentNode.removeChild(p); return $t; } }
	else { a = fqSA('style') || 0; if (a) { for (i=a.length-1; a>=0; a-=1) { if (a[i].id.substr(0,13+g.length)==s) a[i].parentNode.removeChild(a[i]); } return $t; } }
	return $f;
}

/* Изменение стилей для всех элементов с указанным диапазоном поиска элементов
 Если s - string, то добавляет имя класса (в .className) всем найденным объектам
 n (node):		где искать (если не указан, то по всему документу)
 s (selector):	что искать (текстовый селектор). Если не указан, то изменения только для текущего объекта n
 o (newclass):	текстовая строка с именем добавляемого класса (без точки!) ИЛИ объект с именами свойств и их значениями
 d (oldclass):	текстовая строка с именем удаляемого класса (без точки!)
 Примеры:
 fChangeSC('myID','.myclass','newclass','oldclass');
 fChangeSC('myID','.myclass div',{color: 'red', display: 'block', filter: 'alpha(opacity=50)', opacity: '0.5'});
*/
function fChangeSC(n,s,o,d) {
	var i,p,r; o=o||''; s=s||''; if(s){s=fqSA(s,n);if(!s)return;}else {n=fId(n);if(!n)return;s=[n]} d=d||''; if(typeof d!=$s)d=''; d=fTrim(d); if(d) r=new RegExp('(\\s|^)'+d+'(\\s|$)');
	if ((typeof o=='object')) { for (i=s.length-1; i>=0; i-=1) { { p = s[i].style; for(var j in o) { p[j] = o[j]; } } } o=''; } if(typeof o!=$s)o=''; o=fTrim(o);
	if (d||o) {
		for (i=s.length-1; i>=0; i-=1) {
			p=fTrim(s[i].className||'');
			if (d && ((' '+p+' ').indexOf(' '+d+' ')>=0)) p=p.replace(r,' ').replace(' '+' ',' ');
			if (o && ((' '+p+' ').indexOf(' '+o+' ')<0)) p+=' '+o;
			if(d||o)s[i].className=fTrim(p);
		}
	}
}

/* Получение объекта с функцией получения стилей по наименованию как в CSS (через тире) или в JS */
function fGSs(e) { e=fId(e); if (!e) return $f; $w[$].gS = function(p) { return p?fGS(e,p):$f; }; return $w[$]; }
/* Получение стиля объекта по наименованию как в CSS (через тире) или в JS */
function fGS(e,p) {
	var r,n,s,i,h='',x='0123456789abcdef'; e=fId(e); if (!e || !p || typeof p!=$s) return $f;
	r=p.indexOf("-"); if (r !=-1) p=f82(p);
	if (b18 && p=='opacity') { r=e.filters.alpha?(e.filters.alpha.opacity/100):1; } else {
		if (!$w.getComputedStyle) {
			if (p == 'float') p = b12?'cssFloat':'styleFloat';
			r = /(\-([a-z]){1})/g; if (r.test(p)) { p = p.replace(r, function () { return arguments[2].toUpperCase(); }); }
			r = e.currentStyle[p] ? e.currentStyle[p] : $n;
		} else {
			if (p.match(/[A-Z]/)) p = f82(p.replace(/([A-Z])/g, "-$1")); r = $d.defaultView.getComputedStyle(e, "").getPropertyValue(p);
		} if (r=='auto') {
			r=0; if (p=='top') r=e.offsetTop+'px'; if (p=='left') r=e.offsetLeft+'px';
			if (p=='height') { n=e.offsetHeight; s=e.scrollHeight; r=((n>s)?n:s)+'px'; }
			if (p=='width') { n=e.offsetWidth; s=e.scrollWidth; r=((n>s)?n:s)+'px'; }
		} p=f82(p);
		if (p.indexOf("color") != -1) {
			r=f82(r);
			if (r.indexOf('rgb(') != -1) { s=r.substr(4); s=s.split(','); for (i=0; i<3; i+=1) { n=f71(s[i]); h+=x.charAt(n>>4)+x.charAt(n&15); } r='#'+h; }
			if (r.length==4) { i=r.substr(1,1); n=r.substr(2,1); x=r.substr(3,1); r='#'+i+i+n+n+x+x; }
		}
	} return r;
}

/* Получение {left,top} координат левого верхнего угла любого элемента относительно начала документа */
function fGetOffset(e) {
	var p,l,t,b=$dB,d=$dE; e=fId(e); if (!e) return $f; p=e.getBoundingClientRect();
	l=p.left+($w.pageXOffset||d.scrollLeft||b.scrollLeft)-(d.clientLef||b.clientLef||0);
	t=p.top+($w.pageYOffset||d.scrollTop||b.scrollTop)-(d.clientTop||b.clientTop||0);
	return {left:l,top:t};
}

/*
 Смена opacity элемента
	Устанавливает прозрачность элемента
	e - объект или наименование его id
	o - opacity (от 0 до 1)
 Возвращает true, если удачно, false в случае неправильного id или o
*/
function fSetOpacity(e,o) { e=fId(e); if (!e) return $f; if (o==0)o=0; else o=o||1; o=f72(o*100); if (o>100)o=100; f14(e,o); return $t; }

/*
 Поиск элементов с классами pb_checked_true и pb_checked_false, и если нет свойства .checked, установка и навешивание обработчика смены класса по клику
 Можно вызывать несколько раз - если свойство .checked уже имеет тип boolean (было установлено), то ничего не происходит.
 Автоматически Вызывается при инициализации.
 Передаётся handler если надо вызвать собственную функцию (если строка, то создаётся новая функция с содержимым строки).
   Если при предыдущем вызове(вызовах) handler передавался, то он меняется на указанный новый (перезаписывается новым в v24).
   Вызов функции как handler(event); this при вызове указывает на объект клика (с уже изменённым свойством .checked : true || false и классом pb_checked_true или pb_checked_false)
*/
function fSetCheckeds(h,o,s) {
var j,i,p,a=['true','false']; o=fId(o)||$d; s=s||''; h=f60(h); if(h)v24=h;
for (j=0; j<2; j+=1){
	p=fqSA(s+'.pb_checked_'+a[j],o); for(i=p.length-1; i>=0; i-=1) { if(typeof(p[i].checked)!='boolean') { p[i].checked=(j==0)?$t:$f; pEV.add(p[i],'click',function(e){f54(e||$w.event,this)}); } }
}} function f54(e,n) { var s='pb_checked_', t=s+'true', f=s+'false', c=n.checked; n.checked=c?$f:$t; fChangeSC(n,'',c?f:t,c?t:f); if(typeof v24==$h)v24.call(n,e); }

/*
 Перечитывает текущие значения и устанавливает следующие переменные:
 pAW, pAH, pCW, pCH, pPW, pPH, pST, pSL, pMX, pMY
*/
function f53(e){
var ow, oh, sw, sh, d=$dB, de=$dE;
if (typeof e=="object") { e = e || $w.event; fmXY(e); } if(rAF && v00) return; v00=1; /* Оптимизация (см. fRAF() )*/
pAW=screen.availWidth; pAH=screen.availHeight; /* Размеры максимально - доступной области экрана монитора в пикселях */
/* Размеры клиентской части окна браузера */
pCW=($w.innerWidth||de.clientWidth||d.offsetWidth); pCH=($w.innerHeight||de.clientHeight||d.offsetHeight);
/* Сдвиг видимой части документа относительно левого верхнего угла документа */
pSL = $w.pageXOffset || de.scrollLeft || d.scrollLeft; pST = $w.pageYOffset || de.scrollTop || d.scrollTop;
if (b12 || bFF) { ow=de.offsetWidth; oh=de.offsetHeight; } else { ow=d.offsetWidth; oh=d.offsetHeight; }
if (bCH || bSF) { sw=d.scrollWidth; sh=d.scrollHeight; } else { sw=de.scrollWidth; sh=de.scrollHeight; }
pPW=(sw>ow)?sw:ow; pPH=(sh>oh)?sh:oh; if (pMX>(pSL+pCW-20)) pMX=pSL+pCW-20; if (pMY>pST+pCH-20) pMY=pST+pCH-20;
}

/*  Координаты мыши относительно верхнего левого угла документа	pMX, pMY */
function fmXY(e) {
var t, hx, hy, x='-', y='-', h=$dE, b=$dB; e =  e || $w.event;
hx = ((h && h.scrollLeft) || (b && b.scrollLeft) || 0) - (h.clientLeft || 0);
hy = ((h && h.scrollTop) || (b && b.scrollTop) || 0) - (h.clientTop || 0);
if (e.type.substr(0,5)=='touch') { if (e.targetTouches.length == 1) { t = e.targetTouches[0]; x=t.pageX; y=t.pageY; } } /* координаты касания пальца [0] */
else { if ( e.pageX == $n && e.clientX != $n ) { e.pageX = x = e.clientX + hx; e.pageY = y = e.clientY + hy; } else { x = e.pageX; y = e.pageY; } }
if (x!='-'&&y!='-') { if (x<0) x=0; if (y<0) y=0; pMX=x; pMY=y; }
}

/* 
Работа с cockies (значения name и value являются обязательными, а остальные не обязательны).
name (n)	название cookie
value (v)	значение cookie (строка)
props (p)	Объект с дополнительными свойствами для установки cookie:
		expires	Время истечения cookie. Интерпретируется по-разному, в зависимости от типа:
 				Если число - количество секунд до истечения.
 				Если объект типа Date - точная дата истечения.
 				Если expires в прошлом, то cookie будет удалено.
 				Если expires отсутствует или равно 0, то cookie будет установлено как сессионное и исчезнет при закрытии браузера.
 		path	Путь для cookie.
 		domain	Домен для cookie.
 		secure	Пересылать cookie только по защищенному соединению.

 		Пример: поставить куку на 120 секунд	setCookie("name", "123", { expires: 120} )
 		Пример: получить значение : getCookie("name")
*/

/* возвращает cookie если есть или undefined */
function fGetCookie(n) { var m = $d.cookie.match(new RegExp("(?:^|; )" + n.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)")); return m ? decodeURIComponent(m[1]) : $f; }
/* уcтанавливает cookie */
function fSetCookie(n, v, p) {
	var e,d,u; p = p || {}; e=p.expires; if (typeof e==$m && e) { d=new Date(); d.setTime(d.getTime()+e*1000); e=p.expires=d; }
	if(e && e.toUTCString) { p.expires=e.toUTCString(); }
	v = encodeURIComponent(v); u = n + "=" + v; for(var pN in p){ u+=";"+" "+pN; var pV = p[pN]; if(pV!==$t) { u+="="+pV; } }
	$d.cookie=u;
}
/* удаляет cookie */
function fDeleteCookie(n,p,d) { p=p||'/', o=d?{expires:-1,path:p,domain:d}:{expires:-1,path:p}; fSetCookie(n, $n, o); }

/* ***************************************************************************************
	С Л О И   (добавление и удаление фонового DIV с указанными параметрами)
**************************************************************************************** */
/*
	Создание/удаление фонового DIV p и прикрепление/удаление его к/из n или body
	p - если не указан, то создание нового дива, иначе удаление. object
	n - handler на родительский объект (по умолчанию body - $dB) object
	w,h - размеры, если оба ненулевые, то установка, иначе заполнение всего пространства (слой) string
	b - background (если указан) string или 0
	z - zIndex (если указан) number
	v - overflow (если указан) string или 0
	o - opacity (если указан и number) - от 0 до 100!!! - внутренний формат
	sp - position (по умолчанию absolute)
*/
function f49(p,n,w,h,b,z,v,o,sp){
var s; if(p){try{if(n)n.removeChild(p); else $dB.removeChild(p); p=$n} catch(e) {return $f} return $t} p=$d.createElement('div'); s=p.style; s.position=sp?sp:'absolute'; s.display='block'; s.left='0'; s.top='0';
if(w&&h) {s.width=w;s.height=h} else { p.className='pb_lfull'; s.right='0'; s.bottom='0'; if(!n) { s.minHeight=pPH+'px'; s.minWidth=pPW+'px'; } }
if(b)s.background=b; if(v)s.overflow=v; if(z)s.zIndex=z; if(typeof o==$m)f14(p,o); if(n)n.appendChild(p); else $dB.appendChild(p); return p;
}

/*
Добавить слой fAddL(h,b,z,v,o) - любой или все параметры могут остутствовать
h - handler на родительский объект (по умолчанию body - $dB)
b - background (если указан) string или 0
z - zIndex (если указан) number
v - overflow (если указан) string или 0
o - opacity  (если указан и number) от 0 до 1 кроссбраузерно
Создаёт объект DIV-элемент и прикрепляет его к body или указанному h объекту
Размеры максимальные - слой полностью над элементом (или body) независимо от будущих изменений размеров родителя. position:absolute
Возвращает ссылку(handler) на созданный слой (объект DIV-элемент) или false если не удалось создать слой.
*/
function fAddL(h,b,z,v,o){o=(typeof o==$m && o>=0 && o<=1)?f72(o*100):''; h=fId(h); try{f53();return f49(0,h,0,0,b,z,v,o)}catch(e){return $f}}
/*
Удалить слой fRemoveL(h[,p])
h - handler на слой (объект DIV-элемент)
p - handler на родительский объект (по умолчанию body - $dB) - может остутствовать
Возвращает true при успешном удалении, иначе false (также если h не указывает на объект)
*/
function fRemoveL(h,p){h=fId(h);p=fId(p);return(h)?f49(h,p):$f}

/* ***************************************************************************************
	AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX
**************************************************************************************** */
function fCreateXmlHttp() {
	var i,v,x,a='MSXML2.',b='XMLHTTP';
	try	{ x=new XMLHttpRequest(); } catch (e) {
		v=new Array(a+b+'.6.0',a+b+'.5.0',a+b+'.4.0',a+b+'.3.0',a+b,'Microsoft.'+b); a=v.length;
		for (i=0; i<a && !x; i+=1) { try { x=new ActiveXObject(v[i]); } catch (e) {} }
	} return (!x)?$f:x;
}

/* POST - запрос на сервер
url (u) :		имя скрипта сервера
mode (m) :		Content-Type :	если 'mfd' - multipart/form-data, иначе application/x-www-form-urlencoded (применяется encodeURIComponent(params[значение]) )
params (a) :	"Массив" строк : имя1, значение1, имя2, значение2, и т.д.
xhr object (x) : Если не указан, то pXHR, иначе указанный.
handler (h) : callback-функция для xhr.onreadystatechange (вызывается как function(url), при этом this указывает на xhr), вызывается при readyState==4
*/
function fPostHttp(u,m,a,x,h,z) {
	var i,p='',n=$n,r,b,rn,f=x?9:pQH; x=x||(z?pXHR:0);
	u = u || n; m = m || n; a = a || n;
	if	(x && (f==0||f==9) && u!=n && m!=n && a!=n) {
		try {
			if(f==0)pQH=1; x.open('POST',u,$t);
			if	(m!='mfd') {
				x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				for (i=0; i<a.length; i+=2) { if (i>0) p+='&'; p+=a[i]+'='+encodeURIComponent(a[i+1]); }
			} if (m=='mfd') {
				r=f72(Math.random()*9000000); b=r.toString();
				x.setRequestHeader('Content-Type', 'multipart/form-data;boundary='+b);
				r='--'+b+'\r\n'+'Content-Disposition:form-data;name="'; rn='"\r\n\r\n';
				for (i=0; i<a.length; i+=2) { p+=r+a[i]+rn+a[i+1]+'\r\n'; }
				p+='--'+b+'--\r\n'; p='Content-Length:'+p.length+'\r\n\r\n'+p;
			} h=f60(h,'url'); if(h)x.onreadystatechange = function(){if(x.readyState==4)h.call(x,u)};
			x.send(p); return $t;
		} catch (e) { if(f==0)pQH=0; return $f; }
	} else return $f;
}

/* ***************************************************************************************
	Р О Т А Ц И Я   Б Л О К А   И З О Б Р А Ж Е Н И Й
**************************************************************************************** */
/*
	v08 :	Количество блоков ротации (от 0 до 9)
	va8 :	массив (0-9) масивов для значений каждого блока ротации (всего до 9 блоков ротации)
	va10 :	массив (0-9) ссылок на масивы для URL изображений для блока ротации

	e :		ссылка на объект div или текстовое наименование id
	t :		время в миллисекундах между ротациями блока
	s :		время в миллисекундах ротации одного изображения
	a :		массив параметров:
		0 :	url папки с фото на сервере (например "/images/photo/" или "/images/photo" или "images/photo")
		1 :	тип файла - текст с точкой или без точки (например,"jpg" или ".png")
		2 :	количество фотографий
		3 :	количество фотографий в блоке ротации (тегов <img>)
		4 :	width каждого изображения
		5 :	height каждого изображения
		6 :	отступ между изображениями
					margin-left для каждого изображения (если горизонтальный блок) - по умолчанию
					margin-top для каждого изображения (если вертикальный блок)
		7 :	shufftle
					Если не указано, то случайный выбор следующего изображения из диапазона 1-[4] (по умолчанию)
					Если указано, то последовательный вывод 1,2,3...[4]
		8 :	тип ротации
					Если не указано, то смена - сначала растворение, потом появление нового изображения (просвечивает фон) - по умолчанию
					Если указано, то растворение с одновременным появлением нового изображения

		9 :	horizontal	Если height>width, то вертикальный блок, иначе горизонтальный (по умолчанию)
		10 :	Ссылка на объект (div-блок)
		11 :	время в миллисекундах между ротациями блока
		12 :	время в миллисекундах ротации одного изображения
		13 :	Шаг смены opacity в миллисекундах (от 20 мс)
		14 :	Шаг смены opacity
		15 :	Текущее значение opacity (0-100)
		16 :	текстовое id созданного div-элемента
		17 :	Текущее номер изображения (1-[2]) - для последовательного вывода!!!
		18 :	Порядковый номер (1-9) блока ротации
		19 :	Массив с номерами используемых изображений
		20 :	для SetInterval
	m :		массив строк - URL изображений - длина этого массива должна быть a[2] Изображения относительные, если начинаются не с "http://"
*/
function fRotateBlock(e,t,s,a,m) {
	var	u,i,j,l,p,d,w,h,r,g,z='http://',y='https://'; t=t||1000; s=s||1000; if(t<100)t=100; if(s<200)s=200; if(!a||a.length<6) return $f; l=a.length;
	e=fId(e); if (!e||!e.id||v08>8||a[2]<f72(a[3]*2)) return $f; if(m&&m.length!=a[2])return $f;
	v08++; m=m?m:$n; va10[v08]=m; p=va8[v08]; for(i=0; i<9; i+=1) { if(i<7)p[i]=a[i]; else p[i]=(i<l&&a[i])?1:0; }
	l=p[0].length; if(p[0].substr(l-1)!='/')p[0]+='/'; if(p[1].substr(0,1)!='.')p[1]='.'+p[1]; if(p[7]==0) { l=p[2]/p[3]; if(l<3) p[7]=1; }
	p[10]=e; p[11]=t; p[12]=s; j=f72(s/20); if(j<20)j=20; if(b18)j+=j; p[13]=j; p[14]=0-f72((p[8]?100:200)/(s/j)); p[15]=100; p[16]=e.id; r=' class="pb_irotation" id="'+p[16]+'_rbi'; g='" style="width:'+p[4]+'px;height:'+p[5]+'px;';
	p[9]=(f71(h)>f71(w))?1:0; p[19]=[0,0]; u=p[19]; l=p[3]*2; t=p[2];
	if(p[7]==0) {
		for(i=1; i<=l; i+=1) { h=0; while(h<10) { w=f71(Math.random()*t)+1; if(w>t)w=t; h+=1; s=1; for(j=1;j<i;j+=1) { if(w==u[j]){s=0;break} } if(s) break; } u[i]=w; }
	} else {for(i=1;i<=l;i+=1)u[i]=i;p[17]=l+1;if(p[17]>t)p[17]=1}
	w=''; l=p[3]; p[19]=u; h=(p[6]>0)?('margin-'+(p[9]?'top:':'left:')+p[6]+'px;'):'';
	for(i=1; i<=l; i+=1) {
		if (m) { t=m[u[i]-1]; if(t.substr(0,7)!==z && t.substr(0,8)!==y)t=p[0]+t; s=m[u[i+l]-1]; if(s.substr(0,7)!==z && s.substr(0,8)!==y)s=p[0]+s; } else { t=p[0]+u[i]+p[1]; s=p[0]+u[i+l]+p[1]; }
		if (p[8]) w+='<div'+r+'h'+i+g+'position:relative;float:left;'+((i==1)?'':h)+((p[8])?('background:url('+s+');'):'')+'">';
		else w+='<img class="pb_hidden" id="'+p[16]+'_rbih'+i+'" src="'+s+'"/>';
		w+='<img'+r+i+'" src="'+t+g+((p[8])?'"/></div>':(((i==1)?'':h)+'"/>'));
	}
	d=f49($n,e,fGS(e,'width'),fGS(e,'height'),0,0,'hidden'); e.appendChild(d); d.innerHTML=w; p[18]=v08; p[20]=setInterval(function(){f33(p[18],0)},p[11]);
	return $t;
}
function f33(b,n) {
var i,j=0,l,o,w,h,u,p=va8[b],m=va10[b],z='http://',y='https://'; if (!p) return $f;
if (n==0) { if (p[20]) clearInterval(p[20]); p[20]=$n; p[20]=setInterval(function(){f33(p[18],1)},p[13]); return; }
l=p[3]; w=fId(p[16]+'_rbi'+n); u=p[19]; if(!w||!u) { if (p[20]) clearInterval(p[20]); p[20]=$n; return $f };
if (p[15]==0) { if (m) { o=m[u[n+l]-1]; if(o.substr(0,7)!==z && o.substr(0,8)!==y)o=p[0]+o; w.src=o; } else w.src=p[0]+u[n+l]+p[1]; if (p[8]) { p[15]=100+p[14]; j=1; f14(w,100); } else { p[14]=0-p[14]; p[15]=p[14]; } }
else { o=p[15]+p[14]; if (o<=0) o=0; if (o>=100) o=100; p[15]=o; if(rAF)vRAM[f43()]=function(){f14(w,o)};else f14(w,o); if (o==100) { p[14]=0-p[14]; j=1; } }
if (j) { if (p[20]) clearInterval(p[20]); p[20]=$n; n++; if (n>l) n=0; else p[20]=setInterval(function(){f33(p[18],n)},p[13]); }
if (n==0) {
	for(i=1; i<=l; i+=1) u[i]=u[i+l]; o=p[2];
	if(p[7]==0) { n=p[3]*2; for(i=l+1; i<=n; i+=1) { h=0; while(h<10) { w=f71(Math.random()*o)+1; if(w>o)w=o; h+=1; b=1; for(j=1;j<i;j+=1) { if(w==u[j]){b=0;break} } if(b) break; } u[i]=w; }	}
	else { j=p[17]; for(i=1;i<=l;i+=1){u[i+l]=j;j+=1;if(j>o)j=1} p[17]=j; }
	for(i=1; i<=l; i+=1) { if (m) { o=m[u[i+l]-1]; if(o.substr(0,7)!==z && o.substr(0,8)!==y)o=p[0]+o; } else o=p[0]+u[i+l]+p[1]; h=fId(p[16]+'_rbih'+i); if(p[8]) h.style.background='url('+o+')'; else h.src=o; }
	p[20]=setInterval(function(){f33(p[18],0)},(p[11]-p[13]));
}
}

/* ***************************************************************************************
	Д И Н А М И Ч Н Ы Е   М Е Н Ю
**************************************************************************************** */
/*
	va7    :	массив параметров для меню va7=[100,20,5,null,null] - time, step, коэффициэнт, автосворачивание, общая функция обратного вызова
	.pb_M0 :	callback - функция, заданная при вызове fInitMenu(), при вызове this указывает на object_LI
	.pb_M1 :	массив Для меню - node вложенных открытых элементов (0-99) и их height (10-19)
	.pb_M2 :	массив Для меню - node вложенных открытых элементов (0-99) и их height (10-19)
	.pb_M3 :	если установлено, то авто-сворачивание раскрытых пунктов меню
	.pb_M4 :	для SetInterval текущего меню
	.pb_M5 :	копия массива va7 для текущего меню [100,20,5,null,null,null,0,0,0,0,0] - time, step, коэффициэнт, автосворачивание, общая функция обратного вызова, node активного пункта класса pb_ms, 5 служебных полей
	.pb_M6 :	номер дескриптора для vRAM (для вызова из fRAF при requestAnimationFrame)
	.pb_Mf :	функция function(e){f27(e,this,l);f24(e,1)}; - устанавливается при инициализации меню. Можно динамично менять в процессе раболты меню.
*/
function f27(e,z,l) {
try {
if (!l.pb_M4) {
var i='(\\s|^)pb_m',p=l.pb_M5,h='(\\s|$)',k,j=-1,o=50,a='lineHeight',b,s,t,c,n=$n,r=l.pb_M1,q=l.pb_M2,ro=new RegExp(i+'o'+h),rc=new RegExp(i+'c'+h),ri=new RegExp(i+'i'+h),rs=new RegExp(i+'s'+h); e=e||$w.event;
h=z; while (h.tagName=='LI') { j+=1; h=h.parentNode.parentNode; } p[10]=l.pb_M0?l.pb_M0:p[3]; p[4]=l.pb_M3;
if (!z||typeof z!="object") return $f; c=z.className; if(c.indexOf('pb_mo')==-1&&c.indexOf('pb_mc')==-1) {
	if (p[5]) p[5].className=f32(p[5].className,ri,rs,'pb_mi'); p[5]=z; z.className=f32(c,rs,ri,'pb_ms'); if (p[10]) p[10].call(z,e); return $t;
} else { if (c.indexOf('pb_mo')!=-1) c=f32(c,rc,ro,'pb_mc'); else c=f32(c,ro,rc,'pb_mo'); z.className=c.replace(' '+' ',' '); }
for (i=49; i>=0; i-=1) { r[i]=q[i]; r[i+50]=q[i+50]; q[i]=n; q[i+50]=0; }
h=z; for (i=j; i>=0; i-=1) { q[i]=h; q[i+50]=f71(h.style.height); h=h.parentNode.parentNode; }
b=f71(fGS(q[0],a)); a=f71(fGS(r[0],a))||b; /* высота строк Активного и Закрывающегося пунктов */
if(p[4]) { for (i=0; i<50; i+=1) {
	if (r[i]&&r[i]!=q[i]) {
		h=r[i]; if (o==50) { s=f71(h.style.height); o=i; } /* Закрывающийся пункт "o" и его height "s" */
		c=h.className; if (c.indexOf('pb_mo')!=-1) h.className=f32(c,rc,ro,'pb_mc');
	}
}} /* Изменены все классы пунктов (старых и новых) под закрытие/открытие */
t=f71(z.scrollHeight); /* высота Активного пункта (бОльшая); b - мЕньшая */
s=s||a; /* высота Закрывающегося пункта (s - стартовая, a-конечная) */
if (q[j+50]>b) { t=b; b=q[j+50]; } /* Если пункт закрыт, то от мЕньшей к бОльшей, иначе наоборот */
p[6]=o; p[7]=j; p[8]=r; p[9]=q; if (p[10]) p[10].call(z,e); j=(t-b)/p[2]; k=(s-a)/p[2];
l.pb_M4=setInterval(function() {f28(b,t,j,a,k,l)},p[1]); return $t;
}
} catch (ev) {return $f}
}
/* l всегда прибавляется, k всегда вычитается */
function f28(b,t,l,a,k,m) {
	var i,h,p=m.pb_M5,j=p[7],o=p[6],r=p[8],f=p[4]; p=p[9];
	h=p[j+50]+l; if ((b>t&&h<=t)||(b<t&&h>=t)) { h-=l; l=t-h; k=(o==50)?0:(r[o+50]-a); clearInterval(m.pb_M4); m.pb_M4=0; }
	h=1; f=(f&&k>0&&l>0)?1:0; for (i=0; i<50; i+=1) {
		if (f&&r[i]) { if (p[i]==r[i]) p[i+50]-=k; else { if (h) { r[i+50]-=k; if(!rAF)r[i].style.height=f72(r[i+50])+'px'; h=0; } } }
		if (p[i]) { p[i+50]+=l; if(!rAF)p[i].style.height=f72(p[i+50])+'px'; }
	}
	if (!m.pb_M4) { for (i=0; i<50; i+=1) { if (p[i]) p[i+50]=f72(p[i+50]); if(!rAF) { if (o<50 && r[i] && r[i]!=p[i]) r[i].style.height=a+'px'; } } }
	if(rAF && !m.pb_M6) { vRAM[m.pb_M6=f43()]=function(){f42(m,m.pb_M5,(!m.pb_M4&&o<50)?a:0)}; }
} function f32(c,r,q,s) { s=s||''; c=c.replace(r,' '); c=c.replace(' '+' ',' '); c=c.replace(q,' ')+' '+s; return c.replace(' '+' ',' '); }
function f42(m,a,v) { /* Вызывается из fRAF() */
	var i,h=v?0:1,r=a[8],p=a[9]; m.pb_M6=0;
	if (v) for (i=0; i<50; i+=1) { if(r[i] && r[i]!=p[i])r[i].style.height=v+'px'; }
	for (i=0; i<50; i+=1) {
		if(h && r[i] && p[i]!=r[i]){r[i].style.height=f72(r[i+50])+'px';h=0;}
		if(p[i])p[i].style.height=f72(p[i+50])+'px';
	}
} function f43() { var i,p=vRAM; for(i=1; i<99; i+=1){if(!p[i])return i}fRAF(0);return 1;} /* поиск свободного дескриптора vRAM для вызова из fRAF */
/*
	Установка time,step - скорость анимации для меню,
	h - функция обратного вызова или произвольная строка для выполнения (если строка, то создаётся новая функция с содержимым строки)
		при клике по пункту или разделу меню (объекту LI) вызывается как f(obj), где obj - ссылка на объект LI
*/
function fSetMenu(t,s,h) { var p=[0,0,0,0,0]; t=t||100; if (t<100) t=100; p[0]=t; s=s||0; if (s<10) s=10; if (b18)s+=s; if (f72(t/s)<1) s=f72(t/2)||20; p[2]=f72(t/s); p[1]=s; p[3]=f60(h)||0; va7=p; }
/*
	Инициализация меню по ссылке на объект меню l
	c - если установлено, то авто-сворачивание раскрытых пунктов меню,
	f-перенос (0) или обрезка(1) неумещающегося текста в конечных пунктах меню (LI)
	h - функция обратного вызова или произвольная строка для выполнения (если строка, то создаётся новая функция с содержимым строки)
		при клике по пункту или разделу меню (объекту LI) вызывается как f(obj), где obj - ссылка на объект LI
*/
function fInitMenu(l,c,f,h) {
	var p=va7,i,s,u,j,z,r=[],q=[];
	l=fId(l); if (!l) return $f;
	u=fqSA('li',l); if (u) {
		l.pb_Mf=z=function(e){f27(e,this,l);f24(e,1)}; /* f24(e,1) - остановить только всплытие события, но не действие браузера по-умолчанию!!! */
		l.pb_M5=[p[0],p[1],p[2],p[3],p[4],0,0,0,0,0,0];
		for (i=u.length-1; i>=0; i-=1) {
			j=u[i]; while($t) { s=f71(fGS(j,'lineHeight')); if(s||s===0)break; else j=j.parentNode; if(!j)break; } s=((s||s===0)?s:12)+'px';
			p=u[i]; j=((p.offsetHeight>p.scrollHeight)?p.offsetHeight:p.scrollHeight)+'px';
			p.style.height=(p.className.indexOf('pb_mc')>=0)?s:((f&&p.className.indexOf('pb_mo')==-1)?s:j);
			s=p.className; if (s.indexOf('pb_ms')!=-1) l.pb_M5[5]=p; if(s.indexOf('pb_m')==-1) p.className=fTrim(s+' pb_mi');
			pEV.add(p, 'click', z);
		} for(i=0; i<100; i+=1){ r[i]=q[i]=$n; } l.pb_M1=r; l.pb_M2=q; l.pb_M3=c?1:0; l.pb_M4=0; l.pb_M6=0; l.pb_M0=f60(h)||0;;
	} else return $f;
	return $t;
}

/* ***************************************************************************************
	ФУНКЦИИ - ОБЕРТКИ для упрощения исходного JS-кода
	О Б Е Р Т К И   Д Л Я   А Н И М А Ц И И
**************************************************************************************** */
/*
	Смена прозрачности элемента
	id-элемент или его текстовое название
	time - время, step - шаг - МОЖНО НЕ УКАЗЫВАТЬ, тогда time=1000 step=50
	o, oe - нач. и кон. прозрачность. МОЖНО НЕ УКАЗЫВАТЬ, тогда будет меняться от 1 до 0, если текущее значение промежуточное, то от этого значения.
*/
function fAOpacity(id,t,s,o,oe,h) { var n=$n; id=fId(id)||n; t=t||1000; s=s||50; if (!o) o=0; else o=o||1; oe=oe||0; return fAn(id,t,s,n,n,n,n,n,n,o,oe,n,n,n,n,h); }
/*
	Обертка, изменяющая параметры элемента (кроме left top width height) по одному значению
	fAWrap(id,t,s,w,we,r,re,o,oe,c,ce,b,be)
	id - элемент или его текстовое название
	time - время, step - шаг - МОЖНО НЕ УКАЗЫВАТЬ, тогда time=100 step=20
	w и we - borderWidth (от 0) начальный и конечный для всех углов
	r и re - borderRadius (от 0) начальный и конечный для всех углов
	o и oe - нач. и кон. прозрачность. (от 0 до 1)
	c и ce - RGB цвета фона начального и конечного
	b и be - RGB borderColor начального и конечного
*/
function fAWrap(id,t,s,w,we,r,re,o,oe,c,ce,b,be,h) { var n=$n; id=fId(id)||n; w=w?[w,w,w,w]:n; we=we?[we,we,we,we]:n; r=r?[r,r,r,r]:n; re=re?[re,re,re,re]:n; return fAn(id,t,s,n,n,w,we,r,re,o,oe,c,ce,b,be,h); }
/*
	height - спойлер (вертикальный)
	Смена высоты и прозрачности элемента
	id - элемент или его текстовое название
	time - время, step - шаг - МОЖНО НЕ УКАЗЫВАТЬ, тогда time=100 step=20
	h - высота (от 0) стартовая
	he - высота (от 0) конечная

	МОЖНО УКАЗАТЬ ДОП. ПАРАМЕТРЫ:
	w и we - borderWidth (от 0) начальный и конечный для всех углов
	r и re - borderRadius (от 0) начальный и конечный для всех углов
	o и oe - прозрачность (от 0 до 1) начальная и конечная
	c и ce - RGB цвета фона начального и конечного
	b и be - RGB borderColor начального и конечного
*/
function fAHeight(id,t,s,h,he,w,we,r,re,o,oe,c,ce,b,be,z) {
var se,n=$n; id=fId(id)||n; h=h||0; he=he||0; w=w?[w,w,w,w]:n; we=we?[we,we,we,we]:n; r=r?[r,r,r,r]:n; re=re?[re,re,re,re]:n; se=f71(id.style.height); if (se!=h) { se=h; h=he; he=se; }
return fAn(id,t,s,[n,n,n,h],[n,n,n,he],w,we,r,re,o,oe,c,ce,b,be,z);
}
/*
	width - спойлер (горизонтальный)
	Смена высоты и прозрачности элемента
	id - элемент или его текстовое название
	time - время, step - шаг - МОЖНО НЕ УКАЗЫВАТЬ, тогда time=100 step=20
	h - ширина (от 0) стартовая
	he - ширина (от 0) конечная

	МОЖНО УКАЗАТЬ ДОП. ПАРАМЕТРЫ:
	w и we - borderWidth (от 0) начальный и конечный для всех углов
	r и re - borderRadius (от 0) начальный и конечный для всех углов
	o и oe - прозрачность (от 0 до 1) начальная и конечная
	c и ce - RGB цвета фона начального и конечного
	b и be - RGB borderColor начального и конечного
*/
function fAWidth(id,t,s,h,he,w,we,r,re,o,oe,c,ce,b,be,z) {
var se,n=$n; id=fId(id)||n; h=h||0; he=he||0; w=w?[w,w,w,w]:n; we=we?[we,we,we,we]:n; r=r?[r,r,r,r]:n; re=re?[re,re,re,re]:n; se=f71(id.style.width); if (se!=h) { se=h; h=he; he=se; }
return fAn(id,t,s,[n,n,h,n],[n,n,he,n],w,we,r,re,o,oe,c,ce,b,be,z);
}

/* ***************************************************************************************
	А Н И М А Ц И Я
**************************************************************************************** */
/* *********************************************
Изменение положения, размеров и прозрачности блочного элемента за время

id	- ссылка на объект или его имя id
time (t) - время в миллисекундах (не менее 100)
step	 - шаг в миллисекундах (<10 или более time*1/2 - вычисляется по умолчанию как time/10)

если любой из параметров указан как null, он не изменяется.
s - массив исходных значений [0-3]
  x1,y1,w1,h1 - начальное местоположение элемента
e - массив конечных значений [0-3]
  x2,y2,w2,h2 - конечное местоположение элемента
w и we - массивы для borderWidth исходных [0-3] и конечных [0-3]
  0 - left, 1 - top, 2 - right, 3 - bottom
r и re - массивы для borderRadius исходных [0-3] и конечных [0-3]
  0 - left top, 1 - right top, 2 - right bottom, 3 - left bottom
o и oe - прозрачность (от 0 до 1) начальная и конечная
c и ce - RGB цвета фона начального и конечного
b и be - RGB borderColor начального и конечного
 
callback (h)- хандлер на функцию обратного вызова. Если указан, вызывается при старте, окончании или прерывании анимации, передается this на объект анимации, состояние (строка) и дескриптор i тек.элемента (1-99)/

Возвращается номер/дескриптор i текущего элемента, если изменение начато, null если : ошибка старта или во входных параметрах или все 50 дескрипторов заполнены.
  по окончании изменения вызывается с параметром 'end' и i
  по прерывании изменения вызывается с параметром 'stop' и i
  по ошибке изменения вызывается с параметром 'error' и i
*/
/*
v02 :		Максимальный индекс стека анимации (ссылок на объекты и параметров).
			Для увеличения кол-ва элементов в стеке необходимо увеличить число 100 до более большого в функциях f48(), fAn() (строки 257,773,774,894)
v_ai :		массив для ссылок setInterval элементов анимации (0-99)
v_ao :		массив ссылок на элементы [object HTML element] По-умолчанию последние значения атрибутов элемента запоминаются,
			ВНИМАНИЕ! если значению по дескриптору элемента v_ao[дискриптор] присвоить null, то этот дескриптор будет освобожден для обработки другого элемента.
			Максимальное кол-во записей об элементах - 100 (0-99)
v_at :		Значение time для элементов
v_as :		Значение step для элементов
v_af :		Массив ссылок на функции обратного вызова. Вызываются при старте t='start', окончании t='end', останове t='stop', ошибки t='error' анимации.
			Передается и текущий дескриптор (i) элемента
			формат вызова: myFunc(t,i)
v_aa :		Массив с вложенными массивами для запомненных значений атрибутов элементов анимации.

Переменные для изменения блочных элементов по таймеру
v_aa[i][0][0-4] - left							v_aa[i][12][0-4] - opacity
v_aa[i][1][0-4] - top
v_aa[i][2][0-4] - width							v_aa[i][13][0-4] - backgroundColor red
v_aa[i][3][0-4] - height						v_aa[i][14][0-4] - backgroundColor green
												v_aa[i][15][0-4] - backgroundColor blue
v_aa[i][4][0-4] - borderLeftWidth
v_aa[i][5][0-4] - borderTopWidth				v_aa[i][16][0-4] - borderColor red
v_aa[i][6][0-4] - borderRightWidth				v_aa[i][17][0-4] - borderColor green
v_aa[i][7][0-4] - borderBottomWidth				v_aa[i][18][0-4] - borderColor blue

v_aa[i][8][0-4] - borderTopLeftRadius
v_aa[i][9][0-4] - borderTopRightRadius
v_aa[i][10][0-4] - borderBottomRightRadius
v_aa[i][11][0-4] - borderBottomLeftRadius
*/

/* функция подготовки элемента для анимации */
function fAn(id,t,st,s,e,w,we,r,re,o,oe,c,ce,b,be,h) {
var pse,ose,bkc,brc,brw,brr,i,j,p,ks,a,n=$n,x=b18,l=v_ao;
try {
if (!$dB)return n;
t = f71(t); st = f71(st); s = s || n; e = e || n; w = w || n; we = we || n; r = r || n; re = re || n;
if (o!=0) o = o || n; if (oe!=0) oe = oe || n; c = c || n; ce = ce || n; b = b || n; be = be || n; /* h = h || n; */
pse=(s && e && ((s[0]!=n && e[0]!=n) || (s[1]!=n && e[1]!=n) || ((s[2]==0 || s[2]>0) && (e[2]==0 || e[2]>0)) || ((s[3]==0 || s[3]>0) && (e[3]==0 || e[3]>0))))?true:false;
brw=f03(w,we); brr=x?n:f03(r,re); brc=(b && be && b.length==7 && be.length==7)?true:false;
ose=(o!=n && oe!=n && o>=0 && oe>=0 && o<=1 && oe<=1)?true:false; bkc=(c && ce && c.length==7 && ce.length==7)?true:false;
id=fId(id); if (!id)return n; if (t<100) t=100; if (t<st) st=f72(t/10); if(st<10)st=10; if (x){st+=st;if(st<40)st=40;if(t<st)st=t;} ks=t/st;
if (pse || brw || brr || ose || bkc || brc) {
	for (i=1; i<100; i+=1) if (l[i]==id || l[i]==n) break; if(i>v02)v02=i; for (j=v02; j>i; j-=1) if(l[j]==id) { i=j; }
	if (i>=100) { alert('vcorp_js_00_80:\nanimation stack overflow\n(max 99 elements)'); return n; }
	p=v_aa[i]; if (l[i]==id) {
		if (f05(p,0,s,e) && f05(p,4,w,we) && (x||f05(p,8,r,re)) && (p[12][0]==f71(o*100)) && (p[12][1]==f71(oe*100)) && f06(p,13,c,ce) && f06(p,16,b,be)) return n; else f07('stop',i);
		for (j=0; j<19; j+=1) p[j]=[n,n,n,n,p[j][4]];
	} else { p=v_aa[i]=f04(); for (j=0; j<19; j+=1) p[j]=[n,n,n,n,n]; }
	l[i]=id; v_at[i]=t; v_as[i]=st; /* v_af[i]=n; */
	v_af[i] = f60(h,'status,desc')||n; a=l[i].style;
	if (pse)
		{
			if ((s[0]!=n && e[0]!=n)) a.left=f01(p,0,0,s,e,ks);
			if ((s[1]!=n && e[1]!=n)) a.top=f01(p,1,1,s,e,ks);
			if (f00(s[2],e[2])) a.width=f01(p,2,2,s,e,ks);
			if (f00(s[3],e[3])) a.height=f01(p,3,3,s,e,ks);
		}
	if (brw)
		{
			if (f00(w[0],we[0])) a.borderLeftWidth=f01(p,4,0,w,we,ks);
			if (f00(w[1],we[1])) a.borderTopWidth=f01(p,5,1,w,we,ks);
			if (f00(w[2],we[2])) a.borderRightWidth=f01(p,6,2,w,we,ks);
			if (f00(w[3],we[3])) a.borderBottomWidth=f01(p,7,3,w,we,ks);
		}
	if (brr)
		{
			if (f00(r[0],re[0])) a.borderTopLeftRadius=f01(p,8,0,r,re,ks);
			if (f00(r[1],re[1])) a.borderTopRightRadius=f01(p,9,1,r,re,ks);
			if (f00(r[2],re[2])) a.borderBottomRightRadius=f01(p,10,2,r,re,ks);
			if (f00(r[3],re[3])) a.borderBottomLeftRadius=f01(p,11,3,r,re,ks);
		}
	if (ose)
		{
			p=p[12]; p[0]=f71(o*100); p[1]=f71(oe*100); p[3]=(p[1]-p[0])/ks; if (p[4]==n) p[2]=p[4]=p[0]; else p[2]=p[4]; f14(l[i],p[4]);
		}
	if (bkc) a.backgroundColor=f02(i,13,c,ce,ks);
	if (brc) a.borderColor=f02(i,16,b,be,ks);
	if (v_af[i]) v_af[i].call(id,"start",i);
	v_ai[i]=setInterval(function() {f50(i)},v_as[i]);
	return i;
} else return n;
} catch (e) { return n; }
}
/* функции для анимации f01() - f06() */
function f06(p,j,s,e) {
	var r,g,b,c; if (!s || !e) return true;
	r=(p[j][0]).toString(16); g=(p[j+1][0]).toString(16); b=(p[j+2][0]).toString(16); if (r.length<2) r='0'+r; if (g.length<2) g='0'+g; if (b.length<2) b='0'+b; c='#'+r+g+b;
	r=(p[j][1]).toString(16); g=(p[j+1][1]).toString(16); b=(p[j+2][1]).toString(16); if (r.length<2) r='0'+r; if (g.length<2) g='0'+g; if (b.length<2) b='0'+b; r='#'+r+g+b;
	return (c==s && r==e);
}
function f05(p,j,s,e) { if (!s || !e) return true; return (p[j][0]==s[0] && p[j][1]==e[0] && p[j+1][0]==s[1] && p[j+1][1]==e[1] && p[j+2][0]==s[2] && p[j+2][1]==e[2] && p[j+3][0]==s[3] && p[j+3][1]==e[3]); }
function f04() { var n=$n; return [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n]; } /* массив из 20 элементов 0-19 (для анимации используются 0-18) При изменении менять число-условие конца цикла в функции f50() => for (j=0; j<19; j+=1) {} */
function f03(s,e) { return (s && e && (((s[0]==0 || s[0]>0) && (e[0]==0 || e[0]>0)) || ((s[1]==0 || s[1]>0) && (e[1]==0 || e[1]>0)) || ((s[2]==0 || s[2]>0) && (e[2]==0 || e[2]>0)) || ((s[3]==0 || s[3]>0) && (e[3]==0 || e[3]>0)))); }
function f01(p,j,n,s,e,ks) { p=p[j]; p[0]=s[n]; p[1]=e[n]; p[3]=(e[n]-s[n])/ks; if (p[4]==null) p[2]=p[4]=p[0]; else p[2]=p[4]; return p[2]+'px'; }
function f00(s,e) { return ((s==0 || s>0) && (e==0 || e>0)); }
function f02(i,j,s,e,ks) {
	var p,l=v_aa[i],r=parseInt(s.substr(1,2),16), g=parseInt(s.substr(3,2),16), b=parseInt(s.substr(5,2),16), r2=parseInt(e.substr(1,2),16), g2=parseInt(e.substr(3,2),16), b2=parseInt(e.substr(5,2),16);
	p=l[j]; p[0]=r; p[1]=r2; p[3]=(r2-r)/ks; if (p[4]==null) p[2]=p[4]=r; else p[2]=p[4]; r=f71(p[2]).toString(16); if (r.length<2) r='0'+r;
	p=l[j+1]; p[0]=g; p[1]=g2; p[3]=(g2-g)/ks; if (p[4]==null) p[2]=p[4]=g; else p[2]=p[4]; g=f71(p[2]).toString(16); if (g.length<2) g='0'+g;
	p=l[j+2]; p[0]=b; p[1]=b2; p[3]=(b2-b)/ks; if (p[4]==null) p[2]=p[4]=b; else p[2]=p[4]; b=f71(p[2]).toString(16); if (b.length<2) b='0'+b;
	return '#'+r+g+b;
}
/* функции для шагов анимации по таймеру f50() */
function f50(i) {
var t,r,b,p,x,y,z=[],j,m,n,k,q=0,g=0,c=0,u=v_aa[i],a,l=v_ao;
try {
if (l[i]==null) { f07('stop',i); return; }
a=l[i].style;
for (j=0; j<19; j+=1) {
  if (u[j][0]!=null) {
	  p=u[j]; m=p[4]; n=p[1]; k=p[2];
	  if (m!=n) {
		t=k; k+=p[3]; if ((n>p[0] && k>=n) || (n<p[0] && k<=n)) k=m=n; else m=Math.round(k);
		if (j>3 && m<0) m=0; if (j>12 && m>255) m=255; p[4]=m;
		if (t!=k) {
			q=1; p[2]=k; n=m+'px'; if (j>12) { if (j<16) g=1; else c=1; } else { if(rAF) z[j]=j==12?m:n; else {
			switch (j) {
				case 0: a.left=n; break;
				case 1: a.top=n; break;
				case 2: a.width=n; break;
				case 3: a.height=n; break;
				case 4: a.borderLeftWidth=n; break;
				case 5: a.borderTopWidth=n; break;
				case 6: a.borderRightWidth=n; break;
				case 7: a.borderBottomWidth=n; break;
				case 8: a.borderTopLeftRadius=n; break;
				case 9: a.borderTopRightRadius=n; break;
				case 10: a.borderBottomRightRadius=n; break;
				case 11: a.borderBottomLeftRadius=n; break;
				case 12: f14(l[i],m);
				}
			}}
		}
	  }
	}
} if (g && u[13][0]!=null) {
	r=(u[13][4]).toString(16); g=(u[14][4]).toString(16); b=(u[15][4]).toString(16); if (r.length<2) r='0'+r; if (g.length<2) g='0'+g; if (b.length<2) b='0'+b;
	x='#'+r+g+b; if(rAF)z[13]=x; else a.backgroundColor=x;
} if (c && u[16][0]!=null) {
	r=(u[16][4]).toString(16); g=(u[17][4]).toString(16); b=(u[18][4]).toString(16); if (r.length<2) r='0'+r; if (g.length<2) g='0'+g; if (b.length<2) b='0'+b;
	y='#'+r+g+b; if(rAF)z[14]=y; else a.borderColor=y;
} if(rAF && z.length>0)vRAM[f43()]=function(){f65(a,z,l[i])};
if (!q) { f07('end',i); }
} catch (e) { f07('error',i); }
}
/* rAF animation */
function f65(a,z,l) {
	var i,n;
	for(i=0; i<15; i+=1){
		n=z[i]; if(n!==$u) {
			switch (i) {
				case 0: a.left=n; break;
				case 1: a.top=n; break;
				case 2: a.width=n; break;
				case 3: a.height=n; break;
				case 4: a.borderLeftWidth=n; break;
				case 5: a.borderTopWidth=n; break;
				case 6: a.borderRightWidth=n; break;
				case 7: a.borderBottomWidth=n; break;
				case 8: a.borderTopLeftRadius=n; break;
				case 9: a.borderTopRightRadius=n; break;
				case 10: a.borderBottomRightRadius=n; break;
				case 11: a.borderBottomLeftRadius=n; break;
				case 12: f14(l,n); break;
				case 13: a.backgroundColor=n; break;
				case 14: a.borderColor=n;
			}
		}
	}
}function f07(t,i) {
var n=$n; if (!$dB)return; if(rAF)fRAF(0);
if (v_ai[i]!=n) clearInterval(v_ai[i]); v_ai[i]=n;
if (v_af[i]) { try { v_af[i].call(v_ao[i],t,i); } catch (e) {} }
v_af[i]=n;
}
function fClearAn(i) { if (i>0&&i<100) { if (v_ai[i]!=$n) f07('stop',i); v_ao[i]=$n; } }

/* ***************************************************************************************
	D R A G  &  D R O P
**************************************************************************************** */
/*
	v03 :	Флаг для drag & drop и click (если 0, то mousemove при нажатой кнопке небыло, иначе было)
	v04 :	Флаг при смене zIndex (если 0, то не менялся, иначе менялся)
	v05 :	Флаг для вызова f09() при обработке r F A
	va2 :	Массив параметров для текущего перетаскиваемого элемента.
		Переменные для drag & drop (индекс массива va2)
		0 - id элемента
		1 - координата X мыши в моменты Down Move Up
		2 - координата Y мыши в моменты Down Move Up
		3 - координата left (ширина width) элемента в моменты Down Move Up
		4 - координата top (высота height) элемента в моменты Down Move Up
		5 - callback - функция, вызывается как f(e,left,top,width,height) ссылки на объекты e и obj и числовые параметры в пикселях, this указывает на перетаскиваемый объект
		6 - вид события 0 - mouse, 1 - touch
		7 - position - absolute || fixed
		8 - индекс для номера текущего изображения (0-9)
		9 - zIndex исходный перетаскиваемого элемента, восстанавливается при окончании перемещения.
		10 - width элемента
		11 - height элемента
		12 - pPW-20 || pCW-20
		13 - pPH-(20||50) || pCH-(20||50)
		14 - смещение X для pb__img_PN
		15 - смещение Y для pb__img_PN
		16 - minWidth для окна
		17 - maxWidth для окна
		18 - minHeight для окна
		19 - maxHeight для окна
*/

/*
	Обработка клика левой кнопкой мыши по событию onmouseDown ИЛИ нажатия пальца по событию ontouchStart
*/
function fDragDrop(e,id,h,j,k) {
var i,o,d=$d,p,x,y,z,s; v05=0;
try {
if (!$dB || v10==1) return $f; f08(e);
id=fId(id); if (id==v_wpo && !pPM) return $f;
o=(e.type=='touchstart')?1:0; if (o && e.targetTouches.length!=1)return $t; /* Если касание более одного пальца. */
if (!id || (!o && (e.type!='mousedown' || e.which!=1))) return $t; /* Если (нажата не левая кнопка мыши или не передан объект или не событие mousedown) ИЛИ (не событие touchstart) */
/* Обновление текущих координат и смещений */
f53(e); p=f04(); s=fGSs(id); i=s.gS("position"); if (i!='absolute'&&i!='fixed') return $t; i=i=='fixed'?0:1;
v10=1; /* Небыло события mouseup или touchend */
p[3]=f71(s.gS("left")); p[4]=f71(s.gS("top")); p[10]=f71(s.gS("width")); p[11]=f71(s.gS("height")); p[12]=(i?pPW:pCW)-20; p[13]=(i?pPH:pCH)-((j==$n||j>100)?20:((va4[j]<0)?20:50));
p[0]=id; p[1]=pMX; p[2]=pMY;
h=p[5]=f60(h,'e,left,top,width,height'); p[6]=o; p[7]=i; j=j||0; p[8]=j; if(k) { p[16]=k[0]; p[17]=k[1]; p[18]=k[2]; p[19]=k[3]; }v03=j>0?-3:0; 
if (j>100) { p[9]=j; if (j!=101) { f17(k?j-200:j-100,1); v_w[k?j-200:j-100][0].style.zIndex=250; } }
else {
	if (j==0) { p[9]=s.gS("zIndex")||0; id.style.zIndex=p[9]<297?297:p[9]; }
	else { /* высплывающие изображения */ s=fGSs('pb__img_PN'+j); if(s) { p[14]=f71(s.gS("left"))-p[3]; p[15]=f71(s.gS("top"))-p[4]; } if(!o||v04==0)f61(j); }
}
if (h) h.call(id,e,p[3],p[4],p[10],p[11]);
f24(e); /* Остановка всплытия события; Убрать действие браузера по-умолчанию */
if (o) { pEV.add(d,'touchmove',f51); pEV.add(d,'touchend',f52); } /* Установка обработчиков перемещения и отпускания пальца */
else { pEV.add(d,'mousemove',f51); pEV.add(d,'mouseup',f52); } /* Установка обработчиков перемещения и отпускания кнопки мыши */
$D=1;
} catch (e) { }
va2=p; return $f;
}
/* DRAG MOVE Обработка движения мыши по событию onmouseMove */
function f51(e) {
	var p=va2,i; f08(e); try {
	if ((!p[6]&&e.type!='mousemove')||(p[6]&&e.type!='touchmove')||(p[6]&&e.targetTouches.length!=1)) return true;
	if (!p[6]&&e.which!=1)f52(e,1); else {
		if(v03>=0){if(rAF) v05=1; else f09();}
		if (v03==0) v03=1; if (v03<0) v03+=1; if (p[5]) p[5].call(p[0],e,p[3],p[4],p[10],p[11]);
		f24(e); /* Остановка всплытия события; Убрать действие браузера по-умолчанию */
	}} catch (e) { }
	return false;
}
/* Обработка отпускания мыши по событию onmouseUp */
function f52(e,f) {
var i,m='move',s,d=$d,p=va2,w;f=f||0; /* f==1 - если была отпущена левая кнопка мыши во время события mousemove (для движка Chromium blink)*/
try {
e =  e || $w.event; if ((!p[6]&&e.type!='mouseup'&&f==0)||(p[6]&&e.type!='touchend')) return $t; $D=0;
if (p[6]) { pEV.remove(d,'touchmove',f51); pEV.remove(d,'touchend',f52); } /* Снятие обработчиков перемещения и отпускания пальца */
else { pEV.remove(d,'mousemove',f51); pEV.remove(d,'mouseup',f52); } /* Снятие обработчиков перемещения и отпускания кнопки мыши */
if (p[9]!=$n) {
	i=p[9]-100; if(i>100){i-=100;m='resize'} s=p[0].style; if (i<1 || i>50) s.zIndex=p[9];
	else { w=v_w[i]; w[13]=f71(s.left); w[14]=f71(s.top); if (i>1) { w[0].style.zIndex=s.zIndex; w[15]=f71(s.width); w[16]=f71(s.height); if(v03>0)f38(m,i); } }
	s.display='none';
}
if(!f&&v03>0){f53(e); if(rAF)v05=1; else f09(e);}; if (p[5]) p[5].call(p[0],e,p[3],p[4],p[10],p[11]); if (p[8]>0 && p[8]<100) f11(e,p[8]); va2=f04();
f24(e); /* Остановка всплытия события; Убрать действие браузера по-умолчанию */
if (s) s.display='block'; v10=0; /* Произошло событие mouseup или touchend */
} catch (e) { }
return $f;
}
/* системная функция для обработки drag & drop */
function f09() {
var v,x,y,t,d,f,s,p=va2; if(!p[0])return; x=p[1]; y=p[2]; s=p[0].style; p[1]=pMX; p[2]=pMY;
if(p[9]>200&&p[9]<250) {
	if (x!=p[1]) { v=p[10]+p[1]-x; t=v+p[3]-p[12]; if(t>0){v=p[12]-p[3];p[1]-=t} t=v-p[17]; if(t>0){v=p[17];p[1]-=t} t=p[16]-v; if(t>0){v=p[16];p[1]+=t} if (x!=p[1]) { s.width=v+'px'; p[10]=v; } }
	if (y!=p[2]) { v=p[11]+p[2]-y; t=v+p[4]-p[13]; if(t>0){v=p[13]-p[4];p[2]-=t} t=v-p[19]; if(t>0){v=p[19];p[2]-=t} t=p[18]-v; if(t>0){v=p[18];p[2]+=t} if (y!=p[2]) { s.height=v+'px'; p[11]=v; } }
} else {
	if(p[8]>0&&p[8]<100) { f=fId('pb__img_div_'+p[8]).style; d=fId('pb__img_PN'+p[8]); if(d)d=d.style; }
	if (x!=p[1]) { v=p[3]+p[1]-x; t=v+p[10]-p[12]; if(t>0){v=p[12]-p[10];p[1]-=t} if(v<0){p[1]-=v;v=0}; if (x!=p[1]) { s.left=v+'px'; if (f) { f.left=v+'px'; if(d)d.left=(v+p[14])+'px'; } p[3]=v; } }
	if (y!=p[2]) { v=p[4]+p[2]-y; t=v+p[11]-p[13]; if(t>0){v=p[13]-p[11];p[2]-=t} if(v<0){p[2]-=v;v=0}; if (y!=p[2]) { s.top=v+'px'; if (f) { f.top=((va4[p[8]]>0)?(v+f71(s.height)):(v+va4[p[8]]))+'px'; if(d)d.top=(v+p[15])+'px'; } p[4]=v; } }
}
}

/* ***************************************************************************************
	ВСПЛЫВАЮЩИЕ ФОТО
**************************************************************************************** */
/*
	va14 : Подготовка массива с подмассивами [ obj, src, left, top, width, height, txt, pos, 1, 1 ] ддя элементов класса .pb_ismall
	s - селектор для поиска (если не указан, то ".pb_ismall")
	o - object или document $d,
	Возвращает обновлённое количество изображений в галерее от 0
*/
function f63(s,o) {
var i, j, l, k, m, t, c, r=[], n=0, g='this', q='.parentNode', h='zoomImg', p, p1, p2, a=[');', ')}', ')'+fCC(10)+'}', ')'+fCC(13)+'}',  ')'+fCC(13)+fCC(10)+'}'];
c=fqSA(s?(''+s):'.pb_ismall',fId(o));
if(c) {
  l=c.length; for (i=0; i<l; i+=1) {
	p=c[i]; s=''+p.onclick; if(s.indexOf(h)>=0) {
		p2=s.indexOf(h); p1=s.indexOf('(',p2)+1; for (j=0; j<5; j+=1){p2=s.indexOf(a[j],p1);if(p2>0)break}
		if(p2!=-1) {
			s=s.substr(p1,p2-p1).split(','); k=s.length; if(k<11||!f71(s[10]))continue;
			if (k>6) {
				for (j=7; j<k; j+=1) if(s[j]&&(s[j].indexOf('"')>0||s[j].indexOf("'")>0)) { for (m=7; m<=j; m+=1) s[6]+=','+s[m]; s[7]=s[j+1]||0; j=k; }
			}
			t=fTrim(s[0]);
			if(t!=g) {
				if(t==(g+q)) p=p.parentNode;
				if(t==(g+q+q)) p=p.parentNode.parentNode;
				if(p==c[i]) p=fId(t.substr(1,t.length-2));
			} if (p) {
				r[n] = [ p, '', 0, 0, 0, 0, '', 0, 1, 1 ]; for (j=1; j<8; j+=1) { p=s[j]; if(p) { if(j==1||j==6) { p=(typeof(p)==$s)?fTrim(p.substr(1,p.length-2)):'' } r[n][j]=p; } } n+=1;
			}
		}
	}
  }
}va14=r; return c?l:0;
}
/* Всплывающие фото
	v03 :	Флаг для drag & drop и click (если 0, то mousemove при нажатой кнопке небыло, иначе было)
	v04 :	Флаг при смене zIndex (если 0, то не менялся, иначе менялся)
	va3 :	массив ссылок на исходные фотографии (превью)
	va4 :	массив значений для позиционирований подписей к изображениям
	va5 :	массив созданных элементов createElement (div)
	va6 :	массив начальных значений элемента превью и подписей (0-left, 1 - top, 2 - width, 3 - height, 4 - код ответа fAn(), 5 - title text, 6 - zIndex, 7 - opacity)

	Формат вызова : <img src="..." onclick(или другое событие)="fZoomImg(this,src,time,step,w,h[,txt,m,c,f,r])"
	txt - подпись к изображению.
	m - позиция подписи, >=0 - сразу под изображением, <0 - смещение блока подписи над изображением в пикселях.
	c - 0 или отсутствует, то по месту, иначе по центру экрана.
	f - открытый параметр - установка (не 0) означает, что изображение увеличивается сразу, без анимации.
	r - если 1, то изображение участвует (или может участвовать) в перелистывании - на нём будут показаны контролы перелистывания. При прелистывании следующие фото всегда по центру экрана
*/
function fZoomImg(o,sr,b,k,w,h,tx,m,c,f,r) {
var i,p,ww,hh,x,y,l,t=0,w0,h0,op,n=$n,z=0,s,a=' style="position:absolute;cursor:pointer;',u='" class="pb_i',g='<div id="pb__i',d=')"></div></div>';f=f?1:0;r=r?1:0;
o=fId(o); b=f71(b); k=f71(k); w=f71(w); h=f71(h); if ($dB==n || !o || w<1 || h<1) return $f;
for (i=1; i<10; i+=1) {if(va3[i]==o)z=1;if(t==0&&va3[i]==n)t=i} if(z||t==0) return $f; i=t;
f53(); p=fGetOffset(o); l=p.left; t=p.top;
ww=pCW-30; hh=pCH-80; x=pSL+10; y=pST+30; if (ww<0) ww=0; if (hh<0) hh=0;
p=fGSs(o); w0=f71(p.gS("width"))||100; h0=f71(p.gS("height"))||100; op=parseFloat(p.gS("opacity"))||n; op=(!o.style.opacity||op===n)?n:f72(op*100);
m=f71(m); c=c?1:0; b=b||0; k=k||20; tx=tx||''; if(b<100)b=100; if (k<10||b<k)k=f72(b/10);if(b18)k+=k;if(b<k)k=b;
if (ww<w) {	if (w>h) { z=w/h; w=ww; h=f72(w/z); } else { z=h/w; w=ww; h=f72(w*z); } }
if (hh<h) { if (w>h) { z=w/h; h=hh; w=f72(h*z); } else { z=h/w; h=hh; w=f72(h/z); } }
p=c?(x+f72((ww-w)/2)):f72(l+w0/2-w/2); if (p<x) p=x; if (p>(x+ww-w)) p=x+ww-w; ww=p;
p=c?(y+f72((hh-h)/2)):f72(t+h0/2-h/2); if (p<y) p=y; if (p>(y+hh-h)) p=y+hh-h; hh=p;

va3[i]=o; va4[i]=m; p=$d.createElement('div'); s=p.style; s.position='absolute'; s.top='0'; s.left='0'; s.overflow='visible'; m='"'+$md+'='; c=$ts+'=';
z='"'+$+'._(48)(event,\'pb__img_'+i+"','',"+i+')"'; z=m+z+c+z; s='<img id="pb__img_'+i+u+'big" src="'+sr+z;
s+=a+'left:'+(f?ww:l)+'px;top:'+(f?hh:t)+'px;height:'+(f?h:h0)+'px;width:'+(f?w:w0)+'px"/>'+g+'mg_div_'+i+u+'txt"'+a+($b?'display:none':'visibility:hidden;')+z;
z=$+'._(11)(event,'+i; s+='>'+tx+'<div class="pb_win_head_del"'+a+'top:0;right:0'+m+'"'+z+')"'+c+'"v03=v04=0;'+z+d;
if(r&&va14.length>1) {
	z=':0;top:0" onclick="'+$+'._(64)('+i;
	s+=g+'mg_PN'+i+'"'+a+'">'+g+'P'+i+u+'prev"'+a+'left'+z+',1)"></div>'+g+'N'+i+u+'next"'+a+'right'+z+d;
} p.innerHTML=s; $dB.appendChild(p); z=fId('pb__iP'+i); if (z) {
	x=f71(fGS(z,'width'))||50; y=f71(fGS(z,'height'))||50;
	z=fId('pb__img_PN'+i); f83(z.style,f72(ww+w/2-x-20),f72(hh+h/2-y/2),(x+x+40),y);
}
a=[l,t,w0,h0,(f?n:fAn('pb__img_'+i,b,k,[l,t,w0,h0],[ww,hh,w,h],n,n,n,n,n,n,n,n,n,n,f10)),tx,201,op];
if (!f&&a[4]==n) { va3[i]=n; $dB.removeChild(p); va4[i]=0; return $f; } else { va5[i]=p; va6[i]=a; f14(o,0); f61(i); if(f)f10('end',i,1); v04=0; /* if($b) o.style.display='none'; else o.style.visibility='hidden'; */ }
return $t;
}
/* функции для всплывания и перетаскивания фото со сменой zIndex f10() - f11() */
function f10(t,i,f) {
var j,p,f,t,h,w,m;f=f||0;
if (t!='start') {
	j=f?i:f13(i);
	if (j!==$n) {
		if(!f){v_ao[i]=$n; v_aa[i]=$n;} v03=0; va6[j][4]=$n; m=va4[j];
		if (t=='end' && m!=0) {
			p=fId('pb__img_div_'+j); h=p.style; f=fId('pb__img_'+j); w=f.style; t=f71(w.top);
			h.left=w.left; h.top=((m>0)?(t+f71(w.height)):(t+m))+'px'; h.width=w.width; if($b) h.display='block'; else h.visibility="visible";
		}
	}
}}function f11(e,i) {
var l,t,h,w,s,n=$n,id,d=fId('pb__img_div_'+i).style,p=f08(e); if (!p && e.which!=1) return;
/* if (v03==2) return false; */
if (v04==0 && v03<=0) { f62(i);
p=va6[i]; id=fId('pb__img_'+i); if (!id) return; s=id.style; if($b) d.display='none'; else d.visibility="hidden";
l=f71(s.left); t=f71(s.top); w=f71(s.width); h=f71(s.height);
p[4]=fAn('pb__img_'+i,100,20,[l,t,w,h],[p[0],p[1],p[2],p[3]],n,n,n,n,n,n,n,n,n,n,f12); if(p[4]==n) f12('zI',i);
} v03=v04=0; f24(e); return $f;
}
function f12(t,i) { var j,n=$n; if (t!='start') { j=(t=='zI')?i:f13(i); if(t!='zI'){v_ao[i]=n;v_aa[i]=n;} $dB.removeChild(va5[j]); f14(va3[j],va6[j][7]); va3[j]=n; va4[j]=n; va5[j]=n; va6[j]=[n,n,n,n,n,n,n,n]; } }
function f13(i) { var j; for (j=1; j<10; j+=1) if (va6[j][4]==i) return j; return $n; }
function f61(i) {
var j,x=va5,y=va6,b,a=f46(12),u=f46(12),z=y[i][6]; v04=0;
if (z<209) {
	for (j=1; j<10; j+=1) { if (x[j]) { b=y[j][6]; a[b-200]=0; if (b>z && b>200) { a[b-200]=x[j]; b--; y[j][6]=b; u[b-199]=b; } } }
	for (j=1; j<10; j+=1) { if (a[j]) a[j].style.zIndex=u[j]; } x[i].style.zIndex=y[i][6]=209; v04=1;
}}
function f62(i) {
var j,x=va5,y=va6,b,a=f46(12),u=f46(12),z=y[i][6];
if (z>200) {
	for (j=1; j<10; j+=1) { if (x[j]) { b=y[j][6]; a[b-200]=0; if (b<z && b>200) { a[b-200]=x[j]; b+=1; y[j][6]=b; u[b-201]=b; } } }
	for (j=1; j<10; j+=1) { if (a[j]) a[j].style.zIndex=u[j]; }
}}
function f64(i,f) {
var j,r=va14,l=r.length,o=va3,d=fId('pb__img_div_'+i).style;if(l<2)return; fId('pb__iP'+i).style.display=fId('pb__iN'+i).style.display='none';
for(j=1;j<10;j+=1) if(i!=j&&o[j]) f12('zI',j); for(j=0;j<l;j+=1) if(r[j][0]==o[i]) break; if($b) d.display='none'; else d.visibility="hidden";
o=va6[i][4]=fAOpacity('pb__img_'+i,300,30,1,0,function(t,j){if(t!='start'){f62(i);f12(t,j)}}); if(!o) {f62(i);f12('zI',i)}
if (f) j=(j==0?l:j)-1; else { j+=1; if(j==l)j=0; }
r=r[j];fZoomImg(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1,1,1); if(o)f61(i);
}

/* ***************************************************************************************
	О К О Н Н А Я   С И С Т Е М А
**************************************************************************************** */
/* 
	pPM		:	если 0, то панель окон не перемещается, если  1, то переммещается через dragDrop.
	v_max	:	При старте библиотеки, максимальное количество окон (1 - до 48)
	va9=[0,0,0,0,0,0]	- размер элемента класса pb_win_panel по горизонтали (va9[0]) и вертикали (va9[1])
						- размер элемента класса pb_win_panel_elem по горизонтали (va9[2]) и вертикали (va9[3]) - начальные, [4], [5] - текущие.

	Класс панели свернутых окон - pb_win_panel									Класс pb_alert
	Класс свернутых значков окон - pb_win_panel_elem							Класс pb_alert_head
	Класс свернутых значков активных окон - pb_win_panel_elem_sel				Класс pb_alert_body
	Класс окна - pb_win
	Класс активного окна - pb_win_sel
	Класс заголовка - pb_win_head
	Класс активного заголовка - pb_win_head_sel
	Класс Caption заголовка - pb_win_head_text
	Класс кнопки уничтожить окно - pb_win_head_del
	Класс кнопки закрыть окно - pb_win_head_hide
	Класс содержимого окна - pb_win_body
	
	Переменные:
	v_wpo=fId('pb__win_panel');	- Ссылка на Панель окон.
	v_wp=[[n,n],[n,n]]		- Ссылки на значки окон в Панели окон
	pb_w=new Array(50)		- Массив с вложенными массивами для запомненных значений атрибутов окон.
	v_w[desc]=f04() - массив из 20 элементов
			0 - id базового элемента окна (создаваемый командой document.createElement('div') )
			1 - id элемента класса pb_win_panel_elem (для системного окна с desc==0 элемент класса pb_win_panel)
			2 - id элемента класса pb_win
			3 - переключение opacity (0-100) элемента pb_win_panel_elem во время сворачивания/разворачивания окна (для 1 (pb_alert) - значение opacity фона экрана pb__alert)
			4 - id элемента класса pb_win_head
			5 - id элемента класса pb_win_head_del
			6 - id элемента класса pb_win_head_hide
			7 - id элемента класса pb_win_body
			8 - для setInterval
			9 - текущее opacity 0 - [18];
			10 - time (для desc==0)		zIndex объекта класса pb_win (от 101)	(для desc>0)
			11 - step (для desc==0)
			12 - rstep (для desc==0)
			13 - left
			14 - top
			15 - width
			16 - height
			17 - buttons
			18 - максимальное opacity для окна (от 0 до 100) (если 0 или null, то прозрачность не менять)
			19 - 0 если в окне нет Грида, ниаче дескриптор Грида (1-99)

	Для системного окна (desc==0) zIndex всегда 100, visibility="hidden"

	function fWSet(time,step,left,top,width,height[,buttons,opacity]) - установка параметров для всех окон (для системного окна с дескриптором 0 - это шаблон)
			Возвращается true или false при невозможности задать параметры.
		time - скорость растворения
		step - шаг растворения
		left,top - координаты левого верхнего по-умолчанию для новых окон.
		width,height - размеры по-умолчанию для новых окон.
		buttons - для кнопок заголовка окна
			0 - видимы и работают обе кнопки. Кнопка закрыть окно - закрывает, кнопка уничтожить окно - уничтожает.
			1 - видима только кнопка уничтожить окно - при нажатии окно уничтожается.
			2 - видима только кнопка закрыть окно - при нажатии окно закрывается.
			3 - невидимы и неработают обе кнопки. Только программно!
		opacity - максимальное значение opacity для окна (от 0 до 1)

	function fWNew([headtxt,bodyHTML,left,top,width,height,buttons,opacity,resize]) - создание нового окна с текстом заголовка txt и получение дескриптора созданного окна.
			Окно получает значок на панелии окон и получает zIndex = самому низкому из видимых существующих окон (149-102), display="block" (visibility="hidden"). Все параметры необязательные (или можно указывать null)
			Возвращается дескриптор окна или false при невозможности создать окно.
		headtxt - текст заголовка окна
		bodyHTML - HTML-код содержимого окна.
		left,top - координаты л.в. угла
		width,height - высота окна
		buttons - для кнопок заголовка окна
		opacity - максимальное значение opacity для окна (от 0 до 1)
		resize - Объект {minWidth, minHeight, maxWidth, maxHeight}

	function fWGTop() - Получение дескриптора активного окна (zIndex==149).

	function fWDel(desc) - уничтожение окна по его дескриптору (номеру)
			Окно исчезает вместе со значком в панели окон. Для остальных окон zIndex сдвигается с учетом освободившегося zIndex в сторону увеличения.

	function fWHead(desc,txt) - изменение текста заголовка и кнопок заголовка для указанного окна.
			Возвращается true или false при невозможности изменить заголовок. zIndex и отображение не изменяется.
			txt - HTML заголовка окна

	function fWBody(i,txt) - изменений innerHTML содержимого окна
			Возвращается true или false при невозможности изменить содержимое. zIndex и отображение не изменяется.
			txt - HTML содержимого окна
	
	function fWShow(desc) - сделать окно активным
			display="block" (visibility="visible"), zIndex окна становится 149, для остальных активных окон уменьшаентся на 1.

	function fWHide(desc) - закрыть (свернуть) окно. display="none" (visibility="hidden"). zIndex окна становится 101. Для остальных окон zIndex сдвигается/увеличиваетсяс учетом освободившегося zIndex.

	function fWAlert(headtxt,bodyHTML[,width,height,buttons,opacity]) - Вывести сообщение

	function fWClear() - Удалить все окна и очистить информацию о них.

	function fWSt(i,l,t,w,h,b,s) - Установка размеров и положения окна, а так-же кнопок и прозрачности. zIndex и отображение не изменяется.

	function fWGt(i) - Получение параметров указанного дескриптором окна
*/

/* 
	Установка параметров для всех окон (для системного окна с дескриптором 0 - это шаблон)
*/
function fWSet(m,a,l,t,w,h,b,s) {
	var p; if (f26()) return $f; m=f71(m); a=f71(a);
	v_w[0]=f04(); p=v_w[0]; l=f71(l); t=f71(t); w=f71(w); h=f71(h); l=l>0?l:0; t=t>0?t:0; w=w>0?(w<100?100:w):0; h=h>0?(h<50?50:h):0; b=f71(b);if(b<0||b>3)b=0;
	if (m<90) m=90; m=f72(m); p[10]=m; if (a<30 || m<a) a=m/10; if(b18)a+=a; a=f72(a); if(a<30)a=30; p[11]=a;
	s=typeof s==$m?f72(s*100):0; if(s>100)s=100; if(s<1||b18)s=0; p[12]=s?f72(s/(m/a)):$n;
	f19(0,l,t,w,h,b,s);
	return $t;
}

/* Обработка кликов по панели окон  - переключение окон, а так-же скрытие, если доступна кнопка закрыть (buttons 0 или 2)*/
function f47(e,i) { var p=v_w[i],f=(!p[17]||p[17]==2); if(!f15(e))return; if(fWGTop()==i && f) fWHide(i,1,1); else { f22(i,'visible'); f17(i,1); f30(i); } }
/*
	Создание нового окна и получение дескриптора (номер окна от 2 до 49), ссылки на объект заголовка (для текста), ссылки на оъект тела (для содержимого) окна.
*/
function fWNew(tx,bh,l,t,w,h,b,s,k) {
var i,p,f=v_w[0],n=$n,ih,z=101,c='width:100%;height:100%;',o=';overflow:hidden;',wp,r='</div>',v='visible',pw='pb__win_',cl='" class="pb_win',id='<div id="pb__win_',m='"'+$md,a=' style="left:';
try {
	if (f26()) return $f; for (i=2; i<51; i+=1) { if (v_w[i]==n) break; } if(v_max>0&&i>(v_max+1))return $f;
	v_wp[i]=[n,n]; wp=v_wp[i]; v_w[i]=f04(); p=v_w[i]; tx=tx||''; bh=bh||'';
	p[11]=f[11]; p[12]=f[12]; /* f - Значения для окон по умолчанию */
	p[10]=z; f19(i,l,t,w,h,b,s);

	wp[1]=fId('pb__win_panel'); wp[0]=f49(0,wp[1],va9[2]+'px',va9[3]+'px'); s=a+'0;top:0;position:absolute'; w='="'+$+'._(47)(event,'+i+')"';
	ih=id+'panel_elem_'+i+cl+'_panel_elem"'+s+o+'padding:0;margin:0;'+c+m+w+$ts+w+'><table style="'+c+'border:none"><tbody><tr><td>'+tx+'</td></tr></tbody></table>'+r;
	wp[0].innerHTML=ih; /* элемент - значок окна на панели окон. */
	p[1]=fId('pb__win_panel_elem_'+i); f23(); p[0]=f49(0,0,'0','0',0,0,v); c='="'+$+'._(48)(event,\''+pw+i+"','',"+(i+100)+');"';
	ih=id+i+cl+'"'+a+f[13]+'px;top:'+f[14]+'px;width:'+f[15]+'px;height:'+f[16]+'px'+o+'z-index:'+z+m+'="'+$+'._(17)('+i+',1);"'+$ts+'="'+$+'._(17)('+i+',1);">'; /* pb__win_ */
	ih+=id+'head_'+i+cl+'_head"'+s+m+c+$ts+c+'>';
	ih+=f16(i,b)+id+'head_text_'+i+cl+'_head_text">'+tx+r+r; /* pb__win_head_ */
	ih+=id+'body_'+i+cl+'_body">'+bh+r; /* pb__win_body_ */
	f=0; if((typeof k=='object')||(fisA(k)&&k.length==4)) {
		if (!fisA(k)) k = [k.minWidth,k.maxWidth,k.minHeight,k.maxHeight]; for(f=0;f<4;f+=1)k[f]=f71(k[f]); if(k[0]<100)k[0]=100; if(k[2]<50)k[2]=50;
	} else k=[100,5000,50,5000]; c='="'+$+'._(48)(event,\''+pw+i+"','',"+(i+200)+',['+k[0]+','+k[1]+','+k[2]+','+k[3]+']);"'; ih+='<div id="pb__win_resize_'+i+'" class="pb_win_resize"'+$ts+c+m+c+'" style="'+(f?'':'display:none')+'"></div>';
	ih+=r;  /* pb__win_ */
	p[0].innerHTML=ih; /* все содержимое окна соответствующих классов и параметров. */
	p[2]=fId(pw+i);
	p[4]=fId(pw+'head_'+i);
	p[5]=fId(pw+'head_del_'+i);
	p[6]=fId(pw+'head_hide_'+i);
	p[7]=fId(pw+'body_'+i);
	f21(i,l,t,1); if($b) p[0].style.display='none'; else p[0].style.visibility='hidden'; if (p[18]!=n) f14(p[2],p[18]);
	return i;
} catch (e) { return $f }
}

function fWAlert(tx,bh,w,h,b,s) {
var i,j,l,t,p,x,y,pw='<div id="pb__',pa='_1" class="pb_alert',c,o='overflow:hidden;',r='</div>',a=' style="',u='alert_head_text';
 try {
	if (!$dB || v_w[1]!=$n) return $f;
	w=f71(w); h=f71(h); w=w<100?100:w; h=h<50?50:h; tx=tx||''; bh=bh||''; b=f71(b); if(b!=3)b=1;
		t=v31; /* Сохранение .tabIndex в .pb_wOldTabIndex */
		for(j=t.length-1;j>=0;j-=1) { p=fqSA(t[j]); if (p) { for (i=p.length-1; i>=0; i--) { p[i].pb_wOldTabIndex=p[i].tabIndex;p[i].tabIndex="-1"; } } }
		f53(); x=f71(pCW/2-w/2); y=f71(pCH/2-h/2); if(x<0)x=0; if(y<0)y=0;
		v_w[1]=f04(); p=v_w[1]; p[11]=35; p[12]=40; f19(1,x,y,w,h,b,s); p[0]=f49(0,0,0,0,0,298);
		t=pw+'alert"'+a+'position:absolute;left:0;top:0;height:100%;width:100%;'+o+'z-index:298;background-color:#808080">'+r;
		t+=pw+'win'+pa+'"'+a+'left:'+p[13]+'px;top:'+p[14]+'px;width:'+p[15]+'px;height:'+p[16]+'px;'+o+'z-index:299;">';
		l='pb__win_'; c='"'+$+'._(48)(event,\''+l+"1','',"+101+');"';
		t+=pw+'win_head'+pa+'_head"'+$md+'='+c+$ts+'='+c+'>'+f16(1,b)+pw+u+'" class="pb_'+u+'">'+tx+r+r; /* pb__win_head_ */
		t+=pw+'win_body'+pa+'_body">'+bh+r+r; /* pb__win_body_ */
		p[0].innerHTML=t;
		p[2]=fId(l+'1');
		p[4]=fId(l+'head_1');
		p[5]=fId(l+'head_del_1');
		p[6]=fId(l+'head_hide_1');
		p[7]=fId(l+'body_1');
		f21(1,x,y,1); if (p[18]!=$n) f14(p[2],p[18]);
		t=fId('pb__alert'); f14(t,10); t=t.style; if ($b) t.display='block'; else t.visibility='visible'; p[9]=10; p[8]=setInterval(f25,30); return $t;
} catch (e) { return $f }
}

/* Системная функция подготовки кода для innerHTML для объекта pb__win_head_ класса pb_win_head */
function f16(i,b) {
var h='',t='<div id="pb__win_head_',d='" class="pb_win_head_',o='="if('+$+'._(15)(event))'+$+'._(2',r='"></div>',v=' style="overflow:hidden;display:',m='"'+$md,c=',1,1)"'+$ts;
h+=t+'del_'+i+d+'del"'+v+((b<2)?'block':'none')+m+o+'0)('+i+c+o+'0)('+i+',1,1)'+r; /* pb__win_head_del_ */
if(i>1) h+=t+'hide_'+i+d+'hide"'+v+((b!=1&&b!=3)?'block':'none')+m+o+'5)('+i+c+o+'5)('+i+',1,1)'+r; /* pb__win_head_hide_ */
return h;
}
/* Системная функция уменьшения zIndex существующих окон и смены классов для старого/нового активных окон. */
function f17(i,m) {
var j,b,w,p=v_w[i],z=p[10],n=$n,o=n,a=f46(51),u=f46(51);
if (z<149) {
	for (j=2; j<50; j+=1) if (w=v_w[j]) { b=w[10]; if (b==149) o=w; a[b-100]=n; if (b>z && b>102) { a[b-100]=w[0]; b--; w[10]=b; u[b-99]=b; } }
	for (j=2; j<50; j+=1) if (a[j]) a[j].style.zIndex=u[j];
	if (o!=n) f20(o,1); if(m)f38('show',i);
} f20(p); p[10]=149; p[0].style.zIndex=149; p[2].style.zIndex=149;
}
/* Системная функция увеличения zIndex существующих окон и смены классов для старого/нового активных окон. */
function f18(i) {
var j,b,p=v_w[i],z=p[10],n=$n,a=f46(51),u=f46(51);
if (z>101) {
	i=p[10]; p[0].style.zIndex=101; p[2].style.zIndex=101; p[10]=101; if (z==149) { a[49]=p[0]; u[49]=101; f20(p,1); }
	for (j=2; j<50; j+=1) if (v_w[j]) { b=v_w[j][10]; a[b-100]=n; if (b<z && b>102) { a[b-100]=v_w[j][0]; b+=1; v_w[j][10]=b; u[b-101]=b; } }
	z=0; for (j=49; j>1; j-=1) { if (a[j]) a[j].style.zIndex=u[j]; p=v_w[j]; if (p && p[10]==149) { f20(p); if(i==149)f38('show',j); z=j; } } if(!z)v01=0;
}}
/* Системная функция установки массива параметров 13-18 : left top width height buttons opacity*/
function f19(i,l,t,w,h,b,s) {
	var p=v_w[i],f=v_w[0],x,y,n=$m,a=[typeof l!=n,typeof t!=n,typeof b!=n]; f53(); x=pPW-30; y=pPH-30;
	l=f71(l); if(l<0||(!l&&a[0]))l=p[13]||f[13]||0; t=f71(t); if(t<0||(!t&&a[1]))t=p[14]||f[14]||0;
	w=f71(w); if(w<1)w=p[15]||f[15]||0; h=f71(h); if(h<1)h=p[16]||f[16]||0;
	b=f71(b); if(!b&&a[2])b=p[17]||f[17]||0; if(b<0||b>3)b=0; if(i==1&&b!=3)b=1;
	if(i>0) { s=typeof s==n?f72(s*100):0; if(s>100)s=100; if(s<1)s=p[18]||f[18]||0; if(b18||pTCH||(p[19]&&!bCH))s=0; } /* if(i==1) s=100; */
	if (w>x) w=x; if (w<100) w=100; if (h>y) h=y; if (h<50) h=50; x=pSL+pCW-w-30; y=pST+pCH-h-30;
	if (l>x) l=x; if (t>y) t=y; /* if (l<pSL) l=pSL; if (t<pST) t=pST; */
	p[13]=l; p[14]=t; p[15]=w; p[16]=h; p[17]=b; p[18]=s||$n; p[9]=0;
}
/* Смена классов и стилей для окна (!f - активное, f==1 - неактивное); v01 - дескриптор desc активного грида (1-99) */
function f20(p,f) { var t='pb_win',h='_head',b='_body',e='_panel_elem',s=f?'':'_sel'; if(!f)v01=p[19]; f=f?50:100; p[2].className=t+s; p[4].className=t+h+s; p[7].className=t+b+s; p[1].className=t+e+s; f14(p[5],f); f14(p[6],f); }
/* Системная функция корректировки положения от начала страницы/экрана для absolute/fixed */
function f21(i,x,y,f) {
	var b,l,t,w,h,p=v_w[i]; if(!p)return; b=p[2].style; l=p[13]; t=p[14]; w=pCW-p[15]-20; h=pCH-p[16]-20;
	if(f81(p[2])) { x=f71(x); y=f71(y); } else { if(f){b.position='absolute';x+=pSL;y+=pST;} else {x=l;y=t;} if(x<pSL)x=pSL; if(y<pST)y=pST; w+=pSL; h+=pST; }
	if(x>w)x=w; if(y>h)y=h; if(x<0)x=0; if(y<0)y=0; if(l!=x) { p[13]=x; b.left=x+'px'; } if(t!=y) { p[14]=y; b.top=y+'px'; } /* console.log(l+' '+x); */
}

/* Системная функция получения самого низкого zIndex из открытых окон (zIndex 102-149). */
/* function f21() { var j,o,z=150; for (j=2; j<50; j+=1) { if (v_w[j]) { v_w[j][1].style.width=va9[4]+'px'; o=v_w[j][10]; if (o<z && o>101) z=o; } } return (z-1); } */

/* Системная функция установки стилей для окна с дескриптором i. */
function f22(i,v) {
	var p=v_w[i],s=p[0].style; v=v||''; if (v!='visible' && v!='hidden') v=''; if(v){if($b){v=v=='hidden'?'none':'block';}}
	f83(p[2].style,p[13],p[14],p[15],p[16]); p[5].style.display=(p[17]<2)?'block':'none'; if(i>1) p[6].style.display=(p[17]!=1&&p[17]!=3)?'block':'none';
	if (v) {if($b)s.display=v; else s.visibility=v;} if (p[18]!=$n) f14(p[2],p[18]);
  }
/* Системная функция получения количества всех существующих окон (v_wp[2-49]). Упорядочивает элементы класса pb_win_panel_elem в элементе pb_win_panel */
function f23(f) {
	var j,ww,wh,w,h,i=0,l=1,t=1,cw=1,ch=1,k=1,p=va9; j=fId('pb__win_panel'); p[0]=f71(fGS(j,'width'))||p[0]; p[1]=f71(fGS(j,'height'))||p[1];
	for (j=2; j<50; j+=1) { if (v_wp[j])i+=1; } if(f)return i; ww=p[0]; wh=p[1]; w=p[2]; h=p[3]; p[4]=p[2]; p[5]=p[3];
	if (i>0 && w>0 && h>0 && ww>0 && wh>0) {
		if (ww>=w && wh>=h) { cw=f71(ww/(w+3))||1; ch=f71(wh/(h+3))||1; k=f72(cw*ch); } else { if (ww<w) w=ww; if (wh<h) h=wh; }
		if (i>k) { k=(i-k)/ch; if (f71(k)<k) k+=1; cw+=f71(k); if ((w+3)>f71(ww/cw)) w=f71(ww/cw)-3; p[4]=w; p[5]=h; }
		for (j=2; j<50; j+=1) if (v_wp[j]) { f83(v_wp[j][0].style,l,t,w,h); l=l+w+3; if (l>(ww-w)) { l=1; t=t+h+3; } }
		/*f21(); - старая функция */
	} return i;
}
/* Для оконной системы проверка нажатия левой кнопки мыши или пальца на значки hide и del окна. */
function f15(e) { var t=f08(e); f24(e); if(e.type=='mousedown') { return ((!t||$os!='android')&&e.which==1)?$t:$f; } return $t; }
function f25() { try { var p=v_w[1]; if (p) { p[9]+=15; if (p[9]>=50) { p[9]=50; clearInterval(p[8]); p[8]=$n; } f14(fId('pb__alert'),p[9]); } } catch(e) { clearInterval(p[8]); } }
function f26(i) { i=i||0; return (!$dB || !v_wpo || typeof v_wpo!="object" || typeof i!==$m || i<0 || i>49); }
function f29(i,m) {
	var p=v_w[i],c='pb_win_panel_elem';
	if (p) {
		p[9]+=(m==1)?p[12]:(0-p[12]); if (i==1) p[3]-=30; else p[3]=(p[3]==0)?100:0;
		if ((m==1 && p[9]>=p[18]) || (m>1 && p[9]<=0)) {
			p[9]=(m==1)?p[18]:0; clearInterval(p[8]); p[8]=$n;
			if (i>1) { f14(p[1],100); p[1].className=(m==1)?(c+'_sel'):c; }
			if (m>1) f18(i); if (m==2) f22(i,'hidden'); if (m==3) { f31(i); m=0; }
		} else {
			if (m==2) { f14(p[1],p[3]); p[1].className=(p[3]==0)?c:(c+'_sel'); }
		} if (m!=0) { f14(p[2],p[9]); if (i==1) f14(fId('pb__alert'),p[3]); }
	}
}
function f30(i) { var p=v_w[i]; if (p[8]!=$n) { clearInterval(p[8]); p[8]=$n; } if (p[9]==0 && p[18]) { f14(p[2],0); p[9]=0; p[8]=setInterval(function() { f29(i,1); },p[11]); } }
function f31(i) { var j,p=v_w[i],wp=v_wp[i]; if(p[19]) fgridDel(p[19]); for(j=1;j<10;j+=1)p[j]=$n; if (i>1) f49(wp[0],wp[1]); f49(p[0]); v_w[i]=v_wp[i]=p=wp=$n; if (i>1) f23(); }

function f38(f,i) { var p=v_w[i]; return typeof(hWC)==$h ? hWC.call($n,f,i,p[13],p[14],p[15],p[16]) : $t; }
/* Получение дескриптора активного окна (zIndex==149). От 2 до 49 */
function fWGTop() { var j,o=0; try { for (j=2; j<50; j+=1) { if (v_w[j] && v_w[j][10]==149) { o=j; break; } } return o; } catch(e) { return $u; } }

/*  Получение параметров указанного дескриптором окна
Если параметр 0, то возвращается объект панели окон : {left,top,width,height,eWidth(ширина значков),eHeight(высота значков)}
Если параметр 1-48, и окна нет, то undefined, иначе: {
	index - позиция окна относительно других (1-48) 1 если на переднем плане, 0 если свёрнуто (для окна сообщения всегда 0)
	left,top,width,height,buttons,opacity - текущие параметры окна
	caption - Содержимое заголовка окна (может быть в HTML-виде)
}
Любой возвращаемые объект содержит дополнительные поля:
count - количество существующих окон (как скрытых так и видимых)
desc - дескриптор запрашиваемого окна (0-48, 0 - панель, 1 - окон сообщения, 2-48 остальные окна)
descTop - дескриптор окна на переднем плане (не окна сообщения!)
dialog - 1 если открыто диалоговое окно, иначе 0
message - 1 если открыто окно сообщения, иначе 0
*/
function fWGt(i) {
	var p,t,d,m,c; if (f26(i)) return $u; if(i==0)p=va9; else p=v_w[i]; if (!p||!p[0]) return $u; t=fWGTop()||0; d = fId('pb__dialog') ? 1 : 0; m = fId('pb__win_1') ? 1 : 0; c=f23(1);
	return i==0 ? {
		count: c, desc : 0, descTop : t, dialog : d, message : m,
		left : f71(fGS(v_wpo,'left')),
		top : f71(fGS(v_wpo,'top')),
		width : p[0],
		height : p[1],
		eWidth : p[4],
		eHeight : p[5]
	} : {
		count: c, desc : i, descTop : t, dialog : d, message : m,
		index : p[10]<102 ? 0 : 150-p[10], /* 0 - свёрнуто, 1 - на переднем плане, 2 - следующее и т.д. до 48 */
		left : p[13],
		top : p[14],
		width : p[15],
		height : p[16],
		buttons : p[17],
		opacity : p[18]/100,
		caption : fqS((i==1?'.pb_alert':'.pb_win')+'_head_text',p[4]).innerHTML
	};
}

/* Установка размеров и положения окна, а так-же кнопок и прозрачности. zIndex и отображение не изменяется. i==0 - winPanel */
function fWSt(i,l,t,w,h,b,s) {
if (f26(i)) return $f;
if(i==0) { /* wPanel */
	w=f71(w); h=f71(h); if(w<0)w=0; if(h<0)h=0; f83(v_wpo.style,f71(l),f71(t),w,h); va9[0]=w; va9[1]=h;
} else { f19(i,l,t,w,h,b,s); f21(i,l,t); f22(i); return $t; }
}

/* уничтожение окна по его дескриптору (номеру) */
function fWDel(i,m,n) {
var z,j,k,t=v31;
try {
	if (f26(i) || i<1) return $f; p=v_w[i]; if (!p || !p[4]) return $f;
	if (n && !f38('del',i)) return $f;
	if(i==1) { for(j=t.length-1;j>=0;j-=1) { z=fqSA(t[j]); if (z) { for (k=z.length-1; k>=0; k--) z[k].tabIndex=z[k].pb_wOldTabIndex; } } } /* Восстановление .tabIndex из .pb_wOldTabIndex */
	if (p[8]!=$n) { clearInterval(p[8]); p[8]=$n; } if (p[18] && m) { f14(p[2],p[18]); p[9]=p[18]; p[3]=50; p[8]=setInterval(function() { f29(i,3); },p[11]); } else { f18(i); f31(i); }
	return $t;
} catch (e) { return $f }
}

/* уничтожение всех окон и очистка данных. */
function fWClear() {
var i=0,j,n=$n; try {
	if (f26()) return $f;
	for (i=2; i<50; i+=1) {
		if (v_w[i]) { p=v_w[i]; if (p[8]!=n) clearInterval(p[8]); for(j=1;j<10;j+=1)p[j]=n; $dB.removeChild(p[0]); p=n; v_w[i]=n; }
		if (v_wp[i]) { v_wp[i][1].removeChild(v_wp[i][0]); v_wp[i]=n; }
	} return $t;
} catch (e) { return $f }
}

/* изменение текста заголовка и кнопок заголовка для указанного окна (1-49). zIndex и отображение не изменяется. */
function fWHead(i,t) {
var p; try {
	if (f26(i)||i<1) return $f; p=v_w[i]; if (!p || !p[0] || (i!=1&&!p[1]) || !p[4]) return $f; t=t||''; fId(i==1?'pb__alert_head_text':('pb__win_head_text_'+i)).innerHTML=t; return $t;
} catch (e) { return $f }
}

/* изменение HTML содержимого для указанного окна (1-49). zIndex и отображение не изменяется. */
function fWBody(i,t) {
var p; try {
	if (f26(i)||i<1) return $f; p=v_w[i]; if (!p || !p[0] || (i!=1&&!p[1]) || !p[4]) return $f; t=t||''; p[7].innerHTML=t; return $t;
} catch (e) { return $f }
}

/* Сделать окно активным. Окно автоматически проявляется, если было скрыто. */
function fWShow(i) {
var p; try {
	if (f26(i)) return $f; if (i==0) { v_wpo.style.display='block'; f23(); return $t; }
	p=v_w[i]; if (!p || !p[0] || !p[1]) return $f;
	f22(i,'visible'); f17(i); f30(i); return $t;
} catch (e) { return $f }
}

/*  Закрыть (свернуть) окно. zIndex окна становится 101 */
function fWHide(i,m,n) {
var p; try {
if (f26(i)) return $f; if (i==0) { v_wpo.style.display='none'; return $t; }
	p=v_w[i]; if (!p || !p[0] || !p[1]) return $f;
	if (n && !f38('hide',i)) return $f;
	if (p[8]!=$n) { clearInterval(p[8]); p[8]=$n; } if (p[18] && m) { f14(p[2],p[18]); p[9]=p[18]; p[3]=0; p[8]=setInterval(function() { f29(i,2); },p[11]); } else { f18(i); f22(i,'hidden'); }
	return $t;
} catch (e) { return $f }
}

/* ***************************************************************************************
	D I A L O G
**************************************************************************************** */
/*
Создаёт полупозрачный слой и поверх него DIV - диалог.
ht - html заголовка диалога
bt - html тела диалога
w - width
h - height
f - function (handler)
b - background для слоя (#hhhhhh или rgba(0, 0, 0, 0.3))
o - opacity для слоя (0-1) или o==false (не тип number)
y - zIndex (по-умолчанию 251, минимум 151, максимум 295)
s :	дополнительный текстовый селектор для получения коллекции (s+a[j]) - элементы для сохранения/восстановления .tabIndex, по умолчанию - ''
	v25 :	ссылка на DIV-диалог
	v26 :	ссылка на DIV-слой (layer) под диалогом
	v27 :	Дополнительный текстовый селектор для fCreateDialog() и fRemoveDialog()
	v28 :	handler на callback function для fRemoveDialog(e)
*/
function fCreateDialog(ht, bt, w, h, f, b, o, y, s) {
var p, l, t, i, j, a=v31, z='</div>',c='<div class="pb_dialog_',r='="if('+$+'._(15)(event))'+$+'._(65)(event)"'; s=s||''; v27=s; if(!b)o=o||0.5; b=b||'#808080'; if (b18&&b.indexOf('rgba')>=0){b="#808080";o=0.5}
if (v26 || v25) return $f; v28=f60(f); y=f71(y); y=y||251; if(y<151)y=151; if(y>295)y=295; v26 = fAddL(0,b,y,0,o); l=f71(pCW/2-w/2); t=f71(pCH/2-h/2); if(l<0)l=0; if(t<0)t=0; p = $d.createElement('div');
for(j=a.length-1;j>=0;j-=1) { o=fqSA(s+a[j]); if (o) { for (i=o.length-1; i>=0; i--) { o[i].pb_dOldTabIndex=o[i].tabIndex;o[i].tabIndex="-1"; } } } /* Сохранение .tabIndex в .pb_dOldTabIndex */
p.className='pb_dialog'; p.id = 'pb__dialog'; b = p.style; f83(b,l,t,w,h); s='="'+$+'._(48)(event,\'pb__dialog\')"';
i='"'+$md; s = c+'head'+i+s+$ts+s+'>'+c+'head_text">'+(ht||'')+z+c+'head_del'+i+r+$ts+r+'>'+z+z;
s += c+'body" id="pb_idBodyDialog">'+(bt||'')+z+z;
$dB.appendChild(p); if(!f81(p)) { b.position='absolute'; b.left=l+pSL+'px'; b.top=t+pST+'px'; }
p.innerHTML = s; if(fGS(p,'z-index')<y)p.style.zIndex=y; v25 = p; return p;
}
/* Удаление DIV - диалога. */
function fRemoveDialog(e) {
	var j, i, o, a=v31,s=v27||''; v06=0; if(e&&(typeof v28==$h))v28.call($n,e||$w.event);
	for(j=a.length-1;j>=0;j-=1) { o=fqSA(s+a[j]); if (o) { for (i=o.length-1; i>=0; i--) { o[i].tabIndex=o[i].pb_dOldTabIndex; } } }  /* Восстановление .tabIndex из .pb_dOldTabIndex */
	if (v25) { $dB.removeChild(v25); v25=$u; }
	if (v26) { fRemoveL(v26); v26=$u; }
}

/* ***************************************************************************************
	C O M B O B O X
**************************************************************************************** */
/*
	.pb_CB - массив подмассивов у каждого из combobox-ов [ descriptor, obj_parent, pb__comboBox, pb__cbImage, pb__cbSelect, pb__cbInput, array_values, handler, descAnimation ]
	v29 - { t: time, s: step } для анимации раскрытия списка combobox
	hCC :	handler на callback function для combobox Пример вызова: hCC(event, descriptor, obj_parent, id_combobox, id_img, id_select, id_input, arrayValues, inputValue, typeEvent) - где value - текущее занчение input, type - тип события event
*/
/*
Добавление и инициализация (присвоение дескриптора) новому HTML-элементу класса .pb_combobox
	input:
	o (obj) - родительский объект
	v (value) - строковое значение для элемента input
	a (array) - список строк со значениями (может содержать корректные HTML-строки)
	h (handler) - callback
	l = maxLength для input
	t - время анимации раскрытия списка в миллисекундах
	k - шаг анимации в миллисекундах
	
	output: descriptor (от 1)
*/
function fcbNew(o,v,a,h,l,t,k) {
	var i,f,l,d=f56(),c='pb__comboBox'+d,m='pb__cbImage'+d,s='pb__cbSelect'+d,n='pb__cbInput'+d,p=fId(n)||'',b='<div class="pb_c',r='</div>',q='" id="';
	o=fId(o); v=v||''; l=l||0; if(!o || p || typeof(v)!=$s || !fisA(a))return $f; f = f60(h,v29.p) || hCC;
	h=b+'ombobox'+q+c+'"><input type="text'+q+n+'"'+(l>0?(' maxLength="'+l+'"'):'')+' value="'+v+'" class="pb_cbinput" />';
	h+=b+'bimage'+q+m+'">'+r+b+'bselect'+q+s+'" style="display:none;">'; l=a.length;
	for (i=0; i<l; i+=1) { a[i]=''+a[i]; h+=b+'boption'+q+'pb__cbOption'+d+'_'+i+'">'+a[i]+r; }
	o.innerHTML=h+r+r; f67(t,k);
	fId(c).pb_CB = [ d, o, c, m, s, n, a, f, -1 ]; c=fqSA('.pb_cb_option',o); f57(p,fId(m),c,fId(s),d);
	return d;
}
/* fcbChange() - любой из параметров может отсутствовать
Обновление выпадающего списка комбобокса o - дескриптор d или ссылка на объект pb_combobox, a - массив с option, h - новый handler, m - maxLength для input, f - если 1, то список раскрывается, если 2, то закрывается, иначе остаётся как был */
function fcbChange(o,a,h,m,f,t,k) {
	var i,d,s,r,c='',l; f67(t,k); m=m||0; f=f||0; o=f56(o); r=o.pb_CB; if(!r)return $f;
	i=fId(r[5]); s=fId(r[4]); if(!s||!i||!fId(r[3]))return $f; if (m&&typeof m==$m&&m>=0){i.maxLength=m>100?m:100} r[7] = f60(h,v29.p) || hCC;
	d=r[0]; a=fisA(a)?a:0; if(a) {r[6]=a; l=a.length; for (i=0; i<l; i+=1) { c+='<div class="pb_cb_option" id="pb__cbOption'+d+'_'+i+'">'+a[i]+'</div>'; } s.innerHTML=c; c=fqSA('.pb_cb_option',s); }
	f57('','',c,o);
	if(d){ s=s.style; if((f>0&&f<3)||s.display=='block'){fClearAn(r[8]); f58(o,f==2?2:1);} }
	return $t;
}
function f55(e) {
	var i,p,a,o,v,d,h='',t='input',c='pb_cb_option'; p=e.target||e.srcElement;
	if(f82(p.className).indexOf(c)!=-1)t='option'; o=(t=='input') ? p.parentNode : p.parentNode.parentNode;
	/*if (t=='input'&&e.type=='keypress'&&(e.keyCode==13||e.keyCode==27)) { f58(o,2); return; }*/
	a=o.pb_CB; d=a[0]; i=fId(a[5]); if(t=='option')i.value=p.innerHTML; v=i.value;
	if(!a[7]) a[7]=hCC; if(a[7]) t = a[7].call(o,e,d,a[1],a[2],a[3],a[4],a[5],a[6],v,t); /* вызов calback-функции */
	if (t) { /* Обновление списка выбора pb__cbSelect + d */
		t=a[6]; v=t.length; for (i=0; i<v; i+=1) { h+='<div class="'+c+'" id="pb__cbOption'+d+'_'+i+'">'+t[i]+'</div>'; }
		t=fId(a[4]); t.innerHTML=h; h=fqSA('.'+c,t); f57('','',h,o);
	}
}
function f56(o) {
	var i; o=o||0; if(o) { o=fId((typeof o==$m)?('pb__comboBox'+o):o); return (o&&o.pb_CB&&fId(o.pb_CB[5])&&o.className.indexOf('pb_combobox')>=0) ? o : $u; }
	for (i=1; i<1000; i+=1) { if(!fId('pb__cbInput'+i)) return i; } return 0;
}
function f67(t,k) { if(!t||!k||typeof t!=$m||typeof k!=$m)return; if(t<100)t=100; if(k<20)k=20; if(t<k) k=t; v29 = { t: t, s: k, p:v29.p }; }
function f57(p,m,u,o) {
	var i, l=u?u.length:0, a=['keyup','keypress','keydown','change'], f1=function(e){f08(e);f55(e)}, f2=function(e){f08(e);if(e.which==1){f55(e);f58(o,2)}};
	if (p) {for (i=a.length-1; i>=0; i-=1) pEV.add(p,a[i],f1); pEV.add(p,'focus',function(){f58(o,1)}); pEV.add(p,'blur',function(){f58(o,2)});}
	if (m) { pEV.add(m,'click',function(){f58(o)}); }
	for (i=0; i<l; i+=1) pEV.add(u[i],'mousedown',f2);
}
function f58(o,f) {
	var n=$n, p=fId(o.pb_CB[4]), s=p.style, c=s.display, h=f71(fGS(p,'maxHeight'))||150;f=f||0;
	if(f==1&&c=='block')return; if(f!=2&&c=='none'){s.display='block';s.height='0px';} if(p.scrollHeight<h)h=p.scrollHeight;
	o.pb_CB[8]=fAHeight(p,v29.t,v29.s,0,h,n,n,n,n,n,n,n,n,n,n,function(z,i){if(z!='start'&&(c=='block'||f==2)){s.display='none';s.height='0px';fClearAn(i)}});
}
/*
Поиск элементов класса .pb_combobox и установка и навешивание обработчиков change, keydown, kwypress, keyup, blur, focus на внутренний input
Можно вызывать несколько раз - если элемент существует и уже инициализирован (имеет дескриптор), то ничего не происходит.
Автоматически Вызывается при инициализации.
handler - если надо вызвать собственную функцию (если строка, то создаётся новая функция с содержимым строки).
  Если handler не указан, то вызывается функция по-умолчанию hCC, в которой this указывает на input с id=="id_input"
  Функция вызывается как handler(event, descriptor, obj_parent, id_combobox, id_img, id_list, id_input, array_values, value, type) - где value - текущее занчение input, type - откуда событие ("input" или "option")
input:
	o - объект || document,  где искать элементы класса .pb_combobox
	s - дополнительный текстовый селектор для поиска элементов класса .pb_combobox :  s + '.pb_combobox'
	t - время анимации раскрытия списка в миллисекундах
	k - шаг анимации в миллисекундах
output:
	descArray[] - массив с номерами дескрипторов для новых найденных и инициализированных комбобоксов
*/
function fcbUpdate(h,o,s,t,k) {
var i,j,c,p,l,d,u,m,g,a,x=[],y=0; s=s||''; o=fId(o)||$d; c=fqSA(s+'.pb_combobox',o); f67(t,k);
if (c) {
	h = f60(h,v29.p) || hCC; l=c.length;
	for (i=0; i<l; i+=1) {
		p=fqS('input',c[i]); g=fqS('.pb_cb_select',c[i]); m=fqS('.pb_cb_image',c[i]); if(p && g && m) {
		  if(!p.id || p.id.substr(0,11)!='pb__cbInput') {
			d=f56(); p.id='pb__cbInput'+d; j='pb_cbinput'; if(p.className.indexOf(j)==-1)p.className=fTrim(p.className)?(p.className+' '+j):j; o=p.parentNode; g.id='pb__cbSelect'+d;
			c[i].id='pb__comboBox'+d; m.id='pb__cbImage'+d; u=fqSA('.pb_cb_option',g); g.style.display='none'; a=[]; x[y]=d; y+=1;
			if(u) { for (j=0; j<u.length; j+=1) { a[j]=u[j].innerHTML; u[j].id="pb__cbOption"+d+'_'+j; } }
			c[i].pb_CB = [ d, o, c[i].id, m.id, g.id, p.id, a, h, -1 ]; f57(p,m,u,c[i]);
		  } else { c[i].pb_CB[7]=h; }
		}
	}
}
return x;
}

/* ***************************************************************************************
	К А Л Е Н Д А Р Ь
**************************************************************************************** */
/*
s - Дата - объект типа Date или строка вида "yyyymmdd" или "yyyy-mm-dd" или "dd.mm.yyyy" или "mm/dd/yyyy"
h - handler для вызова функции после выбора даты ( function(event, oper (0-2), obj_date,'yyyymmdd','yyyy-mm-dd','dd.mm.yyyy','mm/dd/yyyy') ) - при вызове дата всегда текущая (отмеченная на календаре)
x (min) - миниимальная дата (строка, например "0001-01-01" или "01.01.1900" или "01/01/1900" или "19000101")
y (max) - максимальная дата (строка, например "2099-12-31" или "31.12.2099" или "12/31/2099" или "20991231")
l,t - координаты вывода окна относительно л.в.угла экрана
f - стартовый вид календаря (0 - дни/месяцы, 1 - месяцы/годы, 2 - годы/века)
r - 1 - RU, 0 - EN
	v11.l :	Ссылка на слой под JS-Календарь
	v11.d :	Ссылка на div - JS-Календарь
	v11.h :	Ссылка на функцию (h)
	v11.a :	[текущая cur (yyyymmdd), мин (yyyymmdd), макс (yyyymmdd), today yyyy, today mm, today dd, cur y, cur m, cur d]
	v11.r :  0 - EN, 1 - RU
	v11.s :  Статус календаря (0 - дни, 1 - месяцы, 2 - годы)
	v11.t : '<table class="pb_cl_table"><tbody>'
*/
function fCalendar(s,x,y,l,t,h,f,r) {
	var i,j,p,d,m,g,c=f59(new Date()),a=[c,'00010101','24991231',c.substr(0,4),c.substr(4,2),c.substr(6)],v='px;width:',u='head_ym_lr" style="';f=f71(f);f=f<0||f>2?0:f;r=f71(r);
	if (fisD(s))s=f59(s); if (fisD(x))x=f59(x); if (fisD(y))y=f59(y); if(typeof s!=$s || typeof x!=$s || typeof y!=$s) return $f;
	s=f36(s)||a[0]; x=f36(x)||a[1]; y=f36(y)||a[2]; if(s<x)s=x; if(s>y)s=y; h=f60(h,'e,oper,date,f1,f2,f3,f4'); if(!h||x>=y) return $f;
	a = [s,x,y,a[3],a[4],a[5],s.substr(0,4)-0,s.substr(4,2)-1,s.substr(6)-0]; v11 = { h : h, a : a, r : r, s : f?f-1:0, t : '<table class="pb_cl_table"><tbody>' };
	for (i=2;i>=0;i-=1) {
		j=a[i]; d=f71(j.substr(6,2)); m=f71(j.substr(4,2)); g=f71(j.substr(0,4));
		if (d>0&&m>0&&g>0&&m<13&&d<32) { c=new Date(); c.setFullYear(g); c.setMonth(m-1,1); a[i]=c; f37(d,i); c=a[i]; if (j!=f59(c)) a[i]=$u; }
	} if (!a[0]||!a[1]||!a[2])return $f; else { a[1]=a[1]||a[0]; a[2]=a[2]||a[0]; if(a[2]<a[1])a[2]=a[1]; if(a[0]<a[1])a[0]=a[1]; if(a[0]>a[2])a[0]=a[2]; }
	c=v31; for(j=c.length-1;j>=0;j-=1) { h=fqSA(c[j]); if (h) { for (i=h.length-1; i>=0; i--) { h[i].pb_cOldTabIndex=h[i].tabIndex;h[i].tabIndex="-1"; } } } /* Сохранение .tabIndex в .pb_cOldTabIndex */
	v11.l = fAddL(0,'#808080',298,0,.3); x=pSL; y=pST;
	l=f71(l)?l:x; i=x+pCW-300; if(l>i)l=i; if(l<x)l=x;
	t=f71(t)?t:y; i=y+pCH-330; if(t>i)t=i; if(t<y)t=y;
	p = $d.createElement('div'); p.className='pb_calendar'; p.id='pb__cl_main'; s=p.style; s.position='absolute'; s.display='block'; f83(s,l,t,270,300); s.zIndex=298;
	s='="'+$+'._(48)(event,\'pb__cl_main\')"'; j='<div class="pb_cl_'; s=j+'head"'+$md+s+$ts+s+'>'; g='<div id="pb__cl_';
	if (r) { s+='Сегодня:'+' '+a[5]+' '+vMR2[a[4]-1]+' '+a[3]; } else { s+='Today:'+' '+vMES[a[4]-1]+' '+a[5]+','+' '+a[3]; } c='="if('+$+'._(15)(event))'+$+'._(34)(event'; x='="'+$+'._(68)(event,'; i='</div>'; m='" onclick';
	s+=i+j+'head_del"'+$md+c+')"'+$ts+c+')">'+i+g+'ym'+m+x+'4)">'+f68('',1);
	s+=i+j+u+'left:0'+m+x+'2)">«'+i+j+u+'right:0'+m+x+'3)">»'+i+g+'body">';
	s+=(!f?f35():'')+i+j+'bottom'+m+c+',1)" style="left:0">Ok'+i+j+'bottom'+m+c+',-1)" style="right:0">'+(r?'Очистить':'Clear')+i;
	p.innerHTML = s; $dB.appendChild(p); v11.d = p; pEV.add(v11.l,'click',f34); if(f)setTimeout(function(e){f68(e,4)},20);
	return $t;
} function f34(e,f) { /* f == 0 : отмена выбора даты, 1 : установка, -1 : сброс (очистка) даты. Дата всегда текущая (отмеченная на календаре) */
	var j, o,y,m,d, a=v11.a; f=f||0; y=f59(a[0]); m=y.substr(4,2); d=y.substr(6); y=y.substr(0,4);
	v11.h.call($n,e||$w.event,f,a[0],y+m+d,y+'-'+m+'-'+d,d+'.'+m+'.'+y,m+'/'+d+'/'+y); /* Дата всегда текущая (отмеченная на календаре) */
	if (v11) { $dB.removeChild(v11.d); pEV.remove(v11.l,'click',f34); fRemoveL(v11.l); v11=$u; }
	a=v31; for(j=a.length-1;j>=0;j-=1) { o=fqSA(a[j]); if (o) { for (i=o.length-1; i>=0; i--) { o[i].tabIndex=o[i].pb_cOldTabIndex; } } }  /* Восстановление .tabIndex из .pb_cOldTabIndex */
} function f35() { /* Вывод дней текущего месяца */
	var	d,g,t=f36(),k,n,l,r=v11.r,c,j=f36(1),i=f36(2),m=j[3],m1=j[4],m2=j[5],v=f46(32); t=t.y&&t.m?1:0; for(k=0;k<32;k+=1)v[k]=t;k=0; /* Проверка на вхождение даты в мин./макс. Весь месяц. */
	d=m.getDate(); f37(1); g=m.getDay(); f37(31); m=m.getDate(); if(g==0)g=7; g+=1-r; if(g>7)g=1; /* d - тек. число, m - последнее число месяца, g - позиция 1 числа на календаре с учётом EN / RU */
	if(t){ if(i[0]==i[1] && j[0]==j[1]) {l=m1.getDate();for(n=0;n<l;n+=1)v[n]=0;if(d<l)d=l} if (i[0]==i[2] && j[0]==j[2]) {l=m2.getDate();for(n=l+1;n<32;n+=1)v[n]=0;if(d>l)d=l} } /* Проверка на вхождение даты в мин./макс. Внутри месяца */
	f37(d); t=v11.t+'<tr>'; for (l=0;l<7;l+=1) { t+='<th>'+(r?vDR[l]:vDE[l])+'</th>'; } t+='</tr>'; /* Шапка месяца с учётом EN / RU */
	for(l=1;l<7;l+=1) { t+='<tr>';
		for(n=1;n<8;n+=1) {
			if(k==0&&l==1&&n==g){k=1;g=9}
			t+='<td'+(k==0?'':(' class="pb_day'+(k==d&&v[k]?'sel"':(v[k]?'"':'no"')))); c='="'+$+'._(68)(event,0,\''+k+'\')"';
			t+=(k==0?'>&nbsp;':((v[k]?('" ondblclick="'+$+'._(34)(event,1)" onclick'+c+'>'):'cursor:default;">')+k))+'</td>'; if(g==9)k+=1; if(k>m){k=0;g=10;}
		} t+='</tr>';
	} t+='</tbody></table>'; return t;
} function f36(d) {
	var a,i,j; if (!d || typeof d != $s) {
		a=v11.a; if (d) { return d==1 ? [a[0].getMonth(),a[1].getMonth(),a[2].getMonth(),a[0],a[1],a[2]] : [a[0].getFullYear(),a[1].getFullYear(),a[2].getFullYear(),a[0],a[1],a[2]]; }
		j=f36(1); i=f36(2); return { y: (i[0]<i[1] || i[0]>i[2]) ? 0 : 1, m: ((i[0]==i[1] && j[0]<j[1]) || (i[0]==i[2] && j[0]>j[2])) ? 0 : 1 }; /* Проверка на вхождение даты в мин./макс. { Год, Месяц } */
	}
	d=(d.length==8)?d:((d.indexOf('-')==-1)?(d.substr(6,4)+((d.indexOf('/')==-1)?(d.substr(3,2)+d.substr(0,2)):(d.substr(0,2)+d.substr(3,2)))):(d.substr(0,4)+d.substr(5,2)+d.substr(8,2)));
	d='000'+f71(d); j=d.length; if(j>8)d=d.substr(j-8,8); return (d.length==8)?d:$f;
} function f37(d,n) { var i,m,t; n=n||0; t=v11.a[n]; if(d&&d>28) { m=t.getMonth(); for(i=d;i>27;i-=1) { t.setDate(i);if(m==t.getMonth()){m=i;break}else t.setMonth(m); } } else m=(d&&d>0)?d:1; v11.a[n].setDate(m); }
function f59(d) { var y='000'+d.getFullYear(),l=y.length,m=(d.getMonth()+1),d=d.getDate(); if(l>4)y=y.substr(l-4,4); if(m<10)m='0'+m; if(d<10)d='0'+d; return y+m+d; } /* Возврат строки yyyymmdd из объекта даты */
function f68(e,f,k) {
	var x,z,m1,m2,s=v11.s,r=v11.r,a=v11.a,y=a[6],m=a[7],d=a[8],b=fId('pb__cl_body'),b2=fId('pb__cl_ym'); f=f||0; k=k||0;k-=0;
	if(!f) { if(k>0) { f37(k); a[8]=a[0].getDate(); b.innerHTML=f35(); } else b2.innerHTML = a[6]; }
	if (f>0&&f<4) {
		if (f==1) { s = r ? vMR1[a[7]] : vMEN[a[7]]; s+=' '+a[6]; return s; }
		else  { /* « Листалка » */
			x=a[1].getFullYear(); z=a[2].getFullYear(); if(s==2&&(z-x)<101)return; m1=a[1].getMonth(); m2=a[2].getMonth();
			if (s==0) { if((f==2&&y<=x&&m<=m1)||(f==3&&y>=z&&m>=m2))return; m+=f>2?1:-1; if(m<0){m=11;y-=1;} if(m>11){m=0;y+=1;} a[6]=y;a[7]=m; a[0].setFullYear(y); a[0].setMonth(m,1); f37(d); b.innerHTML=f35(); b2.innerHTML=f68('',1); } /* Месяцы */
			if (s==1) { if((f==2&&y<=x) || (f==3&&y>=z))return; y+=f>2?1:-1; a[6]=y; a[0].setFullYear(y); b.innerHTML=f69(); f68('',0); } /* Годы */
			if (s==2) { x=Math.ceil(x/100)*100; z=(Math.floor(z/100))*100; if((f==2&&y<=x) || (f==3&&y>=z))return; y+=f>2?100:-100; a[6]=y; a[0].setFullYear(y); b.innerHTML=f70(); }  /* Века (по 1-100 лет) */
		}
	} if (f==4) { if(s==0) { v11.s=1; b.innerHTML=f69(); f68('',0); } if(s==1) { v11.s=2; b.innerHTML=f70(); } }
	if(f==5) { a[7]=k; a[0].setMonth(k,1); v11.s=0; f37(d); b2.innerHTML=f68('',1); b.innerHTML=f35(); }
	if(f==6) { a[6]=k; a[0].setFullYear(k); v11.s=1; b.innerHTML=f69(); f68('',0); }
	return;
} function f69() { /* Вывод 12 месяцев текущего года */
	var i=f36().y,j,n=0,r=v11.r,t=v11.t,m=f36(1),y=f36(2),v=f46(12);
	for(j=0;j<12;j+=1)v[j]=((y[0]==y[1]&&j<m[1]) || (y[0]==y[2]&&j>m[2]))?0:i; /* Проверка на вхождение даты в мин./макс. Месяцы. */
	for(i=1;i<4;i+=1) { t+='<tr>';
		for(j=1;j<5;j+=1) {
			t+='<td class="pb_day'+(v[n]?(n==m[0]?'sel':''):'no')+'"'+(v[n]?(' onclick="'+$+'._(68)(event,5,\''+n+'\')"'):'')+'>'+(r?vMR1[n].substr(0,3):vMES[n])+'</td>'; n+=1;
		} t+='</tr>';
	} t+='</tbody></table>'; return t;
} function f70() { /* Вывод min-max лет или 100 лет текущего столетия */
	var i,j,u,v,n,a=v11.a,y=a[0].getFullYear(),b=a[1].getFullYear(),e=a[2].getFullYear(),r=v11.r,c=v11.t,t='<div style="position:absolute;top:0;right:0;bottom:0;left:0;',q='pb__cl_ym';
	if(e-b<101) {
		t+='">'+c; fId(q).innerHTML=(r?'годы ':'years ')+b+'-'+e; n=b; while(n%5!=0)n-=1; u=e+1; while(u%5!=0)u+=1; r=f72((u-n)/5); u=1; /* n - стартовый год, u r - номера стартовой и конечной строки */
		v=f46(101); j=n+r*5; for(i=n; i<j; i+=1) v[i]=(i<b||i>e)?0:1; /* Подготовка массива с годами (доступен/недоступен) */
		while((r-u)<2)r+=1; /* Оптимизация вывода минимум 15 лет */
	} else {
		t+='overflow-y:scroll">'+c; u=Math.ceil(a[6]/100); fId(q).innerHTML=(r?'век ':'century ')+u; n='000'+(u-1)*100;j=n.length;if(j>4)n=n.substr(j-4,4); n=n-0+1;
		v=f46(101); j=n+100; for(i=n; i<j; i+=1) v[i]=(i<b||i>e)?0:1; /* Подготовка массива с годами (доступен/недоступен) */
		u=1;r=20; c=n+100; while((n+4)<b){n+=5;u+=1}; while(c-5>e){c-=5;r-=1};  /* Удаление верхних и нижних строк с недоступными годами */
		while((r-u)<2) { if(u>(19-r))r+=1; else u-=1; } /* Оптимизация вывода минимум 15 лет в веке */
	}
	for(i=u; i<=r; i+=1) { t+='<tr>';
		for (j=1; j<6; j+=1) {
			t+='<td class="pb_day'+(v[n]?(n==y?'sel':''):'no')+'"'+(v[n]?(' onclick="'+$+'._(68)(event,6,\''+n+'\')"'):'')+'>'+n+'</td>'; n+=1;
		} t+='</tr>';
	} t+='</tbody></table></div>'; return t;
}

/* ***************************************************************************************
	S P I N N E R
**************************************************************************************** */
/*
	o - объект input type="text" или его текстовое id
	v - тип операции (0 - только проверка числа, иначе дополнительно прибавляется значение, в т.ч. отрицательное)
	x = minValue (от 0)
	y - maxValue (от 0)
	h - callback функция. вызывается как h(value), при этом this указывает на объект o
*/
function fSpinner(o,v,x,y,h) {
	var i; o=fId(o); v=f71(v); x=f71(x); y=f71(y);
	if(!o||x>y)return $f; h=f60(h,'value'); i=(f71(o.value)+v).toString(); if(i<x)i=x; if(i>y)i=y; o.value=i; if(h) h.call(o,i);
	return $t;
}

/* ***************************************************************************************
	P H O N E
**************************************************************************************** */
/*
	fPhone - вызывается при событии onfocus на input - элементе. 10-значный телефонный номер. Ввод.
	o - объект input type="text" или его текстовое id
	h - callback функция. вызывается как h(e,value), при этом this указывает на объект o
	o.pb_PHh - callback
	o.pb_PHe - устанавливается когда навешиваются обработчики
*/
function fPhone(o,h) {
	var i,p; o=fId(o); if(!o)return; o['maxLength']=16; h=f60(h,'e,value'); if(h)o.pb_PHh=h;
	p=f44(o); f40(o); f45(o,p); /* наложение маски и установка курсора */
	if(!o.pb_PHe) { pEV.add(o,'keydown',f39); pEV.add(o,'change',f41); pEV.add(o,'blur',f41); o.pb_PHe=1; }
} function f39(e) { /* Обработка keydown для input phone */
	var o,v,c,p; e=e||$w.event; o=e.target||e.srcElement; v=o.value; c=e.keyCode; if(c==10||c==13||c==27){f41(e);return $f;}
	p=f44(o); if (c==8&&p>0) { p=(p==3||p==8)?(p-1):p; if(p>1) v=v.substr(0,(p==4||p==9)?p-3:p-1)+v.substr(p); p-=(p==4||p==9)?3:1; }
	if (c==46&&p<16) { p=(p==0||p==3||p==8)?(p+1):p; v=v.substr(0,p)+v.substr((p==2||p==7)?p+3:p+1); }
	if (((c>47&&c<58)||(c>95&&c<106))&&p<16) { p=(p==3||p==8)?(p+1):p; v=v.substr(0,p)+(c>95?c-96:c-48)+v.substr(p); p=(p<2)?4:((p<5)?5:((p==6)?9:((p==7)?10:(p+1)))); }
	if (c==8||c==46||(c>47&&c<58)||(c>95&&c<106)||(c>32&&c<41)) { o.value=v; f40(o); f45(o,p); if(c<33||c>40) return $f; }
} function f40(o) { /* формирование номера в маске как +N (NNN) NNNNNNN*/
	var i,l,v=o.value.split(''); l=v.length; for(i=0; i<l; i+=1) {if(v[i]!='+'&&v[i]!=' '&&v[i]!='('&&v[i]!=')'&&isNaN(parseInt(v[i],10)))v[i]='_'} v=v.join('');
	v=v.replace(/\+/g,'').replace(/\ /g,'').replace(/\(/g,'').replace(/\)/g,'')+'_____________'; v='+'+v.substr(0,1)+' '+'('+v.substr(1,3)+')'+' '+v.substr(4,7);
	o.value=v;
} function f41(e) { var o; e=e||$w.event; o=e.target||e.srcElement; f40(o); /* if(v.indexOf('_')!=-1) v=''; o.value=v; */ if(o.pb_PHh) { o.pb_PHh.call(o,e,o.value); delete o.pb_PHh; } }

/* ***************************************************************************************
	G R I D
**************************************************************************************** */
/*
- Создать новый грид
	d - ID родительского HTML-элемента
	z - дополнительные произвольные стили для любых вложенных HTML-элементов
	hs - одномерный массив стилей для заголовков колонок ['wifth:100px; height:30px; font:bold 13px arial; text-align:center; line-height:16px;','text-align:left; line-height:30px;background:#e0e0e0;', ...]
		0 элемент - общие стили для всех заголовков, следующие элементы - персональные стили для заголовков колонок
	bs - одномерный массив стилей для колонок ['wifth:100px; height:30px; font:normal 13px arial; text-align:center; line-height:16px;','text-align:left; line-height:30px;background:#eeeeee;', ...]
		0 элемент - общие стили для всех колонок, следующие элементы - персональные стили для колонок
	h - handler callback-функции. Вызывается как h(e,desc,type,row,col,objCell), this указывает на Грид (класса pb_g)
	dt - двумерный массив данных [строка][колонка] (HTML-код), 0 строка - содержимое заголовка, 0 элементы строк -  служебные (не выводятся).
	a - флаг анимации окон с гридом, если не указано или 0, то по-умолчанию анимировать прозрачность, если указан - строго без анимации прозрачности.

- Задать/сменить стили для Грида
- Загрузить данные в Грид (двумерный массив с HTML-кодами [строка][колонка])
- Удалить грид
- Активировать Грид ( будут работать клавиши навигации для Грида )
- ДеАктивировать Грид ( не будут работать клавиши навигации для Грида )

va1 - массив текстовых ID созданных Гридов
v01 - дескриптор Грида с поддержкой keyDown в окне 1-49 (1 - wAlert)
v06 - дескриптор Грида с поддержкой keyDown в окне диалога pb__dialog
v07 - дескриптор грида в любом другом блоке с позицией relative или absolute или fixed
.pb_Grid - Объект настроек и данных для Грида. { desc, wDesc, parent, parentId, self, selfId, handler, cell, ss, cs, rows, cols, row, col, sTop, sLeft }
*/

/* Создание нового Грида id - дескриптор окна (от 2 до 49) или ID родительского элемента */
function fgridNew(d,z,hs,bs,h,dt,a) {
	var i,j,k,p,G,c,w=0,s='pb__win_body_',m=fisA(dt)?dt.length*(dt[0].length-1):0; a=!!a;
	if(typeof d==$m)d=s+d; d=fId(d); k=f73(); if(!d||!k)return $u; /* нет найден род.элемент или все дескрипторы для Гридов заняты */
	if(d!=$dB) for (i=2;i<50; i+=1) { if(fId(s+i)) { p=d; while(p!=$dB) {if (p.id==(s+i)){w=i; v_w[i][19]=k; if(a||m>10000||(!bCH&&m>1000)||pTCH||b18)v_w[i][18]=$n; i=50;break;} else p=p.parentNode; } } }
	if(!p||p.id!=s+w) { s='pb__dialog'; p=d; while(p!=$dB) {if(p.id==s)break; p=p.parentNode;} if(p&&p.id==s)v06=k; else v07=k; }
	s='pb__grid_'+k; c='"'+$+'._(75)(event,'+k+')" '; va1[k]=s; fgridS(k,z,hs,bs); /* Создать персональный тег <style> со стилями для нового Грида */
	d.innerHTML='<div class="pb_grid" id="pb__grid'+k+'" onscroll="'+$+'._(74)(event,'+k+')"><div id="'+s+'" class="pb_g"'+$md+'='+c+$ts+'='+c+'onclick='+c+'ondblclick='+c+'>'+(fgridDt(k,dt)||'')+'</div></div>';
	G=fId(s); G.pb_Grid={ desc: k, wDesc: w, parent: d, parentId: d.id, self: G, selfId: s, handler: f60(h,'e,type,desc,row,col,objCell') }; f76(k,G.pb_Grid,m?dt.length:0,m?dt[0].length:0);
	return k; /* Дескриптор Грида */
}

/* Сменить стили Грида. d - дескриптор */
function fgridS(d,h,hs,bs) {
	var i,l,a,s;h=h||'';
	a=hs; if(fisA(a)) {
		l=a.length; s='#pb__g_h'+d+'_';
		for (i=1; i<l; i+=1) h+=s+i+','; h=h.substr(0,h.length-1)+'{'+a[0]+'}'; /* Общие стили для ячеек заголовка */
		for (i=1; i<l; i+=1) h+=s+i+'{'+a[i]+'}'; /* Персональные стили для ячеек заголовка */
	} a=bs; if(fisA(a)) {
		l=a.length; s='.pb_g_b'+d+'_';
		for (i=1; i<l; i+=1) h+=s+i+','; h=h.substr(0,h.length-1)+'{'+a[0]+'}'; /* Общие стили для ячеек Грида */
		for (i=1; i<l; i+=1) h+=s+i+'{'+a[i]+'}'; /* Персональные стили для ячеек колонки Грида */
	} fRemoveCss(d,'g'); fAddCss(h,d,'g');
}

/* Загрузить данные в Грид. d - дескриптор Грида, a - двумерный массив данных [строка][колонка] (HTML-код), 0 строка - содержимое заголовка, 0 элементы строк -  служебные (не выводятся).) */
function fgridDt(d,a) {
	var i,j,l,h='',G,D=fId('pb__grid_'+d),s=' class="pb_g_',t='<table class="pb_gt"><tbody>',r='</tbody></table>',v='<div id="pb__g_',z='</div>';
	if(!fisA(a)||!fisA(a[0]))return $f; l=a[0].length;
	if(D&&D.pb_Grid) { G=D.pb_Grid; G.ss=G.cs=$u; i=G.wDesc; } /* Проверка что Грид в окне (i - дескриптор окна) */
	h+='<div'+s+'b"><div'+s+'h" style="position:relative;width:1px">'+z+t; k=a.length;
	if (i) { j=k*(l-1); if(j>10000||(!bCH&&j>1000)||pTCH||b18) {v_w[i][18]=$n; f14(v_w[i][2],100)} else v_w[i][18]=100; } /* Если не Chromium, то при более 1000 ячеек выключить анимацию окон, иначе включить */
	for (j=1; j<k; j+=1) { h+='<tr'+s+'bi">'; for (i=1; i<l; i+=1) { h+='<td>'+v+'b'+d+'_'+j+'_'+i+'"'+s+'b'+d+'_'+i+'">'+a[j][i]+z+'</td>'; } h+='</tr>'; } h+=r;
	h+=v+'h'+d+'"'+s+'h">'+t+'<tr>'; for (i=1; i<l; i+=1) { h+='<td>'+v+'h'+d+'_'+i+'">'+a[0][i]+z+'</td>'; } h+='</tr>'+r+z;
	if(G) { D.innerHTML=h; f76(d,G,k,l); return $t; } else return h;
}

/* Удалить Грид. d - дескриптор Грида */
function fgridDel(d) { var D=fId('pb__grid_'+d),G; fRemoveCss(d,'g'); if(d<va1.length&&va1[d])va1[d]=$n; if(d==v07)v07=0; if(!D||!D.pb_Grid)return $f; G=D.pb_Grid; if(G.wDesc>1) v_w[G.wDesc][19]=0; D=G.parent; if(!D)return $f; D.innerHTML=''; return $t; }

/* Чтение и запись с установкой активной строки и ячейки Грида
	d - дескриптор
	row - колонка
	col - строка
*/
function fgridGS(d,r,c) {
	var D,G,p,x,y,w,h,z,k,q='height';
	r=r||0; c=c||0; p=fId('pb__g_b'+d+'_'+r+'_'+c); if(d)D=fId('pb__grid_'+d); if(!p||!D)return false; G=D.pb_Grid; if(r>0&&c>0) {
		G.cell=p; G.col=c; G.row=r; z=p.parentNode; f78(G,p);
		x=y=0; p=fId('pb__grid'+d); w=f71(fGS(p,'width'))-f71(fGS(z,'width')); h=f71(fGS(p,q))-f71(fGS(z,q)); k=f71(fGS('pb__g_h'+d,q))+(bFF||bIE?1:0);
		while (z!=p) { x+=z.offsetLeft||0; y+=z.offsetTop||0; z=z.offsetParent; }
		z=p.scrollLeft; if(z>x) z=p.scrollLeft=x; if((z+w)<x) G.sLeft = p.scrollLeft = x-(c==G.cols?0:(w-(b12||bFF?30:2)));
		z=p.scrollTop; if(z>y-k) z=p.scrollTop=y-k; if((z+h)<y+k) G.sTop = p.scrollTop = y-h+k;
	} return { row:G.row, col:G.col };
}


/* Проверяет наличие Гридов и возвращает свободный дескриптор для Грида (11-99) или 0 - если все дескрипторы заняты */
function f73() { var i,p=va1,l=p.length; for(i=1; i<l; i+=1) { if (!p[i]||typeof p[i]!='string'||!fId(p[i])) p[i]=$n; } for(i=1; i<l; i+=1) { if(p[i]==$n) return i; } return 0; }
/* Корректировка заголовка Грида во время скроллинга (вызывается по событию onscroll) d - дескриптор Грида */
function f74(e,d) { var t; d=fId('pb__g_h'+d); f08(e); if(e)t=e.target||e.srcElement; if(!d||!e||!t)return; d.style.top=t.scrollTop+'px'; }
/* События click / dblclick на Гриде. d - дескриптор Грида */
function f75(e,d) {
	var t,p,i,c,s=0,h='pb__g_h',b='pb__g_b',D=fId('pb__grid_'+d),G=D?D.pb_Grid:0; f08(e); if(e){p=e.target||e.srcElement;t=e.type;} if(!D||!G||!p||!t||e.which!=1)return;
	if(t=='mousedown'||t=='touchstart') { if(G.wDesc>0)f17(G.wDesc,1); return; } /* Переключение активного окна, если Грид в окне */
	if((t!='click'&&t!='dblclick'))return; f24(e);
	while (p!=$dB) {
		i=p.id||''; if(i) i=i.substr(0,7); if(!i||(i!=h&&i!=b)) { p=p.parentNode; continue; } /* Поиск корневого элемента ячейки грида */
		if(i==h) { c=f71(p.id.substr(7+(d<10?2:3))); } else {
			s=p.id.substr(7); i=s.indexOf('_'); s=s.substr(i+1); i=s.indexOf('_');
			c=f71(s.substr(i+1)); s=f71(s.substr(0,i)); G.row=s; G.col=c; f78(G,p); /* Координаты ячейки: c - колонка, s - строка */
		} break;
	} if(p!=$dB&&G.handler)G.handler.call(D,e,t,d,s,c,p);
}
function f76(d,G,k,l) { var D=fId('pb__g_b'+d+'_1_1'),t=D.parentNode; t.className='pb_g_cs'; t.parentNode.className='pb_g_bs'; G.cell=D; G.ss=t.parentNode; G.cs=t; G.rows=k-1; G.cols=l-1; G.row=G.col=1; G.sTop=G.sLeft=0; }
/* Выделение строки-ячейки Грида */
function f78(G,p) {
	var b=p; while (b.className!='pb_g_bi'&&b.className!='pb_g_bs'&&b.className!='pb_gt') b=b.parentNode; /* Поиск корневого элемента текущей строки грида */
	if(b.className!='pb_gt') {
		if(G.ss) G.ss.className='pb_g_bi'; /* Снятие выделения предыдущей строки грида */
		if(G.cs) fChangeSC(G.cs,'','','pb_g_cs'); /* Снятие выделения предыдущей ячейки грида */
		G.ss=b; b.className='pb_g_bs'; /* Выделение строки */
		G.cs=p.parentNode; fChangeSC(G.cs,'','pb_g_cs'); /* Выделение ячейки */
		G.cell=p; /* Объект в ячейке */
	}
}
/* ***************************************************************************************
	D O C U M E N T   K E Y D O W N
**************************************************************************************** */
/*
*/
function f77(e) {
	var G,D,d,gc,gs,p,b,x,y,z,w,h,k,t,c,a,s,os=$os.substr(0,3),q='height'; e=e||$w.event; k=e.keyCode; t=f82(e.target.nodeName);
	if(fId('pb__cl_main')){if(k==27)f34(e);f24(e);return $f;} /* calendar */
	if((t=='input'||t=='textarea')&&e.target.type!='button') return; /* Если курсор в поле ввода */
	if((fId('pb__alert')&&!v_w[1][19])||(fId('pb__dialog')&&!v06)) return; /* Если окно сообщения или диалога без грида */
	a=e.altKey; s=e.shiftKey; c=((e.ctrlKey && os != 'mac')||(e.metaKey && os == 'mac'));
	if (v01||v06||v07) { /* gridKeys */
		d=v01; if(d)D=fId('pb__grid_'+d); if(D)G=D.pb_Grid; if(!G||G.wDesc!=1) { if(v06)d=v06; else {if(!G||!fWGt(G.wDesc).index) d=v07;} D=fId('pb__grid_'+d); } if(D) {
		t=e.type; G=D.pb_Grid; if(!G)return; gc=G.col; gs=G.row;
		if(k>32&&k<41) {
			if(k==37) gc=gc>1?gc-1:G.cols; /* left Arrow */
			if(k==39) gc=gc<G.cols?gc+1:1; /* right Arrow */
			if(k==38) gs=gs>1?gs-1:1; /* up Arrow */
			/* if(k==38) gs=gs>1?gs-1:G.rows; up Arrow */
			if(k==40) gs=gs<G.rows?gs+1:G.rows; /* down Arrow */
			/* if(k==40) gs=gs<G.rows?gs+1:1; down Arrow */
			if(k==36) if(c)gs=1;else gc=1; /* Ctrl+Home, Home */
			if(k==35) if(c)gs=G.rows;else gc=G.cols; /* Ctrl+End, End */
			if(k==33) if(c)gs=1;else {gs-=20;if(gs<1)gs=1;}; /* Ctrl+PgUp, PgUp */
			if(k==34) if(c)gs=G.rows;else {gs+=20;if(gs>G.rows)gs=G.rows;}; /* Ctrl+PgDn, PgDn */
			G.cell=b=fId('pb__g_b'+d+'_'+gs+'_'+gc); G.col=gc; G.row=gs; z=b.parentNode; f78(G,b);
			x=0; y=0; p=fId('pb__grid'+d); w=f71(fGS(p,'width'))-f71(fGS(z,'width')); h=f71(fGS(p,q))-f71(fGS(z,q)); k=f71(fGS('pb__g_h'+d,q))+(bFF||bIE?1:0);
			while (z!=p) { x+=z.offsetLeft||0; y+=z.offsetTop||0; z=z.offsetParent; }
			z=p.scrollLeft; if(z>x) z=p.scrollLeft=x; if((z+w)<x) G.sLeft = p.scrollLeft = x-(gc==G.cols?0:(w-(b12||bFF?30:2)));
			z=p.scrollTop; if(z>y-k) z=p.scrollTop=y-k; if((z+h)<y+k) G.sTop = p.scrollTop = y-h+k;
			f24(e);
		}
		if(G.handler) G.handler.call(D,e,t,d,gs,gc,G.cell);
	}}
}

/* 	W I N D O W   R E S I Z E  */
function f79(e) {
	var i,p,a=fqSA('.pb_lfull'),l=a.length,f=0,x,y; v00=0;
	if (l>0) for (i=0; i<l; i+=1) { if(a[i]) { p=a[i].style; p.minHeight='0'; p.minWidth='0'; } }
	for (i=1; i<50; i+=1) if (v_w[i]) { if(!f)f53(e); f=v_w[i]; f21(i,f[13],f[14]); }
	if (l>0) { if(!f)f53(e); for (i=0; i<l; i+=1) { if(a[i]) { p=a[i].style; p.minHeight=pPH+'px'; p.minWidth=pPW+'px'; } } }
	p=fId('pb__dialog'); if(p) {
		i=f71(fGS(p,'width')); f=f71(fGS(p,'height')); x=l=f71(fGS(p,'left')); y=a=f71(fGS(p,'top'));
		i=pCW-i-20; f=pCH-f-20; if(!f81(p)) { i+=pSL; f+=pST; if(l<pSL)l=pSL; if(a<pST)a=pST; }
		if(l>i)l=i; if(a>f)a=f; if(l<0)l=0; if(a<0)a=0; if(l!=x)p.style.left=l+'px'; if(a!=y)p.style.top=a+'px';
	} p=v_wpo; i=fGS(p,'position'); if (p.style.display=='block'&&(i=='absolute'||i=='fixed'))f23();
}
/* function f80() {} */
function f81(p) { return f82(fGS(p,'position'))=='fixed'; }
function f82(s) { return s.toLowerCase(); }
function f83(s,l,t,w,h) { if(l||l===0)s.left=l+'px'; if(t||t===0)s.top=t+'px'; if(w)s.width=w+'px'; if(h)s.height=h+'px'; }
/* ***************************************************************************************
	C A N V A S
**************************************************************************************** */
/* Создание нового объекта Canvas
Параметры:
e (element)	- ссылка или строковое id элемента-родителя для Canvas (если отсутствует то body)
k (className) - имя класса для Canvas (Текстовая строка). Если нет, то нет класса.
a - массив [left,top,width,height], или нет - тогда совпадает с размерами стиля k или 300,150
r - массив разрешения канвы [width,height], или нет если совпадает с размерами canvas
Возвращается ссылка на новый объект Canvas или false
Пример вызова: obj_canvas=fNewCanvas('idParent','className',[0,0,500,500],[200,200])
*/ 
function fNewCanvas(e,k,a,r) {
var c,x,y,l=0,t=0,w=300,h=150; e=fId(e); if (!e) e=$dB; k=k||''; a=a||0; r=r||0;
c=$d.createElement("canvas");
if (c.getContext) {
	p=fGSs(c); if (k) c.className=k; e.appendChild(c);
	if (a) { l=a[0]||0; t=a[1]||0; w=a[2]||w; h=a[3]||h; }
	else { l=f71(p.gS('left')); t=f71(p.gS('top')); w=f71(p.gS('width'))||w; h=f71(p.gS('height'))||h; }
	x=w; y=h; f83(c.style,l,t,w,h); if (r) { x=r[0]||w; y=r[1]||h; } c.left=0;c.top=0;c.width=x;c.height=y;
	return c;
} else return $f;
}

/* canvas - рисование контура с заполнением или без
o - id или строковое id элемента Canvas
c - массив координат [x0,y0,x1,y1,....,xn,yn]
l - цвет линий контура
f - цвет заполнения контура (может отсутствовать) - если присутствует, то рисуется замкнутый контур (линия от xn,yn до x0,y0)
*/
function fDraw(o,c,l,f) {
	var i,j,x; o=fId(o); if (!o||!c||!l||!fisA(c)) return $f;
	x=o.getContext("2d");x.strokeStyle=l;if(f)x.fillStyle=f;x.lineWidth=1;x.beginPath();x.moveTo(c[0],c[1]);
	j=c.length;for(i=2;i<j;i+=2)x.lineTo(c[i],c[i+1]);if(f)x.lineTo(c[0],c[1]);x.stroke();if(f)x.fill();x.closePath(); return $t;
}

/* isPointInsidePolygon - Определение принадлежности точки к площади произвольного многоугольника
 input:	p (polygon) - array of objects {x,y} - 3 or more items - массив координат вершин многоугольника (от 3 точек)
		z (point) - object {x,y} - координаты искомой точки
 output:	boolean
*/
function fisPIP(p, z) {
	var i,t,x,y,a,b,r,v,u,c=0; if (p.length<3)return $f; r=p.length-1; v=p[r].y<z.y;
	for (i = 0; i < p.length; ++i) { u=p[i].y<z.y; x=p[r].x-z.x; y=p[r].y-z.y; a=p[i].x-z.x; b=p[i].y-z.y; t=(x*(b-y)-y*(a-x)); if(u&&!v&&t>0) c+=1; if(!u&&v&&t<0) c+=1; r=i; v=u;	}
	return (c%2)!=0; 
}

/* ***************************************************************************************
	C H A R T S
**************************************************************************************** */
/*
  Создание SVG-текста с изображением Графика:
  - прямоугольники, расположенные горизонально (recth) или вертикально ("rectv")
  - круговая диаграмма (circle)
  - набор линий и эллипсов на стыках (line)
  input:
   o - объект параметров {
	  type : тип графика: "recth" или "rectv" или "line" или "circle" (если отсутствует, то "recth" - горизонтальные полосы)
	  vbw : ширина внутренней канвы viewBox для SVG (если отсутствует или менее 1, то 100), приводится к целому значению
	  vbh : высота внутренней канвы viewBox для SVG (если отсутствует или менее 1, то 100), приводится к целому значению
	        Нет смысла указывать слишком мелкие значения канвы (менее 10 или даже 100) - это нужно в очень редких случаях.
	   pd : padding - отступ от краёв канвы. Если отсутствует, то 0. Может быть массивом [top,right,bottom,left] - с числовыми значениями отступа для каждой из сторон.
	  max : максимально возможное значение, принимаемое за 100%.
            Если отсутствует или 0, то максимальным считается самое большое из списка переданных значений в массиве a
		    Для type=='circle' параметр max игнорируется - для круговой диаграммы всегда считается сумма всех значений, принимаемая за 360 градусов (вместо процентов).
	  gps : Только для "recth" или "rectv" - количество полос в группе (если отсутствует или <1, то 1).
	  sep : Для type=='circle' параметр sep игнорируется.
			Для "recth" или "rectv" - расстояние между группами полос в процентах от толщины полосы; если sep отсутствует, то 0.
			Для "line" - радиусы эллипсов (если sep - массив [pdw,pdh]) или окружностей (если sep - число) в местах соединения линий,
			Указывается в процентах от vbw/vbh - выводится пропорционально при любых отношениях длины к высоте канвы графика.
			Если не массив, то выводятся кружки, а не эллипсы, радиусом в указанных процентах от высоты канвы vbh
	   sw : stroke-width - толщина линий и границ контуров.
	  swc : stroke-width - толщина контура окружностей для line (type=="line").
			Если sw/swc не указан или имеет не тип "number", то соответствующая параметру величина stroke-width определяется по-умолчанию.
	  fix : количество знаков после десятичной точки для расчитанных координат внутри SVG-блоков. Используется для сокращения текста SVG-блоков. fix приводится к целому значению (1-10).
	        Чем меньше размер канвы (vbw или vbh), тем критичнее минимальное значение fix, но как правило 3 знака достаточно для нормального отображения графиков даже при размере канвы 1
			По-умолчанию округление производится до 3-х знаков после запятой (если fix не указан или указан вне диапазона 1-10).
	 head : произвольная текстовая вставка в заголовок (открывающий тег) SVG-файла (до первой угловой скобки ">"). Может отсутствовать.
            Пример вставки: ' id="id02568" class="svg1" version="1.1" xmlns="http://www.w3.org/2000/svg" baseProfile="full" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"'
			head не должен содержать атрибут "viewbox" - этот атрибут формируется и вставляется автоматически согласно параметрам vbw и vbh
	after : произвольные SVG-блоки для вставки перед SVG-блоками формируемого графика. Может отсутствовать.
   before : произвольные SVG-блоки для вставки после SVG-блоков формируемого графика. Может отсутствовать.
  }
	a - массив с подмассивами параметров для каждой полосы или сектора графика.
	    Содержит сколько угодно вложенных массивов, каждый из которых описывает одну полосу или один сектор (для круговой диаграммы)
		Содержимое вложенных массивов:
		a[0] - числовое значение (от 0 и выше).
		a[1] - произвольная текстовая вставка для созданного графического контура. Или пустая строка.
		       Например: 'class="fill fill4" onclick="alert(4)"'
		a[2] - Только для type=='line' - произвольная текстовая вставка для созданного эллипса. Или пустая строка.
		       Например: 'class="fill circ11" onclick="alert(11)" style="fill:white"'
	flag - флаг возврата.
           Если отсутствует или false/0, то возврат полноценного SVG-изображения.
		   Если указан, то возврат созданных внутренних элементов, для последующей вставки в obj.after и/или obj.before
*/
function fchart1(o,a,u) {
  var i,l,w,h,s,x,y,dx,dy,lx,ly,sx,sy,m=0,p,z,g,k,n=0,d,c=' stroke-width="',sw,t=['recth','rectv','line','circle'],f=function(d,n){var s=d.toString(), f=d.toFixed(n); if(s.length<f.length)f=s; return n?f:d};
    if (!o||!o.type||!a||a.length<1)return ''; l=t.length; for(i=0;i<l;i+=1)if(t[i]==o.type)n=i;
	w=f71(o.vbw)||100; h=f71(o.vbh)||100; p=o.pd||0; if(!fisA(p)){p-=0;p=[p,p,p,p];} d=f71(o.fix)||3; if(d<1||d>10)d=3; if(d<3&&(w<20||h<20))d=3;
	s=u?'':('<svg '+(o.head?o.head:'')+' viewBox="0 0 '+w+' '+h+'">')+(o.after||'');
	w=w-p[1]-p[3]; h=h-p[0]-p[2]; if(w<=(p[1]+p[3])||h<=(p[0]+p[2]))return ''; z=p[0];p=p[3]; sw=(typeof o.sw!=$m)?'':c+(o.sw-0)+'"';
    l=a.length;
	if(n<3) {
		for(i=0;i<l;i+=1){x=a[i][0];if(m<x)m=x;if(x<0)return''} x=o.max?(o.max-0):0; m=(m<x?x:m)/100;
		dx=w/l; dy=h/l; x=o.sep||0; if(!fisA(x)){x-=0;x=[x,-1];}
		if (n<2) {
			g=f71(o.gps,10); if(g<1)g=1;k=g-1; /* g - кол-во полос в группе */
			lx=dx/100*x[0]; ly=dy/100*x[0]; /* lx,ly - отступ между прямоугольниками; */
			dx-=lx; dy-=ly; sx=lx*g/2; sy=ly*g/2; /* dx,dy - ширина или высота всех прямоугольников; */
		} else {
			ly=(typeof o.swc!=$m)?'':c+(o.swc-0)+'"';
			lx=dx/2; sx=f(w/100*x[0],d); sy=f(h/100*x[x[1]<0?0:1],d); if(x[1]<0)sx=sy; /* sx,sy - размер кружков для line */
		} x=w/100/m; y=h/100/m; /* x,y - % подсчёта ширины и высоты линий / прямоугольников */
	} else {
		y=0; for (i=0;i<l;i+=1)y+=a[i][0]; m=y/2/Math.PI; /* y - сумма всех значений (кол-во); m - кол-во в 1 радиане; */
		w/=2; h/=2; t=0-y/4/m; /* t - стартовый градус дуги в радианах; 0-y/4/m - поворот на -90º до верхней точки старта; вывод будет по часовой стрелке. */
		x=Math.cos(t)*w+w; y=Math.sin(t)*h+h;
	}
	for (i=0;i<l;i+=1) {
	  c=a[i][1]||'';
	  if(n<2) {
	    s+='<rect '+c+sw;
	    if (n==0) s+=' y="'+f(z+i*dy+sy,d)+'" x="'+p+'" width="'+f(x*a[i][0],d)+'" height="'+f(dy,d)+'"/>';
	    if (n==1) s+=' x="'+f(p+i*dx+sx,d)+'" y="'+f(z+h-y*a[i][0],d)+'" width="'+f(dx,d)+'" height="'+f(y*a[i][0],d)+'"/>';
		if(i==k){sy+=ly*g; sx+=lx*g; k+=g;}
	  } else {
	    if(n>2||i<(l-1))s+='<path '+c+sw;
		if (n==2) {
			if(i<(l-1)) s+=' d="M'+f(p+i*dx+lx,d)+','+f(z+h-y*a[i][0],d)+' L'+f(p+(i+1)*dx+lx,d)+','+f(z+h-y*a[i+1][0],d)+'"/>';
			s+='<ellipse '+(a[i][2]||'')+ly+' cx="'+f(p+i*dx+lx,d)+'" cy="'+f(z+h-y*a[i][0],d)+'" rx="'+sx+'" ry="'+sy+'"/>';
		} else {
			t+=a[i][0]/m; /* t-градус дуги в радианах. */
			dx=Math.cos(t)*w+w; dy=Math.sin(t)*h+h;
			s+=' d="M'+f(p+x,d)+','+f(z+y,d)+' A'+f(w,d)+','+f(h,d)+' 0 0,1 '+f(p+dx,d)+','+f(z+dy,d)+' L'+f(p+w,d)+' '+f(z+h,d)+' L'+f(p+x,d)+','+f(z+y,d)+'"/>'; x=dx; y=dy;
		}
	  }
	}
  return s+(o.before||'')+(u?'':'</svg>');
}

/* ***************************************************************************************
	M E S S A G I N G   D I S P A T C H E R (Messaging dispatcher)
**************************************************************************************** */
/* fSetMes() - оправить сообщение.
	src  - Источник сообщения. Текстовое наименование (id) источника.
	dst  - Приёмник сообщения. Текстовое наименование (id) приёмника. Если 0 или false или '', то сообщение отправляется всем полусателям.
	post - сообщение в виде текстовой строки. (Возможно в JSON или SVG и т.д.)
	time - Максимальное Время хранения сообщения в секундах (0 - бессрочно).
	ls   - Флаг использования LocalStorage. не указан или 0 - не использовать, иначе использовать.
	cb   - текстовое имя callback-функции, вызываемой при доставке сообщения, формат:
		cb(f) - где f == 0 если сообщение не доставлено или приёмник не ответил по истечении времени time, 
					f == -1, если сообщение отклонено или приёмник не смог обработать
					f == 1, если сообщение принято
		Функция вызывается через конструкцию new Function(cb.call(null,f)) - чтобы корректно её вызывать, если страница была перезагружена.
*/
/*
function fSetMes(src, dst, post, time, ls, cb) {
	var i;
}
*/
/* fGetMes() - подписаться на сообщение.
	dst  - Приёмник сообщения. Текстовое наименование (id) приёмника.
	ls   - Флаг использования LocalStorage. не указан или 0 - не использовать, иначе использовать.
	cb   - callback-функция
		Функция вызывается при доставке сообщения, формат вызова:
		cb(src, post, time, ls), где:
			src - Имя отправителя Текстовая строка.
			post - сообщение в виде текстовой строки.
			time - время в секундах с момента отправки сообщения отправителем.
			ls - флаг передачи через localStorage: 0 - нет; 1 - да; 2 - да, отправлено из другой вкладки (окна) браузера или до перезагрузки текущей страницы.
		функция должна вернуть:
			0 если сообщение пока не может быть обработано, но его нужно оставить в очереди для последующих обработок.
			-1, если сообщение отклонено или приёмник не смог обработать. Сообщение удаляется из очереди.
			1, если сообщение принято. Сообщение удаляется из очереди.
*/
/*
function fGetMes(dst, ls, cb) {
	var i;
}
*/

/* *************************************************************************************** */
/* Многофункционально - кроссбраузерная обработка для event и Левой Кнопки Мыши, возврат 1 если сенсорный экран, иначе 0 */
function f08(e) { e=e||$w.event; if (e && !e.which && e.button) if (e.button & 1) e.which=1; return pTCH; }
/* Системная функция установки opacity (от 0 до 100) */
function f14(e,o) {if (b18) { e.style.filter = o===$n ? $n : ('alpha(opacity='+o+')'); } else { e.style.opacity = o===$n ? $n : ((o/100).toFixed(3)); } }
/* Остановка всплытия события; Убрать действие браузера по-умолчанию */
function f24(e,f) { f=f||0; if(f<2) e.stopPropagation ? e.stopPropagation() : (e.cancelBubble=$t); if(f!=1) e.preventDefault ? e.preventDefault() : (e.returnValue=$f); }

/* Чтение позиции курсора в textarea или input - возвращает номер позиции или false (фокус устанавливается на объект e) */
function f44(e) { var s,p=0; if ($d.selection) { e.focus(); s=$d.selection.createRange(); s.moveStart('character',-e.value.length); p=s.text.length; } else if (e.selectionStart || e.selectionStart=='0') p=e.selectionStart; return p; }
/* Установка позиции курсора в textarea или input (фокус устанавливается на объект e) */
function f45(e,p) { var r; if(e.setSelectionRange) { e.focus(); e.setSelectionRange(p,p); } else if (e.createTextRange) { r=e.createTextRange(); r.collapse(true); r.moveEnd('character',p); r.moveStart('character',p); r.select(); } }

/* Создание массива */
function f46(n) { return new Array(n);}
/* Проверка на функцию и формирование новой анонимной функции, если строка */
function f60(h,s) { s=s||'e'; if(h&&typeof h==$s) h=Function(s,h); return typeof h==$h ? h : $u; }
function f71(v) { return parseInt(v,10)||0; }
function f72(v) { return Math.round(v); }

function fId(n) { return typeof n == $s ? $d.getElementById(n) : (typeof n == 'object' ? n : $u); } /* Получение ссылки на объект по его id */
function fTrim(s) { return (typeof s!=$s) ? '' : s.replace(/^\s+|\s+$/g,''); } /* Удаление пробельных символов */
function fLtrim(s) { return (typeof s!=$s) ? '' : s.replace(/^\s+/,''); } /* Удаление пробельных символов сначала строки */
function fRtrim(s) { return (typeof s!=$s) ? '' : s.replace(/\s+$/,''); } /* Удаление пробельных символов в конце строки */
function fCC(c) { return String.fromCharCode(c); } /* Возвращает строковый символ кода для браузера */
function fRev(s) { var i, t=''; if (typeof s!=$s) return ''; for (i=s.length-1; i>=0; i-=1) t+=s.charAt(i); return t; } /* Реверс строки */
function fisD(o) { return Object.prototype.toString.call(o)==='[object Date]'; } /* Проверка объекта на дату */
function fisA(o) { return Object.prototype.toString.call(o)==='[object Array]'; } /* Проверка объекта на массив */
function fqSA(s,o) { o=fId(o)||$d; try { return (typeof s!=$s) ? $n : o.querySelectorAll(s) } catch(e) { return $n} } /* аналог o.querySelectorAll(s) */
function fqS(s,o) { o=fId(o)||$d; try { return o.querySelector(s) } catch(e) { return $n } } /* аналог o.querySelector(s) */
function fSetLS(n,v) { if (!$lST||!n||typeof n!=$s||typeof v!=$s) return $f; $lST.setItem(n,v); return $t; } /* LocalStorage - Запись строкового значения v под именем n */
function fGetLS(n) { if (!$lST||typeof n!=$s) return $f; return ($lST.getItem(n)||''); } /* LocalStorage - Чтение строкового значения под именем n */

function isPO() { return pORN; } function gMX() {  return pMX; } function gMY() { return pMY; }
function gAW() { return pAW; } function gAH() { return pAH; } function gCW() { return pCW; } function gCH() { return pCH; }
function gPW() { return pPW; } function gPH() { return pPH; } function gPST() { return pST; } function gPSL() { return pSL; }

function _(n) {
	var r=$f;
	if(!n||typeof n!==$m) return r;
	if(n==1) r=v_w; /* --- array v_w - окна, для каждого окна - дескриптор/подмассив [desc]=f04() - массив из 19 элементов */
	if(n==8) r=f08; /* --- Многофункционально - кроссбраузерная обработка для event и Левой Кнопки Мыши, возврат 1 если сенсорный экран, иначе 0 */
	if(n==48) r=fDragDrop;
	if(n==11) r=f11; /* sys zoomImg  - уменьшение фото */
	if(n==14) r=f14; /* sys win */
	if(n==15) r=f15; /* sys win */
	if(n==16) r=f16; /* sys win */
	if(n==17) r=f17; /* sys win */
	if(n==20) r=fWDel; /* --- */
	if(n==22) r=f22; /* sys win */
	if(n==24) r=f24; /* f24(e,f) - Остановка всплытия события (f==0||1); Убрать действие браузера по-умолчанию (f==0||2)  */
	if(n==25) r=fWHide;
	if(n==26) r=fWGTop;
	if(n==30) r=f30; /* sys win */
	if(n==34) r=f34; /* sys calendar */
	if(n==47) r=f47; /* sys win */
	if(n==60) r=f60; /* Проверка на функцию и формирование новой анонимной функции, если строка */
	if(n==64) r=f64; /* sys zoomImg  - листалка фото */
	if(n==65) r=fRemoveDialog; /* sys dialog */
	if(n==68) r=f68; /* sys calendar */
	if(n==74) r=f74; /* sys grid scroll */
	if(n==75) r=f75; /* sys grid click/dblclick */
	if(n==78) r=f78; /* Выделение строки-ячейки Грида */
	return r;
}
/* **************************************************************************************** */

/* End local functions */

/* Begin create object */
	this[$] = {
		W : this, /* $w - ссылка на передаваемый объект window */
		WP : this.parent, /* window.parent */
		WT : this.top, /* window.top */
		WF : this.frames, /* window.frames */
		B : $u, /* $dB - body */
		D : $d, /* $d - document */
		EH : pEV, /* events */
		addEH : fAddEH,
		removeEH : fRemoveEH,
		gVersion : function() { return $version }, /* Версия js-библиотеки. */
		gDD : function() { return $D }, /* 1 - не завершённый DragDrop */
		sRAF : function(f) { f=f&&$rAF?1:0; if(f!=rAF){rAF=f;fRAF(rAF)}; },
		init : f48, /* Ручная инициализация библиотеки (если не по fready()). */
		ready : fready,
		id : fId,
		_ : _,

		OS : $os,
		isIE : function() { return bIE; }, /* Internet Explorer Number Version */
		isOPERA12 : function() { return b12; }, /* Opera <=12 (1 || 0) */
		isFF : function() { return bFF; }, /* FireFox (1 || 0) */
		isSAFARI : function() { return bSF; }, /* Safari (1 || 0) */
		isCHROME : function() { return bCH; }, /* Chrome (1 || 0) */
		isOTHER : function() { return bOTH; }, /* Other browser (1 || 0) */
		isBrowserName : function() { return brws; }, /* Browser name (string) */

		isTOUCH : function() { return pTCH; }, /* ontouch (1 || 0) */
		isPageOrientation : isPO, /* pageOrientation */
		isPO : isPO, /* pageOrientation */

		uEnv : function(e){ f53(e) }, /* Установить переменные окружения */
		uMouseXY : fmXY, /* Обновить переменные X Y координат мыши */
		uMXY : fmXY,
		gMouseX : gMX, /* Прочитать координату X мыши */
		gMX : gMX,
		gMouseY : gMY, /* Прочитать координату Y мыши */
		gMY : gMY,
		gAvailWidth : gAW, /* screen.availWidth */
		gAW : gAW,
		gAvailHeight : gAH, /* screen.availHeight */
		gAH : gAH,
		gClientWidth : gCW, /* window width */
		gCW : gCW,
		gClientHeight : gCH, /* window height */
		gCH : gCH,
		gPageWidth : gPW, /* page width */
		gPW : gPW,
		gPageHeight : gPH, /* page height */
		gPH : gPH,
		gPageScrollTop : gPST, /* document ScrollTop */
		gPST : gPST,
		gPageScrollLeft : gPSL, /* document ScrollLeft */
		gPSL : gPSL,

		trim : fTrim,
		ltrim : fLtrim,
		rtrim : fRtrim,
		reverse : fRev,
		gCC : fCC,
		isArray : fisA,
		isDate : fisD,
		gPos : function(e) { e=fId(e); return e ? f44(e) : $f; }, /* Чтение позиции курсора в textarea или input - возвращает номер позиции или false (фокус устанавливается на объект e) */
		sPos : function(e,p) { e=fId(e); if (!e||typeof p!=$m) return $f; f45(e,p); return $t; }, /* Установка позиции курсора в textarea или input (фокус устанавливается на объект e) */

		qSA : fqSA,
		qS : fqS,
		sLS : fSetLS,
		gLS : fGetLS,
		loadJs : fLoadJs,
		addCss : fAddCss,
		removeCss : fRemoveCss,
		changeSC : fChangeSC,
		gStyles : fGSs,
		gStyle : fGS,
		gOffset : fGetOffset,
		sOpacity : fSetOpacity,

		gCookie : fGetCookie,
		sCookie : fSetCookie,
		dCookie : fDeleteCookie,

		addLayer : fAddL,
		removeLayer : fRemoveL,

		httpNew : fCreateXmlHttp,
		httpPost : fPostHttp,

		animate : fAn,
		aClear : fClearAn,
		aOpacity : fAOpacity,
		aWrap : fAWrap,
		aHeight : fAHeight,
		aWidth : fAWidth,

		wMax : function(m) { if(typeof m==$m) m=f72(m); else m=0; if(m>0&&m<49) v_max=m; return v_max; }, /* максимальное количество окон (1 - 48) */
		wPanelMove : function(m) { if(m!==$u)pPM=m?1:0; return pPM; },
		wCallback : function(h) { hWC = f60(h,'status,desc,left,top,width,height'); },
		wSetting : fWSet,
		wSet : fWSt,
		wGet : fWGt,
		wNew : fWNew,
		wShow : fWShow,
		wHide : fWHide,
		wDelete : fWDel,
		wHead : fWHead,
		wBody : fWBody,
		wTop : fWGTop,
		wClear : fWClear,
		wAlert : fWAlert,
		isAlert : function() { return v_w[1]!=$n; },

		createDialog : fCreateDialog,
		removeDialog : fRemoveDialog,
		isDialog : function() { return !!(v26||v25); },
		calendar : fCalendar,

		iMenu : fInitMenu,
		sMenu : fSetMenu,
		gMenu : function(l) { l=fId(l); if(!l||!l.pb_M5)return $u; return l.pb_M5[5]||$u; }, /* Получение сылки на активный пункт меню l или 0 */

		imgBlock : fRotateBlock,
		zoomImg : fZoomImg,
		uImg : function(s,o){return f63(s,o)}, /* Обновление галереи по указанному селектору s (например. ".my_class") для объекта o (или document $d если не указан) */
		uCheckeds : fSetCheckeds,
		dragDrop : fDragDrop,

		cbNew: fcbNew,
		cbChange : fcbChange,
		cbUpdate : fcbUpdate,
		cbCallback : function(h) { hCC = f60(h,v29.p); },
		cbGet : function(o) { o=f56(o); return o ? fId(o.pb_CB[5]).value : $f; }, /* получить занчение из input комбобокса с дескриптором o (o может быть и ссылкой на объект класса pb_combobox */

		spinner : fSpinner,
		phone : fPhone,

		gridNew : fgridNew,
		gridData : fgridDt,
		gridStyle : fgridS,
		gridDelete : fgridDel,
		gridGS : fgridGS,

		cvNew : fNewCanvas,
		cvDraw : fDraw,
		isPointInsidePolygon : fisPIP,
		isPIP : fisPIP,
		gChart : fchart1
	};
	if ($!='VcorpJS') this['VcorpJS']=this[$];
	return this[$];
/* End create object */
})('$');
/*
var myContext = (null || window || window.parent || window.top || window.frames[0].contentWindow || ...);
myProp.call( myContext , 'myProp');
VcorpJS.call( myContext , 'myProp');
*/
