import { Table, Input, Card, CardTitle, Tag, Popconfirm, Switch } from "antd"
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
} from "reactstrap"
import { Plus, X } from "react-feather"
import { DeleteOutlined, EditOutlined, LockOutlined } from "@ant-design/icons"
// import style from "../../../../assets/scss/index.module.scss"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import Select from "react-select"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import classnames from "classnames"
import { AbilityContext } from '@src/utility/context/Can'
import { deleteDocumentType, getDocumentType } from "../../../api/document_type"
import { toDateString, toDateTimeString } from "../../../utility/Utils"

const DocumentType = () => {
    const ability = useContext(AbilityContext)
    const MySwal = withReactContent(Swal)
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerpage] = useState(10)
    const [search, setSearch] = useState("")
    const [isAdd, setIsAdd] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [info, setInfo] = useState()
    const getData = (page, limit, search) => {
        getDocumentType({
            params: {
                page,
                perPage: limit,
                ...(search && search !== "" && { search }),
            },
        })
            .then((res) => {
                setData(res?.data)
                setCount(res?.pagination?.totalRecords)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getData(currentPage, rowsPerPage, search)
    }, [currentPage, rowsPerPage, search])


    const handleModal = () => {
        setIsAdd(false)
        setIsEdit(false)
        setInfo(null)
        // handleReset()
    }
    const CloseBtn = (
        <X className="cursor-pointer" size={15} onClick={handleModal} />
    )
    const handleEdit = (record) => {
        setInfo(record)
        setIsEdit(true)
    }

    const handleDelete = (key) => {
        deleteDocumentType(key)
            .then((res) => {
                MySwal.fire({
                    title: "Xóa đợt kiểm tra thành công",
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
                })
            })
            .catch((error) => {
                MySwal.fire({
                    title: "Xóa đợt kiểm tra thất bại",
                    icon: "error",
                    customClass: {
                        confirmButton: "btn btn-danger",
                    },
                })
                console.log(error)
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
            title: "Tên loại tài liệu",
            dataIndex: "name",
            align: 'left',
            width: 500,
            render: (text, record, index) => (
                <span style={{ whiteSpace: 'break-spaces' }}>{record.name}</span>
            ),
        },
        {
            title: "Thời gian tạo",
            dataIndex: "createdAt",
            align: 'center',
            width: 150,
            render: (text, record, index) => (
                <span>{toDateTimeString(record.createdAt)}</span>
            ),
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            align: 'left',
            width: 200,
            render: (text, record, index) => (
                <span style={{ whiteSpace: 'break-spaces' }}>{record.description}</span>
            ),
        },
        {
            title: "Thao tác",
            width: 100,
            align: "center",
            render: (record) => (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {ability.can('update', 'LOAI_DON_VI') &&
                        <>
                            <EditOutlined
                                id={`tooltip_edit${record.ID}`}
                                style={{ color: "#09A863", cursor: 'pointer', marginRight: '1rem' }}
                                onClick={(e) => handleEdit(record)}
                            />
                            <UncontrolledTooltip placement="top" target={`tooltip_edit${record.ID}`}>
                                Chỉnh sửa
                            </UncontrolledTooltip>
                        </>}
                    {ability.can('delete', 'LOAI_DON_VI') &&
                        <Popconfirm
                            title="Bạn chắc chắn xóa?"
                            onConfirm={() => handleDelete(record.id)}
                            cancelText="Hủy"
                            okText="Đồng ý"
                        >
                            <DeleteOutlined style={{ color: "red", cursor: 'pointer' }} id={`tooltip_delete${record.ID}`} />
                            <UncontrolledTooltip placement="top" target={`tooltip_delete${record.ID}`}>
                                Xóa
                            </UncontrolledTooltip>
                        </Popconfirm>}
                </div>
            ),
        },
    ]
    const showTotal = (count) => `Tổng số: ${count}`

    return (
        <Card
            title="Danh sách loại tài liệu"
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
                <Col sm="7" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        onClick={(e) => setIsAdd(true)}
                        color="primary"
                        className="addBtn"
                        style={{
                            width: '100px',
                        }}
                    >
                        Thêm mới
                    </Button>
                </Col>
            </Row>
            <Table
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
            />

            <AddNewModal
                open={isAdd}
                handleModal={handleModal}
                getData={getData}
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
            />
            {
                <EditModal
                    open={isEdit}
                    handleModal={handleModal}
                    getData={getData}
                    infoEdit={info}
                    currentPage={currentPage}
                    rowsPerPage={rowsPerPage}
                />
            }
        </Card>
    )
}

const AddNewModal = React.lazy(() => import("./modal/AddNewModal"))
const EditModal = React.lazy(() => import("./modal/EditModal"))
export default DocumentType 
