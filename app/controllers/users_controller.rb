class UsersController < ApplicationController
  def show
    @q = Room.ransack(params[:q])
    @search = Room.ransack(params[:q]) 
    @search = Talk.ransack(params[:q]) 
    @results = @search.result 

    @user = current_user
    @other = User.find(params[:id])
    if @other == current_user
      redirect_to mypages_path
    end
  end
end
