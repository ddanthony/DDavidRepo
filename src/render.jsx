import {useEffect, useState} from 'react'

export default function Render(){
    const [num, setNum] = useState(0)
    useEffect (() => {
        setTimeout(() => {
            setNum((num) => num + 1)
        }, 1000);
    })
    return (
    <div>
     <h2> Rendered {num} times </h2>
    </div>
    )
}
