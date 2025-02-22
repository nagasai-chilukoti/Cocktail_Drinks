import React, { useState } from 'react';

const Index = () => {
  const a = [
    {
      name: 'akon',
      age: 30,
      sal: '1lakh',
      id: 'ghhfjvh',
    },
    {
      name: 'akon',
      age: 250,
      sal: '1.2lakh',
      id: 'gnbfsnb',
    },
    {
      name: 'bkon',
      age: 50,
      sal: '7lakh',
      id: 'vmnzvfhfv',
    },
  ];

  const [data, setData] = useState(a);

  // Handle delete or filter
  const detail = (cid) => {
    const filterData = data.filter((eachItem) => eachItem.id !== cid);
    setData(filterData);
  };

  return (
    <div>
      <ul>
        {data.map((eachobj, index) => {
          const { name, age, sal, id } = eachobj;
          return <Print1 key={id} name={name} age={age} sal={sal} id={id} detail={detail} />;
        })}
      </ul>
    </div>
  );
};

const Print1 = ({ id, name, age, sal, detail }) => {
  return (
    <li>
      <h2>{name}</h2>
      <h3>Age: {age}</h3>
      <h3>Salary: {sal}</h3>
      {/* <h3>ID: {id}</h3> */}
      <button onClick={() => detail(id)}>Delete</button>
    </li>
  );
};

export default Index;
