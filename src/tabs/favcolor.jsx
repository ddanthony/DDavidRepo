import { useState } from 'react'

export default function FavColor() {
    const [color, setColor] = useState("")
    return (
        <div>
            <h1 style={{ color }}>
                Fav color: {color} <br />
                <button onClick={() => setColor("blue")} style={{ color: 'blue' }}> blue </button>
                <button onClick={() => setColor("red")} style={{ color: 'red' }}> red </button>
                <button onClick={() => setColor("yellow")} style={{ color: 'yellow' }}> yellow </button>
            </h1>

        </div>
    )
}


