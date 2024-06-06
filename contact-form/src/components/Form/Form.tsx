import { InputRadio } from '../InputRadio';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Label } from '../Label';
import { InputChecked } from '../InputChecked';
import { FieldText } from '../FieldText';
import { Button } from '../Button';
import { FieldTextArea } from '../FieldTextArea';
import { QUERIES } from '../../constants.ts';
import { useToast } from '../Toast';

interface FormInput {
  queryType: 'general-enquiry' | 'support-request';
  firstName: string;
  lastName: string;
  emailAddress: string;
  message: string;
  consent: boolean;
}

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const [setShowToast, Toast] = useToast({
    timeout: 5000,
    title: 'Message Sent!',
    description: 'Thanks for completing the form. We’ll be in touch soon!',
  });

  const onSubmit: SubmitHandler<FormInput> = () => {
    setShowToast(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Toast}
      <Fields>
        <FirstNameWrapper>
          <FieldText
            label="First Name"
            $error={errors.firstName}
            {...register('firstName', { required: 'This field is required' })}
          />
          {errors.firstName && (
            <ErrorMessage>{errors.firstName.message}</ErrorMessage>
          )}
        </FirstNameWrapper>
        <LastNameWrapper>
          <FieldText
            label="Last Name"
            $error={errors.lastName}
            {...register('lastName', { required: 'This field is required' })}
          />
          {errors.lastName && (
            <ErrorMessage>{errors.lastName.message}</ErrorMessage>
          )}
        </LastNameWrapper>
        <EmailAddressWrapper>
          <FieldText
            label="Email Address"
            type="email"
            $error={errors.emailAddress}
            {...register('emailAddress', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email address',
              },
            })}
          />
          {errors.emailAddress && (
            <ErrorMessage>{errors.emailAddress.message}</ErrorMessage>
          )}
        </EmailAddressWrapper>
        <QueryTypeWrapper>
          <Label as="p">Query Type</Label>
          <RadioGroup>
            <InputRadio
              label="General Enquiry"
              value="general-enquiry"
              {...register('queryType', {
                required: 'Please select a query type',
              })}
            />
            <InputRadio
              label="Support Request"
              value="support-request"
              {...register('queryType', {
                required: 'Please select a query type',
              })}
            />
          </RadioGroup>
          {errors.queryType && (
            <ErrorMessage>{errors.queryType.message}</ErrorMessage>
          )}
        </QueryTypeWrapper>
        <MessageWrapper>
          <FieldTextArea
            label="Message"
            $error={errors.message}
            textarea
            {...register('message', { required: 'This field is required' })}
          />
          {errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}
        </MessageWrapper>
      </Fields>
      <ConsentWrapper>
        <InputChecked
          label="I hereby consent to being contacted by the team"
          {...register('consent', {
            required: 'To submit this form, please consent to being contacted',
          })}
        />
        {errors.consent && (
          <ErrorMessage>{errors.consent.message}</ErrorMessage>
        )}
      </ConsentWrapper>
      <Button type="submit">Submit</Button>
    </form>
  );
}

const Fields = styled.div`
  display: grid;
  grid-template-areas:
    'firstName firstName'
    'lastName lastName'
    'emailAddress emailAddress'
    'queryType queryType'
    'message message';
  row-gap: var(--spacing-300);
  column-gap: var(--spacing-200);

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      'firstName lastName'
      'emailAddress emailAddress'
      'queryType queryType'
      'message message';
  }
`;

const FirstNameWrapper = styled.div`
  grid-area: firstName;
`;

const LastNameWrapper = styled.div`
  grid-area: lastName;
`;

const EmailAddressWrapper = styled.div`
  grid-area: emailAddress;
`;

const QueryTypeWrapper = styled.div`
  grid-area: queryType;
  display: grid;
  gap: var(--spacing-200);
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
  }
`;

const MessageWrapper = styled.div`
  grid-area: message;
`;

const ConsentWrapper = styled.div`
  margin-top: var(--spacing-500);
  margin-bottom: var(--spacing-500);
`;

const ErrorMessage = styled.p`
  color: var(--color-red);
`;
