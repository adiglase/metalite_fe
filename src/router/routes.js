const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "feeds",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/profile/:userId",
        name: "profile",
        component: () => import("pages/ProfilePage.vue"),
      },
      {
        path: "/post/:postId",
        name: "postDetail",
        component: () => import("pages/PostPage.vue"),
      },
    ],
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
