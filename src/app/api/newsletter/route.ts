import { NextRequest, NextResponse } from 'next/server'

type ResSuccess = {
  status: 200
  data: string
}
type ResError = {
  status: 400 | 500 | 404 | 403 | 401
  error: string
}
type Response = (ResSuccess | ResError) & {
  message: string
}

export const POST = async (
  req: NextRequest,
): Promise<NextResponse<Response>> => {
  try {
    if (!req) {
      throw new Error('Request is undefined')
    }
    const { email } = (await req.json()) ?? {}
    const emailRegex = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
    )
    if (!emailRegex.test(email)) {
      throw new Error('The provided email address is not valid')
    }

    return NextResponse.json(
      {
        status: 200,
        data: email,
        message: 'Success',
      },
      { status: 200 },
    )
  } catch (error: unknown) {
    return NextResponse.json(
      {
        status: 500,
        message: 'Internal Server Error',
        error: error instanceof Error ? error.message : 'Unknown Error',
      },
      { status: 500 },
    )
  }
}
