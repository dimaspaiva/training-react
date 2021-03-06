import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #909090;
  border-radius: 3px;
  margin-bottom: 15px;
  padding: 12px;

  box-shadow: 0 1px 6px 0 rgba(30, 30, 30, 0.3);
  border-top: 18px solid rgba(180, 180, 180, 0.3);
  cursor: grab;

  header {
    position: absolute;
    top: -30px;
    right: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 3px;
    margin-top: 5px;
  }

  ${props =>
    props.isDragging &&
    css`
      border: 3px dashed rgba(180, 180, 180, 0.15);
      padding-top: 30px;
      border-radius: 0;
      box-shadow: none;
      background: transparent;
      cursor: grabbing;

      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 1px;
  display: inline-block;
  background: ${props => props.color};
`;
