import React from 'react'
import styled from 'styled-components'
import Bicycle from '../icons/Bicycle'
import Lock from '../icons/Lock'

const StyledListItem = styled('li')`
  border-radius: 0.25rem;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0.75rem 0;
  padding: 0.5rem 2rem;
  box-shadow: 0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
`

const StyledAvailabilityInfoContainer = styled('div')`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1.5rem;
`

const StyledAvailabilityInfo = styled('span')`
  display: flex;
  flex-direction: column;
  text-align: center;
`

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  name: string
  bicycles: number
  docks: number
}

function ListItem(props: ListItemProps) {
  const { name, bicycles, docks } = props
  return (
    <StyledListItem>
      <h2>{name}</h2>
      <StyledAvailabilityInfoContainer>
        <StyledAvailabilityInfo>
          <Bicycle />
          {bicycles}
        </StyledAvailabilityInfo>
        <StyledAvailabilityInfo>
          <Lock />
          {docks}
        </StyledAvailabilityInfo>
      </StyledAvailabilityInfoContainer>
    </StyledListItem>
  )
}

export default ListItem
