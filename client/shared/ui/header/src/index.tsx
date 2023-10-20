import { FC, KeyboardEvent } from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Search } from "@ui/search";

export const Header: FC = () => {
	const { pathname } = useLocation();
	const searchParams = pathname.split("/")[2];
	const navigate = useNavigate();

	const [wallet, setWallet] = useState<string>("");

	const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			navigate(`/portfolio/${wallet}`);
		}
	};

	useEffect(() => {
		setWallet(searchParams ? searchParams : "");
	}, [searchParams]);

	return (
		<Box
			width="100%"
			height="100px"
			display="flex"
			alignItems="center"
			justifyContent="space-between"
		>
			<Typography variant="h6">OrdiTracker</Typography>
			<Search value={wallet} handleChange={setWallet} handleSubmit={handleSubmit} />
		</Box>
	);
};
