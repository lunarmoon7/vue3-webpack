import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home.vue';
import About from './About.vue';
import Documents from './Documents.vue';
import DocumentsId from './DocumentsId.vue';
import NotFound from './NotFound.vue';

const route = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  // {
  //   path: '/documents',
  //   component: Documents,
  //   children: [ // Documents의 template도 같이 렌더링된다.
  //     {
  //       path: ':id', // 하위 경로(children)에서는 슬래쉬를 사용하지 않는다.
  //       component: DocumentsId,
  //     },
  //   ],
  // },
  {
    path: '/documents',
    component: Documents,
  },
  {
    path: '/documents/:id',
    name: 'documents-id', // name을 지정하면 $router.push({ name: 'documents-id', params: { id: 1 } })로 접근 가능하다.
    component: DocumentsId,
  },
  // { path: '/documents/:id', component: DocumentsId }, // 동적 라우팅, id는 $route.params.id로 접근 가능, documents 자체는 없는 페이지이다.
  { path: '/:notFound(.*)', component: NotFound }, // 해당하는 페이지가 없을 경우 리다이렉트
];

export default createRouter({
  history: createWebHashHistory(),
  routes: route,
});
