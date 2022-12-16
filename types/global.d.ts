
export type InputValues = {
    email: string
    password: string
}

export interface Tickers {
    symbol: string;
    quoteAsset: string;
    openPrice: string;
    lowPrice: string;
    highPrice: string;
    lastPrice: string;
    at: string
}