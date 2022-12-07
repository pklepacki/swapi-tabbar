import { Link } from '@remix-run/react'

import { TABS_KEYS } from '~/consts'

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to SWAPI Tabs</h1>

      <Link to={`${TABS_KEYS[0] || '/'}`}>View the Tabs</Link>
    </div>
  )
}
