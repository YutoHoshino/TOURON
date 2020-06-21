class Room < ApplicationRecord

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :category
  has_many :users

  has_many :talks
  has_many :room_users
  has_many :users, through: :room_users
  has_many :likes, dependent: :destroy
  
  #親であるroomにタグ付する意味のエイリアス
  #これでtagテーブルにタグ情報を登録できる
  acts_as_taggable

  mount_uploader :image, ImageUploader
  
  def self.search(search)
    return Room.all unless search
    Room.where('name LIKE(?)', "%#{search}%")
  end

  def likes_by?(user)
    likes.where(user_id: user.id).exists?
  end

end
