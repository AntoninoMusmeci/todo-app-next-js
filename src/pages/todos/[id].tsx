import React from 'react'
import { useRouter } from 'next/router'
type Props = {}

export default function Todo({}: Props) {
    const router = useRouter()
    const { id } = router.query
    return (

    <div> This is a todo page {id} </div>
  )
}