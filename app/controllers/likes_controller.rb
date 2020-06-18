class LikesController < ApplicationController

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
    redirect_to '/homes'
  end
  
  def delete
    @like = Like.find_by(user_id: current_user.id, room_id: params[:room_id])
    @room = Room.find_by(id: @like.room_id)
    @like.destroy
    @like_count = Like.where(room_id: params[:room_id]).count
    redirect_to '/homes'
  end
end