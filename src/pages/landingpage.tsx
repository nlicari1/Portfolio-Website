import { useEffect, useState } from "react"
import "../styles/index.css"

export default function LandingPage() {
    const [nameText, setNameText] = useState('');
    const [isEnglishComplete, setIsEngComplete] = useState(false)

    const name = ' Nicholas Licari ';
    const japaneseName = ' ニコラス・リカリ ';

    useEffect( () => {
        let index = 0;

        const typewriterEffect = () =>{
            if(index < name.length) {
                setNameText((prev) => prev + name[index]);
                index++;
            } else if(index === name.length) {
                //delay before japanese name
                setIsEngComplete(true)
                clearInterval(timer)
                setTimeout(() => {
                    setNameText('')
                    index = 0;
                }, 2000);
            }
        }
        const timer = setInterval(typewriterEffect, 100);
        return () => clearInterval(timer);
    }, [])

    return(
        <div className="landing-page">
            <div className="name-animation">
                <h1>{nameText}</h1>
                {isEnglishComplete && <h2>{japaneseName} </h2>}
            </div>
        </div>
    )
}