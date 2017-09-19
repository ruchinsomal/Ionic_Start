import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { SideBarPage } from '../pages/side-bar/side-bar';
import { MyListPage } from '../pages/my-list/my-list';
import { TabsPage } from '../pages/tabs/tabs';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { SpecialPage } from '../pages/special/special';
import { CafePage } from '../pages/cafe/cafe';
import { MyCustomListPage } from '../pages/my-custom-list/my-custom-list';
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    SideBarPage,
    MyListPage,
    MyCustomListPage,
    SpecialPage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    CafePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    SideBarPage,
    MyListPage,
    MyCustomListPage,
    SpecialPage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    CafePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
