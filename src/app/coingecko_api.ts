const coingeckoApi = 'https://api.coingecko.com/api/v3/';
export const Ping = () => {
    return new Promise(async (resolve,reject)=>{
        const res = await fetch(coingeckoApi+'/ping')
        if(!res.ok){
            // throw new Error('api error');
            reject(new Error('api error'))
        }
        resolve(res.json());
    })
    // const res = await fetch(coingeckoApi+'/ping')
    // if(!res.ok){
    //     throw new Error('api error');
    // }
    // return res.json();
}

export const GetCoinsList = () => {
    return new Promise(async (resolve,reject)=>{
        const res = await fetch(coingeckoApi+'/coins/list')
        if(!res.ok){
            // throw new Error('Failed to fetch data');
            reject(new Error('Failed to fetch data'))
        }
        resolve(res.json())
        // return res.json();
    })
}

export const GetCoinsMarket = async <T>(vs_currency:string = 'usd',page:number = 1,per_page:number = 10):Promise<T> => {
    const queryParams = new URLSearchParams({
        vs_currency:vs_currency,
        order:'market_cap_desc',
        page:page.toString(),
        per_page:per_page.toString(),
        sparkline:'false'
    }) 
    return new Promise(async (resolve,reject)=>{
        const res = await fetch(coingeckoApi+'/coins/markets?'+queryParams)
        if(!res.ok){
            reject(new Error('Failed to fetch data'))
        }
        resolve(res.json());
    })
    // const res = await fetch(coingeckoApi+'/coins/markets?'+queryParams)
    // if(!res.ok){
    //     throw new Error('Failed to fetch data');
    // }
    // return res.json();
  
}