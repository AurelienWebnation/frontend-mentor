import { InputRadio } from '../InputRadio';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Label } from '../Label';
import { InputChecked } from '../InputChecked';
import { Button } from '../Button';
import { FieldTextArea } from '../FieldTextArea';
import { QUERIES } from '../../constants.ts';
import { useToast } from '../Toast';
import { FormGroup } from '../FormGroup';
import { InputText } from '../InputText';
import { useId } from 'react';

interface FormInput {
  firstName: string;
  lastName: string;
  emailAddress: string;
  queryType: 'general-enquiry' | 'support-request';
  message: string;
  consent: boolean;
}

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const firstNameId = useId();
  const lastNameId = useId();
  const emailAddressId = useId();
  const queryTypeId = useId();
  const messageId = useId();

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
        <TwoColumns>
          <FormGroup $error={errors.firstName}>
            <Label htmlFor={firstNameId}>First Name</Label>
            <InputText
              id={firstNameId}
              {...register('firstName', { required: 'This field is required' })}
            />
          </FormGroup>

          <FormGroup $error={errors.lastName}>
            <Label htmlFor={lastNameId}>Last Name</Label>
            <InputText
              id={lastNameId}
              {...register('lastName', { required: 'This field is required' })}
            />
          </FormGroup>
        </TwoColumns>

        <FormGroup $error={errors.emailAddress}>
          <Label htmlFor={emailAddressId}>Email Address</Label>
          <InputText
            id={emailAddressId}
            {...register('emailAddress', {
              required: 'Please enter a valid email address',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email address',
              },
            })}
          />
        </FormGroup>

        <FormGroup $error={errors.queryType} $extraSpace>
          <Label as="p" htmlFor={queryTypeId}>
            Query Type
          </Label>
          <TwoColumns $smallRowGap>
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
          </TwoColumns>
        </FormGroup>

        <FormGroup $error={errors.message}>
          <Label htmlFor={messageId}>Message</Label>
          <FieldTextArea
            id={messageId}
            {...register('message', { required: 'This field is required' })}
          />
        </FormGroup>
      </Fields>

      <ConsentWrapper>
        <FormGroup $error={errors.consent}>
          <InputChecked
            label="I consent to being contacted by the team"
            {...register('consent', {
              required:
                'To submit this form, please consent to being contacted',
            })}
          />
        </FormGroup>
      </ConsentWrapper>
      <Button type="submit">Submit</Button>
    </form>
  );
}

const Fields = styled.div`
  display: grid;
  row-gap: var(--spacing-300);
  column-gap: var(--spacing-200);
`;

const TwoColumns = styled(Fields)<{ $smallRowGap?: boolean }>`
  ${({ $smallRowGap }) => $smallRowGap && 'row-gap: var(--spacing-200);'}
  grid-template-columns: 1fr;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
  }
`;

const ConsentWrapper = styled.div`
  margin-top: var(--spacing-500);
  margin-bottom: var(--spacing-500);
`;
