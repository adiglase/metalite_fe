const routes = [
  {
    path: "/",
    name: "feeds",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/",
    component: () => import("layouts/FrontFormSubmissionLayout.vue"),
    children: [
      {
        path: "/login",
        name: "login",
        components: {
          WelcomeSection: () => import("pages/Login/WelcomeMessageSection.vue"),
          SubmissionSection: () => import("pages/Login/SubmissionSection.vue"),
        },
        meta: {
          isPublic: true,
        },
      },
      {
        path: "/signup",
        name: "signup",
        components: {
          WelcomeSection: () =>
            import("pages/SignUp/WelcomeMessageSection.vue"),
          SubmissionSection: () => import("pages/SignUp/SubmissionSection.vue"),
        },
        meta: {
          isPublic: true,
        },
      },
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
