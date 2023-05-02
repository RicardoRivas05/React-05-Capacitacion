import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Strider2',
        email: 'strider@gmail.com'
    })

    const {username, email} = formState;

    const onInputChange=({target})=>{
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }


    useEffect(()=>{
        //console.log('useEffect se llamó');
    }, []);

    useEffect(()=>{
       // console.log('formState changed!');
    }, [formState]);

    useEffect(()=>{
        //console.log('formState changed!');
    }, [email]);

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr/>

        <input  
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="ingreseSuEmail@email.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />  

        {
            (username === 'Strider2') && <Message/>
        }

    </>
  )
}
