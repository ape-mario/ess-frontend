import { CashIcon, ClipboardIcon, ListIcon, UsersIcon, UserIcon, HomeIcon, BriefcaseIcon } from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Dashboard' },
  {
    title: 'Home',
    icon: HomeIcon,
    to: '/dashboard/default'
  },
  //{ divider: true },
  //{ header: 'Employee Attendance' },
  //{ title: 'Attendance List', icon: ListIcon, to: '/attendance/list' },
  { divider: true },
  { header: 'Log' },
  {
    title: 'Employee Logging AJ',
    icon: UsersIcon,
    to: '/log/employee-aj'
  },
  {
    title: 'Employee Logging Non AJ',
    icon: UserIcon,
    to: '/log/employee-non-aj'
  },
  { divider: true },
  { header: 'General Reports' },
  {
    title: 'View Log Activity',
    icon: ClipboardIcon,
    to: '/reports/log-activity'
  },
  { divider: true },
  { header: 'Reimbursement' },
  {
    title: 'Petty Cash',
    icon: CashIcon,
    to: '/reimbursement/petty-cash'
  },
  { divider: true },
  { header: 'Administration' },
  {
    title: 'Letters Id',
    icon: BriefcaseIcon,
    to: '/administration/letters-id'
  }
  //{ divider: true },
  //{ title: 'Sample Page', icon: BrandChromeIcon, to: '/starter'},
  //{ title: 'Documentation', icon: HelpIcon, to: 'https://codedthemes.gitbook.io/berry-vuetify/', type: 'external'}
];

export default sidebarItem;
