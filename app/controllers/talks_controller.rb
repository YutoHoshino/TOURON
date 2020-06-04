class TalksController < ApplicationController


  def index
    
  end

  def new
    @talk = Talk.new
  end

  def create
    Talk.create(talks_params)
    redirect_to root_path
  end


  def talks_params
    params.require(:talk).permit(:text, :image)
  end

end
