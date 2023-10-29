const e=()=>{// id="add-text"のinputタグの値を受け取る
let e=document.getElementById("add-text").value;// 受け取った後に入力欄を初期化する
document.getElementById("add-text").value="",n(e)},t=e=>{// 更に１つ上の親タグ(ulタグのincomplete-list)からみて子タグ(div)を削除
document.getElementById("incomplete-list").removeChild(e)},n=e=>{// [DOM追加]divタグ生成
let d=document.createElement("div");// divタグ内にclassを追加
d.className="list-row";// [DOM追加]liタグ生成
let l=document.createElement("li");// liタグにinputTextを挿入
l.innerText=e;// [DOM追加]button(完了)タグ生成
let i=document.createElement("button");i.innerText="完了",i.addEventListener("click",()=>{// 押された完了ボタンの親タグ(div)を未完了リストから削除
let e=i.parentNode;t(e);// 完了リストに追加する要素
let d=i.parentNode,l=d.firstElementChild.innerText;// div以下(liとbutton)を初期化してdivタグだけにする
d.textContent=null;// liタグを生成
let m=document.createElement("li");m.innerText=l;// buttonタグを生成
let c=document.createElement("button");c.innerText="戻す",c.addEventListener("click",()=>{// 押された戻すボタンの親タグ(div)を完了リストから削除
let e=c.parentNode;document.getElementById("complete-list").removeChild(e);// テキスト取得
let t=c.parentNode.firstChild.innerText;n(t)}),//divタグ(addTarget)の子要素に各要素を設定
d.appendChild(m),d.appendChild(c),// 完了リストにdivタグ(addTarget)を追加
document.getElementById("complete-list").appendChild(d)});// (DOM追加)button(削除)タグ生成
let m=document.createElement("button");m.innerText="削除",m.addEventListener("click",()=>{// 押された削除ボタンの親タグ(div)を取得
let e=m.parentNode;t(e)}),// divタグの子要素に各要素を設定
d.appendChild(l),d.appendChild(i),d.appendChild(m),// 未完了リストに追加
document.getElementById("incomplete-list").appendChild(d)};document.getElementById("add-button").addEventListener("click",()=>e());//# sourceMappingURL=index.404fb85a.js.map

//# sourceMappingURL=index.404fb85a.js.map
