import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import { Header } from '../components/Header'

export const Dashboard = ({ children }: { children: React.ReactNode }) => {
    const router=useRouter()
    const handleLogout= async()=>{
        console.log('do logout');
        try {            
            const response=await axios.post('/api/auth/logout')
            console.log('response: ',response);
            router.push('/login')
        } catch (error) {
            console.error(error);
            router.push('/login')            
        }
    }
    return (
        <div>
            <Header click={handleLogout}></Header>
            {children}
        </div>
    )
}
