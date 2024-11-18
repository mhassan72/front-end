import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface LoginPayload {
    phone: string;
    password: string;
}

interface ApiResponse {
    success: boolean;
    message: string;
    data?: any; // Replace `any` with a specific type if you know the response structure
}

const base_url = 'https://fg7sbp0rzd.execute-api.eu-west-2.amazonaws.com/default/auth_system';
const base_api_key =  'U1DLdTNKvP8eSgdLbwLYV3gIWNLHpWF1aNMc0L4J';

export async function login(phone: string, password: string): Promise<void> {
    const options = {
        method: 'POST',
        url: base_url,
        headers: {
            'Content-Type': 'application/json', 
            'action': 'login',
            'x-api-key': base_api_key
        },
        data: { phone: phone, password: password }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
