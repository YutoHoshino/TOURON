class Api::TalksController < ApplicationController
  def index
    # ルーティングでの設定によりparamsの中にroom_idというキーでグループのidが入るので、これを元にDBからグループを取得する
    room = Room.find(params[:room_id])
    # ajaxで送られてくる最後のメッセージのid番号を変数に代入
    last_talk_id = params[:id].to_i
    last_talk_id2 = params[:id2].to_i
    
    # 取得したグループでのメッセージ達から、idがlast_talk_idよりも新しい(大きい)メッセージ達のみを取得
    @talks = room.talks.includes(:user).where("id > ?", [last_talk_id, last_talk_id2].max)
  end
end