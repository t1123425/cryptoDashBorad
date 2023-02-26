const coingeckoApi = 'https://api.coingecko.com/api/v3/';
export const Ping = async () => {
    const res = await fetch(coingeckoApi+'/ping')
    if(!res.ok){
        throw new Error('api error');
    }
    return res.json();
}

export const GetCoinsList = async () => {
    const res = await fetch(coingeckoApi+'/coins/list')
    if(!res.ok){
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export const GetCoinsMarket = async (vs_currency:string = 'usd') => {
    const queryParams = new URLSearchParams({
        vs_currency:vs_currency,
        order:'market_cap_desc',
        page:'1',
        per_page:'50',
        sparkline:'false'
    }) 
    const res = await fetch(coingeckoApi+'/coins/markets?'+queryParams)
    if(!res.ok){
        throw new Error('Failed to fetch data');
    }
    return res.json();
  
}