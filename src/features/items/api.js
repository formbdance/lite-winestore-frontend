import axios from "axios";


const api_url = 'http://localhost:5000/api/wine';


export async function getItems() {
    const res = await axios.get(api_url)
    if (res.status !== 200) {
        throw new Error('Ошибка при получении данных!')
    }
    
    return res.data
}

export async function getOnlyMarket(marketName) {
    const res = await axios.get(`${api_url}/${marketName}`)
    if (res.status !== 200) {
        throw new Error('Ошибка получения данных маркетплейса!')
    }

    return res.data
}

export async function addItem(itemData) {
    const res = await axios.post(api_url, itemData, 
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    if (res.status !== 200) {
        throw new Error('Ошибка добавления данных!')
    }
    return res.data
}

export async function deleteItem(itemId) {
    const res = await axios.delete(`${api_url}/${itemId}`)
    if(res.status !== 200) {
        throw new Error('Ошибка удаления данных!')
    }
    return itemId
}