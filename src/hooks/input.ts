import React, { useState, ChangeEvent } from "react"

interface InputReturn {
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
export function useInput (initalValue = ""):InputReturn {
    //
    //
    
    const [value, setValue] = useState(initalValue)
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return {
        value,
        onChange
    }
}