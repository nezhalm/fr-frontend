import {Injectable} from '@angular/core';
import {JwtStorageService} from "../../jwt/jwt-storage.service";
import {Role} from "../../../enums/role.enums";

@Injectable({
  providedIn: 'root'
})
export class RoleCheckerService {

  constructor(private jwtStorageService: JwtStorageService) {}

  isCandidat(): boolean {
    const user = this.jwtStorageService.getUser();
    return !!user && user.role === Role.CANDIDAT;
  }

  isCompany(): boolean {
    const user = this.jwtStorageService.getUser();
    return !!user && user.role === Role.COMPANY;
  }



}
