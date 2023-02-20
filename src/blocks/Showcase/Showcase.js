import * as React from 'react'
import styled from '@emotion/styled'
import { showcaseMen } from 'api/mock'
import ShowcaseItem from 'components/ShowcaseItem'

const ShowcaseLayout = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  padding: '2rem 5rem',
}))

function Showcase() {
  return (
    <section style={{ position: 'relative' }}>
      <ShowcaseLayout>
        {showcaseMen.map((item, idx) => (
          <ShowcaseItem {...item} key={idx} />
        ))}
      </ShowcaseLayout>
    </section>
  )
}

export default Showcase
