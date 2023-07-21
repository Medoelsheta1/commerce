import { useState } from "react"


const useInput = (validFun) => {
    const [input , setInput] = useState('')
    const [inInputTouched , setIsInputTouched] = useState(false)
    const isInputValid = validFun(input)

    const inputHandler = (e) => {
        setIsInputTouched(true)
        setInput(e.target.value)
    
    }
    const inputBlurHandler = () => {
        setIsInputTouched(true)
    }
    const resetInput =() => {
        setInput('')
        setIsInputTouched(false)
    }
    return {
        value: input,
        isTouched: inInputTouched,
        isValid: isInputValid,
        reset: resetInput,
        inputHandler,
        inputBlurHandler
    }
}

export default useInput