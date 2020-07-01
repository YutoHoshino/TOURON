class LikesController < ApplicationController
  before_action :set_class
  # def create
  #   @room = Room.find(params[:room_id])
  #   @room.iine(current_user)
  # end

  # def destroy
  #   @room = Like.find(params[:id]).room
  #   @room.uniine(current_user)
  # end

  def create
    @like = Like.new(user_id: current_user.id, room_id: params[:room_id])
    @like.save
    @room = Room.find_by(id: @like.room_id)
    @like_count = Like.where(room_id: params[:room_id]).count
    # redirect_to '/homes'
  end
  
  def delete
    @like = Like.find_by(user_id: current_user.id, room_id: params[:room_id])
    @room = Room.find_by(id: @like.room_id)
    @like.destroy
    @like_count = Like.where(room_id: params[:room_id]).count
    # redirect_to '/homes'
  end

  private

  def set_class
    @room = Room.find(params[:room_id])
    @class = "#likes_icon_#{@room.id}"
  end

end