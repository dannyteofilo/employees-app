import React from 'react'
import { StyledButton } from './button.styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({children,variant="primary",...props},ref) => {
    return (
        <StyledButton ref={ref} variant={variant} {...props}>
            {children}
        </StyledButton>
    )
}
)

Button.displayName="Button"
export default Button
