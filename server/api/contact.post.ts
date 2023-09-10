import { custom, email, object, safeParse, string } from 'valibot'
import { addDoc, collection } from 'firebase/firestore'
import db from '../db/firebase'

function ContactSchema(sessionCaptcha: string) {
  return object({
    fullName: string(),
    email: string([email()]),
    object: string(),
    captcha: string(),
    body: string(),
  },
  [
    custom(
      ({ captcha }) => captcha.toString() === sessionCaptcha,
      'The captcha do not match.',
    ),
  ],
  )
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const sessionCaptch = event.context.session.captcha
  const validateData = safeParse(ContactSchema(sessionCaptch), body)

  if (validateData.success) {
    addDoc(collection(db, 'contact'), {
      ...body,
      timestamp: new Date(),
    }).catch((err: any) => console.error(err))
  }

  return {
    validateData,
  }
})
