import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router"; // Ensure Routes is imported
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";

const OAuth = require('oauth').OAuth;

const consumerKey = 'TWÓJ_CONSUMER_KEY';
const consumerSecret = 'TWÓJ_CONSUMER_SECRET';
const accessToken = 'UZYSKANY_ACCESS_TOKEN';
const accessTokenSecret = 'UZYSKANY_ACCESS_TOKEN_SECRET';

const oauth = new OAuth(
  'https://provider.com/oauth/request_token',
  'https://provider.com/oauth/access_token',
  consumerKey,
  consumerSecret,
  '1.0',
  null,
  'HMAC-SHA1'
);

const url = 'https://provider.com/api/user';

oauth.get(url, accessToken, accessTokenSecret, (error, data, response) => {
  if (error) {
    console.error('Błąd API:', error);
  } else {
    const user = JSON.parse(data);
    console.log('Dane użytkownika:', user);
  }
});

let NotFoundComponent;
let NewsComponent;
let LoginComponent;
let HomeComponent;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: []
})
export class AppModule { }
