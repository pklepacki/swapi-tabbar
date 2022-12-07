import { json } from '@remix-run/node'
import { Link, useCatch } from '@remix-run/react'

import { Tabs } from '~/components/Tabs'
import { TABS_KEYS } from '~/consts'
import { ExtendedAPIResponseArraySchema, TabsKeysSchema } from '~/schemas'
import { styled } from '~/styles/stiches.config'

import type { LoaderFunction } from '@remix-run/node'

const Main = styled('main', {
  display: 'flex',
  justifyContent: 'center',
})

export default function TabsPage() {
  return (
    <Main>
      <Tabs />
    </Main>
  )
}

export const CatchBoundary = () => {
  const { status, statusText } = useCatch()

  return (
    <main>
      <p>
        {status}: {statusText}
      </p>
      <Link to="/">Go back to Homepage</Link>
    </main>
  )
}

export const loader: LoaderFunction = async ({ params }) => {
  const parsedParamsKey = TabsKeysSchema.safeParse(params.tabKey)

  if (!parsedParamsKey.success) {
    throw json(
      {},
      {
        status: 404,
        statusText: 'Tab not found',
      }
    )
  }

  try {
    const res = await Promise.all(
      TABS_KEYS.map((key) => fetch(`https://swapi.dev/api/${key}`))
    )

    const data = await Promise.all(
      res.map(async (res, index) => {
        const json = await res.json()
        return { ...json, key: TABS_KEYS[index] }
      })
    )

    const parsedData = ExtendedAPIResponseArraySchema.safeParse(data)

    if (!parsedData.success) {
      console.error(parsedData.error)
      throw json(
        {},
        { status: 500, statusText: 'Invalid data coming from external API' }
      )
    }

    return json({ tabsData: parsedData.data })
  } catch (error) {
    throw json(
      {},
      // @ts-ignore-next-line
      { status: 500, statusText: error!.message || 'Internal server error' }
    )
  }
}
