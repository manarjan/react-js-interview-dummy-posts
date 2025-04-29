import { createBrowserRouter, redirect, RouteObject } from 'react-router';
import { ProtectedLayout } from '../layouts/ProtectedLayout';
import { Posts } from '../components/pages/Posts';
import { Login } from '../components/pages/Login';

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: ProtectedLayout,
    children: [
      {
        path: '/',
        loader: () => redirect('/posts'),
      },
      {
        path: '/posts',
        Component: Posts,
      },
    ],
  },
  {
    path: '/login',
    Component: Login,
  },
];

export const router = createBrowserRouter(routes);
