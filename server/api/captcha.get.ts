import { Buffer } from 'node:buffer'
import Captchapng from 'typed-captchapng'

export default defineEventHandler(async (event) => {
  const random = Math.floor((Math.random() * 9000 + 1000))
  const p = new Captchapng(100, 30, random)
  // p.color([1, 2, 3, 0])
  // p.color([1, 2, 3, 255])

  const img = p.getBase64()
  const imgbase64 = Buffer.from(img, 'base64')

  event.context.session.captcha = String(random)

  setHeaders(event, {
    'Content-Type': 'image/png',
  })

  return imgbase64
})
