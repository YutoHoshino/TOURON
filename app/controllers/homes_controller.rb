class HomesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_ransack
  # before_action :user

  def index
    @rooms = Room.all.order(id: "DESC").first(10)
    @room = Room.all.first(9)
    @room_random = Room.order("RAND()") #ランダムで９つ取得
    @category = Category.order("RAND()").first(4)
    @users = User.where.not(id: current_user.id).order("RAND()")
    @room_random1 = Room.where(category_id: "1")
    @room_random2 = Room.where(category_id: "2")
    @room_random3 = Room.where(category_id: "4")

    render
  end 

  def search
    @search = Room.ransack(params[:q]) 
    @search = Talk.ransack(params[:q]) 
    # roomsテーブルを検索する@serchを生成
    @results = @search.result 
    # 結果を@resultに代入
  end

  private
    def set_ransack
      @q = Room.ransack(params[:q])
    end


  def room_params
    params.require(:room).permit(:image, :name, :description, :category_id, :period, :tag_list) #使用gemの関係でカラム名はtag_listとする
  end
end

