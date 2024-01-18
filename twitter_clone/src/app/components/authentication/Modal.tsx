import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModlaProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionlabel: string;
    disabled: boolean;
}

const Modal: React.FC<ModlaProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionlabel,
    disabled,
}) => {
    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        onClose();
    }, [disabled, onClose]);
    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }
        onSubmit();
    }, [disabled, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70">
                <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
                    { }
                    <div className="h-ful lg:h-auto border-0 rounded-lg shadow-lg relatie flex felx-col w-full bg-black outline-none focuse:outline-none">
                        {/* header */}
                        <div className="flex  items-center justify-between p-10 rounded-t">
                            <h3 className="text-3xl font-semibold text-white">{title}</h3>
                            <button className="p-1 ml-auto border-0 text-white hover:opacity-70 transition ">
                                <AiOutlineClose size={20} color="white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
