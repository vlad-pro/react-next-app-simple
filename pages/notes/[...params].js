// This is a catch all type of page that will get all of ../1/2/3/4 type of pages

import React from 'react'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const { params }= router.query

  return (
    <h1>Note: {params} </h1>
  )
}