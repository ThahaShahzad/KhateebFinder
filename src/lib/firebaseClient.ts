import firebase from 'firebase/compat/app'
import { getAnalytics } from 'firebase/analytics'
import 'firebase/compat/auth'

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STOREAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
}

if (!firebase.apps.length) {
  const app = firebase.initializeApp(clientCredentials)
  if (typeof window !== 'undefined') {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    getAnalytics(app)
  }
}

export default firebase
