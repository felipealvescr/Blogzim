import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection,addDoc, Timestamp } from "firebase/firestore";
import { async } from "@firebase/util";

const initialState = {
    loading: null,
    error: null,
}

const insertReducer = (state, action) => {

}

export const useInsertDocument = (docCollection) => {
    const [ response, dispatch ] = useReducer
    (insertReducer, initialState)

// Memory leak 
    const [ cancelled, setCancelled ] = useState (false)
    
    const checkCancelBeforeDispatch = (action) => {
        if(!cancelled) {
            dispatch(action)
        }
    }
    
    const useInsertDocument = async(document) => {
        try {
            
        } catch (error) {
            
        }
    }
}

