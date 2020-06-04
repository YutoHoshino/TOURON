class HomesController < ApplicationController
  
  def index
    @search = Room.ransack(params[:q]) 
    # roomsテーブルを検索する@serchを生成
    @results = @search.result 
    # 結果を@resultに代入
  end
  
end
