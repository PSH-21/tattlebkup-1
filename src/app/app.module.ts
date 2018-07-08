import { AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { TripService } from './trip.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { RouterModule } from '@angular/router'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { TripGeneratorFormComponent } from './admin/trip-generator-form/trip-generator-form.component';
import { TripComponent } from './trip/trip.component';
import { ConfirmbookingComponent } from './confirmbooking/confirmbooking.component';
import { ProfileComponent } from './profile/profile.component';
import { ManageBookingsComponent } from './admin/manage-bookings/manage-bookings.component';
import { TripcardComponent } from './tripcard/tripcard.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
  AppComponent,
  BsNavbarComponent,
  HomeComponent,
  ProductsComponent,
  ShoppingCartComponent,
  CheckOutComponent,
  OrderSuccessComponent,
  MyTripsComponent,
  AdminProductsComponent,
  AdminOrdersComponent,
  LoginComponent,
  TripGeneratorFormComponent,
  TripComponent,
  ConfirmbookingComponent,
  ProfileComponent,
  ManageBookingsComponent,
  TripcardComponent,
  FooterComponent
  ],
  imports: [
  BrowserModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  FormsModule,
  CustomFormsModule,
  NgbModule.forRoot(),
  RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'trip/:tripid/confirm', component: ConfirmbookingComponent, canActivate: [AuthGuard]},
    { path: 'trip/:tripname/:tripid', component: TripComponent},
    { path: 'profile/:uid', component: ProfileComponent},

    { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
    { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
    { path: 'my/trips', component: MyTripsComponent, canActivate: [AuthGuard] },

    { 
      path: 'tattler/manage-bookings', 
      component: ManageBookingsComponent, 
      canActivate: [AuthGuard, AdminAuthGuard] 
    },
    { 
      path: 'tattler/trips/new', 
      component: TripGeneratorFormComponent, 
      canActivate: [AuthGuard, AdminAuthGuard] 
    },
    { 
      path: 'tattler/trips/:id', 
      component: TripGeneratorFormComponent, 
      canActivate: [AuthGuard, AdminAuthGuard] 
    },
    { 
      path: 'tattler/trips', 
      component: AdminProductsComponent, 
      canActivate: [AuthGuard, AdminAuthGuard] 
    },
    { 
      path: 'admin/orders', 
      component: AdminOrdersComponent, 
      canActivate: [AuthGuard, AdminAuthGuard] 
    }
    ])    
  ],
  providers: [
  AuthService,
  AuthGuard,
  AdminAuthGuard,
  UserService,
  TripService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
