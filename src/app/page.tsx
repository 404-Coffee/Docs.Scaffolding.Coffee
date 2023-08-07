import { Metadata, NextPage } from 'next'

import FormNewsLetter from '@/components/form/Newsletter'

export const metadata: Metadata = {
  title: 'Coming Soon - Scaffolding.Coffee',
}

const Page: NextPage = (): JSX.Element => (
  <div className="container flex flex-col items-center justify-center gap-2">
    <h1 className="text-center text-5xl font-semibold">
      Coming <span className="text-ochre-500">Soon</span>
    </h1>
    <p className="relative z-10 text-center text-xl">
      <span className="text-ochre-500">Scaffolding.Coffee</span> is currently
      under development.
    </p>
    <p className="mt-8 text-center lg:max-w-2xl">
      In the meantime, you can sign up to be notified when we launch. <br />
      <span className="text-sm">
        We promise to only email you when we launch and nothing else.
      </span>
    </p>

    <FormNewsLetter className="mt-8" />
  </div>
)

export default Page
