class HomesController < ApplicationController
  before_action :set_ransack

  def index
    @rooms = Room.last(10)
    # @tags = Tag.find(params[:room_id])
    #roomに紐付いたtagを@tagsへ
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

