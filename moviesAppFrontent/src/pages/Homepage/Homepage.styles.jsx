import styled from 'styled-components';

export const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: white;

  .search-bar {
    margin: 20px;
    input {
      padding: 10px 40px;
      border-radius: 20px;
      outline: none;
      border: 2px solid purple;
    }
  }

  .sort-buttons {
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
      height: 30px;
      padding: 0px 20px;
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

  .center {
    display: flex;
    justify-content: center;
  }

  ul {
    width: 80%;
    background-color: white;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 50px; /* Zwiększenie odstępu między elementami */

    li {
      list-style: none;
      flex-grow: 1; /* Elementy będą się równomiernie rozciągać, aby wypełnić dostępną przestrzeń */
      max-width: calc(
        20% - 40px
      ); /* Maksymalna szerokość każdego elementu, uwzględniając odstępy między nimi */
      margin-bottom: 20px; /* Odstęp między rzędami */

      .img-info {
        position: absolute;
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

        .buy-now {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 40px;
          padding: 5px 10px;
          background-color: #d7dbe8;
          border-radius: 5px;
          font-size: 1.5rem;
          font-weight: bold;
          display: flex;
          text-transform: uppercase;
          justify-content: center;
          opacity: 0;
          transition: 0.3s;
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

  .buttons {
    border-radius: 50px;
    margin: 10px;
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
      height: 30px;
      padding: 0px 20px;
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
    button:hover {
      background-color: #92d6ec;
    }
  }

  .img-info:hover {
    transform: rotate(3deg);
    opacity: 0.8;
  }

  .img-info:hover .buy-now {
    opacity: 1;
  }
`;
