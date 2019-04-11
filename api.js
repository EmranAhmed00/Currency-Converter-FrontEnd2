import * as webapi from './cache.js'

export async function fetchData(url)
{
let promise = await fetch(url);

let data = await promise.json();

return data;
}


export async function getData(from, to, amount)
{

    let cache = webapi.loadCache(from)
    if(!cache || Date.now() - cache.date > 10000)
    {
        let response_data = await fetchData('https://api.exchangeratesapi.io/latest?base='+from);
        webapi.saveCache(from, response_data)
    }


    let setData = document.getElementById('formCall');

    setData.innerHTML = webapi.loadCache(from).rates[to] * amount + ' ' + to;

}
