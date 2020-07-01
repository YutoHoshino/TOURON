class UsersController < ApplicationController
  def show
    @talk = Talk.where(user_id: params[:id]).select(:room_id).distinct.length #自分の参加した部屋の総数を表示
    @user = current_user
    @other = User.find(params[:id])
    if @other == current_user
      redirect_to mypages_path
    end
  end
end
