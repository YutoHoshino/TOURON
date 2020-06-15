class RoomsController < ApplicationController

  def index
    #タグ絞り込み
    if params[:tag_name]
      @rooms = Room.tagged_with("#{params[:tag_name]}")
    end
  end

  def new
    @rooms = Room.new
    @rooms.users << current_user
  end

  def create
    @user = current_user
    @room = @user.rooms.build(room_params)
    @room.save
    redirect_to root_path
  end


  private
  def room_params

    params.require(:room).permit(:image, :name, :description, :category_id, :period, :tag_list, user_ids: [])
  end

end
