import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
