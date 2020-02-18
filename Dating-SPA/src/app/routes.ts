import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './route_guards/auth.guard';
import { MemberListComponent } from './members/member-list/member-list.component';
import {MemberdetailComponent} from './members/member-detail/member-detail.component';
import { MembersEditComponent } from './members/members-edit/members-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';

export const appRoutes : Routes = [
    { path: '', component: HomeComponent },
    { path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        { path: 'members', component: MemberListComponent},
        { path: 'members/:id', component: MemberdetailComponent },
        { path: 'members/edit', component: MembersEditComponent,
          resolve: {user: MemberEditResolver} },
        { path: 'messages', component: MessagesComponent },
        { path: 'lists', component: ListsComponent }
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];