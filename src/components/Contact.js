import React from 'react';
import useForm from 'react-hook-form';

const Contact = () => {

    
    
    return (
        <form>
            <input type='text' placeholder='Email' name='email' />
            <input type='password' placeholder='Password' name='password' />
            <input type='submit' />

        </form>
    )
}

export default Contact
