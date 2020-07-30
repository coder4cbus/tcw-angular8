import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { RouteErrorComponent } from './error/route.error.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductsModule,
    AppRoutingModule
    
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    RouteErrorComponent
  ],

  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
