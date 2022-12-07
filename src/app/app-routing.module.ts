import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './core/auth.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnauthorizedAccessComponent } from './unauthorized-access/unauthorized-access.component';

const routes: Routes = [
  { path: '' , component:  HomeComponent  },
  { path: 'contact' , component:  ContactComponent  },
  { path: 'unathorized' , component:  UnauthorizedAccessComponent  },
  { path: 'test' , loadChildren: () => import('./test/test.module') },
  { path: 'products' , loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), canActivate: [AuthGuard]  },
  { path: '**' , component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
