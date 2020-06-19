class TalksController < ApplicationController
  before_action :set_room

  def index
    @talk = Talk.new
    @talks = @room.talks.includes(:user)
    @user = Talk.where(room_id: params[:room_id].to_i).includes(:user)
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
