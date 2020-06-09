class Room < ApplicationRecord

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :category
  
  #親であるroomにタグ付する意味のエイリアス
  #これでtagテーブルにタグ情報を登録できる
  acts_as_taggable

  mount_uploader :image, ImageUploader
  
end
