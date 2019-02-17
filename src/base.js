import Rebase from '../node_modules/re-base'
import firebase from '../node_modules/firebase/app'
import '../node_modules/firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDHRjpk-YGHqP13bfUQVR8-W3KPMf4_4Zc",
  authDomain: "recipeapp-7a983.firebaseapp.com",
  databaseURL: "https://recipeapp-7a983.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())


// This is a named export
export { firebaseApp }

// this is a default export
export default base
