class Talk < ApplicationRecord
  # belongs_to :room
  # belongs_to :user
  
  mount_uploader :image, ImageUploader
end
