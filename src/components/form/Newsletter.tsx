'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

interface Props {
  className?: string
}
interface Form {
  email: string
}
interface State {
  pending: boolean
  success: boolean
  error: string | null
  data: Form
}

const FormNewsLetter: React.FC<Props> = ({ className = '' }): JSX.Element => {
  const [state, setState] = useState<State>({
    pending: true,
    success: false,
    error: null,
    data: {
      email: '',
    },
  })

  const isValidEmail = useMemo(
    () =>
      state.data.email?.match(
        // eslint-disable-next-line no-control-regex
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/u,
      ) !== null,
    [state.data.email],
  )

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault()
      setState((prevState) => ({
        ...prevState,
        pending: true,
      }))

      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(state.data),
        })
          .then((response) => response.json())
          .catch((error) => {
            console.error('Error:', error)
          })

        if (response?.error) {
          setState((prevState) => ({
            ...prevState,
            pending: false,
            error: response.error,
          }))
        } else {
          setState((prevState) => ({
            ...prevState,
            pending: false,
            success: true,
            error: null,
            data: {
              email: state.data.email,
            },
          }))
          localStorage.setItem(
            '404.coffee newsletter subscription',
            state.data.email,
          )
        }
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          pending: false,
          error: (error as Error).message,
        }))
      }
    },
    [state.data],
  )

  useEffect(() => {
    const localStorageKey = '404.coffee newsletter subscription'
    const localStorageValue = localStorage.getItem(localStorageKey)
    if (localStorageValue !== null) {
      if (
        localStorageValue?.match(
          // eslint-disable-next-line no-control-regex
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/u,
        ) !== null
      ) {
        setState((prevState) => ({
          ...prevState,
          success: true,
          error: null,
          data: {
            email: localStorageValue,
          },
        }))
      }
    } else {
      setState((prevState) => ({
        ...prevState,
        pending: false,
      }))
    }
  }, [])

  return (
    <>
      <form
        className={`grid w-full grid-cols-1 grid-rows-2 gap-4 md:max-w-2xl md:grid-cols-4 lg:grid-rows-1 ${className}`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Email Address"
          className={`col-span-1 w-full rounded-md border bg-transparent p-2 text-sm font-light outline-none transition-all duration-300 ease-in-out md:col-span-3 ${
            isValidEmail ? 'border-ochre-500 duration-700' : 'border-dune-700'
          }`}
          value={state.data?.email}
          onChange={(event): void => {
            setState((prevState) => ({
              ...prevState,
              data: {
                ...prevState.data,
                email: event.target.value,
              },
            }))
          }}
          disabled={state.success || state.pending}
        />
        <button
          type="submit"
          className={`col-span-1 w-full cursor-pointer rounded-md border border-dune-700 bg-transparent p-2 text-sm font-medium outline-none transition-all duration-300 ease-in-out hover:bg-ochre-500 hover:text-dune-700 disabled:cursor-not-allowed lg:col-span-1 ${
            isValidEmail
              ? 'border-ochre-500 text-ochre-500 duration-700'
              : 'border-dune-700'
          }`}
          disabled={state.pending || !isValidEmail || state.success}
        >
          Subscribe
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        {state.error !== null ? (
          state.error
        ) : state.success ? (
          <>
            Thank you for subscribing to 404.coffee launch notification.
            <br /> We&apos;ll send you an email when we launch.
          </>
        ) : (
          '\u00A0'
        )}
      </p>
    </>
  )
}

export default FormNewsLetter
