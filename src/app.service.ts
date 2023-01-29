import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { IndicatorsAPIResponse } from './indicators/indicators.interface';

@Injectable()
export class AppService {
  protected EXTERNAL_API_URL = 'https://mindicador.cl/api';
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getIndicators(): Promise<Observable<IndicatorsAPIResponse>> {
    return this.httpService
      .get<IndicatorsAPIResponse>(this.EXTERNAL_API_URL)
      .pipe(map((res) => res.data));
  }
}
