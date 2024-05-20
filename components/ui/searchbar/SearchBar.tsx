import { IoMdSearch } from 'react-icons/io'

import { useState } from 'react'

type Props = {
	onSubmit(searchTerm: string): void
}
export const SearchBar = (props: Props) => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		// We use the Paper component since it already contains the style that we want.
		<form
			onSubmit={(e) => {
				e.preventDefault()
				props.onSubmit((searchTerm as string) ?? '')
			}}
			className="flex items-center bg-[#ffff] shadow-xl transition-shadow"
		>
			<input
				onChange={(e) => {
					setSearchTerm(e.target.value)
				}}
				type="text"
				placeholder="Busca tu software ideal"
				className="text-xl w-[90%] rounded-md py-4 px-3 text-black  "
			/>
			<button type="submit" className="self-center text-black">
				<IoMdSearch />
			</button>
		</form>
	)
}
