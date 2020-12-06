import styled from 'styled-components'

export const StyledApp = styled.div`
  & .App-header {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);
    position: fixed;
    width: 100%;
    background: #fff;
  }
  & .App-body {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 0 0 0;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);
  }
  & .App-body-section {
    flex-basis: 67%;
  }
  & .App-body-aside {
    flex-basis: 33%;
    max-height: ${props => window.innerHeight - 60}px;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }
    border-right: 1px solid #ddd;
  }
`
