function laiKep1(vonGoc, laiSuat = 0.05, soNam = 1) {
    let tongTien = vonGoc * Math.pow((1 + laiSuat), soNam);
    return tongTien.toFixed(2);
}

console.log("tổng tiền: " + laiKep1(500));


// arrow //
let laiKep2 = (vonGoc, laiSuat = 0.05, soNam = 1)=> 
(vonGoc * (1 + laiSuat) ** soNam).toFixed(2);

console.log("tổng tiền(arrow): " + laiKep2(500)); 