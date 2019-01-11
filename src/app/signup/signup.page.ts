import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  pseudo: string = '';
  avatar: string = '';

  constructor(private storage: Storage, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  setAvatar() {
    let avatar = "https://api.adorable.io/avatars/250/" + Math.random() * 10 + ".png";
    this.storage.set('avatar', avatar).then( () => {} );
  }

  signup() {
    this.storage.set('pseudo', this.pseudo).then( () => {
      this.setAvatar();
      this.router.navigateByUrl('home');
    });
  }
}
