import React from 'react'
import Modal from 'react-modal'

export default function ModalForm({ checkSend, isOpenModal, setIsOpenModal }) {
    console.log("🚀 ~ ModalForm ~ isOpenModal:", isOpenModal)

    const closeModal = () => {
        setIsOpenModal(false)
    }

    return (
        <div>
            <Modal
                isOpen={isOpenModal}
                onRequestClose={closeModal}
                appElement={document.getElementById('root')}
                style={{
                    content: {
                        fontFamily: 'roboto',
                        background: '#FFC300',
                        width: '200px',
                        height: '150px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        border: '1px solid #ccc',
                        borderRadius: '0.5rem',
                    }
                }}
            >
                <h1 className='font-semibold'>Information</h1>
                <p>{checkSend}</p>
                <button className='bg-gray text-black hover:bg-yellow rounded-md mt-3 px-2 py-1' onClick={closeModal}>Fermer</button>
            </Modal>
        </div>
    )
}