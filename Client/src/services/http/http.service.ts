import axios from 'axios';


export class HttpService{
    
async delete<T>(url: string): Promise<T>{
    return axios.delete(`$(serverDomain)${url}`).then((axiosResponse)=>{
    return axiosResponse.data as T;
});
}

async get<T>(url: string): Promise<T>{
    return axios.get("https://marketbackendgit.onrender.com"+url).then((axiosResponse)=>{
    return axiosResponse.data as T;
});
}
async post<T>(url: string,body: unknown): Promise<T>{
    return axios.post("https://marketbackendgit.onrender.com"+url,JSON.stringify(body)).then((axiosResponse)=>{
    return axiosResponse.data as T;
});
}


async put<T>(url: string,body: unknown): Promise<T>{
    return axios.put(`$(serverDomain)${url}`,JSON.stringify(body),{
    }).then((axiosResponse)=>{
    return axiosResponse.data as T;
});
}
}