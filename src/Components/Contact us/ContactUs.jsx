import { useForm } from 'react-hook-form';
import style from "./AddProduct.module.css"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
function ContactUs() {


    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form)

        emailjs.sendForm('service_nf464ul', 'template_pojl1ks', form.current, 'KJHMTyYs5E600u-pW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return <div>
        <div className='w-50 mx-auto mt-4'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Phone no</label>
                <input type="number" name="user_ph" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    </div>
}
export default ContactUs