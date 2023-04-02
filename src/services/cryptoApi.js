// import axios from "axios";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   headers: {
//     "X-RapidAPI-Key": "ff788b3c8dmsh20313e33f73af96p1ac73fjsn235f8847ee19",
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://coinranking1.p.rapidapi.com/coins",
//   }),
//   prepareHeaders: (headers) => {
//     headers.set(
//       "X-RapidAPI-Key",
//       "ff788b3c8dmsh20313e33f73af96p1ac73fjsn235f8847ee19"
//     );
//     return headers;
//   },
//   endpoints: (builder) => ({
//     getCryptos: builder.query({ query: () => "/coins" }),
//   }),
// });

// export const { useGetCryptosQuery } = cryptoApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const cryptoApiHeaders = {
//   'X-RapidAPI-Key': 'f788b3c8dmsh20313e33f73af96p1ac73fjsn235f8847ee19',
//   'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
// };

// const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

// // const createRequest = (url) => ({ url, headers: cryptoApiHeaders })
// const createRequest = (url) => ({ url: `${baseUrl}${url}`, headers: cryptoApiHeaders });

// export const cryptoApi = createApi({
//     reducerPath: 'cryptoApi',
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//         getCryptos: builder.query({
//             query: () => createRequest('/coins')
//         })
//     })
// });

// export const {
//     useGetCryptosQuery,
// } = cryptoApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = 'ff788b3c8dmsh20313e33f73af96p1ac73fjsn235f8847ee19';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://coinranking1.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-host', 'coinranking1.p.rapidapi.com');
      headers.set('x-rapidapi-key', apiKey);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;