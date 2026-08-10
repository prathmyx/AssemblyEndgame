import { createRoot } from 'react-dom/client'
import Title from './Components/Title.jsx'
import App from './Components/App.jsx'

createRoot(document.getElementById('root'))
    .render(
        <>
            <Title />
            <App />
        </>
)
