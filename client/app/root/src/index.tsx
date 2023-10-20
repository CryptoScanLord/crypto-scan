import type { FC } from "react";

import { withProviders } from "@app/providers";
import { Routes } from "@app/routes";
import { Container } from "@ui/container";
import { Header } from "@ui/header";
import { useParams } from "react-router-dom";

const App: FC = () => {
	const { wallet } = useParams();
	console.log(wallet);
	return (
		<Container>
			<Header />
			<Routes />
		</Container>
	);
};

export default withProviders(App);
