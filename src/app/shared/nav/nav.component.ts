import { Component, OnInit } from '@angular/core';
import { TokenStorageService} from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLoggedIn =false;
  user_name?:string;

  constructor(
    private _tokenStorage: TokenStorageService,
  ) { }

  ngOnInit():void{
    this.isLoggedIn = !!this._tokenStorage.getToken();
    console.log("isLoggedIn: "+this.isLoggedIn)
    if (this.isLoggedIn){
      const user = this._tokenStorage.username();
      this.user_name = user;
    }
  }

  logOut(): void {
    this._tokenStorage.singOut();
    window.location.reload();

  }

}


