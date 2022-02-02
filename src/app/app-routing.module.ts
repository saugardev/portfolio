import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from './core/core.module';

const routes: Routes = [
  {path: '',
    loadChildren: () =>
      import('./modules/home/home.module')
        .then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreModule,
  ],
  exports: [RouterModule],
})
/**
 * Root Angular routing module
 */
export class AppRoutingModule { }
