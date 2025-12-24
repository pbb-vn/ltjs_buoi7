// chuc nang nhap sinh vien //
let nhapSinhVien = () => {
    let ten = prompt("nhập họ tên:");
    let tuoi = prompt("nhập tuổi:");
    let diaChi = prompt("nhập địa chỉ:");
    let sdt = prompt("nhập số điên thoại:");
    
    return {ten,tuoi, diaChi,sdt};
};

// chuc nang xay dung chuoi //
let xayDungChuoi = (sv) => 
  `tên: ${sv.ten}, tuổi: ${sv.tuoi}, địa chỉ: ${sv.diaChi}, sdt: ${sv.sdt}`;

// in danh sach sv //
let inDanhSach = (ds) =>
  ds.forEach(sv => 
    console.log(xayDungChuoi(sv)));

// sap xep danh sach //
let sapXepDanhSach = (ds) => 
  [...ds].sort((a, b) =>
    a.ten.localeCompare(b.ten));

// tim sv //
let timSV = (ds, sdt) => 
    ds.find(sv =>
      sv.sdt === sdt) || "không tìm thấy sinh viên";

// loc sv //
let locSV = (ds, tuoiCanTim) => 
    ds.filter(sv =>
      sv.tuoi === tuoiCanTim);



//test//
let danhSach = [{ ten: "Cường", tuoi: 20, diaChi: "Hà Nội", sdt: "0123" },{ ten: "An", tuoi: 22, diaChi: "Đà Nẵng", sdt: "4567" },{ ten: "Bình", tuoi: 20, diaChi: "TP.HCM", sdt: "7890" }];

console.log("danh sách ban đầu");
inDanhSach(danhSach);

console.log("\ndanh sach sắp xếp");
const dsSapXep = sapXepDanhSach(danhSach);
inDanhSach(dsSapXep);

console.log("\ntìm sv có sdt 4567");
console.log(timSV(danhSach, "4567"));

console.log("\nlọc sv 20 tuổi");
const dsTuoi20 = locSV(danhSach, 20);
inDanhSach(dsTuoi20);