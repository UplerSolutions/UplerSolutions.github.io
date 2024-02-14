import {
	MenuItem,
	MenuList,
	PopperProps,
	Popper,
	Paper,
	IconButton,
	ListItemIcon,
	ListItemText
} from '@mui/material'
import { useRecentSearches } from '../../../hooks/useRecentSearches'
import { AccessTime, Close } from '@mui/icons-material'
import { useOnClickOutside } from 'usehooks-ts'
import { useRef } from 'react'

// we add an onClose prop in addition to the PopperProps
type Props = {
	onClose(): void
} & PopperProps

export const RecentSearches = ({ open, anchorEl, onClose }: Props) => {
	const { recentSearches, setRecentSearches } = useRecentSearches()
	const paperRef = useRef<HTMLDivElement>(null)

	const el = anchorEl as HTMLElement
	// remove item when x button is click for an item
	const removeItem = (searchTerm: string) => {
		setRecentSearches(recentSearches.filter((item) => item !== searchTerm))
	}
	//listen to clickOutside events using this hook from usehooks-ts
	useOnClickOutside(paperRef, onClose)
	if (!anchorEl) return null
	return (
		<Popper className="z-50 " anchorEl={anchorEl} open={open} disablePortal>
			{/* set the width the same as the anchorElement */}
			<Paper
				className="mt-2"
				sx={{ width: el.clientWidth }}
				ref={paperRef}
			>
				<MenuList>
					{!recentSearches.length ? (
						<>
							<MenuItem disabled>
								no tenes busquedas recientes
							</MenuItem>
						</>
					) : (
						<>
							{recentSearches.map((searchTerm, i) => {
								return (
									<MenuItem key={i}>
										<ListItemIcon>
											<AccessTime />
										</ListItemIcon>
										<ListItemText>
											{searchTerm}
										</ListItemText>
										<IconButton
											onClick={() =>
												removeItem(searchTerm)
											}
										>
											<Close />
										</IconButton>
									</MenuItem>
								)
							})}
						</>
					)}
				</MenuList>
			</Paper>
		</Popper>
	)
}
