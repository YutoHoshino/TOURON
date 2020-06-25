class TalksController < ApplicationController
  before_action :set_room
  before_action :set_ransack
  before_action :set_search

  def index
    @talk = Talk.new
    @talks = @room.talks.includes(:user)
    @rooms = Room.all
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
  
  def set_ransack
    @q = Room.ransack(params[:q])
  end

  def set_search
      @search = Room.ransack(params[:q]) 
      @search = Talk.ransack(params[:q]) 
      # roomsテーブルを検索する@serchを生成
      @results = @search.result 
      # 結果を@resultに代入
  end

end
