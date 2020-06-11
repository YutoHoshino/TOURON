class Room < ApplicationRecord

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :category

  has_many :talks
  has_many :room_users
  has_many :users, through: :room_users
  
  #親であるroomにタグ付する意味のエイリアス
  #これでtagテーブルにタグ情報を登録できる
  acts_as_taggable

  mount_uploader :image, ImageUploader
  
end
