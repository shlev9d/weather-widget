import { useEffect } from 'react'
import Header from './components/Header/Header'
import { useAppDispatch, useAppSelector } from './store/hooks'

import { fetchOtherDays } from './store/otherDaysSlice/otherDaysSlice'
import OtherDays from './components/OtherDays/OtherDays'
import ThisDay from './components/ThisDay/ThisDay'
import './styles/index.scss'
import { fetchThisDay } from './store/thisDaySlice/thisDaySlice'
import Loader from './components/Loader/Loader'

function App() {
	const loading = useAppSelector(state => state.thisDay.loading)
	const city = useAppSelector(state => state.city.city)
	const dispatch = useAppDispatch()
	
	
	useEffect(() => {
		dispatch(fetchThisDay(city))
		dispatch(fetchOtherDays(city))
	}, [dispatch,city])

	

	if (loading === true) {
		return <Loader />
	} else {
		return (
			<div className='container'>
				<Header />
				<ThisDay />
				<OtherDays />
			</div>
		)
	}
}

export default App
