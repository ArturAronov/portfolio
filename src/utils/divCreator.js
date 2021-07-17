export const DivCreator=function(){
  const determineSize=Math.floor(Math.random()*(200-120)+120);
  const result={
    width: determineSize,
  };
  return result;
};