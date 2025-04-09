import React from "react";
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Button from "../Button";
import Input from "../Input";

interface SearchProps {
	searchQuery: string;
	setSearchQuery: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
	const router = useRouter()

	return (
		<div className="m-4 max-w-[629px] rounded-md bg-white">
			<div className="flex items-center pl-6 gap-4 rounded-md">
				<Image
					src="/svgs/searchIcon.svg"
					alt="Search icon"
					width={24}
					height={24}
				/>
				<Input
					type="text"
					placeholder="Search..."
					onChange={({ target: { value } }) => setSearchQuery(value)}
					value={searchQuery}
				/>
				<Button
					onClick={() =>
						searchQuery
							? router.push(`/pokemon/${encodeURIComponent(searchQuery)}`)
							: {}
					}
					search
				>
					Search
				</Button>
			</div>
		</div>
	);
};

export default Search;
