import axios from "axios"

const api = axios.create({
    baseURL: 'https://dragonball-api.com/api',
    timeout: 10000
});

export const DragonBallApi = {

    findAll: () => api.get('/characters'),
    findById: (id: number) => api.get(`/characters/${id}`),
    search: (value: string) => api.get(`/characters?name=${value}`)

}