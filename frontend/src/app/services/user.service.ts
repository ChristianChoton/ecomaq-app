import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { User } from "../core/models/user.model";
import { HttpService } from "./http.service";
import { Router } from "@angular/router";

@Injectable()
export class UserService {
  constructor(private http: HttpService, private router: Router) {}

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  findUser() {
    let data: any;
    this.http.getMe().subscribe({
      next: (r) => (data = r),
      error: (e) => console.log(e),
      complete: () => {
        this.setUser(data);        
        this.router.navigateByUrl("/home");
      },
    });
  }

  setUser = (user: User) => this.userSubject.next(user);
  getUser(): User | null {
    return this.userSubject.value;
  }
}
