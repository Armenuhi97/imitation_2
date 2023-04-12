import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IBalance, IMyLevel } from '../models/balance.model';
import { ILevel } from '../models/livel.model';

@Injectable()
export class LevelService {

  constructor(private httpClient: HttpClient) { }
  public getLevels(): Observable<ILevel[]> {
    return this.httpClient.get<ILevel[]>('level/')
  }
  public getMyLevelCount(): Observable<IMyLevel> {
    return this.httpClient.get<IMyLevel>(`get-levels/`)
  }

}
