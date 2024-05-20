import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import ModalForm from './Modal'

export default function FormContact() {
    const [message, setMessage] = useState("")
    const form = useRef()
    const [isOpenModal, setIsOpenModal] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm('service_8kkjg8p', 'template_aw18zae', form.current, {
                publicKey: 'dA9HyPg4PFOJOIO5Y'
            })
            .then(
                () => {
                    console.log("SUCCESS")
                    setIsOpenModal(true)
                    setMessage("Message envoyé !")
                },
                (error) => {
                    console.log("FAILED..", error.text)
                    setIsOpenModal(true)
                    setMessage("Erreur dans l'envoi du message")
                }
            )
    }
    return (
        <section id='contact' className='flex flex-col items-center font-roboto m-6 pb-4'>
            <form ref={form} onSubmit={sendEmail} action="" className='flex flex-col'>
                <h2 className='text-yellow font-dancing-script text-center text-5xl tracking-wide mb-4'>Contact</h2>
                <p className='text-gray text-justify mb-3'>Vous voulez un devis, un renseignement ou me laisser un super commentaire...
                    <br /> C'est ici!
                    <br /> Tous les champs sont obligatoires
                </p>
                <div className='flex flex-col md:w-3/4 md:mr-auto'>
                    <label htmlFor="name" className='text-white font-semibold mb-2'>Votre nom et prénom</label>
                    <input
                        type="text"
                        name='name'
                        id='name'
                        aria-label='Entrez votre nom et prénom'
                        placeholder='Nom / Prénom'
                        className='mb-2 rounded-md pl-2 focus:outline-none focus:ring-4 ring-yellow'
                        required />
                    <label htmlFor="email" className='text-gray font-semibold mb-2'>Votre Email</label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        aria-label='Entrez votre adresse email'
                        placeholder='Email'
                        className='mb-2 rounded-md pl-2 focus:outline-none focus:ring-4 ring-yellow'
                        required />
                    <label htmlFor="phone" className='text-gray font-semibold mb-2'>Votre téléphone</label>
                    <input
                        type="text"
                        name='phone'
                        id='phone'
                        aria-label='Entrez votre numéro de téléphone'
                        placeholder='Téléphone'
                        className='mb-2 rounded-md pl-2 focus:outline-none focus:ring-4 ring-yellow'
                        required />
                    <label htmlFor="message" className='text-gray font-semibold mb-2'>Votre message</label>
                    <textarea
                        name="message"
                        id="message"
                        aria-label='Entrez voptre message'
                        cols="30" rows="10"
                        placeholder='Votre message...'
                        className='rounded-md pl-2 focus:outline-none focus:ring-4 ring-yellow'></textarea>
                    <button
                        type='submit'
                        value="Send"
                        aria-label='Envoyez votre message'
                        className='bg-orange text-black mt-7 py-1 w-1/2 mx-auto rounded-md font-medium hover:bg-yellow focus:outline-none focus:ring-4 ring-yellow ring-offset-2'>
                        Envoyer
                    </button>
                </div>
            </form>
            {isOpenModal && (
                <ModalForm
                    setIsOpenModal={setIsOpenModal}
                    isOpenModal={isOpenModal}
                    checkSend={message}
                    formRef={form}
                />
            )}
        </section>
    )
}
