import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './styles/index.scss'
import App from './App'
import store, { persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
)
