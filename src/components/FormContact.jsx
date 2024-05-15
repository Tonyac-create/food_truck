import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function FormContact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm('service_e5oc7dj', 'template_aw18zae', form.current, {
                publicKey: 'dA9HyPg4PFOJOIO5Y'
            })
            .then(
                () => {
                    console.log("SUCCESS")
                },
                (error) => {
                    console.log("FAILED..", error.text)
                }
            )
    }
    return (
        <div className='flex flex-col items-center font-roboto mb-4'>
            <form ref={form} onSubmit={sendEmail} action="" className='flex flex-col'>
                <h2 className='text-yellow font-dancing-script text-center text-5xl tracking-wide mb-4'>Contact</h2>
                <p className='text-gray text-center mb-3'>Vous voulez un devis, un renseignement ou me laisser un super commentaire... <br /> C'est ici!</p>
                <label htmlFor="name" className='text-gray font-semibold mb-1'>Votre nom et prénom *</label>
                <input
                    type="text"
                    name='name'
                    id='name'
                    aria-label='Entrez votre nom et prénom'
                    placeholder='Nom / Prénom'
                    className='mb-2 rounded-md pl-2 shadow-input'
                    required />
                <label htmlFor="email" className='text-gray font-semibold mb-1'>Votre Email *</label>
                <input
                    type="email"
                    name='email'
                    id='email'
                    aria-label='Entrez votre adresse email'
                    placeholder='Email'
                    className='mb-2 rounded-md pl-2'
                    required />
                <label htmlFor="phone" className='text-gray font-semibold mb-1'>Votre téléphone *</label>
                <input
                    type="text"
                    name='phone'
                    id='phone'
                    aria-label='Entrez votre numéro de téléphone'
                    placeholder='Téléphone'
                    className='mb-2 rounded-md pl-2 shadow-input'
                    required />
                <label htmlFor="message" className='text-gray font-semibold'>Votre message *</label>
                <textarea
                    name="message"
                    id="message"
                    aria-label='Entrez voptre message'
                    cols="30" rows="10"
                    placeholder='Votre message...'
                    className='rounded-md pl-2 shadow-input'></textarea>
                <button
                    type='submit'
                    value="Send"
                    aria-label='Envoyez votre message'
                    className='bg-orange text-black mt-3 py-1 w-1/2 rounded-md font-medium hover:bg-yellow'>Envoyer</button>
            </form>
        </div>
    )
}
