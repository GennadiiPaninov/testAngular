import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private router = inject(Router)

  navigateTo(url: string): Observable<boolean> {
    return of(this.router.navigate([url])).pipe(
      map(() => {
        return true
      }),
      catchError(err => {
        return of(false)
      })
    );
  }
}
