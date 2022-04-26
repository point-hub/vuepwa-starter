import Pages from './pages/home.vue';

export default [
  {
    path: '/',
    component: () => import('./layouts/base-layout.vue'),
    children: [
      { path: '', component: () => import('./pages/home.vue') },
      { path: '/about', component: () => import('./pages/about.vue') },
    ],
  },
];
