class RoomsController < ApplicationController
  
  def new
    @room = Talk.new
    @rooms = Talk.all
  end

  def create
    Room.create(rooms_params)
    redirect_to toot_path
  end


  private
  def room_params
    params.require(:room).permit(:image, :name, :description)
  end
end
