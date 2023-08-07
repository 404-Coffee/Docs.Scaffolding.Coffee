import Image from 'next/image'

const Navigation: React.FC = (): JSX.Element => (
  <div className="container flex w-full items-center justify-center py-4 md:py-6">
    <Image
      src="/scaffolding.coffee.svg"
      alt="Scaffolding.Coffee Logo"
      width={563}
      height={257}
      className="max-h-16"
    />
  </div>
)

export default Navigation
