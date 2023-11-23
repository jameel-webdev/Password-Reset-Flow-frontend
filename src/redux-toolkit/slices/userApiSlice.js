import { apiSlice } from "./apiSlice";
const USERS_URL = "https://password-reset-flow-is8m.onrender.com/api/users";

// injecting endpoints into the @ apiSlice = createApi.endpoints
export const usersApiSlice = apiSlice.injectEndpoints({
  // endpoints with paramthesis ()=> ( {} ) - bcoz setting all mutations inside an OBJECT
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    forgotpassword: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/forgotpassword`,
        method: "POST",
        body: data,
      }),
    }),
    resetpassword: builder.mutation({
      query: (data, token) => ({
        url: `${USERS_URL}/resetpassword/:${token}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

// there is specific convention to import mutations amd queries
// if its builder.mutation - `use${mutationName}Mutation` - example... useLoginMutaion
// if its builder.query(to fetch data) - `use${queryName}Query` - example... useBlogQuery

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useForgotpasswordMutation,
  useResetpasswordMutation,
} = usersApiSlice;
