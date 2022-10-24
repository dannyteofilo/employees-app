import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import { Header } from '../shared/header/Header'
import SideBar from '../shared/sidebar/SideBar';
import { StyledDashboard } from './dashboard.styles';

export const Dashboard = ({ children }: { children: React.ReactNode }) => {
    const router=useRouter()
    const handleLogout= async()=>{
        try {            
            const response=await axios.post('/api/auth/logout')
            router.push('/login')
        } catch (error) {
            console.error(error);
            router.push('/login')            
        }
    }
    return (
        <StyledDashboard>
            <Header click={handleLogout}></Header>
            <SideBar></SideBar>
            <div className='children'>
            {children}
            </div>
        </StyledDashboard>
    )
}
