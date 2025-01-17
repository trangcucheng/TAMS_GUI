// ** React Imports
// ** Reactstrap Imports
import {
    Col,
    FormFeedback,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
    Button
} from "reactstrap"

// ** Third Party Components
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import Flatpickr from "react-flatpickr"

// ** Utils

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import { Vietnamese } from "flatpickr/dist/l10n/vn.js"
import "@styles/react/libs/flatpickr/flatpickr.scss"
import Swal from 'sweetalert2'
import { postCourse } from "../../../../api/course"
import { useState } from "react"
import { toDateStringv2 } from "../../../../utility/Utils"

const AddNewCourse = ({ open, handleModal, getData }) => {
    // ** States
    const AddNewCourseSchema = yup.object().shape({
        name: yup.string().required("Yêu cầu nhập tên đợt kiểm tra")
    })

    // ** Hooks
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(AddNewCourseSchema)
    })

    // ** State
    const [picker, setPicker] = useState(new Date())

    const handleCloseModal = () => {
        handleModal()
        reset()
    }

    const handleChangeDate = (date) => {
        setPicker(date[0])
    }

    const onSubmit = (data) => {
        // Lấy nút submit đã được nhấn
        postCourse({
            name: data.name,
            date: toDateStringv2(picker),
            description: data.description
        }).then(result => {
            if (result.status === 'success') {
                Swal.fire({
                    title: "Thêm mới đợt kiểm tra thành công",
                    text: "",
                    icon: "success",
                    customClass: {
                        confirmButton: "btn btn-success"
                    }
                })
            } else {
                Swal.fire({
                    title: "Thêm mới đợt kiểm tra thất bại",
                    text: "Vui lòng kiểm tra lại thông tin!",
                    icon: "error",
                    customClass: {
                        confirmButton: "btn btn-danger"
                    }
                })
            }
            getData()
            handleCloseModal()
        }).catch(error => {
            Swal.fire({
                title: "Thêm mới đợt kiểm tra thất bại",
                text: `Có lỗi xảy ra - ${error.message}!`,
                icon: "error",
                customClass: {
                    confirmButton: "btn btn-danger"
                }
            })
        })
    }
    return (
        <Modal isOpen={open} toggle={handleModal} className='modal-dialog-top modal-md'>
            <ModalHeader className='bg-transparent' toggle={handleCloseModal}></ModalHeader>
            <ModalBody className='px-sm-3 mx-50 pb-2' style={{ paddingTop: 0 }}>
                <div className='text-center mb-1'>
                    <h2 className='mb-1'>Thêm mới đợt kiểm tra</h2>
                </div>
                <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
                    <Col xs={12}>
                        <Label className='form-label' for='name'>
                            Tên đợt kiểm tra <span style={{ color: 'red' }}>(*)</span>
                        </Label>
                        <Controller
                            control={control}
                            name='name'
                            render={({ field }) => {
                                return (
                                    <Input
                                        {...field}
                                        id='name'
                                        placeholder='Nhập tên đợt kiểm tra'
                                        invalid={errors.name && true}
                                    />
                                )
                            }}
                        />
                        {errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
                    </Col>
                    <Col xs={12}>
                        <Label className='form-label' for='date'>
                            Thời gian <span style={{ color: 'red' }}>(*)</span>
                        </Label>
                        <Controller
                            control={control}
                            name='date'
                            render={() => {
                                return (
                                    <Flatpickr
                                        className="form-control invoice-edit-input date-picker"
                                        options={{
                                            dateFormat: "d-m-Y", // format ngày giờ
                                            locale: {
                                                ...Vietnamese
                                            },
                                            defaultDate: new Date()
                                        }}
                                        placeholder="dd/mm/yyyy"
                                        onChange={handleChangeDate}
                                    />

                                )
                            }}
                        />
                        {/* {errors.date && <FormFeedback>{errors.date.message}</FormFeedback>} */}
                    </Col>
                    <Col xs={12}>
                        <Label className='form-label' for='description'>
                            Mô tả
                        </Label>
                        <Controller
                            name='description'
                            control={control}
                            render={({ field }) => (
                                <Input {...field} id='description' placeholder='Nhập mô tả' invalid={errors.description && true} />
                            )}
                        />
                    </Col>
                    <Col xs={12} className='text-center mt-2 pt-50'>
                        <Button type='submit' name="add" className='me-1' color='primary'>
                            Thêm
                        </Button>
                        <Button type='reset' color='secondary' outline onClick={handleCloseModal}>
                            Hủy
                        </Button>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    )
}

export default AddNewCourse