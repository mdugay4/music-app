import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '82c8b84090mshd9c4924ac352891p1c1dcbjsne7cd4a535b57',
//         'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
//     },
// };

// fetch('https://shazam.p.rapidapi.com/charts/list', options)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));

export const shazamApi = createApi({
    reducerPath: 'shazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set(
                'X-RapidAPI-Key',
                '82c8b84090mshd9c4924ac352891p1c1dcbjsne7cd4a535b57'
            );

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getChartList: builder.query({ query: () => '/charts/list' }),
        getTopCharts: builder.query({ query: () => '/charts/track' }),
    }),
});

export const { useGetChartListQuery, useGetTopChartsQuery } = shazamApi;
