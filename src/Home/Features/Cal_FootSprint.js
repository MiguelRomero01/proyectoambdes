
export const Calculate_FootSprint = (data_FootSprint) => {
     let finalResult = 0;

     Object.values(data_FootSprint).forEach(value => {
          finalResult += value;
     })

     return finalResult;
}