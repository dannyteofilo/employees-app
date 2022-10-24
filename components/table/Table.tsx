import moment from 'moment'
import React from 'react'
import { EmployeesInterface } from '../../interfaces/employees'
import { StyledTable } from './table.styles'
interface TableProps {
    data: Array<EmployeesInterface>
}
const Table = ({ data }: TableProps) => {
    const getDate = (value: string) => {
        const date = moment(value).format("LL")
        return date
    }
    return (
        <StyledTable>
            <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Last Name</td>
                        <td>Birthday</td>
                    </tr>
                </thead>
                <tbody>
                    {data.length !== 0 &&
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.last_name}</td>
                                <td>{getDate(item.birthday)}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </StyledTable>
    )
}

export default Table
