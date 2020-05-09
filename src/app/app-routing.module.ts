import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./paginas/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./paginas/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'botones',
    loadChildren: () => import('./proyecto/botones/botones.module').then( m => m.BotonesPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./proyecto/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./proyecto/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./proyecto/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./proyecto/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./proyecto/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./proyecto/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./proyecto/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'sliding',
    loadChildren: () => import('./proyecto/sliding/sliding.module').then( m => m.SlidingPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./proyecto/slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./proyecto/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./proyecto/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./proyecto/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('./proyecto/reorder/reorder.module').then( m => m.ReorderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
