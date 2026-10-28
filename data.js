// ===== 여기만 수정하면 됩니다 =====
const SITE_TITLE = "🌍 내 세계여행 노트";

// 나라 정보 (lat,lng = 세계지도 핀 위치 / visited:true 면 지도에 표시 / map = 구글 내 지도 ID, 선택)
const COUNTRIES = [
 {id:"benin",n:"베냉 Benin",cap:"Porto-Novo",safe:1,order:0,first:"0000-00-00",us:"eVisa",kr:"eVisa/Arrival Visa",cur:"(XOF) CFA Franc = 585",lang:"French",volt:"220 Volt / 50 Hz",drive:"우측 차선",lat:6.37,lng:2.43,visited:false},
 {id:"peru",n:"페루 Peru",cap:"Lima",safe:2,order:1,first:"2019-03-02",us:"무비자",kr:"무비자 (90일)",cur:"(PEN) Sol = 380",lang:"Spanish",volt:"220 Volt / 60 Hz",drive:"우측 차선",lat:-12.05,lng:-77.04,visited:true,map:"1fSJZY6-BR-Q5r6HgkMba1sIeK19eQMA&ehbc=2E312F"},
 {id:"japan",n:"일본 Japan",cap:"Tokyo",safe:1,order:2,first:"2015-05-10",us:"무비자",kr:"무비자 (90일)",cur:"(JPY) Yen = 9.2",lang:"Japanese",volt:"100 Volt / 50·60 Hz",drive:"좌측 차선",lat:35.68,lng:139.69,visited:true},
 {id:"morocco",n:"모로코 Morocco",cap:"Rabat",safe:2,order:3,first:"2022-11-20",us:"무비자",kr:"무비자 (90일)",cur:"(MAD) Dirham = 140",lang:"Arabic / French",volt:"220 Volt / 50 Hz",drive:"우측 차선",lat:34.02,lng:-6.84,visited:true}
];

// 사진: photos 폴더에 사진을 올린 뒤 src:"photos/파일명.jpg" 추가 (src 없으면 색 상자로 표시)
const PHOTOS = [
 {country:"peru",title:"마추픽추",src:"",color:"#7cb342"},
 {country:"peru",title:"쿠스코 광장",src:"",color:"#e0a030"},
 {country:"japan",title:"도쿄 야경",src:"",color:"#5a7fd0"},
 {country:"morocco",title:"마라케시 시장",src:"",color:"#d0624a"}
];

// 여행기: body 는 줄바꿈 두 번으로 문단 구분
const POSTS = [
 {id:1,country:"peru",date:"2019-03-05",title:"마추픽추 가는 길",body:"새벽 기차를 타고 아구아스 칼리엔테스에 도착했다.\n\n버스로 오르는 길, 안개가 걷히자 도시가 나타났다. (여기에 실제 여행기를 쓰세요)"},
 {id:2,country:"japan",date:"2015-05-12",title:"도쿄 사흘",body:"첫날은 아사쿠사, 둘째 날은 시부야.\n\n(여기에 실제 여행기를 쓰세요)"}
];
