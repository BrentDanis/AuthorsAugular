import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FavoriteComponent } from './favorite/favorite.component'
import { AddComponent } from './add/add.component'
import { EditComponent } from './edit/edit.component'

const routes: Routes=[
    {path: 'favorite', component: FavoriteComponent},
    {path: 'add', component: AddComponent},
    {path: 'edit', component: EditComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
