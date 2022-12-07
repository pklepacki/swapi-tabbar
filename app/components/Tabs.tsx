import { NavLink, useLoaderData, useLocation } from '@remix-run/react'
import { motion } from 'framer-motion'

import { css, styled } from '~/styles/stiches.config'
import { capitalize } from '~/utils'

import type { ExtendedAPIResponse } from '~/types'

type LoaderData = {
  tabsData: ExtendedAPIResponse[]
}

const Wrapper = styled('div', {
  minWidth: 360,
})

const TabsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  borderBottom: 'solid 2px $gray300',
})

const TabLink = css({
  position: 'relative',
  padding: '20px 5px',
  margin: '0 15px',
  display: 'block',
  variants: {
    variant: {
      active: {
        color: '$purple600',
      },
      inactive: {
        color: '$gray600',
      },
    },
  },
})

const TabCount = styled('span', {
  marginLeft: 10,
  padding: 5,
  variants: {
    variant: {
      active: {
        backgroundColor: '$purple300',
        borderRadius: 10,
      },
      inactive: {
        backgroundColor: '$gray300',
        borderRadius: 10,
      },
    },
  },
})

const Underline = styled(motion.div, {
  position: 'absolute',
  width: '100%',
  height: 2,
  bottom: '-2px',
  left: 0,
  background: '$purple600',
})

const ItemsList = styled('ul', {})
const ListItem = styled('li', {
  margin: 20,
  color: '$gray600',
})

export const Tabs = () => {
  const { tabsData } = useLoaderData<LoaderData>()
  const { pathname } = useLocation()

  const locationKey = pathname.slice(1)
  const activeTab = tabsData.find((tab) => tab.key === locationKey)

  return (
    <Wrapper>
      <TabsWrapper>
        {tabsData.map((tab) => (
          <NavLink /* as={NavLink} */
            to={`/${tab.key}`}
            key={tab.key}
            className={({ isActive }: { isActive: boolean }) =>
              TabLink({ variant: isActive ? 'active' : 'inactive' })
            }
          >
            {({ isActive }) => (
              <>
                {capitalize(tab.key)}
                <TabCount variant={isActive ? 'active' : 'inactive'}>
                  {tab.count}
                </TabCount>
                {isActive && <Underline layoutId="underline"></Underline>}
              </>
            )}
          </NavLink>
        ))}
      </TabsWrapper>

      <ItemsList>
        {activeTab &&
          activeTab.results.map((entry) => (
            <ListItem key={entry.url}>
              {/* @ts-ignore-next-line */}
              {entry.name || entry.title || 'Unknown'}
            </ListItem>
          ))}
      </ItemsList>
    </Wrapper>
  )
}
