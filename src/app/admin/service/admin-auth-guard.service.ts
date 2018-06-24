import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'shared/service/auth.service';
import { UserService } from 'shared/service/user.service';
import { map, switchMapTo } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {    
    return this.auth.appUser$
    .map(appUser => appUser.isAdmin);                    
  }
}
