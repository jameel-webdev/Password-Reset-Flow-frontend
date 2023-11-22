import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// apiSlice -- it deals with API, making request to backend with all methods like login, register, authenticate, updates
// createApi -- The React-specific entry point for RTK Query exports a version of createApi which automatically generates React hooks for each of the defined query & mutation endpoints.
// fetchBaseQuery --RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios

const baseQuery = fetchBaseQuery({
  // baseUrl usualy takes the URL Path ie. something like  "http://localhost:3000/api"
  // but in this project we have used proxy in vite.config
  baseUrl: "",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"], // used for caching and invalidation
  endpoints: (builder) => ({}),
});

// once apiSlice created & devTools inside store is true - we could see this inside Redux extension
// api : {
//    queries: {},
//    mutations: {},
//    provided: {},
//    subscriptions: {},
//    config: {}
//  }
// Using this as parent component and all state management get mutated by injecting endpoints inside apiSlice from other children Slices
// example : inthis project userApiSlice
