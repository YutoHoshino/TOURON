class MypagesController < ApplicationController
  
  def index
  end

  def info
  end

  def follow
    @users = User.all
  end

  def edit_user

    # ユーザー
    @user = current_user
  end

  def updata_user
    @user = current_user
    if @user.update(username: updata_params[:username], email: updata_params[:email], password: updata_params[:password], image: updata_params[:image], profile: updata_params[:profile])
      redirect_to root_path
    end
  end

  def search
    @rooms = Room.search(params[:search])
  end

  private
 
  def updata_params
    params.require(:user).permit(:username, :email, :image, :profile)
  end
end
