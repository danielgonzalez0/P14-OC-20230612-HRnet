import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import statesData from '../../assets/data/statesData';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  convertLocaldateInUTC,
  dateParser,
  minMaxDate,
} from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, editUser } from '../../redux/users.slice';
import InputFirstName from './InputFirstName';
import InputLastName from './InputLastName';
import InputDateOfBirth from './InputDateOfBirth';
import InputStartDate from './InputStartDate';
import InputAddress from './InputAddress';
import InputCity from './InputCity';
import InputZipCode from './InputZipCode';
import SelectDepartment from './SelectDepartment';
import SelectState from './SelectState';
import { setIsModified, setIsSelected } from '../../redux/formStatus.slice';

const schema = yup.object({
  first_name: yup
    .string('input must be a string')
    .required('first name is required')
    .matches(
      /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      'invalid name format: hover ? for more details'
    ),
  last_name: yup
    .string('input must be a string')
    .required('last name is required')
    .matches(
      /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      'invalid name format: hover ? for more details'
    ),
  dateOfBirth: yup
    .date()
    .required('required')
    .typeError('a valid date is required')
    .max(minMaxDate(18, 'substract'), 'you must be at least 18')
    .min(minMaxDate(67, 'substract'), 'you must not be older than 67'),
  startDate: yup
    .date()
    .required('a valid date is required')
    .typeError('a valid date is required')
    .min(minMaxDate(67 - 18, 'substract'))
    .max(new Date().toDateString(), 'you cannot select a date in the future'),
  department: yup.string('must be a string').required('department is required'),
  address: yup.string('must be a string').required('street is required'),
  city: yup.string('must be a string').required('city is required'),
  state: yup.string('must be a string').required('state is required'),
  zipCode: yup
    .number('must be a number')
    .required('zip code is required')
    .min(501, 'zip code must be between 501 and 99950')
    .max(99950, 'zip code must be between 501 and 99950')
    .typeError('zip code must be between 501 and 99950'),
});

const FormNewEmployee = ({ dataEmployee }) => {
  const [states, setStates] = useState([]);
  const isModified = useSelector((state) => state.status.isModified);
  const dispatch = useDispatch();

  const [formSelectedState, setFormSelectedState] = useState();

  const form = useForm({
    defaultValues: {
      first_name: `${dataEmployee ? dataEmployee[0].first_name : 'John'}`,
      last_name: `${dataEmployee ? dataEmployee[0].last_name : 'McLane'}`,
      dateOfBirth: `${
        dataEmployee
          ? new Date(convertLocaldateInUTC(dataEmployee[0].dateOfBirth))
              .toISOString()
              .slice(0, 10)
          : new Date(convertLocaldateInUTC(new Date(1980, 6, 10)))
              .toISOString()
              .slice(0, 10)
      }`,
      startDate: `${
        dataEmployee
          ? new Date(convertLocaldateInUTC(dataEmployee[0].startDate))
              .toISOString()
              .slice(0, 10)
          : new Date(convertLocaldateInUTC(new Date(2000, 8, 20)))
              .toISOString()
              .slice(0, 10)
      }`,
      department: `${dataEmployee ? dataEmployee[0].department : 'Legal'}`,
      address: `${dataEmployee ? dataEmployee[0].address : '77 Brooklyn'}`,
      city: `${dataEmployee ? dataEmployee[0].city : 'New York'}`,
      state: `${dataEmployee ? dataEmployee[0].state : 'NY'}`,
      zipCode: `${dataEmployee ? dataEmployee[0].zipCode : 501}`,
    },

    mode: 'all',
    resolver: yupResolver(schema),
  });
  const { register, setValue, control, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const handleSubmitForm = (data) => {
    if (isModified) {
      data = {
        ...data,
        dateOfBirth: dateParser(data.dateOfBirth),
        startDate: dateParser(data.startDate),
        id: dataEmployee[0].id,
      };
      dispatch(editUser(data));
      dispatch(setIsSelected(false));
      dispatch(setIsModified(false));
      console.log('form modified', data);
    } else {
      const uid = Date.now();
      data = {
        ...data,
        dateOfBirth: dateParser(data.dateOfBirth),
        startDate: dateParser(data.startDate),
        id: uid,
      };
      dispatch(addUser(data));
      console.log('form submitted', data);
    }
  };

  useEffect(() => {
    setStates(statesData);
    if (dataEmployee) {
      setFormSelectedState(dataEmployee[0].state);
    } else {
      setFormSelectedState('NY');
    }
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset, dataEmployee, setValue]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
        <div className="inputs">
          <InputFirstName register={register} errors={errors} />
          <InputLastName register={register} errors={errors} />
          <InputDateOfBirth register={register} errors={errors} />
          <InputStartDate register={register} errors={errors} />
          <SelectDepartment
            register={register}
            errors={errors}
            setValue={setValue}
          />
        </div>
        <fieldset className="address-inputs">
          <legend>Address</legend>
          <InputAddress register={register} errors={errors} />
          <InputCity register={register} errors={errors} />
          {formSelectedState && (
            <SelectState
              register={register}
              errors={errors}
              setValue={setValue}
              setFormSelectedState={setFormSelectedState}
              formSelectedState={formSelectedState}
              states={states}
            />
          )}
          <InputZipCode register={register} errors={errors} />
        </fieldset>
        <div className="btn-container">
          <input
            type="submit"
            value={dataEmployee ? 'modify' : 'send'}
            className="btn"
          />
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default FormNewEmployee;
