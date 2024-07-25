import { FileOutlined, MenuOutlined, UnorderedListOutlined, MoneyCollectOutlined, BookOutlined, ScheduleOutlined } from '@ant-design/icons'
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield, Users, Airplay, Columns, Settings, Bold, Bell, Aperture, Home } from 'react-feather'

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
    id: 'roles-permissions',
    title: 'Roles & Permissions',
    icon: <Users size={20} />,
    children: [
      {
        id: 'permissions',
        title: 'QL Tài khoản',
        icon: <Circle size={12} />,
        navLink: '/apps/manage/accounts',
        action: 'read',
        resource: 'TAI_KHOAN'
      },
      {
        id: 'role',
        title: 'Vai trò, phân quyền',
        icon: <Circle size={12} />,
        navLink: '/apps/manage/roles',
        action: 'read',
        resource: 'PHAN_QUYEN_VAI_TRO'
      },
      {
        id: 'permissions',
        title: 'QL các quyền cơ bản',
        icon: <Circle size={12} />,
        navLink: '/apps/manage/permissions',
        action: 'read',
        resource: 'CHUC_NANG'
      },
      // {
      //   id: 'groupuser',
      //   title: 'Quản lý nhóm người dùng',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/manage/groupusers',
      //   action: 'read',
      //   resource: 'NHOM_NGUOI_DUNG'
      // },
      // {
      //   id: 'users',
      //   title: 'Quản lý danh sách người dùng',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/manage/users1',
      //   action: 'read',
      //   resource: 'NGUOI_DUNG'
      // },
    ],
    role: 0
  },

  // {
  //   id: 'permissions',
  //   title: 'Phân quyền',
  //   icon: <Columns size={20} />,
  //   children: [
  //     {
  //       id: 'permissions',
  //       title: 'Quản lý quyền chức năng cơ bản',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/manage/permissions',
  //       action: 'read',
  //       resource: 'CHUC_NANG'
  //     },
  //     // {
  //     //   id: 'permissionGroups',
  //     //   title: 'Quản lý nhóm quyền',
  //     //   icon: <Circle size={12} />,
  //     //   navLink: '/apps/manage/permissionGroups',
  //     //   action: 'read',
  //     //   resource: 'NHOM_QUYEN'
  //     // },
  //     // {
  //     //   id: 'permissions',
  //     //   title: 'Quản lý quyền chức năng cơ bản',
  //     //   icon: <Circle size={12} />,
  //     //   navLink: '/apps/manage/permissions',
  //     //   action: 'read',
  //     //   resource: 'CHUC_NANG'
  //     // },
  //     {
  //       id: 'role',
  //       title: 'Quản lý vai trò người dùng và phân quyền',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/manage/roles',
  //       action: 'read',
  //       resource: 'PHAN_QUYEN_VAI_TRO'
  //     },
  //     // {
  //     //   id: 'permiss',
  //     //   title: 'Phân quyền người dùng',
  //     //   icon: <Circle size={12} />,
  //     //   navLink: '/apps/manage/userRoles',
  //     //   action: 'read',
  //     //   resource: 'PHAN_QUYEN_NGUOI_DUNG'
  //     // },
  //   ],
  //   role: 0
  // },
  {
    id: 'categories1',
    title: 'Danh mục chung',
    icon: <MenuOutlined size={20} />,
    children: [
      {
        id: 'position',
        title: 'Chức vụ',
        icon: <Circle size={12} />,
        navLink: '/apps/categories/officeTypes',
        action: 'read',
        resource: 'DM_CHUC_VU'
      },
      {
        id: 'position1',
        title: 'Chức danh',
        icon: <Circle size={12} />,
        navLink: '/apps/categories/professionalTitles',
        action: 'read',
        resource: 'DM_CHUC_DANH'
      },
      {
        id: 'organizationTypes',
        title: 'Loại đơn vị',
        icon: <Circle size={12} />,
        navLink: '/apps/categories/organizationTypes',
        action: 'read',
        resource: 'DM_LOAI_DON_VI'
      },
      // {
      //   id: 'organizationLevels',
      //   title: 'Cấp đơn vị',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/categories/organizationLevels',
      //   action: 'read',
      //   resource: 'DM_CAP_DON_VI'
      // },
      {
        id: 'position6',
        title: 'Đơn vị',
        icon: <Circle size={12} />,
        navLink: '/apps/categories/organizations',
        action: 'read',
        resource: 'DM_DON_VI'
      },

      // {
      //   id: 'position9',
      //   title: 'Hình thức khen thưởng',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/categories/rewardTypes',
      //   action: 'read',
      //   resource: 'DM_HT_KHEN_THUONG'
      // },
    ],
    role: 0
  },
  {
    id: 'configuration',
    title: 'Cấu hình hệ thống',
    icon: <MenuOutlined size={20} />,
    children: [
      {
        id: 'provinece',
        title: 'Cấu hình định dạng tệp tin',
        icon: <Circle size={12} />,
        navLink: '/cauhinhhethong/file',
        action: 'read',
        resource: 'FILE'
      },
      {
        id: 'thamso',
        title: 'Cấu hình tham số cập nhật, báo cáo dữ liệu',
        icon: <Circle size={12} />,
        navLink: '/cauhinhhethong/thamso',
        action: 'read',
        resource: 'THAMSOCAPNHAT'
      }
    ],
    role: 0
  },
  {
    id: 'categories2',
    title: 'Danh mục HS cán bộ',
    icon: <FileOutlined size={20} />,
    children: [
      {
        id: 'provinece',
        title: 'Trình độ lý luận chính trị',
        icon: <Circle size={12} />,
        navLink: '/apps/categories/politicalTheoryDegrees',
        action: 'read',
        resource: 'DM_TD_LL_CT'
      },
      {
        id: 'workingstatus',
        title: 'Trạng thái làm việc',
        icon: <Circle size={12} />,
        navLink: '/apps/categories/workingStatus',
        action: 'read',
        resource: 'DM_TT_LAM_VIEC'
      },
      {
        id: 'look',
        title: 'Trình độ quản lý nhà nước',
        icon: <Circle size={12} />,
        navLink: '/apps/categories/stateManagementDegrees',
        action: 'read',
        resource: 'DM_TD_QL_NN'
      },


    ],
    role: 0
  },
  {
    id: 'categories4',
    title: 'Danh mục HS học viên',
    icon: <BookOutlined size={20} />,
    children: [
      {
        id: 'organizationTrain',
        title: 'Đơn vị cử đi đào tạo',
        icon: <Circle size={12} />,
        navLink: '/apps/categories/organizationTrain',
        action: 'read',
        resource: 'DM_DV_CU_DT'
      },
      {
        id: 'studentstatus',
        title: 'Trạng thái học viên',
        icon: <Circle size={12} />,
        navLink: '/apps/categories/studentStatus',
        action: 'read',
        resource: 'DM_TT_HOC_VIEN'
      }
    ],
    role: 0
  },
  {
    id: 'categories3',
    title: 'Danh mục đào tạo',
    icon: <ScheduleOutlined size={20} />,
    children: [
      {
        id: 'provinece',
        title: 'Chức vụ đào tạo',
        icon: <Circle size={12} />,
        navLink: '/quanlydaotao/doituongdaotao',
        action: 'read',
        resource: 'DM_TRINH_DO_DT'
      },
      {
        id: 'look2',
        title: 'Hình thức tổ chức lớp học',
        icon: <Circle size={12} />,
        navLink: '/quanlydaotao/hinhthuctochuclop',
        action: 'read',
        resource: 'DM_HT_TO_CHUC_LOP'
      },
      {
        id: 'look3',
        title: 'Phân tiết',
        icon: <Circle size={12} />,
        navLink: '/quanlydaotao/phantiet',
        action: 'read',
        resource: 'DM_PHAN_TIET'
      },
      {
        id: 'look4',
        title: 'Ngành',
        icon: <Circle size={12} />,
        navLink: '/danhmucdaotao/danhmucnganh',
        action: 'read',
        resource: 'DM_NGANH'
      },
      {
        id: 'look5',
        title: 'Chuyên ngành',
        icon: <Circle size={12} />,
        navLink: '/danhmucdaotao/danhmucchuyennganh',
        action: 'read',
        resource: 'DM_CHUYEN_NGANH'
      },

      {
        id: 'look6',
        title: 'Đánh giá kết quả học tập',
        icon: <Circle size={12} />,
        navLink: '/quanlydaotao/danhgiakqhoctap',
        action: 'read',
        resource: 'DM_DG_HOC_TAP'
      },
      {
        id: 'look7',
        title: 'Hình thức giảng dạy',
        icon: <Circle size={12} />,
        navLink: '/quanlydaotao/hinhthucgiangday',
        action: 'read',
        resource: 'DM_HT_GIANG_DAY'
      },

      {
        id: 'look7',
        title: 'Hình thức đào tạo',
        icon: <Circle size={12} />,
        navLink: '/quanlydaotao/hinhthucdaotao',
        action: 'read',
        resource: 'DM_HT_DAO_TAO'
      },
      {
        id: 'look8',
        title: 'Giờ chuẩn',
        icon: <Circle size={12} />,
        navLink: '/quanlydaotao/giochuan',
        action: 'read',
        resource: 'DM_GIO_CHUAN'
      },
      {
        id: 'dinhmucgiamtru',
        title: 'Định mức giảm trừ',
        icon: <Circle size={12} />,
        navLink: '/quanlydaotao/dinhmucgiamtru',
        action: 'read',
        resource: 'DM_GIAM_TRU'
      },
      {
        id: 'chucvukiemnhiem',
        title: 'Chức vụ kiêm nhiệm',
        icon: <Circle size={12} />,
        navLink: '/quanlydaotao/chucvukiemnhiem',
        action: 'read',
        resource: 'DM_CHUC_VU_KIEM_NHIEM'
      },
      {
        id: 'look11',
        title: 'Khối kiến thức',
        icon: <Circle size={12} />,
        navLink: '/apps/categories/knowledgeBlocks',
        action: 'read',
        resource: 'DM_KHOI_KIEN_THUC'
      },
      {
        id: 'reason',
        title: 'Lý do vắng',
        icon: <Circle size={12} />,
        navLink: '/quanlydaotao/lydovang',
        action: 'read',
        resource: 'DM_LY_DO_VANG'
      },
      {
        id: 'danhmucnoidungtai',
        title: 'Danh mục tải',
        icon: <Circle size={12} />,
        navLink: '/quanlydaotao/danhmuctai',
        action: 'read',
        resource: 'DM_TAI'
      },
      {
        id: 'hinhthucthi',
        title: 'Hình Thức Thi',
        icon: <Circle size={20} />,
        navLink: '/quanlydaotao/hinhthucthi',
        action: 'read',
        resource: 'HINH_THUC_THI',
        role: 1
      },
    ],
    role: 0
  },

  {
    id: 'categories5',
    title: 'Danh mục NCKH',
    icon: <UnorderedListOutlined size={20} />,
    children: [
      {
        id: 'provinece',
        title: 'Loại hội thảo khoa học',
        icon: <Circle size={12} />,
        navLink: '/danhmucnckh/loaihoithaokhoahoc',
        action: 'read',
        resource: 'DM_LOAI_HOI_THAO'
      },
      {
        id: 'type',
        title: 'Loại đề tài khoa học',
        icon: <Circle size={12} />,
        navLink: '/danhmucnckh/loaidetai',
        action: 'read',
        resource: 'DM_LOAI_DE_TAI'
      },
      {
        id: 'hthuc',
        title: 'Hình thức đề tài',
        icon: <Circle size={12} />,
        navLink: '/danhmucnckh/hinhthucdetai',
        action: 'read',
        resource: 'DM_HINH_THUC_DT'
      },
      {
        id: "TopicField",
        title: "Lĩnh vực nghiên cứu",
        icon: <Circle size={12} />,
        navLink: "/quanlydanhmuc/linhvucnghiencuu",
        resource: "DM_LINH_VUC_NGHIEN_CUU"

      },
      {
        id: "TopicLevel",
        title: "Cấp quản lý",
        icon: <Circle size={12} />,
        navLink: "/quanlydanhmuc/danhmuccapdo",
        resource: "DM_CAP_QUAN_LY"
      },
      {
        id: 'kq',
        title: 'Kết quả phân loại',
        icon: <Circle size={12} />,
        navLink: '/danhmucnckh/ketquaphanloai',
        action: 'read',
        resource: 'KET_QUA_PHAN_LOAI'
      },
      {
        id: 'kt',
        title: 'Hình thức khen thưởng',
        icon: <Circle size={12} />,
        navLink: '/danhmucnckh/hinhthuckhenthuong',
        action: 'read',
        resource: 'HINH_THUC_KHEN_THUONG_KH'
      }, {
        id: 'lh',
        title: 'Loại hình HD đề tài NC học viên',
        icon: <Circle size={12} />,
        navLink: '/danhmucnckh/loaihinhdetai',
        action: 'read',
        resource: 'LOAI_HINH_HD_DE_TAI'
      },
      {
        id: 'pl',
        title: 'Phân loại kết quả HD NCKH',
        icon: <Circle size={12} />,
        navLink: '/danhmucnckh/ketquahdnckh',
        action: 'read',
        resource: 'PHAN_LOAI_KQNCKH'
      },
      {
        id: 'chucdanh',
        title: 'Chức danh sĩ quan CM - KT - NV',
        icon: <Circle size={12} />,
        navLink: '/danhmucnckh/chucdanhsiquan',
        action: 'read',
        resource: 'CHUC_DANH_SI_QUAN'
      },
      // {
      {
        id: "MemberRoleType",
        title: "Vai trò thành viên",
        icon: <Circle size={12} />,
        navLink: "/quanlydanhmuc/vaitrothanhvien",
      },
      {
        id: "StatusTopicType",
        title: "Danh mục trạng thái",
        icon: <Circle size={12} />,
        navLink: "/quanlydanhmuc/danhsachtrangthai",
      },
      {
        id: "ProductType",
        title: "Danh mục loại sản phẩm",
        icon: <Circle size={12} />,
        navLink: "/quanlydanhmuc/danhmucloaisanpham",
      },
      {
        id: "OrganizationRoleType",
        title: "Danh mục vai trò tổ chức",
        icon: <Circle size={12} />,
        navLink: "/quanlydanhmuc/danhmucvaitrotochuc",
      },
      // {
      //   id: 'linhvuc',
      //   title: 'Lĩnh vực đề tài',
      //   icon: <Circle size={12} />,
      //   navLink: '/danhmucnckh/linhvucdetai',
      //   action: 'read',
      //   resource: 'DM_LINH_VUC_DT'
      // },
      // {
      //   id: 'capql',
      //   title: 'Cấp quản lý',
      //   icon: <Circle size={12} />,
      //   navLink: '/danhmucnckh/capquanly',
      //   action: 'read',
      //   resource: 'DM_CAP_QUAN_LY'
      // },

    ],
    role: 0
  },
  {
    id: 'position9',
    title: 'QL loại đối tượng',
    icon: <Aperture size={12} />,
    navLink: '/apps/categories/classTypes',
    action: 'read',
    resource: 'DM_LOAI_DOI_TUONG',
    role: 0
  },
  // {
  //   id: 'categories6',
  //   title: 'Danh mục dữ liệu văn bản',
  //   icon: <FileOutlined size={20} />,
  //   children: [
  //     {
  //       id: 'provinece',
  //       title: 'Loại văn bản',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/categories6/profile1'
  //     },
  //     {
  //       id: 'vban',
  //       title: 'Lĩnh vực văn bản',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/categories6/profile2'
  //     },
  //     {
  //       id: 'coquan',
  //       title: 'Cơ quan ban hành',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/categories6/profile3'
  //     }
  //   ],
  //   role: 0
  // },
  {
    id: 'categories7',
    title: 'Danh mục Tài sản',
    icon: <MoneyCollectOutlined size={20} />,
    children: [
      {
        id: 'provinece',
        title: 'DS Tài sản',
        icon: <Circle size={12} />,
        navLink: '/danhmuctaisan/taisan',
        action: 'read',
        resource: 'TAI_SAN'
      },
      {
        id: 'loaits',
        title: 'Loại tài sản',
        icon: <Circle size={12} />,
        navLink: '/danhmuctaisan/loaitaisan',
        action: 'read',
        resource: 'DM_LOAI_TAI_SAN'
      },
      {
        id: 'phancap',
        title: 'Phân cấp CL tài sản',
        icon: <Circle size={12} />,
        navLink: '/danhmuctaisan/chatluongtaisan',
        action: 'read',
        resource: 'DM_PC_CL_TS'
      },
      {
        id: 'dmkho',
        title: 'Danh mục kho',
        icon: <Circle size={12} />,
        navLink: '/danhmuctaisan/danhmuckho',
        resource: 'DM_KHO'
      },
      // {
      //   id: 'dmchatluong',
      //   title: 'Danh mục chất lượng',
      //   icon: <Circle size={12} />,
      //   navLink: '/danhmuctaisan/danhmucchatluong',
      // },
      {
        id: 'dmnhomnganhthietbi',
        title: 'DM nhóm thiết bị',
        icon: <Circle size={12} />,
        navLink: '/danhmuctaisan/danhmucnhomnganhthietbi',
        resource: 'DM_NHOM_THIET_BI'
      },
      {
        id: 'dmloaithietbi',
        title: 'DM loại thiết bị',
        icon: <Circle size={12} />,
        navLink: '/danhmuctaisan/danhmucloaithietbi',
        resource: 'DM_LOAI_THIET_BI'
      },
      {
        id: 'dmlydo',
        title: 'Lý do nhập/xuất',
        icon: <Circle size={12} />,
        navLink: '/danhmuctaisan/danhmuclydo',
        resource: 'DM_LY_DO'
      },
    ],
    role: 0
  },
  {
    id: 'conceptualplan',
    title: 'Danh mục Tưởng định',
    icon: <FileOutlined size={20} />,
    children: [
      {
        id: 'ConceptualPlanType',
        title: 'Loại KHTĐ',
        icon: <Circle size={12} />,
        navLink: '/conceptualplan/conceptuaplantype',
        action: 'read',
        resource: 'DM_LOAI_TUONG_DINH'
      },
      {
        id: 'ConceptualPlanForm',
        title: 'Hình thức KHTĐ',
        icon: <Circle size={12} />,
        navLink: '/conceptualplan/conceptuaplanform',
        action: 'read',
        resource: 'DM_HINH_THUC_TUONG_DINH'
      },
      {
        id: 'EditConceptualType',
        title: 'Loại xây dựng, sửa chữa',
        icon: <Circle size={12} />,
        navLink: '/conceptualplan/editconceptuaplantype',
        action: 'read',
        resource: 'LOAI_XD_TUONG_DINH'
      },
      {
        id: 'ConceptualPlanArea',
        title: 'Khu vực KHTĐ',
        icon: <Circle size={12} />,
        navLink: '/conceptualplan/connceptualplanarea',
        action: 'read',
        resource: 'KHU_VUC_TUONG_DINH'
      },
    ],
    role: 0
  },

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
