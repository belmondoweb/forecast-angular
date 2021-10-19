import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { City } from './models.ts/icity';

export function liveSearch<T, R>(
  dataCb: (query: T) => Observable<R>,

  delay = 250
) {
  return (source$: Observable<T>) => source$.pipe(
    debounceTime(delay),
    distinctUntilChanged(),
    switchMap(dataCb)
  )

}