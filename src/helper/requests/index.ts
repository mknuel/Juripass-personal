import axios from "axios";
import { toast } from "react-toastify";

const get = (url: string, options: any) => {
   let res = axios.get(url, options)
      .catch((error) => {
         if (error.response) {
            // when structure or error messages is confirmed fix this
            toast.error("")
         } else if (error.request) {
            toast.error(error.request);
         } else {
            toast.error(error.message)
         }
         // console.log(error.config);
      });
   return res;
}

const post = (url: string, options: any) => {
   let res = axios.post(url, options)
      .catch((error) => {
         if (error.response) {
            // when structure or error messages is confirmed fix this
            toast.error("")
         } else if (error.request) {
            toast.error(error.request);
         } else {
            toast.error(error.message)
         }
         // console.log(error.config);
      });
   return res;
}

const patch = (url: string, options: any) => {
   let res = axios.put(url, options)
      .catch((error) => {
         if (error.response) {
            // when structure or error messages is confirmed fix this
            toast.error("")
         } else if (error.request) {
            toast.error(error.request);
         } else {
            toast.error(error.message)
         }
         // console.log(error.config);
      });
   return res;
}

const put = (url: string, options: any) => {
   let res = axios.put(url, options)
      .catch((error) => {
         if (error.response) {
            // when structure or error messages is confirmed fix this
            toast.error("")
         } else if (error.request) {
            toast.error(error.request);
         } else {
            toast.error(error.message)
         }
         // console.log(error.config);
      });
   return res;
}


export const request = {
   get,
   post,
   put,
   patch,

}