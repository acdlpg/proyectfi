import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getDatabase, ref, push, set, onValue, equalTo, query, onChildAdded, get  } from 'firebase/database';
import { HttpClient } from '@angular/common/http';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dataUser: any;
  users: any[] = [];
  database = getDatabase();
  reservationsRef = ref(this.database, 'reservations');
  emailU!: any;
  providers!: any;
  columns: string[] = [
    'UID', 'Nombre', 'Email', 'Teléfono', 'Proveedores'
  ];
  adminUID = '5ONTPL5AACSW3OnubQDt1f0MUxz1';
  
  constructor(private afAuth: AngularFireAuth, private router: Router, private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.afAuth.currentUser.then((user) => {
      if(user?.uid === this.adminUID) {
        this.dataUser = user;
        console.log(user)
      } else {
        this.router.navigate(['/login']);
      }
    });
    const urapi = `https://users-firebase-gina.onrender.com`;
    this.http.get<any[]>(urapi)
      .subscribe((data) => {
        this.users = data;
      });
      
  }

  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }
  getProviders(user: User){
    console.log(this.dataUser.providerData[0].providerId);
    console.log(this.dataUser.providerData);
    console.log(user.providerData);
    console.log(user);
    console.log(user.providerData.map((userInfo) => userInfo.providerId));
    const providerIds = user.providerData.map((userInfo) => userInfo.providerId);
    return this.providers = providerIds.join(', ');
  }
}
