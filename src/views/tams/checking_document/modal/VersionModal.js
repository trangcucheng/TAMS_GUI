import {
    Table,
    Input,
    Card,
    CardTitle,
    Tag,
    Popconfirm,
    Switch,
    Collapse,
    Checkbox,
    Spin,
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
} from "reactstrap"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Plus, X } from "react-feather"
import {
    AppstoreAddOutlined,
    DeleteOutlined,
    EditOutlined,
    LockOutlined,
    AppstoreOutlined

} from "@ant-design/icons"
import { AbilityContext } from "@src/utility/context/Can"
//   import style from "../../../../../assets/scss/index.module.scss"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
//   import { toDateString, integerToRoman } from "../../../../../utility/Utils"
import AvatarGroup from "@components/avatar-group"
import Select from "react-select"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import classnames from "classnames"
import AddNewCheckingDocumentVersion from "./AddNewVersionModal"
import { deleteCheckingDocumentVersion, getCheckingDocumentVersion } from "../../../../api/checking_document_version"
import { detailCheckingDocument } from "../../../../api/checking_document"
import EditCheckingDocumentVersion from "./EditVersionModal"

const VersionModal = ({ checkingDocumentSelected, }) => {
    const [loadingData, setLoadingData] = useState(false)
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)
    const [listPerGroup, setListPerGroup] = useState([])
    const [permissionView, setPermissionView] = useState([])
    const [listAllPer, setListAllPer] = useState([])
    const [data, setData] = useState([])
    const [listSubmit, setListSubmit] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerpage] = useState(10)
    const [count, setCount] = useState()
    const [search, setSearch] = useState()
    const [isAdd, setIsAdd] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [checkingDocumentVersionSelected, setCheckingDocumentVersionSelected] = useState()

    const getData = () => {
        setLoadingData(true)
        detailCheckingDocument(checkingDocumentSelected?.id)
            .then((res) => {
                const result = res?.data?.checkingDocumentVersion
                setData(result)
                setCount(result?.length)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
                setLoadingData(false)
            })
    }
    const handleModal = () => {
        setIsAdd(false)
        setIsEdit(false)
        setCheckingDocumentVersionSelected(null)
    }

    const handleEdit = (record) => {
        setCheckingDocumentVersionSelected(record)
        setIsEdit(true)
    }

    const handleResult = (record) => {
        navigate(`/tams/checking-result/${record?.id}`, { state: record })
    }

    // const getInfo = () => {
    //     getGroupPermission({
    //         params: {
    //             page: 1,
    //             limit: 500,
    //         },
    //     })
    //         .then((res) => {
    //             const { count, data } = res[0]
    //             const listData = data.map((item, index) => ({ ...item, key: index }))
    //             setListPerGroup(listData ?? [])
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
        // getInfo()
        getData()
    }, [currentPage, rowsPerPage, search, checkingDocumentSelected])

    // const _handleCheckRoleAction = (e, act, permission, role) => {
    //     setListSubmit((pre) => {
    //         const isChecked = listSubmit.find(
    //             (per) => per.permissionID === permission._id && per.roleID === role?._id && per.actionContent === act)
    //         if (isChecked) {
    //             if (act === "read") {
    //                 return listSubmit.filter(
    //                     (per) => !(per.permissionID === permission._id && per.roleID === role?._id)
    //                 )
    //             }
    //             return listSubmit.filter(
    //                 (per) => !(
    //                     per.permissionID === permission._id &&
    //                     per.roleID === role?._id &&
    //                     per.actionContent === act
    //                 )
    //             )
    //         } else {
    //             if (act !== "read") {
    //                 const isChecked_ = listSubmit.find(
    //                     (per) => per.permissionID === permission._id &&
    //                         per.roleID === role?._id &&
    //                         per.actionContent === act
    //                 )
    //                 if (isChecked_) {
    //                     return listSubmit.filter(
    //                         (per) => !(per.permissionID === permission._id && per.roleID === role?._id && per.actionContent === act))
    //                 } else {
    //                     const isRead = listSubmit.find(
    //                         (per) => per.permissionID === permission._id &&
    //                             per.roleID === role?._id &&
    //                             per.actionContent === 'read'
    //                     )
    //                     if (isRead) {
    //                         return [
    //                             ...pre,
    //                             {
    //                                 permissionID: permission._id,
    //                                 roleID: role._id,
    //                                 actionContent: act,
    //                                 isActive: 1,
    //                             },
    //                         ]
    //                     } else {
    //                         return [
    //                             ...pre,
    //                             {
    //                                 permissionID: permission._id,
    //                                 roleID: role._id,
    //                                 actionContent: "read",
    //                                 isActive: 1,
    //                             },
    //                             {
    //                                 permissionID: permission._id,
    //                                 roleID: role._id,
    //                                 actionContent: act,
    //                                 isActive: 1,
    //                             },
    //                         ]
    //                     }
    //                 }
    //             }
    //             return [
    //                 ...pre,
    //                 {
    //                     permissionID: permission._id,
    //                     roleID: role._id,
    //                     actionContent: act,
    //                     isActive: 1,
    //                 },
    //             ]
    //         }
    //     })
    // }
    // const _renderRoleItem = (act, permission, role) => {
    //     // const permissionData = listPermissionSelected?.find(
    //     //   (lstPer) => lstPer.permissionID === permission._id &&
    //     //     lstPer.actionContent === act &&
    //     //     lstPer.roleID === role?._id
    //     // )
    //     // const isCheck = permission.actionContents?.find(x => x === act)
    //     const isCheck = listSubmit.find(x => x.permissionID === permission._id && x.actionContent === act)
    //     return (
    //         <Checkbox
    //             type="checkbox"
    //             style={{ cursor: "pointer" }}
    //             className="action-cb"
    //             id={`${permission._id}_${act}`}
    //             checked={isCheck || false}
    //             onChange={(e) => _handleCheckRoleAction(e, act, permission, role)}
    //         />
    //     )
    // }
    const handleDelete = (record) => {
        deleteCheckingDocumentVersion(record?.id)
            .then((res) => {
                MySwal.fire({
                    title: "Xóa thành công",

                    icon: "success",
                    customClass: {
                        confirmButton: "btn btn-success",
                    },
                }).then((result) => {
                    getData()
                })
            })
            .catch((err) => {
                console.log(err)
                MySwal.fire({
                    title: "Xóa thất bại",
                    text: "Có lỗi xảy ra!",
                    icon: "error",
                    customClass: {
                        confirmButton: "btn btn-danger",
                    },
                }).then((result) => {
                    getData()
                })
            })
    }
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
            dataIndex: "fileName",
            align: "left",
            width: 500,
        },
        {
            title: "Phiên bản",
            dataIndex: "version",
            align: "center",
            width: 100,
        },
        {
            title: "Trùng với DL mẫu (%)",
            dataIndex: "similarityTotal",
            align: "center",
            width: 100,
            render: (text, record, index) => {
                return (
                    <span>{record?.checkingResult?.find(item => item.typeCheckingId === 1)?.similarityTotal}</span>
                )
            }
        },
        {
            title: "Trùng với TL cùng đợt (%)",
            dataIndex: "similarityTotal",
            align: "center",
            width: 100,
            render: (text, record, index) => {
                return (
                    <span>{record?.checkingResult?.find(item => item.typeCheckingId === 2)?.similarityTotal}</span>
                )
            }
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            align: "left",
            width: 200,
        },
        {
            title: "Thao tác",
            width: 100,
            align: "center",
            render: (record) => {
                return (
                    <div style={{ display: "flex", justifyContent: "center" }}>

                        <EditOutlined
                            id={`tooltip_edit_${record._id}`}
                            style={{ color: "#09A863", cursor: "pointer", marginRight: '1rem' }}
                            onClick={(e) => handleEdit(record)}
                        />
                        <UncontrolledTooltip placement="top" target={`tooltip_edit_${record._id}`}
                        >
                            Chỉnh sửa
                        </UncontrolledTooltip>
                        {/* <NavLink to={`/tams/checking-result/${record.id}`}> */}
                        <AppstoreOutlined
                            id={`tooltip_result_${record._id}`}
                            style={{ color: "#09A863", cursor: "pointer", marginRight: '1rem' }}
                            onClick={(e) => handleResult(record)}
                        />
                        {/* </NavLink> */}
                        <UncontrolledTooltip placement="top" target={`tooltip_result_${record._id}`}
                        >
                            Kết quả kiểm tra
                        </UncontrolledTooltip>
                        <Popconfirm
                            title="Bạn chắc chắn xóa?"
                            onConfirm={() => handleDelete(record)}
                            cancelText="Hủy"
                            okText="Đồng ý"
                        >
                            <DeleteOutlined
                                style={{ color: "red", cursor: "pointer", marginRight: '1rem' }}
                            />
                        </Popconfirm>

                    </div>
                )
            },
        },
    ]

    return (
        <Card
            title={`Danh sách phiên bản kiểm tra`}
            style={{ backgroundColor: "white", width: "100%", height: "100%" }}
        >
            <Row style={{ justifyContent: "space-between" }}>
                <Col sm="4" style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Label
                        className=""
                        style={{
                            width: "100px",
                            fontSize: "14px",
                            height: "34px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        Tìm kiếm
                    </Label>
                    <Input
                        type="text"
                        placeholder="Tìm kiếm"
                        style={{ height: "34px" }}
                        onChange={(e) => {
                            if (e.target.value === "") {
                                setSearch("")
                            }
                        }}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                setSearch(e.target.value)
                                setCurrentPage(1)
                            }
                        }}
                    />
                </Col>
                <Col sm="7" style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                        onClick={(e) => setIsAdd(true)}
                        color="primary"
                        className="addBtn"
                        style={{
                            width: "100px",
                        }}
                    >
                        Thêm mới
                    </Button>
                </Col>
            </Row>
            {loadingData === true ? <Spin style={{ position: 'relative', left: '50%' }} /> : <Table
                columns={columns}
                dataSource={data}
                bordered
                pagination={{
                    current: currentPage,
                    pageSize: rowsPerPage,
                    defaultPageSize: rowsPerPage,
                    showSizeChanger: true,
                    pageSizeOptions: ["10", "20", "30", '100'],
                    total: count,
                    locale: { items_per_page: "/ trang" },
                    showTotal: (total, range) => <span>Tổng số: {total}</span>,
                    onShowSizeChange: (current, pageSize) => {
                        setCurrentPage(current)
                        setRowsPerpage(pageSize)
                    },
                    onChange: (pageNumber) => {
                        setCurrentPage(pageNumber)
                    }
                }}
            />}
            <AddNewCheckingDocumentVersion open={isAdd} handleModal={handleModal} getData={getData} rowsPerPage={rowsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} checkingDocumentSelected={checkingDocumentSelected} listSubmit={listSubmit} />
            {checkingDocumentVersionSelected && <EditCheckingDocumentVersion open={isEdit} handleModal={handleModal} getData={getData} rowsPerPage={rowsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} infoEditVersion={checkingDocumentVersionSelected} listSubmit={listSubmit} dataCheckingDocument={checkingDocumentSelected} />}
        </Card>
    )
}
export default VersionModal

