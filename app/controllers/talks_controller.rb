class TalksController < ApplicationController


  def index
    @talks = Talk.all
  end

  def new
    @talk = Talk.new
    @talks = Talk.all
  end

  def create
    @talk = Talk.create(talks_params)
    if @talk.save
      respond_to do |format|
      format.json
      end
    else
    redirect_to new_talk_path
  end
end

  def talks_params
    params.require(:talk).permit(:text, :image, :status_id).merge(user_id: current_user.id)
  end

end
