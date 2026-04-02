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

export function SignUp() {
    return (
    <div className="flex min-h-svh p-6 items-center justify-center">
      <div className="max-w-md min-w-sm p-4 leading-loose">
        <div className="w-full flex flex-col gap-4 items-center">
          <h1 className="font-medium text-lg">Sign Up to Postself</h1>
          <FieldSet className="w-full max-w-xs">
            <FieldGroup className="gap-5">
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <FieldDescription>
                  What should we call you? This doesn’t have to be unique.
                </FieldDescription>
                <Input id="name" type="text" placeholder="Postself Journal" />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <FieldDescription>
                  Used only for signing in.
                </FieldDescription>
                <Input id="email" type="email" placeholder="postselfjournal@mail.com" />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
                <Input id="password" type="password" placeholder="••••••••" />
              </Field>
              <Field>
                <Button type="button" variant="outline">
                  Sign Up
                </Button>
                <FieldDescription>
                  Already have an account?
                  <Link to={'/'} className="p-1 hover:font-semibold">Sign In here</Link>

                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>

        </div>
      </div>
    </div>
  ) 
}