import {
    Table,
    Input,
    Card,
    Tag,
    Popconfirm,
    Switch,
    Collapse,
} from "antd"
import React, { useState, Fragment, useEffect, useRef, useContext } from "react"
import {
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    Button,
    Row,
    Col,
    FormFeedback,
    UncontrolledTooltip,
    CardBody,
    CardTitle,
} from "reactstrap"
import { Link } from "react-router-dom"
import { Plus, X } from "react-feather"
import {
    AppstoreAddOutlined,
    DeleteOutlined,
    EditOutlined,
    LockOutlined,
} from "@ant-design/icons"
import { AbilityContext } from '@src/utility/context/Can'
// import style from "../../../../assets/scss/index.module.scss"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import AvatarGroup from "@components/avatar-group"
import Select from "react-select"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import classnames from "classnames"
import { toDateString, toDateTimeString } from "../../../utility/Utils"
// import {
//     getRole,
//     createRole,
//     updateRole,
//     deleteRole,
//     listAllRoleUserCount,
// } from "../../../../api/roles"
// import {
//     listAllUser,
//     getListUserByRole
// } from "../../../../api/users"
// import { getGroupPermission } from "../../../../api/permissionGroups"
// import {
//     getPerByRoleId,
//     getAllRolePer,
//     updateRoleManyPer,
// } from "../../../../api/rolePermissions"
// import { getPermission } from "../../../../api/permissions"
// import ListPermission from './detail'
import { deleteCheckingDocument, getCheckingDocument } from "../../../api/checking_document"
import ContentModal from "./modal/ContentModal"

const CheckingResult = () => {
    const ability = useContext(AbilityContext)
    const selected = useRef()
    const MySwal = withReactContent(Swal)
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const [totalUser, setTotalUser] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerpage] = useState(100)
    const [search, setSearch] = useState("")
    const [isAdd, setIsAdd] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [isPer, setIsPer] = useState(false)
    const [isView, setIsView] = useState(false)
    const [listPerGroup, setListPerGroup] = useState([])
    const [permissionView, setPermissionView] = useState([])
    const [listAllPer, setListAllPer] = useState([])
    const [listPermissionSelected, setListPermissionSelected] = useState([])
    const [checkingDocumentSelected, setCheckingDocumentSelected] = useState()
    const [listAllRole, setListAllRole] = useState([])

    const getData = (page, limit, search) => {
        getCheckingDocument({
            params: {
                page,
                limit,
                ...(search && search !== "" && { search }),
            },
        })
            .then((res) => {
                const result = res?.data?.map(((item, index) => {
                    return { ...item, _id: item.id, key: index }
                }))
                setData(result)
                setCount(res?.pagination?.totalRecords)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // const getInfo = () => {
    //     getAllRolePer({
    //         params: {
    //             page: 1,
    //             limit: 5000,
    //         },
    //     })
    //         .then((res) => {
    //             const { count, data } = res[0]
    //             setListPermissionSelected(data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    //     getGroupPermission({
    //         params: {
    //             page: 1,
    //             limit: 500,
    //         },
    //     })
    //         .then((res) => {
    //             const { count, data } = res[0]
    //             setListPerGroup(data ?? [])
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    //     getPermission({
    //         params: {
    //             page: 1,
    //             limit: 5000,
    //         },
    //     })
    //         .then((res) => {
    //             const { count, data } = res[0]
    //             setListAllPer(data ?? [])
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }
    useEffect(() => {
        getData(currentPage, rowsPerPage, search)
    }, [currentPage, rowsPerPage, search])

    const handleModal = () => {
        setIsAdd(false)
        setIsEdit(false)
        setIsPer(false)
        setIsView(false)
        setCheckingDocumentSelected(null)
    }
    const CloseBtn = (
        <X className="cursor-pointer" size={15} onClick={handleModal} />
    )
    const handleEdit = (record) => {
        setCheckingDocumentSelected(record)
        setIsEdit(true)
    }
    const handleViewUser = (role) => {
        setRoleSelected(role)
        setIsView(true)
    }
    const handleDelete = (key) => {
        deleteCheckingDocument(key)
            .then((res) => {
                MySwal.fire({
                    title: "Xóa kiểm tra tài liệu thành công",
                    icon: "success",
                    customClass: {
                        confirmButton: "btn btn-success",
                    },
                }).then((result) => {
                    if (currentPage === 1) {
                        getData(1, rowsPerPage)
                    } else {
                        setCurrentPage(1)
                    }
                    handleModal()
                })
            })
            .catch((error) => {
                MySwal.fire({
                    title: "Xóa thất bại",
                    icon: "error",
                    customClass: {
                        confirmButton: "btn btn-danger",
                    },
                })
                console.log(error)
            })
    }

    // const _handleSelectAll = (e) => {
    //     let listPermitFormat = []
    //     if (e.target.checked) {
    //         rolesArr.map((item) => {
    //             listPermitFormat = listPermitFormat.concat(item.actions)
    //         })
    //     }
    //     setListPermissionSelected(listPermitFormat)
    // }

    // const _handleCheckRoleAction = (e, act, permission, role) => {
    //     setListPermissionSelected((pre) => {
    //         const isChecked = listPermissionSelected.find(
    //             (per) => per.permissionID === permission._id &&
    //                 per.roleID === role?._id &&
    //                 per.actionContent === act.value
    //         )
    //         if (isChecked) {
    //             if (act.value === 'read') {
    //                 return listPermissionSelected.filter(
    //                     (per) => !(per.permissionID === permission._id &&
    //                         per.roleID === role?._id)
    //                 )
    //             }
    //             return listPermissionSelected.filter(
    //                 (per) => !(per.permissionID === permission._id &&
    //                     per.roleID === role?._id &&
    //                     per.actionContent === act.value)
    //             )
    //         } else {
    //             if (act.value !== 'read') {
    //                 const isChecked_ = listPermissionSelected.find(
    //                     (per) => per.permissionID === permission._id &&
    //                         per.roleID === role?._id &&
    //                         per.actionContent === 'read'
    //                 )
    //                 if (isChecked_) {
    //                     return [
    //                         ...pre,
    //                         {
    //                             permissionID: permission._id,
    //                             roleID: role._id,
    //                             actionContent: act.value,
    //                             isActive: 1,
    //                         }
    //                     ]
    //                 } else {
    //                     return [
    //                         ...pre,
    //                         {
    //                             permissionID: permission._id,
    //                             roleID: role._id,
    //                             actionContent: 'read',
    //                             isActive: 1,
    //                         },
    //                         {
    //                             permissionID: permission._id,
    //                             roleID: role._id,
    //                             actionContent: act.value,
    //                             isActive: 1,
    //                         },
    //                     ]
    //                 }
    //             }
    //             return [
    //                 ...pre,
    //                 {
    //                     permissionID: permission._id,
    //                     roleID: role._id,
    //                     actionContent: act.value,
    //                     isActive: 1,
    //                 },
    //             ]
    //         }
    //     })
    // }

    // const _renderRoleItem = (act, ind, permission, role) => {
    //     const permissionData = listPermissionSelected?.find(
    //         (lstPer) => lstPer.permissionID === permission._id &&
    //             lstPer.actionContent === act.value &&
    //             lstPer.roleID === role?._id
    //     )
    //     return (
    //         <div className="form-check me-2" key={ind} style={{ minWidth: "6rem" }}>
    //             <Input
    //                 type="checkbox"
    //                 style={{ cursor: "pointer", marginRight: "1rem" }}
    //                 className="action-cb"
    //                 id={`${permission._id}_${act.id}`}
    //                 checked={permissionData || false}
    //                 onChange={(e) => _handleCheckRoleAction(e, act, permission, role)}
    //             />
    //             <Label
    //                 className="form-check-label"
    //                 style={{ cursor: "pointer", fontSize: "0.875rem" }}
    //                 for={`${permission._id}_${act.id}`}
    //             >
    //                 {act.label}
    //             </Label>
    //         </div>
    //     )
    // }
    // const handlePer = (role) => {
    //     setRoleSelected(role)
    //     setIsPer(true)
    // }
    const columns = [
        {
            title: "STT",
            dataIndex: "stt",
            width: 30,
            align: "center",
            render: (text, record, index) => (
                <span>{((currentPage - 1) * rowsPerPage) + index + 1}</span>
            ),
        },
        {
            title: "Tên tài liệu",
            dataIndex: "title",
            width: 500,
            align: "left",
            render: (text, record, index) => (
                <span style={{ whiteSpace: 'break-spaces' }}>{record.title}</span>
            ),
        },
        {
            title: "Tác giả",
            dataIndex: "author",
            width: 180,
            align: "left",
            render: (text, record, index) => (
                <span style={{ whiteSpace: 'break-spaces' }}>{record.author}</span>
            ),
        },
        {
            title: "Lĩnh vực",
            dataIndex: "course",
            width: 150,
            align: "left",
            render: (text, record, index) => (
                <span style={{ whiteSpace: 'break-spaces' }}>{record?.course?.name}</span>
            ),
        },
        {
            title: "Loại tài liệu",
            dataIndex: "createdAt",
            width: 120,
            align: "center",
            render: (text, record, index) => (
                <span style={{ whiteSpace: 'break-spaces' }}>{toDateTimeString(record.createdAt)}</span>
            ),
        },
        {
            title: "Độ trùng lặp (%)",
            width: 120,
            align: "center",
            render: (text, record, index) => (
                <span style={{ whiteSpace: 'break-spaces' }}>{record?.checkingDocumentVersion[0]?.checkingResult?.find(item => item.typeCheckingId === 2)?.similarityTotal}</span>
            ),
        },
        {
            title: "Thao tác",
            width: 100,
            align: "center",
            render: (record) => (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {ability.can('update', 'PHAN_QUYEN_VAI_TRO') &&
                        <>
                            <EditOutlined
                                id={`tooltip_edit_${record._id}`}
                                style={{ color: "#09A863", cursor: "pointer", marginRight: '1rem' }}
                                onClick={(e) => handleEdit(record)}
                            />
                            <UncontrolledTooltip placement="top" target={`tooltip_edit_${record._id}`}
                            >
                                Chỉnh sửa
                            </UncontrolledTooltip>
                        </>}
                    {/* { ability.can('update', 'PHAN_QUYEN_VAI_TRO') && 
                              <>
              <AppstoreAddOutlined
                id={`tooltip_per_${record._id}`}
                style={{ color: "#09A863", cursor: "pointer" }}
                onClick={(e) => handlePer(record)}
              />
              <UncontrolledTooltip placement="top" target={`tooltip_per_${record._id}`}>
                Phân quyền
              </UncontrolledTooltip></>} */}
                    {ability.can('delete', 'PHAN_QUYEN_VAI_TRO') &&
                        <Popconfirm
                            title="Bạn chắc chắn xóa?"
                            onConfirm={() => handleDelete(record._id)}
                            cancelText="Hủy"
                            okText="Đồng ý"
                        >
                            <DeleteOutlined
                                style={{ color: "red", cursor: "pointer" }}
                                id={`tooltip_delete_${record._id}`}
                            />
                            <UncontrolledTooltip placement="top" target={`tooltip_delete_${record._id}`}>
                                Xóa
                            </UncontrolledTooltip>
                        </Popconfirm>}
                </div>
            ),
        },
    ]

    // const handleUpDateManyPer = () => {
    //     const listSelected = listPermissionSelected.filter(x => x.roleID === roleSelected._id)
    //     const arr = listSelected.map((per, index) => {
    //         if (per.roleID === roleSelected._id) {
    //             return {
    //                 permissionID: per.permissionID,
    //                 actionContent: per.actionContent,
    //             }
    //         }
    //     })
    //     const dataSubmit = {
    //         roleID: roleSelected?._id,
    //         isActive: 1,
    //         arrContent: arr,
    //         actionTime: "2023-09-13T04:08:14.369Z",
    //     }
    //     updateRoleManyPer(dataSubmit)
    //         .then((res) => {
    //             MySwal.fire({
    //                 title: "Chỉnh sửa thành công",

    //                 icon: "success",
    //                 customClass: {
    //                     confirmButton: "btn btn-success",
    //                 },
    //             }).then((result) => {
    //                 if (currentPage === 1) {
    //                     getData(1, rowsPerPage)
    //                 } else {
    //                     setCurrentPage(1)
    //                 }
    //                 handleModal()
    //             })
    //         })
    //         .catch((err) => {
    //             MySwal.fire({
    //                 title: "Chỉnh sửa thất bại",
    //                 icon: "error",
    //                 customClass: {
    //                     confirmButton: "btn btn-danger",
    //                 },
    //             })
    //         })
    // }
    // const showTotal = (count) => `Tổng số: ${count}`

    return (
        <Fragment>
            <Card
                title="Kết quả kiểm tra tài liệu"
                style={{ backgroundColor: "white", width: "100%", height: "100%" }}
            >
                <Col md="12" style={{ display: "flex", justifyContent: "flex-end" }}>
                    {ability.can('create', 'PHAN_QUYEN_VAI_TRO') &&
                        <Link to="/tams/checking-document">
                            <Button
                                // onClick={(e) => setIsAdd(true)}
                                color="primary"
                                className="addBtn"
                                style={{
                                    width: '100px',
                                }}
                                outline
                            >
                                Quay lại
                            </Button>
                        </Link>
                    }
                </Col>
                <Row>
                    <Col md="12" style={{ textAlign: 'center' }}>
                        <h5>Kết quả trùng lặp so với CSDL mẫu: <span style={{ color: 'red' }}>85%</span></h5>
                    </Col>
                    <Col md="12">
                        <h6>1. Danh sách các tài liệu trùng lặp cao</h6>
                        <Table
                            columns={columns}
                            dataSource={data}
                            bordered
                            expandable={{
                                expandedRowRender: (record) => <ContentModal
                                    checkingDocumentSelected={record} />,
                                rowExpandable: (record) => record.name !== 'Not Expandable',
                                // expandRowByClick: true
                            }}
                            pagination={{
                                defaultPageSize: 10,
                                showSizeChanger: true,
                                pageSizeOptions: ["10", "20", "30"],
                                total: { count },
                                locale: { items_per_page: "/ trang" },
                                showSizeChanger: true,
                                showTotal: (total, range) => <span>Tổng số: {total}</span>,
                            }}
                        />
                    </Col>
                    <Col md="12">
                        <h6>2. Kết quả trùng lặp với các tài liệu cùng đợt kiểm tra</h6>
                        <Table
                            columns={columns}
                            dataSource={data}
                            bordered
                            expandable={{
                                expandedRowRender: (record) => <ContentModal
                                    checkingDocumentSelected={record} />,
                                rowExpandable: (record) => record.name !== 'Not Expandable',
                                // expandRowByClick: true
                            }}
                            pagination={{
                                defaultPageSize: 10,
                                showSizeChanger: true,
                                pageSizeOptions: ["10", "20", "30"],
                                total: { count },
                                locale: { items_per_page: "/ trang" },
                                showSizeChanger: true,
                                showTotal: (total, range) => <span>Tổng số: {total}</span>,
                            }}
                        />
                    </Col>
                </Row>
            </Card>
        </Fragment>
    )
}
export default CheckingResult
