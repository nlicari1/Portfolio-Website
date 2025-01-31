import { Link } from "react-router-dom"
import "../styles/index.css"

export default function Navigation(){
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Projects</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}