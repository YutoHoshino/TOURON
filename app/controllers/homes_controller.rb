class HomesController < ApplicationController
  before_action :set_ransack

  def index
    @room = Room.all
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
end
