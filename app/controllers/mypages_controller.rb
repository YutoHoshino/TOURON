class MypagesController < ApplicationController
  before_action :set_ransack

  def index
    # 検索
    @search = Room.ransack(params[:q]) 
    @search = Talk.ransack(params[:q]) 
    @results = @search.result 

  end

  def info
  end

  def edit_user
    # 検索
    @search = Room.ransack(params[:q]) 
    @search = Talk.ransack(params[:q]) 
    @results = @search.result 

    # ユーザー
    @user = current_user
  end

  def updata_user
    @user = current_user
    if @user.update(username: updata_params[:username], email: updata_params[:email], password: updata_params[:password], image: updata_params[:image], profile: updata_params[:profile])
      redirect_to root_path
    end
  end

  private
  # 検索
  def set_ransack
    @q = Room.ransack(params[:q])
  end

  def updata_params
    params.require(:user).permit(:username, :email, :image, :profile)
  end
end
