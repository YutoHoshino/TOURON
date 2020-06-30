$->
  class FavArticle
    constructor: ($el) ->
      # インスタンス作成したときの引数をコンストラクタで受け取ってjqueryobjにして$el変数に格納
      @$el = $($el)
      # いいねボタン探して$likesButton変数に格納
      @$likesButton = @$el.find('.js-likes-button')
      # いいね総数表示要素を取得して$likesCount変数に格納
      @$likesCount = @$el.find('.js-likes-count')
      # イベントリスナー呼び出し
      @setEventListener()

    setEventListener: ->
      # ボタンをクリックした際のイベントリスナー
      @$likesButton.on 'click', (e) =>
        # Ajax呼び出し
        @_setLikesAjax(e)

        _setLikesAjax: (e)->
      $this = $(e.currentTarget)
      # 記事idを取得
      articleId = $this.data('id')
      # destroyアクションへのリクエストURL
      unLikeURL = '/articleunlike/' + articleId
      # createアクションへのリクエストURL
      likeURL = '/articlelike/' + articleId
      # もしクリックした要素がいいねされてなかったら
      if $this.hasClass('icon-fav-off')
        $.ajax({
          # createアクションにリクエスト飛ばす
          url: likeURL
          # POSTメソッドで
          type: 'POST'
          # キャッシュは保持しない
          cache: false
          # 記事idを送る
          data: {
            'article_id': articleId
          }
          # 帰ってくるデータはjson形式で
          datatype: 'json'
        })
        # Ajax通信が成功した場合
        .done (data) =>
          # 灰色ハートのクラスを削除し赤いハートのクラスを付与
          $this.removeClass('icon-fav-off').addClass('icon-fav-on')
          # いいね総数を表示
          @$likesCount.text(data[0].likes_count)

           else
        $.ajax({
          url: unLikeURL
          type: 'DELETE'
          cache: false
          data: {
            'article_id': articleId
          }
          datatype: 'json'
        })
        .done (data) =>
          $this.removeClass('icon-fav-on').addClass('icon-fav-off')
          @$likesCount.text(data[0].likes_count)

    # いいねボタンといいね総数をwrapしている.js-article-likesをすべて取得
    favButtons = document.querySelectorAll('.js-article-likes')
    # ループ回して一個一個インスタンス生成
    for favButton in favButtons
      new FavArticle(favButton)