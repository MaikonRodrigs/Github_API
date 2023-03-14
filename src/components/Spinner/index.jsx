import React from 'react';

import * as S from './styles'

export const Spinner = () => {
	return (
		<S.Centralizer>
			<S.Loading />
		</S.Centralizer>
	)
}

export const LoadingIcon = () => {
	return (
		<S.Container >
			<S.LoadingWrapper>
				<S.Dot delay="0.1s" />
				<S.Dot delay="0.2s" />
				<S.Dot delay="0.3s" />
			</S.LoadingWrapper>
		</S.Container >
	)
}