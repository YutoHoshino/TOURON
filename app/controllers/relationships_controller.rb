class RelationshipsController < ApplicationController
  before_action :set_user

  def create
    following = current_user.follow(@user)
    if following.save
      flash[:success] = 'ユーザーをフォローしました'
      redirect_to root_path
    else
      flash.now[:alert] = 'ユーザーのフォローに失敗しました'
      redirect_to follow_mypages_path
    end
  end

  def destroy
    following = current_user.unfollow(@user)
    if following.destroy
      flash[:success] = 'ユーザーのフォローを解除しました'
      redirect_to root_path
    else
      flash.now[:alert] = 'ユーザーのフォロー解除に失敗しました'
      redirect_to follow_mypages_path
    end
  end

  private

  def set_user
    @user = User.find(params[:relationship][:follow_id])
  end

end