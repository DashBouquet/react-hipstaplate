import * as React from 'react';
const styled = require('styled-components').default;

interface IProps {
  total: number;
  page: number;
  prev: number[];
  next: number[];
  onPage: () => void;
  onStart: () => void;
  onEnd: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Pager = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Current = styled.span`
  margin: 0 5px;
  padding: 3px 5px;
`;

const NextPrevDiv = styled.div`
  display: inherit;
`;

const NextPrev = styled.span`
  margin: 0 1px;
  cursor: pointer;
  padding: 3px 5px;
  background: black;
  color: white;
  border-radius: 5px;
`;

const MarvelPager: React.StatelessComponent<IProps> = (props): JSX.Element => (
  <Wrapper>
    <Pager>
      {
        props.page > 1 &&
        <NextPrevDiv>
          <NextPrev onClick={props.onStart}>to start </NextPrev>
          <NextPrev onClick={props.onPrev}>prev</NextPrev>
        </NextPrevDiv>
      }
      {
        props.prev.map((num, index) => (
          <NextPrev
            key={index}
            data-page={num}
            onClick={props.onPage}
          >
            {num}
          </NextPrev>
          )
        )
      }
      {props.total > 1 && <Current>{props.page}</Current>}
      {
        props.next.map((num, index) => (
          <NextPrev
            key={index}
            data-page={num}
            onClick={props.onPage}
          >
            {num}
          </NextPrev>
        ))
      }
      {
        props.page < props.total &&
        <NextPrevDiv>
          <NextPrev onClick={props.onNext}>next </NextPrev>
          <NextPrev onClick={props.onEnd}>to end</NextPrev>
        </NextPrevDiv>
      }
    </Pager>
    <div>Total pages: {props.total}</div>
  </Wrapper>
);

export { MarvelPager };
