const getData = async (API) => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    const dataRes = data.slice(18,39);
    return dataRes;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

export default getData;
