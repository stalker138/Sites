// teohim-magadan.ru | 2019-2020
var p_esc=0,p_interval=null,p_px5='<div style="height:5px"></div>',p_z_chr='',p_mode=0,p_ht='/auto/callback.php',p_wlh=window.location.href,p_spIDmail='test@test.ru';
var p_wbt1='<table style="width:100%;height:100%;margin-top:2px;"><tbody><tr><td style="font:bold 12px arial;color:#000080;text-align:center;">',p_wbt0='</td></tr></tbody></table>';
var p_px5='<div class="px5"></div>',p_px10='<div class="px10"></div>',p_bOk=p_px10+'<input class="abut" type="button" style="width:70px" value="Ok" onclick="fpb_win_del(1)"/>';
var p_alert_tbeg='<table style="width:100%;height:100%"><tbody><tr><td style="font:normal 13px arial">',p_alert_tend='</td></tr></tbody></table>';
var p_atm=[0,0,0,0,0],o_pageToUp=null;
function f_show_query(f){
var l,t; p_layer=fpb_addLayer(0,((pb_isIE==8)?0:'#808080'),250,0,0);p_desc=fpb_a_opacity(p_layer,300,50,0,(f?0.5:1));if(pb_isIE==8)setTimeout(function(){p_layer.style.background='#808080'},50);if(f)return;l=parseInt(pb_clientWidth/2-250,10);t=parseInt(pb_clientHeight/2-100,10);if(l<0)l=0;if(t<0)t=0;
p_layer.innerHTML='<div style="position:absolute;left:'+l+'px;top:'+t+'px;width:500px; height:150px; border:solid 1px #0969a3;"><table style="width:100%;height:100%;border:none;text-align:center;background:#f0f0f0;"><tbody><tr><td>Please wait...<div class="px10"></div>Пожалуйста, подождите...</td></tr></tbody></table></div>';
}function f_hide_query(){if(p_interval)clearInterval(p_interval);p_interval=null;pb_queryHttp=0;fpb_clearAnimate(p_desc);fpb_removeLayer(p_layer);p_layer=null;}
function fpb_onload(v,d) {
var p,i,a; /* if (v!='00.71'||d!='131101') { f_message('Диагностика','Неверная версия JS-библиотеки<br>(необходима сборка 131101)<br><br>Обновите (перезагрузите) страницу.<br>Рекомендуется сбросить кеш браузера.',320,130,3);p_esc=0;return false; }*/
if (pb_isFF==1) fpb_addCss('.abut {padding-bottom:3px;}');
p_spIDmail=p_spIDmail.substr(5)+p_spIDmail.substr(0,5); p=fpb_ById('swtch3'); if(p) p.href='mailto:'+p_spIDmail;
p_spIDmail='<a href="mailto:'+p_spIDmail+'">'+p_spIDmail+'</a>'; p=fpb_ById('dpIDmail0');if(p)p.innerHTML=p_spIDmail;
p=fpb_ById('spIDmail'); if(p) { p_spIDmail=p.innerHTML; p_spIDmail=p_spIDmail.substr(5)+p_spIDmail.substr(0,5);p_spIDmail='<a href="mailto:'+p_spIDmail+'">'+p_spIDmail+'</a>'; }
p=fpb_ById('dpIDmail');if(p)p.innerHTML=p_spIDmail;
for (i=0; i<10; i+=1) {
   p=fpb_ById('spIDmail'+i);
   if(p) {
	   p_spIDmail=p.innerHTML; p_spIDmail=p_spIDmail.substr(5)+p_spIDmail.substr(0,5);p_spIDmail='<a href="mailto:'+p_spIDmail+'">'+p_spIDmail+'</a>';
       p=fpb_ById('dpIDmail'+i); if(p)p.innerHTML=p_spIDmail;
   }
}

if (pb_IE18) fpb_setOpacity('topmenub',0.5);
p=fpb_getEBCN('mnbdiv','topmenu'); for (i=p.length-1; i>=0; i--) {
	a=p[i].parentNode; a=(a.offsetHeight>a.scrollHeight)?a.offsetHeight:a.scrollHeight; p_atm[parseInt(p[i].parentNode.id.substr(5),10)]=a+22; /*console.log(a);*/
    pb_event.add(p[i],'click',function(){var n=parseInt(this.parentNode.style.height,10)||0,p=p_atm,i=this.parentNode.id.substr(5);fpb_a_height(this.parentNode,200,(pb_IE18?70:25),p[i],97); /*this.parentNode.style.background=(n==p[i])?'none':'#d0d0d0';*/ this.innerHTML=(n!=p[i])?'&#8593; &#8593; &#8593;':'&#8595; &#8595; &#8595;'; this.style.backgroundImage=(n==p[i])?'url(/img/css/bg25-n.png)':'url(/img/css/bg25-nh.png)'});
}
pb_event.add(document,'keydown',function(e){e=e||window.event; if(p_esc>0&&e.keyCode==27) {if(fpb_BI('pb__alert')){fpb_win_del(1,1);p_esc=0}}});
p=fpb_getEBCN('pb_ismall'); if (p) { for (i=p.length-1; i>=0; i--) {
	pb_event.add(p[i],'mouseover',function(){var n=null;fpb_animate(this,200,25,n,n,n,n,n,n,n,n,n,n,'#eeeeee','#2878bb')});
	pb_event.add(p[i],'mouseout',function(){var n=null;fpb_animate(this,200,25,n,n,n,n,n,n,n,n,n,n,'#2878bb','#eeeeee')});
}} fpb_initMenu('lt_menu');
setTimeout(function(e){
  var a,p,p1,p2,p3,i,j;
  a=document.querySelectorAll('.divh3'); if (a) {
	for (i=0; i<a.length; i+=1) {
		pb_event.add(a[i],'click',function(e){
			var p,a,i,l,f=0; e=e||window.event; if (!e.target) e.target = e.srcElement; 
			if(e.target.parentNode.className == 'div_mc' || e.target.parentNode.className == 'div_mo') p=e.target.parentNode; else p=e.target.parentNode.parentNode;
			p.className=(parseInt(fpb_getStyle(p,'height'))==40)?'div_mo':'div_mc'; fpb_a_height(p,200,25,p.scrollHeight,40);
		});
	}
}
  a=document.querySelectorAll('.divh4'); if (a) {
	for (i=0; i<a.length; i+=1) {
		pb_event.add(a[i],'click',function(e){
			var p,a,i,l,f=0; e=e||window.event; if (!e.target) e.target = e.srcElement; 
			if(e.target.parentNode.className == 'div_mc' || e.target.parentNode.className == 'div_mo') p=e.target.parentNode; else p=e.target.parentNode.parentNode;
			p.className=(parseInt(fpb_getStyle(p,'height'))==25)?'div_mo':'div_mc'; fpb_a_height(p,200,25,p.scrollHeight,25);
		});
	}
}
});
pb_event.add(document.body,'click',function(e){ /* При любом клике по странице, проверка - не открыто-ли мобильное меню слева, и авто-закрытие если открыто. */
    var p,l=fpb_ById('leftblock'),b=document.body, sb=fpb_ById('sub_block'), w=parseInt(fpb_getStyle(l,'width'),10);
    e=e||window.event; p=e.target||e.srcElement; if((sb&&p==sb) || p==fpb_ById('svg1') || p==fpb_ById('ltblock') || p==fpb_ById('leftblock')) return;
    while (p&&p!=b&&p!=l)p=p.parentNode; if(p!=l){ if(w>100)f_ltblock(e);if(sb)sb.style.display='none';}
});

/* Проверка на страницу с вкладками (материалы) - и установка обработчика смены активной вкладки */
if (fpb_ById('mtr_tabs')) {
  pb_event.add(fpb_ById('mtr_tabs_1'),'click',f_mtr_tabs);
  pb_event.add(fpb_ById('mtr_tabs_2'),'click',f_mtr_tabs);
  pb_event.add(fpb_ById('mtr_tabs_3'),'click',f_mtr_tabs);
  pb_event.add(fpb_ById('mtr_tabs_4'),'click',f_mtr_tabs);
}
}
function f_mtr_tabs(e) {
var i, p, obj = e.target || e.srcElement; while (!obj.id) obj = obj.parentNode; /* Получение ссылки obj на <div id="mtr_tabs_N"> */
for (i=1; i<=4; i+=1) {
  p=fpb_ById('mtr_tabs_'+i); if(p) p.className=''; /* Снятие класса active со всех заголовков вкладок */
  p=fpb_ById('mtr_body_'+i); if(p) p.className=''; /* Снятие класса active со всех вкладок */
}
obj.className='active'; /* Установка класса active на заголовок выбранной вкладки */
p=fpb_ById('mtr_body_'+obj.id.substr(9,1)); if(p) p.className='active'; /* Установка класса active на выбранную вкладку */
}

function f_bup(e) { var p=window.pageYOffset||document.documentElement.scrollTop; if(p>0&&o_pageToUp==null) { o_pageToUp=setInterval(function(){var t, p=window.pageYOffset||document.documentElement.scrollTop; if (p>200) t=p/2+p/4; else t=p<20?0:p/2; window.scrollTo(0,t); if (p<20){clearInterval(o_pageToUp);o_pageToUp=null;}},30) } }
function f_message(ht,bt,w,h,b,s) { p_esc=1; fpb_alert('<div class="pb_ahb">'+ht+'</div>',p_alert_tbeg+bt+p_alert_tend,w,h,b,s); }
function f_swtch(f,em,tel){
	var a; f=f||0; em=em||0; tel=tel||0; if(pb_queryHttp>0||f<1||f>4||f==2||f==3)return false; p_mode=f; 
	a=['mode',p_mode,'login',p_mode,'pass',p_mode]; if(em>0||tel>0) a=['mode',p_mode,'login',p_mode,'pass',p_mode,'email',em,'tel',tel];
	f_show_query(); if(f_ym && typeof(f_ym)=='function') f_ym('ClickForm'); fpb_postHttp(p_ht,'mfd',a); p_interval=setInterval(function() { f_hRqStCh(); },100);
}
function f_hRqStCh(){
var ret,st,t,i,p;try{
if(pb_xmlHttp.readyState==4){
	st=pb_xmlHttp.status;f_hide_query();
	if(st==200){ret=pb_xmlHttp.responseText;if(ret=='error'){p_mode=0}if(p_mode>0){
		fpb_alert('<div class="pb_ahb">'+((p_mode==1)?'Пожелания, замечания, сообщение об ошибке':((p_mode==4)?'Задать вопрос':('Оформление заказа на '+((p_mode==2)?'материалы':'работы'))))+'</div>',ret,(p_mode==4?360:680),420);
		if(pb_storage>0) { for(i=1;i<=5;i++){ t=fpb_trim(localStorage.getItem('zclb'+i))||''; p=fpb_ById('Ftext'+((i<5)?i:'a')); if (p&&p_mode==1&&i==2) p.value=p_wlh; else { if (p&&t.length>0) p.value=t; } } }
	}p_mode=0} else { c_esc=1; fpb_alert('<div class="pb_ahr">'+'Ошибка связи. status:'+st.toString()+'</div>',c_wbt1+'Попробуйте еще раз'+c_bOk+c_wbt0,300,100); }
}}catch(e){f_hide_query();p_mode=0;}
}

function f_postmail(f,em,tel){
	var i,m='',j=0,s='',t='', as=['','','CallBack','OrderGoods','OrderWork','OrderGoodsCvr','OrderGoodsWorkCvr','ClickForm','ClickOrd'];
	if(pb_queryHttp>0)return false; f=f||0; em=em||0; tel=tel||0;
	if (f==1||f==4) {
	  p_mode=f; m=['mode',p_mode,'login',p_mode,'pass',p_mode,'text1',fpb_ById('Ftext1').value||'0','text2',(fpb_ById('Ftext2')?(fpb_ById('Ftext2').value||'0'):''),'text3',(fpb_ById('Ftext3')?(fpb_ById('Ftext3').value||'0'):''),'texta',fpb_ById('Ftexta').value||'0','captcha',fpb_ById('Fcaptcha').value||'0','hcaptcha',fpb_ById('Fhcaptcha').value||'0','email',em,'tel',tel];
	} else {
	f_z_chr('post'); if (fpb_ById('id_mat').style.display=='block') { if ((parseInt(fpb_ById('idSumMatUp').innerHTML,10)||0)>0) p_mode=2; else {alert('Ваш заказ пустой');fpb_win_del(1);return false} }
	if (fpb_ById('id_rab').style.display=='block') { if (p_z_chr=='0¡ ¡0000000¡ ') {alert('Ваш заказ пустой');fpb_win_del(1);return false} else p_mode=3; }
	if(p_mode==2) { for(i=11;i<=110;i++) { p=fpb_ById('idInp'+i); if (p) { p=fpb_trim(p.value); if(p>'0') s+='<tr><td style="text-align:left">'+fpb_ById('idName'+i).innerHTML+'</td><td>'+p+'</td><td>'+parseInt(fpb_ById('idtdC'+i).innerHTML,10)+'</td><td>'+parseInt(fpb_ById('idtdS'+i).innerHTML,10)+'</td></tr>'; j=j+parseInt(fpb_ById('idtdS'+i).innerHTML,10) } } if (j>0) s+='<tr><td colspan="3" style="text-align:right">ИТОГО:</td><td>'+j.toString()+'</td></tr>'; }
	m=['mode',p_mode,'login',p_mode,'pass',p_mode,'text1',fpb_ById('Ftext1').value||'0','text2',fpb_ById('Ftext2').value||'0','text3',fpb_ById('Ftext3').value||'0','text4',fpb_ById('Ftext4').value||'0','texta',fpb_ById('Ftexta').value||'0','captcha',fpb_ById('Fcaptcha').value||'0','hcaptcha',fpb_ById('Fhcaptcha').value||'0','zlist',s,'zrlist',((p_z_chr=='0¡ ¡0000000¡ ')?'':p_z_chr)];
	}
	f_show_query(); if(f_ym && typeof(f_ym)=='function') f_ym(as[f]); fpb_postHttp(p_ht,'mfd',m); p_interval=setInterval(function() { f_hRqStCh(); },100);fpb_win_del(1);
}
function f_ch_clb(n){ var p=fpb_ById('Ftext'+((n<5)?n:'a')); if(pb_storage>0&&p) { p=fpb_trim(p.value)||' '; localStorage.setItem('zclb'+n,p); } console.log(p);}
function f_ltblock() {
	var p=fpb_ById('leftblock'), w=parseInt(fpb_getStyle(p,'width'),10);
	p.style.width = (w<100?307:0)+'px';
}