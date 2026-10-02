// fg-partner.ru | 2014-2015
var p_esc=0,p_interval=null,p_px5='<div style="height:5px"></div>',p_z_chr='',p_mode=0,p_layer,p_ht='/auto/callback.php',p_sb=['swtch1','swtch2'],p_wlh=window.location.href,p_spIDmail='il.ruriros@ma';
var p_wbt1='<table style="width:100%;height:100%;margin-top:2px;"><tbody><tr><td style="font:bold 12px arial;color:#000080;text-align:center;">',p_wbt0='</td></tr></tbody></table>';
var p_px5='<div class="px5"></div>',p_px10='<div class="px10"></div>',p_bOk=p_px10+'<input class="abut" type="button" style="width:70px" value="Ok" onclick="fpb_win_del(1)"/>';
var t_a_tm=['','/','/','/contacts/'],t_a_fm=['','/','/objects/','/contacts/'],t_a_lm=['','/nalivnye-vr/','/polymer-vr/','/beton-vr/','/polymercement-vr/','/price-vr/','/technologies-vr/','/sert-vr/','/colors/','/','http://www.teohim.ru/nalivnye/'];
var p_alert_tbeg='<table style="width:100%;height:100%"><tbody><tr><td style="font:normal 13px arial">',p_alert_tend='</td></tr></tbody></table>';
function f_show_query(f){
var l,t; p_layer=fpb_addLayer(0,((pb_isIE==8)?0:'#808080'),250,0,0);p_desc=fpb_a_opacity(p_layer,300,50,0,(f?0.5:1));if(pb_isIE==8)setTimeout(function(){p_layer.style.background='#808080'},50);if(f)return;l=parseInt(pb_clientWidth/2-250,10);t=parseInt(pb_clientHeight/2-100,10);if(l<0)l=0;if(t<0)t=0;
p_layer.innerHTML='<div style="position:absolute;left:'+l+'px;top:'+t+'px;width:500px; height:150px; border:solid 1px #0969a3;"><table style="width:100%;height:100%;border:none;text-align:center;background:#f0f0f0;"><tbody><tr><td>Please wait...<div class="px10"></div>Пожалуйста, подождите...</td></tr></tbody></table></div>';
}function f_hide_query(){if(p_interval)clearInterval(p_interval);p_interval=null;pb_queryHttp=0;fpb_clearAnimate(p_desc);fpb_removeLayer(p_layer);p_layer=null;}

function fpb_onload(v,d) {
var p,i,j;
var goalsM = ['PuPol','EdPol'];
var goalsH = ['polyurethan-ns','epoxide-ns'];
var dlh = document.location.href;

if (v!='00.71'||d!='131101') { f_message('Диагностика','Неверная версия JS-библиотеки<br>(необходима сборка 131101)<br><br>Обновите (перезагрузите) страницу.<br>Рекомендуется сбросить кеш браузера.',320,130,3);p_esc=0;return false; }
if (pb_isFF==1) fpb_addCss('.abut {padding-bottom:3px;}'); p_spIDmail=p_spIDmail.substr(5)+p_spIDmail.substr(0,5);p_spIDmail='<a href="mailto:'+p_spIDmail+'">'+p_spIDmail+'</a>'; p=fpb_ById('dpIDmail0');if(p)p.innerHTML=p_spIDmail; p=fpb_ById('dpIDmail');if(p)p.innerHTML=p_spIDmail;
p=fpb_ById('pb_app_nolink');if(p){for(i=1;i<11;i+=1)fpb_ById('a_lm_'+i).href=t_a_lm[i];for(i=1;i<4;i+=1){fpb_ById('a_tm'+i).href=t_a_tm[i]}}

pb_event.add('support_block','mouseover',anim1);
pb_event.add('support_block','mouseout',anim2);
pb_event.add('support_block','click',function(){if(this.style.width=='234px')anim2();else anim1();} );
fpb_setEventHandlers('mouseover',function(){var n=null;fpb_animate(this,150,25,n,n,n,n,n,n,n,n,'#ffffff','#d0d0d0')},p_sb);
fpb_setEventHandlers('mouseout',function(){var n=null;fpb_animate(this,150,25,n,n,n,n,n,n,n,n,'#d0d0d0','#ffffff')},p_sb);
if (pb_IE18) fpb_setOpacity('topmenub',0.5);

p=fpb_getEBCN('mnbdiv','topmenu'); //console.log(p.length-1);
for (i=p.length-1; i>=0; i--) {
	pb_event.add(p[i],'click',function(){var n=parseInt(this.parentNode.style.height,10)||0,p=[0,210,295,295,295,255],i=this.parentNode.id.substr(5);fpb_a_height(this.parentNode,200,(pb_IE18?70:25),p[i],100); /*this.parentNode.style.background=(n==p[i])?'none':'#d0d0d0';*/ this.innerHTML=(n!=p[i])?'&#8593; &#8593; &#8593;':'&#8595; &#8595; &#8595;';});
}

pb_event.add(document,'keydown',function(e){e=e||window.event; if(p_esc>0&&e.keyCode==27) {if(fpb_BI('pb__alert')){fpb_win_del(1,1);p_esc=0}}});
// fpb_rotateBlock('phblock',5000,1000,['/img/i2/','.jpg',8,1,272,152,0,0,1]);
p=fpb_ById('content').getElementsByTagName('img'); for (i=p.length-1; i>=0; i--) {
	if(p[i].className.indexOf('pb_ismall')!== -1) {
	pb_event.add(p[i],'mouseover',function(){var n=null;fpb_animate(this,300,25,n,n,n,n,n,n,n,n,n,n,'#eeeeee','#005093')});
	pb_event.add(p[i],'mouseout',function(){var n=null;fpb_animate(this,300,25,n,n,n,n,n,n,n,n,n,n,'#005093','#eeeeee')});
	pb_event.add(p[i],'click',function(){var n=null;fpb_animate(this,200,25,n,n,n,n,n,n,n,n,n,n,'#005093','#eeeeee')});
}}
p = document.querySelectorAll('.stel'); if (p) {
	for (i=p.length-1; i>=0; i--) {
		p[i].onclick=function(e){
			var t = e.target||e.srcElement;
			for (j=goalsH.length; j>=0; j-=1) {
				if (dlh.indexOf(goalsH[j])!=-1) { yaCounter22962496.reachGoal(goalsM[j]);  /* console.log(goalsH[j]+' '+goalsM[j]); */ }
			}
			t.innerHTML='<a href="tel:+73833474749" onclick="yaCounter22962496.reachGoal(\'Сalling\'); return true;">8(383) 347-47-49</a>';
			t.setAttribute('title','');
			t.onclick=false;
		}
	}
}
fpb_initMenu('lt_menu');
}
function f_swtch(f){
	f=f||0; if(pb_queryHttp>0||f<1||f>4||f==2||f==3)return false; p_mode=f; f_show_query();fpb_postHttp(p_ht,'mfd',['mode',p_mode,'login',p_mode,'pass',p_mode]); p_interval=setInterval(function() { f_hRqStCh(); },100);
}function anim1() {var n=null;fpb_animate('support_block',200,25,[n,n,44,n],[n,n,234,n])}function anim2(){var n=null;fpb_animate('support_block',200,25,[n,n,234,n],[n,n,44,n])}
function f_message(ht,bt,w,h,b,s) { p_esc=1; fpb_alert('<div class="pb_ahb">'+ht+'</div>',p_alert_tbeg+bt+p_alert_tend,w,h,b,s); }
function f_hRqStCh(){
var ret,st,t,i,p;try{
if(pb_xmlHttp.readyState==4){
	st=pb_xmlHttp.status;f_hide_query();
	if(st==200){ret=pb_xmlHttp.responseText;if(ret=='error'){p_mode=0}if(p_mode>0){
		fpb_alert('<div class="pb_ahb">'+((p_mode==1)?'Пожелания, замечания, сообщение об ошибке':((p_mode==4)?'Задать вопрос':('Оформление заказа на '+((p_mode==2)?'материалы':'работы'))))+'</div>',ret,(p_mode==4?570:670),400);
		if(pb_storage>0) { for(i=1;i<=5;i++){ t=fpb_trim(localStorage.getItem('zclb'+i))||''; p=fpb_ById('Ftext'+((i<5)?i:'a')); if (p&&p_mode==1&&i==2) p.value=p_wlh; else { if (p&&t.length>0) p.value=t; } } }
	}p_mode=0} else { c_esc=1; fpb_alert('<div class="pb_ahr">'+'Ошибка связи. status:'+st.toString()+'</div>',c_wbt1+'Попробуйте еще раз'+c_bOk+c_wbt0,300,100); }
}}catch(e){f_hide_query();p_mode=0;}
}

function f_postmail(f){
	var i,m='',j=0,s='',t=''; if(pb_queryHttp>0)return false; f=f||0;
	if (f==1||f==4){ p_mode=f; m=['mode',p_mode,'login',p_mode,'pass',p_mode,'text1',fpb_ById('Ftext1').value||'0','text2',fpb_ById('Ftext2').value||'0','texta',fpb_ById('Ftexta').value||'0','captcha',fpb_ById('Fcaptcha').value||'0','hcaptcha',fpb_ById('Fhcaptcha').value||'0']; }
	else {
	f_z_chr('post'); if (fpb_ById('id_mat').style.display=='block') { if ((parseInt(fpb_ById('idSumMatUp').innerHTML,10)||0)>0) p_mode=2; else {alert('Ваш заказ пустой');fpb_win_del(1);return false} }
	if (fpb_ById('id_rab').style.display=='block') { if (p_z_chr=='0¡ ¡0000000¡ ') {alert('Ваш заказ пустой');fpb_win_del(1);return false} else p_mode=3; }
	if(p_mode==2) { for(i=11;i<=110;i++) { p=fpb_ById('idInp'+i); if (p) { p=fpb_trim(p.value); if(p>'0') s+='<tr><td style="text-align:left">'+fpb_ById('idName'+i).innerHTML+'</td><td>'+p+'</td><td>'+parseInt(fpb_ById('idtdC'+i).innerHTML,10)+'</td><td>'+parseInt(fpb_ById('idtdS'+i).innerHTML,10)+'</td></tr>'; j=j+parseInt(fpb_ById('idtdS'+i).innerHTML,10) } } if (j>0) s+='<tr><td colspan="3" style="text-align:right">ИТОГО:</td><td>'+j.toString()+'</td></tr>'; }
	m=['mode',p_mode,'login',p_mode,'pass',p_mode,'text1',fpb_ById('Ftext1').value||'0','text2',fpb_ById('Ftext2').value||'0','text3',fpb_ById('Ftext3').value||'0','text4',fpb_ById('Ftext4').value||'0','texta',fpb_ById('Ftexta').value||'0','captcha',fpb_ById('Fcaptcha').value||'0','hcaptcha',fpb_ById('Fhcaptcha').value||'0','zlist',s,'zrlist',((p_z_chr=='0¡ ¡0000000¡ ')?'':p_z_chr)];
	}
	f_show_query();fpb_postHttp(p_ht,'mfd',m); p_interval=setInterval(function() { f_hRqStCh(); },100);fpb_win_del(1);
}
function f_ch_clb(n){ var p=fpb_ById('Ftext'+((n<5)?n:'a')); if(pb_storage>0&&p) { p=fpb_trim(p.value)||' '; localStorage.setItem('zclb'+n,p); }}
function f_ltblock() {
	var p=fpb_ById('leftblock'), w=parseInt(fpb_getStyle(p,'width'),10);
	p.style.width = (w<100?307:50)+'px';
	p.style.zIndex = (w<100?2:1);
	p=fpb_ById('ltblock').style;
	p.height = w<100?'50px':'auto';
	fpb_ById('conts').style.visibility = fpb_ById('prs').style.visibility = fpb_ById('home').style.visibility = w<100 ? 'hidden' : 'visible';
}