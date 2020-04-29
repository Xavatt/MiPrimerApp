import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: '../../paginas/alert/alert.module#AlertPageModule'
      },
      {
        path: 'contact',
        loadChildren: '../sliding/sliding.module#SlidingPageModule'
      },
      {
        path: 'settings',
        loadChildren: '../input/input.module#InputPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
