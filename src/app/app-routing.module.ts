import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MyTestComponent } from './my-test/my-test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnauthorizedAccessComponent } from './unauthorized-access/unauthorized-access.component';

const routes: Routes = [
  { path: '' , component:  HomeComponent  },
  { path: 'contact' , component:  ContactComponent  },
  { path: 'unathorized' , component:  UnauthorizedAccessComponent  },
  { path: 'test' , component:  MyTestComponent  },
  { path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
