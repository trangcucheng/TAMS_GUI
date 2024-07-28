import { FileOutlined, MenuOutlined, UnorderedListOutlined, MoneyCollectOutlined, BookOutlined, ScheduleOutlined, ApartmentOutlined, CheckOutlined, DiffOutlined } from '@ant-design/icons'
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield, Users, Airplay, Columns, Settings, Bold, Bell, Aperture, Home, Book, Grid, Menu, UserPlus, Sliders } from 'react-feather'

export default [
  {
    id: 'homepages1',
    title: 'Trang chủ',
    icon: <Home size={12} />,
    navLink: '/dashboard/analytics',
    action: 'read',
    resource: 'TRANG_CHU_PH1',
    role: 0
  },
  {
    id: 'homepages2',
    title: 'Trang chủ',
    icon: <Home size={12} />,
    navLink: '/default/homepage',
    // action: 'read',
    // resource: 'TRANG_CHU_PH1',
    // role: 0
  },
  {
    header: "Tài liệu",
    role: 0
  },
  {
    id: 'document',
    title: 'QL kho tài liệu mẫu',
    icon: <FileText size={12} />,
    navLink: '/tams/document',
    action: 'read',
    resource: 'QL_KHO_TAI_LIEU_MAU',
    role: 0
  },
  {
    header: "Quản lý danh mục",
    role: 0
  },
  {
    id: 'document-type',
    title: 'Loại tài liệu',
    icon: <BookOutlined size={12} />,
    navLink: '/tams/document-type',
    action: 'read',
    resource: 'LOAI_TAI_LIEU',
    role: 0
  },
  {
    id: 'major',
    title: 'Lĩnh vực',
    icon: <Sliders size={12} />,
    navLink: '/tams/major',
    action: 'read',
    resource: 'LINH_VUC',
    role: 0
  },
  {
    id: 'organization',
    title: 'Đơn vị',
    icon: <ApartmentOutlined size={12} />,
    navLink: '/tams/organization',
    action: 'read',
    resource: 'DON_VI',
    role: 0
  },
  {
    header: "Kiểm tra tài liệu",
    role: 0
  },
  {
    id: 'course',
    title: 'Đợt kiểm tra',
    icon: <DiffOutlined size={12} />,
    navLink: '/tams/course',
    action: 'read',
    resource: 'DOT_KIEM_TRA',
    role: 0
  },
  {
    id: 'checking-document',
    title: 'Kiểm tra tài liệu',
    icon: <CheckOutlined size={12} />,
    navLink: '/tams/checking-document',
    action: 'read',
    resource: 'KIEM_TRA_TAI_LIEU',
    role: 0
  },
  {
    header: "Quản lý hệ thống",
    role: 0
  },
  {
    id: 'permissions',
    title: 'QL Tài khoản',
    icon: <Users size={12} />,
    navLink: '/tams/accounts',
    action: 'read',
    resource: 'TAI_KHOAN',
    role: 0
  },
  {
    id: 'role',
    title: 'Vai trò, phân quyền',
    icon: <Users size={12} />,
    navLink: '/tams/roles',
    action: 'read',
    resource: 'PHAN_QUYEN_VAI_TRO',
    role: 0
  },
  {
    id: 'permissions',
    title: 'QL các quyền cơ bản',
    icon: <UserPlus size={12} />,
    navLink: '/tams/permissions',
    action: 'read',
    resource: 'CHUC_NANG',
    role: 0
  },
  {
    id: 'configuration',
    title: 'Cấu hình tham số',
    icon: <Settings size={12} />,
    navLink: '/tams/config',
    action: 'read',
    resource: 'CHUC_NANG',
    role: 0
  }


  // {
  //   id: 'permissions',
  //   title: 'Phân quyền',
  //   icon: <Columns size={20} />,
  //   children: [
  //     {
  //       id: 'permissions',
  //       title: 'Quản lý quyền chức năng cơ bản',
  //       icon: <Circle size={12} />,
  //       navLink: '/tams/permissions',
  //       action: 'read',
  //       resource: 'CHUC_NANG'
  //     },
  //     // {
  //     //   id: 'permissionGroups',
  //     //   title: 'Quản lý nhóm quyền',
  //     //   icon: <Circle size={12} />,
  //     //   navLink: '/tams/permissionGroups',
  //     //   action: 'read',
  //     //   resource: 'NHOM_QUYEN'
  //     // },
  //     // {
  //     //   id: 'permissions',
  //     //   title: 'Quản lý quyền chức năng cơ bản',
  //     //   icon: <Circle size={12} />,
  //     //   navLink: '/tams/permissions',
  //     //   action: 'read',
  //     //   resource: 'CHUC_NANG'
  //     // },
  //     {
  //       id: 'role',
  //       title: 'Quản lý vai trò người dùng và phân quyền',
  //       icon: <Circle size={12} />,
  //       navLink: '/tams/roles',
  //       action: 'read',
  //       resource: 'PHAN_QUYEN_VAI_TRO'
  //     },
  //     // {
  //     //   id: 'permiss',
  //     //   title: 'Phân quyền người dùng',
  //     //   icon: <Circle size={12} />,
  //     //   navLink: '/tams/userRoles',
  //     //   action: 'read',
  //     //   resource: 'PHAN_QUYEN_NGUOI_DUNG'
  //     // },
  //   ],
  //   role: 0
  // },
  // {
  //   id: 'categories1',
  //   title: 'Danh mục chung',
  //   icon: <MenuOutlined size={20} />,
  //   children: [
  //     {
  //       id: 'position',
  //       title: 'Chức vụ',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/categories/officeTypes',
  //       action: 'read',
  //       resource: 'DM_CHUC_VU'
  //     },
  //     {
  //       id: 'position1',
  //       title: 'Chức danh',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/categories/professionalTitles',
  //       action: 'read',
  //       resource: 'DM_CHUC_DANH'
  //     },
  //     {
  //       id: 'organizationTypes',
  //       title: 'Loại đơn vị',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/categories/organizationTypes',
  //       action: 'read',
  //       resource: 'DM_LOAI_DON_VI'
  //     },
  //     // {
  //     //   id: 'organizationLevels',
  //     //   title: 'Cấp đơn vị',
  //     //   icon: <Circle size={12} />,
  //     //   navLink: '/apps/categories/organizationLevels',
  //     //   action: 'read',
  //     //   resource: 'DM_CAP_DON_VI'
  //     // },
  //     {
  //       id: 'position6',
  //       title: 'Đơn vị',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/categories/organizations',
  //       action: 'read',
  //       resource: 'DM_DON_VI'
  //     },

  //     // {
  //     //   id: 'position9',
  //     //   title: 'Hình thức khen thưởng',
  //     //   icon: <Circle size={12} />,
  //     //   navLink: '/apps/categories/rewardTypes',
  //     //   action: 'read',
  //     //   resource: 'DM_HT_KHEN_THUONG'
  //     // },
  //   ],
  //   role: 0
  // },

  // {
  //   id: 'config',
  //   title: 'Cấu hình hệ thống',
  //   icon: <Settings size={20} />,
  //   children: [
  //     {
  //       id: 'provinece',
  //       title: 'Gửi email',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/config/profile1'
  //     },
  //     {
  //       id: 'dinhdang',
  //       title: 'Định dạng tệp tin',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/config/profile2'
  //     },
  //     {
  //       id: 'gioihan',
  //       title: 'Giới hạn dung lượng tệp tin',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/config/profile3'
  //     },
  //     {
  //       id: 'thamso',
  //       title: 'Tham số cập nhật, báo cáo dữ liệu',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/config/profile'
  //     }
  //   ],
  //   role: 0
  // },
  // {
  //   id: 'logtime',
  //   title: 'Nhật ký hoạt động',
  //   icon: <Bold size={20} />,
  //   children: [
  //     {
  //       id: 'provinece',
  //       title: 'Loại nhật ký hoạt động',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/logtime/profile1'
  //     },
  //     {
  //       id: 'nhatky',
  //       title: 'Nhật ký hoạt động',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/logtime/profile2'
  //     }
  //   ],
  //   role: 0
  // },
  // {
  //   id: 'notification',
  //   title: 'Thông báo',
  //   icon: <Bell size={20} />,
  //   children: [
  //     {
  //       id: 'provinece',
  //       title: 'Thông báo cá nhân',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/notification/profile1'
  //     }
  //   ],
  //   role: 0
  // }
]
