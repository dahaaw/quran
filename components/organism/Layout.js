import Navbar from "@molecules/Navbar"

export default function Layout({children}) {
    return (
        <div className="min-h-screen lg:px-96 md:px-52 sm:px-40 px-0">
            <Navbar />
            {children}
        </div>
    )
}
