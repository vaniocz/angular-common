import {Observable, isObservable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'withLoading'})
export class WithLoadingPipe implements PipeTransform {
    public transform<T>(value: Observable<T> | any): Observable<{isLoading: boolean; value?: T; error?: any}> | any {
        if (!isObservable(value)) {
            return {isLoading: false, value};
        }

        return value.pipe(
            map((v: any) => ({loading: false, value: v})),
            startWith({isLoading: true}),
            catchError((error) => of({isLoading: false, error})),
        );
    }
}
