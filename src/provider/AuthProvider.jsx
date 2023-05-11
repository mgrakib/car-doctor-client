/** @format */

import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase";
export const AuthContext = createContext({});
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
	const [services, setServices] = useState([]);
	const [user, setUser] = useState(null);
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then(res => res.json())
			.then(data => setServices(data));
	}, []);

	// singup user
	const handelSingUp = (email, password) => {
		setLoader(true);
		return createUserWithEmailAndPassword(auth, email, password);
    };
    
	// singIn 
	const handelSingIn = (email, password) => {
		setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
	}
	
	// onAuthStateChanged
	useEffect(() => {
		const subscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoader(false);
		});

		return () => subscribe();
	}, [])
	
	// logout 
	const logOut = () => {
	return signOut(auth);
	}

	const setUserNamePhoto = (name) => {
	return updateProfile(auth.currentUser, {
		displayName: name,
		photoURL:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqkaINurEtlSRD22ZkaqxfM8oYqim-ayHRo5ex6lD&s",
	})
	}

	// auth info
	const authInfo = {
		services,
		handelSingUp,
		handelSingIn,
		user,
		logOut,
		setUserNamePhoto,
		loader,
	};
	// auth provider and value
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
