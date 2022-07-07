import styled from "styled-components";

const ProductListProduct = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImg = styled.img`
  width: 50px;
  padding-right: 10px;
`;

const ProductListEditButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

export { ProductListProduct, ProductImg, ProductListEditButton };
