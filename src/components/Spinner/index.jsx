import React from 'react';

import { Centralizer, Loading, Container } from './styles'

export const Spinner = () => {
	return (
		<Centralizer>
			<Loading />
		</Centralizer>
	)
}

export const LoadingIcon = () => {
	return (
		<Container >
			<Loading />
		</Container>
	)
}
