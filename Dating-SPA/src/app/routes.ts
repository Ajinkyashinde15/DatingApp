import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './route_guards/auth.guard';

export const appRoutes : Routes = [
    { path: '' , component: HomeComponent}, //Home Component
    { path: 'members' , component: MemberListComponent, canActivate: [AuthGuard]},
    { path: 'messages' , component: MessagesComponent, canActivate: [AuthGuard]},
    { path: 'lists' , component: ListsComponent, canActivate: [AuthGuard]},
    { path: '**' , redirectTo: '', pathMatch:'full'},
];