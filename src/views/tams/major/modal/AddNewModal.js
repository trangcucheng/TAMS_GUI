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

// ** Utils

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import Swal from 'sweetalert2'
import { postMajor } from "../../../../api/major"

const AddNewMajor = ({ open, handleModal, getData }) => {
    // ** States
    const AddNewMajorSchema = yup.object().shape({
        name: yup.string().required("Yêu cầu nhập tên lĩnh vực")
    })

    // ** Hooks
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(AddNewMajorSchema)
    })

    // ** State

    const handleCloseModal = () => {
        handleModal()
        reset()
    }

    const onSubmit = (data) => {
        // Lấy nút submit đã được nhấn
        postMajor(data).then(result => {
            if (result.status === 'success') {
                Swal.fire({
                    title: "Thêm mới lĩnh vực thành công",
                    text: "Yêu cầu đã được phê duyệt!",
                    icon: "success",
                    customClass: {
                        confirmButton: "btn btn-success"
                    }
                })
            } else {
                Swal.fire({
                    title: "Thêm mới lĩnh vực thất bại",
                    text: "Vui lòng kiểm tra lại thông tin!",
                    icon: "error",
                    customClass: {
                        confirmButton: "btn btn-danger"
                    }
                })
            }
            handleCloseModal()
            getData()
        }).catch(error => {
            Swal.fire({
                title: "Thêm mới lĩnh vực thất bại",
                text: `Có lỗi xảy ra - ${error.message}!`,
                icon: "error",
                customClass: {
                    confirmButton: "btn btn-danger"
                }
            })
            handleCloseModal()
            getData()
        })
    }
    return (
        <Modal isOpen={open} toggle={handleModal} className='modal-dialog-centered modal-md'>
            <ModalHeader className='bg-transparent' toggle={handleCloseModal}></ModalHeader>
            <ModalBody className='px-sm-5 mx-50 pb-5'>
                <div className='text-center mb-2'>
                    <h1 className='mb-1'>Thêm mới lĩnh vực</h1>
                </div>
                <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
                    <Col xs={12}>
                        <Label className='form-label' for='name'>
                            Tên lĩnh vực <span style={{color: 'red'}}>(*)</span>
                        </Label>
                        <Controller
                            control={control}
                            name='name'
                            render={({ field }) => {
                                return (
                                    <Input
                                        {...field}
                                        id='name'
                                        placeholder='Nhập tên lĩnh vực'
                                        invalid={errors.name && true}
                                    />
                                )
                            }}
                        />
                        {errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
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

export default AddNewMajor