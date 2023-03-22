import {
    getAuth,
    createUserWithEmailAndPassword,
    singInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/getAuth'

import { useState } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
}

//cleanup
// deal with memory leak
const auth = getAuth();

function checkIfIsCancelled() {
    if (cancelled) {
        return
    }

    const createUser = async (data) => {
        checkIfIsCancelled

        setLoading(true)

        try {
            
            const { user } = await
            createUserWithEmailAndPassword(auth, data.email, data.password)

            await updateProfile( user, { displayName: data.displayName })

            return user

        } catch (error) {
            
            console.log(error.message)
            console.log(typeoferror.message)
        }

        setLoading(false)
    }
}