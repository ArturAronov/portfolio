export const DivCreator=function(){
  const determineSize=Math.floor(Math.random()*(280-191)+191);
  const result={
    width: determineSize,
  };

  return result;
};