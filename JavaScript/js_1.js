const cafe = {
    name: "はるちゃんカフェ",
    businessHours: {
        opening: "10:00(AM)",
        closing: "09:00(PM)"
    },
    menus:["ヤギのミルク", "ビーフジャーキー","無添加クッキー"]
};

console.log(`店名：${cafe.name}`);
console.log(`営業時間：${cafe.businessHours.opening}〜${cafe.businessHours.closing}`);
console.log("おすすめメニュー")
for (let i =0; i< cafe.menus.length; i ++) {
    console.log(cafe.menus);
}