import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';
import { firebase } from '@firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from 'shared/model/app-user';
import { UserService } from './user.service';


@Injectable()
export class AuthService {
  user$: Observable<any>;

  constructor(
    public afAuth: AngularFireAuth,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.user$ = afAuth.authState;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.switchMap(user => {
      if (user) return this.userService.get(user.uid);
      return Observable.of(null);
    });
  }
}

