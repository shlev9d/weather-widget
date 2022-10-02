import React, { useEffect } from 'react'
import s from './header.module.scss'
import CustomSelect from './CustomSelect/CustomSelect'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeTheme } from '../../store/themeSlice/themeSlice'
import AppIcons from '../../assets/AppIcons'

type Props = {}

const Header = (props: Props) => {
	const theme = useAppSelector(state => state.theme.theme)
	const dispath = useAppDispatch()

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<header className={s.header}>
			<div className={s.leftBlock}>

				<div className={s.wrapper}>
					<div className={s.logo}>
						<AppIcons id='logo' />
					</div>
					<div className={s.title}>weather</div>
				</div>
				
				<div className={s.logoTheme} onClick={() => dispath(changeTheme())}>
					<AppIcons id='changeTheme' />
				</div>
			</div>

			<div>
				<CustomSelect />
			</div>

		</header>
	)

}

export default Header
