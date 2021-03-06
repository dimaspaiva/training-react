import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 21px;
  padding: 0 15px;
  height: calc(100vh - 180px);
  flex: 0 0 320px;
  opacity: ${props => (props.done ? 0.675 : 1)};

  & + div {
    border-left: 1px solid rgba(30, 30, 30, 0.5);
  }

  header {
    display: felx;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    h2 {
      font-weight: 500;
      font-size: 18px;
      padding: 0 9px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 100%;
      background: #606060;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 15px;
  }
`;
