import{watchFile,unwatchFile}from'fs';import _0x2e8fb6 from'chalk';import{fileURLToPath}from'url';import _0x5ee47c from'fs';import _0x2dd9dc from'cheerio';import _0x4fc397 from'node-fetch';import _0x109a07 from'axios';import _0x1125cb from'moment-timezone';global['owner']=[['5212411233838','𝙾𝙵𝙲\x20𝚈𝙾𝚅𝙰𝙽𝙸',!![]],['5212412377467','𝙾𝙵𝙲\x20𝚈𝙾𝚅𝙰𝙽𝙸',!![]],['5212414147874','𝙾𝙵𝙲\x20𝚈𝙾𝚅𝙰𝙽𝙸',!![]]],global['suittag']=['5212412477467'],global['mods']=[],global['prems']=['5212412474767'],global['reportes_solicitudes']=['5212412377467'],global['openai_key']='sk-0',global['openai_org_id']='org-3',global['keysZens']=['LuOlangNgentot','c2459db922','37CC845916','6fb0eff124','hdiiofficial','fiktod','BF39D349845E','675e34de8a','0b917b905e6f'],global['keysxxx']=keysZens[Math['floor'](keysZens['length']*Math['random']())],global['keysxteammm']=['29d4b59a4aa687ca','5LTV57azwaid7dXfz5fzJu','cb15ed422c71a2fb','5bd33b276d41d6b4','HIRO','kurrxd09','ebb6251cc00f9c63'],global['keysxteam']=keysxteammm[Math['floor'](keysxteammm['length']*Math['random']())],global['keysneoxrrr']=['5VC9rvNx','cfALv5'],global['keysneoxr']=keysneoxrrr[Math['floor'](keysneoxrrr['length']*Math['random']())],global['lolkeysapi']=['BrunoSobrino_2'],global['itsrose']=['4b146102c4d500809da9d1ff'],(global['APIs']={'xteam':'https://api.xteam.xyz','dzx':'https://api.dhamzxploit.my.id','lol':'https://api.lolhuman.xyz','neoxr':'https://api.neoxr.my.id','zenzapis':'https://api.zahwazein.xyz','akuari':'https://api.akuari.my.id','akuari2':'https://apimu.my.id','fgmods':'https://api-fgmods.ddns.net','botcahx':'https://api.botcahx.biz.id','ibeng':'https://api.ibeng.tech/docs','rose':'https://api.itsrose.site','popcat':'https://api.popcat.xyz','xcoders':'https://api-xcoders.site','vihangayt':'https://vihangayt.me','erdwpe':'https://api.erdwpe.com','xyroinee':'https://api.xyroinee.xyz','nekobot':'https://nekobot.xyz'},global['APIKeys']={'https://api.xteam.xyz':''+keysxteam,'https://api.lolhuman.xyz':'GataDios','https://api.neoxr.my.id':''+keysneoxr,'https://api.zahwazein.xyz':''+keysxxx,'https://api-fgmods.ddns.net':'fg-dylux','https://api.botcahx.biz.id':'Admin','https://api.ibeng.tech/docs':'tamvan','https://api.itsrose.site':'Rs-Zeltoria','https://api-xcoders.site':'Frieren','https://api.xyroinee.xyz':'uwgflzFEh6'}),global['packname']='⬒⟢⟨𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰⟩⟣⬒',global['igfg']='⬒⟢⟨𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰⟩⟣⬒\x0a⬒⟢⟨+52\x20241\x20237\x207467⟩⬒\x0a⬒⟢⟨VERSION\x20DEL\x20BOT⟩⬒\x20',global['author']='\x0aʏᴏᴠᴀɴɪ\x0a1.10.9',global['vs']='1.10.90',global['version']=vs,global['gt']='⬒⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⬒',global['hadesbot']=gt,global['yt']='https://youtu.be/aPu9wQi-z8U',global['youtube']=yt,global['ig']='➟\x20*Hola\x20bienvenido\x20al\x20menu\x20principal\x20de\x20miku-bot\x20por\x20favor\x20escribe\x20el\x20menu\x20que\x20quieres\x20usar,\x20si\x20deseas\x20convertirte\x20en\x20un\x20sub-bot\x20usa\x20el\x20comando\x20siguientes*\x0a➟\x20*.qr|.serbot|.jadibot*\x0a➟\x20*.stop\x20/este\x20comando\x20es\x20para\x20detener\x20serbot*\x0a➟\x20*.bots\x20/este\x20comando\x20es\x20para\x20ver\x20los\x20sub-bot\x20conectados*\x0a⬒\x20─⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─\x20⬒\x0a\x0a⬒\x20─⟢⟨\x20*CHATGPT*\x20⟩⟣─\x20⬒\x0a➟\x20*.ia\x20chatgpt*\x0a➟\x20*.bot\x20pergunta*\x0a⬒─⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─\x20⬒\x0a⬒\x20─⟢⟨\x20*Menus*\x20⟩⟣─\x20⬒\x0a\x0a➟\x20*.descargas*\x0a➟\x20*.grupos*\x0a➟\x20*.info*\x0a➟\x20*.menustickers*➟\x20*.propietario*➟\x20*.enable\x20comandos\x20para\x20el\x20owner*\x0a➟\x20*.instalarbot\x20miku*\x0a➟\x20*.ip\x20servidor\x20de\x20minecraft*\x0a➟\x20*.Miku*\x0a➟\x20*.perfil*\x0a➟\x20*.redes*',global['hadesig']=ig,global['md']='https://github.com/OFC-YOVANI/HATSUNE-MIKU-ULTRA.git',global['botxdf']=md,global['nn']='https://chat.whatsapp.com/BuloWd29LSnDZHXtUJDybF',global['nngrupo']=nn,global['hadesyo']='⟥⟝⟢⟨Y\x20O\x20U\x20T\x20U\x20B\x20E⟩⟣⟞⟤\x0a⇄\x20\x20\x20\x20◁\x20\x20\x20ㅤ\x20\x20❚❚ㅤ\x20\x20\x20▷ㅤ\x20\x20\x20\x20↻',global['hadesyogrupo']=hadesyo,global['yovani2']='*este\x20el\x20repositorio\x20ofc\x20de\x20miku-bot\x20checho\x20y\x20creado\x20por\x20Yovani*\x0a\x0a•\x20*https://github.com/OFC-YOVANI/HATSUNE-MIKU-ULTRA.git*\x0a\x0a•\x20*Si\x20deseas\x20instalar\x20el\x20bot\x20usa\x20el\x20comando\x0a/instalarbot\x20par\x20aver\x20la\x20info*\x0a⬒─⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─⬒',global['yovani2grupo']=yovani2,global['nnn']='https://chat.whatsapp.com/DDm7HC6e5MF9qcdLqB22RQ',global['nnngrupo']=nnn,global['rg']='*🍀ʀᴇsᴜʟᴛᴀᴅᴏ\x20ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*',global['resultado']=rg,global['yovani']='aqui\x20esta\x20los\x20numeros\x20ofc-Yovani-y\x20bots\x0a\x0a•\x20Wa.me/5212412377467\x20(CREADOR-NO-BOT)\x0a\x0a•\x20wa.me/5212414147874\x20(CREADOR-NO-BOT)\x0a\x0a•\x20Wa.me/5212411719888\x20(BOT-HADES)\x0a\x0a•\x20Wa.me/5212411261883\x20(BOT-MIKU)\x0a\x0a⬒─⟢⟨©ғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─⬒',global['yovanigrupo']=nnn,global['ows']='➟\x20*Hola\x20Bienvenid@\x20al\x20menu\x20de\x20owner\x20los\x20comandos\x20de\x20esta\x20lista\x20solo\x20los\x20pude\x20usar\x20el/al\x20propietario\x20del\x20bot\x20usalos\x20de\x20forma\x20correcta*\x0a➟\x20*ᴄᴜᴇɴᴛᴀs\x20ᴏғᴄ:*\x20*https://atom.bio/ofc_yovani_hades*\x0a⬒\x20─⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─\x20⬒\x0a\x0a⬒\x20─⟢⟨\x20*PROPIETARIO*\x20⟩⟣─\x20⬒\x0a➟\x20*.banuser*\x0a➟\x20*.unbanuser*\x0a➟\x20*.kick*\x0a➟\x20*.kick2*\x0a➟\x20*.fantasmas*\x0a➟\x20*.agregar*\x0a➟\x20*.removebg*\x0a➟\x20*.autoadmin*\x0a➟\x20*.banchat\x20banea\x20el\x20chat*\x0a➟\x20*.unbanchat\x20desbanea\x20el\x20chat*\x0a➟\x20*.grupo\x20abrir/cerrar*\x0a➟\x20*.actualizar*\x0a➟\x20*.dsowner\x20esperando-mensajes*\x0a➟\x20*.fixmsgespera\x20esperando-mensajes*',global['owsgrupo']=ows,global['ag']='*⚠️ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ⚠️*\x0a*No\x20se\x20perimite\x20contenido\x20pornograficos❌*',global['advertencia']=ag,global['une']='*│✔️│🌴𝚎𝚜𝚝𝚎\x20𝚌𝚑𝚊𝚝\x20𝚏𝚞𝚎\x20𝚍𝚎𝚜\x20𝚋𝚊𝚗𝚎𝚊𝚍𝚘\x20𝚎𝚡𝚒𝚝𝚘𝚜𝚊𝚖𝚎𝚗𝚝𝚎🌴*',global['unegrupo']=une,global['ban']='*│‼️│\x20🗝️𝚎𝚜𝚝𝚎\x20𝚌𝚑𝚊𝚝\x20𝚋𝚊𝚗𝚎𝚊𝚍𝚘\x20𝚎𝚡𝚒𝚝𝚘𝚜𝚊𝚖𝚎𝚗𝚝𝚎🗝️*',global['bangrupo']=ban,global['iig']='*📌ɪɴғᴏʀᴍᴀᴄɪᴏɴ*✨',global['informacion']=iig,global['fg']='*❌ʟᴏ\x20sᴇɴᴛɪᴍᴏs\x20sᴇ\x20ʜᴀ\x20ɢᴇɴᴇʀᴀᴅᴏ\x20ᴜɴ\x20ᴇʀʀᴏʀ\x20ᴠᴜᴇʟᴠᴇ\x20ɪɴᴛᴇɴᴛᴀʀ❌*',global['fallo']=fg,global['mine']='➟\x20Hola\x20bienvenidos\x20al\x20servidor\x20de\x20minecraft\x0a➟\x20Java\x0a➟\x20mc.fenixcraft.org\x0a━━━━━━━━━\x0a➟\x20Bedrock\x0a➟\x20mc.fenixcraft.org\x0aPuerto:\x2019132\x0a━━━━━━━━━\x0a➟\x20Recomendada:\x201.19.2\x0a➟\x20Usable:\x201.8\x20hasta\x201.20.X\x0a➟\x20Bedrock:\x201.20\x20+',global['minegrupo']=mine,global['mg']='*❗ᴇsᴛᴇ\x20ᴄᴏᴍᴀɴᴅᴏ\x20ʟᴏ\x20ʜᴀ\x20ᴜsᴀᴅᴏ\x20ɪɴᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ*',global['mal']=mg,global['eeg']='*📩ˢᵁ\x20ᴿᴱᴾᴼᴿᵀᴱ\x20ᴴᴬ\x20ˢᴵᴰᴼ\x20ᴱᴺⱽᴵᴬᴰᴼ📩*',global['envio']=eeg,global['des']='➟\x20*ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ*\x0a➟\x20*Hola\x20Bienvenid@\x20al\x20menu\x20de\x20descargas\x20usa\x20los\x20comandos\x20que\x20estan\x20en\x20la\x20lista\x20usalos\x20de\x20forma\x20correcta*\x0a➟\x20*ᴄᴜᴇɴᴛᴀs\x20ᴏғᴄ:*\x20*https://atom.bio/ofc_yovani_hades*\x0a⬒\x20─⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─\x20⬒\x0a\x0a⬒\x20─⟢⟨\x20*DESCARGAS*\x20⟩⟣─\x20⬒\x0a➟\x20*.wikipedia\x20<busqueda>*\x0a➟\x20*.animeinfo\x20<nombre>*\x0a➟\x20*.apk\x20<nombre>*\x0a➟\x20*.play\x20nombre\x20de\x20tu\x20canción*\x0a➟\x20*.play2\x20nombre\x20de\x20tu\x20video*\x0a➟\x20*.audio\x20nombre\x20de\x20tu\x20canción*\x0a➟\x20*.video\x20nombre\x20de\x20tu\x20video*\x0a➟\x20*.play3\x20nombre\x20de\x20tu\x20canción,doc*\x0a➟\x20*.play4\x20nombre\x20de\x20tu\x20video,doc*\x0a➟\x20*.Spotify\x20nombre\x20de\x20tu\x20canción*\x0a➟\x20*.Spotify2\x20nombre\x20de\x20tu\x20canción,doc*\x0a➟\x20*.ytmp3\x20tu\x20link\x20\x20Audio*\x0a➟\x20*.ytmp4\x20tu\x20link\x20\x20video*\x0a➟\x20*.ytmp3doc\x20link\x20canción,doc*\x0a➟\x20*.ytmp4doc\x20link\x20video,doc*\x0a➟\x20*.facebook\x20tu\x20link\x20de\x20fb*\x0a➟\x20*.tiktok\x20link\x20de\x20video\x20tiktok*\x0a➟\x20*.mediafire\x20link\x20de\x20mediafire*\x0a➟\x20*.twitter\x20tu\x20link\x20de\x20twt*\x0a➟\x20*.ig\x20link\x20de\x20tu\x20video\x20en\x20ig*\x0a➟\x20*.google\x20resultados\x20de\x20google*\x0a➟\x20*.ytbuscar\x20busqueda\x20en\x20Youtube*\x0a➟\x20*.gdrive\x20link\x20de\x20drive*\x0a➟\x20*.whatmusic\x20responde\x20a\x20una\x20audio*',global['desgrupo']=des,global['eg']='*🍀ʀᴇsᴜʟᴛᴀᴅᴏ\x20ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*',global['exito']=eg,global['miku']='*hola\x20bienvenido\x20a\x20la\x20información\x20de\x20instalación\x20del\x20bot\x20por\x20favor\x20puedes\x20mirar\x20el\x20video\x20de\x20tutorial\x20y\x20hacer\x20el\x20mismo\x20procedimiento\x20si\x20tienes\x20alguna\x20duda\x20puedes\x20comunicarmelo\x20en\x20el\x20número\x20fijado\x20Espero\x20que\x20tengas\x20suerte\x20en\x20la\x20instalación*\x0a⬒\x20─⟢⟨\x20*APK-TERMUX*\x20⟩⟣─\x20⬒\x0a➟\x20https://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file?dkey=wfddtbi5jtj98\x0a⬒\x20─⟢⟨\x20*OWNER*\x20⟩⟣─\x20⬒\x0a➟\x20*Número\x20para\x20ayuda*\x0a➟\x20Wa.me/5212414147874\x0a⬒\x20─⟢⟨Grupo-Ayuda⟩⟣─\x20⬒\x0a➟\x20no\x20entra\x20con\x20numero\x20con\x20bot\x20https://chat.whatsapp.com/Jhs2WrdiNzY3CML7shPwot\x0a⬒\x20─⟢⟨\x20*TUTORIAL*\x20⟩⟣─\x20⬒\x0a➟\x20https://youtu.be/LqXJpxICLtE\x0a⬒\x20─⟢⟨\x20*COMANDOS*\x20⟩⟣─\x20⬒\x0a➟\x20opción\x201\x20estos\x20comandos\x20son\x20para\x20los\x20que\x20no\x20pudieron\x20hacer\x20con\x20los\x20comandos\x20normales\x20estos\x20comandos\x20lo\x20van\x20a\x20instalar\x20solito\x20\x0a➟\x20termux-setup-storage\x0a➟\x20pkg\x20update\x20-y\x20&&\x20pkg\x20upgrade\x20-y\x20&&\x20pkg\x20install\x20-y\x20bash\x20&&\x20pkg\x20install\x20-y\x20wget\x20&&\x20pkg\x20install\x20yarn\x0a➟\x20wget\x20-O\x20-\x20https://raw.githubusercontent.com/OFC-YOVANI/HATSUNE-MIKU-ULTRA/master/install.sh\x20|\x20bash\x0a⬒\x20─⟢⟨\x20*COMANDOS*\x20⟩⟣─\x20⬒\x0a➟\x20*opción\x202\x20de\x20instalación\x0a➟\x20cd\x20&&\x20termux-setup-storage\x0a➟\x20apt-get\x20update\x20-y\x20&&\x20apt-get\x20upgrade\x20-y\x0a➟\x20pkg\x20install\x20-y\x20git\x20nodejs\x20ffmpeg\x20imagemagick\x20&&\x20pkg\x20install\x20yarn\x20\x0a➟\x20git\x20clone\x20https://github.com/OFC-YOVANI/HATSUNE-MIKU-ULTRA.git\x20&&\x20cd\x20HATSUNE-MIKU-ULTRA\x0a➟\x20yarn\x20\x0a➟\x20npm\x20install\x0a➟\x20npm\x20update\x0a➟\x20npm\x20start\x0a⬒\x20─⟢⟨\x20*ACTIVAR*\x20⟩⟣─\x20⬒\x0a➟\x20cd\x20HATSUNE-MIKU-ULTRA\x0a➟\x20npm\x20start\x0a⬒\x20─⟢⟨\x20*CÓDIGO*\x20⟩⟣─\x20⬒\x0a➟\x20*pide\x20otro\x20código*\x0a➟\x20cd\x20HATSUNE-MIKU-ULTRA\x0a➟\x20rm\x20-rf\x20Session-activa\x0a➟\x20npm\x20start',global['mikugrupo']=miku,global['ne']='ʏᴏᴠᴀɴɪ',global['negrupo']=ne,global['no']='⬒⟢⟨𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰⟩⟣⬒',global['nogrupo']=no,global['nno']='⟥⟝⟢⟨\x20*List\x20Options*\x20⟩⟣⟞⟤\x0a•\x20*/enable\x20welcome*\x0a•\x20*/disable\x20welcome*\x0a•\x20*/enable\x20antiprivado*\x0a•\x20*/disable\x20antiprivado*\x0a•\x20*/enable\x20public*\x0a•\x20*/disable\x20public*\x0a•\x20*/enable\x20restrict*\x0a•\x20*/disable\x20restrict*\x0a•\x20*/enable\x20pconly*\x0a•\x20*/disable\x20pconly*\x0a•\x20*/enable\x20anticall*\x0a•\x20*/disable\x20anticall*\x0a•\x20*/enable\x20simsimi*\x0a•\x20*/disable\x20simsimi*\x0a•\x20*/enable\x20antilink*\x0a•\x20*/disable\x20antilink*\x0a•\x20*/enable\x20antilink2*\x0a•\x20*/disable\x20antilink2*\x0a•\x20*/enable\x20detect*\x0a•\x20*/disable\x20detect*\x0a•\x20*/enable\x20detect2*\x0a•\x20*/disable\x20detect2*\x0a•\x20*/enable\x20autosticker*\x0a•\x20*/disable\x20autosticker*\x0a•\x20*/enable\x20antiviewonce*\x0a•\x20*/disable\x20antiviewonce*\x0a•\x20*/enable\x20antitoxic*\x0a•\x20*/disable\x20antitoxic*\x0a•\x20*/enable\x20antitraba*\x0a•\x20*/disable\x20antitraba*\x0a•\x20*/enable\x20antiarabes*\x0a•\x20*/disable\x20antiarabes*\x0a•\x20*/enable\x20modoadmin*\x0a•\x20*/disable\x20modoadmin*\x0a⬒─⟢⟨©𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰✍⟩⟣─⬒',global['nnogrupo']=nno,global['nnno']='➟\x20*ᴄᴜᴇɴᴛᴀs\x20ᴏғᴄ:*\x20*https://atom.bio/ofc_yovani_hades*\x0a⬒\x20─⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─\x20⬒\x0a\x0a⬒\x20─⟢⟨\x20*REDES\x20SOCIALES*\x20⟩⟣─\x20⬒\x0a➟\x20*𝚙á𝚐𝚒𝚗𝚊\x20𝚍𝚎\x20𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔*\x0a➟\x20https://www.facebook.com/groups/987464505464904/?ref=share\x0a➟️\x20*𝚌𝚊𝚗𝚊𝚕\x20𝚍𝚎\x20𝚈𝚘𝚞𝚃𝚞𝚋𝚎*\x0a➟\x20https://youtube.com/@hades_bot2391\x0a➟\x20*INSTAGRAM*\x0a➟️\x20https://instagram.com/ofc.yovani.bot?igshid=ZDc4ODBmNjlmNQ==\x0a➟\x20*KIKTOK*\x0a➟\x20https://vm.tiktok.com/ZM2rbFWnr/',global['nnnogrupo']=nnno,global['yono']='➟\x20*ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ*\x0a➟\x20*Hola\x20Bienvenid@\x20a\x20la\x20lista\x20de\x20grupos\x20del\x20bot\x20ofc\x20miku/hades\x20espero\x20que\x20puedas\x20entra\x20a\x20nuestra\x20comunidad\x20de\x20bots\x20gracias\x20por\x20tu\x20atencion*\x0a➟\x20*ᴄᴜᴇɴᴛᴀs\x20ᴏғᴄ:*\x20*https://atom.bio/ofc_yovani_hades*\x0a⬒\x20─⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─\x20⬒\x0a\x0a⬒\x20─⟢⟨\x20*GRUPO*\x20⟩⟣─\x20⬒\x0a➟\x20*.welcome\x20@tag*\x0a➟\x20*.welcome\x20@tag*\x0a➟\x20*bye\x20@tag*\x0a➟\x20*.promote\x20@tag*\x0a➟\x20*.demote\x20@tag*\x0a➟\x20*.infogp\x20<info\x20del\x20grupo>*\x0a➟\x20*.infobot\x20<estado\x20del\x20bot>*\x0a➟\x20*.hidetag*\x0a➟\x20*.del\x20elimina\x20mensajes\x20del\x20bot*\x0a➟\x20*.join*\x0a➟\x20*.link\x20link\x20de\x20tu\x20grupo*',global['yonogrupo']=yono,global['nnx']='➟\x20*ᴄᴜᴇɴᴛᴀs\x20ᴏғᴄ:*\x20*https://atom.bio/ofc_yovani_hades*⬒\x20─⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─\x20⬒\x0a\x0a⬒\x20─⟢⟨\x20*GRUPOS*\x20⟩⟣─\x20⬒\x0a➟\x20*𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰*\x0a➟\x20https://chat.whatsapp.com/BuloWd29LSnDZHXtUJDybF\x0a➟\x20*𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰2*\x0a➟\x20https://chat.whatsapp.com/KPSiXL586tSIzJwPdTzfZ0\x0a➟\x20*𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰*\x0a➟\x20https://chat.whatsapp.com/BgyxmpSY2VYE3MT0UbLAgf\x0a➟\x20*𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰2*\x0a➟\x20https://chat.whatsapp.com/DpRVuXpKRF43iMOEtg85wz\x0a➟\x20*𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰3*\x0a➟\x20https://chat.whatsapp.com/LLCdXUAUjtVA8And8clsWu\x0a➟\x20*𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰4*\x0a➟\x20https://chat.whatsapp.com/CjNY8bfmwBaFvYDqCUGZ0b',global['nnxgrupo']=nnx,global['wm']='⬒⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⬒\x0a⬒⟢⟨𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰⟩⟣⬒',global['wait']='⌛\x20_Cargando..._\x0a▰▰▰▱▱▱▱▱▱',global['imagen1']=_0x5ee47c['readFileSync']('./lib/img/descargas.jpg'),global['imagen2']=_0x5ee47c['readFileSync']('./lib/img/nuevobot.jpg'),global['imagen3']=_0x5ee47c['readFileSync']('./lib/img/bot.jpg'),global['imagen4']=_0x5ee47c['readFileSync']('./lib/img/grupo.jpg'),global['imagen5']=_0x5ee47c['readFileSync']('./lib/img/Menu.jpg'),global['imagen6']=_0x5ee47c['readFileSync']('./lib/img/ifo.jpg'),global['imagen7']=_0x5ee47c['readFileSync']('./lib/img/minecraft.jpg'),global['mods']=[],global['botdate']='⫹⫺\x20Date\x20:\x20\x20'+_0x1125cb['tz']('America/Los_Angeles')['format']('DD/MM/YY'),global['bottime']='𝗧\x20𝗜\x20𝗠\x20𝗘\x20:\x20'+_0x1125cb['tz']('America/Los_Angeles')['format']('HH:mm:ss'),global['fgif']={'key':{'participant':'0@s.whatsapp.net'},'message':{'videoMessage':{'title':wm,'h':'Hmm','seconds':'999999999','gifPlayback':'true','caption':bottime,'jpegThumbnail':_0x5ee47c['readFileSync']('./lib/img/Menu.jpg')}}},global['rpg']={'emoticon'(_0x3d97c8){_0x3d97c8=_0x3d97c8['toLowerCase']();let _0xeccbe7={'level':'🏆','limit':'💎','exp':'🕹️'},_0x1ed8a7=Object['keys'](_0xeccbe7)['map'](_0x32bc51=>[_0x32bc51,new RegExp(_0x32bc51,'gi')])['filter'](_0x5cf68a=>_0x5cf68a[0x1]['test'](_0x3d97c8));if(!_0x1ed8a7['length'])return'';else return _0xeccbe7[_0x1ed8a7[0x0][0x0]];}};let file=fileURLToPath(import.meta['url']);watchFile(file,()=>{unwatchFile(file),console['log'](_0x2e8fb6['redBright']('Update\x20\x27config.js\x27')),import(file+'?update='+Date['now']());});