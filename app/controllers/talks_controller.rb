class TalksController < ApplicationController

  def index
    @talks = Talk.all
    @rooms = Room.find_by(params[:id])
    gon.room = @rooms.period
  end

  def new
    @talk = Talk.new
    @talks = Talk.all
  end

  def create
    Talk.create(talks_params)
    redirect_to new_talk_path
  end

  def show
    @talks = Talk.find_by(params[:id])
  end


  def talks_params
    params.require(:talk).permit(:text, :image, :status_id)
  end

end
