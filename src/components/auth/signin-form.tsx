"use client"

import { faHeader, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Imput } from "../ui/input";
import { Button } from "../ui/button";

export const SigninForm = () => {
    const router = useRouter();
    const [emailField, setEmailfield] = useState('');
    const [passwordField, setPassordField] = useState('');

    const handleEnterButton = () => {
        router.replace('/home');
    }

    
    return (
        <>
            <Imput 
            placeholder="Digite seu e-mail" 
            value={emailField}
            onChange={t => setEmailfield(t)}
            
         />

            <Imput 
            placeholder="Digite sua senha" 
            value={passwordField}
            onChange={t => setPassordField(t)}
            password
         />
        
        <Button 
            label="Entrar"
            onClick={handleEnterButton}
            size={1}
        />
        
        
    </>
        
    );
}