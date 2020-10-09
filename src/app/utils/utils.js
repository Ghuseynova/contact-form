const getFormValues = (dataArr) => {
  const valuesObj = {
    type: [],
    value: [],
  };

  if (dataArr !== undefined || dataArr.length !== 0) {
    dataArr.forEach((data) => {
      valuesObj.type.push(data.type.toLowerCase());
      valuesObj.value.push(data.value);
    });
  }

  return valuesObj;
};

const convertArrayToObject = (obj) => {
  const { type, value } = obj;
  const objArr = [];

  type.forEach((tItem, index) =>
    objArr.push({ type: tItem, value: value[index] })
  );

  return objArr;
};

export { getFormValues, convertArrayToObject };
