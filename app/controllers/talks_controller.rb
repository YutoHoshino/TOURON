class TalksController < ApplicationController
  before_action :set_room
  
  def index
    @talk = Talk.new
    @talks = @room.talks.includes(:user)
    #@room.talksで部屋に紐づいたtalks情報の取得
    #includesはN+1問題回避のため。
    #アソシエーション組んであれば関連づいたデータの取得は可能。@talks.user.nameなど
    @user = @talks.group(:user_id).maximum(:id)
    #同一のuser_idでグループ化、グループの中でtalkの主キーの最大値をとる。
    @users = @user.sort_by{ |_, v| v }.reverse
    #value(talkの主キー)順でソートして降順にするためreverse。
    @image = current_user.image
    @rooms = Room.find(params[:room_id])
    gon.room = @rooms.period
  end
  
  def create
    @talk = @room.talks.new(talks_params)
    if @talk.save
      respond_to do |format|
      format.json
      end
    else
      @messages = @group.messages.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      redirect_to room_talks_path(room.id)
  end
end

  def talks_params
    params.require(:talk).permit(:text, :image, :status_id).merge(user_id: current_user.id)
  end

  def set_room
    @room = Room.find(params[:room_id])
  end
  
end
