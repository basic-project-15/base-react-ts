import { useState } from 'react'

// Components
import { Divider } from '@mui/material'
import { TextCustom, TextInputCustom } from '@atoms'

// Core
import { validInputEmail } from '@core/validations'

const ComponentsInputs2 = () => {
  const [inputDefault, setInputDefault] = useState('')
  const [iOnlyNumbers, setIOnlyNumbers] = useState('')
  const [iOnlyLetters, setIOnlyLetters] = useState('')
  const [iOnlyLettersExtend, setIOnlyLettersExtend] = useState('')
  const [iOnlyAlphanumeric, setIOnlyAlphanumeric] = useState('')
  const [iOnlyAlphanumericExtend, setIOnlyAlphanumericExtend] = useState('')
  const [iMaxLength, setIMaxLength] = useState('')
  const [phoneNumberHN, setPhoneNumberHN] = useState('')
  const [email, setEmail] = useState('')
  const [emailMsgError, setEmailMsgError] = useState<string | null>(null)
  const [emailDomain, setEmailDomain] = useState('')
  const [emailDomainMsgError, setEmailDomainMsgError] = useState<string | null>(
    null,
  )

  const handleValidEmail = () => {
    if (email) {
      const isValid = validInputEmail(email, 'validateEmail')
      if (isValid) {
        setEmailMsgError('')
      } else {
        setEmailMsgError('Correo no válido')
      }
    } else {
      setEmailMsgError(null)
    }
  }

  const handleValidEmailDomain = () => {
    if (emailDomain) {
      const isValid = validInputEmail(emailDomain, 'validateEmailDomain')
      if (isValid) {
        setEmailDomainMsgError('')
      } else {
        setEmailDomainMsgError('Correo no válido')
      }
    } else {
      setEmailDomainMsgError(null)
    }
  }

  return (
    <div className="pb-4">
      <TextCustom text="Validaciones para TextInputs" className="text-6xl" />
      <Divider />
      {/* Validaciones de TextInputs */}
      <div className="px-4 pt-4">
        <TextCustom text="Validaciones de escritura" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextInputCustom
            value={inputDefault}
            setValue={setInputDefault}
            name="Cualquier caracter"
          />
          <TextInputCustom
            value={iOnlyNumbers}
            setValue={setIOnlyNumbers}
            name="Solo números"
            typesValidation={'onlyNumber'}
          />
          <TextInputCustom
            value={iOnlyLetters}
            setValue={setIOnlyLetters}
            name="Solo letras"
            typesValidation={'onlyLetters'}
          />
          <TextInputCustom
            value={iOnlyLettersExtend}
            setValue={setIOnlyLettersExtend}
            name="Solo letras (extendido)"
            typesValidation={'onlyLettersExtend'}
          />
          <TextInputCustom
            value={iOnlyAlphanumeric}
            setValue={setIOnlyAlphanumeric}
            name="Solo números y letras"
            typesValidation={'onlyAlphanumeric'}
          />
          <TextInputCustom
            value={iOnlyAlphanumericExtend}
            setValue={setIOnlyAlphanumericExtend}
            name="Solo números y letras (extendido)"
            typesValidation={'onlyAlphanumericExtend'}
          />
          <TextInputCustom
            value={iMaxLength}
            setValue={setIMaxLength}
            name="MaxLength 10"
            maxLength={10}
          />
          <TextInputCustom
            value={phoneNumberHN}
            setValue={setPhoneNumberHN}
            name="Número de teléfono HN"
            validInitNumbers={[2, 3, 8, 9]}
            maxLength={8}
          />
          <TextCustom
            text="Solo números que empiezen con: 2, 3, 8, 9"
            className="italic"
          />
        </div>
        <Divider />
      </div>
      {/* Validacion de TextInput de Correo */}
      <div className="px-4 pt-4">
        <TextCustom text="Validacion de correo" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextInputCustom
            value={email}
            setValue={setEmail}
            name="Email"
            onBlur={handleValidEmail}
            type="email"
            msgError={emailMsgError}
          />
          <TextInputCustom
            value={emailDomain}
            setValue={setEmailDomain}
            name="Email con Dominio y Extensión"
            onBlur={handleValidEmailDomain}
            type="email"
            msgError={emailDomainMsgError}
          />
          <TextCustom
            text="Solo correos con dominios: yahoo, hotmail, gmail, live, outlook"
            className="italic"
          />
          <TextCustom
            text="Y con extensión: .com, .es y .hn"
            className="italic"
          />
        </div>
        <Divider />
      </div>
    </div>
  )
}

export default ComponentsInputs2
