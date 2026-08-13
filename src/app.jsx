import { urls } from "./lib/constents"
import Render from "./render"
import { useState, useEffect } from "react"
import NavBar from './ui/navbar.comp'

export default function App() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const fetchItems = async () => {
            const items = await grabTodos()
            items.forEach((item) => todos.push(item))

            setTodos(() => [...items])
            console.log(items)
        }

        fetchItems()
    }, [todos.length])

    const grabTodos = async () => {
        const url = new URL(`${urls.typicode}todos`)

        // const res = fetch(URL); // Promise<T>;

        // I/O Intesive (Input/Output) vs. CPU Intesive (caculating extremely large numbers, crypto, etc.)
        try {
            const res = await fetch(url);

            if (!res.ok) {
                console.error("network request failed")
                throw new Error()
            }

            const data = await res.json()
            return data
        } catch (error) {
            console.error(error)
            return []
        }

    }

    return (
        <div>
            <p className="text-purple-500">Hello</p>
            <NavBar />

            <Render />
            <ul>
                {todos.map((item) => (
                    <li>
                        id: {item.id} <br/>
                        title: {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

/*{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
*/
