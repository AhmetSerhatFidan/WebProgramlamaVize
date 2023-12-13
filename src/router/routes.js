const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/Anasayfa2", component: () => import("src/components/Anasayfa2.vue") },
      { path: "/Anasayfa3", component: () => import("src/components/Anasayfa3.vue") },
      { path: "/Anasayfa4", component: () => import("src/components/Anasayfa4.vue") },
      { path: "/Anasayfa5", component: () => import("src/components/Anasayfa5.vue") },
      { path: "/Ayakkabi1", component: () => import("src/components/Ayakkabi1.vue") },
      { path: "/Ayakkabi2", component: () => import("src/components/Ayakkabi2.vue") },
      { path: "/Ayakkabi3", component: () => import("src/components/Ayakkabi3.vue") },
      { path: "/Ayakkabi4", component: () => import("src/components/Ayakkabi4.vue") },
      { path: "/", component: () => import("src/components/Anasayfa1.vue") },
      { path: "/kaydol", component: () => import("src/components/Kaydol.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
