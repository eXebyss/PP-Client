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
	apiKey: 'AIzaSyBhMLhtRsQ2zs1EZECP8m2n2NDCkM96DCM',
	authDomain: 'mfportfoliopage.firebaseapp.com',
	projectId: 'mfportfoliopage',
	storageBucket: 'mfportfoliopage.appspot.com',
	messagingSenderId: '231662624803',
	appId: '1:231662624803:web:96e61ffd562c5643ba9196',
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
