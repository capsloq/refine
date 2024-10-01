import type { HttpError } from "@refinedev/core";
import ky from "ky";

const kyInstance = ky.create({
  hooks: {
    beforeRequest: [() => console.log("before 1")],
    // afterResponse: [
    //   async (_input, options, response) => {
    //     // You could do something with the response, for example, logging.
    //     console.log(response);

    //     const data = await response.json()
    //     console.log("🚀 ~ data:", data)
    //     const headers = options.headers
    //     console.log("🚀 ~ headers:", headers)

    //     // Or return a `Response` instance to overwrite the response.
    //     return new Response("A different response", { status: 200 });
    //   },
    // ],
  },
});

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const customError: HttpError = {
//       ...error,
//       message: error.response?.data?.message,
//       statusCode: error.response?.status,
//     };

//     return Promise.reject(customError);
//   },
// );

export { kyInstance };
