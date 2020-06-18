class UsersController < ApplicationController
  def index
    @users = User.find(params[:id])
  end
  
end
