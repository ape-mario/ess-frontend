const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main/dashboard/default',
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      name: 'LandingPage',
      path: '/',
      component: () => import('@/views/dashboards/default/DefaultDashboard.vue')
    },
    {
      name: 'Default',
      path: '/dashboard/default',
      component: () => import('@/views/dashboards/default/DefaultDashboard.vue')
    },
    {
      name: 'Starter',
      path: '/starter',
      component: () => import('@/views/StarterPage.vue')
    },
    {
      name: 'Attendance List',
      path: '/attendance/list',
      component: () => import('@/views/attendance/AttendanceList.vue')
    },
    {
      name: 'Employee Logging AJ',
      path: '/log/employee-aj',
      component: () => import('@/views/log/EmployeeLoggingAJ.vue')
    },
    {
      name: 'Employee Logging Non AJ',
      path: '/log/employee-non-aj',
      component: () => import('@/views/log/EmployeeLoggingNonAJ.vue')
    },
    {
      name: 'View Log Activity',
      path: '/reports/log-activity',
      component: () => import('@/views/reports/ViewLogActivity.vue')
    },
    {
      name: 'Petty Cash',
      path: '/reimbursement/petty-cash',
      component: () => import('@/views/reimbursement/PettyCash.vue')
    },
    {
      name: 'Letters ID',
      path: '/administration/letters-id',
      component: () => import('@/views/administration/LettersId.vue')
    }
  ]
};

export default MainRoutes;
