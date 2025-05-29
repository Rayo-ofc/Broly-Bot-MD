import axios from 'axios'
import PhoneNumber from 'awesome-phonenumber'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn, text }) {
  let user = global.db.data.users[m.sender]
  if (user.registered) return m.reply('Ya estás registrado.')
  if (!Reg.test(text)) return m.reply('Usa el comando así: #reg TuNombre.Edad\nEjemplo: #reg Juan.18')
  let [_, name, __, age] = text.match(Reg)
  if (!name || !age) return m.reply('Debes ingresar tu nombre y edad.')
  age = parseInt(age)
  if (isNaN(age) || age < 5 || age > 120) return m.reply('Edad no válida.')

  // Obtener número internacional del usuario
  let numeroInt = PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')
  let country = 'Desconocido'
  try {
    let res = await axios.get(`https://delirius-apiofc.vercel.app/tools/country?text=${numeroInt}`)
    if (res.data?.result?.name) {
      country = `${res.data.result.name} ${res.data.result.emoji || ''}`
    }
  } catch (e) {
    country = 'Desconocido'
  }

  user.name = name.trim()
  user.age = age
  user.registered = true
  m.reply(`✅ Registro exitoso\nNombre: ${user.name}\nEdad: ${user.age}\n🌎 País: ${country}`)
}

handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar']

export default handler