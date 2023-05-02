import React from 'react'

export const CustomersSection = () => {
  return (
    <section className="mt-24 flex flex-col items-center px-page">
      <p className="text-center">
        Powering the world&apos;s best product engineers.
        <br className="hidden tablet:block" />
        <span className="tablet:hidden"> </span>
        <span className="text-slate-50">From next-gen startups to established enterprises.</span>
      </p>
      <div className="mt-48 hidden grid-cols-6 gap-48 tablet:grid">
        {[...Array(12)].map((_, index) => (
          <div key={`client-list-${index}`} className="flex justify-center">
            <div
              key={`client-list-${index}`}
              className="border-gradient animate-gradient h-48 w-144 rounded-sm"
            />
          </div>
        ))}
      </div>
      <div className="mt-48 grid w-full grid-cols-2 gap-48 tablet:hidden">
        {[...Array(6)].map((_, index) => (
          <div key={`client-list-${index}`} className="flex justify-center">
            <div className="border-gradient animate-gradient h-48 w-144 rounded-sm" />
          </div>
        ))}
      </div>
    </section>
  )
}
