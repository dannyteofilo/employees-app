import React from 'react'
import Input from './input/Input'
interface Props {
    value: string,
    handleChange(e: any): void
}

const FormSearch = ({ handleChange, value }: Props) => {
    return (
        <form style={{marginBottom:'2em'}}>
            <Input
                type=""
                name=""
                value={value}
                placeholder="Find a employee..."
                onChange={(e: any) => handleChange(e)}
            />
        </form>
    )
}

export default FormSearch