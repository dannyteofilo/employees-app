import React from 'react'
import { StyledSideBar } from './sidebar.styles'
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideBar = () => {
    const router = useRouter();

    return (
        <StyledSideBar>
            <ul className='list'>
                <li className={`${router.pathname == "/employees" ? "active" : ""} item`}>
                    <Link href="/employees">
                        <a>
                            <i className="fa-solid fa-users"></i>
                            Employees
                        </a>
                    </Link></li>
                <li className={`${router.pathname == "/upload" ? "active" : ""} item`}>
                    <Link href="/upload">
                        <a>
                            <i className="fa-solid fa-upload"></i>
                            Upload
                        </a>
                    </Link></li>
            </ul>
        </StyledSideBar>
    )
}

export default SideBar
