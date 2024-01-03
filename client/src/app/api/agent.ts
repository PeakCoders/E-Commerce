import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history } from '../..';

axios.defaults.baseURL = 'http://localhost:5000/api/';
const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as any;

    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];

          for (const key in data.errors) {
            const element = data.errors[key];
            if (element) {
              modelStateErrors.push(element);
            }
          }

          throw modelStateErrors.flat();
        }

        toast.error(data.title);
        break;

      case 401:
        toast.error(data.title);
        break;

      case 404:
        toast.error(data.title);
        break;

      case 500:
        history.push({
          pathname: '/server-error',
          state: { error: data },
        });
        break;
      default:
        break;
    }

    return Promise.reject(error.response);
  }
);

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: () => {},
  delete: () => {},
};

const Catalog = {
  list: () => requests.get('Product/products'),
  details: (id: number) => requests.get(`Product/product?id=${id}`),
};

const TestErrors = {
  get400Error: () => requests.get('Buggy/bad-request'),
  get401Error: () => requests.get('Buggy/unauthorised'),
  get404Error: () => requests.get('Buggy/not-found'),
  get500Error: () => requests.get('Buggy/server-error'),
  getValidError: () => requests.get('Buggy/validation-error'),
};

const agent = {
  Catalog,
  TestErrors,
};

export default agent;
