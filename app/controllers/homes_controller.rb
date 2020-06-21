class HomesController < ApplicationController



  def index
    @rooms = Room.all.order(id: "DESC").first(10)
    @room = Room.all
    @room_random = @room.sample(9) #ランダムで９つ取得
    @category = Category.all

  end 



  def room_params
    params.require(:room).permit(:image, :name, :description, :category_id, :period, :tag_list) #使用gemの関係でカラム名はtag_listとする
  end
end

