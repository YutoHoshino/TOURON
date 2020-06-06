function onClickMenu(){
  //呼び出される関数（メソッド）の作成
  var toggleBtn = document.getElementById("menu-button");
  var toggleBtnClass = toggleBtn.getAttribute("class");
  //idのクラスを取得
        
  if (toggleBtnClass == "open") {
    //もしクラス名がopenなら下記を実行する
    toggleBtn.classList.remove('open');
    //クラスopenを削除
    toggleBtn.classList.add('close');
    //クラスcloseを追記
        
    document.getElementById('menu-open').style.display="none";
    //idのmenu-open部分を非表示に設定
    document.getElementById('menu-close').style.display="block";
    //idのmenu-close部分を表示に設定
        
  } else {
    //もしクラス名がopenでなければ下記を実行する
    toggleBtn.classList.remove('close');
    //クラスcloseを削除
    toggleBtn.classList.add('open');
    //クラスopenを追記
        
    document.getElementById('menu-open').style.display="block";
    //idのmenu-open部分を表示に設定
    document.getElementById('menu-close').style.display="none";
    //idのmenu-close部分を非表示に設定
  }
}
