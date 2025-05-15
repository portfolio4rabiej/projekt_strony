import {bootstrapApplication} from '@angular/platform-browser';
import {ActivatedRoute, provideRouter, Routes, withDebugTracing, withRouterConfig} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgModule} from '@angular/core';
import { Component,OnInit } from '@angular/core';

export class AppComponent {
  title = 'untitled';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class App implements OnInit {
  private http: any;
  private Router: any;
  private route: any;

  constructor(route: ActivatedRoute, http: HttpClient) {

  }


  ngOnInit() {
    this.Router.queryParams.subscribe((params: { [key: string]: any }) => {
      const oauthToken = params['oauth_token'];
      const oauthVerifier = params['oauth_verifier'];
      if (oauthToken && oauthVerifier) {
        this.http.post('/api/oauth/access-token', {
          oauth_token: oauthToken,
          oauth_verifier: oauthVerifier
        }).subscribe((response: any) => {
          console.log('Access token response:', response);
        });
      }
    })

  const appRoutes: Routes = [];

  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(appRoutes,
        withDebugTracing(),
        withRouterConfig({paramsInheritanceStrategy: 'always'}))
    ]
  }).then(r =>{});

  const oauthToken = this.route.snapshot.queryParamMap.get('oauth_token');
  const oauthVerifier = this.route.snapshot .queryParamMap.get('oauth_verifier');

  window.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=${oauthToken}`;
  }
}
