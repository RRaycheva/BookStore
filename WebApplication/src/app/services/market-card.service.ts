import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MarketCard } from '../shared/market-card';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MarketCardResource {

    constructor(private http: HttpClient) { }

    createMarketCard(marketCard: MarketCard): Observable<void> {
        return this.http.post<void>('api/market-card', marketCard);
    };

    getAllPurchases(): Observable<MarketCard[]> {
        return this.http.get<MarketCard[]>('api/market-card');
    };

    deleteAllPurchases(): Observable<void> {
        return this.http.delete<void>('api/market-card')
    };

    getPurchaseId(id): Observable<any> {
        return this.http.get('api/market-card/' + id);
    }

    update(id, marketCard: MarketCard): Observable<any> {
        return this.http.put('api/market-card/' + id, marketCard);
    }

    deleteById(id): Observable<any> {
        return this.http.delete('api/market-card/' + id);
    }

}
