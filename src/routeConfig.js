import React from 'react';
import LinkList from './screens/LinkList';
import CreateLink from './screens/CreateLink';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <LinkList />,
    title: 'Anasayfa'
  },
  {
    path: '/create-link',
    component: () => <CreateLink />,
    title: 'Link Oluştur'
  }
  
]  