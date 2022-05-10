const getData = async (API) => {
  const response = await fetch(API);
  const data = await response.json();
  
  const dataRes = data.slice(18,39);

  return dataRes;
}

export default getData;