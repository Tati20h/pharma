import React from 'react'

export const Cards = () => {
  return (
    <>
    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by Name"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
    </>
  )
}
