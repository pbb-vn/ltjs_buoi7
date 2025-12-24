console.log("thẻ tích: " + theTich1(4, 2, 3)); 

function theTich1(dai,rong , cao) {
    if (dai<= 0 || rong<= 0 || cao<= 0 || isNaN(dai*rong*cao)) {
        return "chỉ số không hợp lệ!";
    };
    return dai*rong*cao;
};



// arrow //
let theTich2 = (dai,rong, cao) =>
(dai > 0 && rong > 0 && cao > 0) ? dai * rong * cao : "chỉ số không hợp lệ!";

console.log("thẻ tích: " + theTich2(6, 3, 4));