import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Input, Label, Button, Spinner } from 'reactstrap'
import {Link} from 'react-router-dom'
// import {PHOTO_CATEGORY_OPTIONS} from '../../../../constants/global'
import Select from 'react-select'
import Images from '../../../../constants/images'
import { FastField, Form , Formik} from 'formik'
import InputField from '../../../../custom-fields/InputField'
import SelectField from '../../../../custom-fields/SelectField'
import RandomPhotoField from '../../../../custom-fields/RandomFormField'
import * as Yup from 'yup';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global'

function PhotoForm(props) {
    const {initialValues, isAddMode} = props

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),
        categoryId: Yup.number()
            .required('This field is required')
            .nullable(),

        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('This field is required'),
            otherwise: Yup.string().notRequired(),
        })
    })

    return (
       <Formik initialValues = {initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
       >
           {formikProps => {
            const {values, errors, touched, isSubmitting} = formikProps;
            console.log({values, errors, touched});
               return (
                <>
                <Link to="/photos">Photos Home</Link>
                <Form >
                    <FastField
                        name='title'
                        component={InputField}

                        label= 'Title'
                        placeholder= 'Eg: Now nature ....'
                        className= 'mb-4'
                    />

                    <FastField
                        name='categoryId'
                        component={SelectField}

                        label= 'category'
                        placeholder= "what's your photo category"
                        options={PHOTO_CATEGORY_OPTIONS}
                        className= 'mb-2'
                    
                    />
                    {/* <FormGroup>
                        <Label for= 'categoryId'>Category</Label>
                        <Select id= "categoryId"
                                name = 'categoryId'
                                placeholder= "what's your photo category"
                                options={PHOTO_CATEGORY_OPTIONS}
                        >
                        </Select>
                    </FormGroup> */}
                    
                    <FastField name='photo'
                        component= {RandomPhotoField} 
                        label= 'Photo'
                        className= 'mb-2'
                        
                        />
                   
                    {/* <FormGroup>
                        <Label for= 'categoryId'>Photo</Label>
                        <div>
                            <Button type='button' outline color='primary'>
                                Random photos
                            </Button>
                        </div>
                        <div>
                            <img width= '200px' height= '200px' src={Images.COLORFULL_BG}></img>
                        </div>
                    </FormGroup> */}
                    
                    <FormGroup className='mb-2'>
                        <Button type= 'submit'  color={isAddMode ? 'primary' : 'success' }>
                            {isSubmitting && <Spinner size= 'sm'/>}
                           {isAddMode ? 'Add to album' : 'Update photo'} </Button>
                    </FormGroup>
                </Form>
                </>
               )
           }}
       </Formik>
    )
}

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
}

PhotoForm.defaultProps = {
    onSubmit: null,
}

export default PhotoForm

