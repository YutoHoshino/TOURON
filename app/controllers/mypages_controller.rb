class MypagesController < ApplicationController
  before_action :set_ransack

  def index
    # 検索
    @search = Room.ransack(params[:q]) 
    @search = Talk.ransack(params[:q]) 
    @results = @search.result 

    # ユーザー
    @user = current_user
  end

  private
  # 検索
  def set_ransack
    @q = Room.ransack(params[:q])
  end
end
