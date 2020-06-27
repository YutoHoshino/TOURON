class RoomsController < ApplicationController
 
  
  def index
    #タグ絞り込み
    if params[:tag_name]
      @rooms = Room.tagged_with("#{params[:tag_name]}")
    end
  end

  def category_search
    if params[:category_id]
      @rooms = Room.where(category_id: "#{params[:category_id]}")
      @category_id = Category.find(params[:category_id].to_i)
    end
  end


  def new
    @rooms = Room.new
    # @rooms.users << current_user
  end

  def create
    @rooms = Room.new(room_params)
    if @rooms.valid?
      @rooms.save
      redirect_to root_path and return #同メソッド内でrender、またはredirect toを2度使用するために記載。
  else
    render "rooms/new"
  end

  def edit
  end
end


  private
  def room_params
    params.require(:room).permit(:image, :name, :description, :category_id, :period, :tag_list).merge(user_id: current_user.id)
  end



end
