import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import AuthProvider from './authProvider.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </Provider>
)
