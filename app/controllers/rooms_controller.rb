class RoomsController < ApplicationController

  def index
    #タグ絞り込み
    if params[:tag_name]
      @rooms = Room.tagged_with("#{params[:tag_name]}")
    end
  end

  def new
    @rooms = Room.new
  end

  def create
    Room.create(room_params)
    redirect_to root_path
  end


  private
  def room_params

    params.require(:room).permit(:image, :name, :description, :category_id, :period, :tag_list, :user_ids)
  end

end
