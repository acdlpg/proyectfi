import { Component, OnInit } from '@angular/core';
import { AccService } from '../shared/acc.service';
import { SessionService } from '../services/session.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  dataUser!: any;
  constructor(public accService: AccService,
    public session: SessionService,
    private router: Router,
    private afAuth: AngularFireAuth,){}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.afAuth.currentUser.then((user) => {
          if(this.session.getUser()) {
            this.dataUser = user;
            console.log(user);
          }
          else{
            this.dataUser = null;
          }
        });
        console.log(this.dataUser);
      }
    });
  }
}
