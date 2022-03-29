import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { FirebaseAdapter } from '@next-auth/firebase-adapter'
import { initializeApp, getApp, getApps } from 'firebase/app'
import {
	getFirestore,
	collection,
	query,
	getDocs,
	where,
	limit,
	doc,
	getDoc,
	addDoc,
	updateDoc,
	deleteDoc,
	runTransaction,
} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()

export default NextAuth({
	providers: [
		EmailProvider({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: process.env.EMAIL_SERVER_PORT,
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASSWORD,
				},
			},
			from: process.env.EMAIL_FROM,
		}),
	],
	adapter: FirebaseAdapter({
		db,
		collection,
		query,
		getDocs,
		where,
		limit,
		doc,
		getDoc,
		addDoc,
		updateDoc,
		deleteDoc,
		runTransaction,
	}),
})
