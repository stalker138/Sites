var v_layer=null, v_dialogEsc=0, v_esc=0, v_http, v_queryHttp=0, v_interval=null, v_hash, v_descSH, v_mode=0, v_storage=window['localStorage']?1:0, v_dpidm='im.ruproject@teoh';
var v_cb='<div class="px', v_cp='"></div>', v_px0=v_cb+'0'+v_cp,v_px0b=v_cb+'0b'+v_cp,v_px1=v_cb+'1'+v_cp,v_px3=v_cb+'3'+v_cp,v_px3b=v_cb+'3b'+v_cp,v_px5=v_cb+'5'+v_cp,v_px5b=v_cb+'5b'+v_cp,v_px10=v_cb+'10'+v_cp,v_px10b=v_cb+'10b'+v_cp,v_px15=v_cb+'15'+v_cp,v_px15b=v_cb+'15b'+v_cp,v_px20=v_cb+'20'+v_cp,v_px20b=v_cb+'20b'+v_cp,v_px25=v_cb+'25'+v_cp,v_px25b=v_cb+'25b'+v_cp,v_px30=v_cb+'30'+v_cp,v_px30b=v_cb+'30b'+v_cp;
var v_am=0, v_anim=0, fpb_zoomImg, v_aPages, v_wlh=window.location.href;

function f_show_query(){
	var l,t; v_queryHttp=1; v_layer = $.addLayer(0,'#c8c8c8',299,0,0); v_descSH = $.aOpacity(v_layer,500,50,0,1); $.uEnv();
	l=parseInt($.gCW()/2-200,10); t=parseInt($.gCH()/2-100,10); if(l<0)l=0; if(t<0)t=0;
	v_layer.innerHTML='<div style="position:fixed;left:'+l+'px;top:'+t+'px;width:400px; height:150px; border:solid 1px #c8c8c8;"><table class="twajax"><tbody><tr><td>Пожалуйста, подождите ...</td></tr></tbody></table></div>';
}function f_hide_query(){ if(v_interval)clearInterval(v_interval); v_interval=null; v_queryHttp=0; if(v_descSH>=0)$.aClear(v_descSH); $.removeLayer(v_layer); v_layer=null; }
/* Замена табуляций и спец-символов в тексте. */
function f_replace(s,f) {
	s=$.trim(s.replace(/\¡/gm,'i').replace(/\'/gm,'’').replace(/\"/gm,'”').replace(new RegExp($.gCC(9),'g'),' '));
	f=f||0; if (f) { s=s.replace(new RegExp($.gCC(10),'g'),''); s=s.replace(new RegExp($.gCC(13),'g'),''); }
	return s;
}
function f_mesNot() {if(v_queryHttp)return; f_message('<div class="pb_ah0">Сообщение</div>','В разработке',200,100);}
function f_mesErr(ht, bt, w, h, b, s) { ht = '<div class="pb_ahr"><div class="ficon" style="background-position:-334px -37px;"></div>'+ht+'</div>'; f_message(ht, bt, w, h, b, s); }
function f_mesXRST(s) { f_mesErr('Ошибка связи. Статус:'+s.toString(),'Временные технические проблемы.'+v_px5+'Пожалуйста, повторите позже.',350,120); }
function f_message(ht, bt, w, h, b, s) {
	var f = bt.indexOf('<input'); $.wDelete(1); if((!b||b==1))v_esc=1;
	if((f == -1) && (!b || b==1)) { h+=30; bt += v_px15 + '<input type="button" class="pb_buttons" id="idMsgOK" value="Ok" style="float:none;margin:0 auto;width:70px;height:30px;" onclick="$.wDelete(1,1)"/>'; }
	$.wAlert(ht, v_px5+bt, w, h, b, s); if(f == -1 && (!b || b==1)) $.id('idMsgOK').focus();
}
function f_reload() { var p, h=window.location.href; if ($.isIE()>0&&$.isIE()<10) { p=h.indexOf('?reload'); window.location.href = (p!=-1) ? h.substr(0,p) : (h+'?reload='+Math.round(Math.random()*90000)); } else { window.location.reload(true); } }
function f_logout() { v_hash=''; $.dCookie('hash'); f_clearStorage(); f_reload(); }
function f_clearStorage() { var i,a=['','','','','','']; for(i=1;i<6;i+=1)a[i]=f_replace($.gLS('idText'+i)||''); localStorage.clear(); for(i=1;i<6;i+=1)$.sLS('idText'+i,a[i]); }
function f_pas(e) { var v=f_replace($.id('idText0').value)||''; e=e||window.event; if(e.type=='keypress'&&e.keyCode!=13)return; if(!v||v.length<3||v.length>20||v_queryHttp)return; f_show_query(); v_mode=99; $.httpPost('/auto/auth.php','mfd',['mode',v_mode,'pass',v],v_http);v_interval=setInterval(function(){f_hRSCR()},100); }

function vcorpJS_onload(v) {
var a,p,i,t,a;
if (v!='vcorp_js_00_01') { f_mesErr('Диагностика','Неверная версия JS-библиотеки<br>(необходима сборка vcorp_js_00_01)'+v_px5+'Обновите (перезагрузите) страницу.'+v_px5+'Рекомендуется сбросить кеш браузера.',320,150,3); return false; }
v_http=$.httpNew(); a=$.gCookie('hash')||''; v_hash=(a && a.length==70 && a.substr(0,6)=='teohim')?a:'';
$.EH.add(document,'keydown',function(e){e=e||window.event; if(v_esc>0&&e.keyCode==27) {if($.id('pb__alert')){$.wDelete(1,1);if(!$.isDialog()||v_dialogEsc==1)v_esc=0;return}if($.isDialog()){if(v_dialogEsc==1){v_dialogEsc=0;$.removeDialog();}else v_esc=1;}}});
a=v_dpidm; p=$.id('dpIDm'); if(p) { a=a.substr(5)+a.substr(0,5); p.innerHTML='<span>E-mail:</span> <a href="mailto:'+a+'">'+a+'</a>'; }
p=$.id('main'); if(!p) {
	t='<div style="text-align:center;">'+v_px5+'Введите пароль'+v_px10+'<input type="text" class="inpbox" id="idText0" maxlength="20" value="" style="width:100px;" onkeypress="f_pas(event)"/>'+v_px15+'<input type="button" class="pb_buttons" value="Ok" style="float:none;margin:0 auto;width:100px;height:30px;" onclick="f_pas(event)"/>'+v_px5+'</div>';
	$.createDialog('Введите пароль',t,300,170,3); a=$.qS('.pb_dialog_head_del')||''; if(a)a.parentNode.removeChild(a); $.id('idText0').focus();
} else {
	$.EH.add(document,'mousemove',function(e){if(v_am){v_am.style.display='none';v_am=0;}});
	$.EH.add(document,'click',function(e){i,a=$.qSA('.lmitem1'),b=$.qSA('.lmitem3'); if(a){for(i=a.length-1; i>=0; i-=1)a[i].style.display='none';} if(b){for(i=b.length-1; i>=0; i-=1){b[i].style.display='none';}}  if(b){for(i=b.length-1; i>=0; i-=1)b[i].style.display='none';} });
	a=$.qSA('.lmitem'); if (a) {
	  p=a.length; for (i=0; i<p; i+=1) {
		t=$.qS('.lmitem1',a[i]); if (t) {
			$.EH.add(a[i],'click',function(e){var i,f,p=$.qS('.lmitem1',this),a=$.qSA('.lmitem1'),b=$.qSA('.lmitem3'),m=$.id('phBlockMain').style; /*if(m.display!='block')m.display='block';*/ if(p) {p.style.display = p.style.display=='block' ? 'none' : 'block'; /*if($.id('phBlock'))$.id('phBlock').style.display=p.style.display; if(p.id){f_phblock2($.id('ph0'+p.id.substr(3)));}*/ } if(a){for(i=a.length-1; i>=0; i-=1){if(a[i]!=p)a[i].style.display='none';}} if(b){for(i=b.length-1; i>=0; i-=1){b[i].style.display='none';}} $._(8)(e);e.stopPropagation ? e.stopPropagation() : (e.cancelBubble=true); });
		}
		t=$.qS('.lmitem2',a[i]); if (t) {
			$.EH.add(a[i],'mousemove',function(e){var i,p=$.qS('.lmitem2',this),a=$.qSA('.lmitem1'),b=$.qSA('.lmitem3'); if(p && p.style.display!='block'){ if(v_am)v_am.style.display='none';p.style.display='block';v_am=p; if(a){for(i=a.length-1; i>=0; i-=1){a[i].style.display='none';}} if(b){for(i=b.length-1; i>=0; i-=1){b[i].style.display='none';}} } $._(8)(e);$._(24)(e);});
			//$.EH.add(p,'mousemove',function(e){$._(8)(e);$._(24)(e);});
		}
		t=$.qS('.lmitem3',a[i]); if (t) {
			$.EH.add(a[i],'click',function(e){var i,p=$.qS('.lmitem3',this),a=$.qSA('.lmitem1'),b=$.qSA('.lmitem3'); if(p) {p.style.display = p.style.display=='block' ? 'none' : 'block';} if(b){for(i=b.length-1; i>=0; i-=1){if(b[i]!=p)b[i].style.display='none';}} if(a){for(i=a.length-1; i>=0; i-=1){a[i].style.display='none';}}});
		}
	  }
	}

	$.EH.add(window,'load',function(e){
		var linksMore = document.getElementsByClassName('p_more');

	  function addLinks () {
		var source = 'http://www.teohim.ru/img/ping.png';
		var img = document.createElement('img');

		img.onload = img.onerror = onLoad;
		img.src = source;

		function onLoad () {
		if (img.width == 1) {
			for (var i = 0; i < linksMore.length; i++) {
			var link = linksMore[i];
			var linkHref = link.href;
			var data = link.dataset;

			link.href = data.link;
			data.link = linkHref;
			link.target = '_blank';
			};
		}
		}
	  }

	  if (linksMore.length) {
		addLinks();
	  }
	});
}

t=''; if($.isFF())t+='input::-moz-focus-inner{margin-top:-1px;}';
if($.isOPERA12()||$.isTOUCH()||$.gClientHeight()<500)t+='.pb_win_panel,.pb_win,.pb_win_sel,.pb_alert,.pb_dialog{position:absolute;}';
//t+='.phblock,.aphblock { transition: border 0.3s ease-out 0s, box-shadow 0.3s ease-out 0s, margin 0.3s ease-out 0s; }';
//t+='.phblock,.aphblock { '+($.isTOUCH()?'':' opacity:0.7;')+' transition: border 0.3s ease-out 0s, box-shadow 0.3s ease-out 0s, margin 0.3s ease-out 0s'+($.isTOUCH()?'':', opacity 0.3s ease-out 0s')+'; } .phblock:hover,.aphblock:hover { '+($.isTOUCH()?'':' opacity:1;')+'}';
if($.isTOUCH()) t+='.pb_win_resize { border-left:solid 20px transparent; border-bottom:solid 20px #000000; }';
if(t)$.addCss(t);

fpb_zoomImg = $.zoomImg;

/* Проверка на страницу с вкладками (материалы) - и установка обработчика смены активной вкладки */
if ($.id('mtr_tabs')) {
	$.addEH('click', function(e) { /* Функция $.addEH() - установки одного обработчика function(e) на несколько объектов */
		var i, p, obj = e.target || e.srcElement; while (!obj.id) obj = obj.parentNode; /* Получение ссылки obj на <div id="mtr_tabs_N"> */
		for (i=1; i<=2; i+=1) {
			p=$.id('mtr_tabs_'+i); if(p) p.className=''; /* Снятие класса active со всех заголовков вкладок */
			p=$.id('mtr_body_'+i); if(p) p.className=''; /* Снятие класса active со всех вкладок */
		}
		obj.className='active'; /* Установка класса active на заголовок выбранной вкладки */
		p=$.id('mtr_body_'+obj.id.substr(9,1)); if(p) p.className='active'; /* Установка класса active на выбранную вкладку */
	},['mtr_tabs_1','mtr_tabs_2']); /* Массив с перечислением ID объектов */
}

/* Функция автоматического запоминания и авто-открытия блоков .div_mo / .div_mc, а так-же страниц с URL .../#blockN */
v_aPages=$.gLS('blocks_of_pages')||'[0]'; v_aPages = JSON.parse(v_aPages); /* Сохранённый в LocalStorage массив [URL страницы, номер_последнего_активного_блока, id] - пример: [0,['url1',v_page,3],['url2',v_page,0],['url3',v_page,1],...]*/
setTimeout(function(e){
  var a,p,p1,p2,p3,i,j;
  a=$.qSA('.divh3'); if (a) {
	for (i=0; i<a.length; i+=1) {
		$.EH.add(a[i],'click',function(e){
			var p,a,i,l,f=0; e=e||window.event; if (!e.target) e.target = e.srcElement; 
			if(e.target.parentNode.className == 'div_mc' || e.target.parentNode.className == 'div_mo') p=e.target.parentNode; else p=e.target.parentNode.parentNode;
			p.className=(parseInt($.gStyle(p,'height'))==40)?'div_mo':'div_mc'; $.aHeight(p,200,25,p.scrollHeight,40);
			if (p.id) { /* Страницы без #block - последний открытый пункт запоминается в v_aPages */
				a=v_aPages; l=a.length;
				for (i=1; i<l; i+=1) { /* Поиск в массиве c URL текущей страницы v_page */
					if (a[i][1]==v_page) { a[i] = [v_wlh, v_page, ((p.className=='div_mc') ? 0 : (p.id.substr(3)-0)) ]; f=1; }
				}
				if (!f) v_aPages[l]=[v_wlh, v_page, ((p.className=='div_mc') ? 0 : (p.id.substr(3)-0)) ];
				$.sLS('blocks_of_pages',JSON.stringify(v_aPages)); /* Запоминаем массив в LocalStorage */
			}
		});
	}
	/* '#block1' (p) - для страниц без #block (запоминание последнего активного пункта); '.dblock' (p1) и '.mobile' (p2) - для astyle; '#mobile' (p3) - для style;  */
	p=$.qS('#block1'); p1=$.qS('.dblock'); p2=$.qS('.mobile'); p3=$.qS('#mobile');
	/* Проверка URL на #blockN и раскрытие блока при необходимости */
	s=v_wlh; j=s.indexOf('#block'); s=parseInt((j>0 ? s.substr(j+6,1) : '0'),10)||0;
	if(s>0) {
		if (p && ((p1 && $.gStyle(p1,'display').toLowerCase()=='block') || (p2 && $.gStyle(p2,'display').toLowerCase()=='none'))) {
			a=a[s-1].parentNode; a.className='div_mo'; $.aHeight(a,200,25,a.scrollHeight,40);
		}
	} else { /* Страницы без #block (но с id) - последний открытый пункт запоминается в v_aPages */
		if (!p && (!p1 || (p1 && $.gStyle(p1,'display').toLowerCase()=='block')) && (!p2 || (p2 && $.gStyle(p2,'display').toLowerCase()=='none')) && (!p3 || (p3 && $.gStyle(p3,'display').toLowerCase()=='none'))) {
			/* Поиск в массиве c URL текущей страницы v_page */
			a=v_aPages; j=0; for(i=a.length-1; i>0; i-=1) { if(a[i][1]==v_page) j=i; }
			if(j>0 && a[j][2]>0) {
				p=$.id('pbm'+a[j][2]); window.scrollTo(0,$.gOffset(p).top-300); p.className='div_mo'; $.aHeight(p,200,25,p.scrollHeight,40); /* раскрыть, пролистать экран до начала блока */
			}
		}
	}
  }
  a=$.qSA('.divh4'); if (a) {
	for (i=0; i<a.length; i+=1) {
		$.EH.add(a[i],'click',function(e){
			var p,a,i,l,f=0; e=e||window.event; if (!e.target) e.target = e.srcElement; 
			if(e.target.parentNode.className == 'div_mc' || e.target.parentNode.className == 'div_mo') p=e.target.parentNode; else p=e.target.parentNode.parentNode;
			p.className=(parseInt($.gStyle(p,'height'))==25)?'div_mo':'div_mc'; $.aHeight(p,200,25,p.scrollHeight,25);
			if (p.id) { /* Страницы без #block - последний открытый пункт запоминается в v_aPages */
				a=v_aPages; l=a.length;
				for (i=1; i<l; i+=1) { /* Поиск в массиве c URL текущей страницы v_page */
					if (a[i][1]==v_page) { a[i] = [v_wlh, v_page, ((p.className=='div_mc') ? 0 : (p.id.substr(3)-0)) ]; f=1; }
				}
				if (!f) v_aPages[l]=[v_wlh, v_page, ((p.className=='div_mc') ? 0 : (p.id.substr(3)-0)) ];
				$.sLS('blocks_of_pages',JSON.stringify(v_aPages)); /* Запоминаем массив в LocalStorage */
			}
		});
	}
	/* '#block1' (p) - для страниц без #block (запоминание последнего активного пункта); '.dblock' (p1) и '.mobile' (p2) - для astyle; '#mobile' (p3) - для style;  */
	p=$.qS('#block1'); p1=$.qS('.dblock'); p2=$.qS('.mobile'); p3=$.qS('#mobile');
	/* Проверка URL на #blockN и раскрытие блока при необходимости */
	s=v_wlh; j=s.indexOf('#block'); s=parseInt((j>0 ? s.substr(j+6,1) : '0'),10)||0;
	if(s>0) {
		if (p && ((p1 && $.gStyle(p1,'display').toLowerCase()=='block') || (p2 && $.gStyle(p2,'display').toLowerCase()=='none'))) {
			a=a[s-1].parentNode; a.className='div_mo'; $.aHeight(a,200,25,a.scrollHeight,25);
		}
	} else { /* Страницы без #block (но с id) - последний открытый пункт запоминается в v_aPages */
		if (!p && (!p1 || (p1 && $.gStyle(p1,'display').toLowerCase()=='block')) && (!p2 || (p2 && $.gStyle(p2,'display').toLowerCase()=='none')) && (!p3 || (p3 && $.gStyle(p3,'display').toLowerCase()=='none'))) {
			/* Поиск в массиве c URL текущей страницы v_page */
			a=v_aPages; j=0; for(i=a.length-1; i>0; i-=1) { if(a[i][1]==v_page) j=i; }
			if(j>0 && a[j][2]>0) {
				p=$.id('pbm'+a[j][2]); window.scrollTo(0,$.gOffset(p).top-300); p.className='div_mo'; $.aHeight(p,200,25,p.scrollHeight,25); /* раскрыть, пролистать экран до начала блока */
			}
		}
	}
  }
},10);

  var i,a,p,t=f_gdhm(),ls=$.gLS('page1010price')||[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,t], ls2=$.gLS('page1010price2')||[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,t];
  if(typeof ls=='string') ls=JSON.parse(ls); if ((t-ls[41])>60) ls=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,t]; $.sLS("page1010price",JSON.stringify(ls));
  a=$.qSA('#mtr_body_1 .divh3');
  if (a) { for (i=0; i<a.length; i+=1) {
     p=a[i].parentNode; p.style.height = (ls[i] ? p.scrollHeight : 40) + 'px'; p.className = ls[i] ? 'div_mo' : 'div_mc';
     $.EH.add(a[i],'click',new Function('e','var ls=$.gLS("page1010price")||[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],p=e.target.parentNode; if(typeof ls=="string") ls=JSON.parse(ls); ls[41]=f_gdhm(); ls['+i+']=ls['+i+']==1?0:1; $.sLS("page1010price",JSON.stringify(ls));'));
  }}
  a=$.qSA('#mtr_body_1 .divh4');
  if (a) { for (i=0; i<a.length; i+=1) {
     p=a[i].parentNode; p.style.height = (ls[i+20] ? p.scrollHeight : 25) + 'px'; p.className = ls[i+20] ? 'div_mo' : 'div_mc';
     $.EH.add(a[i],'click',new Function('e','var ls=$.gLS("page1010price")||[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],p=e.target.parentNode; if(typeof ls=="string") ls=JSON.parse(ls); ls[41]=f_gdhm(); ls['+(i+20)+']=ls['+(i+20)+']==1?0:1; $.sLS("page1010price",JSON.stringify(ls));'));
  }}
  if(typeof ls2=='string') ls2=JSON.parse(ls2); if ((t-ls2[41])>60) ls2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,t]; $.sLS("page1010price2",JSON.stringify(ls2));
  a=$.qSA('#mtr_body_2 .divh3');
  if (a) { for (i=0; i<a.length; i+=1) {
     p=a[i].parentNode; p.style.height = (ls2[i] ? p.scrollHeight : 40) + 'px'; p.className = ls2[i] ? 'div_mo' : 'div_mc';
     $.EH.add(a[i],'click',new Function('e','var ls2=$.gLS("page1010price2")||[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],p=e.target.parentNode; if(typeof ls2=="string") ls2=JSON.parse(ls2); ls2[41]=f_gdhm(); ls2['+i+']=ls2['+i+']==1?0:1; $.sLS("page1010price2",JSON.stringify(ls2));'));
  }}
  a=$.qSA('#mtr_body_2 .divh4');
  if (a) { for (i=0; i<a.length; i+=1) {
     p=a[i].parentNode; p.style.height = (ls2[i+20] ? p.scrollHeight : 25) + 'px'; p.className = ls2[i+20] ? 'div_mo' : 'div_mc';
     $.EH.add(a[i],'click',new Function('e','var ls2=$.gLS("page1010price2")||[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],p=e.target.parentNode; if(typeof ls2=="string") ls2=JSON.parse(ls2); ls2[41]=f_gdhm(); ls2['+(i+20)+']=ls2['+(i+20)+']==1?0:1; $.sLS("page1010price2",JSON.stringify(ls2));'));
  }}

}
function f_mtr_body(o,f) {
  var a,p,i,h,ls=f?[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,f_gdhm()]:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,f_gdhm()]; o=o?1:0;
  a=$.qSA('.divh3'); if (a) {
    for (i=0; i<a.length; i+=1) {
        p=a[i].parentNode; h=parseInt($.gStyle(p,'height'),10); p.className=f?'div_mo':'div_mc'; if ((f&&h==40) || (!f&&h!=40)) $.aHeight(p,o?200:25,25,p.scrollHeight,40);
    }
  }
  a=$.qSA('#mtr_body_1 .divh4'); if (a) {
    for (i=0; i<a.length; i+=1) {
        p=a[i].parentNode; h=parseInt($.gStyle(p,'height'),10); p.className=f?'div_mo':'div_mc'; if ((f&&h==25) || (!f&&h!=25)) $.aHeight(p,o?200:25,25,p.scrollHeight,25);
    }
  }
  $.sLS("page1010price",JSON.stringify(ls));
}
function f_mtr_body_1(o,f) {
  var a,p,i,h,ls=f?[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,f_gdhm()]:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,f_gdhm()]; o=o?1:0;
  a=$.qSA('#mtr_body_1 .divh3'); if (a) {
    for (i=0; i<a.length; i+=1) {
        p=a[i].parentNode; h=parseInt($.gStyle(p,'height'),10); p.className=f?'div_mo':'div_mc'; if ((f&&h==40) || (!f&&h!=40)) $.aHeight(p,o?200:25,25,p.scrollHeight,40);
    }
  }
  a=$.qSA('#mtr_body_1 .divh4'); if (a) {
    for (i=0; i<a.length; i+=1) {
        p=a[i].parentNode; h=parseInt($.gStyle(p,'height'),10); p.className=f?'div_mo':'div_mc'; if ((f&&h==25) || (!f&&h!=25)) $.aHeight(p,o?200:25,25,p.scrollHeight,25);
    }
  }
  $.sLS("page1010price",JSON.stringify(ls));
}
function f_mtr_body_2(o,f) {
  var a,p,i,h,ls2=f?[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,f_gdhm()]:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,f_gdhm()]; o=o?1:0;
  a=$.qSA('#mtr_body_2 .divh3'); if (a) {
    for (i=0; i<a.length; i+=1) {
        p=a[i].parentNode; h=parseInt($.gStyle(p,'height'),10); p.className=f?'div_mo':'div_mc'; if ((f&&h==40) || (!f&&h!=40)) $.aHeight(p,o?200:25,25,p.scrollHeight,40);
    }
  }
  a=$.qSA('#mtr_body_2 .divh4'); if (a) {
    for (i=0; i<a.length; i+=1) {
        p=a[i].parentNode; h=parseInt($.gStyle(p,'height'),10); p.className=f?'div_mo':'div_mc'; if ((f&&h==25) || (!f&&h!=25)) $.aHeight(p,o?200:25,25,p.scrollHeight,25);
    }
  }
  $.sLS("page1010price2",JSON.stringify(ls2));
}

/* Возврат строки yymmddhhtt из объекта текущей даты */
function f_gdhm() {
	var d=new Date(), y='000'+d.getFullYear(), l=y.length, m=(d.getMonth()+1), h=d.getHours(), dt=d.getDate(), t=d.getMinutes();
	if(l>4)y=y.substr(l-4,4); if(m<10)m='0'+m; if(h<10)h='0'+h; if(dt<10)dt='0'+dt; if(t<10)t='0'+t; return parseInt(y.substr(2,2)+m+dt+h+t);
}


/* Получение ответа сервера */
function f_hRSCR(){
var ret,st,p=$.id('idtext'),r;
try {if(v_http.readyState==4){
	st=v_http.status; f_hide_query();
	if(st==200||st==204){
		ret=v_http.responseText; /* wDelete(1); */
		if (ret=='reload') { f_logout(); return; } r=parseInt(ret,10)||0;
		if(!ret||ret=='error') {
			f_mesErr('Неверный пароль','Неверный пароль',250,115);
		} else  {
			if(v_mode==99) { /* Authorization */
				$.removeDialog(); v_esc=v_dialogEsc=0; f_reload();
			}
		}
	}else{f_mesXRST(st)} v_mode=0;
}}catch(e){v_mode=0;f_hide_query();}
}

/* ******************************************** */
function f_phblock(blk) {
	var c,l,i; blk=$.id(blk); if(!blk) {if($.id('phBlock'))$.id('phBlock').style.display='none';} if(v_anim!=0)return;
	c=$.qSA('.phblk'); if(c) {
		l=c.length; for (i=0; i<l; i+=1) {
			c[i].style.opacity=0; c[i].style.display='none';
		}
	} if($.id('phBlock'))$.id('phBlock').style.display='block'; blk.style.display='block'; v_anim=1; $.aOpacity(blk,200,50,0,1,function(s,d){if(s=='end'){$.aClear(d);v_anim=0}});
}
function f_phblock2(blk) {
	var c,l,i; blk=$.id(blk);
	c=$.qSA('.phblk'); if(c) {
		l=c.length; for (i=0; i<l; i+=1) {
			c[i].style.opacity=0; c[i].style.display='none';
		}
	} if(blk) {blk.style.display='block'; blk.style.opacity=1;}
}

function showHide(elem, element_id) {
    if (document.getElementById(element_id)) { 
        var obj = document.getElementById(element_id);
        if (obj.classList.contains('active')) {
			elem.classList.remove('active');
            obj.classList.remove('opacity');
			setTimeout(function () {
				obj.classList.remove('active');
			}, 400);
        }
        else {
			elem.classList.add('active');
			obj.classList.add('active');
			setTimeout(function () {
				obj.classList.add('opacity');
			}, 100);
		}
    }
}