class Room < ApplicationRecord

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :category

  has_many :talks
  has_many :likes, dependent: :destroy
  belongs_to :user
  #親であるroomにタグ付する意味のエイリアス
  #これでtagテーブルにタグ情報を登録できる
  acts_as_taggable

  mount_uploader :image, ImageUploader

  def likes_by?(user)
    likes.where(user_id: user.id).exists?
  end

end
