import { Table, Input, Card, CardTitle, Tag, Popconfirm, Switch, TreeSelect } from "antd"
import { useState, Fragment, useEffect, useRef } from "react"
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
import style from "../../../../../assets/scss/index.module.scss"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { toDateString } from "../../../../../utility/Utils"
import Select from "react-select"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import classnames from "classnames"
import { updateOrganization } from "../../../../../api/organizations"
const { SHOW_PARENT } = TreeSelect

const EditModal = ({ open, currentPage, rowsPerPage, getData, listTypes, setCurrentPage, handleModal, listOrgans, infoEdit }) => {
  if (!infoEdit) return
  const treeData = listOrgans
  const [orgParent, setOrgParent] = useState(infoEdit?.organizationParent)
  const MySwal = withReactContent(Swal)
  const SignupSchema = yup.object().shape({
    organizationTypeID: yup.object().shape({
      value: yup.number().required(),
      label: yup.string().required()
    }).required('Vui lòng chọn loại đơn vị'),
    organizationCode: yup.string().required("Vui lòng nhập mã đơn vị"),
    organizationName: yup.string().required("Vui lòng nhập tên đơn vị"),
    organizationAddress: yup.string().required("Vui lòng nhập địa chỉ đơn vị"),
    organizationParent: yup.number().required("Vui lòng chọn đơn vị cấp trên").default(orgParent),
    organizationDescription: yup.string()

  })

  // ** Hooks
  const {
    reset,
    control,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(SignupSchema) })
  // setValue('organizationParent', infoEdit?.organizationParent)

  const CloseBtn = (
    <X className="cursor-pointer" size={15} onClick={handleModal} />
  )

  const editSubmit = (data) => {
    const dataSubmit = {
      ...data,
      organizationTypeID: data.organizationTypeID?.value.toString(),
      // organizationLevelID: data.organizationLevelID?.value.toString(),
      organizationParent: data.organizationParent,
      organizationID: infoEdit?.id,
      organizationRelationlID: infoEdit?.OrganRelationID
    }
    updateOrganization(dataSubmit)
      .then((res) => {
        MySwal.fire({
          title: "Chỉnh sửa thành công",

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
      .catch((err) => {
        MySwal.fire({
          title: "Chỉnh sửa thất bại",
          icon: "error",
          customClass: {
            confirmButton: "btn btn-danger",
          },
        })
      })
  }

  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      // autoFocus={false}
      className="modal-dialog-top modal-md"
    >
      <ModalHeader className='bg-transparent' toggle={handleModal}>
      </ModalHeader>
      <ModalBody className='px-sm-3 mx-50 pb-2' style={{ paddingTop: 0 }}>
        <div className='text-center mb-1'>
          <h2 className='mb-1'>Chỉnh sửa đơn vị</h2>
        </div>
        <Form onSubmit={handleSubmit(editSubmit)}>
          <Row className="content-space-between">
            <div className="mb-1 col col-6">
              <Label className="form-label" for="organizationCode">
                Mã đơn vị<span className="redColor">(*)</span>
              </Label>
              <Controller
                id="organizationCode"
                name="organizationCode"
                defaultValue={infoEdit?.organizationCode}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Nhập mã đơn vị"
                    invalid={errors.organizationCode && true}
                    className={classnames({ "is-invalid": errors.organizationCode })}
                  />
                )}
              />
              {errors.organizationCode && (
                <FormFeedback>Vui lòng nhập mã đơn vị</FormFeedback>
              )}
            </div>
            <div className="mb-1 col col-6">
              <Label className="form-label" for="organizationName">
                Tên đơn vị<span className="redColor">(*)</span>
              </Label>
              <Controller
                id="organizationName"
                name="organizationName"
                defaultValue={infoEdit?.organizationName}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Nhập tên đơn vị"
                    invalid={errors.organizationName && true}
                    className={classnames({ "is-invalid": errors.organizationName })}
                  />
                )}
              />
              {errors.organizationName && (
                <FormFeedback>Vui lòng nhập tên đơn vị</FormFeedback>
              )}
            </div>
          </Row>
          <Row className="content-space-between">
            <div className="mb-1 col col-6">
              <Label className="form-label" for="react-select">
                Chọn loại đơn vị<span className="redColor">(*)</span>
              </Label>
              <Controller
                id="react-select"
                control={control}
                name="organizationTypeID"
                defaultValue={listTypes.find(x => x.value === infoEdit?.organizationTypeID)}
                render={({ field }) => (
                  <Select
                    isClearable
                    options={listTypes}
                    classNamePrefix="select"
                    className={classnames('react-select', { 'is-invalid': errors.organizationTypeID })}
                    {...field}
                    placeholder="Chọn loại đơn vị"
                  />
                )}
              />
              {errors.organizationTypeID && (
                <FormFeedback>Vui lòng chọn loại đơn vị</FormFeedback>
              )}
            </div>
            <div className="mb-1 col col-6">
              <Label className="form-label" for="react-select">
                Chọn đơn vị cấp trên<span className="redColor">(*)</span>
              </Label>
              <TreeSelect
                style={{
                  width: "100%",
                }}
                value={orgParent}
                dropdownStyle={{
                  maxHeight: 400,
                  overflow: "auto",
                }}
                treeData={treeData}
                placeholder="Chọn đơn vị cấp trên "
                treeDefaultExpandAll
                className={classnames({
                  "is-invalid": errors && errors.organizationParent,
                })}
                showSearch
                treeNodeFilterProp="organizationName"
                onChange={(e) => {
                  setValue('organizationParent', e)
                  setOrgParent(e)
                }
                }
              />
              {errors && errors.organizationParent && (
                <FormFeedback>Vui lòng chọn đơn vị cấp trên</FormFeedback>
              )}

            </div>
          </Row>

          <Row className="content-space-between">

            <div className="mb-1 col col-12">
              <Label className="form-label" for="organizationAddress">
                Địa chỉ đơn vị<span className="redColor">(*)</span>
              </Label>
              <Controller
                id="organizationAddress"
                name="organizationAddress"
                defaultValue={infoEdit?.organizationAddress}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Nhập địa chỉ đơn vị"
                    invalid={errors.organizationAddress && true}
                    className={classnames({ "is-invalid": errors.organizationAddress })}
                  />
                )}
              />
              {errors.organizationAddress && (
                <FormFeedback>Vui lòng nhập địa chỉ đơn vị</FormFeedback>
              )}
            </div>
          </Row>

          <Row className="content-space-between">
            <div className="mb-1 col col-12">
              <Label className="form-label" for="organizationDes">
                Ghi chú
              </Label>
              <Controller
                id="organizationDes"
                name="organizationDes"
                defaultValue={infoEdit?.organizationDescription}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Nhập ghi chú"
                    invalid={errors.organizationDes && true}
                    className={classnames({ "is-invalid": errors.organizationDes })}
                  />
                )}
              />
              {errors.organizationDes && (
                <FormFeedback>Vui lòng nhập ghi chú</FormFeedback>
              )}
            </div>
          </Row>
          <div className="d-flex justify-content-center">
            <div className="mb-1 col col-6 d-flex" style={{ justifyContent: 'flex-end' }}>
              <Button className="cancelBtn" color="primary" type="submit">
                Lưu
              </Button>
            </div>
            <div className="mb-1 col col-6">
              <Button
                outline
                color="secondary"
                className="cancelBtn"
                type="reset"
                onClick={() => handleModal()}
              >
                Hủy
              </Button>
            </div>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  )
}
export default EditModal