import { NextSeo, NextSeoProps } from 'next-seo'
import React, { FC } from 'react'

export const Seo: FC<NextSeoProps> = ({ title, description, ...rest }) => {
  return (
    <NextSeo title={title} description={description} openGraph={{ title, description }} {...rest} />
  )
}
