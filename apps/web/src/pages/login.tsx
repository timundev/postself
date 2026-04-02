import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Button } from "@workspace/ui/components/button"
import { Link } from "react-router-dom"

export function Login() {
  return (
    <div className="flex min-h-svh p-6 items-center justify-center">
      <div className="max-w-md min-w-sm p-4 leading-loose">
        <div className="w-full flex flex-col gap-4 items-center">
          <h1 className="font-medium text-lg">Postself</h1>
          <FieldSet className="w-full max-w-xs">
            <FieldGroup className="gap-5">
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="postselfjournal@mail.com" />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" placeholder="••••••••" />
              </Field>
              <Field>
                <Button type="button" variant="outline">
                  Login
                </Button>
                <FieldDescription>
                  Don&#39;t have an account?
                  <Link to={'/sign-up'} className="p-1 hover:font-semibold">Sign Up here</Link>

                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>

        </div>
      </div>
    </div>
  )
}
