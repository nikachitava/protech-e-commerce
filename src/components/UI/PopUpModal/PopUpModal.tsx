import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface IPopUpModal {
    modalText: string;
    buttonText: string;
    onClick: () => void;
}

export const PopUpModal: React.FC<IPopUpModal> = ({
    modalText,
    buttonText,
    onClick,
}) => {
    const [openModal, setOpenModal] = useState(true);

    const toggleModal = () => {
        setOpenModal(!openModal);
        onClick();
    };

    return (
        <>
            <Modal show={openModal} size="md" onClose={toggleModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />

                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            {modalText}
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={toggleModal}>
                                {buttonText}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};
