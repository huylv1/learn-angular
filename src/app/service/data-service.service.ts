import { Injectable } from '@angular/core';

import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService implements InMemoryDbService {
  constructor() {}

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return {
      heroes: [
        { id: 1, name: 'Boothstomper' },
        { id: 2, name: 'Drogfisher' },
        { id: 3, name: 'Bloodyllips' },
        { id: 4, name: 'Mr Bu Moverse' },
        { id: 5, name: 'Piranhaelli' },
      ],
    };
  }
}
