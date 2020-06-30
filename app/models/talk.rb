class Talk < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :category
  
  belongs_to :room
  belongs_to :user
  
  mount_uploader :image, TalkUploader
end
