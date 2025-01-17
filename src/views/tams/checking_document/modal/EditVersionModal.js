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
import { useForm, Controller } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
// import Select from 'react-select'

// ** Utils

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import Swal from 'sweetalert2'
// import { useState } from "react"
import { editCheckingDocumentVersion } from "../../../../api/checking_document_version"

const EditCheckingDocumentVersion = ({ open, handleModal, infoEditVersion, getData, dataCheckingDocument }) => {
    // ** States
    const EditCheckingDocumentVersionSchema = yup.object().shape({
        // file: yup.mixed().required("Yêu cầu nhập file")
    })

    // ** Hooks
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(EditCheckingDocumentVersionSchema)
    })

    // const [file, setFile] = useState()

    // const handleChangeFile = (event) => {
    //     const file = event.target.files[0]
    //     setFile(file)
    // }
    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('description', data.description)
        formData.append('checkingDocumentId', dataCheckingDocument?.id)
        editCheckingDocumentVersion(infoEditVersion?.id, formData).then(result => {
            if (result.status === 'success') {
                Swal.fire({
                    title: "Cập nhật phiên bản kiểm tra thành công",
                    text: "",
                    icon: "success",
                    customClass: {
                        confirmButton: "btn btn-success"
                    }
                })
            } else {
                Swal.fire({
                    title: "Cập nhật phiên bản kiểm tra thất bại",
                    text: "Vui lòng thử lại sau!",
                    icon: "error",
                    customClass: {
                        confirmButton: "btn btn-danger"
                    }
                })
            }
            getData()
            handleModal()
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <Modal isOpen={open} toggle={handleModal} className='modal-dialog-top modal-lg'>
            <ModalHeader className='bg-transparent' toggle={handleModal}></ModalHeader>
            <ModalBody className='px-sm-3 mx-50 pb-2' style={{ paddingTop: 0 }}>
                <div className='text-center mb-1'>
                    <h2 className='mb-1'>Cập nhật tài liệu</h2>
                </div>
                <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
                    <Col xs={12}>
                        <Label className='form-label' for='checkingDocument'>
                            Phiên bản kiểm tra <span style={{ color: 'red' }}>(*)</span>
                        </Label>
                        <Controller
                            disabled
                            defaultValue={dataCheckingDocument?.title}
                            name='checkingDocument'
                            control={control}
                            render={({ field }) => (
                                <Input {...field} id='checkingDocument' placeholder='Nhập phiên bản kiểm tra' invalid={errors.checkingDocument && true} />
                            )}
                        />
                        {errors.checkingDocument && <FormFeedback>{errors.checkingDocument.message}</FormFeedback>}
                    </Col>
                    <Col xs={12}>
                        <Label className='form-label' for='description'>
                            Mô tả
                        </Label>
                        <Controller
                            defaultValue={infoEditVersion?.description}
                            name='description'
                            control={control}
                            render={({ field }) => (
                                <Input  {...field} id='description' placeholder='Nhập mô tả' invalid={errors.description && true} />
                            )}
                        />
                    </Col>
                    <Col xs={12}>
                        <Label className='form-label' for='file'>
                            Tài liệu <span style={{ color: 'red' }}>(*)</span>
                        </Label>
                        <Controller
                            disabled
                            defaultValue={infoEditVersion?.fileName ?? ''}
                            name='file'
                            control={control}
                            render={({ field }) => (
                                // <Input {...field} id='file' type='file' placeholder='Chọn tài liệu' invalid={errors.file && true} onChange={(event) => {
                                //     handleChangeFile(event)
                                //     field.onChange(event)
                                // }} />)}
                                <Input {...field} id="file" placeholder="Nhập tài liệu" />)}
                        />
                    </Col>
                    <Col xs={12} className='text-center mt-2 pt-50'>
                        <Button type='submit' className='me-1' color='primary'>
                            Cập nhật
                        </Button>
                        <Button type='reset' color='secondary' outline onClick={handleModal}>
                            Hủy
                        </Button>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    )
}

export default EditCheckingDocumentVersion