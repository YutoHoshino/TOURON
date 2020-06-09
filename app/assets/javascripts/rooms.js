window.addEventListener("load", function() {

  function buildHTML(image) {
    var html =
      `
        <img src="${image}">
      `
    return html;
  }

  // 変数の定義
  let file = document.querySelector("label")

  // ファイルの中身が変更されたらconsole.log
  file.addEventListener("change", function() {

    document.querySelector("label").append(buildHTML(file[0]));
  });
});