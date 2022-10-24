import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../button/Button';
import Input from '../input/Input';
import { StyledFormAdd } from './formAdd.styles';


type FormData = {
    name: string;
    last_name: string;
    birthday: Date
};

interface FormAddPops {
    submit: (data: any) => void
}

export const FormAdd: React.FC<FormAddPops> = ({ submit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => submit(data));
    return (
        <StyledFormAdd>
            <form className='form' onSubmit={onSubmit}>
                <Input className='input' type="text" placeholder='Name' error={errors.name ? errors.name : undefined} {...register("name", {
                    required: "Name field is required",
                    minLength: {
                        value: 30,
                        message: "You must enter minimum 30 characters",
                    }
                })} />
                <Input className='input' type="text" placeholder='Last name' error={errors.last_name ? errors.last_name : undefined} {...register("last_name", {
                    required: "Last name field is required",
                    minLength: {
                        value: 30,
                        message: "Debes ingresar mínimo 30 caracteres",
                    }
                })} />
                <Input className='button' type="date"  {...register("birthday")} />
                <Button><i className="fa-solid fa-plus"></i> Add</Button>
            </form>
        </StyledFormAdd>
    )
}
