import './style.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const root = createRoot(document.querySelector('#root'))

const toto = 'there !'

root.render(
    <>
        <App clickersCount={ 10 }>
            <h1>Hello {toto}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias recusandae accusantium? Delectus, ratione! Tempora vero alias dolores eius facere reprehenderit expedita quia velit, ullam neque asperiores officiis natus necessitatibus.</p>
        </App>
    </>
)