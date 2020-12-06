import styled from 'styled-components'

export const StyledMessage = styled.article`
  /***
  .Message
  ***/ 
  &.Message__sampled {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  &.Message__sampled:hover {
    cursor: pointer;
    background: #fafafa;
  }
  &.Message__sampled.Message__selected {
    background: #efefef;
  }
  &.Message__detailed{
    padding: 50px;
  }
  /***
  .Message-title 
  ***/
  &.Message__sampled .Message-title {
    font-size: 1em;
    margin: 0;
  }
  &.Message__detailed .Message-title {
    font-size: 1.5em;
    margin: 0 0 0.5em 0;
  }
  /***
  .Message-author 
  ***/
  & .Message-author {
    margin: 0;
    font-size: 0.85em;
    font-weight: normal;
  }
  &.Message__detailed .Message-author {
    margin: 0 0 4em 0;
  }
  /***
  .Message-body 
  ***/
  & .Message-body {
    margin: 0;
    font-size: 0.85em;
  }
  &.Message__sampled .Message-body {
    color: #aaa;
  }
  &.Message__detailed .Message-body {
    white-space: pre-line;
    margin: 0 0 4em 0;
  }
  /***
  .Message-date 
  ***/
  & .Message-date {
    margin: 0;
    font-size: 0.85em;
    color: #aaa;
  }
  &.Message__sampled .Message-date {
    float:right;
  }
  &.Message__detailed .Message-date {
    color: #999;
    text-align: right;
    margin: 0 0 2em 0;
    border-bottom: 1px solid #ccc;
  }
`
