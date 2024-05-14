import styled from 'styled-components';

export const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 2%;
  background-color: red;

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

  .buttons {
    border-radius: 50px;
    margin: 10px;
    button {
      padding: 5px 30px 5px 30px;
      outline: none;
      font-size: 1.2rem;
      cursor: pointer;
    }
    button:hover {
      background-color: #92d6ec;
    }
  }

  .img-info:hover {
    transform: rotate(3deg);
    opacity: 0.8;
  }
`;
