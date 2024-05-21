import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  .recomended-movies {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .movies {
      display: flex;
      gap: 50px;
      .movie {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.3rem;
      }
    }
  }

  .alert {
    position: absolute;
    top: 10%;
    width: 500px;
    height: 100px;
  }

  .center {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 80%;
    gap: 30px;

    .grafic-info {
      display: flex;
      flex-direction: column;

      .rating {
        display: flex;
        justify-content: space-between;
        align-items: center;

        i {
          color: #ffc200;
          font-size: 2.5rem;
          margin-left: 20px;
        }

        p {
          font-size: 2.5rem;
          margin-right: 20px;
        }
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .name {
        font-size: 3rem;
      }

      .desc {
        width: 80%;
        font-size: 1.5rem;

        .see-more {
        }
        .see-more-btn {
          color: #5a6910;
          cursor: pointer;
        }
      }

      .buy {
        display: flex;
        gap: 20px;

        .price {
          font-size: 2.5rem;
        }
        button {
          margin: 0 5px;
          margin-bottom: 15px;
          display: inline-block;
          outline: 0;
          border: 0;
          cursor: pointer;
          color: #fff;
          font-weight: 500;
          border-radius: 4px;
          font-size: 14px;
          line-height: 30px;
          padding: 15px 50px;
          text-shadow: rgb(0 0 0 / 25%) 0px 3px 8px;
          background: linear-gradient(
            92.88deg,
            rgb(69, 94, 181) 9.16%,
            rgb(86, 67, 204) 43.89%,
            rgb(103, 63, 215) 64.72%
          );
          transition: all 0.5s ease 0s;
          :hover {
            box-shadow: rgb(80 63 205 / 50%) 0px 1px 40px;
            transition: all 0.1s ease 0s;
          }
        }
      }

      .more-info {
        span {
          color: gray;
        }
      }
    }
  }
`;
