class UsersController < ApplicationController
  def show

    @user = current_user
    @other = User.find(params[:id])
    if @other == current_user
      redirect_to mypages_path
    end
  end
end
