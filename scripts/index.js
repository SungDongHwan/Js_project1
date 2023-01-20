// 전역변수
let n;
const domAdd = () => {
    console.log('domAdd');
    const btn1 = document.createElement("button");
    btn1.innerHTML = '주사위 굴리기';
    document.getElementById("s4").append(btn1)
    btn1.id = "bt1";
    btn1.className = "btc";

    const btn2 = document.createElement("button");
    btn2.innerHTML = '확인';
    document.getElementById("s4").append(btn2)
    btn2.id = "bt2";
    btn2.className = "btc";
}

const domRead = () => {
    const btc = document.querySelectorAll(".btc");
    console.log(btc);
    //for loop 변수선언시 let/ const 두개만 쓰자!
    for(let i=0; i<btc.length ; i++){
        console.log(btc[i]);
    }
    // for ... in 순회
    console.log("** for  in**")

    for (let k in btc){
        console.log(btc[k]);}
    //for each 순회 
    console.log("** for each **");

    btc.forEach((item,k) => console.log(item,k))
    
    //for .. of 순회
    console.log("** for of **");

    for (let [k,v] of btc.entries()){
        console.log(k,v.innerHTML);
        if (k == 1) break;
    }
}
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
const clickBtn = (div0, bt0) => {
    bt0.addEventListener("click",()=>{
        const a= rand(1,6);
        div1.innerHTML= `<img src='./img/${a}.png'>`;
        console.log(bt0.innerHTML);
    })}

// click 함수로 바꿔서 하기
const domUpdate = () =>{
  bt1.addEventListener("click", showDice) ;
  bt2.addEventListener("click", showOk)
    

 
}
 

//주사위 번호 결과 확인
const showOk= () => {
    const radios = document.querySelectorAll("input[type=radio]");
    
    let usern;
    for(let r of radios){
        if (r.checked){
            usern = parseInt(r.value) ;
            break;
        }
    }
    console.log(n,usern)
    let tag;
    if (n == usern)tag = "o";
    // "==="는 데이터타입까지 같이보는것 , "==" 값만 같으면 같다판정
    else tag ="x";
    
    document.querySelector("form").reset();

    document.querySelector("#s1").innerHTML=`<img src ="./img/${n}.png">`
    document.querySelector("#s3").innerHTML=`<img src ="./img/${tag}.png">`
    show ("block", "none", "block" , "block", "none")


}

  //답안지
const showDice = () =>{
     n = Math.floor(Math.random()*6 )+1
 //   const s3 = document. queryselector ("#s3")
   // s3.innerHTML= `<img src='./img/${n}.png'>`;
    console.log(n)  
    show ("none", "block", "none" , "none", "block")    
}
const show = (dspS1,dspS2,dspS3,dspBt1,dspBt2)=>{
        const s1 = document.querySelector("#s1");
        const s2 = document.querySelector("#s2");
        const s3 = document.querySelector("#s3");
        const bt1 = document.querySelector("#bt1");
        const bt2 = document.querySelector("#bt2");

        s1.style.display =dspS1;
        s2.style.display =dspS2;
        s3.style.display =dspS3;
        bt1.style.display =dspBt1;
        bt2.style.display =dspBt2;

}





document.addEventListener("DOMContentLoaded",() =>{
   // document.getElementById("idh1").innerHTML = "<a href='http://google.com' >K-Digital";
    /* addevk ent listner 라는 method 호출- DOM이 로드가 다 되었다면,call back함수를 실행하라.
    이름이 없으면 =>로 대체 - 순서상으로 뒤쪽으로 미뤄서 content 가 다 로드한 다음에 스크립트를 실행,
    innerHTML- html 내의 내용을 "K-digital"로 바꾸라는것 .브레이슬릿과 괄호를 조금 주의 */
    // DOM 요소 생성 
    domAdd();
    //DOM 요소 접근 
    //domRead();
    // DOM 요소 수정
    domUpdate();
    show("none", "none", "none", "block","none");
});