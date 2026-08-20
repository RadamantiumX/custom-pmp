export const mockStringData = '[{"name": "firstName", "path": "//path_1"}, {"name": "secondName", "path": "//path_2"}, {"name": "thirdName", "path": "//path_3"}]';
async function gettingData (data){
   const availableWs = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await JSON.parse(data).map((item) => {
   
    availableWs.push({
      name: item?.name,
      value: [item?.name]
    })
  });

  console.log(availableWs)
  return availableWs;
}


gettingData(mockStringData)