import styled from 'styled-components';

export const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-top: 2%;

  ul {
    display: flex;
    width: 80%;
    background-color: white;
    flex-wrap: wrap;
    gap: 3%;

    li {
      list-style: none;
      flex-basis: 20%;
      border-radius: 30px;

      .img-info {
        transition: 0.3s;
        border-radius: 30px;
        background-color: red;
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        cursor: pointer;

        img {
          border-radius: 10px;
          width: 100%;
        }

        .rating {
          background-color: white;
          padding: 13px;
          position: absolute;
          top: 3%;
          right: 4%;
          display: flex;
          gap: 16px;
          font-size: 1.1rem;
          color: #34bbe8;
          border-radius: 10px;
        }

        .price {
          background-color: #0f1117;
          padding: 13px;
          position: absolute;
          bottom: 3%;
          right: 4%;
          display: flex;
          gap: 16px;
          font-size: 1.1rem;
          color: #ffffff;
          border-radius: 10px;
          font-weight: 700;
        }
      }

      .info {
        margin-top: 10px;
        display: flex;
        flex-direction: column;

        .name {
          font-weight: bold;
          font-size: 1.5rem;
          line-height: 1;
        }

        .more-info {
          color: gray;
          display: flex;
          justify-content: space-between;

          .category {
            text-transform: capitalize;
          }
        }
      }
    }
  }

  .img-info:hover {
    transform: rotate(3deg);
    opacity: 0.5;
  }
`;
