import React from 'react'
import { StyledInput } from './input.styles'

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
    error?: any
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({error, ...props }, ref) => {
    return (
        <>
        <StyledInput error={error} ref={ref} {...props} /> 
            {error !== undefined && (
                <span>{error.message}</span>
            )}
        </>
    )
}
)

Input.displayName = "Input"
export default Input
