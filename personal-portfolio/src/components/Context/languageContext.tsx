'use client'
import React, { useState, createContext, useEffect } from "react";

export const LanguageContext = createContext({} as any);

export const LanguageContextProvider = ({ children }:any) => {
    const [isEng, setIsEng] = useState(() => {        
        return localStorage.getItem('isEng') || "EN";
    });

    const toggleLanguage = () => {        
        setIsEng(prevLanguage => prevLanguage === "EN" ? "ML" : "EN");
    };
    
    useEffect(() => {
        localStorage.setItem('isEng', isEng);
    }, [isEng]);

    return (
        <LanguageContext.Provider value={{ isEng, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};