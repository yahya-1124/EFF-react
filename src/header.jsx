import { Link } from "react-router-dom"

function Header(){
    return(
        <header className="bg-purple-500 p-5 text-black flex justify-between">
            <h1 className="text-2xl font-bold">Data</h1>
            <nav className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
};
export default Header