'use client'

import useLoginModal from "@/app/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../mainSection/input";
import Modal from "../authentication/Modal";
const LoginModal = () => {
    const loginModal = useLoginModal();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }, [loginModal]);

    const bodyContent = (
    <div className="flex flex-col gap-4">
        <Input 
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
        />
        <Input 
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
        />

    </div>
    )

    return ( 

        <Modal 
            disabled={isLoading}
            isOpen = {loginModal.isOpen}
            title="Loign"
            actionlabel="Sign in"
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            />
    );
}

export default LoginModal;
