import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Slide } from './types';

export const sliderApi = createApi({
	reducerPath: 'sliderApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.pik.ru'
	}),
	endpoints: builder => ({
		getSlider: builder.query<Slide[], void>({
			query: () => 'v2/offer/special?types=1,2&locations=2,3'
		})
	})
});

export const { useGetSliderQuery } = sliderApi;
