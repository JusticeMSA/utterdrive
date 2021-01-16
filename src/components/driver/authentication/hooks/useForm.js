import {useState} from 'react'
import validateForm from '../validations/validateForm'

export default function useForm() {

    const [values, setValues] = useState({email: '', password: '', confirmPassword: ''})
    const [inputErrors, setInputErrors] = useState({})

    const handleChange = e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = e =>{
        console.log('Handling Submition')
        e.preventDefault()
        setInputErrors({});
        const {hasError, errors} = validateForm(values)
        if(hasError){
            console.log('The form has errors')
            setInputErrors({...errors});
        }else{
            console.log('The form does not have errors')
        }
        
    }
    
    return{
        handleChange,
        handleSubmit,
        inputErrors

    }

}
