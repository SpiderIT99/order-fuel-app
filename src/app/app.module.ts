import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OrderBlockComponent } from './components/order-block/order-block.component';
import { OrderFormComponent } from './pages/orders/order-form/order-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ItemFormOrderComponent } from './components/item-form-order/item-form-order.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OrderListComponent,
    OrdersComponent,
    PageNotFoundComponent,
    NavigationComponent,
    OrderBlockComponent,
    OrderFormComponent,
    ItemFormOrderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
