import Container from "@organism/Container"
import Logo from "@atoms/Logo"
import { useState } from "react"

export default function Navbar() {
    const [search, setSearch] = useState(false);
    return (
        <Container>
            <div className="flex h-12 items-center">
                <div className="w-4/12 items-center text-center">
                    <Logo />
                </div>

                <div className="w-8/12 text-right">
                    <input className={`border ${search ? 'w-full' : 'w-0'} transition-all rounded-md items-end`}/> 
                    {!search && (
                        <svg onClick={() => setSearch(!search)} className="inline-block cursor-pointer" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                            <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/>
                        </svg>
                    )}
                </div>
            </div>
            <hr className="flex"/>
    
        </Container>
        )
}
