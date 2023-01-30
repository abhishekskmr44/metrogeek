const fs = require("fs");

const filename = process.argv[2];

fs.readFile(filename, "utf8", (err, data) => {
  if (err) throw err;
  var input = data.toString().split("\n");

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(" ");
  }
  
  let metrocardObj = {};

  let finalResult = {
    CENTRAL_STATION: { total: 0, discount: 0, summary: {} },
    AIRPORT: { total: 0, discount: 0, summary: {} },
  };

  let completeTrip = [];

  input.forEach((element) => {
    if (element[0] == "BALANCE") {
      metrocardObj[element[1]] = element[2];
    } else if (element[0] == "CHECK_IN") {
    
    
    
      // calculation for the ADULTS

      if (element[2] == "ADULT") {
        if (completeTrip.indexOf(element[1]) != -1) {
          if (metrocardObj[element[1]] >= 100) {
            finalResult[element[3]]["total"] = finalResult[element[3]]["total"] + 100;
            finalResult[element[3]]["discount"] = finalResult[element[3]]["discount"] + 100;

            finalResult[element[3]]["summary"][element[2]] == undefined
              ? (finalResult[element[3]]["summary"][element[2]] = 1)
              : finalResult[element[3]]["summary"][element[2]]++;

            metrocardObj[element[1]] = metrocardObj[element[1]] - 100;
            completeTrip.splice(completeTrip.indexOf(element[1]), 1);
          } else {
            let amtleft = 100 - metrocardObj[element[1]];
            let surcharge = amtleft * 0.02;

            finalResult[element[3]]["total"] = finalResult[element[3]]["total"] + 100 + surcharge;
            finalResult[element[3]]["discount"] = finalResult[element[3]]["discount"] + 100;

            finalResult[element[3]]["summary"][element[2]] == undefined
              ? (finalResult[element[3]]["summary"][element[2]] = 1)
              : finalResult[element[3]]["summary"][element[2]]++;

            metrocardObj[element[1]] = 0;
            completeTrip.splice(completeTrip.indexOf(element[1]), 1);
          }
        } else {
          if (metrocardObj[element[1]] >= 200) {
            finalResult[element[3]]["total"] = finalResult[element[3]]["total"] + 200;

            finalResult[element[3]]["summary"][element[2]] == undefined
              ? (finalResult[element[3]]["summary"][element[2]] = 1)
              : finalResult[element[3]]["summary"][element[2]]++;

            metrocardObj[element[1]] = metrocardObj[element[1]] - 200;
            completeTrip.push(element[1]);
          } else {
            let amtleft = 200 - metrocardObj[element[1]];
            let surcharge = amtleft * 0.02;

            finalResult[element[3]]["total"] = finalResult[element[3]]["total"] + 200 + surcharge;

            finalResult[element[3]]["summary"][element[2]] == undefined
              ? (finalResult[element[3]]["summary"][element[2]] = 1)
              : finalResult[element[3]]["summary"][element[2]]++;

            metrocardObj[element[1]] = 0;
            completeTrip.push(element[1]);
          }
        }
      }

      // calculation for the SENIOR_CITIZENS
      else if (element[2] == "SENIOR_CITIZEN") {
        if (completeTrip.indexOf(element[1]) != -1) {
          if (metrocardObj[element[1]] >= 50) {
            finalResult[element[3]]["total"] = finalResult[element[3]]["total"] + 50;
            finalResult[element[3]]["discount"] = finalResult[element[3]]["discount"] + 50;

            finalResult[element[3]]["summary"][element[2]] == undefined
              ? (finalResult[element[3]]["summary"][element[2]] = 1)
              : finalResult[element[3]]["summary"][element[2]]++;

            metrocardObj[element[1]] = metrocardObj[element[1]] - 50;
            completeTrip.splice(completeTrip.indexOf(element[1]), 1);
          } else {
            let amtleft = 50 - metrocardObj[element[1]];
            let surcharge = amtleft * 0.02;

            finalResult[element[3]]["total"] = finalResult[element[3]]["total"] + 50 + surcharge;
            finalResult[element[3]]["discount"] = finalResult[element[3]]["discount"] + 50;

            finalResult[element[3]]["summary"][element[2]] == undefined
              ? (finalResult[element[3]]["summary"][element[2]] = 1)
              : finalResult[element[3]]["summary"][element[2]]++;

            metrocardObj[element[1]] = 0;
            completeTrip.splice(completeTrip.indexOf(element[1]), 1);
          }
        } else {
          if (metrocardObj[element[1]] >= 100) {
            finalResult[element[3]]["total"] = finalResult[element[3]]["total"] + 100;

            finalResult[element[3]]["summary"][element[2]] == undefined
              ? (finalResult[element[3]]["summary"][element[2]] = 1)
              : finalResult[element[3]]["summary"][element[2]]++;

            metrocardObj[element[1]] = metrocardObj[element[1]] - 100;
            completeTrip.push(element[1]);
          } else {
            let amtleft = 100 - metrocardObj[element[1]];
            let surcharge = amtleft * 0.02;

            finalResult[element[3]]["total"] = finalResult[element[3]]["total"] + 100 + surcharge;

            finalResult[element[3]]["summary"][element[2]] == undefined
              ? (finalResult[element[3]]["summary"][element[2]] = 1)
              : finalResult[element[3]]["summary"][element[2]]++;

            metrocardObj[element[1]] = 0;
            completeTrip.push(element[1]);
          }
        }
      }


      // Calculation for the KIDS
      else if (element[2] == "KID") {
        if (completeTrip.indexOf(element[1]) != -1) {
          if (metrocardObj[element[1]] >= 25) {
            finalResult[element[3]]["total"] = finalResult[element[3]]["total"] + 25;
            finalResult[element[3]]["discount"] = finalResult[element[3]]["discount"] + 25;

            finalResult[element[3]]["summary"][element[2]] == undefined
              ? (finalResult[element[3]]["summary"][element[2]] = 1)
              : finalResult[element[3]]["summary"][element[2]]++;

            metrocardObj[element[1]] = metrocardObj[element[1]] - 25;
            completeTrip.splice(completeTrip.indexOf(element[1]), 1);
          } else {
            let amtleft = 25 - metrocardObj[element[1]];
            let surcharge = amtleft * 0.02;

            finalResult[element[3]]["total"] = finalResult[element[3]]["total"] + 25 + surcharge;
            finalResult[element[3]]["discount"] = finalResult[element[3]]["discount"] + 25;

            finalResult[element[3]]["summary"][element[2]] == undefined
              ? (finalResult[element[3]]["summary"][element[2]] = 1)
              : finalResult[element[3]]["summary"][element[2]]++;

            metrocardObj[element[1]] = 0;
            completeTrip.splice(completeTrip.indexOf(element[1]), 1);
          }
        } else {
          if (metrocardObj[element[1]] >= 50) {
            finalResult[element[3]]["total"] = finalResult[element[3]]["total"] + 50;

            finalResult[element[3]]["summary"][element[2]] == undefined
              ? (finalResult[element[3]]["summary"][element[2]] = 1)
              : finalResult[element[3]]["summary"][element[2]]++;

            metrocardObj[element[1]] = metrocardObj[element[1]] - 50;
            completeTrip.push(element[1]);
          } else {
            let amtleft = 50 - metrocardObj[element[1]];
            let surcharge = amtleft * 0.02;

            finalResult[element[3]]["total"] = finalResult[element[3]]["total"] + 50 + surcharge;

            finalResult[element[3]]["summary"][element[2]] == undefined
              ? (finalResult[element[3]]["summary"][element[2]] = 1)
              : finalResult[element[3]]["summary"][element[2]]++;

            metrocardObj[element[1]] = 0;
            completeTrip.push(element[1]);
          }
        }
      }
    } else if ("OUTPUT_SUMMARY") {
      for (let x in finalResult) {
        console.log("TOTAL_FAIR_COLLECTION", x, finalResult[x].total, finalResult[x].discount);
        console.log("PASSENGER_TYPE_SUMMARY");

        let array = Object.entries(finalResult[x]["summary"]);
        array.sort((a, b) => {
          if (a[1] > b[1]) {
            return -1;
          } else if (a[1] < b[1]) {
            return 1;
          } else {
            if (a[0] < b[0]) {
              return -1;
            } else {
              return 1;
            }
          }
        });

        for (let i = 0; i < array.length; i++) {
          console.log(array[i][0], array[i][1]);
        }
      }
    }
  });
});
