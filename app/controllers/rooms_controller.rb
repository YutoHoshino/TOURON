class RoomsController < ApplicationController

  def new
    @rooms = Room.new
  end

  def create
    Room.create(room_params)
    redirect_to root_path
  end


  private
  def room_params
    params.require(:room).permit(:image, :name, :description, :category_id, :period, :tag)
  end

end
