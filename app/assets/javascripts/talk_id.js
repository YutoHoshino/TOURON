function onClickMenu(number){
  //呼び出される関数（メソッド）の作成
  var toggleBtn = document.getElementById("menu-button");
  var toggleBtnClass = toggleBtn.getAttribute("class");
  //上部ボタンのidのクラスを取得
  // var tabBtn = document.getElementById("A");
  // var tabBtnid = tabBtn.getAttribute("id");
  //下部フォームのidを取得
  var elements1 = document.getElementById('box1');
  var elements2 = document.getElementById('box2');
  //ラジオボタンを取得

  console.log(elements1)
  //ラジオボタンのチェックのデフォルト値をAgreeに
  if ( number == 2 && toggleBtnClass == "open") {
    elements1.checked = false ;
    elements2.checked = true ;
    //Agree

    //もしクラス名がopenなら下記を実行する
    toggleBtn.classList.remove('open');
    //クラスopenを削除
    toggleBtn.classList.add('close');
    //クラスcloseを追記
        
    document.getElementById('menu-open').style.display="none";
    //idのmenu-open部分を非表示に設定
    document.getElementById('menu-close').style.display="block";
    //idのmenu-close部分を表示に設定
  } else if (number == 1 && toggleBtnClass == "close") {
    elements2.checked = false ;
    elements1.checked = true ;
    //Oposition

     //もしクラス名がopenでなければ下記を実行する
     toggleBtn.classList.remove('close');
     //クラスcloseを削除
     toggleBtn.classList.add('open');
     //クラスopenを追記
         
     document.getElementById('menu-open').style.display="block";
     //idのmenu-open部分を表示に設定
     document.getElementById('menu-close').style.display="none";
     //idのmenu-close部分を非表示に設定
  } else {
    
  }
}

