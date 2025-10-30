import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { Link } from "react-router-dom"
import { EMAIL_RULE, EMAIL_RULE_MESSAGE, FIELD_REQUIRED_MESSAGE, PASSWORD_CONFIRMATION_MESSAGE, PASSWORD_RULE, PASSWORD_RULE_MESSAGE } from "~/utils/validation"
import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"
type FormValues = {
  userEmail: string
  passWord: string
  passWord_confirm: string
}

function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<FormValues>()
  const isPassWord = watch('passWord')
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('🚀 ~ onSubmit ~ data:', data)
    reset()
  }
  console.log('error', errors)
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@gmail.com"
                  {...register("userEmail",
                    {
                      required: FIELD_REQUIRED_MESSAGE,
                      pattern: {
                        value: EMAIL_RULE,
                        message: EMAIL_RULE_MESSAGE
                      }
                    })}
                />
                <p className="text-red-500 text-custom">{errors.userEmail?.message}</p>
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      {...register("passWord",
                        {
                          required: FIELD_REQUIRED_MESSAGE,
                          pattern: {
                            value: PASSWORD_RULE,
                            message: PASSWORD_RULE_MESSAGE
                          }
                        })}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      id="confirm-password"
                      disabled={!isPassWord ? true : false}
                      type="password"
                      {...register("passWord_confirm",
                        {
                          validate: (value: string) => {
                            if (value === watch('passWord')) {
                              return true
                            }
                            return PASSWORD_CONFIRMATION_MESSAGE
                          }
                        })}
                    />
                  </Field>
                </Field>
                <p className="text-red-500 text-custom">
                  {
                    (errors?.passWord) ? errors.passWord.message :
                      (errors?.passWord_confirm) ? errors.passWord_confirm.message : null
                  }
                </p>
              </Field>
              <Field>
                <Button type="submit">Create Account</Button>
                <FieldDescription className="text-center">
                  Already have an account? <Link to='/login'>Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignupForm
