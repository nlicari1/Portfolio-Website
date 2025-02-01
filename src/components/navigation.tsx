import { Link } from "react-router-dom"
import "../styles/index.css"

export default function Navigation(){
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    
                </ul>
            </nav>
        </header>
    )
}