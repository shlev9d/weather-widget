import { FC } from 'react'
import Select from 'react-select'
import './customSelect.scss'
import { useAppDispatch, useAppSelector } from './../../../store/hooks'
import { changeCity } from '../../../store/citySlice/citySlice'
import { options } from './options'


const CustomSelect: FC = () => {
	const dispath = useAppDispatch()
	const city = useAppSelector(state => state.city.city)
	const actualcity = {value:city, label: city}

	const changeValue = (options: any) => {
		dispath(changeCity(options.label))
	}

	return (
		<Select
			options={options}
			classNamePrefix='customSelect'
			value={actualcity}
			onChange={changeValue}
		/>
	)
}

export default CustomSelect
