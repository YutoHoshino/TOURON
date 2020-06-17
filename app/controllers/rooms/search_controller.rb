class Rooms::SearchController < ApplicationController

  def index
    @search = Room.search(params[:name])
  end
end
