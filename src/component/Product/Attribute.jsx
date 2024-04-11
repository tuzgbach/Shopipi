import React, { useState } from "react";

function Attribute({ attribute, type }) {
  const A = () => {
    console.log(attribute);
    switch (type) {
      case "CLOTHING":
        return <Clothing attribute={attribute} />;
      case "ELECTRONIC":
        return <Electronic attribute={attribute} />;
      case "TECH":
        return <Tech attribute={attribute} />;
      case "BOOK":
        return <Book attribute={attribute} />;
      case "FOOD":
        return <Food attribute={attribute} />;
      default:
        return <>concac</>;
    }
  };
  return <A />;
}

const Clothing = ({ attribute }) => {
  return (
    <>
      <div>Clothing</div>
    </>
  );
};

const Electronic = ({ attribute }) => {
  return (
    <>
      <div>quần áo</div>
    </>
  );
};

const Tech = ({ attribute }) => {
  return (
    <>
      <div>Điện thoaị</div>
    </>
  );
};

const Book = ({ attribute }) => {
  return (
    <>
      <div>Đắc nhận tâm</div>
    </>
  );
};

const Food = ({ attribute }) => {
  return (
    <>
      <div>Đồ ăn</div>
    </>
  );
};

export default Attribute;
