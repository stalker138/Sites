// teohim-ek.ru| 2011-2018
var pba_brt=new Array(1),pba_atm=['tm1','tm2','tm3','tm4','tm5','tm6'],pba_adpkr=['dpkr1','dpkr2','dpkr3','dpkr4','dpkr5','dpkr6','dpkr7','dpkr8','dpkr9'];
var v_mode=0,v_layer=null,v_desc,v_esc=0,v_interval=null;
var v_cb='<div class="px',v_px0=v_cb+'0"></div>',v_px0b=v_cb+'0b"></div>',v_px3=v_cb+'3"></div>',v_px3b=v_cb+'3b"></div>',v_px5=v_cb+'5"></div>',v_px5b=v_cb+'5b"></div>',v_px10=v_cb+'10"></div>',v_px10b=v_cb+'10b"></div>',v_px15=v_cb+'15"></div>',v_px15b=v_cb+'15b"></div>',v_px15=v_cb+'15"></div>',v_px20b=v_cb+'20b"></div>',v_px20=v_cb+'20"></div>',v_px25b=v_cb+'25b"></div>',v_px25=v_cb+'25"></div>',v_px30b=v_cb+'30b"></div>',v_px30=v_cb+'30"></div>',v_alert_tbeg='<table style="width:100%;height:100%"><tbody><tr><td style="font:normal 13px arial">',v_alert_tend='</td></tr></tbody></table>',v_IEold="filter: progid:DXImageTransform.Microsoft.Shadow(color='#888888',Direction=145,Strength=5);";

function f_show_query(f){ // Если f==1, то полупрозрачный слой, если f==0, то непрозрачный для AJAX
var l,t; f=f||0;v_layer=fpb_addLayer(0,pb_IE18?0:'#808080',250,0,((f==0)?0:0.5));v_desc=(f==0)?fpb_a_opacity(v_layer,1000,100,0,1):-1;if(pb_IE18)setTimeout(function(){v_layer.style.background='#808080'},50);if(f)return; l=parseInt(pb_clientWidth/2-250,10);t=parseInt(pb_clientHeight/2-100,10);if(l<0)l=0;if(t<0)t=0;
v_layer.innerHTML='<div style="position:absolute;left:'+l+'px;top:'+t+'px;width:500px; height:150px; border:solid 1px #0969a3;"><table style="width:100%;height:100%;border:none;text-align:center;background:#f0f0f0;"><tbody><tr><td>Please wait...'+v_px10+'Пожалуйста, подождите...</td></tr></tbody></table></div>';
}function f_hide_query(){if(v_interval)clearInterval(v_interval);v_interval=null;pb_queryHttp=0;if(v_desc>=0)fpb_clearAnimate(v_desc);fpb_removeLayer(v_layer);v_layer=null;}
function f_message(ht,bt,w,h,b,s) { var f=bt.indexOf('<input'); v_esc=1; if(f==-1){if(h>0)h+=30;bt+=v_px15+'<input type="button" class="pb_buttons" id="idMsgOK" value="Ok" onclick="fpb_win_del(1,1)"/>';} fpb_alert('<div class="pb_ahb">'+ht+'</div>',v_alert_tbeg+bt+v_alert_tend,w,h,b,s); if(f==-1) fpb_BI('idMsgOK').focus(); }
function f_mesXRST(s,f) { v_esc=1; f=f||0; fpb_alert('<div class="pb_ahr">'+((f==0)?('Ошибка связи. status:'+s.toString()):s)+'</div>','<div class="px20"></div>Временная техническая проблема.'+v_px10+'Попробуйте повторить позже.',300,110); }
/* support_block */
function f_sys_setmain() { var p; if(pb_storage>0) { p=new Date(); p=Math.round(p.getTime()/60000);localStorage.setItem('setmain',p.toString()); } }
/* check E-mail */
function f_checkEmail(s){ var em=new RegExp("[^@]+@[^@]+\.[a-zA-Z]{2,6}"); return em.test(s); }

function fpb_onload(v,d) {
var i,p,t,n=null;
if (v!='00.71'||d!='131101') { f_message('Диагностика','Неверная версия JS-библиотеки<br>(необходима сборка 131101)<br><br>Обновите (перезагрузите) страницу.<br>Рекомендуется сбросить кеш браузера.',320,130,3);v_esc=0;return false; }
fpb_setEventHandlers('mouseover',function(){var n=null;fpb_animate(this,200,25,n,n,n,n,n,n,n,n,'#2878bb','#ffffff',n,n,function(s,i){var p=pb_ao[i].id.substr(2);if(s=='start'){fpb_ById('rtm'+p).className='rtmf'}});fpb_animate('tmb'+this.id.substr(2),200,25,n,n,n,n,n,n,n,n,'#2878bb','#ff0000')},pba_atm);
fpb_setEventHandlers('mouseout',function(){var n=null;fpb_animate(this,200,25,n,n,n,n,n,n,n,n,'#ffffff','#2878bb',n,n,function(s,i){var p=pb_ao[i].id.substr(2);if(s=='start'){fpb_ById('rtm'+p).className='rtms'}});fpb_animate('tmb'+this.id.substr(2),200,25,n,n,n,n,n,n,n,n,'#ff0000','#2878bb')},pba_atm);
fpb_setEventHandlers('click',function(){var n=null;fpb_animate(this,100,50,n,n,n,n,n,n,n,n,'#ffffff','#2878bb',n,n,function(s,i){var p=pb_ao[i].id.substr(2);if(s=='start'){fpb_ById('rtm'+p).className='rtms'}});fpb_animate('tmb'+this.id.substr(2),100,50,n,n,n,n,n,n,n,n,'#ff0000','#2878bb')},pba_atm);
pb_event.add('asws','mouseover',function(){var n=null;fpb_animate(this,500,25,n,n,n,n,[0,0,0,0],[10,10,10,10],n,n,n,n,'#ffffff','#2878bb')});
pb_event.add('asws','mouseout',function(){var n=null;fpb_animate(this,500,25,n,n,n,n,[10,10,10,10],[0,0,0,0],n,n,n,n,'#2878bb','#ffffff')});
pb_event.add('asws','click',function(){var n=null;fpb_animate(this,500,25,n,n,n,n,[10,10,10,10],[0,0,0,0],n,n,n,n,'#2878bb','#ffffff')});
i=fpb_ById('clb'); if (i) {
	pb_event.add('clb','mouseover',function(){var n=null;fpb_animate(this,300,30,n,n,n,n,[5,5,5,5],[10,10,10,10])});
	pb_event.add('clb','mouseout',function(){var n=null;fpb_animate(this,300,30,n,n,n,n,[10,10,10,10],[5,5,5,5])});
	pb_event.add('clb','click',f_clb);
}if (fpb_ById('dpkr1')) {
	fpb_setEventHandlers('mouseover',function(){var n=null;fpb_animate(this,200,40,n,n,n,n,n,n,n,n,n,n,'#ffffff','#2878bb')},pba_adpkr);
	fpb_setEventHandlers('mouseout',function(){var n=null;fpb_animate(this,200,40,n,n,n,n,n,n,n,n,n,n,'#2878bb','#ffffff')},pba_adpkr);
	fpb_setEventHandlers('click',function(){var n=null;fpb_animate(this,100,50,n,n,n,n,n,n,n,n,n,n,'#2878bb','#ffffff')},pba_adpkr);
}p=fpb_getEBCN('dfl'); if (p) { for (i=p.length-1; i>=0; i--) {
	pb_event.add(p[i],'mouseover',function(){var n=null;fpb_animate(this,300,25,n,n,n,n,n,n,n,n,n,n,'#ffffff','#ff0000')});
	pb_event.add(p[i],'mouseout',function(){var n=null;fpb_animate(this,300,25,n,n,n,n,n,n,n,n,n,n,'#ff0000','#ffffff')});
	pb_event.add(p[i],'click',function(){var n=null;fpb_animate(this,100,50,n,n,n,n,n,n,n,n,n,n,'#ff0000','#ffffff')});
}}p=fpb_getEBCN('pb_ismall'); if (p) { for (i=p.length-1; i>=0; i--) {
	pb_event.add(p[i],'mouseover',function(){var n=null;fpb_animate(this,200,25,n,n,n,n,n,n,n,n,n,n,'#ffffff','#d2cdc7')});
	pb_event.add(p[i],'mouseout',function(){var n=null;fpb_animate(this,200,25,n,n,n,n,n,n,n,n,n,n,'#d2cdc7','#ffffff')});
}}
p=fpb_ById('datePrice'); if(p) { t=new Date(); i=(t.getMonth()+1).toString(); if(i.length==1) i='0'+i; p.innerHTML='с '+(t.getDate().toString()+'.'+i+'.'+t.getFullYear().toString())+' г.'; }
pb_event.add(document,'keydown',function(e){e=e||window.event; if(v_esc>0&&e.keyCode==27) {if(fpb_BI('pb__alert')){fpb_win_del(1,1);v_esc=0}}});
if(fpb_ById('menuSert0'))fpb_initMenu('menuSert0');if(fpb_ById('menuSert1'))fpb_initMenu('menuSert1');if(fpb_ById('menuSert2'))fpb_initMenu('menuSert2');if(fpb_ById('menuSert3'))fpb_initMenu('menuSert3');
fpb_rotateBlock('pblock',5000,1000,['/images/i','.jpg',44,4,149,112,1,0,1]);
if (pb_isIE) n=setTimeout(f_img_load,2000); else f_img_load();
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
function f_clb() {var p;if(pb_queryHttp>0)return false; f_show_query(); v_mode=2; fpb_postHttp('/inc/callback.php','mfd',['mode',2,'login',1,'pass',1]); v_interval=setInterval(function() { f_hRqStCh(); },100); }
function f_postmail(){
var m; if(pb_queryHttp>0)return false; m=['mode',2,'login',1,'pass',1,'text1',fpb_ById('Ftext1').value||'0','text2',fpb_ById('Ftext2').value||'0','text3',fpb_ById('Ftext3').value||'0','texta',fpb_ById('Ftexta').value||'0','captcha',fpb_ById('Fcaptcha').value||'0','hcaptcha',fpb_ById('Fhcaptcha').value||'0'];
f_show_query();v_mode=2;fpb_postHttp('/inc/callback.php','mfd',m); v_interval=setInterval(function() { f_hRqStCh(); },100);fpb_win_del(1);
}function f_hRqStCh(){var ret,st,t;try{if(pb_xmlHttp.readyState==4){st=pb_xmlHttp.status;f_hide_query();if(st==200){ret=pb_xmlHttp.responseText;if(ret=='error'){v_mode=0;}if(v_mode==2){fpb_alert('<div class="px5"></div>Форма обратной связи',ret,560,400);}v_mode=0;}}}catch(e){f_hide_query();v_mode=0;}}
function f_img_load() {
var p,t='',s='.jpg" alt=""/><img src="/images/serts/',w='<img src="/images/objects/';
p=fpb_ById('id_h_sert'); if (p) p.innerHTML='<img src="/images/serts/sez_el_pu'+s+'pril1'+s+'pril2'+s+'pril3'+s+'pril4'+s+'zakl'+s+'info'+s+'zakl2'+s+'zakl3'+s+'zakl4'+s+'zakl1'+s+'sez_el_pu_2'+s+'sez_el_pu_eko'+s+'sez_el_pu_eko_2'+s+'sez_el_pu_2k'+s+'sez_el_pu_2k_2'+s+'sez_el_mb'+s+'sez_el_mb_2'+s+'sez_el_elb'+s+'sez_el_elb_2'+s+'sez_el_ed'+s+'sez_el_ed_2'+s+'spb_el_pu'+s+'spb_el_pu_2k'+s+'spb_el_mb'+s+'spb_el_elb'+s+'o_el_pu'+s+'o_el_pu_2k'+s+'o_el_mb'+s+'o_el_elb'+s+'o_el_ed.jpg" alt=""/>';
p=fpb_ById('id_h_work'); if (p) { for(i=1; i<=32;i++){t+=w+i+'.jpg" alt=""/>'} p.innerHTML=t; }
}