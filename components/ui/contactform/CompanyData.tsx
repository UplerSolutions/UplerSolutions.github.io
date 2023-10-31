import React, { FC } from 'react'
import Typography from '@mui/material/Typography'
import { useForm } from 'react-hook-form'
import { CustomTextField } from './customInput/CustomTextField'
import { ErrorMessage } from '@hookform/error-message'
import { Button } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'

interface Props {
  handlerAddress: (data: any) => void
  handleNext: () => void
}

const DataDireccionEntrega: FC<Props> = ({ handlerAddress, handleNext }) => {
  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm()

  const onSubmit = (data: any) => {
    handlerAddress(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography sx={{ paddingBottom: '1rem' }} variant='h4' align='center'>
        Company Information
      </Typography>

      <Typography variant='caption' color='red'>
        <ErrorMessage errors={errors} name='name' />
      </Typography>

      <CustomTextField
        name='name'
        control={control}
        defaultValue=''
        type='text'
        label='Product name'
        required={true}
      />

      <CustomTextField
        name='website'
        label='Website URL'
        type='text'
        control={control}
        defaultValue=''
        required={true}
      />

      <Typography variant='caption' color='red'>
        <ErrorMessage errors={errors} name='email' />
      </Typography>

      <CustomTextField
        name='email'
        label='Company email'
        type='email'
        control={control}
        defaultValue=''
        required={true}
      />
    </form>
  )
}

export default DataDireccionEntrega
