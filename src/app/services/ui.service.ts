import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private orientationSubject = new BehaviorSubject<boolean>(this.checkLandscape());
  orientation$ = this.orientationSubject.asObservable();

  constructor(private zone: NgZone, private router: Router) {
    window.addEventListener('resize', () => {
      this.zone.run(() => {
        this.orientationSubject.next(this.checkLandscape());
      });
    });
  }

  private checkLandscape(): boolean {
    return window.innerWidth > window.innerHeight;
  }

  redirectTo(path: string): void {
    this.router.navigate([path]);
  }



}
