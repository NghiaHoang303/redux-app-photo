import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Label } from 'reactstrap'
import RandomPhoto from '../../components/RandomPhoto'
import { ErrorMessage } from 'formik'

function RandomFormField(props) {
    const {field, form, label} = props
    const {name, value, onBlur} = field

    const {errors, touched} = form;
    const showError = errors[name] && touched[name]

    const handelImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl)
    }
    return (
        <FormGroup>
            {label && <Label for={name}> {label}</Label>}
       
        <RandomPhoto
            name ={name}
            imageUrl ={value}
            onImageUrlChange= {handelImageUrlChange}
            onRandomButtonBlur = {onBlur}
        >
        <div className={showError ? 'is-invalid' : ''}></div>
        <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
        </RandomPhoto>
       
        </FormGroup>
    )
}

RandomFormField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
}

RandomFormField.defaultProps = {
    label: '',
}

export default RandomFormField

