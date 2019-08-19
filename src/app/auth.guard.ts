import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
    constructor(public routes: Router) {

    }
    // tslint:disable-next-line: max-line-length
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
     UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        console.log(route, state);

        if (localStorage.getItem('roles') != null) {
            // role
            if (route['data']) {
                const accessRoles: any = route['data'];
                let userRoles = atob(localStorage.getItem('roles'));
                let found = 0;
                // tslint:disable-next-line: forin
                for (const role in accessRoles) {
                    console.log(role, accessRoles[role], 'role');
                    if (userRoles.includes(accessRoles[role])) {
                        found = 1;
                        break;
                    }
                }
                if (found == 1) {
                    console.log("authgaurd status: ", true);
                    return true;
                } else {
                    console.log("authgaurd status: ", false);
                    return false;
                }
            } else {
                console.log("authgaurd status: ", false);
                return false;
            }
        } else {
            console.log("authgaurd status: ", false);
            this.routes.navigate(['/page1']);
            return false;
        }
        // throw new Error("Method not implemented.");
    }



}
