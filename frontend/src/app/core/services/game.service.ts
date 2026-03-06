import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Score {
    _id?: string;
    gameName: string;
    score: number;
    level?: string;
    playedAt?: Date;
    userId?: any;
}

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private get apiUrl() {
        if (window.location.hostname === 'localhost') {
            return window.location.port === '4200' ? 'http://localhost:5000/api/game' : '/api/game';
        }
        return 'https://funzone-14cy.onrender.com/api/game';
    }


    constructor(private http: HttpClient) { }

    submitScore(scoreData: Score): Observable<Score> {
        return this.http.post<Score>(`${this.apiUrl}/score`, scoreData);
    }

    getMyScores(): Observable<Score[]> {
        return this.http.get<Score[]>(`${this.apiUrl}/my-scores`);
    }

    getLeaderboard(gameName: string): Observable<Score[]> {
        return this.http.get<Score[]>(`${this.apiUrl}/leaderboard/${gameName}`);
    }
}
