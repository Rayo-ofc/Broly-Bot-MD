/*
• @David-Chian
- https://github.com/David-Chian
*/

function _0xb46c(_0x552b67,_0xde2edd){const _0x55f11c=_0x55f1();return _0xb46c=function(_0xb46ca5,_0x39b28e){_0xb46ca5=_0xb46ca5-0xd8;let _0xee7e4=_0x55f11c[_0xb46ca5];return _0xee7e4;},_0xb46c(_0x552b67,_0xde2edd);}const _0x47669f=_0xb46c;(function(_0x3f949c,_0x4a0b57){const _0x581772=_0xb46c,_0x28dabf=_0x3f949c();while(!![]){try{const _0x24127e=-parseInt(_0x581772(0x10e))/0x1+-parseInt(_0x581772(0xe0))/0x2+-parseInt(_0x581772(0xe9))/0x3*(parseInt(_0x581772(0xda))/0x4)+parseInt(_0x581772(0x10d))/0x5+-parseInt(_0x581772(0x105))/0x6*(-parseInt(_0x581772(0xe4))/0x7)+-parseInt(_0x581772(0xef))/0x8*(-parseInt(_0x581772(0xea))/0x9)+parseInt(_0x581772(0x10f))/0xa;if(_0x24127e===_0x4a0b57)break;else _0x28dabf['push'](_0x28dabf['shift']());}catch(_0xa2f989){_0x28dabf['push'](_0x28dabf['shift']());}}}(_0x55f1,0x65b11));import _0x5681a3 from'fs';const obtenerDatos=()=>{const _0x5cc2b3=_0xb46c;return _0x5681a3[_0x5cc2b3(0xeb)](_0x5cc2b3(0xd8))?JSON[_0x5cc2b3(0xdd)](_0x5681a3['readFileSync'](_0x5cc2b3(0xd8),'utf-8')):{'chats':{}};},guardarDatos=_0x211213=>{const _0x7faf79=_0xb46c;_0x5681a3[_0x7faf79(0x10c)](_0x7faf79(0xd8),JSON['stringify'](_0x211213,null,0x2));},obtenerPersonajes=()=>{const _0x412202=_0xb46c;if(_0x5681a3[_0x412202(0xeb)](_0x412202(0xdc)))return JSON[_0x412202(0xdd)](_0x5681a3[_0x412202(0xec)](_0x412202(0xdc),_0x412202(0xfc)));else throw new Error(_0x412202(0xe3));},verifi=()=>{const _0x4cdabd=_0xb46c;try{const _0x40b002=JSON['parse'](_0x5681a3[_0x4cdabd(0xec)]('./package.json',_0x4cdabd(0xfc)));if(_0x40b002['name']!==_0x4cdabd(0xfd))return![];if(_0x40b002['repository']['url']!=='git+https://github.com/David-Chian/Megumin-Bot-MD.git')return![];return!![];}catch(_0x5dc0c1){return![];}};let handler=async(_0x5d9b14,{conn:_0x26558f,args:_0x456733})=>{const _0x3f01c9=_0xb46c;if(_0x456733[_0x3f01c9(0xf6)]<0x2){_0x26558f['reply'](_0x5d9b14[_0x3f01c9(0xe7)],_0x3f01c9(0x107),_0x5d9b14,rcanal);return;}if(!verifi()){await _0x26558f[_0x3f01c9(0xf3)](_0x5d9b14['chat'],_0x3f01c9(0xe6),_0x5d9b14,rcanal);return;}let _0x7bdcc0=_0x5d9b14[_0x3f01c9(0x101)][0x0];if(!_0x7bdcc0){_0x26558f[_0x3f01c9(0xf3)](_0x5d9b14[_0x3f01c9(0xe7)],'𝑫𝒆𝒃𝒆𝒔\x20𝒎𝒆𝒏𝒄𝒊𝒐𝒏𝒂𝒓\x20𝒂\x20𝒖𝒏\x20𝒖𝒔𝒖𝒂𝒓𝒊𝒐\x20𝒗𝒂𝒍𝒊𝒅𝒐.',_0x5d9b14,rcanal);return;}let _0xed76e6=_0x456733[_0x3f01c9(0xee)](0x1)['join']('\x20')[_0x3f01c9(0xed)]();const _0x11cf35=_0x5d9b14[_0x3f01c9(0x111)],_0x40892f=_0x5d9b14[_0x3f01c9(0xe7)],_0x1b7ef4=obtenerDatos(),_0x3ddbd2=obtenerPersonajes();!_0x1b7ef4[_0x3f01c9(0xe2)][_0x40892f]&&(_0x1b7ef4[_0x3f01c9(0xe2)][_0x40892f]={'usuarios':{},'personajesReservados':[]});let _0x3db7f3=_0x1b7ef4[_0x3f01c9(0xe2)][_0x40892f][_0x3f01c9(0xf9)][_0x11cf35];if(!_0x3db7f3||_0x3db7f3[_0x3f01c9(0xfb)][_0x3f01c9(0xf6)]===0x0){_0x26558f[_0x3f01c9(0xf3)](_0x5d9b14[_0x3f01c9(0xe7)],_0x3f01c9(0xf4),_0x5d9b14,rcanal);return;}let _0x333408=_0x3db7f3[_0x3f01c9(0xfb)]['findIndex'](_0x1d1a1e=>_0x1d1a1e[_0x3f01c9(0x104)][_0x3f01c9(0xed)]()===_0xed76e6[_0x3f01c9(0xed)]()['trim']());if(_0x333408===-0x1){_0x26558f[_0x3f01c9(0xf3)](_0x5d9b14[_0x3f01c9(0xe7)],_0x3f01c9(0xd9)+_0xed76e6+_0x3f01c9(0xe8),_0x5d9b14,rcanal);return;}let _0x65219f=_0x3ddbd2[_0x3f01c9(0xf2)](_0x565c2d=>_0x565c2d['name']['toLowerCase']()===_0xed76e6['toLowerCase']()[_0x3f01c9(0xfa)]());if(!_0x65219f){_0x26558f[_0x3f01c9(0xf3)](_0x5d9b14['chat'],_0x3f01c9(0x109)+_0xed76e6+_0x3f01c9(0xde),_0x5d9b14,rcanal);return;}let _0x220f84={'name':_0x3db7f3['characters'][_0x333408][_0x3f01c9(0x104)],'value':_0x65219f[_0x3f01c9(0x106)],'url':_0x65219f[_0x3f01c9(0x112)]};!_0x1b7ef4[_0x3f01c9(0xe2)][_0x40892f]['usuarios'][_0x7bdcc0]&&(_0x1b7ef4['chats'][_0x40892f][_0x3f01c9(0xf9)][_0x7bdcc0]={'characterCount':0x0,'totalRwcoins':0x0,'characters':[]});let _0x4eff6a=_0x1b7ef4[_0x3f01c9(0xe2)][_0x40892f][_0x3f01c9(0xf9)][_0x7bdcc0];_0x4eff6a[_0x3f01c9(0xfb)][_0x3f01c9(0x10a)]({'name':_0x220f84[_0x3f01c9(0x104)],'url':_0x220f84[_0x3f01c9(0x112)],'value':_0x220f84[_0x3f01c9(0x106)]}),_0x4eff6a[_0x3f01c9(0xe1)]++,_0x4eff6a[_0x3f01c9(0xf0)]+=_0x220f84[_0x3f01c9(0x106)],_0x1b7ef4[_0x3f01c9(0xe2)][_0x40892f][_0x3f01c9(0xf9)][_0x7bdcc0]=_0x4eff6a,_0x3db7f3[_0x3f01c9(0xfb)]['splice'](_0x333408,0x1),_0x3db7f3[_0x3f01c9(0xe1)]--,_0x3db7f3[_0x3f01c9(0xf0)]-=_0x220f84[_0x3f01c9(0x106)],_0x1b7ef4[_0x3f01c9(0xe2)][_0x40892f][_0x3f01c9(0xf9)][_0x11cf35]=_0x3db7f3,guardarDatos(_0x1b7ef4);let _0x3139df=await _0x26558f['getName'](_0x7bdcc0),_0x18ebef=await _0x26558f[_0x3f01c9(0x103)](_0x11cf35),_0x2d2a19=_0x3f01c9(0x108)+_0x220f84[_0x3f01c9(0x104)]+_0x3f01c9(0x10b)+_0x11cf35[_0x3f01c9(0xfe)]('@')[0x0]+_0x3f01c9(0xf7)+_0x7bdcc0[_0x3f01c9(0xfe)]('@')[0x0]+_0x3f01c9(0xdf)+_0x220f84['value']+_0x3f01c9(0xdb);await _0x26558f[_0x3f01c9(0xf1)](_0x5d9b14['chat'],{'image':{'url':_0x220f84['url']},'caption':_0x2d2a19,'mentions':[_0x7bdcc0,_0x11cf35]},{'quoted':_0x5d9b14});};handler[_0x47669f(0xf5)]=[_0x47669f(0x100)],handler[_0x47669f(0xf8)]=['rollwaifu'],handler[_0x47669f(0xff)]=[_0x47669f(0x110)],handler[_0x47669f(0xe5)]=!![],handler[_0x47669f(0x102)]=!![];function _0x55f1(){const _0x778076=['1233380Wfdsic','darrw','sender','url','data.json','𝑵𝒐\x20𝒕𝒊𝒆𝒏𝒆𝒔\x20𝒆𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x20','4yvIVmV','\x20𝑹𝑾𝒄𝒐𝒊𝒏𝒔','./lib/characters.json','parse','\x20𝒆𝒏\x20𝒍𝒂\x20𝒃𝒂𝒔𝒆\x20𝒅𝒆\x20𝒅𝒂𝒕𝒐𝒔.','\x0a𝑨𝒅𝒆𝒎𝒂𝒔,\x20𝒐𝒃𝒕𝒊𝒆𝒏𝒆𝒔\x20','565530sSFiET','characterCount','chats','No\x20se\x20encontró\x20el\x20archivo\x20de\x20personajes.','26635vxJJQR','register','𝑬𝒔𝒕𝒆\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20𝒔𝒐𝒍𝒐\x20𝒆𝒔𝒕𝒂́\x20𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆\x20𝒑𝒂𝒓𝒂\x20𝑴𝒆𝒈𝒖𝒎𝒊𝒏-𝑩𝒐𝒕-𝑴𝑫.\x0a\x20🔥\x20https://github.com/David-Chian/Megumin-Bot-MD','chat','\x20𝒆𝒏\x20𝒕𝒖\x20𝒊𝒏𝒗𝒆𝒏𝒕𝒂𝒓𝒊𝒐.','1028046yZCOPD','5319oPMLmo','existsSync','readFileSync','toLowerCase','slice','5832DZmnLd','totalRwcoins','sendMessage','find','reply','𝑵𝒐\x20𝒕𝒊𝒆𝒏𝒆𝒔\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆𝒔\x20𝒆𝒏\x20𝒕𝒖\x20𝒊𝒏𝒗𝒆𝒏𝒕𝒂𝒓𝒊𝒐.','help','length','\x0a𝑨𝒉𝒐𝒓𝒂\x20𝒆𝒔\x20𝒅𝒆\x20@','tags','usuarios','trim','characters','utf-8','Megumin-Bot-MD','split','command','darrw\x20@usuario\x20<personaje>','mentionedJid','group','getName','name','6keaEiT','value','𝑫𝒆𝒃𝒆𝒔\x20𝒎𝒆𝒏𝒄𝒊𝒐𝒏𝒂𝒓\x20𝒂\x20𝒖𝒏\x20𝒖𝒔𝒖𝒂𝒓𝒊𝒐\x20𝒚\x20𝒆𝒍\x20𝒏𝒐𝒎𝒃𝒓𝒆\x20𝒅𝒆𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆.\x0a\x20`/darrw\x20@usuario\x20Megumin`.','𝑬𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x0a','𝑵𝒐\x20𝒔𝒆\x20𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐\x20𝒆𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x20','push','\x0a𝑫𝒆\x20@','writeFileSync','3004020YyoVxI','116810GBYANf'];_0x55f1=function(){return _0x778076;};return _0x55f1();}export default handler;