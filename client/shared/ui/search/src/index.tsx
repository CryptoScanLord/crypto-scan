import { ChangeEvent, KeyboardEvent } from "react";
import { FC } from "react";

import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

export interface SearchProps {
	value: string;
	handleChange: (e: string) => void;
	handleSubmit?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const Search: FC<SearchProps> = ({ value, handleChange, handleSubmit }) => (
	<FormControl>
		<Input
			value={value}
			onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
			onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => (handleSubmit ? handleSubmit(e) : null)}
			placeholder="Search"
			startAdornment={
				<InputAdornment position="start">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="15"
						height="15"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
							fill="#525F7A"
						/>
						<path
							d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
							fill="#525F7A"
						/>
					</svg>
				</InputAdornment>
			}
		/>
	</FormControl>
);
