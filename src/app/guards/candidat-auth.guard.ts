import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {RoleCheckerService} from "../services/auth/role-checker/role-checker.service";

@Injectable({
  providedIn: 'root'
})
export class CandidatAuthGuard implements CanActivate {

  constructor(private roleCheckerService: RoleCheckerService) {}

  canActivate(): boolean {
    if (this.roleCheckerService.isCandidat()) {
      return true;
    } else {
      window.history.back();
      return false;
    }
  }
}