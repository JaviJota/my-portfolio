import { CONTACT } from "../constants"

export const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl">Contacto</h1>
            <div className="text-center tracking-tighter">
                <a href="#" className="border-b my-4">{CONTACT.email}</a>
                <p className="my-4">{CONTACT.phoneNumber}</p>
                <p className="my-4">{CONTACT.address}</p>
            </div>
        </div>
    )
}