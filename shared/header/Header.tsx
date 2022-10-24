import React from 'react'
import { HeaderInterface } from '../../interfaces/components/header'
import Button from '../../components/button/Button'
import { StyledHeader } from './header.styles'

export const Header = ({ click }: HeaderInterface) => {
    return (
        <StyledHeader>
            <h1>Employees App</h1>
            <Button onClick={click} variant={'primary'}><i className="fa-solid fa-right-from-bracket"></i> Logout</Button>
        </StyledHeader>
    )
}
