'use client'

import useLoginModal from "@/app/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../mainSection/input";
import Modal from "../authentication/Modal";
import LoginModal from "./loginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }
        registerModal.onClose();
        loginModal.onOpen();

    },[isLoading, registerModal, loginModal])

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
    }, [registerModal]);

    const bodyContent = (
    <div className="flex flex-col gap-4">
        <Input 
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
        />
        <Input 
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled={isLoading}
        />
        <Input 
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
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

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Already have a na account? 
                <span 
                className="text-white cursor-pointer hover:underline"
                onClick={onToggle}
                > Sign in
                </span>
            </p>

        </div>
    )

    return (
        <Modal 
            disabled={isLoading}
            isOpen = {registerModal.isOpen}
            title="Create ana account"
            actionlabel="Register"
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
            />
    );
}

export default RegisterModal;
